import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getSupabaseAdmin()
  const { data: client } = await db.from('clients').select('id, membership_tier, membership_status').eq('supabase_user_id', user.id).single()
  if (!client) return NextResponse.json({ error: 'Client profile not found' }, { status: 404 })

  const { data, error } = await db.from('memberships').select('*').eq('client_id', client.id).order('created_at', { ascending: false }).limit(1).maybeSingle()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data: data || client })
}

