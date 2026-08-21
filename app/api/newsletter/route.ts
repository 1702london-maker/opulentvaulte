import { NextRequest, NextResponse } from 'next/server'
import { escapeHtml, opvFromEmail, resend } from '@/lib/email'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ error: 'Supabase admin environment is not configured' }, { status: 503 })
    }
    const db = supabaseAdmin as any

    const { email, full_name, source } = await req.json()
    const cleanEmail = String(email || '').trim().toLowerCase()
    const fullName = full_name ? String(full_name).trim() : null

    if (!cleanEmail) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    const { error } = await db
      .from('newsletter_subscribers')
      .upsert(
        {
          email: cleanEmail,
          full_name: fullName,
          source: source || 'website',
          status: 'active',
          subscribed_at: new Date().toISOString(),
        },
        { onConflict: 'email' }
      )

    if (error) throw error

    await db
      .from('clients')
      .update({
        newsletter_subscribed: true,
        newsletter_subscribed_at: new Date().toISOString(),
      })
      .eq('email', cleanEmail)

    if (resend) {
      await resend.emails.send({
        from: `OPV <${opvFromEmail}>`,
        to: cleanEmail,
        subject: 'OPV - You are on the list',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #1A2733;">
            <div style="background:#1B6CA8;padding:24px 30px;color:white;letter-spacing:5px;text-transform:uppercase;">OPV</div>
            <div style="padding:36px 30px;border:1px solid #C8DFF0;border-top:0;">
              <p style="font-family: Georgia, serif; font-size:24px; margin-top:0;">You are on the list.</p>
              <p style="line-height:1.8;color:#3A5068;">Expect quiet announcements: new residences, seasonal fleet arrivals, empty legs and private dining access that does not appear publicly.</p>
              <p style="line-height:1.8;color:#3A5068;">No marketing noise. You can unsubscribe at any time by replying to this email.</p>
              <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9FB5C7;">Opulent Vault Limited · ${escapeHtml(opvFromEmail)}</p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}
