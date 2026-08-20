'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const properties = [
  { id: 1, name: 'The Crescent Riverside', city: 'Manchester', area: 'Salford Quays', type: 'penthouse', designation: 'opv-managed', beds: 4, guests: 8, priceFrom: 850, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80', chips: ['River View', 'Private Terrace', 'Chef Kitchen', 'Concierge'], verified: true, description: 'Four-bedroom penthouse on the Irwell with panoramic water views.' },
  { id: 3, name: 'The Knightsbridge Residence', city: 'London', area: 'Knightsbridge', type: 'townhouse', designation: 'opv-managed', beds: 5, guests: 10, priceFrom: 4100, image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80', chips: ['Mayfair Adjacent', 'Butler', 'Rooftop Terrace', 'Wine Cellar'], verified: true, description: 'Five-storey Knightsbridge townhouse with butler and rooftop garden.' },
  { id: 4, name: 'Harewood Grange', city: 'Leeds', area: 'Harewood', type: 'estate', designation: 'partner-hosted', beds: 6, guests: 12, priceFrom: 2800, image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80', chips: ['Private Grounds', 'Hot Tub', 'Home Cinema', 'Stables'], verified: true, description: 'Country estate with stable block, cinema room and landscaped grounds.' },
  { id: 5, name: 'Royal Mills Penthouse', city: 'Manchester', area: 'Ancoats', type: 'penthouse', designation: 'opv-managed', beds: 3, guests: 6, priceFrom: 890, image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=700&q=80', chips: ['Mill Conversion', 'Rooftop', 'City Views', 'Parking'], verified: true, description: 'Converted Victorian mill with rooftop terrace above Ancoats.' },
  { id: 6, name: 'The Mayfair Suite', city: 'London', area: 'Mayfair', type: 'apartment', designation: 'opv-managed', beds: 2, guests: 4, priceFrom: 2900, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80', chips: ['24h Doorman', 'Butler', 'Concierge', 'Bond Street'], verified: true, description: 'White-glove apartment steps from Bond Street with 24-hour butler.' },
  { id: 7, name: 'Castlefield Loft', city: 'Manchester', area: 'Castlefield', type: 'apartment', designation: 'partner-hosted', beds: 2, guests: 4, priceFrom: 620, image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=700&q=80', chips: ['Canal View', 'Balcony', 'Viaduct Views', 'Secure Parking'], verified: false, description: 'Industrial-chic loft overlooking the Roman Fort and canal basin.' },
  { id: 8, name: 'Mount Street W1', city: 'London', area: 'Mayfair', type: 'townhouse', designation: 'opv-managed', beds: 4, guests: 8, priceFrom: 3800, image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=700&q=80', chips: ['Private Courtyard', 'Wine Cellar', 'Staff', 'Mayfair'], verified: true, description: 'Four-floor W1 townhouse with private courtyard and household staff.' },
  { id: 9, name: 'The Grain Loft', city: 'Leeds', area: 'Granary Wharf', type: 'apartment', designation: 'partner-hosted', beds: 2, guests: 4, priceFrom: 580, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80', chips: ['Waterfront', 'Canal Views', 'Exposed Ironwork', 'Art Hung'], verified: false, description: 'Converted grain warehouse with original ironwork at Granary Wharf.' },
  { id: 11, name: 'Deansgate Residences', city: 'Manchester', area: 'Deansgate', type: 'penthouse', designation: 'opv-managed', beds: 2, guests: 4, priceFrom: 740, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80', chips: ['Beetham Tower Views', 'Gym', 'Concierge', 'Valet'], verified: true, description: 'High-floor Deansgate residence with Beetham Tower views and valet.' },
  { id: 12, name: 'Belgravia Mews', city: 'London', area: 'Belgravia', type: 'townhouse', designation: 'opv-managed', beds: 3, guests: 6, priceFrom: 3400, image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?w=700&q=80', chips: ['Private Garage', 'Garden', 'Period Features', 'Butler'], verified: true, description: 'Grade II listed mews with private garage, walled garden and butler.' },
  { id: 13, name: 'Victoria Quarter Flat', city: 'Leeds', area: 'City Centre', type: 'apartment', designation: 'partner-hosted', beds: 1, guests: 2, priceFrom: 390, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80', chips: ['Arcade Adjacent', 'Designer Interiors', 'Concierge'], verified: false, description: 'Elegantly designed flat adjacent to the Victoria Quarter arcade.' },
  { id: 15, name: 'Shoreditch Loft', city: 'London', area: 'Shoreditch', type: 'apartment', designation: 'partner-hosted', beds: 2, guests: 4, priceFrom: 980, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80', chips: ['Rooftop Terrace', 'Industrial Design', 'Art Collection'], verified: false, description: 'East London loft with curated art collection and private rooftop.' },
  { id: 16, name: 'The Northern Quarter Residence', city: 'Manchester', area: 'Northern Quarter', type: 'apartment', designation: 'opv-managed', beds: 1, guests: 2, priceFrom: 480, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80', chips: ['NQ Location', 'Designer Fit-out', 'Concierge', 'Gym'], verified: true, description: 'Bespoke one-bedroom in the heart of Manchester\'s Northern Quarter.' },
]

const types = ['All', 'Penthouse', 'Villa', 'Estate', 'Townhouse', 'Apartment']
const cities = ['All Cities', 'Manchester', 'London', 'Leeds']

const destinations = [
  { city: 'Manchester', country: 'England', img: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&q=80' },
  { city: 'London', country: 'England', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
  { city: 'Leeds', country: 'England', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80' },
]

const fu = (d = 0) => ({ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } })

export default function StaysPage() {
  const [activeType, setActiveType] = useState('All')
  const [activeCity, setActiveCity] = useState('All Cities')

  const filtered = properties.filter(p => {
    const typeMatch = activeType === 'All' || p.type === activeType.toLowerCase()
    const cityMatch = activeCity === 'All Cities' || p.city === activeCity
    return typeMatch && cityMatch
  })

  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&q=90"
          alt="OPV Private Residences"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-inner">
          <motion.div {...fu()} className="page-hero-copy">
            <span className="eyebrow page-hero-kicker">Stays</span>
            <h1 className="page-hero-title">
              The property you<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>couldn&apos;t find.</em>
            </h1>
            <p className="page-hero-body">
              Curated private residences across the UK. Every property verified by an OPV property guardian before it appears here.
            </p>
            <div className="page-hero-actions">
              <a href="#properties" className="btn-primary">Browse all stays</a>
              <Link href="/contact" className="btn-ghost-light">Send your brief</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stat strip */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="stat-strip">
          {[
            { num: '500+', label: 'Curated Properties' },
            { num: '13', label: 'Available Now' },
            { num: '200', label: 'Point Verification' },
            { num: '24/7', label: 'Concierge Access' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <span className="label-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Filter bar */}
      <div id="properties" style={{ position: 'sticky', top: 72, zIndex: 80, background: '#FFFFFF', borderBottom: '1px solid var(--border)', padding: '0.9rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  padding: '0.4rem 0.9rem', border: '1px solid',
                  borderColor: activeType === t ? 'var(--sapphire)' : 'var(--border)',
                  background: activeType === t ? 'var(--sapphire)' : 'transparent',
                  color: activeType === t ? '#FFFFFF' : 'var(--ink-soft)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >{t}</button>
            ))}
          </div>
          <div style={{ width: '1px', height: 20, background: 'var(--border)', flexShrink: 0 }} />
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {cities.map(c => (
              <button
                key={c}
                onClick={() => setActiveCity(c)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  padding: '0.4rem 0.9rem', border: '1px solid',
                  borderColor: activeCity === c ? 'var(--sapphire)' : 'var(--border)',
                  background: activeCity === c ? 'var(--sapphire)' : 'transparent',
                  color: activeCity === c ? '#FFFFFF' : 'var(--ink-soft)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Property grid */}
      <section style={{ background: '#FFFFFF', padding: '4rem 0 7rem' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 0' }}>
              <p className="body-lg">No properties match your current filters.</p>
              <button onClick={() => { setActiveType('All'); setActiveCity('All Cities') }} className="btn-ghost" style={{ marginTop: '1.5rem' }}>Clear filters</button>
            </div>
          ) : (
            <div className="stays-property-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1.25rem' }}>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                  className="prop-card"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }} className="group">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                      className="group-hover:scale-105"
                    />
                    {/* Top-left designation badge */}
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                      <span style={{ display: 'inline-block', background: '#FFFFFF', border: '1px solid var(--sapphire)', color: 'var(--sapphire)', fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.22rem 0.48rem' }}>
                        {p.designation === 'opv-managed' ? 'OPV Managed' : 'Partner Hosted'}
                      </span>
                    </div>
                    {/* Top-right verified badge */}
                    {p.verified && (
                      <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                        <span style={{ display: 'inline-block', background: 'var(--sapphire)', color: '#FFFFFF', fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.22rem 0.48rem' }}>
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="prop-city" style={{ marginBottom: '0.3rem', display: 'block' }}>{p.city} · {p.area}</span>
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.18rem', fontWeight: 400, lineHeight: 1.16, color: 'var(--ink)', marginBottom: '0.45rem' }}>{p.name}</h3>
                    <p className="body-sm" style={{ marginBottom: '0.75rem', color: 'var(--ink-soft)' }}>{p.description}</p>

                    {/* Chips */}
                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                      {p.chips.map(c => (
                        <span key={c} style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border)', color: 'var(--ink-soft)', padding: '0.16rem 0.4rem' }}>
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Guests + Beds */}
                    <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <span className="label-sm">{p.beds} Bedrooms</span>
                      <span className="label-sm">{p.guests} Guests</span>
                    </div>

                    {/* Price + CTAs */}
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.8rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--display)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--ink)' }}>£{p.priceFrom.toLocaleString()}</span>
                        <span style={{ fontFamily: 'var(--body)', fontSize: '0.78rem', color: 'var(--ink-soft)', marginLeft: '0.3rem' }}>/night</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link href="/contact" className="btn-primary" style={{ padding: '0.48rem 0.75rem', fontSize: '0.56rem' }}>View</Link>
                        <Link href="/contact" className="btn-ghost" style={{ padding: '0.48rem 0.75rem', fontSize: '0.56rem' }}>Request</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. OPV Standard */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <motion.div {...fu()}>
            <span className="eyebrow">Our designations</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,3.5vw,3.4rem)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Two designations.<br /><em style={{ fontStyle: 'italic', color: 'var(--sapphire)' }}>One threshold.</em>
            </h2>
            <p className="body-lg">Every property on OPV meets the same verification standard regardless of designation. The difference is who manages the day-to-day experience.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <motion.div {...fu(0.1)} style={{ border: '1px solid var(--border)', padding: '2rem', background: '#FFFFFF' }}>
              <span style={{ display: 'inline-block', background: 'var(--sapphire)', color: '#FFFFFF', fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', marginBottom: '1rem' }}>OPV Managed</span>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.8rem' }}>Fully managed.</h3>
              <p className="body-sm">Our team operates the property directly — arrivals, housekeeping, concierge and maintenance. Your named guardian handles everything end-to-end.</p>
            </motion.div>
            <motion.div {...fu(0.15)} style={{ border: '1px solid var(--border)', padding: '2rem', background: '#EAF4FB' }}>
              <span style={{ display: 'inline-block', border: '1px solid var(--sapphire)', color: 'var(--sapphire)', fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', marginBottom: '1rem' }}>Partner Hosted</span>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.8rem' }}>Owner-operated.</h3>
              <p className="body-sm">The owner manages the day-to-day, but we have physically audited the property and verified ownership, legal title and guest experience standards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Verification strip */}
      <section style={{ background: '#EAF4FB', padding: '5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fu()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">The OPV standard</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem,3vw,3rem)', fontWeight: 300, color: 'var(--ink)' }}>
              200-point verification.<br /><em style={{ fontStyle: 'italic', color: 'var(--sapphire)' }}>Every time.</em>
            </h2>
          </motion.div>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', paddingBottom: '1rem' }}>
            {[
              { title: 'Property Inspection', body: 'An OPV guardian visits in person. Condition, fixtures, access and presentation are assessed against our criteria.' },
              { title: 'Owner Verification', body: 'Identity documents, proof of ownership and regulatory compliance are checked before the listing goes live.' },
              { title: 'Legal Title Check', body: 'We verify the property is free of encumbrances, short-let compliant and properly insured for guest stays.' },
              { title: 'Photography Audit', body: 'Our team reviews imagery for accuracy — no render shots, no wide-angle distortion, no misrepresentation.' },
              { title: 'Concierge Walkthrough', body: 'A final end-to-end guest journey rehearsal. If anything falls short, the listing does not go live.' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                {...fu(i * 0.08)}
                style={{ minWidth: 240, maxWidth: 280, paddingLeft: '1.5rem', borderLeft: '2px solid var(--sapphire)', marginRight: '3rem', flexShrink: 0 }}
              >
                <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '0.7rem' }}>{step.title}</h4>
                <p className="body-sm">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Destinations grid */}
      <section style={{ background: '#FFFFFF', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fu()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Where we operate</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,3.5vw,3.4rem)', fontWeight: 300, color: 'var(--ink)' }}>
              Three cities.<br /><em style={{ fontStyle: 'italic', color: 'var(--sapphire)' }}>One standard.</em>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {destinations.map((d, i) => (
              <motion.div
                key={d.city}
                {...fu(i * 0.07)}
                style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setActiveCity(d.city)}
              >
                <Image src={d.img} alt={d.city} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,39,51,0.65) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '1.8rem', left: '1.8rem' }}>
                  <p style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0.2rem' }}>{d.city}</p>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>{d.country}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Off-market teaser */}
      <section style={{ background: '#EAF4FB', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fu()} style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85" alt="Off-market property" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <motion.div {...fu(0.1)}>
            <span className="eyebrow">Off-Market</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,3.5vw,3.4rem)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Not every property<br /><em style={{ fontStyle: 'italic', color: 'var(--sapphire)' }}>is listed.</em>
            </h2>
            <p className="body-lg" style={{ marginBottom: '1.2rem' }}>
              The most exclusive properties in our portfolio are never advertised publicly. They are presented privately to clients who have established a relationship with OPV.
            </p>
            <p className="body-md" style={{ marginBottom: '2rem' }}>
              These include family estates, private islands and properties whose owners prefer absolute discretion. A property guardian can share availability on request.
            </p>
            <Link href="/contact" className="btn-primary">
              Speak to a property guardian →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. Enquiry form */}
      <section style={{ background: '#FFFFFF', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div {...fu()}>
            <span className="eyebrow">Enquire now</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,3.5vw,3.4rem)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Tell us the<br /><em style={{ fontStyle: 'italic', color: 'var(--sapphire)' }}>dates.</em>
            </h2>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>
              Share your requirements and a property guardian will respond within two hours with a curated shortlist matched to your brief.
            </p>
            {[
              'Off-market properties presented on request',
              'Named guardian assigned from first enquiry',
              'Single invoice covering property and services',
            ].map(b => (
              <div key={b} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--sapphire)', fontWeight: 500, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                <p className="body-sm" style={{ color: 'var(--ink-mid)' }}>{b}</p>
              </div>
            ))}
          </motion.div>
          <motion.div {...fu(0.1)}>
            <EnquiryForm page="stays" cta="Send your brief →" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
