import AIConciergeSection from "@/components/AIConciergeSection";

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img className="w-full h-full object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkWCnVBnUfwrEc4WHhcvB_h91nUW0sjIQ8-ggT_8uKB-RZVQmgWQSB8Rp2fZCVWudjBgo2iYRRY9dy2qO19kihXvb9Xxop-S3FnZGaZGo6QqnA_xzHE2sl-57yjz0ATwqFzav4c2gEAXuZZhsJgClvMZPWuxqH3r29VFwBuAHpMErvnPhLSi5SmiqMeWISR0T61KM9t8u5hn_NjYqRVVrxctKAPxaq5DkHJO-lJHBRRHZTiO6oHQzBwyNUvMQBWGeu4FoMNYJXIPEb" alt="Executive Protection" data-placeholder="true" />
        </div>
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.3em] uppercase block">Elite Security Division</span>
            <h1 className="font-serif text-headline-lg text-white leading-tight">Uncompromising Safety,<br />Absolute Discretion.</h1>
            <p className="font-sans text-body-lg text-surface-variant/80 max-w-lg">Bespoke protection strategies for the world&apos;s most discerning individuals. Our elite teams operate with surgical precision and invisible presence.</p>
            <div className="pt-8 flex gap-4">
              <a className="bg-surface-container-low text-primary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary-fixed transition-all" href="#request">Consult a Strategist</a>
              <a className="border border-white/30 text-white px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container-low/10 transition-all" href="#services">View Capabilities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="services">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">The Pillars of Protection</span>
          <h2 className="font-serif text-headline-md text-primary">Comprehensive Elite Security Solutions</h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 group overflow-hidden relative aspect-[16/9]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyTXC-y-5xbTXRH4OChyePhlGMHh1v53FUg93gr9lypbhWp1bYj7A5YS_DaVoNEDZEJakY9qvQZP-FvD6d5h8QAiyqtvnIgHGLk3nNnRCU8LXKS2NYmm3crETKlQjxuGGx3ZXgYmXnc1RnkuDqQn3BM36J5Y7RJ-1GocKeuMWrwkfeF-pB3j_gRGAnoJaod6pZHM8-EWivFfLmCO1nyQG_2cL9qA8gsB9Lbpqg4xNNO-tLYsnwrcCzzb1VGlZq3x1pD4E2l-FGw7x5" alt="Executive Protection" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-headline-md text-white mb-2">Executive Protection</h3>
              <p className="font-sans text-body-md text-white/80 max-w-md mb-6">Personal bodyguards and celebrity protection for high-profile assets requiring constant vigilance without intrusion.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Learn More</span>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden relative aspect-[4/5]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOcO-nvizVxsDOw5lr982r4SxMNZ_7tMH_U471uD8OX9IPfm91o2962kIkWlTnYgyeChun_Ery-C3akfa-TDGfacNGEwu57D7nCqIhZGqgLfxgwF1CZa1t3zErF7iPiRInLHZfHKNU4pM9V-zAe4kf1AkFlz_dP7P_xSIl1qvPSqzbC9PHB6-X499maSNOjgSDORJDWwy6VWKmiGc_Sqd3OUgn5zyr0rcFzwBADxO7lIbkmrMO6MEnh10hlJl28pzYUYnTCVDi_b9g" alt="Travel Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-headline-md text-white mb-2">Travel Security</h3>
              <p className="font-sans text-body-md text-white/80 mb-6">International logistics, secure escorts, and global risk assessment for seamless cross-border mobility.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Global Operations</span>
            </div>
          </div>
          <div className="md:col-span-4 group overflow-hidden relative aspect-[4/5]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0HJ0dJmMa8TLKoIMzzoZBgw5zXf2RtHy9EX4aZY55ULDfN3B1BShrmj-SwjJWjDj42Yi5Xk9NSmT3TooNp2QQEm6T2qhgt9d5csy4-yT5YL0bBXsIAfbh7zAZoF6DCOPgci8Dd_jsWPSUzAx_xUzRZbSYliPHFVLUspY5MCU9p-Qj5mPH7oy9lQgdrBdVbL9TeXKTIQNUgivY9ry9w4V5KdHVr6DQMC-LFerORyJrBuxSjP4lj5qWuly9A54RSVAyXOLEeatyRXA" alt="Residential Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-headline-md text-white mb-2">Residential Security</h3>
              <p className="font-sans text-body-md text-white/80 mb-6">24/7 villa and estate protection utilising advanced surveillance and physical presence.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Estate Shield</span>
            </div>
          </div>
          <div className="md:col-span-8 group overflow-hidden relative aspect-[16/9]">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3661kY26A9XieA2fwsR8rNFswdLOpk8KHBljqQ6ZX-ZFg1rVNoZ9eFaeNIBtVPqVcvmbOg3yM6t0aBBfo-WbsEqDfkE6ZFUB1kG2c11ZGHwaYRQjIBtpcpaK3E5Fis3lVpodofA0ano7YYdmp3xPM8ExApmnz42yBJ-rv86TTXrc2b4TpeZY6H-zXRK0CgVpeMWi4JVZ1ht-KZWjEyh0T9jmXU-99U0P5OqzHhFsixfdagkCLyB1No2q9099pjp6VBy8pk545w_I" alt="Event Security" data-placeholder="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-headline-md text-white mb-2">Event Security</h3>
              <p className="font-sans text-body-md text-white/80 max-w-md mb-6">Specialised VIP management for private galas, corporate summits, and high-net-worth gatherings.</p>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest border-b border-secondary-fixed/30 pb-2 w-fit">Event Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Female Specialists */}
      <section className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img className="w-full h-[600px] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4L5DnxtHyWW5zArA1ggGPP-qT858Sxe3-vuttsbP7_YCRQUk7c0WAo06wA4nX0whLlcfpaw7qr4vYI4cw6LjoW2J6TXqZDwQu0nHhA0khWLsNr7-mwibdpoFZlb_bRy1obmks4bbvNdTwAQUzDBySivJz1cmZ35W-RKAJO2dSd2seUHMDn36LNBwS8BmaOEIEzPY0Wmldd8_lXhhsiSjKEup0R77m8KvrD1VTLPsIr_51c1JZ9ows8jvC7awsXsJjdoGy1ygYC-PX" alt="Female Security Specialist" data-placeholder="true" />
          </div>
          <div className="space-y-8">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">The Opulent Vault Distinction</span>
            <h2 className="font-serif text-headline-lg text-primary">Female Security Specialists</h2>
            <p className="font-sans text-body-lg text-on-surface-variant">For situations requiring a more subtle presence, specialised family protection, or cultural sensitivity, our elite female security personnel offer a unique combination of high-tier tactical training and soft-skills excellence.</p>
            <ul className="space-y-4 font-sans text-on-surface-variant">
              {["Discreet Family & Nanny Protection", "International High-Stakes Travel Escorts", "Understated Presence in Social Environments"].map((item) => (
                <li key={item} className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-all">Request Specialist Profile</button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="request">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-headline-md text-primary">Initiate Deployment Protocol</h2>
            <p className="font-sans text-body-lg text-on-surface-variant">Security is not a commodity; it is a personalised architecture of safety. Share your requirements, and our senior strategists will contact you within 60 minutes.</p>
            <div className="space-y-6 pt-6">
              {[
                { icon: "verified_user", title: "Confidentiality Assured", desc: "All communications are encrypted and strictly confidential." },
                { icon: "public", title: "Global Response", desc: "Capabilities for deployment in over 120 countries within 24 hours." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary mb-1">{item.title}</h4>
                    <p className="font-sans text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 bg-surface-container-low p-12 border border-outline-variant/30">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Principal Name</label>
                  <input className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Full Legal Name" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Contact Method</label>
                  <input className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Secure Email or Phone" type="email" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Required Service</label>
                <select className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans bg-transparent appearance-none">
                  <option>Executive Protection</option>
                  <option>International Travel Escort</option>
                  <option>Residential Security</option>
                  <option>Event Security VIP</option>
                  <option>Female Specialist Team</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Briefing Details</label>
                <textarea className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans resize-none" placeholder="Primary risks, location, and dates..." rows={4} />
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-secondary transition-all" type="submit">Submit Secure Request</button>
            </form>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}