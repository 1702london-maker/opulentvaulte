'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const services = [
  { title: 'Close Protection', body: 'Named, SIA-licensed CPO assigned to the principal. Available on advance request for UK and international travel.' },
  { title: 'Residential Security', body: 'Static guarding and security management for private residences. Vetted officers, NDA-signed.' },
  { title: 'Secure Transport', body: 'Armoured vehicles and B6-rated options. Driver trained in evasive manoeuvres and route security.' },
  { title: 'Event Security', body: 'Venue security for private events, corporate dinners and access-controlled occasions.' },
]

const vetting = [
  { title: 'Identity & Vetting.', items: ['Enhanced DBS', 'Five-year reference check', 'SIA licence verification', 'Biometric verification'] },
  { title: 'Operational Training.', items: ['First aid (Level 3)', 'Conflict management', 'Route advance training', 'Firearms awareness'] },
  { title: 'Discretion Protocol.', items: ['NDA signed on engagement', 'No social media', 'Client identity never disclosed', 'Post-engagement purge'] },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=90" alt="Close protection" fill priority style={{ objectFit: 'cover' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy page-hero-copy-raised">
            <span className="eyebrow page-hero-kicker">Security</span>
            <h1 className="page-hero-title">
              Discreet. Dependable.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Present.</em>
            </h1>
            <p className="page-hero-body">SIA-licensed close protection officers. Residential and event security. Armoured transport. Arranged with the same discretion as every other OPV service.</p>
            <div className="page-hero-actions">
              <Link href="/contact" className="btn-primary">Send a confidential brief</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Services</span>
            <h2 className="display-md">Four <em>disciplines.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.08)} style={{ background: 'var(--ice)', padding: '3rem' }}>
                <h3 className="display-sm" style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{s.title}</h3>
                <p className="body-md">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Officer standard</span>
            <h2 className="display-md">The vetting <em>standard.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {vetting.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.1)} className="process-step">
                <h3 className="display-sm" style={{ marginBottom: '1.2rem' }}>{v.title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {v.items.map(item => (
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

      {/* Form */}
      <section className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">Confidential enquiry</span>
            <h2 className="display-md">Send a <em>confidential brief.</em></h2>
            <p className="body-sm" style={{ marginTop: '0.8rem', color: 'var(--sapphire)' }}>This form is not stored in your browser. All enquiries are handled directly by the OPV security team.</p>
          </motion.div>
          <EnquiryForm page="security" cta="Send a confidential brief" />
        </div>
      </section>
    </>
  )
}
