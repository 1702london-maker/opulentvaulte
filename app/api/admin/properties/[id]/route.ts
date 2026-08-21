import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const patch = await req.json()
    const { data, error } = await getSupabaseAdmin().from('properties').update(patch).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'property.updated', entityType: 'property', entityId: params.id, description: 'Property updated' })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin property update error:', error)
    return NextResponse.json({ error: 'Failed to update property' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { error } = await getSupabaseAdmin().from('properties').update({ active: false }).eq('id', params.id)
    if (error) throw error
    await logActivity({ req, action: 'property.archived', entityType: 'property', entityId: params.id, description: 'Property archived' })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin property archive error:', error)
    return NextResponse.json({ error: 'Failed to archive property' }, { status: 500 })
  }
}
