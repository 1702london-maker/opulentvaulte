'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryForm from '@/components/ui/EnquiryForm'

const categories = [
  { label: 'Fashion',  detail: 'RTW, couture and bespoke tailoring sourced from London, Milan and Paris ateliers.', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80' },
  { label: 'Watches',  detail: 'Patek Philippe, AP, F.P. Journe and independent horology. Secondary market access.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { label: 'Art',      detail: 'Gallery access, auction previews and private collection sourcing.', img: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=500&q=80' },
  { label: 'Home',     detail: 'Interior sourcing, antiques and bespoke furniture commissions.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function ShopPage() {
  return (
    <>
      <div className="breadcrumb">
        <Link href="/">OPV</Link><span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Shop</span>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--white)', padding: '7rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()}>
            <span className="eyebrow">Personal Shopping</span>
            <h1 className="display-xl" style={{ marginBottom: '1.5rem' }}>What you want.<br /><em>Already waiting.</em></h1>
            <p className="body-lg" style={{ marginBottom: '2rem', maxWidth: 420 }}>Personal shopping, sourcing and styling. Our team accesses ateliers, auction houses and private collections — across Manchester, London, Milan and Paris.</p>
            <Link href="/contact" className="btn-primary">Send your brief</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85" alt="Personal shopping" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ background: 'var(--ice)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Categories</span>
            <h2 className="display-md">Four <em>disciplines.</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {categories.map((cat, i) => (
              <motion.div key={cat.label} {...fadeUp(i * 0.08)}>
                <Link href="/contact" className="service-tile" style={{ display: 'block', aspectRatio: '3/4' }}>
                  <Image src={cat.img} alt={cat.label} width={400} height={533} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  <div className="service-tile-overlay" style={{ background: 'linear-gradient(to top, rgba(26,39,51,0.7) 0%, transparent 60%)' }}>
                    <span className="eyebrow" style={{ color: 'var(--white)', marginBottom: '0.3rem' }}>{cat.label}</span>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', lineHeight: 1.5 }}>{cat.detail}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate gifting */}
      <section className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          <div style={{ background: 'var(--ice)', padding: '4rem', border: '1px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <motion.div {...fadeUp()}>
                <span className="eyebrow">Corporate gifting</span>
                <h2 className="display-md" style={{ marginBottom: '1.5rem' }}>Gifts that<br /><em>mean something.</em></h2>
                <p className="body-lg">Bespoke gifting programmes for client entertainment, board-level occasions and incentive awards. Sourced, presented and delivered to brief.</p>
                <Link href="/contact" className="btn-ghost" style={{ marginTop: '2rem' }}>Request a gifting brief</Link>
              </motion.div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
                {[{ num: '£500', label: 'Min single gift' }, { num: '500+', label: 'Sourcing contacts' }, { num: '48h', label: 'UK delivery' }].map(s => (
                  <div key={s.label} style={{ background: 'var(--white)', padding: '2rem', textAlign: 'center' }}>
                    <div className="stat-num" style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{s.num}</div>
                    <span className="label-sm">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: 'var(--ice)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Sourcing enquiry</span>
            <h2 className="display-md">Tell us <em>what you need.</em></h2>
          </motion.div>
          <EnquiryForm page="shop" cta="Send your brief" />
        </div>
      </section>
    </>
  )
}
