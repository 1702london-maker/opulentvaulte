'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const aircraft = [
  { type: 'Turboprop',       range: 'Up to 1,200nm', pax: '6–9',  example: 'Pilatus PC-12' },
  { type: 'Light Jet',       range: 'Up to 2,000nm', pax: '4–8',  example: 'Cessna Citation CJ3' },
  { type: 'Midsize Jet',     range: 'Up to 3,500nm', pax: '7–9',  example: 'Hawker 800XP' },
  { type: 'Heavy Jet',       range: 'Up to 6,000nm', pax: '10–16', example: 'Gulfstream G450' },
  { type: 'Ultra Long Range', range: 'Global',       pax: '12–19', example: 'Global 7500' },
]

const emptyLegs = [
  { route: 'MAN → LHR', date: '23 Aug', price: 'From £2,400', pax: 8 },
  { route: 'LHR → MLA', date: '25 Aug', price: 'From £6,200', pax: 12 },
  { route: 'LGW → DXB', date: '28 Aug', price: 'From £14,800', pax: 14 },
  { route: 'MAN → BCN', date: '01 Sep', price: 'From £4,400', pax: 8 },
  { route: 'LHR → GVA', date: '03 Sep', price: 'From £3,800', pax: 9 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function FlyPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top">
        <Image src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1800&q=90" alt="Private aviation" fill priority style={{ objectFit: 'cover' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy page-hero-copy-raised">
            <span className="eyebrow page-hero-kicker">Fly</span>
            <h1 className="page-hero-title">
              Your aircraft.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Your schedule.</em>
            </h1>
            <p className="page-hero-body">Turboprop to ultra long range. Arranged from Manchester, Heathrow or your preferred FBO. Catering, ground transport and arrival coordination included.</p>
            <div className="page-hero-actions">
              <Link href="/contact" className="btn-primary">Plan a charter</Link>
              <a href="#empty-legs" className="btn-ghost-light">View empty legs</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aircraft types */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Aircraft categories</span>
            <h2 className="display-md">Five <em>types. Any range.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {aircraft.map((a, i) => (
              <motion.div key={a.type} {...fadeUp(i * 0.06)} style={{ background: 'var(--ice)', padding: '2rem 1.5rem' }}>
                <span className="eyebrow" style={{ marginBottom: '0.8rem' }}>{a.type}</span>
                <p className="body-sm" style={{ marginBottom: '0.4rem' }}>{a.example}</p>
                <p className="label-sm" style={{ marginBottom: '0.3rem' }}>Range: {a.range}</p>
                <p className="label-sm">Pax: {a.pax}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">What's included</span>
            <h2 className="display-md">End to end.<br /><em>Without exception.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { title: 'Pre-flight.', items: ['Aircraft selection and operator briefing', 'FBO coordination', 'Catering specification', 'Ground transport both ends'] },
              { title: 'In-flight.', items: ['Crew briefed on preferences', 'Catering and beverages', 'Wi-Fi where available', 'Any dietary or comfort requirements'] },
              { title: 'On arrival.', items: ['Met on the tarmac', 'Baggage direct to vehicle', 'Hotel or property liaison', 'Return charter arrangement if needed'] },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(i * 0.1)} className="process-step">
                <h3 className="display-sm" style={{ marginBottom: '1.2rem' }}>{col.title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {col.items.map(item => (
                    <li key={item} className="body-sm" style={{ display: 'flex', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--sapphire)', flexShrink: 0 }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty legs */}
      <section id="empty-legs" className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Empty legs</span>
            <h2 className="display-md">Available <em>flights.</em></h2>
          </motion.div>
          <div style={{ border: '1px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 0, background: 'var(--ice)', borderBottom: '1px solid var(--border)', padding: '0.8rem 1.5rem' }}>
              {['Route', 'Date', 'From', 'Pax', ''].map(h => <span key={h} className="label-sm">{h}</span>)}
            </div>
            {emptyLegs.map((leg, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 0, padding: '1.2rem 1.5rem', borderBottom: i < emptyLegs.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'center' }}>
                <span className="body-md" style={{ fontFamily: 'var(--display)', fontSize: '1.1rem' }}>{leg.route}</span>
                <span className="body-sm">{leg.date}</span>
                <span className="body-sm">{leg.price}</span>
                <span className="body-sm">Up to {leg.pax}</span>
                <Link href="/contact" className="btn-ghost" style={{ padding: '0.45rem 0.9rem', fontSize: '0.62rem' }}>Enquire</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Flight charter</span>
            <h2 className="display-md">Plan your <em>charter.</em></h2>
          </motion.div>
          <EnquiryForm page="fly" cta="Plan a charter" />
        </div>
      </section>
    </>
  )
}
