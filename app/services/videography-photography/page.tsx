"use client";
export default function VideographyPhotographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsNcr1f8RgY4jSHGh35y3835sFT951hYvG-yK82QYOAUiUyGbCnVRuU4Dzkoi5uqXjn9kqGDQUonhM1p3CWEBVfv9dAPHBHET74mWEK1asDbqNcVzVxeZbLjDTCmCEcnab7MdxUXeZxytcvfB7liiNO7vtqBK9MahZRqE3jBRsuPHjUOxLiuPVJBnFsymexzI25QeqkkpRB1c9TNnU8BPVmP-QN0Y8YezUDTksrWwv5gDFmUa3Oz24cQ')" }}></div>
          <div className="absolute inset-0 bg-primary-container/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">PHOTOGRAPHY & VIDEOGRAPHY</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Every Frame<br /><span className="italic font-normal">A Legacy.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            OPV connects you with the world&apos;s most discreet and accomplished visual artists — for estate documentation, private events, and cinematic lifestyle films.
          </p>
          <a href="#providers" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">View Providers</a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto text-center bg-primary-container">
        <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6">The Discerning Guardian&apos;s Lens</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">Our artists are selected not merely for technical excellence, but for discretion, emotional intelligence, and the ability to disappear into an environment while capturing its soul. Every provider operates under strict NDA.</p>
      </section>

      {/* Provider Cards */}
      <section className="py-section-gap bg-primary-container" id="providers">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">OPV Verified Providers</h2>
            <p className="text-on-surface-variant">Each studio independently verified by our curatorial board.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                studio: "Vanguard Visuals",
                specialty: "Architectural & Estate",
                rate: "Rate on Enquiry",
                desc: "Specialists in heritage property documentation and architectural portraiture. Trusted by seven of Europe&apos;s leading private estates.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7rYjbvZ8sH5EFBwYycEEkUZjkqlVu0NQ22vgaIFOVD5UeOfwmoYwTEPX6cKZbUDQ0M5_abRxWmo6Dht0LUFPcsJOIYolX4yLp0bupm_dFF58uptMy2ixFSxYwwv9JQ9RQAFHYXPPNnQ8Go7LSK8diYl51MvU1eTCqnjUM8npCnRymJ5-lYzNeHea1xxIqxpNMYJRgA5ZtPz0qRWjbtil7qadkAFH7jLkJ_wNsjec_as7f5QorqOY4XQ",
              },
              {
                studio: "Julian Thorne Studio",
                specialty: "Portrait & Legacy",
                rate: "From $8,500",
                desc: "Julian Thorne is widely regarded as the pre-eminent portrait photographer for high-net-worth families. His studio creates archival legacy documentation.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0neWXa-jTPrnZ8ePLKKo_WrO7rERg2DUfSmJnFvHNaDgDRfy4fuYjvcN7I36i3fIoatJEEaM-CdWEmLLog8lsRc46iR4q0n5w4-uxZeUzURbahXKbkugUH4O837PviFtsBYzZ5lJigE7JZreTxodxMbm64OB2nwv0nGMz9LtZwjffa8_OAcDE2BR61T8PLNYnKgSHwQczPvimGmhx2puC3mm7ekJM565WyKYWdGjp2v6SZjxAy2bi1w",
              },
              {
                studio: "Aether Motion",
                specialty: "Event & Cinematography",
                rate: "Rate on Enquiry",
                desc: "Award-winning cinematic event coverage. Aether Motion produces 4K documentary films of private galas, weddings, and corporate milestones.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm2X87z6zUvIs16UPJGJzLS4BfaRw92XfFB7IMFZjisTBzAR7xfDKdfAGXv1XNSYp1k9kreOz7OdpO7MvhFDOJ8as6tDj-7GaNfN96Qjdzp031fTf6CJJ9VXflj84qtynf4gmauEzqDCMYJimKPKwlByfnd22zOp50Uh9ohF-ponltREk2SKmdQP6GEoV19mns_myMxBjnXSl9i0NMP5VM0UP5W8quDn8GdDV5Zh1MKhhlfTyPQoL2cA",
              },
            ].map(({ studio, specialty, rate, desc, img }) => (
              <div key={studio} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-on-surface mb-1">{studio}</h3>
                  <p className="text-secondary font-label-caps text-[10px] mb-4">{specialty}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-label-caps font-bold text-on-surface">{rate}</span>
                    <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">ENQUIRE <span className="material-symbols-outlined text-sm">east</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">ARTIST SPOTLIGHT</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">Julian Thorne Studio</h2>
              <p className="text-on-surface-variant leading-relaxed">For three decades, Julian Thorne has been the invisible presence at the most significant private moments. His portraits are held in private collections across six continents. He works exclusively by referral — of which OPV is one of three global partners.</p>
              <div className="space-y-3">
                {["Archival large-format portraiture", "Family legacy documentation programmes", "Estate and property portraiture", "Private collection cataloguing"].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="text-sm text-on-surface">{s}</span>
                  </div>
                ))}
              </div>
              <a href="/concierge" className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity">REQUEST COMMISSION</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1powzcF1BP0iuoywSJVkgozaGYBol_wocBr6adIz74hOZ_ST7haqzQ9hh7dxk2cpNihCOoNKg0ZxIYWDWZ1ZaD5OV0mqZ3N2rHhGbCok1w6NAdP4xd88G1ZlIQzS1cySxbPC6FrAIcuQDEgFJljzETq836avaGECWKHTSXoeZYIF0UzZNQ4znUHWcXSRJjlCe-aAEebHtFdUxHTGi8QN3G1B4qTDd5kzgRniY8GjRgt_cZqSw_P60Mw')" }}></div>
              <div className="aspect-square bg-cover bg-center mt-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMC06VwNw-UXgh2fb1WSMLZFcQoR7wVe4KLlHoxJAwIrxPc6aBgX3RI71LpKdCkkSpRAjAgrunkzGmIvQaVYSrmsT6etoW3sQWayBIROFoE7R9YEa7B5-B1roqsftq9dEH2u6Jc_3vTz_RuwAMnWPVPZ_fu1ngo02ZjiroY1TNLwaI2mTRL9uEJut21VAPnvPlN_IgtNW2KNba8MpK0YcaE8dPZZ0K6i7cJNg1M0Vmp4-qoMXQzfw5Zg')" }}></div>
              <div className="col-span-2 aspect-video bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3vKzs4-j-eyWkjy-KeE4DXhd1LZ7dmwrCAkiXeiHyaMSkjW86XbeBAgA5UiikmMiHpYZdoAuN5qVE71DKLRf78WI2QLD9CpW4CECUyHQnQPB2BIEhETbJIBDvU_RCJoPTfgFu8ZUFhtZqR54YnERKK5WC7MAC7OG4-mCalogl1pp-CNTGPPH3F7GxyO2p8tsdsugRiIU5-5dfCrBPJtkPZFCyrD7a4oFPCeP2ustHRLlPgs1VuX7HCA')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Submit a Request</h2>
            <p className="text-on-surface-variant">Our visual arts concierge will respond within 24 hours.</p>
          </div>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Full Name</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="Your formal name" type="text" />
              </div>
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Event Date</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface" type="date" />
              </div>
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Location</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="City, venue, or estate" type="text" />
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Service Type</label>
              <select className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface appearance-none">
                <option className="bg-primary-container">Legacy Portraiture</option>
                <option className="bg-primary-container">Private Event Coverage</option>
                <option className="bg-primary-container">Cinematic Lifestyle Film</option>
                <option className="bg-primary-container">Architectural & Estate</option>
              </select>
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Additional Requirements</label>
              <textarea className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30 resize-none" placeholder="Describe any specific requirements, sensitivities, or context..." rows={3}></textarea>
            </div>
            <div className="flex justify-center pt-6">
              <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">SUBMIT REQUEST</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
