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

function payloadFrom(body: Record<string, unknown>) {
  return fields.reduce((acc, key) => {
    if (body[key] !== undefined) acc[key] = body[key]
    return acc
  }, {} as Record<string, unknown>)
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin()
      .from('empty_legs')
      .select('*')
      .order('date_from', { ascending: true })
      .limit(100)

    if (error) throw error
    return NextResponse.json({ data: data || [] })
  } catch (error) {
    console.error('Admin empty legs list error:', error)
    return NextResponse.json({ error: 'Failed to load empty legs' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const payload = payloadFrom(body)
    payload.departure_iata = String(payload.departure_iata || '').toUpperCase().trim()
    payload.arrival_iata = String(payload.arrival_iata || '').toUpperCase().trim()

    if (!payload.departure_iata || !payload.arrival_iata || !payload.date_from) {
      return NextResponse.json({ error: 'Departure, arrival and date are required' }, { status: 400 })
    }

    const { data, error } = await getSupabaseAdmin()
      .from('empty_legs')
      .insert(payload)
      .select('*')
      .single()

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin empty legs create error:', error)
    return NextResponse.json({ error: 'Failed to create empty leg' }, { status: 500 })
  }
}
