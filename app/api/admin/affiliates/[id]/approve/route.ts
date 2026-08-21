import { NextRequest, NextResponse } from 'next/server'
import { affiliateApprovedEmail } from '@/lib/email-templates'
import { opvFromEmail, resend } from '@/lib/email'
import { getSiteUrl, getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

function codeFromName(name: string) {
  return `OPV-${name.replace(/[^a-z0-9]/gi, '').slice(0, 6).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const { data: current, error: readError } = await db.from('affiliates').select('*').eq('id', params.id).single()
    if (readError) throw readError
    const referralCode = current.referral_code || codeFromName(current.full_name)
    const { data: affiliate, error } = await db
      .from('affiliates')
      .update({ status: 'approved', referral_code: referralCode })
      .eq('id', params.id)
      .select('*')
      .single()
    if (error) throw error

    if (resend) {
      await resend.emails.send({
        from: `OPV Affiliates <${opvFromEmail}>`,
        to: affiliate.email,
        subject: 'OPV - Your affiliate application has been approved',
        html: affiliateApprovedEmail({
          full_name: affiliate.full_name,
          referral_code: referralCode,
          referral_link: `${getSiteUrl()}?ref=${referralCode}`,
        }),
      })
    }

    await logActivity({ req, action: 'affiliate.approved', entityType: 'affiliate', entityId: params.id, description: `Affiliate approved: ${referralCode}` })
    return NextResponse.json({ data: affiliate })
  } catch (error) {
    console.error('Affiliate approval error:', error)
    return NextResponse.json({ error: 'Failed to approve affiliate' }, { status: 500 })
  }
}
