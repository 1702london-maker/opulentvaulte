export default function CleaningLifestylePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container/90 to-primary-container/70"></div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-secondary tracking-widest">Lifestyle & Cleaning</span>
              <div className="h-[1px] w-12 bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Immaculate Living,<br /><span className="italic font-normal">Without Compromise.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              OPV&apos;s household services bring elite, DBS-cleared professionals directly to your residence. Every detail handled. Every surface perfected.
            </p>
            <div className="pt-8">
              <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity" href="#services">View Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="services">
        <div className="mb-16">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Our Services</h2>
          <p className="text-on-surface-variant font-body-md">Curated household and lifestyle management for discerning principals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "One-Off Deep Clean",
              desc: "Comprehensive top-to-bottom deep clean including silk fabric steam treatment, marble care, and bespoke surface detailing.",
              icon: "cleaning_services",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6uxe4AlE7pPj45nRt0aEGQ3CeD6cMfzh4qEsTaTCMRP8VqumIitsJ2IfT71CdJefLTAKUCNtQkYNtGhX6HwC4gr1L82mLNGjcY02yuvq2UX0Zcu6rbE_LUv6hWpY6ePojaWyT_VGVzwSyhzFApYS9Aqer41jtOIjphWgXoDjY2r0B91ENXmwoARoL7DLdobvdoSzozXyMNN4DQf6N067nW3hMVl1E3xsSxgziHi5_Rb9Lnho0dc12uA",
            },
            {
              title: "Recurring Housekeeping",
              desc: "Scheduled professional housekeeping on a daily, weekly, or fortnightly basis. Dedicated teams, consistent standards.",
              icon: "home",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGuH2f-A_6klFyEb_okakyEw0Y8RjWFf2xI0-gp-cy2q5Cpo1532dyGwLFZ5LEFF8EpqFeCF-CAmTDMjGKRj0foZRCxIubnZil3lv2Y13jusUgUzVIMF9EcFlwShtbSTrZ_2Bu3p3L9VbCuKRYMdQA__qEzkdjNGEqAUmwwPAmhYoiueSVMhl-sbpET6GpFsrpTkiwjOgOtIG5c8H6P2iaza1I2V1EH-x48aH3aoChNL8fjW2CUS8Hfg",
            },
            {
              title: "Garment Care & Laundry",
              desc: "Expert laundering, dry cleaning, and wardrobe management. We handle couture, cashmere, and leather with specialist precision.",
              icon: "dry_cleaning",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdLJ-4IySfJ26_xfGodsT_ItNgRZQBHHPzLMvz7Rnuwv7djHonATEoN_VrSc8D4c9EzNAXwne3R-Zc_6IJt5EveT8KXZdr8I7AyoVkZBzEnGPDIyY-0Ltx58hn5ijvHxR27oOaDRgLhrkG2gdQD7NdSCbs2zpmrm6qGblRIUvEySz6U7jQr82aR5GFYrWn2syob192SCdSVSEY8zxR0VMLJTO7yZPqhFGB8XeuwKLl8DUJvdKps-1Zlg",
            },
            {
              title: "Property Turnover",
              desc: "Full property preparation between tenancies or guest visits. Hotel-grade turnover for private residences and investment properties.",
              icon: "apartment",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcydSSZPYPa7-26jCeRPQnzG9XSvkmbO5MSo4T9U74IVmv8xnO7LoTivSwP3SXGmr8yBM9hFuCPRgdLwTk9YDi76M0Z6QhlQf9nJFubHs5IBLDz1WZxH8R2zPK5pyVgCnZlS9fLcvF2H6WevMCfglUYd3MY9_ammZ0pGUQt00xTRHnDRs58QrVmw4iaO7RyxG2naXRtHv4M3FdHB7QuVeV7l2TeXAp3Pr5cwQT3vlYMJWldT3fVA1Xag",
            },
            {
              title: "Ironing & Laundry",
              desc: "Precision ironing and pressing for formal wardrobes, fine linens, and bespoke garments. Collection and delivery included.",
              icon: "iron",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbffnbcPHiTrTBRHb6bY5P6o2GSoAQQ-JWRFvqsAMlqwt4MPfz17anbzLIGwFEELcatILQ7pt_8BGwEwxwbIroGfkDhIT_b4PBOyCJsrv6lfuxT-sN0yqBwCXXBWsggqRcsBDlRJULEkyfvKOy8xV5twRBBrAbns6hhOGo1A31A3er2u2Sk3wVPWIqaIhvWMDw3kVEnKmlMn6YoiuHr8jPXjPz77uks49sYAcZZAaZ4bEmlDH-AuuTPQ",
            },
            {
              title: "OPV Smart Integration",
              desc: "Fully managed household operations: scheduling, restocking, staff coordination, and smart home management through your OPV guardian.",
              icon: "hub",
              bg: "bg-secondary",
              dark: true,
            },
          ].map(({ title, desc, icon, img, bg, dark }) => (
            <div key={title} className={`group relative overflow-hidden border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500 ${bg || "bg-primary-container"}`}>
              {img && (
                <div className="relative h-52 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                  <div className="absolute inset-0 bg-primary-container/20"></div>
                </div>
              )}
              <div className="p-8">
                <span className={`material-symbols-outlined text-3xl mb-4 block ${dark ? "text-primary-container" : "text-secondary"}`}>{icon}</span>
                <h3 className={`font-headline-sm mb-3 ${dark ? "text-primary-container" : "text-on-surface"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-primary-container/80" : "text-on-surface-variant"}`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification */}
      <section className="py-section-gap bg-primary-container border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">The Standard of Trust</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Every operative in our household services network passes the most stringent verification process in the UK private services industry.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "verified_user", title: "DBS Cleared", desc: "Enhanced Disclosure & Barring Service checks on every operative." },
              { icon: "security", title: "Fully Insured", desc: "£5M public liability insurance per operative." },
              { icon: "workspace_premium", title: "OPV Vetted", desc: "Our own 12-point verification process beyond standard checks." },
              { icon: "lock", title: "Strict NDA", desc: "All operatives sign comprehensive confidentiality agreements." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">{icon}</span>
                <h3 className="font-label-caps text-on-surface">{title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-on-surface mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How are cleaning teams selected?", a: "All operatives go through our multi-stage verification including DBS Enhanced checks, reference verification, skills assessment, and a trial placement before being admitted to the OPV network." },
            { q: "Can I request a regular assigned team?", a: "Yes. We strongly encourage dedicated team assignments for recurring clients. Your preference is noted and the same professionals attend each appointment where possible." },
            { q: "Are specialty materials handled differently?", a: "Absolutely. We maintain specialists in natural stone, antique furniture, couture textiles, and smart home systems. Please specify your needs when booking." },
            { q: "What is the minimum booking?", a: "Standard bookings begin at 3 hours. Estate management and full-property turnovers are priced on scope. Contact our concierge for a tailored assessment." },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-outline-variant/20 pb-6">
              <h3 className="font-label-caps text-on-surface mb-3">{q}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Book a Service</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our household concierge team will arrange your first appointment within 24 hours of inquiry.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">ARRANGE SERVICE</a>
        </div>
      </section>
    </>
  );
}
