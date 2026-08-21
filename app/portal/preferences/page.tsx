import { requirePortalClient } from '@/lib/portal-auth'
import PortalShell from '../PortalShell'

export default async function PortalPreferencesPage() {
  const { client } = await requirePortalClient()

  return (
    <PortalShell client={client}>
      <h2 className="font-serif text-5xl">Preferences.</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Preference label="Preferred contact" value={client.preferred_channel || 'Email'} />
        <Preference label="Language" value={client.language || 'English'} />
        <Preference label="City" value={client.city || 'Not set'} />
        <Preference label="Country" value={client.country || 'United Kingdom'} />
      </div>
      <pre className="mt-8 overflow-auto border border-[#c8dff0] bg-white p-6 text-sm text-[#6f879d]">{JSON.stringify(client.preferences || {}, null, 2)}</pre>
    </PortalShell>
  )
}

function Preference({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#c8dff0] bg-white p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4774a8]">{label}</p>
      <p className="mt-4 text-xl text-[#1c2a36]">{value}</p>
    </div>
  )
}

