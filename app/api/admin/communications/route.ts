import { NextRequest, NextResponse } from 'next/server'
import { opvFromEmail, resend } from '@/lib/email'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  const { data, error } = await getSupabaseAdmin()
    .from('communications')
    .select('*, clients(*), enquiries(*)')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) return NextResponse.json({ error: 'Failed to load communications' }, { status: 500 })
  return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const to = String(body.to_address || '').trim()
    const subject = String(body.subject || 'OPV update').trim()
    const message = String(body.body || '').trim()
    if (!to || !message) return NextResponse.json({ error: 'Recipient and body are required' }, { status: 400 })

    let sentId: string | null = null
    if (resend && body.send === true) {
      const sent = await resend.emails.send({
        from: `OPV <${opvFromEmail}>`,
        to,
        subject,
        html: `<p>${message.replace(/\n/g, '<br />')}</p>`,
      })
      sentId = sent.data?.id || null
    }

    const { data, error } = await getSupabaseAdmin()
      .from('communications')
      .insert({
        client_id: body.client_id || null,
        enquiry_id: body.enquiry_id || null,
        direction: 'outbound',
        channel: body.channel || 'email',
        from_address: opvFromEmail,
        to_address: to,
        subject,
        body: message,
        template_used: body.template_used || 'admin_compose',
        status: sentId ? 'sent' : 'logged',
        metadata: { resend_id: sentId },
      })
      .select('*')
      .single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Communication compose error:', error)
    return NextResponse.json({ error: 'Failed to log communication' }, { status: 500 })
  }
}

