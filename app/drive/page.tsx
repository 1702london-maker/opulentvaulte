import { createServerClient } from "@/lib/supabase";
import AIConciergeSection from "@/components/AIConciergeSection";

const CHAUFFEUR_SERVICES = [
  { icon: "local_airport", title: "Airport Transfers", desc: "Seamless collection and drop-off at every major UK and European airport, with real-time flight tracking and meet-and-greet service." },
  { icon: "sports_score", title: "Event & Race Days", desc: "Discreet chauffeur services for exclusive sporting events, premieres, galas, and private gatherings across the continent." },
  { icon: "business_center", title: "Corporate Travel", desc: "Dedicated executive transport accounts with priority booking, invoicing, and a dedicated account manager for your business." },
  { icon: "route", title: "Long Distance Journeys", desc: "Multi-day itineraries through Europe with overnight stops, route planning, and exclusive property recommendations en route." },
];

const FLEET_TIERS = [
  { tier: "Classic", from: "£350", vehicles: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"], tag: "Executive Travel" },
  { tier: "Grand", from: "£650", vehicles: ["Bentley Flying Spur", "Rolls-Royce Ghost", "Mercedes Maybach"], tag: "Prestige Collection" },
  { tier: "Icon", from: "£1,200", vehicles: ["Rolls-Royce Phantom", "Bentley Mulsanne", "Lamborghini Urus"], tag: "Ultra-Luxury" },
];

const STEPS = [
  { n: "01", title: "Make Your Enquiry", desc: "Complete our brief booking form or speak directly with a concierge. We handle everything from that point." },
  { n: "02", title: "Select Your Vehicle", desc: "Your concierge presents a curated vehicle shortlist matched to your journey type and personal preference." },
  { n: "03", title: "Confirm & Brief", desc: "We confirm your dedicated chauffeur, review route requirements, and arrange any additional preferences." },
  { n: "04", title: "Travel in Splendour", desc: "From collection to destination, every moment is managed to perfection. Focus only on what matters to you." },
];

const FAQS = [
  { q: "Are all chauffeurs licensed and vetted?", a: "Every chauffeur in the Opulent Vault fleet holds full licensing, enhanced DBS clearance, and completes our bespoke luxury service training programme." },
  { q: "Can I request a specific vehicle?", a: "Absolutely. If your preferred vehicle is available in our fleet, it can be reserved. For special occasions, we can also source vehicles outside our standard collection." },
  { q: "Is there a minimum hire period?", a: "For chauffeur services there is a 3-hour minimum. Self-drive hire begins at 24 hours with collection from our secure London location." },
  { q: "Do you offer international chauffeur services?", a: "Yes. We operate pan-European chauffeur networks and can arrange seamless multi-country transport with local bilingual drivers in each territory." },
];

export default async function DrivePage() {
  let selfDriveVehicles: Array<{ id: string; name: string; description: string | null; price_per_day: number | null; image_url: string | null }> = [];
  try {
    const db = createServerClient();
    const { data } = await db.from("vehicles").select("id,name,description,price_per_day,image_url").eq("category", "self_drive").limit(6);
    if (data) selfDriveVehicles = data;
  } catch {}

  const fallbackVehicles = [
    { id: "1", name: "Ferrari Roma", description: "Gran Turismo elegance meets exhilarating performance across any road.", price_per_day: 1800, image_url: null },
    { id: "2", name: "Lamborghini Huracán", description: "Raw Italian supercar performance with remarkable daily usability.", price_per_day: 2200, image_url: null },
    { id: "3", name: "McLaren GT", description: "The perfect fusion of touring comfort and track-bred performance.", price_per_day: 2000, image_url: null },
  ];
  if (!selfDriveVehicles.length) selfDriveVehicles = fallbackVehicles;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-end pb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUWflzRxQf3v9NG7idPR4F2Ch_K5LDzCe7ThlZ_9SWM1hZYl6NIM01LtLXq-69iz-uvljmV54dfcQQDsE22Ei0wcR_tVVdhZJIbd_xuuT-lOO-hQ3dDSmIWCM017cDlVxUQ-3tJn0lroh6binHLOlgcSIYoeK1nhYNyZiRjhevxWdEjq30xZHy4jtzZMp9PRCafwSMvm6wSvetzdzZXj4E88iXTMZc7WVckGPkaAkI0xjf5j7v_wRfg" alt="Drive" data-placeholder="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-background" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">Opulent Vault Drive</span>
          <h1 className="font-serif text-display-xl text-on-primary max-w-3xl leading-[1.1]">The Art of<br />Arrival.</h1>
          <p className="font-sans text-body-lg text-on-primary/70 mt-6 max-w-xl">Commanding vehicles. Masterful chauffeurs. Every journey an experience in its own right.</p>
        </div>
      </section>

      {/* Chauffeur Services */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Chauffeur Services</span>
            <h2 className="font-serif text-headline-lg">Driven by Precision.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {CHAUFFEUR_SERVICES.map((s) => (
              <div key={s.title} className="flex gap-8 p-10 bg-surface-container-low border border-outline/5 hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-secondary">
                  <span className="material-symbols-outlined text-secondary">{s.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-headline-md mb-3">{s.title}</h3>
                  <p className="font-sans text-body-md text-on-surface-variant">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self Drive Collection */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Self Drive Collection</span>
            <h2 className="font-serif text-headline-lg">Command the Road Yourself.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {selfDriveVehicles.map((v) => (
              <div key={v.id} className="bg-surface group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-surface-dim">
                  {v.image_url ? (
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={v.image_url} alt={v.name} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-container-high">
                      <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">directions_car</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-headline-md mb-2">{v.name}</h3>
                  <p className="font-sans text-body-md text-on-surface-variant mb-4">{v.description}</p>
                  {v.price_per_day && <p className="font-label-caps text-label-caps text-secondary">from £{v.price_per_day.toLocaleString()}/day</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Tiers */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Fleet Collections</span>
            <h2 className="font-serif text-headline-lg">Three Tiers of Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {FLEET_TIERS.map((t, i) => (
              <div key={t.tier} className={"p-10 border " + (i === 1 ? "bg-primary text-on-primary border-primary" : "border-outline-variant/30 bg-surface-container-low")}>
                <span className={"font-label-caps text-label-caps mb-3 block " + (i === 1 ? "text-secondary-fixed" : "text-secondary")}>{t.tag}</span>
                <h3 className={"font-serif text-headline-lg mb-1 " + (i === 1 ? "text-on-primary" : "")}>{t.tier}</h3>
                <p className={"font-serif text-headline-md mb-8 " + (i === 1 ? "text-secondary-fixed" : "text-secondary")}>from {t.from}</p>
                <ul className="space-y-3">
                  {t.vehicles.map((v) => (
                    <li key={v} className={"flex items-center gap-3 font-sans text-body-md " + (i === 1 ? "text-on-primary/70" : "text-on-surface-variant")}>
                      <span className={"material-symbols-outlined text-sm " + (i === 1 ? "text-secondary-fixed" : "text-secondary")}>check_small</span>{v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">How It Works</span>
            <h2 className="font-serif text-headline-lg">The Booking Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-serif text-display-xl text-secondary/20 mb-4">{s.n}</div>
                <h3 className="font-serif text-headline-md mb-4">{s.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={FAQS} />
      <AIConciergeSection />
    </>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-12">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block">FAQ</span>
        <h2 className="font-serif text-headline-lg">Common Questions</h2>
      </div>
      <div className="max-w-3xl mx-auto divide-y divide-outline-variant/20">
        {faqs.map((f, i) => (
          <div key={i} className="py-6">
            <h3 className="font-serif text-headline-md mb-3">{f.q}</h3>
            <p className="font-sans text-body-md text-on-surface-variant">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}