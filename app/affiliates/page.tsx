'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const tiers = [
  { service: 'Stays',    standard: '10%', elite: '15%' },
  { service: 'Drive',    standard: '8%',  elite: '12%' },
  { service: 'Fly',      standard: '6%',  elite: '10%' },
  { service: 'Yacht',    standard: '6%',  elite: '10%' },
  { service: 'Eat',      standard: '8%',  elite: '12%' },
  { service: 'Security', standard: '5%',  elite: '8%'  },
  { service: 'Shop',     standard: '8%',  elite: '12%' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function AffiliatesPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top">
        <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1800&q=90" alt="Private affiliate meeting" fill priority style={{ objectFit: 'cover' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy page-hero-copy-raised">
            <span className="eyebrow page-hero-kicker">Affiliates</span>
            <h1 className="page-hero-title">
              Refer once.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Earn for life.</em>
            </h1>
            <p className="page-hero-body">OPV pays commission on every booking made by a client you refer - across all services, for as long as they remain a client.</p>
            <div className="page-hero-actions">
              <a href="#apply" className="btn-primary">Apply to the programme</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">How it works</span>
            <h2 className="display-md">Three steps.<br /><em>One relationship.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { title: 'Apply.', body: 'Complete the form. We review your network and confirm your affiliate status within 48 hours.' },
              { title: 'Refer.', body: 'Share your unique link. Any enquiry or booking within 90 days is attributed to you.' },
              { title: 'Earn.', body: 'Commission is calculated monthly and paid by bank transfer. No cap on earnings.' },
            ].map((step, i) => (
              <motion.div key={step.title} {...fadeUp(i * 0.1)} className="process-step">
                <h3 className="display-sm" style={{ marginBottom: '1rem' }}>{step.title}</h3>
                <p className="body-md">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission table */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 860, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Commission rates</span>
            <h2 className="display-md">Standard <em>& Elite.</em></h2>
          </motion.div>
          <div style={{ border: '1px solid var(--border)', background: 'var(--white)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: 'var(--ice)', borderBottom: '1px solid var(--border)', padding: '0.8rem 1.5rem' }}>
              {['Service', 'Standard', 'Elite'].map(h => <span key={h} className="label-sm">{h}</span>)}
            </div>
            {tiers.map((t, i) => (
              <div key={t.service} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1rem 1.5rem', borderBottom: i < tiers.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'center' }}>
                <span className="body-md">{t.service}</span>
                <span className="body-sm">{t.standard}</span>
                <span className="body-sm" style={{ color: 'var(--sapphire)', fontWeight: 500 }}>{t.elite}</span>
              </div>
            ))}
          </div>
          <p className="body-sm" style={{ marginTop: '1rem' }}>Elite status is awarded after 5 qualified referrals in a rolling 12-month period.</p>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Application</span>
            <h2 className="display-md">Apply to <em>the programme.</em></h2>
          </motion.div>
          <EnquiryForm page="affiliates" cta="Submit application" />
        </div>
      </section>
    </>
  )
}
