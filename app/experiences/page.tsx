import AIConciergeSection from "@/components/AIConciergeSection";

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-surface">
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
          <span className="font-label-caps text-label-caps tracking-[0.3em] text-primary/60 mb-6 block">Ultra-Luxury Curation</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-primary leading-none mb-12">Unrivaled Experiences, Curated for the Discerning.</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps hover:bg-secondary transition-all">Explore Catalog</button>
            <button className="border border-primary text-primary px-10 py-5 font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all">Book Consult</button>
          </div>
        </div>
      </section>

      {/* Fine Dining */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-5 space-y-8">
            <span className="font-label-caps text-label-caps text-secondary">01 Gastronomy</span>
            <h2 className="font-serif text-headline-lg text-primary">Michelin-Star Excellence, Privately Hosted.</h2>
            <p className="font-sans text-body-lg text-on-surface-variant">Access the inaccessible. From private tables in the world&apos;s most exclusive kitchens to personal dinners prepared by legendary Michelin-star chefs at your estate.</p>
            <ul className="space-y-4 pt-4 border-t border-outline-variant/30">
              {["chef&apos;s Table Confidential", "Rare Vintage Tastings"].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">restaurant</span>
                  <span className="font-sans text-body-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="overflow-hidden h-[600px] relative">
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWD177vuPsx_HFPM5A6XD4peESGpGvBzLLldeezB_BMRlftzdTon3G4mvzqXRHyTutL3mfw5lsJWENVEJ9tRePkQZ175lUazzJhpbXce_RBTSVbab4icovt99o_-PcFYgPeYOkSWhK3ppGvslZ1Wqdw1KSB6rf26g0nFYHJvQo6mfe-9nTtX3tP4BjRERKoO88Q5BGweo1JLb9rtZnzJRyJWCOOCEyQPHyWGlJkuciMA-z5eTAqB8KuypYh-4RLASC1nZzqiywF6uU" alt="Fine Dining" data-placeholder="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Yacht Experiences */}
      <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center">
            <h2 className="font-serif text-headline-lg mb-4">Mediterranean Horizons</h2>
            <p className="font-sans text-body-md text-on-surface-variant max-w-2xl mx-auto">Charter the world&apos;s most prestigious vessels. From the Amalfi Coast to the Balearics, our fleet is your private sanctuary on the water.</p>
          </div>
          <div className="grid grid-cols-12 gap-gutter h-[600px]">
            <div className="col-span-12 md:col-span-8 relative overflow-hidden h-full">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbaJr9CtX4mAkfUdSimwsEKSJiUcRl_IdZIjIuBJ1B9eriYE0EbU452mo_Xie5k-P4yuR_-bzbSXImEaFXjDXqJrjnyFK3VMGUf9f6KG8iZ6RdA45VdlM5MxAM-CznbxR7eo0-TkqB9zQ2d5-lOsUWyYLhhyRam0E_1gfKw0VSCO-mjmLg1C_RsbEwfhilo3h5YDM4N_F-DCg6LEsbdIhD0yV1kVUXousGKFEpRqwZpsNGKQP9-ap97wY3AwJw-XJsOL1fS3pOke5o" alt="Superyacht" data-placeholder="true" />
              <div className="absolute bottom-10 left-10 text-on-primary">
                <h3 className="font-serif text-headline-md">Superyacht Serenity</h3>
                <span className="font-label-caps text-label-caps mt-2 block border-b border-white/40 w-max pb-1">View Fleet</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-gutter h-full">
              <div className="relative overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGYtwNTc4wOACFE12LlwI9YmSDPqUrbgtCfCraI0w8D7DvBWgajtV7v6NxTX7pkoR60c8G7uYACX9nxYDbU2LWiSfHHVl7Y7KEgS_D_upl6DPIKrOrF-IbICd5mWTg3FjHhVh-lkXRB_w8K6E0xdNmg7xbwIFLHR4CQ4e7_wD3aJah2fhNjsPSP3caZxHfzOC9aMjNwwGfuV4rp1oqpuVNATKDIXSHPxdEmbK2raldklvvJ2hEN2pUlvjGsA7j5SCpFMfOOjfkmtnk" alt="Yacht dining" data-placeholder="true" />
              </div>
              <div className="relative overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2nR1y6d6q9UiTqGrixnXLpeDNWhRf-OYbsPoMOXoB9KpeOrsQD-MQYbgldjWDdlZ54MqFKLPrfUFGSUNgTr92VCfs43a3vj5xHv5rnqsKlSraU8nvT6x7qGl-qnXqM0aSfshZSDwlMY0vRSIzkvrgslfjz4-wc534JFvLtwsJmg1pooSd5_fr9HMmv4ufjymUugoP32F7DOIdpU-HCdRXcqr8vnUVNYcKRG6hJAcaDoghd6XCaASr6cHr4VsdpguYoycrmw2cu2_x" alt="Yacht cabin" data-placeholder="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">03 Expeditions</span>
            <h2 className="font-serif text-headline-lg">Beyond the Boundaries of Ordinary.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Private Aerial", title: "Alpine Ridge Helicopter Tour", desc: "Unprecedented access to the peaks of the Swiss Alps with private summit picnics.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPGED_KDN-Oo086bokCIMNFV_sqI8OVsfduyMrlgYaNOBx0nSoUII1-iEvXhWDb59xgyAY1Uxi_-4e3ID_VXlclyvUZQHglwnj9OeWJeldI9cClUojVzf8zdVyL6I10fqsQe8LL7-V8a06hYoxZkK8nuMsCaIb-AAG81pmV8jmZPdb5Ch2ffcemOXJXBZkby7U7_86YHXuTQLadVf8UNiMsu5b--7pke_Xs-PaXS7_hPjmFzss_1wk-BclQv3rHhQuZb0aWvrFfk-L" },
            { label: "Cultural Access", title: "After-Hours Louvre Curatorial", desc: "Explore the world&apos;s greatest art in absolute solitude with a leading historian.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYGv_g5_8qdHK9mzHLthszDfR6tPouGLjuUfg-wB_-CiB7ylgnN9x3v_EuL19PQyALY8jRxsY7IQl2hXoZ_o20mOiAGxbLBYt3-bJ5NmpsqsGrtkGroAUJGvIxQiB6UggVBcx-Q6-hIvEoDm3jGG5c7DTPbfr78badzUDy1pk4-rAK0FMSiZE-3uRaODx98y1P9p7fYi9icKiqKK_qKsadTnTEBBMofryu6zo9D29AD69lcOacweqBfBGFIlkm-iFKRt8PDRaF5ty_" },
            { label: "Nature Reclaimed", title: "Atacama Stargazing Expedition", desc: "A journey to the edge of the world with astrophysicists in a luxury desert outpost.", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBozPnwSDfKfuYt14CwFP3UKmHD1oCOrslhtmC0rYHNB4rDj-PPJomq4MsHcCDAZo-zr5k9nbdvt-8OM1KfUTBuOXibdOeVGdKtJyRmTLDVYejInAWIvctJk_GQJl21Lh197qGAXW_9GNQXZtLIAv9C15BKxWXf3Y_zGAP4648AveFiCMYcidXTbEPFXfvdooYrq4lESf90Fbp49FnZi-6Sz9wtm0QG-F9GXAhcxnHgiDSNC3S-fTY1DmcbVOLdu2PJ8ycmJJMZ8UG_" },
          ].map((tour) => (
            <div key={tour.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={tour.src} alt={tour.title} data-placeholder="true" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/80 px-3 py-1 font-label-caps text-label-caps">{tour.label}</span>
                </div>
              </div>
              <h3 className="font-serif text-headline-md mb-2">{tour.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-4">{tour.desc}</p>
              <div className="h-px bg-outline-variant/30 w-full group-hover:bg-primary transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Spa Retreats */}
      <section className="py-section-gap relative min-h-[800px] flex items-center">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSrTxN6fQgdcKdmWtM6dDmOnLOhOu3iIb1fspfuMntWx3qUpnx63DInYnzxZGOgiDVuqGLy0ASyDyGJRhfweZ-CyTk5kHr3DgPAwdN_4QfLwv5TAgCuW0WKCAG04sxFU_AkgDpddB3JMKWD8s8-B50kbUfLtBglmlxHYNEMFaGkcYX-fZK9ZtBLWmfJddOV5dztwX2uVMxYDemW5nEojRntNujMCzPVUpJVjK9mXyKpg9_JEPgudYxtscqNdXo0_oYdYAooCQDNBLd" alt="Spa Retreat" data-placeholder="true" />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-xl glass-panel p-12 md:p-20 border border-white/20">
            <span className="font-label-caps text-label-caps text-primary/60 mb-6 block">04 Restoration</span>
            <h2 className="font-serif text-headline-lg text-primary mb-8 italic">The Art of Stillness.</h2>
            <p className="font-sans text-body-lg text-on-surface-variant mb-12">Bespoke wellness retreats in the world&apos;s most tranquil locations. Tailored bio-hacking, traditional therapies, and absolute privacy.</p>
            <button className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps hover:bg-secondary transition-all w-full md:w-auto">Explore Retreats</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-headline-lg md:text-display-xl mb-8">Begin Your Bespoke Journey.</h2>
          <p className="font-sans text-body-lg mb-12 opacity-80">Our lifestyle managers are standing by to curate your next unrivaled experience. Every detail, managed to perfection.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <input className="bg-transparent border-b border-on-primary/30 py-4 px-2 focus:outline-none text-on-primary font-sans w-full md:w-80" placeholder="Email Address" type="email" />
            <button className="bg-on-primary text-primary px-12 py-5 font-label-caps text-label-caps hover:bg-secondary-fixed transition-colors">Request Callback</button>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}
