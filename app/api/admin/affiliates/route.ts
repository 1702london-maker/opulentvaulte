import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin().from('affiliates').select('*').order('created_at', { ascending: false }).limit(100)
    if (params.get('status')) query = query.eq('status', params.get('status'))
    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin affiliates error:', error)
    return NextResponse.json({ error: 'Failed to load affiliates' }, { status: 500 })
  }
}

