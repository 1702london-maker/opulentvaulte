import { NextRequest, NextResponse } from 'next/server'
import { adminReplyEmail } from '@/lib/email-templates'
import { opvFromEmail, resend } from '@/lib/email'
import { getSupabaseAdmin, jsonError, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const { subject = 'A note from OPV', message } = await req.json()
    if (!message) return jsonError('Message required')

    const { data: enquiry, error } = await db.from('enquiries').select('id, client_id, email').eq('id', params.id).single()
    if (error) throw error

    let sendStatus = 'queued'
    let sendData: unknown = null
    let sendError: unknown = null
    if (resend) {
      const result = await resend.emails.send({
        from: `OPV Concierge <${opvFromEmail}>`,
        to: enquiry.email,
        subject,
        html: adminReplyEmail({ message }),
      })
      sendStatus = result.error ? 'failed' : 'sent'
      sendData = result.data
      sendError = result.error
    }

    const { data: communication, error: commsError } = await db
      .from('communications')
      .insert({
        client_id: enquiry.client_id,
        enquiry_id: enquiry.id,
        direction: 'outbound',
        channel: 'email',
        from_address: opvFromEmail,
        to_address: enquiry.email,
        subject,
        body: message,
        template_used: 'admin_reply',
        status: sendStatus,
        metadata: { resend: sendData, error: sendError },
      })
      .select('*')
      .single()

    if (commsError) throw commsError
    await logActivity({ req, action: 'enquiry.reply_sent', entityType: 'enquiry', entityId: params.id, description: subject })
    return NextResponse.json({ data: communication })
  } catch (error) {
    console.error('Admin enquiry reply error:', error)
    return NextResponse.json({ error: 'Failed to send reply' }, { status: 500 })
  }
}
