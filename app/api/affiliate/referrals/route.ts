import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getSupabaseAdmin()
  const { data: affiliate } = await db.from('affiliates').select('id').eq('supabase_user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate profile not found' }, { status: 404 })

  const { data, error } = await db.from('affiliate_referrals').select('*').eq('affiliate_id', affiliate.id).order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const referredEmail = String(body.referred_email || '').trim().toLowerCase()
  if (!referredEmail) return NextResponse.json({ error: 'Referred email is required' }, { status: 400 })

  const db = getSupabaseAdmin()
  const { data: affiliate } = await db.from('affiliates').select('id').eq('supabase_user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate profile not found' }, { status: 404 })

  const { data, error } = await db
    .from('affiliate_referrals')
    .insert({
      affiliate_id: affiliate.id,
      referred_email: referredEmail,
      service: body.service || 'general',
      status: 'new',
      notes: body.notes || null,
    })
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
