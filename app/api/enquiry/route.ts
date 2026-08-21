import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, opvFromEmail, opvNotificationEmail, prettyService, resend } from '@/lib/email'
import { supabaseAdmin } from '@/lib/supabase'
import type { EnquiryService, Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

const allowedServices: EnquiryService[] = [
  'stays',
  'drive',
  'eat',
  'shop',
  'fly',
  'yacht',
  'security',
  'membership',
  'affiliates',
  'partners',
  'careers',
  'newsletter',
  'general',
  'press',
]

function normaliseService(value: unknown): EnquiryService {
  const service = String(value || 'general')
    .toLowerCase()
    .replace(/not sure.*/, 'general')
    .replace(/something else.*/, 'general')
    .replace(/affiliate.*/, 'affiliates')
    .replace(/partner.*/, 'partners')
    .trim()

  return allowedServices.includes(service as EnquiryService) ? (service as EnquiryService) : 'general'
}

function getIp(req: NextRequest) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || null
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || 'there'
}

export async function POST(req: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ error: 'Supabase admin environment is not configured' }, { status: 503 })
    }
    const db = supabaseAdmin as any

    const body = await req.json()
    const fullName = String(body.full_name || body.name || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const phone = body.phone ? String(body.phone).trim() : null
    const service = normaliseService(body.service)
    const message = body.message ? String(body.message) : null
    const pageUrl = String(body.page_url || body.page || req.headers.get('referer') || 'website')
    const metadata = {
      ...(typeof body.metadata === 'object' && body.metadata ? body.metadata : {}),
      userAgent: req.headers.get('user-agent'),
    } as Json

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data: client, error: clientError } = await db
      .from('clients')
      .upsert(
        {
          full_name: fullName,
          email,
          phone,
          source: pageUrl,
        },
        { onConflict: 'email' }
      )
      .select('id')
      .single()

    if (clientError) throw clientError

    const priority = service === 'security' ? 1 : service === 'fly' || service === 'yacht' ? 2 : 3
    const { data: enquiry, error: enquiryError } = await db
      .from('enquiries')
      .insert({
        client_id: client?.id,
        full_name: fullName,
        email,
        phone,
        service,
        subject: `${prettyService(service)} enquiry`,
        message,
        metadata,
        page_url: pageUrl,
        status: 'new',
        priority,
      })
      .select('id')
      .single()

    if (enquiryError) throw enquiryError

    await db.from('activity_log').insert({
      actor_type: 'api',
      actor_email: email,
      action: 'enquiry.created',
      entity_type: 'enquiry',
      entity_id: enquiry?.id,
      description: `New ${service} enquiry from ${fullName}`,
      metadata: { service, page_url: pageUrl } as Json,
      ip_address: getIp(req),
    })

    if (resend) {
      const safeName = escapeHtml(fullName)
      const safeEmail = escapeHtml(email)
      const safePhone = escapeHtml(phone || 'Not provided')
      const safeMessage = escapeHtml(message || 'No message')
      const safeService = escapeHtml(prettyService(service))
      const safeMeta = escapeHtml(JSON.stringify(metadata, null, 2))

      await resend.emails.send({
        from: `OPV Notifications <${opvFromEmail}>`,
        to: opvNotificationEmail,
        subject: `[OPV] New ${service.toUpperCase()} enquiry - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1A2733;">
            <div style="background:#1B6CA8;padding:24px;color:white;letter-spacing:3px;text-transform:uppercase;">OPV - New Enquiry</div>
            <div style="padding:28px;border:1px solid #C8DFF0;background:#F7FBFE;">
              <p><strong>Service:</strong> ${safeService}</p>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
              <p><strong>Phone:</strong> ${safePhone}</p>
              <p><strong>Message:</strong><br>${safeMessage.replace(/\n/g, '<br>')}</p>
              <pre style="white-space:pre-wrap;color:#3A5068;background:white;border:1px solid #C8DFF0;padding:16px;">${safeMeta}</pre>
            </div>
          </div>
        `,
      })

      await resend.emails.send({
        from: `OPV Concierge <${opvFromEmail}>`,
        to: email,
        subject: 'OPV - We have received your enquiry',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #1A2733;">
            <div style="background:#1B6CA8;padding:24px 30px;color:white;letter-spacing:5px;text-transform:uppercase;">OPV</div>
            <div style="padding:36px 30px;border:1px solid #C8DFF0;border-top:0;">
              <p style="font-family: Georgia, serif; font-size:24px; margin-top:0;">${escapeHtml(firstName(fullName))},</p>
              <p style="line-height:1.8;color:#3A5068;">We have received your ${safeService.toLowerCase()} enquiry. A member of the OPV team will be in touch within two hours, often sooner.</p>
              <p style="line-height:1.8;color:#3A5068;">For urgent movement, call or WhatsApp <a href="tel:+447385694230" style="color:#1B6CA8;">+44 7385 694230</a>.</p>
              <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9FB5C7;">Opulent Vault Limited · hello@opulentvault.co.uk</p>
            </div>
          </div>
        `,
      })

      await db.from('communications').insert({
        client_id: client?.id,
        enquiry_id: enquiry?.id,
        direction: 'outbound',
        channel: 'email',
        from_address: opvFromEmail,
        to_address: email,
        subject: 'OPV - We have received your enquiry',
        template_used: 'enquiry_confirmation',
      })
    }

    return NextResponse.json({ success: true, enquiry_id: enquiry?.id })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 })
  }
}
