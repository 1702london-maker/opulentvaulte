import { getSupabaseAdmin } from '@/lib/supabase'
import { requirePortalClient } from '@/lib/portal-auth'
import PortalShell from './PortalShell'

export default async function PortalPage() {
  const { client } = await requirePortalClient()
  const db = getSupabaseAdmin()
  const [{ data: bookings }, { data: membership }, { data: messages }] = await Promise.all([
    db.from('bookings').select('*').eq('client_id', client.id).order('created_at', { ascending: false }).limit(3),
    db.from('memberships').select('*').eq('client_id', client.id).order('created_at', { ascending: false }).limit(1).maybeSingle(),
    db.from('communications').select('*').eq('client_id', client.id).order('created_at', { ascending: false }).limit(3),
  ])

  return (
    <PortalShell client={client}>
      <div className="grid gap-6 md:grid-cols-3">
        <SummaryCard label="Membership" value={String(membership?.tier || client.membership_tier || 'Access')} />
        <SummaryCard label="Bookings" value={String(bookings?.length || 0)} />
        <SummaryCard label="Messages" value={String(messages?.length || 0)} />
      </div>
      <section className="mt-10 border border-[#c8dff0] bg-white p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#4774a8]">Latest movement</p>
        <div className="mt-6 grid gap-4">
          {(bookings || []).map((booking: any) => (
            <div className="flex flex-col justify-between border-b border-[#e2edf6] py-4 md:flex-row" key={booking.id}>
              <span className="font-serif text-2xl">{booking.booking_ref || booking.service}</span>
              <span className="text-sm uppercase tracking-[0.2em] text-[#6f879d]">{booking.status}</span>
            </div>
          ))}
          {!bookings?.length && <p className="text-[#6f879d]">No confirmed OPV bookings are attached to this portal yet.</p>}
        </div>
      </section>
    </PortalShell>
  )
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#c8dff0] bg-white p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#4774a8]">{label}</p>
      <p className="mt-6 font-serif text-4xl capitalize">{value}</p>
    </div>
  )
}

