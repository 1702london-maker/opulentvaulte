import { getSupabaseAdmin } from '@/lib/supabase'
import { requirePortalClient } from '@/lib/portal-auth'
import PortalShell from '../PortalShell'

export default async function PortalBookingsPage() {
  const { client } = await requirePortalClient()
  const { data } = await getSupabaseAdmin().from('bookings').select('*').eq('client_id', client.id).order('created_at', { ascending: false })

  return (
    <PortalShell client={client}>
      <h2 className="font-serif text-5xl">Bookings.</h2>
      <div className="mt-10 grid gap-5">
        {(data || []).map((booking: any) => (
          <article className="border border-[#c8dff0] bg-white p-8" key={booking.id}>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4774a8]">{booking.service}</p>
                <h3 className="mt-3 font-serif text-3xl">{booking.booking_ref || 'Private arrangement'}</h3>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.24em] text-[#6f879d]">{booking.status}</span>
            </div>
            <p className="mt-6 text-[#6f879d]">
              {booking.start_date || 'Dates pending'} {booking.end_date ? `to ${booking.end_date}` : ''}
            </p>
          </article>
        ))}
        {!data?.length && <p className="text-[#6f879d]">No bookings are attached to this client profile yet.</p>}
      </div>
    </PortalShell>
  )
}

