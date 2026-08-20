'use client'

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
      <div className="breadcrumb">
        <Link href="/">OPV</Link><span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Affiliates</span>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--ice)', padding: '8rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Referral Programme</span>
            <h1 className="display-xl" style={{ marginBottom: '1.5rem' }}>Refer once.<br /><em>Earn for life.</em></h1>
            <p className="body-lg" style={{ marginBottom: '2rem', maxWidth: 420 }}>OPV pays commission on every booking made by a client you refer — across all services, for as long as they remain a client.</p>
            <a href="#apply" className="btn-primary">Apply to the programme</a>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {[{ num: '15%', label: 'Max commission' }, { num: '90', label: 'Day cookie window' }, { num: 'Monthly', label: 'Payout cycle' }, { num: 'Lifetime', label: 'Client attribution' }].map(s => (
              <div key={s.label} style={{ background: 'var(--white)', padding: '2.5rem', textAlign: 'center' }}>
                <div className="stat-num" style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>{s.num}</div>
                <span className="label-sm">{s.label}</span>
              </div>
            ))}
          </div>
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
