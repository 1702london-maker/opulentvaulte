import AffiliateLoginForm from './AffiliateLoginForm'
import Link from 'next/link'

export default function AffiliateLoginPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-5 py-16 text-[#1c2a36] md:px-8">
      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#4774a8]">Affiliate portal</p>
          <h1 className="mt-5 max-w-xl font-serif text-4xl font-normal leading-[1.05] md:text-5xl">
            Referrals.
            <br />
            <em className="text-[#4774a8]">Approved only.</em>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#6f879d]">
            Sign in with the email and password issued after OPV approves your affiliate account.
          </p>
          <AffiliateLoginForm />
        </div>

        <aside className="border border-[#c8dff0] bg-white/75 p-7 md:mt-24">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#b79b5b]">New affiliate?</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight">Apply for partner access.</h2>
          <p className="mt-5 text-sm leading-7 text-[#6f879d]">
            Submit the affiliate application first. Once approved, OPV will email your username,
            generated password, referral code and private portal link.
          </p>
          <Link
            href="/affiliates"
            className="mt-7 inline-flex border border-[#4774a8] px-7 py-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#4774a8] transition hover:border-[#b79b5b] hover:text-[#b79b5b]"
          >
            Sign up / apply
          </Link>
        </aside>
      </section>
    </main>
  )
}
