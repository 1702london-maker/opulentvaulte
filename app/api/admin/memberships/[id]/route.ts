import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'
import { membershipWelcomeEmail } from '@/lib/email-templates'
import { opvFromEmail, resend } from '@/lib/email'
import { ensurePasswordUser } from '@/lib/portal-credentials'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

const allowed = new Set(['status', 'tier', 'guardian_id', 'assigned_to', 'approved_date', 'notes', 'metadata'])

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const body = await req.json()
    const patch = Object.fromEntries(Object.entries(body).filter(([key]) => allowed.has(key)))
    const { data, error } = await db.from('memberships').update(patch).eq('id', params.id).select('*, clients(*)').single()
    if (error) throw error

    if (patch.status === 'active' && data.clients?.email) {
      const credentials = await ensurePasswordUser({
        email: data.clients.email,
        fullName: data.clients.full_name,
        existingUserId: data.clients.supabase_user_id,
        role: 'client',
      })

      await db
        .from('clients')
        .update({
          supabase_user_id: credentials.userId,
          membership_tier: data.tier || data.clients.membership_tier || 'access',
          membership_status: 'active',
        })
        .eq('id', data.client_id)

      if (resend) {
        await resend.emails.send({
          from: `OPV Membership <${opvFromEmail}>`,
          to: data.clients.email,
          subject: 'OPV - Your account has been approved',
          html: membershipWelcomeEmail({
            full_name: data.clients.full_name || data.clients.email,
            tier: data.tier || 'access',
            email: data.clients.email,
            password: credentials.password,
            portal_link: `${new URL(req.url).origin}/portal/login`,
          }),
        })
      }
    }

    await logActivity({ req, action: 'membership.updated', entityType: 'membership', entityId: params.id, metadata: patch as Json })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Membership update error:', error)
    return NextResponse.json({ error: 'Failed to update membership' }, { status: 500 })
  }
}
