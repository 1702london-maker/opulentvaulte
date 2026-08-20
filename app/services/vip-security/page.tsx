"use client";
export default function VipSecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGSQNlCsuTCSWs4Flu8AbQYYzqwnVuHUi16iNA0eg9NstWmTmWKDCczgCr2BUtVn3_UpY3oYpesHH1InoUwdQP6S4mcbRcnb0puxcxcS95FFXzjD5XbpYzx-DTnT4-90Xq0KFVvcCCsjRXSV0In-L6EC-MCyNYTUr2JKgYEKLpm0NrR53NUWAEH1BECEQMpq9GJjfK0kFkaWKXe4B4BKNUv4mKzr_wQJZaJ3ScQYdEtcD9QdSRKf9dgg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/60 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-secondary tracking-widest">Global VIP Protection</span>
              <div className="h-[1px] w-12 bg-secondary"></div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Discreet. Professional. Trusted.
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              OPV coordinates SIA-licensed security services with complete confidentiality, providing the world&apos;s most discerning individuals with unfaltering protection.
            </p>
            <div className="pt-8">
              <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity" href="#request-form">Initiate Confidential Request</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Categories */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
            <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Tiers of Vigilance</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Security at the highest level requires more than just presence. It demands intelligence, foresight, and absolute discretion. Our protection services are tailored to the specific context of your lifestyle.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">shield_person</span>
              <h3 className="font-display-lg text-headline-sm mb-4">Close Protection</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Bespoke personal security details managed by former elite military and law enforcement personnel. Discreet presence or overt deterrents based on your profile.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">domain</span>
              <h3 className="font-display-lg text-headline-sm mb-4">Residential Security</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Comprehensive estate protection including technical surveillance countermeasures, physical perimeter security, and 24/7 rapid response teams.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 border border-outline-variant/20 hover:border-secondary/40 transition-colors md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">directions_car</span>
                  <h3 className="font-display-lg text-headline-sm mb-4">Secure Transport</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Armoured vehicle options and advanced route planning. Our chauffeurs are trained in evasive driving techniques and emergency medical response.
                  </p>
                </div>
                <div className="md:w-1/2 w-full h-48 bg-cover bg-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqUKj4hpUqpQd-3z3HGQyoqlD9lIFkBqWLvsn6vyF_K38KDPuS9YcOxBZI6NITGEHMaILxfXp4j81IDQP-o8_bYVoXIOLB630aOdd5hUSkLgV1dfJAkajIoCDrgENnZAY0e9wjLSFwnYUcGHfZkdz-PcPcctLsRQBz6QsM5127CZkuMiSIwi_ceUENd3hjxEDZLV6REa02nhAd71yblBv0CDiBsU-bGwc0o1c9hMCez514CnIYKGbCJg')" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-primary-container py-section-gap border-y border-outline-variant/10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-20">
          <div className="border border-secondary w-8 h-8 rounded-full flex items-center justify-center text-[10px] text-secondary font-display-lg mx-auto mb-6">OPV</div>
          <h2 className="font-display-lg text-headline-md mb-4 text-on-surface">The Standard of Trust</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">
            We do not just verify providers; we audit their existence. Every security professional within our network undergoes a multi-layer verification process.
          </p>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h4 className="font-label-caps text-secondary">Licensing</h4>
            <p className="text-sm text-on-surface leading-relaxed">Mandatory SIA licence verification with real-time status monitoring. Every operative maintains active, valid credentials for their specific jurisdiction.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-secondary">Insurance</h4>
            <p className="text-sm text-on-surface leading-relaxed">Verified professional liability insurance with minimum coverage thresholds specifically structured for high-net-worth protection services.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-secondary">Vetting</h4>
            <p className="text-sm text-on-surface leading-relaxed">Deep-tier background verification including historical conduct checks, employment history, and psychometric assessment for situational temperament.</p>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="bg-primary-container p-16 relative overflow-hidden border border-secondary/10">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <div className="relative z-10 md:w-2/3">
            <h2 className="font-display-lg text-headline-md mb-8 text-on-surface">Client Confidentiality</h2>
            <p className="font-body-lg text-on-surface-variant mb-12 leading-relaxed">
              Data security is the cornerstone of physical protection. OPV operates under strict non-disclosure frameworks. Your personal movements, identity, and protection details are encrypted at the highest civilian standard and never shared with third parties.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary-container bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">key</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-primary-container bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                </div>
              </div>
              <span className="text-sm font-label-caps text-on-surface">End-to-End Encryption Protocol Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-center mb-16 text-on-surface">The Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit">
          <div className="p-12 bg-surface-container-low text-center relative">
            <span className="absolute top-4 left-4 font-display-lg text-headline-sm opacity-10 italic">01</span>
            <h3 className="font-label-caps text-secondary mb-4">Submit Request</h3>
            <p className="text-sm text-on-surface-variant">Provide the foundational details of your security requirements via our encrypted portal.</p>
          </div>
          <div className="p-12 bg-surface-container-low text-center relative border-x border-outline-variant/10">
            <span className="absolute top-4 left-4 font-display-lg text-headline-sm opacity-10 italic">02</span>
            <h3 className="font-label-caps text-secondary mb-4">OPV Reviews</h3>
            <p className="text-sm text-on-surface-variant">Our internal security directors assess the risk profile and logistics to select the appropriate team.</p>
          </div>
          <div className="p-12 bg-surface-container-low text-center relative">
            <span className="absolute top-4 left-4 font-display-lg text-headline-sm opacity-10 italic">03</span>
            <h3 className="font-label-caps text-secondary mb-4">Proposal</h3>
            <p className="text-sm text-on-surface-variant">A confidential operational proposal is delivered via secure link for your final approval.</p>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto bg-primary-container" id="request-form">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-md mb-4 text-on-surface">Private Security Request</h2>
          <p className="text-on-surface-variant">Fill in the requirements below. This data is handled exclusively by our VIP concierge team.</p>
        </div>
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Type of Protection</label>
              <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md appearance-none focus:outline-none">
                <option className="bg-primary-container">Select category...</option>
                <option className="bg-primary-container">Close Protection (Bodyguard)</option>
                <option className="bg-primary-container">Residential Security Detail</option>
                <option className="bg-primary-container">Secure Chauffeur &amp; Transit</option>
                <option className="bg-primary-container">Special Event Security</option>
              </select>
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Service Dates</label>
              <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md placeholder:text-on-surface/20 focus:outline-none" placeholder="e.g. 12/05/24 - 15/05/24" type="text" />
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Primary Location</label>
              <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md placeholder:text-on-surface/20 focus:outline-none" placeholder="City or Region" type="text" />
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Operational Context</label>
              <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md appearance-none focus:outline-none">
                <option className="bg-primary-container">Leisure / Travel</option>
                <option className="bg-primary-container">Public Appearance</option>
                <option className="bg-primary-container">Corporate Engagement</option>
                <option className="bg-primary-container">High-Risk Transit</option>
              </select>
            </div>
          </div>
          <div className="border-b border-outline-variant/50 py-4">
            <label className="block font-label-caps text-[10px] text-secondary mb-1">Additional Requirements / Notes</label>
            <textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md placeholder:text-on-surface/20 resize-none focus:outline-none" placeholder="Specify any specific languages, vehicle preferences, or risk factors..." rows={3}></textarea>
          </div>
          <div className="flex flex-col items-center gap-6 pt-6">
            <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all w-full md:w-auto" type="submit">
              Submit Secure Request
            </button>
            <p className="text-xs text-on-surface-variant italic font-light">
              OPV will contact you confidentially within 24 hours.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

