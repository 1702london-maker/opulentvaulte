import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

function cell(value: unknown) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  const db = getSupabaseAdmin()
  const [{ data: affiliates }, { data: referrals }] = await Promise.all([
    db.from('affiliates').select('*').order('created_at', { ascending: false }),
    db.from('affiliate_referrals').select('*'),
  ])

  const rows = [
    ['Affiliate', 'Email', 'Referral code', 'Status', 'Referrals', 'Estimated payout'],
    ...((affiliates || []) as any[]).map((affiliate) => {
      const related = ((referrals || []) as any[]).filter((row) => row.affiliate_id === affiliate.id)
      const payout = related.reduce((sum, row) => sum + Number(row.commission_amount || row.payout_amount || 0), 0)
      return [affiliate.full_name || affiliate.name, affiliate.email, affiliate.referral_code, affiliate.status, related.length, payout]
    }),
  ]

  return new NextResponse(rows.map((row) => row.map(cell).join(',')).join('\n'), {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': 'attachment; filename="opv-affiliate-payouts.csv"',
    },
  })
}

