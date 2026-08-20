"use client";

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section — body bg-primary-container handled by layout */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 via-transparent to-primary-container"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 border border-secondary rounded-full">
              <span className="font-label-caps text-secondary text-lg">OPV</span>
            </div>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto leading-tight">
            Access the Exceptional.<br />On Every Level.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 opacity-80">
            The world&apos;s most exclusive concierge and lifestyle management firm. Our membership tiers are designed for those who demand absolute discretion, unparalleled access, and a life without friction.
          </p>
          <a className="inline-block border border-on-surface px-10 py-4 font-label-caps uppercase tracking-[0.2em] hover:bg-on-surface hover:text-primary-container transition-all duration-500" href="#tiers">
            Explore The Tiers
          </a>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
          <div className="w-[1px] h-20 bg-gradient-to-b from-secondary to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto" id="tiers">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Standard Tier */}
          <div className="glass-card p-12 flex flex-col soft-close-hover">
            <div className="mb-12">
              <span className="font-label-caps text-on-surface-variant uppercase mb-2 block">Entry Tier</span>
              <h3 className="font-headline-md text-on-surface">Standard</h3>
            </div>
            <div className="mb-12">
              <span className="text-4xl font-display-lg text-secondary">$5,000</span>
              <span className="font-label-caps text-on-surface-variant block mt-1">ANNUAL FEE</span>
            </div>
            <ul className="flex-grow space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span className="text-on-surface-variant font-body-md opacity-90">24/7 Digital Concierge Access</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span className="text-on-surface-variant font-body-md opacity-90">Preferred Luxury Hotel Rates</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span className="text-on-surface-variant font-body-md opacity-90">Invitation to Seasonal Events</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span className="text-on-surface-variant font-body-md opacity-90">Bespoke Travel Itineraries</span>
              </li>
            </ul>
            <button className="w-full border border-secondary/30 py-4 font-label-caps uppercase tracking-widest text-secondary hover:bg-secondary hover:text-primary-container transition-all">Apply for Invitation</button>
          </div>

          {/* OPV Black Tier */}
          <div className="relative glass-card p-12 flex flex-col soft-close-hover border-secondary/40">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary-container px-4 py-1 font-label-caps text-[10px] uppercase tracking-widest">Most Distinguished</div>
            <div className="mb-12">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-secondary uppercase mb-2 block">Elite Tier</span>
                  <h3 className="font-headline-md text-on-surface">OPV Black</h3>
                </div>
                <div className="w-10 h-10 border border-secondary rounded-full flex items-center justify-center">
                  <span className="font-label-caps text-[10px] text-secondary">OPV</span>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <span className="text-4xl font-display-lg text-secondary">$15,000</span>
              <span className="font-label-caps text-on-surface-variant block mt-1">ANNUAL FEE</span>
            </div>
            <ul className="flex-grow space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-on-surface font-body-md">Dedicated Personal Guardian</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-on-surface font-body-md">Global VIP Airport Fast-Track</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-on-surface font-body-md">Private Club &amp; Member Access</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-on-surface font-body-md">Complimentary Car Upgrades</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="text-on-surface font-body-md">Executive Protection Consulting</span>
              </li>
            </ul>
            <button className="w-full bg-secondary text-primary-container py-4 font-label-caps uppercase tracking-widest hover:opacity-90 transition-all">Apply for Invitation</button>
          </div>

          {/* OPV Vault Tier */}
          <div className="glass-card p-12 flex flex-col soft-close-hover border-on-surface/20">
            <div className="mb-12">
              <span className="font-label-caps text-on-surface-variant uppercase mb-2 block">The Pinnacle</span>
              <h3 className="font-headline-md text-on-surface">OPV Vault</h3>
            </div>
            <div className="mb-12">
              <span className="text-4xl font-display-lg text-secondary">INVITATION ONLY</span>
              <span className="font-label-caps text-on-surface-variant block mt-1">ULTIMATE TIER</span>
            </div>
            <ul className="flex-grow space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">lock_person</span>
                <span className="text-on-surface font-body-md italic">Unlimited Global Lifestyle Support</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">lock_person</span>
                <span className="text-on-surface font-body-md italic">Direct Access to Yacht &amp; Jet Fleet</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">lock_person</span>
                <span className="text-on-surface font-body-md italic">Off-Market Real Estate Access</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary text-sm">lock_person</span>
                <span className="text-on-surface font-body-md italic">Dedicated Wealth Security Detail</span>
              </li>
            </ul>
            <button className="w-full bg-primary-container border border-secondary text-secondary py-4 font-label-caps uppercase tracking-widest hover:bg-secondary hover:text-primary-container transition-all">Contact Representative</button>
          </div>
        </div>
      </section>

      {/* Member Experience Section — bg-surface-container-lowest → bg-primary-container */}
      <section className="py-section-gap bg-primary-container">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="font-label-caps text-secondary uppercase tracking-[0.3em]">The Experience</span>
              <h2 className="font-display-lg text-headline-md md:text-5xl leading-tight">Beyond Service. <br />Infinite Protection.</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Membership at Opulent Vault is not merely a utility; it is an induction into a global network of silent guardians and elite facilitators. We handle the complexities of ultra-high-net-worth living so you can inhabit the moment.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-label-caps text-on-surface mb-2">98%</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Member Retention</p>
                </div>
                <div>
                  <h4 className="font-label-caps text-on-surface mb-2">24/7/365</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Active Watch</p>
                </div>
              </div>
              <div className="pt-8">
                <button className="group flex items-center space-x-4 font-label-caps text-secondary uppercase tracking-widest">
                  <span>Request the Prospectus</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-alt="A cinematic, high-fashion editorial photograph of a luxurious private jet interior at twilight."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnvL_pj2ZQGA_0_Y1Wo1ej07gkhWYrO8sPM-eieTdalsh3xz34wTucs4DFH85zuxep6bfv3LJ9MLdQ2shJxvYZgUZHSGAC3Oikg5pgLjz99IAVHPXq_F-Box6ahJsjB2ieSul9_LVXDW_R3I22ssk0bWayK9FdiVywLusIpSdzxYwG-cmkodpq3pfNv4vNEdDd2qMBF-wOBxUqyWzHGPVN1Nljtobf7FlOwXfQ4Nonkmq5u7NIZV-kA"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary flex items-center justify-center rounded-none hidden md:flex">
                <div className="text-center text-primary-container p-6 border border-primary-container/20">
                  <span className="font-label-caps text-[10px] block mb-2 uppercase">Verified by</span>
                  <span className="font-display-lg text-2xl font-bold tracking-tighter">OPV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid / Bento */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              data-alt="An atmospheric, low-light shot of a private member club library."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWwpVCTkwmFmVN8-yKs_7RMWPAd9TpbTwFM1cshEFkp8j3Y740CmxtoKfyHmD5O5TcA1gj6gARdRlfFvh_Mmd0o6YITy4aS9KPBq8lItOzsQHHTZJdwWF37yyOKSsNFIUSjtPh2Phv2fq53Y3HssleIGHmCNJUVwvnOXCIABNTiV5kO2xnJARb6wS9GXWqbmUxwlQHTbL4Um0QMxJHP-Au8N1oGW28ULoXsEDJfpO1VC6opiQ0zowS0g"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="font-label-caps text-secondary text-xs uppercase mb-2 block">Heritage Access</span>
              <h3 className="font-headline-sm text-on-surface">Private Estates &amp; Clubs</h3>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              data-alt="A high-contrast black and white image of a professional security detail in tailored charcoal suits."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJNEr7Kmsc_j0EXkM4YtW8mu8mkX8m8CxGwx4OwpIStYZ1ZeHzSGreZppt5U5q5sWTsnfV3t506F9F517UM7nUIiV11CvcCOH5dQiIYu9_Y65i9CDSczvISgNVyFhftLcCXmr-Qr6W06qwda2DeA8zHxLLctlDjXbvCS0wCUAoyC1wurepSl9X9M4SYzSxpdXknIYqBc4JsB09TNnVhoX8LcbppSPrNgjHH1fkX9t6Qm-N5ioDf-s6Lg"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="font-label-caps text-secondary text-xs uppercase mb-2 block">Discreet Guarding</span>
              <h3 className="font-headline-sm text-on-surface">Elite Close Protection</h3>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              data-alt="Close-up of a premium, matte black credit card with a gold-leaf OPV monogram."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfnhpudkQm_DMeAKAKQsNmx3VckKSEUaKRaRMjnCfunJ-bW0GsyrOa29Di9PB4UX3dhgN1J-XRFITDwWwOBaaKgAnGw8Z-whWrAeRj98pD7soBRi0MbMclXe6ihBEwzXF8TdnMfAshKqxJK_o6dOy4Pjrph2vJ4tgudClMbr_8BEMI0CL-5P28-eUNy9qZI6u5EOEgUcVaQnJEAg9Fkmt2BONUgPrLPQd-zmvszLn0H3CqMbukbkPog"
            />
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              data-alt="A birds-eye view of a sleek, modern superyacht cutting through crystalline turquoise water."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGur5eRqeQcQwcqw_JIKqUNt1wpT3bgdT5_PEyP6BjcQRzglsRS2BCkTLCg_k3QxmyK5n78bvcnrEuRateoAlwJjyALdL4mnZafIGsb7w-dP_R6bmhMmWapfyQimwskFtfeG6x7Sw_xkE970sH7aBFk9_gsVf5po1O4mWE9RAydy6Gw-eIo5wda-t9jr8StO-h5DeXW3nJzQom1tJ3QAr_CHt2SQHMqw5USLqIDn0p2U7OGGhmHb54qQ"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="font-label-caps text-on-surface border border-on-surface px-4 py-2">Explore Yachting</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
