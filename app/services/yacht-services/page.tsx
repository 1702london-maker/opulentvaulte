export default function YachtServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6r2jrQd_MaGankgmtPfqYnkyX-aekjmU_ZQ1r1gd2JKwYdoIBrfWhvJur6QdHJvL9YuTBVaup-HLsCZiKEdKZk0lSjjfBVok3pQ03DmzbPIQtPFr3lObmG8Y6fXdCL04qOROrfwd2z7AmZJykgWXWGTZyjuFA-SSustv1htv-p528rBYBuPC4O59oIjIPTbtpGEXlcpYknGVd1J_Mu2iaTqQNJRY-7WhVSRx5iTp3MNQnZnv2-WvjQg')" }}></div>
          <div className="absolute inset-0 bg-primary-container/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <div className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-4 py-1 rounded-full bg-primary-container/40 backdrop-blur-sm">
            <span className="material-symbols-outlined text-secondary text-sm">directions_boat</span>
            <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-bold">Maritime Excellence</span>
          </div>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Charter the Sea.<br /><span className="italic font-normal">On Your Terms.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Unlock access to the world&apos;s most elusive private vessels. Our yachting specialists curate bespoke voyages where every nautical mile is tailored to your exacting standards.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#enquiry" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase transition-transform hover:scale-105 active:scale-95 inline-block">Start Enquiry</a>
            <a href="#fleet" className="border border-on-surface/20 text-on-surface px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase backdrop-blur-md hover:bg-on-surface/5 transition-all inline-block">View Fleet</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center bg-primary-container">
        <div>
          <h2 className="font-display-lg text-4xl md:text-5xl mb-8 leading-snug text-on-surface">The Architecture of Maritime Privacy</h2>
          <p className="text-on-surface-variant text-body-lg mb-6">Our fleet represents the pinnacle of private ownership. Due to the exclusive nature of these vessels, availability is strictly managed via our bespoke enquiry-only handling system. This ensures the utmost confidentiality for both owners and guests.</p>
          <ul className="space-y-4">
            {["Global Port Clearance Assistance", "On-Board Security Detail Integration", "Michelin-Starred Culinary Provisioning"].map((item) => (
              <li key={item} className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="text-sm uppercase tracking-widest">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 border border-secondary/20 transition-all group-hover:inset-0"></div>
          <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_97JRo182rYdX0OjrX9dgLCYDm_ImJdYBVFDTBeXgxgZ3DlWZLLEsB1rccPdvWeTuLPxGobxHYYRPFPclvPwybLduRDmlXZjEyI6qivl2ilkvTEXQlfyeP7pOC-I8eges9rM3zEb5ujD6uTlVnzUrBm_AiX9Wbo22XaFG-aFk_FE1vRWLr7Udbvn9LHKjBOSbkNU85I2S06HjbcDeGndGrNcl0QRLt4RNVncBg0VEa3L_NCmnN_wfIw')" }}></div>
          <div className="absolute bottom-8 right-8 p-6 bg-primary-container/80 backdrop-blur flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center font-display-lg text-secondary text-xs">OPV</div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Standard of Trust</div>
              <div className="text-sm text-on-surface">Guardian Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-section-gap bg-primary-container" id="fleet">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display-lg text-4xl mb-4 text-on-surface">The Current Selection</h2>
              <p className="text-on-surface-variant">Exceptional vessels curated for seasonal availability.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-primary-container transition-all text-on-surface">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-primary-container transition-all text-on-surface">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AURELIA I", builder: "Heesen Yachts • 2021", price: "€180,000 / week", length: "45m / 147ft", guests: "12 Guests", crew: "9 Professional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmJtzrqzEzJSWc5tA-Oz3kJbC_0n3YG-je96DQKOEME80f9A-Cd26CIeS8jKyvw8AXofPRhEjQgroZ7O432R7-sqaOQsEj66UMY0ZZVjGzWv_cA_5hDdCs6Gol1KC1xZfWu4G6gL1woOrkzja2irvyD4nfFznz92gwNWvkiilQdwOEVrRVfNJ-V_7M-iXDrkvxGqp79Ob6jexVg1mYPmMW0g9BzWplLzCnH5BqcowFYhoUJJPL_IsdA" },
              { name: "MIDNIGHT BLUE", builder: "Lürssen • 2019", price: "€450,000 / week", length: "62m / 203ft", guests: "14 Guests", crew: "16 Professional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHo8avzFcqvhd5Y8zY6LvGu6M2tp6PMXJFH1V2ZFFOEjax0XcX8-NqYob5di19rqww78HEWfAu30Fr0p2IuOa66oNzicUhvS7NNlTncwER5g_I2gLq_3KqsqEnIMTuGBSn7JsAEu9uL1_8EUk1jLZpTdJwyR_TRI5aOTqKftUZxU_VJvX6iZOJe9tug1TLyKK3_qWEEacMkstwdaZzPQH5-yVkZBUrxHu8vku6S-1mcn_jxTNMiIPG9Q" },
              { name: "ELEGANZA", builder: "Perini Navi • 2023", price: "€220,000 / week", length: "52m / 171ft", guests: "10 Guests", crew: "8 Professional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxjNYN8pHr-OTRMtvTrxaziYGgASSIbfBlIXmW_cDXupozFzbZJz_9E7jHkaSBd-AC6lqsJIOMEvfaFOQ9qbPb3Otuj84itJO0zoawt3nMFAt4BEd7Qda-KQCMjuSN0ySu3j5Cw2QKxLTqY2ZoJ6GhmGUo6m-3txhbLtT7bWWLbmaUsisk3B-LkiMzu6XcN_HQfwhhQsMSorBf-IbRQ0eFNSJmX9fFAYLXcBL6Nv1sQXB_gvx6LfGIGw" },
            ].map(({ name, builder, price, length, guests, crew, img }) => (
              <div key={name} className="group bg-surface-container relative overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src={img} alt={name} />
                  <div className="absolute top-4 left-4 bg-primary-container/80 backdrop-blur px-3 py-1 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center text-[8px] font-bold text-secondary">OPV</div>
                    <span className="text-[8px] uppercase tracking-widest text-on-surface">Verified</span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display-lg text-2xl mb-1 text-on-surface">{name}</h3>
                      <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">{builder}</p>
                    </div>
                    <span className="text-on-surface-variant text-sm font-light">{price}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30">
                    <div>
                      <div className="text-[10px] uppercase text-on-surface-variant mb-1">Length</div>
                      <div className="text-sm text-on-surface">{length}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-on-surface-variant mb-1">Capacity</div>
                      <div className="text-sm text-on-surface">{guests}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-on-surface-variant mb-1">Crew</div>
                      <div className="text-sm text-on-surface">{crew}</div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-on-surface text-primary-container py-4 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Request Dossier</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="font-display-lg text-4xl mb-6 text-on-surface">Uncompromising Certification</h2>
              <p className="text-on-surface-variant mb-10">Every vessel in the OPV registry undergoes rigorous annual inspections exceeding industry standards. We prioritize safety, legal compliance, and technical perfection so you can focus on the horizon.</p>
              <div className="space-y-6">
                <div className="p-6 border-l-2 border-secondary bg-surface-container-low">
                  <div className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Safety Benchmark</div>
                  <p className="text-sm text-on-surface">SOLAS &amp; IMO Compliant with additional OPV-specific protocols.</p>
                </div>
                <div className="p-6 border-l-2 border-outline-variant bg-surface-container-low/50">
                  <div className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2">Crew Vetting</div>
                  <p className="text-sm text-on-surface">Multilingual crews with specialist training in security and hospitality.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
            {[
              { icon: "medical_services", title: "On-Board Medical", desc: "Fully equipped medical bays with tele-medicine links to leading hospitals." },
              { icon: "wifi_tethering", title: "Starlink High-Speed", desc: "Dedicated low-latency satellite internet for remote global operations." },
              { icon: "water_drop", title: "ECO Certification", desc: "Sustainable waste management and low-emission propulsion systems." },
              { icon: "private_connectivity", title: "Privacy Shield", desc: "Anti-drone technology and hardware-level network encryption available." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-primary-container p-12 border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">{icon}</span>
                <h4 className="text-lg font-display-lg mb-3 text-on-surface">{title}</h4>
                <p className="text-sm text-on-surface-variant font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container" id="enquiry">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Request a Charter Dossier</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our yacht specialists will prepare a personalised dossier including vessel options, itinerary proposals, and provisioning recommendations for your review.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SUBMIT ENQUIRY</a>
        </div>
      </section>
    </>
  );
}
