import Link from "next/link";
import AIConciergeSection from "@/components/AIConciergeSection";

const UK_CITIES = [
  { city: "London", country: "united-kingdom", slug: "united-kingdom-london", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5gKWi4-CCPw3xw_7wde24m1wGLEewxhhJdh83-oD-mSK6oG2UTLxhS8h5aARNtv8-_6CHbUy2rj6jNEKtDnQm05-kPKoSeLrdGXApbWw8GbdkM83s_J45M9ii0OKFIKl5oeXJ-bM67Nd4Orpyvr8YQc7SmAFcW-klsYdtAmNGm7-XiPJRLGYnuG31J3GrlrXWw0ZNYSMTZ5slbUO8FluOMsskB1pu6CzBBCykARjzL55_-fvU1CJwSq6SPMJjpoakOd7KIVzo5IJf" },
  { city: "Manchester", country: "united-kingdom", slug: "united-kingdom-manchester", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUkK6fS5qGoHzSsWDf-Cd_cwhTMyPJwWpdkO_9FUVlk3W9dzZgylDrk9h-ROIuVzKd2Ti5R4ryoNxY_V3xaAuJy0H281cdTcIjep8rIFRM3Z1Xdq-sxbTmTfGbrLh84RzHeOWTarZ2KtyI4KDKROqAurgldRV4dIiuJFWSlRIO_yV5L0Yyr_JxfDNlQwZOqQffhxqtFmZIcgpkk_-D4zcMVgKjw7RxaJrFN2XwSgWosEXdFznvEGL3vaokH5KzTd5g7Th1hY7pqf5c" },
  { city: "Birmingham", country: "united-kingdom", slug: "united-kingdom-birmingham", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwwSJa6wK9BWaHNanQ1haX1YO1gR_f14ockT0ETiUhsB4ZS1OgJNcwoyDQUHKUgZeBiyuOYaiaxxgah_XRg2lsrZotUehNm0auOTPFCcYtUHiDtGzE-WIn70VeASVymUmdTkFqDqxrSsPKqjs1cvX0v4BChR4PaYftTOxV5sr0RsaHqyfQyJOlMHQJ_7zXR9zFaRZYY7x4Dk-M8D2T5nLcf4G5uKS1zcMtfvwd_z8P8HJB-L5OJTCrBtOnW8rUA0ZBCT1XljZ37mZ5" },
  { city: "Liverpool", country: "united-kingdom", slug: "united-kingdom-liverpool", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4VcyGmLGmOP0qA2ygDixzzTPm8zTVqdWVNVSOW4iPwkmNPqbTvplF2TZ0uU1mdY7er7W84shHXUjv__GKMQgSlP4e1U9qpYUItHc0HYwiWj0-omGIwaPD5tLVBQQNt2edq2yLToBDd2prDqqrH7XSuxI_6hFiXaf36shvhUlN6142AUwhQCbb_VC1HUc1DYMTQJ4IAo3dVMTne9S9rM-fn321T_wy6UCxNMeC0eZF_g0dkntcDefpByfgDH7HAToOFW4DpG2cOrlu" },
  { city: "Edinburgh", country: "united-kingdom", slug: "united-kingdom-edinburgh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxy-nsnz4Za4sGLSSelgGUN_6EvaAo9lkZ-MQNnCEmTLyDGkjQ98z2x4u45IV7fzCd3jNuhdwYBVZTVtdTiB_oMTcMFowwSAM8NW3dwgpAO97EnQ43clxpLCF41U493XA1CxCAjH0UC6-c-a3rroZkB_MQsFvShgHG0lG3YJ95j0n-UgDylar71pkAzFy18uChmMusLgKvpKDyjPPDgs4VqRXv6zpcPFjkss_pUQxlIiJmhDUfiPTq-cVYkRfGP1bLxEbrDs6_TkuI" },
];

const EUROPE_CITIES = [
  { city: "Paris", country: "france", slug: "france-paris" },
  { city: "Monaco", country: "france", slug: "france-monaco" },
  { city: "Nice", country: "france", slug: "france-nice" },
  { city: "Cannes", country: "france", slug: "france-cannes" },
  { city: "Barcelona", country: "spain", slug: "spain-barcelona" },
  { city: "Madrid", country: "spain", slug: "spain-madrid" },
  { city: "Marbella", country: "spain", slug: "spain-marbella" },
  { city: "Lisbon", country: "portugal", slug: "portugal-lisbon" },
  { city: "Porto", country: "portugal", slug: "portugal-porto" },
  { city: "Algarve", country: "portugal", slug: "portugal-algarve" },
  { city: "Milan", country: "italy", slug: "italy-milan" },
  { city: "Rome", country: "italy", slug: "italy-rome" },
  { city: "Florence", country: "italy", slug: "italy-florence" },
  { city: "Lake Como", country: "italy", slug: "italy-lake-como" },
  { city: "Amsterdam", country: "netherlands", slug: "netherlands-amsterdam" },
  { city: "Geneva", country: "switzerland", slug: "switzerland-geneva" },
  { city: "Zurich", country: "switzerland", slug: "switzerland-zurich" },
  { city: "Mykonos", country: "greece", slug: "greece-mykonos" },
  { city: "Santorini", country: "greece", slug: "greece-santorini" },
];

const EU_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDcvJzMFQtpdNf5p4PIOyRfabtWapY2qbzPXtBdQ4-cDv_LhaSpDBuy5ZVGWa-nVIzWDViVliRvdEv98-MLpUXXOr6YLclFsDWAY8b5uZqpJUo_HOgs8vwudc4NXmwtexmgcdjN0IlTevf8USL7gFZHr9M_4xTUo4bwnz89AjbVvMZO5OMDba4AT4VhFt3DwrheMFKdoi4stdMAfZDdMuQd0xvWwaw61LUPz9iT6B84XdrHOw7uaVeaBrRkriy0KtFgZuaZPiCIJ8gr";

function CityCard({ city, country, slug, img }: { city: string; country: string; slug: string; img: string }) {
  return (
    <Link href={`/destinations/${country}/${slug}`} className="group relative overflow-hidden aspect-[3/4] block">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={city} data-placeholder="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-widest mb-1">{country.replace(/-/g, " ")}</p>
        <h3 className="font-serif text-headline-md text-white">{city}</h3>
      </div>
    </Link>
  );
}

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={EU_IMG} alt="Destinations" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">Where To Next</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-white leading-none">Our Destinations</h1>
        </div>
      </section>

      {/* UK */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">United Kingdom</span>
          <h2 className="font-serif text-headline-lg text-primary">British Luxury</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {UK_CITIES.map((c) => <CityCard key={c.slug} {...c} />)}
        </div>
      </section>

      {/* Europe */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">Europe</span>
          <h2 className="font-serif text-headline-lg text-primary">Continental Collection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {EUROPE_CITIES.map((c) => (
            <CityCard key={c.slug} city={c.city} country={c.country} slug={c.slug} img={EU_IMG} />
          ))}
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}
