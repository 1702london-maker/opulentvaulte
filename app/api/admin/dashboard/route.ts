import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const monthStart = new Date()
    monthStart.setDate(1)
    monthStart.setHours(0, 0, 0, 0)

    const [
      enquiries,
      unread,
      clients,
      activeMembers,
      bookings,
      properties,
      vehicles,
      newsletters,
    ] = await Promise.all([
      db.from('enquiries').select('id', { count: 'exact', head: true }),
      db.from('enquiries').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      db.from('clients').select('id', { count: 'exact', head: true }),
      db.from('memberships').select('tier', { count: 'exact' }).eq('status', 'active'),
      db.from('bookings').select('total_amount,status').gte('created_at', monthStart.toISOString()),
      db.from('properties').select('id', { count: 'exact', head: true }).eq('active', true),
      db.from('vehicles').select('id', { count: 'exact', head: true }).eq('active', true),
      db.from('newsletter_subscribers').select('id', { count: 'exact', head: true }).eq('status', 'active'),
    ])

    const revenue = (bookings.data || [])
      .filter((booking: any) => ['confirmed', 'in_progress', 'completed'].includes(booking.status))
      .reduce((sum: number, booking: any) => sum + Number(booking.total_amount || 0), 0)

    const tierCounts = (activeMembers.data || []).reduce((acc: Record<string, number>, item: any) => {
      acc[item.tier] = (acc[item.tier] || 0) + 1
      return acc
    }, {})

    return NextResponse.json({
      enquiries: enquiries.count || 0,
      unread_enquiries: unread.count || 0,
      clients: clients.count || 0,
      active_memberships: activeMembers.count || 0,
      membership_by_tier: tierCounts,
      monthly_revenue_gbp: revenue,
      active_properties: properties.count || 0,
      active_vehicles: vehicles.count || 0,
      newsletter_subscribers: newsletters.count || 0,
    })
  } catch (error) {
    console.error('Admin dashboard error:', error)
    return NextResponse.json({ error: 'Failed to load dashboard' }, { status: 500 })
  }
}
