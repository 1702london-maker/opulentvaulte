import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin()
      .from('clients')
      .select('*, enquiries(*), bookings(*), memberships(*), communications(*)')
      .eq('id', params.id)
      .single()

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin client detail error:', error)
    return NextResponse.json({ error: 'Failed to load client' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const body = await req.json()
    const allowed = [
      'full_name',
      'phone',
      'whatsapp',
      'company',
      'city',
      'country',
      'preferred_channel',
      'membership_tier',
      'membership_status',
      'guardian_id',
      'preferences',
      'is_corporate',
      'is_vip',
      'is_blocked',
      'nda_signed',
      'nda_signed_at',
      'newsletter_subscribed',
      'internal_notes',
      'tags',
    ]
    const patch = Object.fromEntries(Object.entries(body).filter(([key]) => allowed.includes(key)))
    const { data, error } = await getSupabaseAdmin().from('clients').update(patch).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'client.updated', entityType: 'client', entityId: params.id, description: 'Client updated', metadata: patch as Json })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin client update error:', error)
    return NextResponse.json({ error: 'Failed to update client' }, { status: 500 })
  }
}
