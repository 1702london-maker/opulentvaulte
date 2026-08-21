import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured, supabase, supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const params = new URL(req.url).searchParams
    const today = new Date().toISOString().slice(0, 10)
    if (!supabaseAdmin && !isSupabaseConfigured) return NextResponse.json({ data: [] })

    const db = supabaseAdmin || supabase
    let query = db
      .from('empty_legs')
      .select('*')
      .eq('available', true)
      .gte('date_from', today)
      .order('date_from', { ascending: true })
      .limit(Math.min(Number(params.get('limit') || 12), 50)) as any

    if (params.get('departure')) query = query.eq('departure_iata', params.get('departure')?.toUpperCase())
    if (params.get('arrival')) query = query.eq('arrival_iata', params.get('arrival')?.toUpperCase())
    if (params.get('aircraft')) query = query.ilike('aircraft_type', `%${params.get('aircraft')}%`)

    const { data, error } = await query
    if (error) {
      const message = String(error.message || '')
      if (error.code === '42P01' || error.code === 'PGRST205' || message.includes('empty_legs')) {
        return NextResponse.json({ data: [] })
      }
      throw error
    }

    return NextResponse.json({ data: data || [] })
  } catch (error) {
    console.error('Public empty legs error:', error)
    return NextResponse.json({ error: 'Failed to load empty legs' }, { status: 500 })
  }
}
