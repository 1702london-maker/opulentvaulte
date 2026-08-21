import { getSupabaseAdmin } from '@/lib/supabase'
import { requirePortalClient } from '@/lib/portal-auth'
import PortalShell from '../PortalShell'
import MessageComposer from './MessageComposer'

export default async function PortalMessagesPage() {
  const { client } = await requirePortalClient()
  const { data } = await getSupabaseAdmin().from('communications').select('*').eq('client_id', client.id).order('created_at', { ascending: true })

  return (
    <PortalShell client={client}>
      <h2 className="font-serif text-5xl">Messages.</h2>
      <section className="mt-10 border border-[#c8dff0] bg-white p-8">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4774a8]">Thread placeholder</p>
        <div className="mt-8 space-y-5">
          {(data || []).map((message: any) => (
            <article className="max-w-3xl border border-[#e2edf6] p-5" key={message.id}>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#6f879d]">{message.direction} · {message.channel}</p>
              <h3 className="mt-3 font-serif text-2xl">{message.subject || 'OPV message'}</h3>
              <p className="mt-3 leading-7 text-[#6f879d]">{message.body || 'Message content pending.'}</p>
            </article>
          ))}
          {!data?.length && <p className="text-[#6f879d]">Your OPV message thread will appear here once the concierge team replies.</p>}
        </div>
        <MessageComposer />
      </section>
    </PortalShell>
  )
}
