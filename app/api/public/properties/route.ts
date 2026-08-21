import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const params = new URL(req.url).searchParams
    let query = createServerClient()
      .from('properties')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(Math.min(Number(params.get('limit') || 24), 100)) as any

    if (params.get('city')) query = query.eq('city', params.get('city'))
    if (params.get('type')) query = query.eq('property_type', params.get('type'))
    if (params.get('available')) query = query.eq('available', params.get('available') === 'true')

    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Public properties error:', error)
    return NextResponse.json({ error: 'Failed to load properties' }, { status: 500 })
  }
}
