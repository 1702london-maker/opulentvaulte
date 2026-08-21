import { NextRequest, NextResponse } from 'next/server'
import { newsletterWelcomeEmail } from '@/lib/email-templates'
import { opvFromEmail, opvNotificationEmail, resend } from '@/lib/email'
import { getSupabaseAdmin, isEmail, jsonError, logActivity } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const db = getSupabaseAdmin()
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()
    const fullName = body.full_name ? String(body.full_name).trim() : null
    const source = body.source || req.headers.get('referer') || 'website'

    if (!email) return jsonError('Email required')
    if (!isEmail(email)) return jsonError('Invalid email address')

    const { data: client } = await db.from('clients').select('id').eq('email', email).maybeSingle()
    const { error } = await db.from('newsletter_subscribers').upsert(
      {
        email,
        full_name: fullName,
        source,
        status: 'active',
        subscribed_at: new Date().toISOString(),
        unsubscribed_at: null,
        client_id: client?.id || null,
      },
      { onConflict: 'email' }
    )
    if (error) throw error

    await logActivity({
      req,
      actorEmail: email,
      action: 'newsletter.subscribed',
      entityType: 'newsletter_subscribers',
      description: `Newsletter signup: ${email}`,
      metadata: { source },
    })

    if (resend) {
      await resend.emails.send({
        from: `OPV <${opvFromEmail}>`,
        to: email,
        subject: 'OPV - You are on the list',
        html: newsletterWelcomeEmail({ email }),
      })

      await resend.emails.send({
        from: `OPV Notifications <${opvFromEmail}>`,
        to: opvNotificationEmail,
        subject: `[OPV] New newsletter subscriber - ${email}`,
        html: newsletterWelcomeEmail({ email }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const db = getSupabaseAdmin()
    const email = String(new URL(req.url).searchParams.get('email') || '').trim().toLowerCase()
    if (!email) return jsonError('Email required')

    const { error } = await db
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed', unsubscribed_at: new Date().toISOString() })
      .eq('email', email)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json({ error: 'Unsubscribe failed' }, { status: 500 })
  }
}
