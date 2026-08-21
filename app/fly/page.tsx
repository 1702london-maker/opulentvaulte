import Image from 'next/image'
import Link from 'next/link'
import AircraftFilter, { Aircraft } from './AircraftFilter'
import FlyEnquiryForm from './FlyEnquiryForm'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const categories = [
  { name: 'Turboprop', range: 'Up to 4h', seats: '4-8 seats', example: 'Pilatus PC-12, King Air 350', scale: 0.72 },
  { name: 'Light Jet', range: 'Up to 5h', seats: '5-8 seats', example: 'Phenom 300, Citation CJ4', scale: 0.82 },
  { name: 'Midsize', range: 'Up to 7h', seats: '7-9 seats', example: 'Hawker 800, Citation XLS+', scale: 0.94 },
  { name: 'Heavy Jet', range: 'Up to 10h', seats: '10-16 seats', example: 'Gulfstream G450, Challenger 604', scale: 1.05 },
  { name: 'Ultra Long Range', range: '14h+', seats: '12-19 seats', example: 'Gulfstream G700, Global 7500', scale: 1.18 },
]

const aircraft: Aircraft[] = [
  { id: 'pc12', name: 'Pilatus PC-12', category: 'Turboprop', range: '1,800nm', seats: '6-8', route: 'MAN to Ibiza', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=700&q=85' },
  { id: 'phenom', name: 'Embraer Phenom 300', category: 'Light Jet', range: '2,010nm', seats: '6-8', route: 'London to Geneva', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=700&q=85' },
  { id: 'challenger', name: 'Challenger 350', category: 'Midsize', range: '3,200nm', seats: '8-10', route: 'MAN to Dubai', image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?w=700&q=85' },
  { id: 'g450', name: 'Gulfstream G450', category: 'Heavy Jet', range: '4,350nm', seats: '12-14', route: 'London to New York', image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=700&q=85' },
  { id: 'global', name: 'Global 7500', category: 'Ultra Long Range', range: '7,700nm', seats: '14-19', route: 'Farnborough to Singapore', image: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=700&q=85' },
  { id: 's76', name: 'Sikorsky S-76', category: 'Helicopter', range: '400nm', seats: '6', route: 'MAN to LHR transfer', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=85' },
]

const phases = [
  ['Pre-flight', ['Flight plan and slot coordination', 'VIP FBO terminal access at departure', 'Ground transport to the aircraft steps', 'Catering brief confirmed with cabin crew', 'Security advance if required']],
  ['In-flight', ['Dedicated cabin crew - your specific brief', 'Bespoke catering and dietary needs', 'Wi-Fi and satellite connectivity', 'Entertainment system configured', 'Sleeping arrangements where applicable']],
  ['On arrival', ['Expedited customs and immigration', 'Ground transport from the aircraft', 'Hotel or residence pre-arrival confirmation', 'Security handover where required', 'Onward connections arranged']],
]

const airports = [
  ['MAN', 'Manchester International', 'Primary hub'],
  ['LHR', 'London Heathrow', 'Terminal 5 FBO'],
  ['LCY', 'London City', 'Short-notice'],
  ['LGW', 'London Gatwick', 'South terminal FBO'],
  ['LTN', 'London Luton', 'Private terminal'],
  ['FAB', 'Farnborough', 'Dedicated private terminal'],
]

const featured = [
  { name: 'Gulfstream G700.', em: 'The standard.', badge: 'Ultra Long Range · Available Now', body: 'The most advanced business aircraft in its class. 7,500nm range, 19-seat capacity, a full stand-up cabin with four living zones and a private suite at the rear. London to Singapore non-stop. New York to Manchester direct.', specs: ['19 seats', '7,500nm range', 'Full stand-up cabin', 'Private suite'], price: 'From £38,000', cta: 'Request this aircraft', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=90' },
  { name: 'Challenger 350.', em: 'The workhorse.', badge: 'Midsize · Most Requested', body: "OPV's most-requested aircraft. 10-seat capacity, 3,900nm range and a cabin that punches well above its class. Manchester to Dubai with one stop. London to Ibiza non-stop.", specs: ['10 seats', '3,900nm range', 'Lie-flat capable', 'High-speed Wi-Fi'], price: 'From £8,500', cta: 'Request this aircraft', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=90', reverse: true },
  { name: 'Sikorsky S-76.', em: 'No traffic.', badge: 'Helicopter · Transfer & Charter', body: 'Manchester to London in around 90 minutes. Rooftop to rooftop, helipad to aircraft steps. VIP configured interiors, 6-seat capacity and a range that covers any UK transfer without stopping.', specs: ['6 seats', '90min MAN to LHR', 'Rooftop capable', 'Executive fit-out'], price: 'From £4,200', cta: 'Request a helicopter', image: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=900&q=90' },
]

type EmptyLeg = {
  id: string
  departure_iata: string
  arrival_iata: string
  date_from: string
  date_to?: string | null
  aircraft_type?: string | null
  max_passengers?: number | null
  estimated_saving_pct?: number | null
  price_from_gbp?: number | null
}

async function getEmptyLegs(): Promise<EmptyLeg[]> {
  if (!supabaseAdmin) return []

  try {
    const today = new Date().toISOString().slice(0, 10)
    const { data, error } = await (supabaseAdmin as any)
      .from('empty_legs')
      .select('id, departure_iata, arrival_iata, date_from, date_to, aircraft_type, max_passengers, estimated_saving_pct, price_from_gbp')
      .eq('available', true)
      .gte('date_from', today)
      .order('date_from', { ascending: true })
      .limit(10)

    if (error) throw error
    return (data || []) as EmptyLeg[]
  } catch (error) {
    console.error('Fly empty legs error:', error)
    return []
  }
}

function formatLegDate(from: string, to?: string | null) {
  const start = new Date(`${from}T00:00:00`)
  const label = start.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  if (!to || to === from) return label
  const end = new Date(`${to}T00:00:00`)
  return `${label} - ${end.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`
}

function formatLegPrice(value?: number | null) {
  return value ? `From £${Number(value).toLocaleString('en-GB')}` : 'POA'
}

function AircraftIcon({ scale }: { scale: number }) {
  return <svg className="fly-aircraft-icon" style={{ transform: `scale(${scale})` }} viewBox="0 0 120 48" fill="none" aria-hidden="true"><path d="M8 27h38L70 8h10L66 27h34c7 0 12 3 12 7s-5 7-12 7H66L80 46H69L46 41H18l-8 5H2l7-12-7-12h8l-2 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M47 27 34 11h9l25 16M46 41 34 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default async function FlyPage() {
  const emptyLegs = await getEmptyLegs()

  return (
    <>
      <section className="page-hero page-hero-clear-top fly-page-hero">
        <Image src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1800&q=90" alt="Private aviation" fill priority style={{ objectFit: 'cover' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised fly-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Private Aviation</span>
            <h1 className="page-hero-title">Your runway.<br /><em>Your time.</em></h1>
            <p className="page-hero-body">Private jets from Manchester, Luton, London City and Farnborough. Helicopter transfers. VIP FBO access. Empty legs monitored daily and the cabin stocked to your brief before you board.</p>
            <div className="page-hero-actions">
              <a href="#fly-enquiry" className="btn-primary">Request a flight</a>
              <a href="#empty-legs" className="btn-ghost-light">View empty legs</a>
            </div>
          </div>
        </div>
      </section>

      <section className="fly-stats">{[['6', 'Departure airports'], ['190+', 'Countries served'], ['90min', 'Response time'], ['24/7', 'Flight operations']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="fly-section fly-ice">
        <div className="fly-container">
          <span className="eyebrow">The fleet</span>
          <h2 className="display-md">From light to <em>ultra-long range.</em></h2>
          <p className="body-lg fly-intro">Every aircraft category serves a different need. We match the aircraft to the route, the group size and the occasion - not the other way around.</p>
          <div className="fly-category-grid">{categories.map(category => <article key={category.name}><AircraftIcon scale={category.scale} /><h3>{category.name}</h3><strong>{category.range}</strong><span>{category.seats}</span><p>{category.example}</p></article>)}</div>
        </div>
      </section>

      <section className="fly-section fly-white" id="fleet">
        <div className="fly-container">
          <span className="eyebrow">Aircraft access</span>
          <h2 className="display-md">Aircraft worth <em>requesting.</em></h2>
          <AircraftFilter aircraft={aircraft} />
        </div>
      </section>

      <section className="fly-section fly-white">
        <div className="fly-container">
          <span className="eyebrow">What's arranged</span>
          <h2 className="display-md">From brief <em>to boarding.</em></h2>
          <div className="fly-phase-grid">{phases.map(([title, items]) => <article key={title as string}><div /><h3>{title}</h3>{(items as string[]).map(item => <div className="fly-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}</article>)}</div>
        </div>
      </section>

      <section className="fly-section fly-ice">
        <div className="fly-container">
          <span className="eyebrow">We operate from</span>
          <h2 className="display-md">Six airports. <em>One call.</em></h2>
          <div className="fly-airport-strip">{airports.map(([code, name, note]) => <article key={code}><strong>{code}</strong><span>{name}</span><small>{note}</small></article>)}</div>
          <p className="fly-airport-note">All departures include VIP FBO access · Name board and meet-and-greet · No queues, no check-in, no security theatre</p>
        </div>
      </section>

      <section className="fly-section fly-white">
        <div className="fly-container">
          <span className="eyebrow">Featured aircraft</span>
          <h2 className="display-md">Chosen for <em>the itinerary.</em></h2>
          <div className="fly-feature-list">{featured.map(item => <article className={`fly-feature-row ${item.reverse ? 'fly-feature-reverse' : ''}`} key={item.name}><div className="fly-feature-image"><Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} /></div><div className="fly-feature-copy"><span className="fly-badge">{item.badge}</span><h3>{item.name} <em>{item.em}</em></h3><p>{item.body}</p><div className="fly-chip-row">{item.specs.map(spec => <span key={spec}>{spec}</span>)}</div><div className="fly-price"><strong>{item.price}</strong><small>Per flight segment. All-inclusive.</small></div><a href="#fly-enquiry" className="btn-primary">{item.cta}</a></div></article>)}</div>
        </div>
      </section>

      <section id="empty-legs" className="fly-section fly-ice">
        <div className="fly-container">
          <span className="eyebrow">Empty legs</span>
          <h2 className="display-md">Available now. <em>Priced to move.</em></h2>
          <p className="body-lg fly-intro">Empty leg flights are repositioning aircraft available at reduced rates. Listed in real time. Enquire immediately as availability changes within hours.</p>
          <div className="fly-empty-table">
            <div className="fly-empty-head">{['Route', 'Date', 'Aircraft', 'Seats', 'Est. saving', 'Price', ''].map(h => <span key={h}>{h}</span>)}</div>
            {emptyLegs.length ? emptyLegs.map(row => (
              <div className="fly-empty-row" key={row.id}>
                <span>{row.departure_iata} {'->'} {row.arrival_iata}</span>
                <span>{formatLegDate(row.date_from, row.date_to)}</span>
                <span>{row.aircraft_type || 'Aircraft TBC'}</span>
                <span>{row.max_passengers ? `Up to ${row.max_passengers}` : 'TBC'}</span>
                <span>{row.estimated_saving_pct ? `Save ~${row.estimated_saving_pct}%` : 'Market rate'}</span>
                <span>{formatLegPrice(row.price_from_gbp)}</span>
                <a href="#fly-enquiry">Enquire</a>
              </div>
            )) : (
              <div className="fly-empty-row">
                <span>No live empty legs</span>
                <span>Checked daily</span>
                <span>Private jet</span>
                <span>By request</span>
                <span>On availability</span>
                <span>POA</span>
                <a href="#fly-enquiry">Request alert</a>
              </div>
            )}
          </div>
          <p className="fly-empty-note">Empty leg availability changes in real time. Prices are estimates - confirm with the team. All flights include FBO access, catering and ground transport.</p>
        </div>
      </section>

      <section className="fly-ground fly-white">
        <div className="fly-ground-copy">
          <span className="eyebrow">On the ground</span>
          <h2 className="display-md">The terminal. <em>Without the terminal.</em></h2>
          <p>Every OPV flight departure uses a dedicated VIP FBO - a private terminal separate from the main airport. No queues, no security theatre, no waiting. You arrive by car, board by foot and are in the air within minutes.</p>
          <p>On arrival, the same efficiency applies. Expedited customs, ground transport from the aircraft steps and a pre-confirmed handover to the next leg of the arrangement.</p>
          {['Private FBO terminal at all six airports', 'Dedicated check-in, no shared spaces', 'Car directly to aircraft steps', 'Expedited immigration on arrival', 'Baggage direct to vehicle', 'Full catering and refreshments on board'].map(item => <div className="fly-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}
        </div>
        <div className="fly-ground-images">
          <div><Image src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=900&q=90" alt="Private aircraft at an FBO terminal" fill style={{ objectFit: 'cover' }} /></div>
          <div><Image src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&q=90" alt="Private aircraft cabin prepared for departure" fill style={{ objectFit: 'cover' }} /></div>
        </div>
      </section>

      <section id="fly-enquiry" className="fly-section fly-ice">
        <div className="fly-container fly-enquiry-grid">
          <div>
            <span className="eyebrow">Request a flight</span>
            <h2 className="display-md">Tell us the <em>itinerary.</em></h2>
            <p className="body-lg">Departure airport, destination, date and passenger count is enough to begin. The team responds with aircraft options and pricing within 90 minutes - often within the hour.</p>
            {['90-minute response for any route', 'Same-day flights from Manchester possible', 'All-inclusive pricing - no handling surprises'].map(item => <div className="fly-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}
          </div>
          <FlyEnquiryForm />
        </div>
      </section>
    </>
  )
}
