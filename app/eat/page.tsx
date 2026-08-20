'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const diningTypes = [
  { label: 'Private Rooms',      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80' },
  { label: 'Table Reservations', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80' },
  { label: 'Corporate Dining',   img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&q=80' },
  { label: 'Celebrations',       img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80' },
  { label: 'Match Days',         img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80' },
  { label: 'Brand Events',       img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80' },
]

const venues = [
  { name: '20 Stories', city: 'Manchester', detail: 'Rooftop dining 20 floors above the city. Private room holds 40.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { name: 'Tattu',      city: 'Manchester', detail: 'Contemporary Chinese in a dramatic interior. Private dining room available.', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80' },
  { name: 'MNKY HSE',   city: 'London',     detail: 'Latin American with a private terrace. Suited to celebrations and corporate evenings.', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function EatPage() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">OPV</Link>
        <span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Eat</span>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', height: 560, overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85" alt="Private dining" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,39,51,0.7) 0%, rgba(26,39,51,0.2) 50%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: '4rem', left: 0, right: 0 }}>
          <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
            <motion.div {...fadeUp()}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Private Dining</span>
              <h1 className="display-lg" style={{ color: 'var(--white)', maxWidth: 560 }}>The table is held.<br /><em style={{ color: 'var(--ice-deep)' }}>Before you ask.</em></h1>
              <Link href="/contact" className="btn-primary" style={{ marginTop: '2rem' }}>Reserve the evening</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining types */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Occasions</span>
            <h2 className="display-md">Every kind of <em>table.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {diningTypes.map((dt, i) => (
              <motion.div key={dt.label} {...fadeUp(i * 0.07)}>
                <Link href="/contact" className="service-tile" style={{ display: 'block', aspectRatio: '4/3' }}>
                  <Image src={dt.img} alt={dt.label} width={500} height={375} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  <div className="service-tile-overlay">
                    <span className="eyebrow" style={{ color: 'var(--white)', marginBottom: 0 }}>{dt.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue cards */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Partner venues</span>
            <h2 className="display-md">Selected <em>restaurants.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {venues.map((v, i) => (
              <motion.div key={v.name} {...fadeUp(i * 0.08)} className="prop-card">
                <div style={{ aspectRatio: '3/2', overflow: 'hidden', position: 'relative' }}>
                  <Image src={v.img} alt={v.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.6rem' }}>
                  <span className="prop-city" style={{ display: 'block', marginBottom: '0.4rem' }}>{v.city}</span>
                  <h3 className="display-sm" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{v.name}</h3>
                  <p className="body-sm" style={{ marginBottom: '1.2rem' }}>{v.detail}</p>
                  <Link href="/contact" className="btn-ghost" style={{ padding: '0.55rem 1.1rem', fontSize: '0.65rem' }}>Reserve this table</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Private dining enquiry</span>
            <h2 className="display-md">Reserve <em>the evening.</em></h2>
          </motion.div>
          <EnquiryForm page="eat" cta="Reserve the evening" />
        </div>
      </section>
    </>
  )
}
