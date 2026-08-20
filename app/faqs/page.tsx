"use client";

export default function FaqsPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[614px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="A cinematic, low-angle shot of a grand, multi-generational private members club interior."
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgXa5cAw9AbJwgGW-JR7n9Xhyiz8MmqC3jC4HV7SLLIbvVC-Mjztg1qET2_3_NiaVpwx1VHVD2_SgscRhHd7Csq3l8U8vUYpHXWro5PU9KAID20X-oEZTJI431prsL6MCOrC4oPkTNnSLT4nEZ0g-nTppWOvjpek3nMIA7e07DOj9k-9p1Wgl1Nr6Fo4REk-KdejF_TRnNmMfCpB5DmqQO9Sf-gRfley9H8IibHxGaBR5H0FrJ6Qckbw')" }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 w-full px-margin-desktop pb-16 max-w-container-max mx-auto">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-3xl">Everything You Need to Know.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl">Guidance for the global elite. Explore our frequently asked questions regarding the Opulent Vault ecosystem.</p>
        </div>
      </header>

      {/* Jump Navigation */}
      <section className="sticky top-[72px] z-40 bg-primary-container champagne-border">
        <div className="max-w-container-max mx-auto px-margin-desktop py-4 flex overflow-x-auto gap-10 no-scrollbar whitespace-nowrap">
          <a className="font-label-caps text-label-caps text-secondary hover:opacity-80 transition-opacity" href="#about">About</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all" href="#booking">Booking</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all" href="#stays">Stays</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all" href="#dining">Dining</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all" href="#security">Security</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all" href="#membership">Membership</a>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-4xl mx-auto px-margin-mobile md:px-0 py-section-gap space-y-24">
        {/* Category: About */}
        <section className="scroll-mt-40" id="about">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-secondary"></span>
            <h2 className="font-label-caps text-label-caps text-secondary uppercase">About the Vault</h2>
          </div>
          <div className="space-y-4">
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">What defines the OPV standard of service?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The OPV standard is built upon the philosophy of the &quot;Discerning Guardian.&quot; We prioritize quiet luxury, absolute discretion, and proactive management of our members&apos; lifestyles. Every service is delivered with a &quot;soft-close&quot; precision—deliberate, high-performance, and entirely seamless.
                </p>
              </div>
            </div>
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">Is membership global or regional?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Membership with Opulent Vault is inherently global. While our physical headquarters are located in key metropolitan hubs, our concierge network and security teams operate across six continents to ensure continuity of care wherever you reside or travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Booking */}
        <section className="scroll-mt-40" id="booking">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-secondary"></span>
            <h2 className="font-label-caps text-label-caps text-secondary uppercase">Booking &amp; Procedures</h2>
          </div>
          <div className="space-y-4">
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">How far in advance should I book private aviation?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  For domestic charters, we can often facilitate a takeoff within 4 hours. For transcontinental journeys, we recommend a 24-hour window to ensure the selection of your preferred aircraft and bespoke cabin provisioning.
                </p>
              </div>
            </div>
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">Are booking cancellations flexible for Elite members?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Elite and Black-tier members enjoy a preferential cancellation policy. While standard bookings require 48-hour notice, our high-tier members benefit from a 12-hour grace period for most lifestyle services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Badge Feature */}
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center mb-4">
            <span className="font-label-caps text-secondary text-sm font-bold">OPV</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">The Mark of Absolute Trust</h3>
          <p className="font-body-md text-on-surface-variant mt-2 max-w-sm">Every answer provided is verified by our senior lifestyle partners and legal advisors.</p>
        </div>

        {/* Category: Security */}
        <section className="scroll-mt-40" id="security">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-secondary"></span>
            <h2 className="font-label-caps text-label-caps text-secondary uppercase">VIP &amp; Security</h2>
          </div>
          <div className="space-y-4">
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">What credentials do your security details hold?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our security personnel are exclusively sourced from elite special forces and government protection agencies. Each detail lead holds a minimum of 10 years experience in high-threat environment management and executive protection.
                </p>
              </div>
            </div>
            <div className="accordion-item bg-surface-container-low border-b border-outline-variant/20 px-8 transition-colors hover:bg-surface-container">
              <button className="w-full py-8 flex justify-between items-center text-left" onClick={() => {}}>
                <span className="font-headline-sm text-headline-sm text-on-surface">Can security be arranged for private events?</span>
                <span className="material-symbols-outlined text-secondary">expand_more</span>
              </button>
              <div className="accordion-content">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Absolutely. We specialize in &quot;invisible security&quot; for private galas, dining events, and residential gatherings. Our teams provide a secure perimeter without disrupting the ambiance of your occasion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Concierge CTA Section — bg-primary-container KEPT DARK */}
      <section className="bg-primary-container py-section-gap border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface mb-6">Still Seeking Clarity?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Our dedicated concierge team is available 24/7 to provide personalized assistance for your unique requirements. Let us handle the complexities while you enjoy the results.</p>
            <div className="mt-10 flex flex-wrap gap-6">
              <button className="bg-secondary text-primary-container px-10 py-5 font-label-caps text-label-caps font-bold transition-all hover:opacity-90 active:scale-95">Speak to Concierge</button>
              <button className="border border-on-surface-variant text-on-surface px-10 py-5 font-label-caps text-label-caps font-bold transition-all hover:bg-on-surface hover:text-primary-container">Request a Callback</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square relative">
            <div
              className="w-full h-full bg-cover bg-center border-[0.5px] border-outline-variant/30"
              data-alt="A macro photograph of a bespoke gold concierge bell on a polished charcoal marble counter."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZlaEywa3tSx_Sk-CS_4xFrzbh2f81b6w0rOxcCAKNikqyTJjQSszYQQ6KdNXQCQPWZcbQk20-9SNggPh0xs9INdmiFbK0Szv-5Gy6tFjlolnj4BmnzwhbsIxVXqjlVXgdQhU7k0WaUECL8fkF4lKw_rbIICZavMvTMmARn09641FiV1HsSZzu6cmv2s02E5tH5bwxz_3GI7dpq1oalZNWImRgP0LafMkEk1ZNt4bwiBHpoaE4P7Z_0Q')" }}
            ></div>
            <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block">
              <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
