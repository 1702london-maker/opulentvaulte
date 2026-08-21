import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

const eventToStatus: Record<string, string> = {
  'email.sent': 'sent',
  'email.delivered': 'delivered',
  'email.delivery_delayed': 'delayed',
  'email.complained': 'complained',
  'email.bounced': 'bounced',
  'email.opened': 'opened',
  'email.clicked': 'clicked',
}

export async function POST(req: NextRequest) {
  try {
    const db = getSupabaseAdmin()
    const event = await req.json()
    const type = String(event.type || '')
    const emailId = event.data?.email_id || event.data?.id || event.data?.emailId
    const status = eventToStatus[type] || type || 'received'

    if (emailId) {
      await db
        .from('communications')
        .update({
          status,
          metadata: {
            resend_event: event,
            received_at: new Date().toISOString(),
          },
        })
        .or(`metadata->resend->id.eq.${emailId},metadata->resend->email_id.eq.${emailId}`)
    }

    if (type === 'email.bounced' || type === 'email.complained') {
      const recipient = event.data?.to?.[0] || event.data?.recipient
      if (recipient) {
        await db
          .from('newsletter_subscribers')
          .update({ status: type === 'email.bounced' ? 'bounced' : 'complained' })
          .eq('email', String(recipient).toLowerCase())
      }
    }

    await logActivity({
      req,
      action: 'resend.webhook',
      entityType: 'communications',
      description: status,
      metadata: event as Json,
    })

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Resend webhook error:', error)
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 })
  }
}
