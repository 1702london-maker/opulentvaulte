import CrescentGalleryCard from "@/components/CrescentGalleryCard";
import Crescent2BedCard from "@/components/Crescent2BedCard";

export default function LuxuryStaysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSUWflzRxQf3v9NG7idPR4F2Ch_K5LDzCe7ThlZ_9SWM1hZYl6NIM01LtLXq-69iz-uvljmV54dfcQQDsE22Ei0wcR_tVVdhZJIbd_xuuT-lOO-hQ3dDSmIWCM017cDlVxUQ-3tJn0lroh6binHLOlgcSIYoeK1nhYNyZiRjhevxWdEjq30xZHy4jtzZMp9PRCafwSMvm6wSvetzdzZXj4E88iXTMZc7WVckGPkaAkI0xjf5j7v_wRfg')" }}></div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,18,33,0.2), rgba(11,18,33,1))" }}></div>
        </div>
        <div className="relative z-10 px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-secondary mb-4 block">Refined Living</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Exceptional Properties.<br />Verified by OPV.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">Discover a curated collection of the world&apos;s most prestigious residences, each meticulously vetted to ensure a standard of excellence that transcends the ordinary.</p>
        </div>
      </section>

      {/* Managed vs Partner Intro */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter bg-primary-container">
        <div className="p-12 bg-surface-container-low border border-outline-variant/10">
          <div className="border border-[#d4af37] rounded-full px-2 py-[2px] text-[10px] uppercase tracking-[0.1em] text-[#d4af37] inline-flex items-center bg-[rgba(212,175,55,0.05)] mb-6">OPV Managed</div>
          <h3 className="font-headline-md mb-4 text-white">The Signature Standard</h3>
          <p className="text-on-surface-variant leading-relaxed">Properties exclusively curated and fully operated by the Opulent Vault concierge team. From pre-arrival provisioning to 24/7 on-site service, we manage every detail of your stay.</p>
        </div>
        <div className="p-12 bg-primary-container border border-outline-variant/10">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <span className="font-label-caps text-on-surface-variant">Partner Hosted</span>
          </div>
          <h3 className="font-headline-md mb-4 text-white">Trusted Partnerships</h3>
          <p className="text-on-surface-variant leading-relaxed">Highly vetted residences owned by our trusted global partners. Each property undergoes a rigorous 200-point inspection to guarantee the OPV seal of quality.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[80px] z-40 bg-primary-container/95 backdrop-blur-sm border-y border-outline-variant/10">
        <div className="px-margin-desktop py-6 max-w-container-max mx-auto flex flex-wrap gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-8">
            <div className="relative group">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Location</label>
              <input className="bg-transparent border-none p-0 text-white font-body-md focus:ring-0 w-48" placeholder="Search destinations" type="text" />
            </div>
            <div className="relative group">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Guests</label>
              <select className="bg-transparent border-none p-0 text-white font-body-md focus:ring-0 w-32 appearance-none cursor-pointer">
                <option className="bg-primary-container">Any amount</option>
                <option className="bg-primary-container">1-2 Guests</option>
                <option className="bg-primary-container">3-5 Guests</option>
                <option className="bg-primary-container">6+ Guests</option>
              </select>
            </div>
            <div className="relative group">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Property Type</label>
              <select className="bg-transparent border-none p-0 text-white font-body-md focus:ring-0 w-32 appearance-none cursor-pointer">
                <option className="bg-primary-container">All Styles</option>
                <option className="bg-primary-container">Modern Villa</option>
                <option className="bg-primary-container">Chalet</option>
                <option className="bg-primary-container">Penthouse</option>
              </select>
            </div>
            <div className="relative group">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Price Range</label>
              <span className="text-white font-body-md">£2,500 - £15,000+</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-primary-container font-label-caps">
            <span className="material-symbols-outlined text-[18px]">search</span>
            Apply Filters
          </button>
        </div>
      </section>

      {/* Property Grid */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto bg-primary-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-gutter">
          {/* Property Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] mb-6 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDePvjiVQfeJkywMOVee5JnQfXCVx0LAu-xq-ljzHydnXyGaqSLlS_y1Wgeko8SCoAu0PxjUReQpIy9Z7G5KLkWVzjLLyPodv_e9kpUyPzGDMlezXdIWdesdnbdiBxrZF2ug81D2vKpD4EAOE-nonR37VGoYyCS3lp4klnLj4NBwa1XgI1o_IS2gzMrxm7PPF-RgZK7sWwwRiEo10ZXqg5KOpC1iw-wDhOt77qgVJ13ZoQ6tvJnAID5LA" alt="Azure Sanctum" />
              <div className="absolute top-4 left-4 bg-primary-container/80 backdrop-blur px-3 py-1 text-[10px] font-label-caps text-secondary">OPV Managed</div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-headline-sm text-on-surface">The Azure Sanctum</h4>
              <div className="border border-[#d4af37] rounded-full px-2 py-[2px] text-[10px] text-[#d4af37] inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </div>
            </div>
            <p className="font-label-caps text-on-surface-variant text-[11px] mb-3">Mykonos, Greece</p>
            <p className="text-on-surface-variant font-body-md line-clamp-1 mb-4">A cliftop marvel with panoramic views and private sea access.</p>
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
              <span className="text-on-surface font-label-caps">6 Guests</span>
              <span className="text-secondary font-semibold font-body-md">from £4,200 <span className="text-[12px] font-normal text-on-surface-variant">/ night</span></span>
            </div>
          </div>
          {/* Property Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] mb-6 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbf-hKa4ae46vjp1VRM_FaIzuhdSC7DJvbb09r4pz6hnDOGQODOYFW7YnKPrwRLn0fPrMw1Mx2MP7bn_3EQgHZtzSpm3qWOcOiPpaz084w0ZqGvfC8cJjC_fgJkdUNsalqQkGoVlBZ9jroTisdg8MG5dwRKdm2Qusos5qbJfTik_0fkiQNGZq50vOWNhh-i_-0HZ5HotH8_oNbWkXV5ewq5nEHwf7s73L0oIJdWsQwO1LRC5kkk2puwQ" alt="L'Eclat Alpine" />
              <div className="absolute top-4 left-4 bg-primary-container/80 backdrop-blur px-3 py-1 text-[10px] font-label-caps text-on-surface-variant">Partner Hosted</div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-headline-sm text-on-surface">L&apos;Eclat Alpine</h4>
              <div className="border border-[#d4af37] rounded-full px-2 py-[2px] text-[10px] text-[#d4af37] inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </div>
            </div>
            <p className="font-label-caps text-on-surface-variant text-[11px] mb-3">Courchevel 1850, France</p>
            <p className="text-on-surface-variant font-body-md line-clamp-1 mb-4">The pinnacle of ski-in ski-out luxury with a subterranean spa.</p>
            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
              <span className="text-on-surface font-label-caps">12 Guests</span>
              <span className="text-secondary font-semibold font-body-md">from £12,500 <span className="text-[12px] font-normal text-on-surface-variant">/ night</span></span>
            </div>
          </div>
          {/* Property Card 3 — OPV Crescent 1 Bed */}
          <CrescentGalleryCard />
          {/* Property Card 4 — OPV Crescent 2 Bed */}
          <Crescent2BedCard />
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-headline-md md:text-display-lg-mobile mb-8 text-on-surface">Your Request, Managed.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">Looking for a property that isn&apos;t listed? Our private concierge team has access to over 500 off-market estates worldwide.</p>
          <a href="/concierge" className="px-12 py-5 bg-secondary text-primary-container font-label-caps text-body-lg hover:scale-[1.02] transition-transform active:scale-95 inline-block">Speak to a Concierge</a>
        </div>
      </section>

      {/* Verification Trust Section */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto bg-primary-container">
        <div className="text-center mb-16">
          <span className="font-label-caps text-secondary mb-4 block">The OPV Seal</span>
          <h2 className="font-headline-md text-on-surface">Uncompromising Security &amp; Trust</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="text-center px-6">
            <span className="material-symbols-outlined text-[48px] text-secondary mb-6">fingerprint</span>
            <h4 className="font-headline-sm text-on-surface mb-4">Identity Verification</h4>
            <p className="text-on-surface-variant font-body-md">Rigorous background checks for all property owners and concierge staff to ensure total peace of mind.</p>
          </div>
          <div className="text-center px-6 border-x border-outline-variant/10">
            <span className="material-symbols-outlined text-[48px] text-secondary mb-6">security</span>
            <h4 className="font-headline-sm text-on-surface mb-4">Premium Insurance</h4>
            <p className="text-on-surface-variant font-body-md">Every stay is backed by our bespoke £50M comprehensive liability and asset protection coverage.</p>
          </div>
          <div className="text-center px-6">
            <span className="material-symbols-outlined text-[48px] text-secondary mb-6">fact_check</span>
            <h4 className="font-headline-sm text-on-surface mb-4">Compliance Audit</h4>
            <p className="text-on-surface-variant font-body-md">200-point safety and luxury standard audits performed quarterly on every managed property.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-margin-desktop py-section-gap max-w-3xl mx-auto bg-primary-container">
        <h2 className="font-headline-md text-on-surface mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-primary-container border border-outline-variant/10 p-6 cursor-pointer" open>
            <summary className="flex justify-between items-center font-headline-sm text-white list-none">
              How does the booking process work?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="mt-4 text-on-surface-variant leading-relaxed font-body-md">
              Our process is white-glove. After expressing interest, you are assigned a dedicated liaison who manages the contract, security deposit, and pre-arrival requests. All payments are handled via secure escrow.
            </div>
          </details>
          <details className="group bg-primary-container border border-outline-variant/10 p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-headline-sm text-white list-none">
              Can I request additional staffing?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="mt-4 text-on-surface-variant leading-relaxed font-body-md">
              Absolutely. OPV Managed properties come with basic housekeeping. Private chefs, chauffeurs, security detail, and nannies can be arranged via your concierge up to 48 hours before arrival.
            </div>
          </details>
          <details className="group bg-primary-container border border-outline-variant/10 p-6 cursor-pointer">
            <summary className="flex justify-between items-center font-headline-sm text-white list-none">
              What is the cancellation policy for luxury stays?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="mt-4 text-on-surface-variant leading-relaxed font-body-md">
              Due to the exclusive nature of these properties, our policies are strict. Typically, cancellations made 60 days prior receive a 50% refund. Membership tier holders enjoy more flexible arrangements.
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
