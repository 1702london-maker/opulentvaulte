import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, normaliseService, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const body = await req.json().catch(() => ({}))

    const { data: enquiry, error: enquiryError } = await db
      .from('enquiries')
      .select('*')
      .eq('id', params.id)
      .single()

    if (enquiryError) throw enquiryError
    if (enquiry.converted_to_booking && enquiry.booking_id) {
      return NextResponse.json({ booking_id: enquiry.booking_id, already_converted: true })
    }

    const service = normaliseService(body.service || enquiry.service)
    const bookingPayload = {
      enquiry_id: enquiry.id,
      client_id: enquiry.client_id,
      service,
      status: body.status || 'enquiry',
      start_date: body.start_date || null,
      end_date: body.end_date || null,
      currency: body.currency || 'GBP',
      quoted_amount: body.quoted_amount || null,
      total_amount: body.total_amount || body.quoted_amount || null,
      internal_notes: body.internal_notes || enquiry.message || null,
      service_detail: {
        source: 'enquiry_conversion',
        original_subject: enquiry.subject || null,
        original_message: enquiry.message || null,
        metadata: enquiry.metadata || {},
      } as Json,
    }

    const { data: booking, error: bookingError } = await db
      .from('bookings')
      .insert(bookingPayload)
      .select('*')
      .single()

    if (bookingError) throw bookingError

    await db
      .from('enquiries')
      .update({ status: 'in_progress', converted_to_booking: true, booking_id: booking.id })
      .eq('id', params.id)

    await db
      .from('affiliate_referrals')
      .update({ booking_id: booking.id, status: 'converted' })
      .eq('enquiry_id', params.id)

    await logActivity({
      req,
      action: 'enquiry.converted',
      entityType: 'enquiry',
      entityId: params.id,
      description: `Enquiry converted to booking ${booking.booking_ref || booking.id}`,
      metadata: { booking_id: booking.id } as Json,
    })

    return NextResponse.json({ booking_id: booking.id, booking })
  } catch (error) {
    console.error('Enquiry conversion error:', error)
    return NextResponse.json({ error: 'Failed to convert enquiry' }, { status: 500 })
  }
}
