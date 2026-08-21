import PortalLoginForm from './PortalLoginForm'

export default function PortalLoginPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-6 py-24 text-[#1c2a36]">
      <section className="mx-auto max-w-6xl">
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#4774a8]">Client portal</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
          Private access.
          <br />
          <em className="text-[#4774a8]">One secure link.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f879d]">
          Sign in to view OPV bookings, membership details, preferences and private messages.
        </p>
        <PortalLoginForm />
      </section>
    </main>
  )
}

