import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin().from('memberships').select('*, clients(*)').order('created_at', { ascending: false }).limit(100)
    if (params.get('status')) query = query.eq('status', params.get('status'))
    if (params.get('tier')) query = query.eq('tier', params.get('tier'))
    const { data, error } = await query
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin memberships error:', error)
    return NextResponse.json({ error: 'Failed to load memberships' }, { status: 500 })
  }
}

