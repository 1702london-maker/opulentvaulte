import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

const allowed = new Set(['status', 'referral_code', 'commission_rate', 'payout_status', 'notes', 'metadata'])

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const patch = Object.fromEntries(Object.entries(body).filter(([key]) => allowed.has(key)))
    const { data, error } = await getSupabaseAdmin().from('affiliates').update(patch).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'affiliate.updated', entityType: 'affiliate', entityId: params.id, metadata: patch as Json })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Affiliate update error:', error)
    return NextResponse.json({ error: 'Failed to update affiliate' }, { status: 500 })
  }
}
