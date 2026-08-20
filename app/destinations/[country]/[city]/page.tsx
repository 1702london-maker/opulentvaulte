import { createServerClient } from "@/lib/supabase";
import AIConciergeSection from "@/components/AIConciergeSection";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { country: string; city: string };
}

export async function generateMetadata({ params }: Props) {
  const slug = `${params.country}-${params.city}`;
  const supabase = createServerClient();
  const { data } = await supabase
    .from("destinations")
    .select("city, country, intro_copy")
    .eq("slug", slug)
    .single();

  return {
    title: data ? `${data.city}, ${data.country} | Opulent Vault` : "Destination | Opulent Vault",
    description: data?.intro_copy?.slice(0, 160) ?? "Luxury stays and bespoke experiences curated by Opulent Vault.",
  };
}

export default async function DestinationPage({ params }: Props) {
  const slug = `${params.country}-${params.city}`;
  const supabase = createServerClient();

  const [{ data: destination }, { data: properties }, { data: experiences }] = await Promise.all([
    supabase.from("destinations").select("*").eq("slug", slug).single(),
    supabase.from("properties").select("*").eq("published", true).ilike("city", `%${params.city.replace(/-/g, " ")}%`).limit(3),
    supabase.from("experiences").select("*").eq("published", true).ilike("location", `%${params.city.replace(/-/g, " ")}%`).limit(3),
  ]);

  if (!destination) notFound();

  const cityName = destination.city;
  const countryName = destination.country;

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={destination.hero_image_path || "https://lh3.googleusercontent.com/aida-public/AB6AXuA5gKWi4-CCPw3xw_7wde24m1wGLEewxhhJdh83-oD-mSK6oG2UTLxhS8h5aARNtv8-_6CHbUy2rj6jNEKtDnQm05-kPKoSeLrdGXApbWw8GbdkM83s_J45M9ii0OKFIKl5oeXJ-bM67Nd4Orpyvr8YQc7SmAFcW-klsYdtAmNGm7-XiPJRLGYnuG31J3GrlrXWw0ZNYSMTZ5slbUO8FluOMsskB1pu6CzBBCykARjzL55_-fvU1CJwSq6SPMJjpoakOd7KIVzo5IJf"}
          alt={`${cityName} luxury destination`}
          data-placeholder="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 w-full">
          <div className="mb-4">
            <Link href="/destinations" className="font-label-caps text-label-caps text-on-primary/60 hover:text-on-primary uppercase tracking-widest transition-colors">
              ← Destinations
            </Link>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed-dim block mb-4 uppercase tracking-widest">
            {countryName}
          </span>
          <h1 className="font-display-xl text-display-xl text-white text-shadow-premium leading-none mb-6">
            {cityName}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-4 uppercase">The Destination</span>
            <h2 className="font-serif text-headline-lg text-primary mb-8 leading-tight">
              {cityName}, as only Opulent Vault knows it.
            </h2>
          </div>
          <div>
            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
              {destination.intro_copy}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-3 uppercase">Curated Stays</span>
            <h2 className="font-serif text-headline-md text-primary">Where You&apos;ll Rest</h2>
          </div>
          <Link href={`/stays?city=${cityName}`} className="font-label-caps text-label-caps border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all uppercase">
            View All
          </Link>
        </div>
        {properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-[4/5] relative bg-surface-container">
                  {p.hero_image_path && (
                    <img src={p.hero_image_path} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <h3 className="font-serif text-headline-md mb-2">{p.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant mb-3">{p.city} · {p.guests} Guests · {p.bedrooms} Bedrooms</p>
                <p className="font-label-caps text-label-caps text-primary">From £{p.price_from?.toLocaleString()} / {p.price_unit}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-outline-variant/30 p-16 text-center">
            <p className="font-sans text-body-md text-on-surface-variant mb-6">
              Our {cityName} collection is being curated. Contact our concierge team for availability.
            </p>
            <Link href="/contact" className="font-label-caps text-label-caps border-b border-primary pb-1 uppercase hover:text-secondary hover:border-secondary transition-all">
              Contact Concierge
            </Link>
          </div>
        )}
      </section>

      {/* Featured Experiences */}
      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-12">
            <span className="font-label-caps text-label-caps text-secondary block mb-3 uppercase">Curated Experiences</span>
            <h2 className="font-serif text-headline-md text-primary">What You&apos;ll Do</h2>
          </div>
          {experiences && experiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((e) => (
                <div key={e.id} className="bg-surface-container-low border border-outline-variant/30 group cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-surface-container">
                    {e.image_path && (
                      <img src={e.image_path} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="font-label-caps text-[10px] text-secondary uppercase block mb-2">{e.category?.replace(/_/g, " ")}</span>
                    <h3 className="font-serif text-xl mb-2">{e.title}</h3>
                    <p className="font-sans text-sm text-on-surface-variant">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-outline-variant/30 p-16 text-center">
              <p className="font-sans text-body-md text-on-surface-variant">
                Bespoke {cityName} experiences available on request. Speak to our concierge team.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why OPV Here */}
      {destination.why_opv_copy && (
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-4 uppercase">Why Opulent Vault</span>
              <h2 className="font-serif text-headline-md text-primary mb-6">The OPV Difference in {cityName}</h2>
              <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">{destination.why_opv_copy}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Vetted Properties", "24/7 Concierge", "Private Transfers", "Bespoke Experiences"].map((item) => (
                <div key={item} className="border border-outline-variant/30 p-6">
                  <span className="material-symbols-outlined text-secondary block mb-3">check_circle</span>
                  <p className="font-label-caps text-label-caps text-primary uppercase">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AIConciergeSection />
    </div>
  );
}
