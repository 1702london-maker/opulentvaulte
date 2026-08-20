"use client";
export default function EventsExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-uMZNLRi8Hj0bTcGwJSejzG1p35MbmZK5O8_Akm2zUlO62HYXfpLwsEA9fIG8vt_xkJOwG15r6KnjzLT2czpgVycLpWudfG40e5cge8WxSjND47evYTWxi2Syw9_kY9kMivOgTPcFztKcCJevdnU9h7FQTe78fvm2f4JGoxs95gn2g9E7YtTQZn8-_NfMsEAHtqjFGEVszgE5oJ5o1TRhKqO0oo7dSNvSVhJ4gNZJAM6Io1iL7-mdAw')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/60 via-primary-container/30 to-primary-container/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
          <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6">PRIVATE EVENTS & EXPERIENCES</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
            Beyond the<br /><span className="italic font-normal">Invitation.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Access events that exist outside the public sphere. OPV curates, verifies, and arranges attendance at the world&apos;s most rarefied gatherings — from private opera to masked galas.
          </p>
          <a href="#listings" className="bg-secondary text-primary-container px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase inline-block hover:opacity-90 transition-opacity">Explore Experiences</a>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-primary-container py-8 border-b border-outline-variant/20">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-wrap gap-6 items-center">
            {["All Experiences", "Art & Culture", "Gastronomy", "Private Gala", "Performance"].map((cat) => (
              <button key={cat} className={`font-label-caps text-[11px] uppercase tracking-widest pb-1 transition-all ${cat === "All Experiences" ? "text-secondary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"}`}>{cat}</button>
            ))}
            <div className="ml-auto flex gap-4">
              <input type="date" className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary" />
              <input type="text" placeholder="Location..." className="bg-transparent border-b border-outline-variant/50 py-2 text-on-surface text-sm focus:outline-none focus:border-secondary placeholder:text-on-surface-variant/40 w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Listings */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="listings">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              title: "The Vintage Archeology: 1945 Reserve",
              venue: "Château d'Yquem, Bordeaux",
              date: "Oct 12",
              guests: "12 Guests",
              type: "PRIVATE INVITATION",
              price: "Enquiry Only",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS3ZNXMWzg7WFKHFypS45CItQpnaRxg5v4VllhA3GhOIBo6SCIazxFx43yG8BIaLPc1kWNz7s2Taz7cdWMcsB54yh4bohsFljFEQAoquS4QhTn7UP0ZYs6JMG902wV0mJbmWk1HOp5WMnL0TBV34iPJs_21kio9AABqozExcZXWYyrRztVf2w4sPcN2mtMhVjc1Sa_AkQD4MyM-8qggGo4WAIixja-HLW9ftBHo-uCHSbYumFZ4flFQg",
            },
            {
              title: "Opera Under the Duomo Spires",
              venue: "Terrazza Duomo, Milan",
              date: "Sep 28",
              guests: "50 Guests",
              type: "PUBLIC LISTING",
              price: "$2,450/Seat",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUj7ZcIrfCgnAEjpcZXS01bQIAGITI5uRCeoAPFac7U0rWA7NL1r6vkrEnlC68wk7IAWmiF7zUnfvU44K_DVgsa-nxMC9nq3WQNV1aM6Pi2quso7GXbwnPLAfPwizl6k7hP2xGYIzB48oO_vX8GDw0bf-ByAtkuHfefKyUbfgtOg-kyp9LDlBrccfKdv8C8iQTca0q-UwEZMkq2hkFEVG_MdWYr5ZLh8H0OviiQNOUoBwuMg-nKWxrQ",
            },
            {
              title: "The Unveiling: Prototype 01",
              venue: "Undisclosed, Zurich",
              date: "Nov 05",
              guests: "20 Guests",
              type: "PRIVATE INVITATION",
              price: "Enquiry Only",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjiU1D5TqD6zstaz2aBp-P6LGvTtsYo3Gg6ZCTvTQzaFwP0KZjt4vgX6E4DA2nUj3u-XI4OvzY5tK7xmib9elomtosr94icByQgW9LxFCUcs-iKtxtOGKwmSbiP8eUmrfGICqdX2IivX0c3dW738d5-coJUE3uTKKbOWjM_PKvx13gbahpMaxNUOp3BrWMr2fxkzFLWRD8qt44kL2mTpPeJc_X0IVJ7u-YIIQVDAneh6qngNgRKBFFKg",
            },
          ].map(({ title, venue, date, guests, type, price, img }) => (
            <div key={title} className="group bg-primary-container border border-outline-variant/10 overflow-hidden hover:border-secondary/40 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <div className={`font-label-caps text-[10px] px-3 py-1 ${type === "PRIVATE INVITATION" ? "bg-primary-container text-secondary border border-secondary" : "bg-secondary text-primary-container"}`}>{type}</div>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-on-surface mb-2">{title}</h3>
                <p className="text-secondary font-label-caps text-[10px] mb-6">{venue}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-outline-variant/20">
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Date</div>
                    <div className="text-sm text-on-surface">{date}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-on-surface-variant mb-1">Capacity</div>
                    <div className="text-sm text-on-surface">{guests}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps font-bold text-on-surface">{price}</span>
                  <a href="/concierge" className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                    REQUEST <span className="material-symbols-outlined text-sm">east</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-uMZNLRi8Hj0bTcGwJSejzG1p35MbmZK5O8_Akm2zUlO62HYXfpLwsEA9fIG8vt_xkJOwG15r6KnjzLT2czpgVycLpWudfG40e5cge8WxSjND47evYTWxi2Syw9_kY9kMivOgTPcFztKcCJevdnU9h7FQTe78fvm2f4JGoxs95gn2g9E7YtTQZn8-_NfMsEAHtqjFGEVszgE5oJ5o1TRhKqO0oo7dSNvSVhJ4gNZJAM6Io1iL7-mdAw')" }}></div>
              <div className="absolute inset-0 bg-primary-container/20"></div>
            </div>
            <div className="space-y-6">
              <span className="font-label-caps text-secondary tracking-widest">FEATURED EVENT</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface leading-tight">The Obsidian Gala:<br />A Night of Masked Artistry</h2>
              <p className="text-on-surface-variant leading-relaxed">Held within the private gardens of a Kyoto estate, The Obsidian Gala merges traditional Kabuki performance with contemporary electronic composition. Attendance is by OPV invitation only. No photography permitted.</p>
              <div className="space-y-3">
                {["Private Kyoto Estate Gardens", "Kabuki & Electronic Composition", "Invitation Only — Max 30 Guests", "Full Discretion Guaranteed"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="text-sm font-label-caps">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/concierge" className="bg-secondary text-primary-container px-10 py-4 font-label-caps inline-block hover:opacity-90 transition-opacity">REQUEST INVITATION</a>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Form */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-4">Request an Invitation</h2>
          <p className="text-on-surface-variant">For private events, submit your details below. Our team reviews all requests within 24 hours.</p>
        </div>
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Full Name</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="Your formal name" type="text" />
            </div>
            <div className="border-b border-outline-variant/50 py-4">
              <label className="block font-label-caps text-[10px] text-secondary mb-1">Membership Number</label>
              <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="OPV-XXXXXX" type="text" />
            </div>
          </div>
          <div className="border-b border-outline-variant/50 py-4">
            <label className="block font-label-caps text-[10px] text-secondary mb-1">Preferred Date / Event</label>
            <input className="w-full bg-transparent border-none p-0 focus:outline-none text-on-surface font-body-md placeholder:text-on-surface/20" placeholder="Event name or date range" type="text" />
          </div>
          <div className="flex justify-center pt-6">
            <button className="bg-secondary text-primary-container px-16 py-5 font-label-caps hover:opacity-90 transition-all" type="submit">
              Submit Request
            </button>
          </div>
        </form>
      </section>

      {/* FAQ */}
      <section className="py-section-gap px-margin-desktop max-w-3xl mx-auto bg-primary-container">
        <h2 className="font-display-lg text-headline-md text-on-surface mb-12 text-center">Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How are private events curated?", a: "Our cultural intelligence team monitors global circuits — private art fairs, estate galas, collector dinners — and pre-negotiates access for OPV members. Every listing is personally vetted before being offered." },
            { q: "What is the review process for invitations?", a: "All invitation requests are reviewed by our concierge directors. For private events, host approval may be required. You will receive a response within 24 hours of submission." },
            { q: "Can I host a private event through OPV?", a: "Yes. We manage private event production for members — from intimate dinners to exclusive gatherings of up to 200. Contact our events director for a confidential consultation." },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-outline-variant/20 pb-6">
              <h3 className="font-label-caps text-on-surface mb-3">{q}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Access the Unseen</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our events team manages a private calendar unavailable to the public. Speak to a guardian to explore what is available this season.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SPEAK TO A GUARDIAN</a>
        </div>
      </section>
    </>
  );
}
