'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const fleet = [
  { name: 'Rolls-Royce Cullinan', category: 'SUV', detail: 'The definitive statement. Series II with bespoke colour commission available.', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80', tags: ['Self-Drive', 'Chauffeured'] },
  { name: 'Bentley Flying Spur', category: 'Saloon', detail: 'Four-seat grand tourer. Mulliner specification. Airport to hotel without compromise.', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700&q=80', tags: ['Chauffeured'] },
  { name: 'Range Rover Autobiography', category: 'SUV', detail: 'Practical luxury for countryside estates and northern routes. Privacy glass, climate rear.', img: 'https://images.unsplash.com/photo-1541447270924-9e16e94cd6d8?w=700&q=80', tags: ['Self-Drive', 'Chauffeured'] },
]

const airports = [
  { code: 'MAN', name: 'Manchester', status: 'Covered' },
  { code: 'LHR', name: 'Heathrow', status: 'Covered' },
  { code: 'LCY', name: 'City', status: 'Covered' },
  { code: 'LGW', name: 'Gatwick', status: 'Covered' },
  { code: 'LTN', name: 'Luton', status: 'Covered' },
  { code: 'BHX', name: 'Birmingham', status: 'Covered' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function DrivePage() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">OPV</Link>
        <span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Drive</span>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--ice)', padding: '7rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Chauffeured Transport</span>
            <h1 className="display-xl" style={{ marginBottom: '1.5rem' }}>The right car.<br /><em>Every journey.</em></h1>
            <p className="body-lg" style={{ marginBottom: '2rem', maxWidth: 440 }}>From airport transfers to bespoke day hire. Our fleet includes Rolls-Royce, Bentley, Range Rover and armoured vehicles. Every journey is coordinated by your concierge.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary">Request a detail</Link>
              <a href="#fleet" className="btn-ghost">View fleet</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', height: 440, overflow: 'hidden' }}
          >
            <Image src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85" alt="Rolls-Royce Cullinan" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* Category grid */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Fleet categories</span>
            <h2 className="display-md">Four <em>categories.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {['Saloon', 'SUV', 'Sports', 'Armoured'].map((cat, i) => (
              <motion.div key={cat} {...fadeUp(i * 0.07)} style={{ background: 'var(--ice)', padding: '3rem 2rem', textAlign: 'center' }}>
                <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>{cat}</span>
                <p className="body-sm">On request</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">The fleet</span>
            <h2 className="display-md">Specific vehicles,<br /><em>precisely arranged.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {fleet.map((v, i) => (
              <motion.div key={v.name} {...fadeUp(i * 0.08)} className="prop-card">
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  <Image src={v.img} alt={v.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.6rem' }}>
                  <span className="prop-city" style={{ marginBottom: '0.4rem', display: 'block' }}>{v.category}</span>
                  <h3 className="display-sm" style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{v.name}</h3>
                  <p className="body-sm" style={{ marginBottom: '1.2rem' }}>{v.detail}</p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {v.tags.map(t => <span key={t} className="prop-badge">{t}</span>)}
                  </div>
                  <Link href="/contact" className="btn-ghost" style={{ padding: '0.55rem 1.1rem', fontSize: '0.65rem' }}>Request this vehicle</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="section-sm" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <span className="eyebrow">Airport coverage</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1px', background: 'var(--border)', marginTop: '1.5rem' }}>
            {airports.map(a => (
              <div key={a.code} style={{ background: 'var(--white)', padding: '1.5rem', textAlign: 'center' }}>
                <p className="label-sm" style={{ color: 'var(--sapphire)', fontSize: '1rem', fontFamily: 'var(--display)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '0.3rem' }}>{a.code}</p>
                <span className="label-sm">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Book a vehicle</span>
            <h2 className="display-md">Tell us your <em>journey.</em></h2>
          </motion.div>
          <EnquiryForm page="drive" cta="Request a detail" />
        </div>
      </section>
    </>
  )
}
