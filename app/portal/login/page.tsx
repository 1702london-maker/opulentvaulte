import PortalLoginForm from './PortalLoginForm'
import Link from 'next/link'

export default function PortalLoginPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-5 py-16 text-[#1c2a36] md:px-8">
      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#4774a8]">Client portal</p>
          <h1 className="mt-5 max-w-xl font-serif text-4xl font-normal leading-[1.05] md:text-5xl">
            Private access.
            <br />
            <em className="text-[#4774a8]">Approved only.</em>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#6f879d]">
            Sign in with the email and password issued after OPV authorises your account.
          </p>
          <PortalLoginForm />
        </div>

        <aside className="border border-[#c8dff0] bg-white/75 p-7 md:mt-24">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#b79b5b]">Need access?</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight">Request an OPV account.</h2>
          <p className="mt-5 text-sm leading-7 text-[#6f879d]">
            OPV accounts are created after a private enquiry, booking or membership approval.
            Submit your brief and the team will confirm access details.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex border border-[#4774a8] px-7 py-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#4774a8] transition hover:border-[#b79b5b] hover:text-[#b79b5b]"
          >
            Sign up / request access
          </Link>
        </aside>
      </section>
    </main>
  )
}
