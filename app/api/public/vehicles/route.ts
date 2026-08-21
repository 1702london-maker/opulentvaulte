import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin()
      .from('vehicles')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(Math.min(Number(params.get('limit') || 24), 100))

    if (params.get('category')) query = query.eq('category', params.get('category'))
    if (params.get('based_at')) query = query.eq('location', params.get('based_at'))

    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Public vehicles error:', error)
    return NextResponse.json({ error: 'Failed to load vehicles' }, { status: 500 })
  }
}
