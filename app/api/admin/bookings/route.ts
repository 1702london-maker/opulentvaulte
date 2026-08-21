import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin()
      .from('bookings')
      .select('*, clients(id, full_name, email, membership_tier)', { count: 'exact' })
      .order('created_at', { ascending: false })
      .limit(100)
    if (params.get('status')) query = query.eq('status', params.get('status'))
    if (params.get('service')) query = query.eq('service', params.get('service'))
    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    console.error('Admin bookings error:', error)
    return NextResponse.json({ error: 'Failed to load bookings' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const { data, error } = await getSupabaseAdmin().from('bookings').insert(body).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'booking.created', entityType: 'booking', entityId: data.id, description: `Booking created: ${data.booking_ref}` })
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    console.error('Admin booking create error:', error)
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}
