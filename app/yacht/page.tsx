import Image from 'next/image'
import Link from 'next/link'
import YachtFilter from './YachtFilter'
import YachtEnquiryForm from './YachtEnquiryForm'

export type Yacht = {
  id: string
  name: string
  type: string
  length: string
  category: 'motor' | 'sailing' | 'superyacht' | 'catamaran' | 'day-boat'
  guests: string
  cabins: string
  crew: string
  priceFrom: string
  basedAt: string
  description: string
  features: string[]
  image: string
  available?: boolean
}

const yachts: Yacht[] = [
  { id: 'adriana', name: 'Adriana', type: 'Motor', length: '42m', category: 'superyacht', guests: '12 guests', cabins: '6 cabins', crew: 'Crew of 9', priceFrom: '£45,000/wk', basedAt: 'Palma de Mallorca', features: ['Jacuzzi', 'Jet skis', 'Beach club', 'Cinema'], image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=700&q=85', available: true, description: 'A 42-metre motor yacht with six en-suite staterooms, a sky lounge, zero-speed stabilisers and full water toy inventory.' },
  { id: 'solent-spirit', name: 'Solent Spirit', type: 'Sailing', length: '28m', category: 'sailing', guests: '8 guests', cabins: '4 cabins', crew: 'Crew of 3', priceFrom: '£12,000/wk', basedAt: 'Cowes, Isle of Wight', features: ['Blue water', 'Racing pedigree', 'Skipper included'], image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=700&q=85', description: 'A bluewater cruising yacht with experienced skipper and crew, four en-suite cabins and deep Solent knowledge.' },
  { id: 'azure', name: 'Azure', type: 'Motor', length: '14m', category: 'day-boat', guests: '10 guests', cabins: 'Day use', crew: 'Crew of 1', priceFrom: '£1,800/day', basedAt: 'Southampton', features: ['Swim platform', 'Teak deck', 'Catering arranged'], image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85', available: true, description: 'A 14-metre day cruiser for private excursions, small group entertaining and quiet coastal exploration.' },
  { id: 'serenity', name: 'Serenity', type: 'Motor', length: '58m', category: 'superyacht', guests: '16 guests', cabins: '8 cabins', crew: 'Crew of 12', priceFrom: '£85,000/wk', basedAt: 'Monaco', features: ['Helipad', 'Pool', 'Beach club', 'Submersible'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=85', description: 'A 58-metre tri-deck superyacht with a helipad, pool, eight staterooms and serious exploration capability.' },
  { id: 'mirabella', name: 'Mirabella', type: 'Sailing', length: '22m', category: 'sailing', guests: '6 guests', cabins: '3 cabins', crew: 'Crew of 2', priceFrom: '£8,500/wk', basedAt: 'Antibes', features: ['Aegean specialist', 'Performance sailing', 'Wine cellar'], image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=85', description: 'A sailing ketch with racing history and a cruising refit that preserves performance while adding calm comfort.' },
  { id: 'navalon', name: 'Navalon', type: 'Catamaran', length: '18m', category: 'catamaran', guests: '8 guests', cabins: '4 cabins', crew: 'Crew of 2', priceFrom: '£9,200/wk', basedAt: 'Ibiza', features: ['Stable platform', 'Wide deck', 'Watersports'], image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=700&q=85', description: 'A performance catamaran with wide deck space, stability and shallow-draft access to private anchorages.' },
  { id: 'titan', name: 'Titan', type: 'Motor', length: '35m', category: 'motor', guests: '10 guests', cabins: '5 cabins', crew: 'Crew of 6', priceFrom: '£32,000/wk', basedAt: 'Porto Cervo', features: ['Fly bridge', 'Garage', 'Water toys'], image: 'https://images.unsplash.com/photo-1513135467880-6c41603e9dfc?w=700&q=85', description: 'A 35-metre motor yacht with fly bridge, jet skis, tender garage and Italian craftsmanship throughout.' },
  { id: 'white-star', name: 'White Star', type: 'Motor', length: '24m', category: 'motor', guests: '8 guests', cabins: '4 cabins', crew: 'Crew of 4', priceFrom: '£14,500/wk', basedAt: 'Split, Croatia', features: ['Adriatic specialist', 'Chef on board', 'Paddleboards'], image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=700&q=85', description: 'A 24-metre motor yacht with four en-suite cabins and a crew with deep knowledge of the Croatian coast.' },
  { id: 'endeavour', name: 'Endeavour', type: 'Sailing', length: '32m', category: 'sailing', guests: '10 guests', cabins: '5 cabins', crew: 'Crew of 4', priceFrom: '£19,000/wk', basedAt: 'Palma de Mallorca', features: ['Classic design', 'Full refit', 'Atlantic capable'], image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=700&q=85', description: 'A classic sailing ketch with a modern refit, five cabins and a crew steeped in offshore passage-making.' },
  { id: 'orion', name: 'Orion', type: 'Motor', length: '72m', category: 'superyacht', guests: '22 guests', cabins: '11 cabins', crew: 'Crew of 18', priceFrom: '£180,000/wk', basedAt: 'Monaco', features: ['Gym', 'Spa', 'Cinema', 'Multiple tenders'], image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=700&q=85', description: 'A 72-metre flagship with an owner deck, spa, gym, cinema and helicopter-capable support planning.' },
  { id: 'corsica-blue', name: 'Corsica Blue', type: 'Catamaran', length: '14m', category: 'catamaran', guests: '6 guests', cabins: '3 cabins', crew: 'Crew of 1', priceFrom: '£5,800/wk', basedAt: 'Ajaccio, Corsica', features: ['Corsica specialist', 'Snorkelling gear', 'Shallow draft'], image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=700&q=85', description: 'A 14-metre catamaran purpose-built for quiet Corsican anchorages and unhurried coastal days.' },
  { id: 'pegasus', name: 'Pegasus', type: 'Motor', length: '16m', category: 'day-boat', guests: '12 guests', cabins: 'Day use', crew: 'Crew of 2', priceFrom: '£3,200/day', basedAt: 'Antibes', features: ['Corporate hire', 'Catering', 'Audio system'], image: 'https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=700&q=85', description: 'A 16-metre motor yacht for corporate entertaining and brand moments on the Cote d Azur.' },
]

const charterTypes = [
  ['Day Charter', 'A full day on the water. Motor yacht, sailing yacht or day cruiser with crew, fuel and provisions arranged before departure.', ['4-20 guests', '6-12 hours', 'From £1,800'], 'Arrange a day charter'],
  ['Week Voyage', 'A crewed itinerary shaped around your group across the Aegean, Adriatic, Caribbean, Balearic or wherever the season takes you.', ['2-12 guests', '7-14 nights', 'From £18,000/wk'], 'Plan a voyage'],
  ['Corporate Charter', 'Client entertaining, product launches and leadership retreats at sea with AV, catering and hosting arranged in advance.', ['8-150 guests', 'Half or full day', 'Quotation only'], 'Request a corporate quote'],
]

const destinations = [
  ['Aegean', 'Greece', 'May-October', 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=500&q=85'],
  ["Cote d'Azur", 'France', 'June-September', 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=500&q=85'],
  ['Amalfi Coast', 'Italy', 'May-September', 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=500&q=85'],
  ['BVI', 'Caribbean', 'November-April', 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=85'],
]

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function YachtPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top yacht-page-hero">
        <Image src="https://images.unsplash.com/photo-1774579892096-a221d22984e5?w=1800&q=90" alt="Luxury yachts in a private marina" fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised yacht-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Private Yacht Charter</span>
            <h1 className="page-hero-title">Open water.<br /><em>No compromise.</em></h1>
            <p className="page-hero-body">Day charters from the Solent. Week voyages across the Aegean. Corporate charters from Monaco. We arrange the vessel, crew, provisions and itinerary.</p>
            <div className="page-hero-actions">
              <a href="#yachts" className="btn-primary">Browse yachts</a>
              <a href="#enquiry" className="btn-ghost-light">Plan a charter</a>
            </div>
          </div>
        </div>
      </section>

      <section className="yacht-stats">{[['2,000+', 'Vessels worldwide'], ['45', 'Countries of operation'], ['Day', 'to season-long charters'], ['24/7', 'Charter operations']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="yacht-section yacht-ice"><div className="container yacht-container"><span className="eyebrow">Charter types</span><h2 className="display-md">Your voyage. <em>Your terms.</em></h2><div className="yacht-type-grid">{charterTypes.map(([title, body, chips, cta]) => <article className="yacht-type-card" key={title as string}><div className="yacht-marker" /><h3>{title}</h3><p>{body}</p><div className="yacht-chip-row">{(chips as string[]).map(chip => <span key={chip}>{chip}</span>)}</div><a href="#enquiry" className="btn-primary">{cta}</a></article>)}</div></div></section>

      <section id="yachts" className="yacht-section"><div className="container yacht-container"><span className="eyebrow">Current listings</span><h2 className="display-md">Vessels worth <em>requesting.</em></h2><YachtFilter yachts={yachts} /></div></section>

      <section className="yacht-section yacht-ice">
        <div className="container yacht-container">
          <span className="eyebrow">Destinations</span><h2 className="display-md">The world's water. <em>Curated.</em></h2>
          <div className="yacht-map" aria-hidden="true"><svg viewBox="0 0 1200 600"><path d="M85 205c95-65 190-88 285-62 80 22 132 10 218-45 92-58 187-62 285-14 86 42 158 46 242 10M150 352c86-28 162-20 228 22 80 50 158 42 234-24 64-56 132-76 204-58 86 22 176 4 268-54M262 472c78-30 146-28 204 6 72 42 142 34 210-24 88-74 184-86 288-36" />{[[575, 228, 'Mediterranean', 642, 196], [342, 262, 'Caribbean', 220, 235], [610, 246, 'Adriatic', 690, 278], [650, 286, 'Aegean', 725, 326], [710, 336, 'Red Sea', 790, 372], [835, 428, 'Indian Ocean', 910, 462], [602, 148, 'Baltic', 674, 120], [1010, 500, 'South Pacific', 910, 532]].map(([x, y, label, lx, ly]) => <g key={label as string}><line x1={x} y1={y} x2={lx} y2={ly} /><circle cx={x} cy={y} r="4" /><text x={lx} y={ly}>{label}</text></g>)}</svg></div>
          <div className="yacht-destination-grid">{destinations.map(([name, country, season, img]) => <article className="yacht-destination" key={name}><Image src={img} alt={`${name}, ${country}`} fill style={{ objectFit: 'cover' }} /><div /><h3>{name}</h3><span>{season}</span></article>)}</div>
        </div>
      </section>

      <section className="yacht-section"><div className="container yacht-container"><span className="eyebrow">What's arranged</span><h2 className="display-md">The vessel. The crew. <em>Everything else.</em></h2><div className="yacht-included-grid">{[['The Vessel', ['Professionally maintained to charter standard', 'Full safety certification and insurance', 'Water toys and tenders as specified', 'Provisions stocked before departure', 'Itinerary charts and navigation planned']], ['The Crew', ['Experienced captain - RYA or equivalent', 'First mate and deckhands as required', 'On-board chef where specified', 'Full crew NDA and briefing', '24-hour OPV operations contact']], ['Your Experience', ['Catering brief executed to your specification', 'Dietary requirements managed throughout', 'Itinerary flexible - change course at any time', 'Airport or marina transfers arranged', 'Single invoice covering all costs']]].map(([title, items]) => <article key={title as string}><div className="yacht-marker" /><h3>{title}</h3>{(items as string[]).map(item => <div className="yacht-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}</article>)}</div></div></section>

      <section className="yacht-editorial yacht-ice" id="corporate"><div className="yacht-editorial-image"><Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=90" alt="Corporate yacht charter" fill style={{ objectFit: 'cover' }} /></div><div className="yacht-editorial-copy"><span className="eyebrow">Corporate</span><h2 className="display-md">Client entertaining <em>at sea.</em></h2><p>A yacht charter reframes the client relationship. Away from the office, away from the restaurant and away from the usual context - conversations happen differently.</p><p>AV for presentations, branded materials, photography and catering at full restaurant standard - everything arranged before the guests arrive.</p><div className="yacht-stat-row"><span><strong>8-150</strong> guests</span><span><strong>Half-day</strong> to full week</span><span><strong>Monaco</strong> Solent · Palma</span></div>{['Corporate catering at restaurant standard', 'AV and presentation equipment arranged', 'Branding and photography on request', 'Single invoice to the company'].map(item => <div className="yacht-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}<div className="yacht-cta-row"><a href="#enquiry" className="btn-primary">Plan a corporate charter</a><Link href="/contact" className="btn-ghost">Corporate account enquiry</Link></div></div></section>

      <section className="yacht-section"><div className="container yacht-container"><span className="eyebrow">On the water</span><h2 className="display-md">What they <em>said.</em></h2><div className="yacht-testimonials">{[['Seven days in the Aegean, twelve guests, a chef who had worked at Nobu and a crew who anticipated every need before we voiced it. The itinerary changed three times. Nothing faltered.', 'A. Marchetti', 'Milan'], ["The Monaco Grand Prix charter was the most impressive client entertainment we've ever arranged. Sixty guests, full catering, branding on the vessel. Every client mentioned it for months.", 'T. Harrington', 'London']].map(([quote, name, location]) => <article key={name}><p>"{quote}"</p><strong>{name}</strong><span>{location}</span></article>)}</div></div></section>

      <section id="enquiry" className="yacht-section yacht-ice"><div className="container yacht-container yacht-enquiry"><div><span className="eyebrow">Plan a charter</span><h2 className="display-md">Tell us the <em>voyage.</em></h2><p className="body-lg">Guest count, dates and preferred location is enough to begin. The team responds with matched vessels and pricing within two hours.</p>{['Access to 2,000+ vessels worldwide', 'Crew, catering and itinerary arranged', 'One invoice - all costs included'].map(item => <div className="yacht-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}</div><YachtEnquiryForm /></div></section>
    </>
  )
}
