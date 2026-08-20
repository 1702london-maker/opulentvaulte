"use client";

export default function ConciergePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[921px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoFuXqjtEphtZEVoD4C3tM_sExKi-ozdNN3QfOpx3rb8lTEpXuRVKpkDy5i4941Wk1bRo9eNzBQ3Rm6H-8m5DVW2nxD_vMg_T2mkffarNo40vFqs6thUO2x4i4mR20fWnQRl8wNMXnBAxb49L_nC75kyQAAgYs8ObcWHg8QTXXfopwI4BOsuS7IvGyhg8tiHTJKZkFs350nbuMZrOf_6CmW_H0Cf091I46MJrNjqCX29DxhbVETDIwNQ')" }}></div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,18,33,0) 0%, rgba(11,18,33,0.8) 70%, rgba(11,18,33,1) 100%)" }}></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-section-gap">
          <div className="max-w-3xl">
            <span className="font-label-caps text-secondary mb-4 block tracking-[0.2em]">PRIVATE CONCIERGE</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Whatever You Need.<br />We Will Arrange It.
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="bg-primary-container py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-secondary/30 rounded-full mb-4">
                <span className="material-symbols-outlined text-secondary">verified</span>
              </div>
              <h3 className="font-headline-sm text-on-surface">Bespoke Mastery</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Every request is handled with the surgical precision of a master artisan. We do not offer packages; we craft singular responses to your unique requirements.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-secondary/30 rounded-full mb-4">
                <span className="material-symbols-outlined text-secondary">layers</span>
              </div>
              <h3 className="font-headline-sm text-on-surface">Multi-Service Fluidity</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                From securing rare vintage timepieces to managing global logistics and private security, our ecosystem operates as a singular, unified force for your convenience.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-secondary/30 rounded-full mb-4">
                <span className="material-symbols-outlined text-secondary">visibility_off</span>
              </div>
              <h3 className="font-headline-sm text-on-surface">Beyond Listings</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We exist in the space where others stop. Our network grants access to the unlisted, the unavailable, and the purely exclusive, ensuring your desires are met without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="bg-primary-container py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container-low border border-outline-variant/20 overflow-hidden flex flex-col md:flex-row">
            {/* Form Info Side */}
            <div className="md:w-2/5 relative min-h-[400px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRdQfd0Twd1mJ9bHnDy15i9dpteKO655AoqZ5pUQndqoNdusexLfxziQa5m_tgiwpmCMW7otkwM3i4ld95v7GmkE1ipQi-xjpjLIBGkaoxGW8ehpREBTReIVfyTlmMcy9llJc_V1CCNUu82EZgyLcCtfPc8QS_gmF0wP0gbgsq5lwCbWmcNLGuXs0Ko7GGoGoIMdlhbOwlm8D6A-ONluuDXXqogfed5sRvtyOZPtgbPnj72nF1C2aHIA')" }}></div>
              <div className="absolute inset-0 bg-primary-container/40 backdrop-blur-[2px]"></div>
              <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center text-[10px] font-bold text-secondary">OPV</div>
                    <span className="font-label-caps text-on-surface tracking-widest">VERIFIED SERVICE</span>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-6">Initiate Your Request</h2>
                  <p className="font-body-md text-on-surface-variant">A dedicated guardian will be assigned to your case within 15 minutes of submission.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                    <span className="font-label-caps text-on-surface-variant">24/7 Global Operations</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                    <span className="font-label-caps text-on-surface-variant">End-to-End Encryption</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Content Side */}
            <div className="md:w-3/5 p-8 md:p-16">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">FULL NAME</label>
                  <input className="bg-transparent border-b border-[rgba(229,229,225,0.2)] py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-colors" placeholder="Your formal name" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">EMAIL ADDRESS</label>
                  <input className="bg-transparent border-b border-[rgba(229,229,225,0.2)] py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-colors" placeholder="email@address.com" type="email" />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">PHONE NUMBER</label>
                  <input className="bg-transparent border-b border-[rgba(229,229,225,0.2)] py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-colors" placeholder="+1 (000) 000-0000" type="tel" />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">REQUEST TYPE</label>
                  <select className="bg-transparent border-b border-[rgba(229,229,225,0.2)] py-3 text-on-surface font-body-md focus:outline-none focus:border-secondary transition-colors appearance-none">
                    <option disabled value="">Select service category</option>
                    <option value="travel">Travel &amp; Yachting</option>
                    <option value="lifestyle">Lifestyle &amp; Personal Shopping</option>
                    <option value="events">Events &amp; Private Dining</option>
                    <option value="security">Security &amp; Protection</option>
                    <option value="other">Other Bespoke Request</option>
                  </select>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">ESTIMATED BUDGET RANGE</label>
                  <div className="flex gap-4 mt-2 overflow-x-auto pb-2">
                    {["Entry Luxury", "High Tier", "Ultra-High Net", "No Limit"].map((label) => (
                      <button key={label} className="px-4 py-2 border border-outline-variant/30 font-label-caps text-on-surface-variant hover:border-secondary hover:text-secondary transition-all whitespace-nowrap active:scale-95" type="button">{label}</button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-label-caps text-secondary text-[10px] mb-1">DESCRIPTION OF REQUEST</label>
                  <textarea className="bg-transparent border-b border-[rgba(229,229,225,0.2)] py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="Describe the specifics of your requirement in detail..." rows={4}></textarea>
                </div>
                <div className="md:col-span-2 flex justify-end items-center gap-8 mt-4">
                  <p className="text-[10px] font-label-caps text-on-surface-variant/50 max-w-[200px] text-right leading-tight">
                    BY SUBMITTING, YOU AGREE TO OUR PRIVATE SERVICE TERMS.
                  </p>
                  <button className="bg-secondary text-primary-container px-12 py-4 font-label-caps text-sm tracking-[0.2em] hover:brightness-110 transition-all active:scale-[0.98]" type="submit">
                    SUBMIT REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
