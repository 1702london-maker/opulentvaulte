'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const properties = [
  { city: 'Manchester', name: 'The Crescent Riverside', beds: 4, sqft: '3,400', tags: ['River Irwell', 'Private Terrace', "Chef's Kitchen"], img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80', from: '£2,400' },
  { city: 'Cheshire',   name: 'Alderton Hall',          beds: 6, sqft: '5,200', tags: ['Countryside', 'Pool', 'Helipad'],                    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80', from: '£4,800' },
  { city: 'London',     name: 'The Knightsbridge Flat',  beds: 3, sqft: '2,100', tags: ['Knightsbridge', 'Concierge', 'Rooftop'],              img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80', from: '£3,200' },
  { city: 'Leeds',      name: 'Harewood Grange',         beds: 5, sqft: '4,100', tags: ['Grounds', 'Hot Tub', 'Home Cinema'],                  img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80', from: '£3,600' },
  { city: 'Manchester', name: 'Castlefield Penthouse',   beds: 2, sqft: '1,600', tags: ['Canal View', 'Balcony', 'Parking'],                   img: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=700&q=80', from: '£1,200' },
  { city: 'London',     name: 'The Mayfair Suite',        beds: 2, sqft: '1,800', tags: ['Mayfair', 'Butler', '24h Doorman'],                  img: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80', from: '£2,900' },
]

const destinations = ['Manchester', 'London', 'Leeds', 'Cheshire', 'Edinburgh', 'Dubai']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function StaysPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">OPV</Link>
        <span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Stays</span>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', height: 560, overflow: 'hidden', marginTop: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=85"
          alt="OPV Stays"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,39,51,0.65) 0%, rgba(26,39,51,0.2) 60%, transparent 100%)' }} />
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Private Residences</span>
            <h1 className="display-lg" style={{ color: 'var(--white)', maxWidth: 560 }}>Where you stay<br /><em style={{ color: 'var(--ice-deep)' }}>changes everything.</em></h1>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <Link href="/contact" className="btn-primary">Send your brief</Link>
              <a href="#properties" className="btn-ghost" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.4)' }}>Browse properties</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat strip */}
      <div style={{ background: 'var(--ice)', borderBottom: '1px solid var(--border)' }}>
        <div className="stat-strip">
          {[
            { num: '500+', label: 'Curated Properties' },
            { num: '34',   label: 'Countries Active' },
            { num: '200',  label: 'Point Verification' },
            { num: '100%', label: 'Personally Inspected' },
          ].map(s => (
            <div key={s.label} className="stat-item" style={{ background: 'var(--ice)' }}>
              <div className="stat-num">{s.num}</div>
              <span className="label-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Properties */}
      <section id="properties" className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Current portfolio</span>
            <h2 className="display-md">Managed properties<em>.</em></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {properties.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.07)} className="prop-card">
                <div className="prop-card-img">
                  <Image src={p.img} alt={p.name} width={500} height={667} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div style={{ padding: '1.6rem' }}>
                  <span className="prop-city" style={{ marginBottom: '0.4rem', display: 'block' }}>{p.city}</span>
                  <h3 className="display-sm" style={{ marginBottom: '0.8rem', fontSize: '1.3rem' }}>{p.name}</h3>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                    {p.tags.map(t => <span key={t} className="prop-badge">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <span className="body-sm">From <strong style={{ color: 'var(--ink)', fontFamily: 'var(--display)', fontSize: '1.1rem' }}>{p.from}</strong>/night</span>
                    <Link href="/contact" className="btn-ghost" style={{ padding: '0.55rem 1.1rem', fontSize: '0.65rem' }}>Enquire</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPV Managed vs Partner */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <motion.div {...fadeUp()}>
              <span className="eyebrow">OPV Managed</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Full service,<br /><em>fully arranged.</em></h2>
              <p className="body-lg">OPV-managed properties include dedicated pre-arrival briefing, in-property concierge on arrival, housekeeping and 24/7 response. Nothing is left to chance.</p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="eyebrow">Partner Hosted</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Vetted and <em>verified.</em></h2>
              <p className="body-lg">Partner properties meet OPV's 200-point inspection standard. Access is arranged through our team. You receive the same briefing and concierge coordination.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Where we operate</span>
            <h2 className="display-md">Active <em>destinations.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {destinations.map((d, i) => (
              <motion.div key={d} {...fadeUp(i * 0.06)} style={{ background: 'var(--ice)', padding: '2rem', textAlign: 'center' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Off-market access</span>
            <h2 className="display-md">The best properties<br /><em>never appear publicly.</em></h2>
            <p className="body-lg" style={{ marginTop: '1rem' }}>Tell us your dates and preferences. We find the right property and arrange everything.</p>
          </motion.div>
          <EnquiryForm page="stays" cta="Send your brief" />
        </div>
      </section>
    </>
  )
}
