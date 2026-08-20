import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

const tickerItems = ['Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'Private Access', 'Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'Private Access']

const worlds = [
  { title: 'Stays', href: '/stays', body: 'Private apartments, townhouses and estates across Manchester, London and Leeds.', icon: 'home' },
  { title: 'Drive', href: '/drive', body: 'Chauffeured, self-drive and secure transport arranged across the UK.', icon: 'car' },
  { title: 'Eat', href: '/eat', body: 'Private chefs, last-minute tables and hosted dining for quiet occasions.', icon: 'eat' },
  { title: 'Fly', href: '/fly', body: 'Aircraft, empty legs and airport movement handled from first call.', icon: 'fly' },
  { title: 'Yacht', href: '/yacht', body: 'Charters and waterside itineraries coordinated with one named concierge.', icon: 'yacht' },
  { title: 'Security', href: '/security', body: 'Close protection, route planning and principal movement for sensitive travel.', icon: 'shield' },
  { title: 'Shop', href: '/shop', body: 'Hard-to-source pieces, gifting and personal shopping managed discreetly.', icon: 'shop' },
  { title: 'Always On', href: '/contact', body: 'A single contact who keeps the brief moving until everything is arranged.', icon: 'phone', always: true },
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
          <div className="page-hero-copy">
            <span className="eyebrow page-hero-kicker">Stays  Drive  Eat  Fly  Yacht  Security  Shop</span>
            <h1 className="page-hero-title">
              One call.<br />One world.<br /><em>Everything.</em>
            </h1>
            <p className="page-hero-body">
              OPV is a private concierge platform for residences, cars, dining, aviation, yacht charter, security and sourcing, arranged through one trusted contact.
            </p>
            <div className="page-hero-actions">
              <Link href="/contact" className="btn-primary">Request access</Link>
              <Link href="/stays" className="btn-ghost-light">Explore stays</Link>
            </div>
          </div>
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
          <span className="eyebrow">Eight worlds</span>
          <h2 className="display-lg" style={{ maxWidth: 760, marginBottom: '3rem' }}>
            One private layer for<br /><em>everything you need.</em>
          </h2>
          <div className="home-worlds-grid">
            {worlds.map(world => (
              <Link key={world.title} href={world.href} className={`home-world-tile${world.always ? ' always' : ''}`}>
                <WorldIcon name={world.icon} />
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
            <span className="eyebrow">Featured residence</span>
            <h2 className="display-md" style={{ marginBottom: '1.3rem' }}>The Crescent Riverside<em>.</em></h2>
            <p className="body-lg" style={{ marginBottom: '1.4rem' }}>
              Four-bedroom riverside penthouse with private terrace, chef kitchen and a named OPV guardian on arrival.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['Manchester', '4 bedrooms', 'River view', 'Concierge'].map(tag => <span key={tag} className="prop-badge">{tag}</span>)}
            </div>
            <Link href="/stays" className="btn-ghost">View private stays</Link>
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

function WorldIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: 'M4 11.5 12 5l8 6.5V20H6v-8.5',
    car: 'M5 16h14l-1.5-5h-11L5 16Zm1 0v3m12-3v3M7 11l1.5-4h7L17 11',
    eat: 'M7 4v16m5-16v16m5-16v7a3 3 0 0 1-3 3',
    fly: 'M3 12h18M12 3l4 9-4 9M12 3 8 12l4 9',
    yacht: 'M4 17h16l-3 3H7l-3-3Zm4 0 4-12 4 12',
    shield: 'M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z',
    shop: 'M6 8h12l-1 12H7L6 8Zm2 0a4 4 0 0 1 8 0',
    phone: 'M7 5h10v14H7V5Zm4 11h2',
  }

  return (
    <svg className="home-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
