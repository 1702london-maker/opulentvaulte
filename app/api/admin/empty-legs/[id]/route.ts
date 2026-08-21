import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

const fields = [
  'departure_iata',
  'arrival_iata',
  'departure_city',
  'arrival_city',
  'date_from',
  'date_to',
  'aircraft_type',
  'max_passengers',
  'estimated_saving_pct',
  'price_from_gbp',
  'available',
  'operator',
  'notes',
]

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const patch = fields.reduce((acc, key) => {
      if (body[key] !== undefined) acc[key] = body[key]
      return acc
    }, { updated_at: new Date().toISOString() } as Record<string, unknown>)

    if (patch.departure_iata) patch.departure_iata = String(patch.departure_iata).toUpperCase().trim()
    if (patch.arrival_iata) patch.arrival_iata = String(patch.arrival_iata).toUpperCase().trim()

    const { data, error } = await getSupabaseAdmin()
      .from('empty_legs')
      .update(patch)
      .eq('id', params.id)
      .select('*')
      .single()

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin empty legs update error:', error)
    return NextResponse.json({ error: 'Failed to update empty leg' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { error } = await getSupabaseAdmin()
      .from('empty_legs')
      .delete()
      .eq('id', params.id)

    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Admin empty legs delete error:', error)
    return NextResponse.json({ error: 'Failed to delete empty leg' }, { status: 500 })
  }
}
