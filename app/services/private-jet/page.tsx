"use client";
export default function PrivateJetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoVjXnYf_MB_UDEosmhaecT6ZKq4cSoDhjJBAMhEW4YLAiiX8a6XAJ4U_SXVmjYN4RsWY4TZU5ryTvfoyA8S5QW3yt5Wgqe_S_BC2xRHwXGL1dfzyE8zULasswMlrhBUNtKw3dAU_2p3__V7Wn94SOMtX7BZnZu4ahp0We83yf-UTpdzOqn-y6cOdaWRBKXeUGkuRi0NXHT4X6pffkruAyYmtcFcPGVEzgIkx2aoyoVSDh6-_WWdNqM5_Q2Lp-y0xk1pPhPDvOnDEx')" }}></div>
          <div className="absolute inset-0 bg-primary-container/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <div className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-4 py-1 rounded-full bg-primary-container/40 backdrop-blur-sm">
            <span className="material-symbols-outlined text-secondary text-sm">flight</span>
            <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-bold">Private Aviation</span>
          </div>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Depart on<br /><span className="italic font-normal">Your Schedule.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            From light jets to ultra-long-range Global express aircraft — OPV coordinates bespoke private aviation with zero compromise on privacy, comfort, or timing.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#charter" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">Charter a Flight</a>
            <a href="#fleet" className="border border-on-surface/30 text-on-surface px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase backdrop-blur-md hover:bg-on-surface/5 transition-all inline-block">View Aircraft</a>
          </div>
        </div>
      </section>

      {/* Jet Categories */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="fleet">
        <div className="mb-16">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Aircraft Categories</h2>
          <p className="text-on-surface-variant">Every aircraft OPV-inspected and operator-verified before charter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { type: "Light Jet", model: "Phenom 300E", range: "Up to 4 hrs", capacity: "6 Passengers", icon: "flight_takeoff" },
            { type: "Mid-Size", model: "Citation Latitude", range: "Up to 6 hrs", capacity: "9 Passengers", icon: "flight" },
            { type: "Heavy Jet", model: "Challenger 650", range: "Up to 8 hrs", capacity: "12 Passengers", icon: "airlines" },
            { type: "Long Range", model: "Global 7500", range: "17+ hrs", capacity: "19 Passengers", icon: "travel" },
          ].map(({ type, model, range, capacity, icon }) => (
            <div key={model} className="bg-primary-container border border-outline-variant/10 p-10 hover:border-secondary/40 transition-all group">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">{icon}</span>
              <div className="font-label-caps text-[10px] text-secondary mb-2">{type}</div>
              <h3 className="font-headline-sm text-on-surface mb-6">{model}</h3>
              <div className="space-y-3 border-t border-outline-variant/20 pt-6">
                <div>
                  <div className="text-[10px] text-on-surface-variant uppercase mb-1">Range</div>
                  <div className="text-sm text-on-surface">{range}</div>
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant uppercase mb-1">Capacity</div>
                  <div className="text-sm text-on-surface">{capacity}</div>
                </div>
              </div>
              <a href="#charter" className="mt-6 text-secondary font-label-caps text-[10px] hover:tracking-widest transition-all flex items-center gap-2 group-hover:gap-3">
                CHARTER <span className="material-symbols-outlined text-sm">east</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Helicopter */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">HELICOPTER SERVICES</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">From Runway to Resort — Without the Queue</h2>
              <p className="text-on-surface-variant leading-relaxed">OPV helicopter services handle the final mile — and the whole journey. Airport connections, inter-city transfers, and remote resort access with the same discretion as our fixed-wing fleet.</p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {["Airport Transfers", "City Hopping", "Resort Access"].map((s) => (
                  <div key={s} className="text-center">
                    <span className="material-symbols-outlined text-secondary text-3xl mb-2">helicopter</span>
                    <p className="font-label-caps text-[10px] text-on-surface">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3grbHDWTCBk7taDQrAE7DvIsBeR6OF1EaQGaOVRCMnwEbkur1pEy4nu9UlVyMT6GR9zTJTkwyAhJGLQjsHzn3G_cBdx-VBQM9ISy_U7--WuhE0FGLDRsnUY-sKdS_4tP1rDfLwTZgbgw9YUhOmAdU_IYpatIRpJVLOcEWQX0Xmph-H5uPQvMW5wO6HzkVNx6kBvbWzHn4o2zjBR1E-_4_eqLlP5FnWzOYFKHM4QaDnYVQulRS3pMFQ585ctLUi4xJOiXvo5mM_Vn4')" }}></div>
              <div className="aspect-square bg-cover bg-center mt-8" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJDiQiU412hiOEJjp2o3SJNF61fe71hV-Yq0zXfixCVoU_j4RY1woKzLCzj-925oxdxrOlFBuu063iib6xDCdo0Akapm_oZwhLpcLvhO3aOjfR3QxoiaFw7_Z86Bk6RBiA5o4x8PCAShcCUvmXGW_nqtqbTjaflZvtQGTf99TcYl2kbFJZziLMn7LlQ0s6D7U-OI3j6FDiHTflF6TmjWysNTcNizdIi_CAT3YlkRyXoBZ6WoHh9KxLy461r6zMc02bsNDEGNYQqN_a')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Ground Services */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-on-surface text-center mb-16">VIP Ground Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { icon: "waving_hand", title: "Meet & Greet", desc: "Dedicated OPV representative at every departure and arrival. Your comfort managed from kerbside to cabin." },
            { icon: "fast_forward", title: "Fast Track", desc: "Priority security processing at over 350 global airports. Zero queue time, maximum discretion." },
            { icon: "local_bar", title: "Lounge Access", desc: "Access to exclusive FBO lounges and private terminal facilities. Not the shared executive lounge — the real thing." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-primary-container p-12 border border-outline-variant/10 hover:border-secondary/40 transition-all">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">{icon}</span>
              <h3 className="font-headline-sm text-on-surface mb-4">{title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Charter Form */}
      <section className="py-section-gap bg-primary-container" id="charter">
        <div className="px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Request a Charter</h2>
            <p className="text-on-surface-variant">Our aviation team will confirm availability and pricing within 2 hours.</p>
          </div>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Departure</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="City or airport code" type="text" />
              </div>
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Destination</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface placeholder:text-on-surface/30" placeholder="City or airport code" type="text" />
              </div>
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Date</label>
                <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface" type="date" />
              </div>
              <div className="border-b border-on-surface/20 py-4">
                <label className="block font-label-caps text-[10px] text-secondary mb-1">Passengers</label>
                <select className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface appearance-none">
                  <option className="bg-primary-container">1–4 Passengers</option>
                  <option className="bg-primary-container">5–8 Passengers</option>
                  <option className="bg-primary-container">9–14 Passengers</option>
                  <option className="bg-primary-container">15+ Passengers</option>
                </select>
              </div>
            </div>
            <div className="border-b border-on-surface/20 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Aircraft Category</label>
              <select className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface appearance-none">
                <option className="bg-primary-container">Light Jet (up to 4 hrs)</option>
                <option className="bg-primary-container">Mid-Size Jet (up to 6 hrs)</option>
                <option className="bg-primary-container">Heavy Jet (up to 8 hrs)</option>
                <option className="bg-primary-container">Long Range (17+ hrs)</option>
                <option className="bg-primary-container">Helicopter</option>
              </select>
            </div>
            <div className="flex flex-col items-center gap-4 pt-6">
              <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">REQUEST CHARTER</button>
              <p className="text-xs text-on-surface-variant">Or contact us directly: +1 (800) OPV-LUXE · charter@opvluxury.com</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
