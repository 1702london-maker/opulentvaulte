'use client'

import Link from 'next/link'

const explore = [
  { href: '/stays',    label: 'Stays' },
  { href: '/drive',    label: 'Drive' },
  { href: '/eat',      label: 'Eat' },
  { href: '/fly',      label: 'Fly' },
  { href: '/yacht',    label: 'Yacht' },
  { href: '/security', label: 'Security' },
  { href: '/shop',     label: 'Shop' },
]

const company = [
  { href: '/affiliates', label: 'Affiliates' },
  { href: '/contact',    label: 'Contact' },
]

const legal = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms of Service' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '3rem', padding: '5rem 0 4rem' }}>

          {/* Brand */}
          <div>
            <div className="footer-logo" style={{ marginBottom: '1rem' }}>OPV</div>
            <p className="body-sm" style={{ maxWidth: 220 }}>
              Private concierge. Manchester, London, Leeds. One contact. One invoice.
            </p>
            <p className="label-sm" style={{ marginTop: '1.5rem', color: 'var(--sapphire)' }}>hello@opulentvault.co.uk</p>
          </div>

          {/* Explore */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '1.2rem' }}>Explore</span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {explore.map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '1.2rem' }}>Company</span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {company.map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '1.2rem' }}>Legal</span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {legal.map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '1.2rem' }}>Stay Informed</span>
            <p className="body-sm" style={{ marginBottom: '1.2rem' }}>Seasonal access. Private offers. Nothing public.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="opv-input" style={{ fontSize: '0.85rem' }} />
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.7rem 1.4rem' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
          <p className="label-sm">© 2026 OPV Luxury · Budruum Ltd · Manchester</p>
          <p className="label-sm">71–75 Shelton Street, Covent Garden, London WC2H 9JQ</p>
        </div>
      </div>
    </footer>
  )
}
