'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const services = [
  { label: 'Stays',     href: '/stays',    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80' },
  { label: 'Drive',     href: '/drive',    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80' },
  { label: 'Eat',       href: '/eat',      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { label: 'Fly',       href: '/fly',      img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80' },
  { label: 'Yacht',     href: '/yacht',    img: 'https://images.unsplash.com/photo-1563941406054-949f567f84bd?w=600&q=80' },
  { label: 'Security',  href: '/security', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { label: 'Shop',      href: '/shop',     img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80' },
  { label: 'Always On', href: '/contact',  img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80' },
]

const testimonials = [
  { quote: 'Three days in Manchester. Car, table, suite. Everything arrived exactly as briefed. Not once did I need to chase.', name: 'J. Hargreaves', role: 'Private Client' },
  { quote: 'The flight was arranged in under four hours. Nothing was missed. That is what this service is.', name: 'M. Osei', role: 'Corporate Client' },
  { quote: 'Seven people, four days in London. Every detail was handled before I even thought of it.', name: 'S. Al-Rashidi', role: 'Private Client' },
]

const tickerItems = ['Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop']

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#FFFFFF', paddingTop: 72 }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', padding: '6rem 0' }}>
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.span className="eyebrow" variants={fadeUp}>Manchester &middot; London &middot; Leeds</motion.span>
              <motion.h1 className="display-xl" variants={fadeUp} style={{ marginBottom: '2rem' }}>
                Every detail.<br />One contact.<br /><em>Perfectly arranged.</em>
              </motion.h1>
              <motion.p className="body-lg" variants={fadeUp} style={{ marginBottom: '2.5rem', maxWidth: 440 }}>
                OPV is a private concierge service that arranges stays, cars, dining, aviation, yacht charter and close protection on a single invoice.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Tell us what you need</Link>
                <Link href="/stays" className="btn-ghost">Explore stays</Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85"
                alt="OPV private residence"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'rgba(255,255,255,0.96)', padding: '1.2rem 1.6rem', backdropFilter: 'blur(8px)' }}>
                <span className="eyebrow" style={{ marginBottom: '0.2rem' }}>24 / 7</span>
                <p className="body-sm">One number. Always answered.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-outer">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section className="section" style={{ background: '#EAF4FB' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            <span className="eyebrow">Eight worlds. One number.</span>
            <h2 className="display-lg">Everything you need,<br /><em>arranged for you.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#C8DFF0' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link href={s.href} className="service-tile" style={{ display: 'block', aspectRatio: '1/1' }}>
                  <Image src={s.img} alt={s.label} width={400} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  <div className="service-tile-overlay">
                    <span className="eyebrow" style={{ color: 'white', marginBottom: 0 }}>{s.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Residence */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden' }}
            >
              <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85" alt="The Crescent Riverside" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                <span className="prop-badge">Featured Residence</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1 }}>
              <span className="eyebrow">Manchester, UK</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>The Crescent Riverside<em>.</em></h2>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>Four bedrooms across 3,400 sq ft on the River Irwell. Private terrace, chef kitchen, dedicated concierge on arrival. Available from two nights.</p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['4 Bed', '3,400 sq ft', 'River Irwell', 'Private Terrace'].map(tag => (
                  <span key={tag} className="prop-badge">{tag}</span>
                ))}
              </div>
              <Link href="/stays" className="btn-ghost">Enquire about this residence</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section style={{ background: '#EAF4FB', padding: '8rem 2.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.p className="pull-quote" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}>
            "We arrange the evening.<br />You simply <em style={{ color: '#1B6CA8' }}>enjoy it.</em>"
          </motion.p>
        </div>
      </section>

      {/* Stat Strip */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid #C8DFF0', borderBottom: '1px solid #C8DFF0' }}>
        <div className="stat-strip">
          {[
            { num: '500+', label: 'Curated Properties' },
            { num: '34',   label: 'Countries' },
            { num: '200',  label: 'Point Verification' },
            { num: '24/7', label: 'Concierge Access' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <span className="label-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem', maxWidth: 600 }}>
            <span className="eyebrow">The process</span>
            <h2 className="display-lg">Simple for you.<br /><em>Invisible to everyone else.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { title: 'Tell us.', body: 'Share your brief. Dates, preferences, guests, constraints. One message or a call. We take it from there.' },
              { title: 'We build it.', body: 'Our team coordinates every supplier, every confirmation, every transfer. You see a single plan and a single invoice.' },
              { title: 'You enjoy it.', body: 'The car is there. The table is held. The suite is ready. Nothing falls between the cracks because nothing is left to chance.' },
            ].map((step, i) => (
              <motion.div key={step.title} className="process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <h3 className="display-sm" style={{ marginBottom: '1rem' }}>{step.title}</h3>
                <p className="body-md">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#EAF4FB' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <span className="eyebrow">Client notes</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ background: '#FFFFFF', border: '1px solid #C8DFF0', padding: '2.5rem' }}>
                <p className="display-sm" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid #C8DFF0', paddingTop: '1.2rem' }}>
                  <p className="label-sm" style={{ color: '#1A2733', marginBottom: '0.2rem' }}>{t.name}</p>
                  <p className="label-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access CTA */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="eyebrow">Curated access</span>
              <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Not a booking engine.<br /><em>A service.</em></h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>OPV operates on referral and direct enquiry. There is no public catalogue. Your named concierge knows your preferences and handles everything before you ask.</p>
              <Link href="/contact" className="btn-primary">Request access</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#C8DFF0' }}>
              {['Stays', 'Drive', 'Fly', 'Eat'].map(s => (
                <div key={s} style={{ background: '#EAF4FB', padding: '2.5rem', textAlign: 'center' }}>
                  <span className="eyebrow" style={{ marginBottom: 0 }}>{s}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-sm" style={{ background: '#EAF4FB', borderTop: '1px solid #C8DFF0' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: '0 2.5rem' }}>
          <span className="eyebrow">Stay informed</span>
          <h3 className="display-sm" style={{ marginBottom: '0.8rem' }}>Seasonal access. <em>Nothing public.</em></h3>
          <p className="body-sm" style={{ marginBottom: '2rem' }}>Off-market properties, empty legs and private dining slots. Only for those already here.</p>
          <form style={{ display: 'flex', border: '1px solid #C8DFF0' }} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="opv-input" style={{ flex: 1, padding: '0.9rem 1.2rem', border: 'none', borderRight: '1px solid #C8DFF0' }} />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Join the list</button>
          </form>
        </div>
      </section>
    </>
  )
}