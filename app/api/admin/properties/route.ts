import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin().from('properties').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(100)
    if (params.get('city')) query = query.eq('city', params.get('city'))
    if (params.get('active')) query = query.eq('active', params.get('active') === 'true')
    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    console.error('Admin properties error:', error)
    return NextResponse.json({ error: 'Failed to load properties' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin().from('properties').insert(await req.json()).select('*').single()
    if (error) throw error
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    console.error('Admin property create error:', error)
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 })
  }
}
