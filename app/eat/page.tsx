'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type Venue = {
  id: string
  name: string
  area: string
  city: string
  tags: string[]
  description: string
  image: string
  note?: string
}

const diningTypes = [
  ['Private dining rooms', 'Exclusive use of a restaurant private space. Your menu, your pace, your guests. No shared sightlines.', '2-40 guests', '48h notice'],
  ['Table reservations', 'The rooms that do not take individual calls. OPV has standing access where public booking ends.', '2-10 guests', 'Same-week possible'],
  ['Corporate entertaining', 'Client dinners, deal celebrations, leadership offsites. Bespoke menus and discreet company invoicing.', '8-120 guests', '1 week notice'],
  ['Celebrations', 'Birthdays, engagements, anniversaries. Florals, personalised cake and surprises arranged before arrival.', 'Up to 60 guests', '2 weeks notice'],
  ['Match days & race days', 'Hospitality at Old Trafford, Etihad, Headingley and Ascot. Lounges, dining and transport as one.', '2-20 guests', 'Event specific'],
  ['Brand & press events', 'Product launches, press dinners and editorial evenings with room, table plan, flowers and photography.', '20-150 guests', '3+ weeks notice'],
]

const filters = ['All', 'Dinner', 'Late', 'Rooftop', 'Private Hire', 'Manchester', 'London']

const venues: Venue[] = [
  { id: 'twenty-stories', name: 'Twenty Stories', area: 'Spinningfields', city: 'Manchester', tags: ['Rooftop', 'Private Hire', 'Dinner', 'Manchester'], description: "Manchester's most dramatic rooftop. Private dining on the 20th floor, the city below, menu yours to set.", image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85' },
  { id: 'tattu', name: 'Tattu', area: 'City Centre', city: 'Manchester', tags: ['Dinner', 'Private Hire', 'Late', 'Manchester'], description: 'Blossom trees, lantern light and an Asian menu of genuine ambition. Private booth and room hire for 6 to 30.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=85' },
  { id: 'mnky-hse', name: 'MNKY HSE', area: 'Mayfair', city: 'London', tags: ['Late', 'Private Hire', 'London'], description: 'Latin cuisine and live music that evolves after midnight. Securing a table here requires the right contact.', image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=85' },
  { id: 'hawksmoor', name: 'Hawksmoor Manchester', area: 'Deansgate', city: 'Manchester', tags: ['Dinner', 'Private Hire', 'Manchester'], description: 'The finest steakhouse in the North, housed in a Victorian courthouse. Private rooms with the original dock entrance.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=85' },
  { id: 'ivy', name: 'The Ivy Manchester', area: 'Spinningfields', city: 'Manchester', tags: ['Dinner', 'Rooftop', 'Manchester'], description: 'All-day destination dining with a rooftop bar. Private booths and a member feel without the membership requirement.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85' },
  { id: 'mana', name: 'Mana', area: 'Ancoats', city: 'Manchester', tags: ['Dinner', 'Manchester'], description: "The only Michelin-starred restaurant in Manchester. Chef's table access when the public waitlist is closed.", image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85', note: 'Special access' },
  { id: 'nobu', name: 'Nobu London', area: 'Mayfair', city: 'London', tags: ['Dinner', 'Late', 'Private Hire', 'London'], description: 'Japanese-Peruvian mastery with a private dining room, separate entrance and dedicated team.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700&q=85' },
  { id: 'scotts', name: "Scott's", area: 'Mayfair', city: 'London', tags: ['Dinner', 'Private Hire', 'London'], description: "Mayfair's enduring seafood institution. Champagne, privacy and the kind of room where decisions get made.", image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85' },
  { id: 'mandrake', name: 'The Mandrake', area: 'Fitzrovia', city: 'London', tags: ['Late', 'Dinner', 'London'], description: "London's most theatrical hotel restaurant. Private space, candlelit service and living walls.", image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=700&q=85' },
  { id: 'blanc', name: 'Brasserie Blanc', area: 'City Centre', city: 'Leeds', tags: ['Dinner', 'Private Hire'], description: "Raymond Blanc's Leeds outpost. Private dining room, full wine list and a kitchen that does not disappoint.", image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=85' },
  { id: 'crafthouse', name: 'Crafthouse', area: 'Trinity Kitchen', city: 'Leeds', tags: ['Rooftop', 'Dinner'], description: 'Rooftop restaurant with panoramic views of Leeds. Private hire evenings available Sunday through Tuesday.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85' },
  { id: 'black-swan', name: 'The Black Swan', area: 'Oldstead', city: 'North Yorkshire', tags: ['Dinner'], description: "Two Michelin stars, 30 miles from Leeds, completely worth the drive. One of the UK's important rooms.", image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85', note: 'Reservation through OPV' },
]

const neighbourhoods = [
  ['Spinningfields', 'Manchester', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=85'],
  ['Ancoats', 'Manchester', 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=500&q=85'],
  ['Mayfair', 'London', 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=85'],
  ['Knightsbridge', 'London', 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&q=85'],
  ['Granary Wharf', 'Leeds', 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&q=85'],
  ['Hale & Alderley', 'Cheshire', 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&q=85'],
]

const occasions = [
  ['September', 'Harvest tasting dinner - single-estate wines', 'Alderley Edge, Cheshire', 'Open'],
  ['October', "Chef's table residency - visiting Michelin chef", 'Manchester, Ancoats', 'Waitlist'],
  ['November', 'Private whisky dinner - rare expressions', 'Leeds, Granary Wharf', 'Open'],
  ['December', 'OPV Winter celebration', 'London, Mayfair', 'Members Only'],
  ['January', 'New year private dining series - six courses', 'Manchester, Spinningfields', 'Open'],
  ['February', "Valentine's chef's table - two sittings only", 'Multiple cities', 'Opening soon'],
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function EatPage() {
  const [active, setActive] = useState('All')
  const visibleVenues = useMemo(() => active === 'All' ? venues : venues.filter(venue => venue.tags.includes(active)), [active])

  return (
    <>
      <section className="page-hero">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90" alt="Private dining" fill style={{ objectFit: 'cover' }} priority />
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy">
            <span className="eyebrow page-hero-kicker">Eat</span>
            <h1 className="page-hero-title">The table you<br /><em>could not get.</em></h1>
            <p className="page-hero-body">Private rooms, impossible reservations and chef's tables across Manchester, London and Leeds. One contact arranges it with the standing to deliver.</p>
            <div className="page-hero-actions">
              <Link href="#request" className="btn-primary">Request a table</Link>
              <Link href="#corporate" className="btn-ghost-light">Plan a corporate dinner</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Six kinds of evening</span>
            <h2 className="display-md">From two at a chef&apos;s table.<br /><em>To two hundred.</em></h2>
          </motion.div>
          <div className="eat-types-grid">
            {diningTypes.map(([title, body, guests, notice], index) => (
              <motion.article key={title} {...fadeUp(index * 0.05)} className="eat-type-tile">
                <h3>{title}</h3>
                <p>{body}</p>
                <div>
                  <span>{guests}</span>
                  <span>{notice}</span>
                </div>
                <Link href="#request">Start request</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Where we book</span>
            <h2 className="display-md">Venues worth <em>securing.</em></h2>
          </motion.div>
          <div className="filter-row">
            {filters.map(filter => (
              <button key={filter} onClick={() => setActive(filter)} className={active === filter ? 'active' : ''}>{filter}</button>
            ))}
          </div>
          <div className="eat-venue-grid">
            {visibleVenues.map((venue, index) => (
              <motion.article key={venue.id} {...fadeUp((index % 3) * 0.06)} className="prop-card eat-venue-card">
                <div className="eat-venue-image">
                  <Image src={venue.image} alt={venue.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="eat-venue-body">
                  <span className="prop-city">{venue.city} - {venue.area}</span>
                  <h3>{venue.name}</h3>
                  <div>
                    {venue.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <p>{venue.description}</p>
                  {venue.note && <p className="label-sm" style={{ color: 'var(--sapphire)', marginBottom: '1rem' }}>{venue.note}</p>}
                  <Link href="#request" className="btn-primary">Request a table</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Our cities</span>
            <h2 className="display-md">The right table.<br /><em>In the right room.</em></h2>
          </motion.div>
          <div className="eat-neighbourhood-grid">
            {neighbourhoods.map(([name, city, img]) => (
              <Link key={name} href="#request" className="eat-neighbourhood-card">
                <Image src={img} alt={name} fill style={{ objectFit: 'cover' }} />
                <div />
                <span>{name}</span>
                <small>{city}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ maxWidth: 760, marginBottom: '3rem' }}>
            <span className="eyebrow">The season ahead</span>
            <h2 className="display-md">Curated <em>occasions.</em></h2>
            <p className="body-md">OPV arranges a small number of private dining events each season. Places are limited and offered to members first.</p>
          </motion.div>
          <div className="eat-table">
            <div className="eat-table-head"><span>Month</span><span>Occasion</span><span>Location</span><span>Status</span><span>Action</span></div>
            {occasions.map(([month, occasion, location, status]) => (
              <div key={`${month}-${occasion}`} className="eat-table-row">
                <span>{month}</span><span>{occasion}</span><span>{location}</span><span className={`status ${status.replace(/\s/g, '-').toLowerCase()}`}>{status}</span><Link href="#request">{status === 'Waitlist' ? 'Waitlist' : status === 'Members Only' ? 'Apply' : 'Add me'}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" className="section" style={{ background: 'var(--white)' }}>
        <div className="container eat-corporate">
          <motion.div {...fadeUp()} className="eat-corporate-image">
            <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90" alt="Corporate private dinner" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <span className="eyebrow">Corporate</span>
            <h2 className="display-md">Client dinners that<br /><em>close deals.</em></h2>
            <p className="body-lg" style={{ margin: '1.4rem 0 1.6rem' }}>Whether you are entertaining clients, celebrating a transaction or hosting a leadership offsite, OPV arranges the room, menu, name cards and discreet invoice. You concentrate on the conversation.</p>
            {['Groups from 8 to 120', 'Bespoke menus and dietary management', 'AV and presentation capability arranged', 'Single invoice to the company', 'NDA-standard discretion throughout', 'Same-day confirmation for standing accounts'].map(item => (
              <div key={item} className="home-benefit"><CheckIcon /><p>{item}</p></div>
            ))}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="#request" className="btn-primary">Plan a corporate dinner</Link>
              <Link href="/contact" className="btn-ghost">Corporate account enquiry</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="request" className="section" style={{ background: 'var(--ice)' }}>
        <div className="container eat-request">
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Make a request</span>
            <h2 className="display-md">Tell us the <em>occasion.</em></h2>
            <p className="body-lg" style={{ margin: '1.4rem 0 2rem' }}>A sentence about the evening is enough. Date, guest count, whether it is a quiet dinner or a full event. The team responds within two hours.</p>
            {['Groups from 2 to 120', '48 hours to 3 months notice', 'Single invoice - venue, catering, transport'].map(item => (
              <div key={item} className="home-benefit"><CheckIcon /><p>{item}</p></div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <EatEnquiryForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}

function EatEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'eat', service: 'eat', name: payload.name, email: payload.email, message: String(payload.notes || ''), payload }),
    })
    setStatus(response.ok ? 'sent' : 'idle')
    if (response.ok) form.reset()
  }

  return (
    <form className="eat-form" onSubmit={submit}>
      <Field name="name" label="Full name" required />
      <Field name="email" label="Email" type="email" required />
      <Select name="occasion" label="Occasion type" options={['Private dining room', 'Table reservation', 'Corporate entertaining', 'Celebration', 'Match or Race day hospitality', 'Brand or press event']} />
      <Field name="guests" label="Guest count" type="number" required />
      <Field name="date" label="Preferred date" type="date" required />
      <Select name="city" label="City preference" options={['Manchester', 'London', 'Leeds', 'Cheshire', 'No preference']} />
      <Select name="budget" label="Budget range" options={['Under GBP 500', 'GBP 500-2,000', 'GBP 2,000-10,000', 'GBP 10,000+', 'No limit set']} />
      <div>
        <label className="opv-label" htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" className="opv-input" rows={5} placeholder="Dietary requirements, event theme, preferred venues, any occasion details..." />
      </div>
      <button className="btn-primary" disabled={status === 'sending'}>{status === 'sent' ? "Received - we'll be in touch." : status === 'sending' ? 'Sending...' : 'Reserve the evening ->'}</button>
    </form>
  )
}

function Field({ name, label, type = 'text', required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <div><label className="opv-label" htmlFor={name}>{label}</label><input id={name} name={name} type={type} required={required} className="opv-input" /></div>
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return <div><label className="opv-label" htmlFor={name}>{label}</label><select id={name} name={name} className="opv-input">{options.map(option => <option key={option}>{option}</option>)}</select></div>
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
