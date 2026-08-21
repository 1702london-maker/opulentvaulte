import { NextRequest, NextResponse } from 'next/server'
import { enquiryConfirmationEmail, enquiryNotificationEmail } from '@/lib/email-templates'
import { opvFromEmail, opvNotificationEmail, resend } from '@/lib/email'
import { cleanString, getIp, getSupabaseAdmin, isEmail, jsonError, logActivity, normaliseService, priorityByService, upsertClient } from '@/lib/api'
import type { Json } from '@/lib/database.types'
import { isRateLimited } from '@/lib/rate-limit'
import { sanitizeObject, sanitizeText } from '@/lib/sanitize'

export const dynamic = 'force-dynamic'

function firstAvailable(...values: unknown[]) {
  for (const value of values) {
    const clean = sanitizeText(value)
    if (clean) return clean
  }
  return null
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) return jsonError('Content-Type must be application/json', 415)

    const ip = getIp(req) || 'unknown'
    if (await isRateLimited(`enquiry:${ip}`)) return jsonError('Too many requests. Please try again shortly.', 429)

    const db = getSupabaseAdmin()
    const body = await req.json()
    const fullName = firstAvailable(body.full_name, body.name)
    const email = String(body.email || '').trim().toLowerCase()
    const phone = sanitizeText(body.phone, 80)
    const service = normaliseService(body.service || body.page)
    const message = firstAvailable(body.message, body.brief, body.notes)
    const pageUrl = firstAvailable(body.page_url, body.page, req.headers.get('referer'))
    const rawMetadata = sanitizeObject(typeof body.metadata === 'object' && body.metadata ? body.metadata : {})
    const affiliateRef = sanitizeText(body.referral_code, 80) || sanitizeText(req.cookies.get('opv_ref')?.value, 80)
    const metadata = {
      ...rawMetadata,
      payload: body.payload || null,
      requestedService: body.service || null,
      page: body.page || null,
      pageUrl,
      referrer: req.headers.get('referer'),
      utm_source: (rawMetadata as any).utm_source || null,
      utm_medium: (rawMetadata as any).utm_medium || null,
      utm_campaign: (rawMetadata as any).utm_campaign || null,
      referral_code: affiliateRef,
      userAgent: req.headers.get('user-agent'),
    } as Json

    if (!fullName || !email) return jsonError('Missing required fields: full_name and email')
    if (!isEmail(email)) return jsonError('Invalid email address')

    const clientId = await upsertClient({
      fullName,
      email,
      phone,
      source: pageUrl || 'website',
      metadata,
    })

    const priority = priorityByService[service] || 3
    const { data: enquiry, error } = await db
      .from('enquiries')
      .insert({
        client_id: clientId,
        full_name: fullName,
        email,
        phone,
        service,
        subject: `${service.toUpperCase()} enquiry`,
        message,
        metadata,
        status: 'new',
        priority,
        page_url: pageUrl,
        referrer: req.headers.get('referer'),
        utm_source: (rawMetadata as any).utm_source || null,
        utm_medium: (rawMetadata as any).utm_medium || null,
        utm_campaign: (rawMetadata as any).utm_campaign || null,
      })
      .select('id')
      .single()

    if (error) throw error

    if (affiliateRef) {
      const { data: affiliate } = await db
        .from('affiliates')
        .select('id')
        .eq('referral_code', affiliateRef)
        .in('status', ['approved', 'active', 'elite'])
        .maybeSingle()

      if (affiliate?.id) {
        await db.from('affiliate_referrals').insert({
          affiliate_id: affiliate.id,
          client_id: clientId,
          enquiry_id: enquiry.id,
          status: 'lead',
          source: pageUrl || 'website',
          metadata: { referral_code: affiliateRef, service } as Json,
        })
      }
    }

    if (service === 'affiliates') {
      await db.from('affiliates').upsert(
        {
          full_name: fullName,
          email,
          phone,
          company: sanitizeText(body.company, 160),
          city: sanitizeText(body.city, 120),
          source: pageUrl || 'website',
          audience: message,
          notes: JSON.stringify(rawMetadata),
        },
        { onConflict: 'email' }
      )
    }

    if (service === 'membership') {
      const tierText = `${body.tier || ''} ${message || ''}`.toLowerCase()
      const tier = tierText.includes('gold')
        ? 'gold'
        : tierText.includes('diamond')
          ? 'diamond'
          : tierText.includes('sapphire')
            ? 'sapphire'
            : 'access'

      await db.from('memberships').insert({
        client_id: clientId,
        tier,
        status: 'enquiry',
        internal_notes: message,
      })
    }

    await logActivity({
      req,
      actorEmail: email,
      action: 'enquiry.created',
      entityType: 'enquiry',
      entityId: enquiry.id,
      description: `New ${service} enquiry from ${fullName}`,
      metadata: { service, client_id: clientId } as Json,
    })

    if (resend) {
      const notification = await resend.emails.send({
        from: `OPV Notifications <${opvFromEmail}>`,
        to: opvNotificationEmail,
        replyTo: email,
        subject: `[${priority === 1 ? 'URGENT' : 'OPV'}] New ${service.toUpperCase()} enquiry - ${fullName}`,
        html: enquiryNotificationEmail({
          service,
          full_name: fullName,
          email,
          phone,
          message,
          metadata,
          enquiry_id: enquiry.id,
          priority,
        }),
      })

      const confirmation = await resend.emails.send({
        from: `OPV Concierge <${opvFromEmail}>`,
        to: email,
        subject: 'OPV - We have received your enquiry',
        html: enquiryConfirmationEmail({ full_name: fullName, service, enquiry_id: enquiry.id }),
      })

      await db.from('communications').insert([
        {
          client_id: clientId,
          enquiry_id: enquiry.id,
          direction: 'outbound',
          channel: 'email',
          subject: `[OPV] New ${service} enquiry`,
          body: 'Internal notification sent',
          from_address: opvFromEmail,
          to_address: opvNotificationEmail,
          template_used: 'enquiry_notification',
          status: notification.error ? 'failed' : 'sent',
          metadata: {
            resend: notification.data || null,
            error: notification.error || null,
          },
        },
        {
          client_id: clientId,
          enquiry_id: enquiry.id,
          direction: 'outbound',
          channel: 'email',
          subject: 'OPV - We have received your enquiry',
          body: 'Client confirmation sent',
          from_address: opvFromEmail,
          to_address: email,
          template_used: 'enquiry_confirmation',
          status: confirmation.error ? 'failed' : 'sent',
          metadata: {
            resend: confirmation.data || null,
            error: confirmation.error || null,
          },
        },
      ])
    }

    return NextResponse.json({ success: true, enquiry_id: enquiry.id })
  } catch (error) {
    console.error('Enquiry API error:', error)
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 })
  }
}
