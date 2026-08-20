'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type FleetCategory = 'saloon' | 'suv' | 'sports' | 'armoured'

type FleetCar = {
  id: string
  make: string
  model: string
  category: FleetCategory
  badge: 'Chauffeur Available' | 'Self-Drive Only' | 'Chauffeur Only'
  passengers: number
  spec: string
  chips: string[]
  priceFrom: string
  image: string
  cta: 'Reserve' | 'Request Briefing'
}

const fleet: FleetCar[] = [
  { id: 'ghost', make: 'Rolls-Royce', model: 'Ghost', category: 'saloon', badge: 'Chauffeur Available', passengers: 4, spec: '6.75L V12, rear-suite serenity', chips: ['4 passengers', '3 luggage'], priceFrom: '£1,800', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=900&q=85', cta: 'Reserve' },
  { id: 'flying-spur', make: 'Bentley', model: 'Flying Spur W12', category: 'saloon', badge: 'Chauffeur Available', passengers: 4, spec: '6.0L W12, 635bhp touring saloon', chips: ['4 passengers', '4 luggage'], priceFrom: '£1,200', image: 'https://images.unsplash.com/photo-1621993202323-f438eec934d2?w=900&q=85', cta: 'Reserve' },
  { id: 'maybach', make: 'Mercedes-Maybach', model: 'S-Class', category: 'saloon', badge: 'Chauffeur Available', passengers: 4, spec: '4.0L V8 Biturbo, executive rear cabin', chips: ['4 passengers', '3 luggage'], priceFrom: '£950', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=85', cta: 'Reserve' },
  { id: 'cullinan', make: 'Rolls-Royce', model: 'Cullinan', category: 'suv', badge: 'Chauffeur Available', passengers: 5, spec: '6.75L V12, all-terrain presence', chips: ['5 passengers', '5 luggage'], priceFrom: '£2,200', image: 'https://images.unsplash.com/photo-1626072778346-0ab6604d39b3?w=900&q=85', cta: 'Reserve' },
  { id: 'bentayga', make: 'Bentley', model: 'Bentayga Speed', category: 'suv', badge: 'Chauffeur Available', passengers: 5, spec: '6.0L W12, 635bhp grand SUV', chips: ['5 passengers', '5 luggage'], priceFrom: '£1,400', image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=900&q=85', cta: 'Reserve' },
  { id: 'range-rover', make: 'Range Rover', model: 'Autobiography LWB', category: 'suv', badge: 'Chauffeur Available', passengers: 6, spec: 'Long wheelbase executive rear seating', chips: ['6 passengers', '6 luggage'], priceFrom: '£880', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=85', cta: 'Reserve' },
  { id: 'urus', make: 'Lamborghini', model: 'Urus Performante', category: 'sports', badge: 'Self-Drive Only', passengers: 4, spec: '4.0L V8, 666bhp performance SUV', chips: ['4 passengers', '2 luggage'], priceFrom: '£1,600', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=900&q=85', cta: 'Reserve' },
  { id: 'taycan', make: 'Porsche', model: 'Taycan Turbo S', category: 'sports', badge: 'Self-Drive Only', passengers: 4, spec: 'Electric, 761bhp launch control', chips: ['4 passengers', '2 luggage'], priceFrom: '£980', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=900&q=85', cta: 'Reserve' },
  { id: 'roma', make: 'Ferrari', model: 'Roma Spider', category: 'sports', badge: 'Self-Drive Only', passengers: 2, spec: '3.9L V8, 620bhp open-top GT', chips: ['2 passengers', '1 luggage'], priceFrom: '£1,900', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=900&q=85', cta: 'Reserve' },
  { id: 'bmw-armoured', make: 'BMW', model: '7-Series B6 Armoured', category: 'armoured', badge: 'Chauffeur Only', passengers: 4, spec: 'B6 ballistic rated, run-flat tyres', chips: ['4 passengers', 'secure comms'], priceFrom: 'POA', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=85', cta: 'Request Briefing' },
  { id: 's-guard', make: 'Mercedes-Benz', model: 'S-Class Guard', category: 'armoured', badge: 'Chauffeur Only', passengers: 4, spec: 'VR6/VR7 rated, blast-resistant floor', chips: ['4 passengers', 'VR rated'], priceFrom: 'POA', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=85', cta: 'Request Briefing' },
  { id: 'sentinel', make: 'Range Rover', model: 'Sentinel', category: 'armoured', badge: 'Chauffeur Only', passengers: 5, spec: 'B6+ armour, NATO STANAG standard', chips: ['5 passengers', 'B6+ armour'], priceFrom: 'POA', image: 'https://images.unsplash.com/photo-1541447270924-9e16e94cd6d8?w=900&q=85', cta: 'Request Briefing' },
]

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Saloon', value: 'saloon' },
  { label: 'SUV', value: 'suv' },
  { label: 'Sports', value: 'sports' },
  { label: 'Grand Tourer', value: 'sports' },
  { label: 'Armoured', value: 'armoured' },
]

const airports = [
  ['MAN', 'Manchester'],
  ['LHR', 'Heathrow'],
  ['LCY', 'London City'],
  ['LGW', 'Gatwick'],
  ['LTN', 'Luton'],
  ['BHX', 'Birmingham'],
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function DrivePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const filteredFleet = useMemo(
    () => (activeCategory === 'all' ? fleet : fleet.filter(car => car.category === activeCategory)),
    [activeCategory]
  )

  async function submitJourney(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setSent(false)
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: 'drive',
        service: 'drive',
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: String(payload.notes || ''),
        payload,
      }),
    })
    setSubmitting(false)
    if (response.ok) {
      setSent(true)
      form.reset()
    }
  }

  return (
    <>
      <div className="breadcrumb">
        <Link href="/">OPV</Link><span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Drive</span>
      </div>

      <section style={{ position: 'relative', height: '85vh', overflow: 'hidden', background: '#EAF4FB' }}>
        <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90" alt="Luxury road journey" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,39,51,0.72) 0%, rgba(26,39,51,0.28) 38%, transparent 55%)' }} />
        <div style={{ position: 'absolute', bottom: '4.5rem', left: 0, right: 0, maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Chauffeured &amp; Self-Drive</span>
            <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.8rem,5.5vw,5.5rem)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '1.4rem', maxWidth: 720 }}>
              The road. Your rules.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Your car.</em>
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', fontWeight: 300, marginBottom: '2rem', maxWidth: 560 }}>
              Chauffeured, self-driven or armoured. Delivered to your door, hotel steps or aircraft.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#fleet" className="btn-primary">Browse the fleet</a>
              <a href="#booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.65)', fontFamily: 'var(--mono)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Book a chauffeur</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="stat-strip">
          {[
            ['12', 'Vehicles Available'],
            ['3', 'Cities Covered'],
            ['24/7', 'On-Call Dispatch'],
            ['SIA', 'Licensed Drivers'],
          ].map(([num, label]) => (
            <div key={label} className="stat-item">
              <div className="stat-num">{num}</div>
              <span className="label-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ position: 'sticky', top: 72, zIndex: 80, background: '#FFFFFF', borderBottom: '1px solid var(--border)', padding: '0.9rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'flex', gap: '0.55rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {categories.map(category => {
            const active = activeCategory === category.value || (category.label === 'Grand Tourer' && activeCategory === 'sports')
            return (
              <button key={category.label} onClick={() => setActiveCategory(category.value)} style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.45rem 0.95rem', border: '1px solid', borderColor: active ? 'var(--sapphire)' : 'var(--border)', background: active ? 'var(--sapphire)' : 'transparent', color: active ? '#FFFFFF' : 'var(--ink-soft)', cursor: 'pointer', transition: 'all 0.2s' }}>
                {category.label}
              </button>
            )
          })}
        </div>
      </div>

      <section id="fleet" style={{ background: '#FFFFFF', padding: '4rem 0 7rem' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="drive-fleet-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1.25rem' }}>
            {filteredFleet.map((car, i) => (
              <motion.article key={car.id} {...fadeUp((i % 4) * 0.05)} className="prop-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image src={car.image} alt={`${car.make} ${car.model}`} fill style={{ objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
                  <span style={{ position: 'absolute', top: '0.7rem', left: '0.7rem', display: 'inline-block', background: '#FFFFFF', border: '1px solid var(--sapphire)', color: 'var(--sapphire)', fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.48rem' }}>{car.category === 'suv' ? 'SUV' : car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
                  <span style={{ position: 'absolute', top: '0.7rem', right: '0.7rem', display: 'inline-block', background: 'var(--sapphire)', color: '#FFFFFF', fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.48rem' }}>{car.badge}</span>
                </div>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span className="prop-city" style={{ marginBottom: '0.3rem', display: 'block' }}>{car.make}</span>
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.16, color: 'var(--ink)', marginBottom: '0.45rem' }}>{car.model}</h3>
                  <p className="body-sm" style={{ marginBottom: '0.85rem', color: 'var(--ink-soft)' }}>{car.spec}</p>
                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                    {car.chips.map(chip => <span key={chip} style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--border)', color: 'var(--ink-soft)', padding: '0.16rem 0.4rem' }}>{chip}</span>)}
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.85rem', marginTop: 'auto' }}>
                    {car.priceFrom === 'POA' ? (
                      <p style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--sapphire)', marginBottom: '0.8rem' }}>Price on Application</p>
                    ) : (
                      <p style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--sapphire)', marginBottom: '0.8rem' }}>{car.priceFrom}<span style={{ fontFamily: 'var(--body)', fontSize: '0.78rem', color: 'var(--ink-soft)', marginLeft: '0.3rem' }}>/day</span></p>
                    )}
                    <Link href="#booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 0.75rem', fontSize: '0.58rem' }}>{car.cta}</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()} style={{ position: 'relative', height: 720, overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85" alt="Suited chauffeur" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <span className="eyebrow">Our Drivers</span>
            <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Suited. Silent.<br /><em>Briefed.</em></h2>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>Every OPV chauffeur is SIA-licensed, NDA-signed and route-surveyed before your journey begins. Flight arrivals monitored in real time — the car is there when you land, not when you call.</p>
            {['SIA licensed and fully insured', 'NDA signed for every engagement', 'Advance route survey and threat assessment', 'Real-time flight tracking — no delays on your side', 'Medical first-response trained', 'Available 24 hours, 365 days'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                <span style={{ color: 'var(--sapphire)', fontWeight: 500 }}>✓</span><p className="body-sm" style={{ color: 'var(--ink-mid)' }}>{item}</p>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="#booking" className="btn-primary">Book a chauffeur</a>
              <Link href="/contact" className="btn-ghost">Corporate accounts</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#EAF4FB', padding: '5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <span className="eyebrow">Airport Coverage</span>
          <h2 className="display-md" style={{ marginBottom: '2rem' }}>From terminal.<br /><em>Anywhere.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(150px, 1fr))', gap: 1, background: 'var(--border)', overflowX: 'auto' }}>
            {airports.map(([code, name]) => (
              <div key={code} style={{ background: '#EAF4FB', padding: '1.5rem', minWidth: 150 }}>
                <p style={{ fontFamily: 'var(--display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--sapphire)', lineHeight: 1 }}>{code}</p>
                <p className="label-sm" style={{ marginTop: '0.5rem' }}>{name}</p>
                <p className="label-sm" style={{ marginTop: '0.5rem', color: '#15803d' }}>Covered</p>
              </div>
            ))}
          </div>
          <p className="label-sm" style={{ marginTop: '1.5rem' }}>Meet &amp; greet · Name board · Flight tracking · 60-min complimentary wait · No delay surcharges</p>
        </div>
      </section>

      <section style={{ background: '#FFFFFF', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Secure Transport</span>
            <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>B6 rated.<br /><em>Driver trained.</em></h2>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>For principals requiring threat-appropriate transport. Every armoured vehicle is maintained to manufacturer specification and driven exclusively by operatives holding advanced driving and close-protection certifications. 90-minute deployment across Manchester and London.</p>
            {['B6 ballistic rating as standard', 'Run-flat tyres and secure communications', 'Evasive and pursuit-trained operators', 'Pre-route intelligence survey', 'Convoy support available', 'Medical first-response on board'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                <span style={{ color: 'var(--sapphire)', fontWeight: 500 }}>✓</span><p className="body-sm" style={{ color: 'var(--ink-mid)' }}>{item}</p>
              </div>
            ))}
            <a href="#booking" className="btn-primary" style={{ marginTop: '1.5rem' }}>Request armoured transport</a>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ position: 'relative', height: 680, overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=85" alt="Secure luxury transport" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      <section id="booking" style={{ background: '#EAF4FB', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Make a booking</span>
            <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Tell us the<br /><em>journey.</em></h2>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>Send the route, timing and vehicle preference. Dispatch will confirm the right car, driver and arrival plan.</p>
            {['Manchester, Leeds and London covered now', 'Chauffeur, self-drive and armoured options', 'Single concierge contact from request to return'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--sapphire)', fontWeight: 500 }}>✓</span><p className="body-sm" style={{ color: 'var(--ink-mid)' }}>{item}</p>
              </div>
            ))}
          </motion.div>
          <motion.form {...fadeUp(0.1)} onSubmit={submitJourney} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} autoComplete="off">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <Field name="name" label="Full name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <Field name="phone" label="Phone" type="tel" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <Field name="pickup" label="Pickup location" required />
              <Field name="destination" label="Destination" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <Field name="date" label="Date" type="date" required />
              <Select name="duration" label="Duration" options={['Single transfer', 'Half day', 'Full day', 'Multi-day']} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <Select name="vehicle" label="Vehicle preference" options={['No preference', 'Saloon', 'SUV', 'Sports & GT', 'Armoured']} />
              <Select name="chauffeur" label="Chauffeur required" options={['Yes', 'Self-drive', 'Either']} />
            </div>
            <div>
              <label className="opv-label" htmlFor="notes">Special notes</label>
              <textarea id="notes" name="notes" rows={5} className="opv-input" placeholder="Flight number, waiting instructions, security notes..." style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-primary" disabled={submitting} style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}>{submitting ? 'Sending...' : sent ? 'Journey brief sent' : 'Send journey brief →'}</button>
          </motion.form>
        </div>
      </section>
    </>
  )
}

function Field({ name, label, type = 'text', required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="opv-label" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required={required} className="opv-input" />
    </div>
  )
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="opv-label" htmlFor={name}>{label}</label>
      <select id={name} name={name} className="opv-input" style={{ cursor: 'pointer' }}>
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
    </div>
  )
}
