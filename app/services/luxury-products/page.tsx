"use client";
export default function LuxuryProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[720px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOFdziqc_686B8C1iPPwHxftFxuiaJdvAsVDXS_su7vwGD2kVRmyK23CcSAj_5jNkYl3Jdh-sv5JiG9kdXvDxV4ub3aXHnqQdVa1TLm-QQShQlJu3cjI5YxVc7tJxO2FNpyAOiMjc7Okxr4bJ5dtSQ-WzR7rkFLjeQlwsSQFFKv8c69gTjHjo50I4yvQRM0ubDERVQjFbyLIFynmnRww-EndsLzDfusg2ryq6hhRb5s5pZ79UL4VfnrQ')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">RARE ASSETS & COLLECTIBLES</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Acquire the<br /><span className="italic font-normal">Exceptional.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            From perpetual calendar chronographs to ultra-rare spirits — OPV provides access to the world&apos;s most coveted physical assets with complete provenance verification.
          </p>
          <a href="#products" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">Browse Assets</a>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-primary-container py-6 border-b border-outline-variant/20">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex gap-8">
            {["All Assets", "Timepieces", "Fine Art", "Bespoke Vehicles", "Rare Spirits"].map((tab, i) => (
              <button key={tab} className={`font-label-caps text-[11px] uppercase tracking-widest pb-1 transition-all ${i === 0 ? "text-secondary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"}`}>{tab}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="products">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              category: "TIMEPIECES",
              name: "Patek Philippe 5270P",
              subtitle: "Perpetual Calendar Chronograph in Platinum",
              price: "Price on Enquiry",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvq6AOHitpYqDZRhRwdYe5yDmnT-Ly5vsDnFAyIZZHeXMuarrWcH3mQaC1aZw9aIR2iAfMT87_f9vbB7PT-Qx-chGQVXUlE8-XFq5m-qooiYx-O36saOygkq52KNhM06v_Je08-7-RzEBpKOhf_7zOuKTpl1QaPpEFLZYkk6DtQHsfKTUel9GQvHyabeb4fs_k_OOTjKMcbKV7QiXMPXcGcbJ4kbmK9H2xD16WOVxsNk2yF2opt8fvew",
            },
            {
              category: "VEHICLES",
              name: "Lucid Air Sapphire",
              subtitle: "1200+ hp electric super-sports sedan",
              price: "$249,000",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAxgCEDQpeXZ-enUVor6E2FRwdOIW32ssggfAwhPF_S91klAPibl14_Z6kM0oJQJGjWI1PWDCY6u2RwpI9yocpZcywPUmLVZDmrVG4Uu6DMVW86K6SASI9rFcEuRgUj6MWsIr88UAS447xxnv6aiqC1_E8gAZ7bSnuWNcXCWFkOHR2szz_qYiq1MFwka28D39jobI2CigFBuhvIFnaTUZYSfa4UZpzTZUxxnmD_79rtpfM0HvswM3wag",
            },
            {
              category: "RARE SPIRITS",
              name: "The Macallan 72 Year Old",
              subtitle: "Genesis Decanter — One of 600 worldwide",
              price: "Price on Enquiry",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo74sRxEcBbV7FQNpQSxEV0opKH5P8Q9JuDVJ6UJehfbnfmM18wtvatW9jOl9mxetvPpDG0X3r2Tm83hFag0XpLJctjeI_gj3nUa2xrRwsRVkMHLQFzrZjxRX-KH5LHXdqgT4qz42UhLizDHzEyua4s_tJRKDaAbjL1JMEfO4K55d_2p83nOeGFnmL18wySaf8aCxLgMujWg_qhXjsDv8zpoEF7BxFiNfVUcvconf7Ps8_h3sXyqD1KQ",
            },
          ].map(({ category, name, subtitle, price, img }) => (
            <div key={name} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">{category}</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="font-label-caps text-[10px] bg-primary-container/80 text-on-surface px-3 py-1">OPV VERIFIED</div>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-on-surface mb-2">{name}</h3>
                <p className="text-on-surface-variant text-sm mb-6">{subtitle}</p>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                  <span className="font-label-caps font-bold text-on-surface">{price}</span>
                  <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                    ENQUIRE <span className="material-symbols-outlined text-sm">east</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Sourcing */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="font-label-caps text-secondary tracking-widest">PRIVATE SOURCING</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">We Source What Others Cannot Find</h2>
              <p className="text-on-surface-variant leading-relaxed">Our global acquisition network spans auction houses, estate sales, private collections, and manufacturer allocations. If it exists, we can source it with full provenance documentation.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "language", title: "Global Network", desc: "Relationships with 400+ vetted dealers, estates, and private collectors across 60 countries." },
                  { icon: "verified_user", title: "Provenance Security", desc: "Every acquisition includes full chain-of-custody documentation and authentication certificates." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl mt-1">{icon}</span>
                    <div>
                      <h4 className="font-label-caps text-on-surface mb-2">{title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-container p-12 border border-outline-variant/20">
              <h3 className="font-display-lg text-2xl text-on-surface mb-8">Submit a Sourcing Request</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="border-b border-outline-variant/50 py-3">
                  <label className="block font-label-caps text-[10px] text-secondary mb-1">Asset Category</label>
                  <select className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface text-sm appearance-none">
                    <option>Timepieces</option>
                    <option>Fine Art</option>
                    <option>Rare Spirits</option>
                    <option>Bespoke Vehicles</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="border-b border-outline-variant/50 py-3">
                  <label className="block font-label-caps text-[10px] text-secondary mb-1">Item Description</label>
                  <textarea className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface text-sm placeholder:text-on-surface/20 resize-none" placeholder="Describe the asset you are seeking..." rows={3}></textarea>
                </div>
                <div className="border-b border-outline-variant/50 py-3">
                  <label className="block font-label-caps text-[10px] text-secondary mb-1">Budget Range</label>
                  <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface text-sm placeholder:text-on-surface/20" placeholder="e.g. £50,000 – £150,000" type="text" />
                </div>
                <button className="w-full bg-secondary text-primary-container py-4 font-label-caps hover:opacity-90 transition-all" type="submit">SUBMIT REQUEST</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Commission a Private Acquisition</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our acquisition specialists operate from London, Geneva, New York, and Dubai. Let us source your next exceptional asset.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SPEAK TO A SPECIALIST</a>
        </div>
      </section>
    </>
  );
}
