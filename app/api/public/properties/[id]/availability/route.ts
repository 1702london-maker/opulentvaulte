import { NextResponse } from 'next/server'
import { isSupabaseConfigured, supabase, supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

type DateRange = { from: string; to: string; reason?: string }

function normaliseBlockedDates(value: unknown): DateRange[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((item) => {
    if (typeof item === 'string') return [{ from: item, to: item }]
    if (!item || typeof item !== 'object') return []
    const row = item as Record<string, unknown>
    const from = String(row.from || row.date || row.start || '')
    const to = String(row.to || row.date || row.end || from)
    return from ? [{ from, to, reason: String(row.reason || 'Blocked') }] : []
  })
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    if (!supabaseAdmin && !isSupabaseConfigured) {
      return NextResponse.json({
        property_id: params.id,
        blocked_dates: [],
        bookings: [],
        blocked_ranges: [],
      })
    }

    const db = supabaseAdmin || supabase
    const [{ data: property, error: propertyError }, { data: bookings, error: bookingError }] = await Promise.all([
      db.from('properties').select('id, blocked_dates').eq('id', params.id).maybeSingle(),
      (db
        .from('bookings')
        .select('id, start_date, end_date, status, service_detail')
        .eq('service', 'stays')
        .in('status', ['confirmed', 'in_progress'])
        .not('start_date', 'is', null) as any),
    ])

    if (propertyError) throw propertyError
    if (bookingError) throw bookingError
    if (!property) return NextResponse.json({ error: 'Property not found' }, { status: 404 })

    const bookingRanges = (bookings || [])
      .filter((booking: any) => {
        const detail = booking.service_detail || {}
        return detail.property_id === params.id || detail.propertyId === params.id || detail.slug === params.id
      })
      .map((booking: any) => ({
        from: booking.start_date,
        to: booking.end_date || booking.start_date,
        reason: 'Booked',
      }))

    return NextResponse.json({
      property_id: params.id,
      blocked_dates: normaliseBlockedDates((property as any).blocked_dates),
      bookings: bookingRanges,
      blocked_ranges: [...normaliseBlockedDates((property as any).blocked_dates), ...bookingRanges],
    })
  } catch (error) {
    console.error('Property availability error:', error)
    return NextResponse.json({ error: 'Failed to load availability' }, { status: 500 })
  }
}
