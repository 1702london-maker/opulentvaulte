'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/',           label: 'Home' },
  { href: '/stays',      label: 'Stays' },
  { href: '/drive',      label: 'Drive' },
  { href: '/eat',        label: 'Eat' },
  { href: '/shop',       label: 'Shop' },
  { href: '/security',   label: 'Security' },
  { href: '/fly',        label: 'Fly' },
  { href: '/yacht',      label: 'Yacht' },
  { href: '/affiliates', label: 'Affiliates' },
  { href: '/contact',    label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className="nav nav-luxury" style={{ boxShadow: scrolled ? '0 2px 24px rgba(27,108,168,0.06)' : 'none' }}>
        <div className="nav-luxury-inner">
          {/* Logo */}
          <Link href="/" className="nav-luxury-logo" aria-label="OPV Luxury home">
            <Image src="/opv-logo.png" alt="OPV Luxury" width={220} height={72} priority />
          </Link>

          {/* Desktop links */}
          <ul className="nav-luxury-links hidden lg:flex">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-luxury-link${pathname === l.href ? ' active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile burger */}
          <div className="nav-luxury-actions">
            <span className="nav-luxury-meta hidden xl:inline-flex">£ GBP</span>
            <span className="nav-luxury-meta hidden xl:inline-flex">EN</span>
            <Link href="/contact" className="nav-luxury-signin hidden lg:inline-flex">
              Sign in
            </Link>
            <Link href="/contact" aria-label="Account" className="nav-luxury-user hidden lg:inline-flex">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden"
              style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
              aria-label="Menu"
            >
              <span style={{ width: 22, height: 1.5, background: 'var(--ink)', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ width: 22, height: 1.5, background: 'var(--ink)', display: 'block', transition: 'opacity 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ width: 22, height: 1.5, background: 'var(--ink)', display: 'block', transition: 'transform 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0,
              background: 'var(--white)', borderBottom: '1px solid var(--border)',
              zIndex: 850, padding: '2rem 2.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.4rem',
            }}
          >
            {links.map(l => (
              <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: '0.8rem' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              Sign in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
