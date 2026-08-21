import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getSupabaseAdmin()
  const { data: affiliate } = await db.from('affiliates').select('*').eq('supabase_user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate profile not found' }, { status: 404 })

  const { data: referrals, error } = await db.from('affiliate_referrals').select('*').eq('affiliate_id', affiliate.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const totalCommission = (referrals || []).reduce((sum: number, referral: any) => sum + Number(referral.commission_gbp || 0), 0)
  const paidCommission = (referrals || []).reduce((sum: number, referral: any) => sum + (referral.commission_paid ? Number(referral.commission_gbp || 0) : 0), 0)

  return NextResponse.json({
    data: {
      affiliate,
      total_referrals: referrals?.length || 0,
      total_commission_gbp: totalCommission,
      paid_commission_gbp: paidCommission,
      unpaid_commission_gbp: totalCommission - paidCommission,
    },
  })
}

