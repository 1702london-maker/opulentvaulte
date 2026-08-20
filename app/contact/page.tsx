'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function ContactPage() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">OPV</Link><span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Contact</span>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--white)', padding: '8rem 2.5rem 5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">One number</span>
            <h1 className="display-xl" style={{ marginBottom: '1.5rem' }}>Tell us<br /><em>what you need.</em></h1>
            <p className="body-lg">One contact for every service. Available 24 hours a day, every day of the year.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { method: 'Phone', value: '+44 (0) 161 000 0000', label: 'Available 24h', href: 'tel:+441610000000', cta: 'Call now' },
              { method: 'Email', value: 'booking@budruum.co.uk', label: 'Response within 2 hours', href: 'mailto:booking@budruum.co.uk', cta: 'Send an email' },
              { method: 'WhatsApp', value: '+44 (0) 7700 000000', label: 'Preferred for urgent requests', href: 'https://wa.me/447700000000', cta: 'Open WhatsApp' },
            ].map((c, i) => (
              <motion.div key={c.method} {...fadeUp(i * 0.08)} style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '2.5rem' }}>
                <span className="eyebrow">{c.method}</span>
                <p className="display-sm" style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontFamily: 'var(--body)' }}>{c.value}</p>
                <p className="body-sm" style={{ marginBottom: '1.5rem' }}>{c.label}</p>
                <a href={c.href} className="btn-ghost" style={{ padding: '0.6rem 1.2rem', fontSize: '0.68rem' }}>{c.cta}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">General enquiry</span>
            <h2 className="display-md">Send us <em>your brief.</em></h2>
          </motion.div>
          <EnquiryForm page="contact" cta="Send enquiry" />
        </div>
      </section>

      {/* Office */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
            <motion.div {...fadeUp()}>
              <span className="eyebrow">Office</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Registered <em>address.</em></h2>
              <p className="body-lg">Budruum Ltd<br />71–75 Shelton Street<br />Covent Garden<br />London WC2H 9JQ</p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="eyebrow">Hours</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Concierge <em>availability.</em></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[['Concierge line', '24 hours / 7 days'], ['Email', 'Response within 2 hours'], ['Emergency line', '24 hours / 7 days']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '0.8rem' }}>
                    <span className="label-sm">{k}</span>
                    <span className="label-sm" style={{ color: 'var(--ink)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
