import type { ReactNode } from 'react'
import type { PortalAffiliate } from '@/lib/portal-auth'

export default function AffiliateShell({ affiliate, children }: { affiliate: PortalAffiliate; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#1c2a36]">
      <section className="border-b border-[#c8dff0] bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#4774a8]">OPV affiliate portal</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl">{affiliate.full_name}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[#6f879d]">{affiliate.company || 'Private affiliate'}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12">{children}</section>
    </main>
  )
}

