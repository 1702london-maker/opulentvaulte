"use client";

import { FormEvent, useMemo, useState } from "react";

type PropertyType = "penthouse" | "villa" | "estate" | "townhouse" | "apartment";
type PropertyCity = "Manchester" | "London" | "Leeds" | "Cheshire" | "Edinburgh" | "International";

type Property = {
  id: string;
  name: string;
  city: PropertyCity;
  area: string;
  type: PropertyType;
  designation: "opv-managed" | "partner-hosted";
  beds: number;
  guests: number;
  priceFrom: number;
  image: string;
  chips: string[];
  verified: boolean;
  description: string;
};

const properties: Property[] = [
  ["crescent-riverside", "The Crescent Riverside", "Manchester", "Salford Quays", "penthouse", "opv-managed", 4, 8, 850, "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", ["River View", "Private Terrace", "Chef Kitchen", "Concierge"], true, "A glass-fronted residence above the water with generous hosting space."],
  ["alderton-hall", "Alderton Hall", "Cheshire", "Alderley Edge", "estate", "partner-hosted", 7, 14, 3200, "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80", ["Private Grounds", "Heated Pool", "Helipad", "Staff Included"], true, "A secluded country estate prepared for full-house private stays."],
  ["knightsbridge-residence", "The Knightsbridge Residence", "London", "Knightsbridge", "townhouse", "opv-managed", 5, 10, 4100, "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", ["Mayfair Adjacent", "Butler", "Rooftop Terrace", "Wine Cellar"], true, "A polished townhouse moments from London's most private addresses."],
  ["harewood-grange", "Harewood Grange", "Leeds", "Harewood", "estate", "partner-hosted", 6, 12, 2800, "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80", ["Private Grounds", "Hot Tub", "Home Cinema", "Stables"], true, "A Yorkshire estate with space for family gatherings and quiet arrivals."],
  ["royal-mills-penthouse", "Royal Mills Penthouse", "Manchester", "Ancoats", "penthouse", "opv-managed", 3, 6, 890, "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80", ["Mill Conversion", "Rooftop", "City Views", "Parking"], true, "Industrial heritage softened by considered interiors and skyline views."],
  ["mayfair-suite", "The Mayfair Suite", "London", "Mayfair", "apartment", "opv-managed", 2, 4, 2900, "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", ["24h Doorman", "Butler", "Concierge", "Bond Street"], true, "A discreet Mayfair apartment tuned for shopping, dining, and rest."],
  ["castlefield-loft", "Castlefield Loft", "Manchester", "Castlefield", "apartment", "partner-hosted", 2, 4, 620, "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80", ["Canal View", "Balcony", "Viaduct Views", "Secure Parking"], false, "A calm canal-side base with open-plan living and city access."],
  ["mount-street-w1", "Mount Street W1", "London", "Mayfair", "townhouse", "opv-managed", 4, 8, 3800, "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", ["Private Courtyard", "Wine Cellar", "Staff", "Mayfair"], true, "A composed W1 house with private entertaining space and staff access."],
  ["grain-loft", "The Grain Loft", "Leeds", "Granary Wharf", "apartment", "partner-hosted", 2, 4, 580, "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80", ["Waterfront", "Canal Views", "Exposed Ironwork", "Art Hung"], false, "A warehouse apartment with waterfront outlooks and strong character."],
  ["thornfield-manor", "Thornfield Manor", "Cheshire", "Wilmslow", "villa", "partner-hosted", 8, 16, 5200, "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80", ["Tennis Court", "Pool", "Cinema Room", "Housekeeper"], true, "A private villa with leisure spaces for longer hosted weekends."],
  ["deansgate-residences", "Deansgate Residences", "Manchester", "Deansgate", "penthouse", "opv-managed", 2, 4, 740, "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80", ["Beetham Tower Views", "Gym", "Concierge", "Valet"], true, "A high-floor residence for efficient city stays and late check-ins."],
  ["belgravia-mews", "Belgravia Mews", "London", "Belgravia", "townhouse", "opv-managed", 3, 6, 3400, "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", ["Private Garage", "Garden", "Period Features", "Butler"], true, "A quiet mews house with polished service and private parking."],
  ["victoria-quarter-flat", "Victoria Quarter Flat", "Leeds", "City Centre", "apartment", "partner-hosted", 1, 2, 390, "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", ["Arcade Adjacent", "Designer Interiors", "Concierge"], false, "A compact city apartment for shopping-led weekends and short stays."],
  ["cheshire-house", "The Cheshire House", "Cheshire", "Knutsford", "villa", "partner-hosted", 5, 10, 2100, "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", ["Walled Garden", "Hot Tub", "Chef's Kitchen", "Games Room"], true, "A village-edge villa with garden privacy and sociable interiors."],
  ["shoreditch-loft", "Shoreditch Loft", "London", "Shoreditch", "apartment", "partner-hosted", 2, 4, 980, "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1200&q=80", ["Rooftop Terrace", "Industrial Design", "Art Collection"], false, "A loft residence close to galleries, members clubs, and studios."],
  ["northern-quarter-residence", "The Northern Quarter Residence", "Manchester", "Northern Quarter", "apartment", "opv-managed", 1, 2, 480, "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=80", ["NQ Location", "Designer Fit-out", "Concierge", "Gym"], true, "A sharp city apartment with OPV support and walkable dining."],
].map(([id, name, city, area, type, designation, beds, guests, priceFrom, image, chips, verified, description]) => ({
  id,
  name,
  city,
  area,
  type,
  designation,
  beds,
  guests,
  priceFrom,
  image,
  chips,
  verified,
  description,
})) as Property[];

const typeFilters = ["All", "Penthouse", "Villa", "Estate", "Townhouse", "Apartment"];
const cityFilters = ["All Cities", "Manchester", "London", "Leeds", "Cheshire", "Edinburgh", "International"];
const destinations = [
  ["Manchester", "United Kingdom", "https://images.unsplash.com/photo-1594306221495-efb0f6b82a9e?auto=format&fit=crop&w=900&q=80"],
  ["London", "United Kingdom", "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"],
  ["Leeds", "United Kingdom", "https://images.unsplash.com/photo-1583178005425-63f19d320f25?auto=format&fit=crop&w=900&q=80"],
  ["Cheshire", "United Kingdom", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"],
  ["Edinburgh", "Scotland", "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=900&q=80"],
  ["Côte d'Azur", "France", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"],
];
const verificationSteps = ["Property Inspection", "Owner Verification", "Legal Title Check", "Photography Audit", "Concierge Walkthrough"];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-[#1B6CA8] ${className}`}>{children}</p>;
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-['Cormorant_Garamond'] text-5xl leading-none text-[#1A2733] md:text-7xl ${className}`}>{children}</h2>;
}

export default function StaysPage() {
  const [activeType, setActiveType] = useState("All");
  const [activeCity, setActiveCity] = useState("All Cities");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        const matchesType = activeType === "All" || property.type === activeType.toLowerCase();
        const matchesCity = activeCity === "All Cities" || property.city === activeCity;
        return matchesType && matchesCity;
      }),
    [activeType, activeCity]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSent(false);
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "stays",
        name: payload.name,
        email: payload.email,
        phone: "",
        message: String(payload.requirements || ""),
        payload,
      }),
    });
    setSubmitting(false);
    if (response.ok) {
      setSent(true);
      form.reset();
    }
  }

  return (
    <div className="bg-white font-['DM_Sans'] text-[#1A2733]">
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap");`}</style>
      <section className="relative flex h-[85vh] items-end overflow-hidden bg-white">
        <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85" alt="Private residence interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-16 md:px-10">
          <Eyebrow className="mb-5 text-white">Private Residences</Eyebrow>
          <h1 className="max-w-4xl font-['Cormorant_Garamond'] text-6xl leading-none text-white md:text-8xl">The property you <em className="italic text-white">couldn't find.</em></h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-white/90">Private residences, city penthouses, and country estates verified for guests who expect the unseen to be handled.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#properties" className="border border-[#1B6CA8] bg-[#1B6CA8] px-7 py-4 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-white">Browse all stays</a>
            <a href="#enquiry" className="border border-white px-7 py-4 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-white">Send your brief</a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#C8DFF0] bg-white">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 px-6 md:grid-cols-4 md:px-10">
          {[["500+", "Curated Properties"], ["16", "Available Now"], ["200", "Point Verification"], ["24/7", "Concierge Access"]].map(([number, label]) => (
            <div key={label} className="border-[#C8DFF0] py-10 odd:border-r md:border-r md:last:border-r-0">
              <p className="font-['Cormorant_Garamond'] text-5xl text-[#1B6CA8]">{number}</p>
              <p className="mt-2 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-[#1A2733]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-b border-[#C8DFF0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-4 px-6 py-5 md:px-10">
          {[typeFilters, cityFilters].map((filters, index) => (
            <div key={index} className="flex gap-3 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const active = index === 0 ? activeType === filter : activeCity === filter;
                return (
                  <button key={filter} onClick={() => (index === 0 ? setActiveType(filter) : setActiveCity(filter))} className={`shrink-0 border px-4 py-2 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.18em] ${active ? "border-[#1B6CA8] bg-[#1B6CA8] text-white" : "border-[#C8DFF0] bg-white text-[#1A2733]"}`}>
                    {filter}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section id="properties" className="bg-white py-28">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <article key={property.id} data-type={property.type} data-city={property.city} className="group border border-[#C8DFF0] bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={property.image} alt={property.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 border border-[#1B6CA8] bg-white px-3 py-2 font-['DM_Mono'] text-[0.62rem] uppercase tracking-[0.18em] text-[#1B6CA8]">{property.designation === "opv-managed" ? "OPV Managed" : "Partner Hosted"}</div>
                  {property.verified && <div className="absolute right-4 top-4 bg-[#1B6CA8] px-3 py-2 font-['DM_Mono'] text-[0.62rem] uppercase tracking-[0.18em] text-white">Verified</div>}
                </div>
                <div className="p-6">
                  <p className="font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-[#1B6CA8]">{property.city}, {property.area}</p>
                  <h3 className="mt-3 font-['Cormorant_Garamond'] text-2xl text-[#1A2733]">{property.name}</h3>
                  <p className="mt-3 min-h-12 font-light text-[#556574]">{property.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{property.chips.map((chip) => <span key={chip} className="border border-[#D4EAF6] px-2.5 py-1.5 font-['DM_Mono'] text-[0.58rem] uppercase tracking-[0.16em] text-[#1A2733]">{chip}</span>)}</div>
                  <div className="mt-5 flex items-center gap-3 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.16em] text-[#1A2733]"><span>{property.guests} Guests</span><span className="h-1 w-1 bg-[#1B6CA8]" /><span>{property.beds} Bed</span></div>
                  <p className="mt-5 font-['Cormorant_Garamond'] text-4xl text-[#1B6CA8]">£{property.priceFrom.toLocaleString("en-GB")}<span className="ml-1 font-['DM_Sans'] text-sm font-light text-[#556574]">/night</span></p>
                  <div className="mt-6 grid grid-cols-2 gap-3"><button className="border border-[#1B6CA8] bg-[#1B6CA8] py-3 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-white">View</button><a href="#enquiry" className="border border-[#1B6CA8] py-3 text-center font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-[#1B6CA8]">Request</a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
          <div><Eyebrow className="mb-5">OPV Standard</Eyebrow><Heading>Two designations. <em className="italic text-[#1B6CA8]">One threshold.</em></Heading></div>
          <div className="grid gap-6 md:grid-cols-2">
            {[["OPV Managed", "Residences directly managed by the OPV team, with arrival, housekeeping, concierge, and guest standards controlled end to end."], ["Partner Hosted", "Owner-operated properties physically audited by OPV, with access, safety, photography, and hospitality standards verified before listing."]].map(([title, copy]) => (
              <div key={title} className="border border-[#C8DFF0] bg-white p-8"><span className="border border-[#1B6CA8] px-3 py-2 font-['DM_Mono'] text-[0.62rem] uppercase tracking-[0.18em] text-[#1B6CA8]">{title}</span><h3 className="mt-8 font-['Cormorant_Garamond'] text-4xl text-[#1A2733]">{title}</h3><p className="mt-4 font-light text-[#556574]">{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF4FB] py-28">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {verificationSteps.map((title) => <div key={title} className="min-w-[280px] border-l-2 border-[#1B6CA8] pl-6"><h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A2733]">{title}</h3><p className="mt-4 text-sm font-light leading-6 text-[#556574]">Every checkpoint is recorded before a residence is presented, from access and ownership to imagery, amenities, and arrival flow.</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <Eyebrow className="mb-5">Destinations</Eyebrow><Heading className="mb-12">Residences by <em className="italic text-[#1B6CA8]">request.</em></Heading>
          <div className="grid gap-8 md:grid-cols-3">{destinations.map(([city, country, image]) => <div key={city} className="relative aspect-[3/4] overflow-hidden"><img src={image} alt={city} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" /><div className="absolute bottom-6 left-6"><h3 className="font-['Cormorant_Garamond'] text-5xl text-white">{city}</h3><p className="mt-2 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-white/70">{country}</p></div></div>)}</div>
        </div>
      </section>

      <section className="bg-[#EAF4FB] py-28">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-6 md:grid-cols-2 md:px-10">
          <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80" alt="Editorial private residence" className="h-[720px] w-full object-cover" />
          <div className="flex flex-col justify-center"><Eyebrow className="mb-5">Off-Market</Eyebrow><Heading>Not every property <em className="italic text-[#1B6CA8]">is listed.</em></Heading><p className="mt-8 font-light leading-8 text-[#556574]">The most guarded residences rarely appear in public search. They are shared quietly, after the brief is understood and the guest profile is approved.</p><p className="mt-5 font-light leading-8 text-[#556574]">OPV property guardians can source private villas, serviced estates, and temporary city residences through a discreet owner network.</p><a href="#enquiry" className="mt-8 w-fit border border-[#1B6CA8] bg-[#1B6CA8] px-7 py-4 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-white">Speak to a property guardian →</a></div>
        </div>
      </section>

      <section id="enquiry" className="bg-white py-28">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-6 md:grid-cols-2 md:px-10">
          <div><Eyebrow className="mb-5">Enquiry</Eyebrow><Heading>Tell us the <em className="italic text-[#1B6CA8]">dates.</em></Heading><p className="mt-8 max-w-xl font-light leading-8 text-[#556574]">Share the destination, timing, guest profile, and any non-negotiables. The concierge team will respond with suitable residences or private options.</p><div className="mt-10 space-y-5">{["Verified before presentation", "Private options available", "Concierge support from brief to arrival"].map((benefit) => <div key={benefit} className="flex items-center gap-4"><span className="font-['DM_Mono'] text-[#1B6CA8]">✓</span><span className="font-light">{benefit}</span></div>)}</div></div>
          <form onSubmit={handleSubmit} className="grid gap-4 border border-[#C8DFF0] bg-white p-6 md:p-8">
            <input required name="name" placeholder="Full name" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" />
            <input required name="email" type="email" placeholder="Email" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" />
            <select name="destination" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]">{["Manchester", "London", "Leeds", "Cheshire", "Edinburgh", "International"].map((item) => <option key={item}>{item}</option>)}</select>
            <div className="grid gap-4 md:grid-cols-2"><input name="checkIn" type="date" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" /><input name="checkOut" type="date" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" /></div>
            <div className="grid gap-4 md:grid-cols-2"><input name="guests" type="number" min="1" placeholder="Guests" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" /><select name="propertyType" className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]">{["Penthouse", "Villa", "Estate", "Townhouse", "Apartment"].map((item) => <option key={item}>{item}</option>)}</select></div>
            <textarea name="requirements" placeholder="Special requirements" rows={5} className="border border-[#C8DFF0] px-4 py-4 font-light text-[#1A2733] outline-none focus:border-[#1B6CA8]" />
            <button disabled={submitting} className="border border-[#1B6CA8] bg-[#1B6CA8] py-4 font-['DM_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-white disabled:opacity-70">{submitting ? "Sending..." : sent ? "Brief sent" : "Send your brief →"}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
