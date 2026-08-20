'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const vessels = [
  { name: 'Azimut 72', type: 'Motor Yacht', length: '72ft', pax: 10, detail: 'Four-cabin motor yacht with flybridge and water toys. Mediterranean-ready.', img: 'https://images.unsplash.com/photo-1563941406054-949f567f84bd?w=700&q=80' },
  { name: 'Sunseeker 88', type: 'Superyacht', length: '88ft', pax: 12, detail: "Flybridge superyacht with chef's galley, master stateroom and full crew.", img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=700&q=80' },
  { name: 'Leopard 50', type: 'Sailing Catamaran', length: '50ft', pax: 8, detail: 'Four-cabin sailing catamaran. Ideal for week charters through the Balearics.', img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=700&q=80' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function YachtPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top">
        <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&q=90" alt="Yacht charter" fill priority style={{ objectFit: 'cover' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy page-hero-copy-raised">
            <span className="eyebrow page-hero-kicker">Yacht</span>
            <h1 className="page-hero-title">
              Open water.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Private crew.</em>
            </h1>
            <p className="page-hero-body">Day charters, week-long itineraries and corporate charters. Mediterranean, Caribbean or coastal UK. Every charter includes full crew and concierge coordination from Manchester.</p>
            <div className="page-hero-actions">
              <Link href="/contact" className="btn-primary">Plan a charter</Link>
              <a href="#vessels" className="btn-ghost-light">View vessels</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charter types */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Charter types</span>
            <h2 className="display-md">Three <em>formats.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { title: 'Day Charter.', body: 'Six to ten hours. Catering, fuel and crew included. Perfect for celebrations, site visits or simply a day at sea.' },
              { title: 'Week Charter.', body: 'Seven nights with itinerary, provisioning, crew and return. Customised routing through the Balearics, Amalfi or Adriatic.' },
              { title: 'Corporate Charter.', body: 'Client entertainment, team events and incentive travel. Full AV, catering and crew briefed to corporate standards.' },
            ].map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i * 0.1)} className="process-step">
                <h3 className="display-sm" style={{ marginBottom: '1rem' }}>{c.title}</h3>
                <p className="body-md">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessels */}
      <section id="vessels" className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Available vessels</span>
            <h2 className="display-md">Selected <em>fleet.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {vessels.map((v, i) => (
              <motion.div key={v.name} {...fadeUp(i * 0.08)} className="prop-card">
                <div style={{ aspectRatio: '3/2', overflow: 'hidden', position: 'relative' }}>
                  <Image src={v.img} alt={v.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.6rem' }}>
                  <span className="prop-city" style={{ display: 'block', marginBottom: '0.4rem' }}>{v.type} · {v.length}</span>
                  <h3 className="display-sm" style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{v.name}</h3>
                  <p className="body-sm" style={{ marginBottom: '1.2rem' }}>{v.detail}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <span className="label-sm">Up to {v.pax} guests</span>
                    <Link href="/contact" className="btn-ghost" style={{ padding: '0.55rem 1.1rem', fontSize: '0.65rem' }}>Enquire</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--white)', padding: '7rem 2.5rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <p className="pull-quote" style={{ maxWidth: 800, margin: '0 auto' }}>
          "The sea does not<br /><em style={{ color: 'var(--sapphire)' }}>ask for a reservation.</em>"
        </p>
      </section>

      {/* Form */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Charter enquiry</span>
            <h2 className="display-md">Plan your <em>charter.</em></h2>
          </motion.div>
          <EnquiryForm page="yacht" cta="Plan a charter" />
        </div>
      </section>
    </>
  )
}
