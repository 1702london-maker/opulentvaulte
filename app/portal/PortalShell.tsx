import Link from 'next/link'
import type { ReactNode } from 'react'
import type { PortalClient } from '@/lib/portal-auth'

const links = [
  ['Overview', '/portal'],
  ['Bookings', '/portal/bookings'],
  ['Preferences', '/portal/preferences'],
  ['Membership', '/portal/membership'],
  ['Messages', '/portal/messages'],
]

export default function PortalShell({ client, children }: { client: PortalClient; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#1c2a36]">
      <section className="border-b border-[#c8dff0] bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#4774a8]">OPV client portal</p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl">{client.full_name}</h1>
          </div>
          <nav className="flex flex-wrap gap-3">
            {links.map(([label, href]) => (
              <Link className="border border-[#c8dff0] px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#4774a8] hover:border-[#b79b5b] hover:text-[#b79b5b]" href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12">{children}</section>
    </main>
  )
}

