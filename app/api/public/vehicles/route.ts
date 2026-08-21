import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const params = new URL(req.url).searchParams
    let query = createServerClient()
      .from('vehicles')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(Math.min(Number(params.get('limit') || 24), 100)) as any

    if (params.get('category')) query = query.eq('category', params.get('category'))
    if (params.get('based_at')) query = query.eq('based_at', params.get('based_at'))

    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Public vehicles error:', error)
    return NextResponse.json({ error: 'Failed to load vehicles' }, { status: 500 })
  }
}
