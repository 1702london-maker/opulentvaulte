import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin()
      .from('enquiries')
      .select('*, clients(*), communications(*)')
      .eq('id', params.id)
      .single()

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin enquiry detail error:', error)
    return NextResponse.json({ error: 'Failed to load enquiry' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const allowed = [
      'status',
      'assigned_to',
      'priority',
      'subject',
      'message',
      'metadata',
    ]
    const patch = Object.fromEntries(Object.entries(body).filter(([key]) => allowed.includes(key)))

    const { data, error } = await getSupabaseAdmin()
      .from('enquiries')
      .update(patch)
      .eq('id', params.id)
      .select('*')
      .single()

    if (error) throw error

    await logActivity({
      req,
      action: 'enquiry.updated',
      entityType: 'enquiry',
      entityId: params.id,
      description: 'Enquiry updated',
      metadata: patch as Json,
    })

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin enquiry update error:', error)
    return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 })
  }
}
