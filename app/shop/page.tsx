'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Fashion & Apparel',
    description: 'Private wardrobe sourcing, commissions and event dressing handled through ateliers, makers and trusted houses.',
    items: ['Savile Row bespoke commissions', 'Hermes allocation pieces', 'Private label archive finds', 'Capsule wardrobe curation', 'Event dressing - single occasion'],
  },
  {
    title: 'Watches & Jewellery',
    description: 'Allocation pieces, independent commissions and authenticated acquisitions sourced through discreet channels.',
    items: ['Patek Philippe, AP, Richard Mille', 'Independent watchmaker commissions', 'Rare coloured gemstone sourcing', 'Auction house acquisitions', 'Vintage and pre-owned - authenticated'],
  },
  {
    title: 'Art & Collectibles',
    description: 'Gallery access, private sales and authenticated collecting support for pieces that require provenance.',
    items: ['Gallery and studio acquisitions', 'Limited edition prints and sculpture', 'Sports memorabilia - authenticated', 'Fine wine and rare spirits cellaring', 'First edition books and manuscripts'],
  },
  {
    title: 'Home & Interiors',
    description: 'Procurement and commissioning for residences, hospitality suites and private-office environments.',
    items: ['Interior design procurement', 'Bespoke furniture commissioning', 'Rare fabric and material sourcing', 'Art installation coordination', 'Lighting and object sourcing - architectural'],
  },
]

const stylistBenefits = [
  'Wardrobe audit and capsule curation',
  'Tailoring appointments and alterations arranged',
  'Delivered to your home or hotel, always presented',
  'Brand-agnostic - no commission arrangements',
  'Available for one-off events or ongoing retainer',
]

const brandStripOne = ['Savile Row', 'Hermes', 'Patek Philippe', 'Richard Mille', 'Audemars Piguet', 'Chanel', 'Louis Vuitton', 'Dior', 'Valentino', 'Bottega Veneta', 'Loro Piana', 'Brunello Cucinelli']
const brandStripTwo = ['Bond Street', 'Via Montenapoleone', 'Rue Saint-Honore', 'Ginza Tokyo', 'Private ateliers', 'Auction houses', "Christie's", "Sotheby's", 'Phillips', 'Bonhams', 'Independent makers']

const giftingBenefits = [
  ['Single gifts', 'A watch, a bottle, a bespoke piece - sourced and presented for a specific recipient and occasion.'],
  ['Portfolio programmes', 'Quarterly or annual gifting across a full client list. Consistent standard, varied selection, one brief.'],
  ['Event gifting', 'Guest gifts for corporate events, brand launches or private celebrations. Delivered on-site or to addresses.'],
  ['Rewards and recognition', 'Internal recognition gifts for senior hires, deal completions and milestone moments.'],
]

const process = [
  ['Tell us what you need', 'A sentence is enough. The item, the occasion, the deadline and the budget range. We confirm receipt within the hour.'],
  ['We source and shortlist', 'Our team contacts houses, dealers and makers directly. You receive a curated selection - with provenance, pricing and our recommendation - within 24 hours.'],
  ['We deliver it', 'You confirm. We handle purchase, authentication, packaging and delivery. One invoice. No surprises.'],
]

const testimonials = [
  ['I described a watch I had seen once, three years ago, with no reference number. They found it, authenticated it and had it on my wrist in six days.', 'D. Blackwell', 'London'],
  ['The gifting programme they ran for our top 40 clients was flawless. Every piece was different, every one was right. Our clients noticed the level immediately.', 'K. Okafor', 'Manchester'],
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function ShopPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top">
        <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=90" alt="Editorial luxury personal shopping" fill priority style={{ objectFit: 'cover', objectPosition: 'top' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <motion.div {...fadeUp()} className="page-hero-copy page-hero-copy-raised">
            <span className="eyebrow page-hero-kicker">Shop</span>
            <h1 className="page-hero-title">
              Found. Sourced.<br /><em style={{ fontStyle: 'italic', color: '#D4EAF6' }}>Delivered.</em>
            </h1>
            <p className="page-hero-body">We find what is not listed. We source what is not available. From a Patek Philippe on allocation to a Savile Row commission to a single rare bottle - described once, delivered discreetly.</p>
            <div className="page-hero-actions">
              <Link href="#brief" className="btn-primary">Start a sourcing brief</Link>
              <Link href="#stylist" className="btn-ghost-light">Book a stylist session</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section shop-source-section">
        <div className="container">
          <motion.div {...fadeUp()} className="shop-section-heading">
            <span className="eyebrow">What we source</span>
            <h2 className="display-md">Anything. <em>From anywhere.</em></h2>
          </motion.div>
        </div>
        <div className="shop-category-grid">
          {categories.map((category, index) => (
            <motion.article key={category.title} {...fadeUp(index * 0.05)} className="shop-category-tile">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul>
              <Link href="#brief">Request sourcing</Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="stylist" className="section shop-stylist-section">
        <div className="container shop-stylist">
          <motion.div {...fadeUp()} className="shop-stylist-image">
            <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=90" alt="Private stylist suite" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="shop-stylist-copy">
            <span className="eyebrow">Your Stylist</span>
            <h2 className="display-md">Your brief. Your wardrobe. <em>Your standard.</em></h2>
            <p className="body-md">A dedicated stylist who understands what you need before you have named it. Whether you are rebuilding a wardrobe, preparing for a run of client events or sourcing a single piece for a specific occasion - they work to your timeline, your aesthetic and your budget. The first session is a conversation. Everything after that is seamless.</p>
            <div className="shop-mini-stats">
              {[
                ['Virtual', 'or in-person'],
                ['Same-day', 'London & Manchester'],
                ['NDA', 'before first session'],
              ].map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <div className="shop-benefit-list">
              {stylistBenefits.map(benefit => <div key={benefit}><CheckIcon /><p>{benefit}</p></div>)}
            </div>
            <div className="shop-hero-actions">
              <Link href="#brief" className="btn-primary">Book a stylist session</Link>
              <Link href="#brief" className="btn-ghost">Virtual consultation</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section shop-relationships">
        <div className="container">
          <motion.div {...fadeUp()} className="shop-section-heading">
            <span className="eyebrow">Where we go</span>
            <h2 className="display-md">Relationships. <em>Not affiliations.</em></h2>
            <p className="body-md">We have relationships with every major house and hundreds of independent makers. No commission arrangements influence what we source for you - we go where the right piece is.</p>
          </motion.div>
        </div>
        <BrandStrip items={brandStripOne} />
        <BrandStrip items={brandStripTwo} reverse />
        <p className="shop-commission-note">We never accept referral fees, affiliate commissions or preferential treatment from any brand. What we source is determined solely by your brief.</p>
      </section>

      <section className="section shop-gifting-section">
        <div className="container">
          <div className="shop-gifting-box">
            <motion.div {...fadeUp()}>
              <span className="eyebrow">Corporate Gifting</span>
              <h2 className="display-md">Gifts that land <em>differently.</em></h2>
              <p className="body-md">From a single piece for a principal guest to a curated programme for an entire client portfolio. Every gift sourced, wrapped and presented to the same standard - invoiced to the company, never visible to the recipient.</p>
              <div className="shop-mini-stats">
                <div><strong>Same-day</strong><span>London & Manchester</span></div>
                <div><strong>Global</strong><span>fully tracked</span></div>
                <div><strong>One</strong><span>invoice all recipients</span></div>
              </div>
              <Link href="#brief" className="btn-primary">Plan a gifting programme</Link>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="shop-gifting-list">
              {giftingBenefits.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section shop-process-section">
        <div className="container">
          <motion.div {...fadeUp()} className="shop-section-heading">
            <span className="eyebrow">The process</span>
            <h2 className="display-md">One brief. <em>Everything handled.</em></h2>
          </motion.div>
          <div className="shop-process-grid">
            {process.map(([title, copy]) => <article key={title}><span /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <Link href="#brief" className="btn-primary">Start your first brief</Link>
        </div>
      </section>

      <section className="section shop-testimonials-section">
        <div className="container">
          <motion.div {...fadeUp()} className="shop-section-heading">
            <span className="eyebrow">What they said</span>
            <h2 className="display-md">Sourced. <em>Exceeded.</em></h2>
          </motion.div>
          <div className="shop-testimonial-grid">
            {testimonials.map(([quote, name, city]) => <article key={name}><span>"</span><p>{quote}</p><strong>{name}</strong><small>{city}</small></article>)}
          </div>
        </div>
      </section>

      <section id="brief" className="section shop-brief-section">
        <div className="container shop-brief">
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Start a brief</span>
            <h2 className="display-md">Tell us what <em>you need.</em></h2>
            <p className="body-md">A description, a deadline and a budget range is enough to begin. We respond with a sourcing plan within a few hours - no commitment required at this stage.</p>
            <div className="shop-benefit-list compact">
              {['No commitment at brief stage', 'Response within 2 hours', 'NDA available before first call'].map(benefit => <div key={benefit}><CheckIcon /><p>{benefit}</p></div>)}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <ShopBriefForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}

function BrandStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items]
  return (
    <div className="shop-brand-strip">
      <div className={reverse ? 'reverse' : ''}>
        {repeated.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div>
    </div>
  )
}

function ShopBriefForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    const data = new FormData(event.currentTarget)
    const payload = Object.fromEntries(data.entries())
    const message = [
      String(payload.brief || ''),
      payload.category ? `Category: ${payload.category}` : '',
      payload.budget ? `Budget: ${payload.budget}` : '',
      payload.deadline ? `Deadline: ${payload.deadline}` : '',
      payload.nda ? `NDA: ${payload.nda}` : '',
      payload.notes ? `Notes: ${payload.notes}` : '',
    ].filter(Boolean).join('\n\n')

    await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'shop', service: 'shop', name: payload.name, email: payload.email, phone: payload.phone, message, payload }),
    })
    setStatus('success')
    event.currentTarget.reset()
  }

  return (
    <form className="shop-form" onSubmit={submit}>
      <Field name="name" label="Full name" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="phone" label="Phone" type="tel" />
      <div>
        <label className="opv-label" htmlFor="brief">What are you looking for?</label>
        <textarea id="brief" name="brief" className="opv-input" required rows={5} placeholder="Describe the item, the occasion, or the brief - as much or as little as you have. We'll ask if we need more." />
      </div>
      <Select name="category" label="Category" options={['Fashion & Apparel', 'Watches & Jewellery', 'Art & Collectibles', 'Home & Interiors', 'Corporate Gifting', 'Something else']} />
      <Select name="budget" label="Budget range" options={['Under GBP 500', 'GBP 500-2,000', 'GBP 2,000-10,000', 'GBP 10,000-50,000', 'GBP 50,000+', 'No limit']} />
      <Field name="deadline" label="Deadline" type="date" />
      <Select name="nda" label="NDA required before contact?" options={['Yes please', 'Not necessary']} />
      <div>
        <label className="opv-label" htmlFor="notes">Additional notes</label>
        <textarea id="notes" name="notes" className="opv-input" rows={4} placeholder="Preferred brands, delivery address, gift wrapping, any specific requirements..." />
      </div>
      <button className="btn-primary" disabled={status === 'loading' || status === 'success'}>
        {status === 'success' ? "Brief received. We'll be in touch within 2 hours." : status === 'loading' ? 'Sending...' : 'Send sourcing brief'}
      </button>
    </form>
  )
}

function Field({ name, label, type = 'text', required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <div><label className="opv-label" htmlFor={name}>{label}</label><input id={name} name={name} type={type} required={required} className="opv-input" /></div>
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return <div><label className="opv-label" htmlFor={name}>{label}</label><select id={name} name={name} className="opv-input">{options.map(option => <option key={option}>{option}</option>)}</select></div>
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
