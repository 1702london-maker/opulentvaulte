import { NextRequest, NextResponse } from 'next/server'
import { membershipWelcomeEmail } from '@/lib/email-templates'
import { opvFromEmail, resend } from '@/lib/email'
import { getSupabaseAdmin, jsonError, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

const tiers = ['access', 'sapphire', 'diamond', 'gold']

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const body = await req.json()
    const newTier = String(body.new_tier || body.tier || '').toLowerCase()
    if (!tiers.includes(newTier)) return jsonError('Invalid membership tier')

    const { data: membership, error: readError } = await db.from('memberships').select('*, clients(*)').eq('id', params.id).single()
    if (readError) throw readError

    const { data, error } = await db
      .from('memberships')
      .update({
        tier: newTier,
        status: 'active',
        previous_tier: membership.tier,
        tier_changed_at: new Date().toISOString(),
        tier_change_reason: body.reason || null,
        approved_date: membership.approved_date || new Date().toISOString(),
      })
      .eq('id', params.id)
      .select('*')
      .single()
    if (error) throw error

    await db.from('clients').update({ membership_tier: newTier, membership_status: 'active' }).eq('id', membership.client_id)

    if (resend && membership.clients?.email) {
      await resend.emails.send({
        from: `OPV Membership <${opvFromEmail}>`,
        to: membership.clients.email,
        subject: `OPV - Welcome to ${newTier} membership`,
        html: membershipWelcomeEmail({ full_name: membership.clients.full_name, tier: newTier }),
      })
    }

    await logActivity({ req, action: 'membership.upgraded', entityType: 'membership', entityId: params.id, description: `Membership upgraded to ${newTier}` })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Membership upgrade error:', error)
    return NextResponse.json({ error: 'Failed to upgrade membership' }, { status: 500 })
  }
}
