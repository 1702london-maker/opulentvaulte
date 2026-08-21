import { getSupabaseAdmin } from '@/lib/supabase'
import { requirePortalClient } from '@/lib/portal-auth'
import PortalShell from '../PortalShell'

export default async function PortalMembershipPage() {
  const { client } = await requirePortalClient()
  const { data } = await getSupabaseAdmin().from('memberships').select('*').eq('client_id', client.id).order('created_at', { ascending: false }).limit(1).maybeSingle()

  return (
    <PortalShell client={client}>
      <h2 className="font-serif text-5xl">Membership.</h2>
      <section className="mt-10 border border-[#c8dff0] bg-white p-8">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4774a8]">Current tier</p>
        <h3 className="mt-4 font-serif text-5xl capitalize">{String(data?.tier || client.membership_tier || 'Access')}</h3>
        <p className="mt-6 text-lg text-[#6f879d]">Status: {String(data?.status || client.membership_status || 'enquiry')}</p>
        <p className="mt-2 text-[#6f879d]">Guardian assignment and billing details will appear here when activated by OPV.</p>
      </section>
    </PortalShell>
  )
}

