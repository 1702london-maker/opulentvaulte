import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

const allowed = new Set(['status', 'category', 'rating', 'contract_signed', 'contract_active', 'notes', 'metadata'])

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const patch = Object.fromEntries(Object.entries(body).filter(([key]) => allowed.has(key)))
    const { data, error } = await getSupabaseAdmin().from('partners').update(patch).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'partner.updated', entityType: 'partner', entityId: params.id, metadata: patch as Json })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Partner update error:', error)
    return NextResponse.json({ error: 'Failed to update partner' }, { status: 500 })
  }
}
