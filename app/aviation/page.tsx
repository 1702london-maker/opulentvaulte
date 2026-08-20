import AIConciergeSection from "@/components/AIConciergeSection";

export default function AviationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoVjXnYf_MB_UDEosmhaecT6ZKq4cSoDhjJBAMhEW4YLAiiX8a6XAJ4U_SXVmjYN4RsWY4TZU5ryTvfoyA8S5QW3yt5Wgqe_S_BC2xRHwXGL1dfzyE8zULasswMlrhBUNtKw3dAU_2p3__V7Wn94SOMtX7BZnZu4ahp0We83yf-UTpdzOqn-y6cOdaWRBKXeUGkuRi0NXHT4X6pffkruAyYmtcFcPGVEzgIkx2aoyoVSDh6-_WWdNqM5_Q2Lp-y0xk1pPhPDvOnDEx" alt="Private Jet" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-[0.3em]">Opulent Vault Aviation</span>
            <h1 className="font-serif text-display-xl text-white mb-8 leading-[1.1]">Redefining the Skies.</h1>
            <p className="font-sans text-body-lg text-white/80 mb-12 max-w-xl">Bespoke aviation solutions tailored to the world&apos;s most discerning travelers. From transcontinental private jets to precision helicopter transfers.</p>
            <div className="flex gap-6">
              <button className="bg-on-primary text-primary px-8 py-4 font-label-caps text-label-caps">Explore Fleet</button>
              <button className="border border-white/30 text-white px-8 py-4 font-label-caps text-label-caps hover:bg-surface-container-low/10 transition-colors">Request Charter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Jet Charter */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Private Jet Charter</span>
            <h2 className="font-serif text-headline-lg text-primary">The Art of the Ascent</h2>
          </div>
          <div className="hidden md:block max-w-md text-right">
            <p className="font-sans text-body-md text-on-surface-variant">Access over 7,000 aircraft worldwide. Our global network ensures the perfect vessel is ready whenever you are.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { num: "01", label: "Light Jets", title: "Phenom 300E", desc: "Ideal for short hops and regional business travel.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3grbHDWTCBk7taDQrAE7DvIsBeR6OF1EaQGaOVRCMnwEbkur1pEy4nu9UlVyMT6GR9zTJTkwyAhJGLQjsHzn3G_cBdx-VBQM9ISy_U7--WuhE0FGLDRsnUY-sKdS_4tP1rDfLwTZgbgw9YUhOmAdU_IYpatIRpJVLOcEWQX0Xmph-H5uPQvMW5wO6HzkVNx6kBvbWzHn4o2zjBR1E-_4_eqLlP5FnWzOYFKHM4QaDnYVQulRS3pMFQ585ctLUi4xJOiXvo5mM_Vn4" },
            { num: "02", label: "Mid-Size", title: "Citation Latitude", desc: "The perfect balance of range, comfort, and efficiency.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJDiQiU412hiOEJjp2o3SJNF61fe71hV-Yq0zXfixCVoU_j4RY1woKzLCzj-925oxdxrOlFBuu063iib6xDCdo0Akapm_oZwhLpcLvhO3aOjfR3QxoiaFw7_Z86Bk6RBiA5o4x8PCAShcCUvmXGW_nqtqbTjaflZvtQGTf99TcYl2kbFJZziLMn7LlQ0s6D7U-OI3j6FDiHTflF6TmjWysNTcNizdIi_CAT3YlkRyXoBZ6WoHh9KxLy461r6zMc02bsNDEGNYQqN_a" },
            { num: "03", label: "Heavy Jets", title: "Challenger 650", desc: "Spacious transcontinental cabins for up to 12 passengers.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWxoEpX8Xg6rnNtALX_k8I_EDYRA39_3x6m4nfyS6XViJthFqUoWkL-DB4x72Bu2FFivaOyAN_MnQH58y1z1p-5yNvTslDGttF3lOpgUq2JnmAfJjCPc2XfHYbthQ5hv-_-jexAQXfF3HaxXTks20LS7-LvuqOrAOe7q4c_hKFDmYBts9hbwW8HzDxHd1Xada-Mkb4wq0A8Pp2Zr3f1JB9ulVIE0cpZ4YkOMRuioqbrQBsAaMb6T9yzNWWxzz6zAwbkJ3gkfUtdY-s" },
            { num: "04", label: "Long Range", title: "Global 7500", desc: "Unmatched range and ultra-luxury for global missions.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJmQdPa7R_i3qbTZGL6F_wgtjW4WepchWa4BNfR7xrbc3LnGj4JDLSSoFvwIlbuBBQhdTE7xcFPs7-vNbJsmeZwxb2si-qKm4ZoX52H8mXmvsyx1cODklJ-CpxOCeX0uVLIXx_dmaIzauI4wfNS6psBRMFn7YiWFikkZS2JSh2qoP4Xf0AyEZdG20UtBw7Igmz1HotEdQrIq5ANHXVBk93x9eLdx2huia9DmuSEcV972Oe6B9pWUM5FVp5pRUh8ElUjagA-tY4cpx2" },
          ].map((jet) => (
            <div key={jet.num} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={jet.src} alt={jet.title} data-placeholder="true" />
              </div>
              <span className="font-label-caps text-label-caps text-secondary block mb-2">{jet.num}. {jet.label.toUpperCase()}</span>
              <h3 className="font-serif text-headline-md mb-2">{jet.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant">{jet.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Helicopter Charters */}
      <section className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Helicopter Charters</span>
              <h2 className="font-serif text-headline-lg text-primary mb-8 leading-tight">Precision in Every Mile.</h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-12">Bypass the city grid. Our helicopter fleet provides seamless transitions between airports, urban centres, and remote resorts.</p>
              <ul className="space-y-6">
                {[
                  { icon: "airport_shuttle", text: "Airport Transfers: LHR to Central London in 12 minutes." },
                  { icon: "location_city", text: "City Hopping: Swift urban travel between global financial hubs." },
                  { icon: "landscape", text: "Resort Access: Direct landings at exclusive mountain or coastal estates." },
                ].map((item) => (
                  <li key={item.icon} className="flex items-center space-x-4 border-b border-outline-variant/30 pb-4">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    <span className="font-sans text-body-md">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV53I2Cxk-wr3uVYVLb_CwKYaTdITsRZUE8nMiX2NAoIguizFDOBvi5j9xLoj5jNV5niV5zGdVbG2pKVzyCsAX-Wo7pQkqfUzERtPHFq0Y3C-m7yWQq9eE-eT0XrcwrBFWQa7LT8kbkdPPIpmCEPjUS1s_qPiZgGHHWJmOxnHNgQHODp57CA6fBu_CiWqnTQiogW2hZeqqv_GVR05rHMTKsVL5f-K14gJWrdfS0ej1MjkZHCOVGS9MkgdQl0fm_sba5__Uh_hpNP2l" alt="Helicopter city" data-placeholder="true" />
              </div>
              <div>
                <img className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU9fHWHHYWaTl_n7THuTG0F5jPzuP4L4nr87wF4jGJGnG57gEbuiP3BgDdfvqnHAuTVvxYkq2jXPiEaULM4aM3QmVTDhmGMA1sOoy0mbLJFi_jr1acsAwzKFfUeR6NJPyTA2a79Cm4wi_2yRu5HhIEGzKS2f-VptsfBmH9rAetVKFlN0eQZxAUihNvaMP55vvjjkC1cnXkYo136hfWj5C85DrJobY_cpjrWp4k5PxGE7Xs7ZpnwqUnJGjw9pm7zAYADSpGRmD11z4k" alt="Helicopter mountain" data-placeholder="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Services */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">VIP Services</span>
          <h2 className="font-serif text-headline-lg text-primary">Beyond the Cabin</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "concierge", title: "Meet & Greet", desc: "A personal concierge awaits your arrival at the aircraft steps, handling all formalities with absolute discretion." },
            { icon: "bolt", title: "Fast Track", desc: "Expedited security and immigration protocols designed for travelers where every second is of strategic value." },
            { icon: "weekend", title: "Lounge Access", desc: "Unwind in private FBO lounges featuring Michelin-standard catering and fully equipped boardrooms." },
          ].map((s) => (
            <div key={s.title} className="text-center p-8 border border-outline-variant/20 hover:border-secondary/30 transition-colors group">
              <div className="mb-6"><span className="material-symbols-outlined text-5xl text-primary">{s.icon}</span></div>
              <h3 className="font-serif text-headline-md mb-4">{s.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Charter Enquiry */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Charter Enquiry</span>
            <h2 className="font-serif text-headline-lg text-primary mb-8">Begin Your Journey</h2>
            <p className="font-sans text-body-lg text-on-surface-variant mb-12">Our specialists are available 24/7 to provide a tailored quote. Expect a response within 15 minutes.</p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center border border-secondary rounded-full"><span className="material-symbols-outlined text-secondary">call</span></div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Direct Line</p>
                  <p className="font-sans text-body-lg font-semibold">+44 (0) 20 7946 0000</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center border border-secondary rounded-full"><span className="material-symbols-outlined text-secondary">mail</span></div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Email</p>
                  <p className="font-sans text-body-lg font-semibold">charter@opulentvault.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface p-12 border border-outline-variant/20">
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-primary/20 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Departure</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans outline-none" placeholder="City or Airport" type="text" />
                </div>
                <div className="border-b border-primary/20 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Destination</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans outline-none" placeholder="City or Airport" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-primary/20 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Date</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans outline-none text-on-surface-variant" type="date" />
                </div>
                <div className="border-b border-primary/20 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Passengers</label>
                  <select className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans appearance-none outline-none">
                    <option>1-4</option><option>5-8</option><option>9-14</option><option>15+</option>
                  </select>
                </div>
              </div>
              <div className="border-b border-primary/20 pb-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Aircraft Category</label>
                <select className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans appearance-none outline-none">
                  <option>Private Jet (All Categories)</option><option>Helicopter Charter</option><option>Light Jet</option><option>Mid-Size Jet</option><option>Heavy Jet</option><option>Long Range Jet</option>
                </select>
              </div>
              <div className="border-b border-primary/20 pb-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Additional Requirements</label>
                <textarea className="w-full bg-transparent border-none p-0 focus:ring-0 font-sans resize-none outline-none" placeholder="Catering, ground transport, pets..." rows={2} />
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-all" type="submit">Request Quote</button>
            </form>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}