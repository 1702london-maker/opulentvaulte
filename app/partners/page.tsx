export default function PartnersPage() {
  return (
    <>
      {/* Full-Width Hero */}
      <section className="relative h-[819px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-primary-container">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">EXCLUSIVE PARTNERSHIP</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight mb-8">
            OPV Is Selective. <br />
            <span className="italic font-normal">That Is Why Our Partners Succeed.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            We don&apos;t just list services; we curate experiences for the world&apos;s most discerning individuals. Our vetting process ensures only the absolute pinnacle of luxury joins our ecosystem.
          </p>
          <a className="bg-secondary text-primary-container px-12 py-4 font-label-caps text-lg transition-all hover:tracking-widest inline-block" href="#register">
            Apply for Selection
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="material-symbols-outlined text-4xl text-secondary">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* 6-Step Editorial Flow */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="mb-20 text-center">
          <h2 className="font-headline-md text-headline-md mb-4 uppercase tracking-widest text-on-surface">The Discerning Guardian Protocol</h2>
          <div className="h-px w-24 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            { n: "01", title: "Initial Inquiry", desc: "Submit your portfolio and business profile. We look for a history of excellence and a dedication to the extraordinary." },
            { n: "02", title: "Ethics Alignment", desc: "A deep dive into your business practices. We partner with those who value privacy, integrity, and sustainability as much as we do." },
            { n: "03", title: "Quality Audit", desc: "An anonymous audit of your service or product. We experience what our members experience to ensure absolute perfection." },
            { n: "04", title: "Verified by OPV", desc: "Upon passing audit, you receive the OPV Seal—a mark of absolute trust in the luxury world." },
            { n: "05", title: "Network Integration", desc: "Onboarding into our concierge ecosystem, connecting you directly with high-net-worth individuals and corporate entities." },
            { n: "06", title: "Continuous Review", desc: "Elite status is maintained through constant performance monitoring and exclusive member feedback loops." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="bg-[#1F1F1F] border border-[rgba(229,225,225,0.2)] p-10 flex flex-col justify-between h-80 relative overflow-hidden hover:border-secondary transition-all duration-[400ms]">
              <span className="absolute top-4 right-4 font-display-lg text-[4rem] opacity-10 leading-none text-on-surface">{n}</span>
              <div>
                {n === "01" && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center">
                      <span className="font-label-caps text-[10px] text-secondary">OPV</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
                  </div>
                )}
                {n !== "01" && <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{title}</h3>}
                <p className="text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Layout */}
      <section className="py-section-gap bg-[#f0ede8]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square bg-[#1F1F1F] border border-[rgba(229,225,225,0.2)] overflow-hidden">
                <img className="object-cover w-full h-full opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsyw6l4tBh5y0YsWjhwLBrIeHPdQL_m39bf9gxGCpIIKw36NBLCWFddW5Yw2qxrh-5lclSNrvC3867aTPWzRI0yNYDfdf4gTN0lQdjPI0OhDjaMpe9l6BAgzyL0emq7oBNouAEshL2DYgwwcxyEWJvdW_Sa0kj6QbOLmzjqpaHGI36LDNda4-sbKObSPrJZ3dA3zgR0-gdEk-T7U9a42KtC3HJvnwhwJy1XCliIqnmouuPKfFCUG1w1A" alt="Watch movement" />
              </div>
              <div className="relative aspect-[4/5] bg-[#1F1F1F] border border-[rgba(229,225,225,0.2)] overflow-hidden translate-y-12">
                <img className="object-cover w-full h-full opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynEP5I3FGGYtmjAJNh-ysWkvvN-F0FRD7dx1qnw_HWig-KuyfbatbS1tpJgVAeT7jb08s6BLRJnwTiPWiqp-YEKvRbrdTcAme7dORQoblAA1pqsklLv-bM_fcJ5fJMOsxiH7Mq1V8FBPQZPFG5idwTHFbTwW1iirbtz0bFu467GPKrjjTTPQ2oX5ttlMs62z7RpyLDZKjwglje0PKq8xF1kKx1x8VCPG8AJheH1QkSTzz0fqhdevkng" alt="Members club" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12 mt-16 lg:mt-0">
            <h2 className="font-headline-md text-headline-md mb-6 text-on-surface">Why Global Leaders Trust OPV</h2>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <div>
                  <h4 className="font-label-caps text-on-surface mb-2">Unmatched Pedigree</h4>
                  <p className="text-on-surface-variant">Our partners include multi-generational family offices and world-class artisans.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary">encrypted</span>
                <div>
                  <h4 className="font-label-caps text-on-surface mb-2">Absolute Confidentiality</h4>
                  <p className="text-on-surface-variant">Non-disclosure is the baseline of our interaction. Your brand&apos;s privacy is paramount.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary">star_rate</span>
                <div>
                  <h4 className="font-label-caps text-on-surface mb-2">Elite Referral Loop</h4>
                  <p className="text-on-surface-variant">Access a closed network of UHNW individuals who value excellence over convenience.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto bg-primary-container" id="register">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface">Selection Application</h2>
          <p className="text-on-surface-variant">Begin your journey toward becoming an OPV Verified Partner.</p>
        </div>
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <label className="font-label-caps text-[10px] text-secondary absolute -top-4 left-0 uppercase">Business Name</label>
              <input className="w-full bg-transparent border-b border-[rgba(229,225,225,0.2)] py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Enter legally registered name" type="text" />
            </div>
            <div className="relative">
              <label className="font-label-caps text-[10px] text-secondary absolute -top-4 left-0 uppercase">Service Category</label>
              <select className="w-full bg-primary-container border-b border-[rgba(229,225,225,0.2)] py-3 text-on-surface focus:outline-none appearance-none">
                <option value="">Select Primary Service</option>
                <option value="travel">Luxury Stays &amp; Travel</option>
                <option value="security">Private Security</option>
                <option value="concierge">Lifestyle Concierge</option>
                <option value="dining">Private Dining &amp; Events</option>
                <option value="aviation">Private Aviation &amp; Yachting</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <label className="font-label-caps text-[10px] text-secondary absolute -top-4 left-0 uppercase">Business Description</label>
            <textarea className="w-full bg-transparent border-b border-[rgba(229,225,225,0.2)] py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors h-32 resize-none" placeholder="Briefly describe your unique value proposition and heritage..."></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <label className="font-label-caps text-[10px] text-secondary absolute -top-4 left-0 uppercase">Contact Person</label>
              <input className="w-full bg-transparent border-b border-[rgba(229,225,225,0.2)] py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Full name of representative" type="text" />
            </div>
            <div className="relative">
              <label className="font-label-caps text-[10px] text-secondary absolute -top-4 left-0 uppercase">Email Address</label>
              <input className="w-full bg-transparent border-b border-[rgba(229,225,225,0.2)] py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="official@business.com" type="email" />
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="w-5 h-5 border-outline-variant bg-transparent text-secondary focus:ring-0" type="checkbox" />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">I agree to the OPV Confidentiality &amp; Integrity Agreement.</span>
            </label>
            <button className="w-full md:w-auto bg-secondary text-primary-container px-16 py-4 font-label-caps transition-all hover:bg-secondary/90 active:scale-95" type="submit">
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
