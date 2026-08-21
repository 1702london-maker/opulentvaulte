import AffiliateLoginForm from './AffiliateLoginForm'

export default function AffiliateLoginPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-6 py-24 text-[#1c2a36]">
      <section className="mx-auto max-w-6xl">
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#4774a8]">Affiliate portal</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
          Referrals.
          <br />
          <em className="text-[#4774a8]">Handled privately.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f879d]">
          Sign in to view your referral code, referral pipeline and commission summary.
        </p>
        <AffiliateLoginForm />
      </section>
    </main>
  )
}

