'use client'

import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import { motion } from 'framer-motion'

const tickerItems = ['Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'Private Access', 'Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'Private Access']

const worlds = [
  { title: 'Stays', href: '/stays', body: 'Residences inspected by a guardian before they are ever offered to a client.', mark: 'Residence' },
  { title: 'Drive', href: '/drive', body: 'Chauffeured, self-drive and secure transport held to principal-level standards.', mark: 'Movement' },
  { title: 'Eat', href: '/eat', body: 'Private rooms, chef tables and impossible reservations arranged through standing access.', mark: 'Tables' },
  { title: 'Fly', href: '/fly', body: 'Aircraft, empty legs, FBO movement and arrival coordination handled end to end.', mark: 'Aviation' },
  { title: 'Yacht', href: '/yacht', body: 'Crewed charters and waterside itineraries prepared without public catalogues.', mark: 'Charter' },
  { title: 'Security', href: '/security', body: 'Close protection, route planning and discreet presence for sensitive travel.', mark: 'Protection' },
  { title: 'Shop', href: '/shop', body: 'Atelier access, sourcing, gifting and personal shopping without retail noise.', mark: 'Sourcing' },
  { title: 'Always On', href: '/contact', body: 'A named concierge who keeps the brief moving until every detail is closed.', mark: '24 / 7', always: true },
]

const cities = [
  { city: 'Manchester', img: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&q=85' },
  { city: 'London', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=85' },
  { city: 'Leeds', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=85' },
]

const stats = [
  ['500+', 'Curated properties'],
  ['3', 'Active UK cities'],
  ['200', 'Point verification'],
  ['24/7', 'Concierge access'],
]

const process = [
  ['Tell us.', 'Send the brief once: dates, people, preferences, non-negotiables and timing.'],
  ['We build it.', 'OPV coordinates the residence, car, table, flight, security and suppliers behind one plan.'],
  ['You arrive.', 'Everything is confirmed before you move. One itinerary, one contact, one invoice.'],
]

const testimonials = [
  ['Three days in Manchester. The residence, driver and chef all landed exactly as promised.', 'J. Hargreaves'],
  ['The brief changed twice and nothing slipped. That is why OPV has our account.', 'M. Osei'],
  ['London in forty-eight hours, handled without noise. Proper private service.', 'S. Al-Rashidi'],
]

const benefits = [
  'Named concierge from first enquiry',
  'Private residences verified before listing',
  'UK-first service across Manchester, London and Leeds',
  'Single plan covering stays, cars, dining, travel and protection',
]

export default function HomePage() {
  return (
    <>
      <section className="page-hero home-hero">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90"
          alt="Luxury private residence"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <motion.div className="page-hero-copy" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <span className="eyebrow page-hero-kicker">Private concierge for serious requests</span>
            <h1 className="page-hero-title">
              Multimillion-pound service.<br />One trusted <em>concierge.</em>
            </h1>
            <p className="page-hero-body">
              Residences, cars, dining, aviation, yacht charter, security and sourcing, arranged with the discretion expected by principals, families and private offices.
            </p>
            <div className="page-hero-actions">
              <Link href="/contact" className="btn-primary">Request access</Link>
              <Link href="/eat" className="btn-ghost-light">Reserve the evening</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="ticker-outer">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={`${item}-${i}`} className="ticker-item">
              {item}
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <span className="eyebrow">Eight private desks</span>
          <h2 className="display-lg" style={{ maxWidth: 760, marginBottom: '3rem' }}>
            Not cartoons. Not bookings.<br /><em>Representation.</em>
          </h2>
          <div className="home-worlds-grid">
            {worlds.map((world, i) => (
              <Link key={world.title} href={world.href} className={`home-world-tile${world.always ? ' always' : ''}`}>
                <motion.span className="home-world-mark" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.04 }}>
                  {world.mark}
                </motion.span>
                <h3>{world.title}</h3>
                <p>{world.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#EAF4FB' }}>
        <div className="container home-featured">
          <div className="home-featured-image">
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85" alt="The Crescent Riverside residence" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <span className="eyebrow">Private-office standard</span>
            <h2 className="display-md" style={{ marginBottom: '1.3rem' }}>The brief moves quietly.<br /><em>The result does not.</em></h2>
            <p className="body-lg" style={{ marginBottom: '1.4rem' }}>
              OPV behaves like a private office for clients who need the evening, the residence, the driver and the room secured without explaining the request twice.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['Private residences', 'Standing dining access', 'Principal movement', 'Single invoice'].map(tag => <span key={tag} className="prop-badge">{tag}</span>)}
            </div>
            <Link href="/contact" className="btn-ghost">Open a private request</Link>
          </div>
        </div>
      </section>

      <section className="home-quote">
        <p className="pull-quote">"We arrange the evening.<br />You simply <em>enjoy it.</em>"</p>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <span className="eyebrow">Where we operate now</span>
          <h2 className="display-md" style={{ marginBottom: '3rem' }}>Three cities.<br /><em>One standard.</em></h2>
          <div className="home-city-grid">
            {cities.map(city => (
              <Link key={city.city} href="/stays" className="home-city-card">
                <Image src={city.img} alt={city.city} fill style={{ objectFit: 'cover' }} />
                <div />
                <span>{city.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="stat-strip">
          {stats.map(([num, label]) => (
            <div key={label} className="stat-item">
              <div className="stat-num">{num}</div>
              <span className="label-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section home-process-section">
        <div className="container home-process">
          <div>
            <span className="eyebrow">Process</span>
            <h2 className="display-md">Simple for you.<br /><em>Handled by us.</em></h2>
          </div>
          <div>
            {process.map(([title, body], i) => (
              <div key={title} className="home-process-row">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <span className="eyebrow">Client notes</span>
          <div className="home-testimonials">
            {testimonials.map(([quote, name]) => (
              <article key={name}>
                <p>"{quote}"</p>
                <span>{name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#EAF4FB' }}>
        <div className="container home-access">
          <div>
            <span className="eyebrow">Membership access</span>
            <h2 className="display-md" style={{ marginBottom: '1.4rem' }}>Not public.<br /><em>Properly private.</em></h2>
            <p className="body-lg">OPV works by request, referral and account. The best homes, drivers, chefs and aircraft are shared directly, not listed publicly.</p>
          </div>
          <div>
            {benefits.map(benefit => (
              <div key={benefit} className="home-benefit">
                <CheckIcon />
                <p>{benefit}</p>
              </div>
            ))}
            <Link href="/contact" className="btn-primary" style={{ marginTop: '1.6rem' }}>Apply for access</Link>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <span className="eyebrow">Private updates</span>
          <h2 className="display-sm" style={{ marginBottom: '0.8rem' }}>Quiet access, sent occasionally.</h2>
          <p className="body-sm" style={{ marginBottom: '2rem' }}>Off-market residences, private dining windows and transport availability in the cities we operate.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
