import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin()
      .from('properties')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(Math.min(Number(params.get('limit') || 24), 100))

    if (params.get('city')) query = query.eq('city', params.get('city'))
    if (params.get('type')) query = query.eq('category', params.get('type'))
    if (params.get('featured')) query = query.eq('is_featured', params.get('featured') === 'true')

    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Public properties error:', error)
    return NextResponse.json({ error: 'Failed to load properties' }, { status: 500 })
  }
}
