import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await getSupabaseAdmin()
    .from('clients')
    .select('id, full_name, email, phone, whatsapp, city, country, preferred_channel, language, preferences, membership_tier, membership_status')
    .eq('supabase_user_id', user.id)
    .single()

  if (error || !data) return NextResponse.json({ error: 'Client profile not found' }, { status: 404 })

  return NextResponse.json({ data })
}

export async function PATCH(request: Request) {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const updates = {
    preferred_channel: body.preferred_channel,
    language: body.language,
    city: body.city,
    country: body.country,
    preferences: body.preferences,
  }

  const { data, error } = await getSupabaseAdmin()
    .from('clients')
    .update(updates)
    .eq('supabase_user_id', user.id)
    .select('id, full_name, email, phone, whatsapp, city, country, preferred_channel, language, preferences, membership_tier, membership_status')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
}

