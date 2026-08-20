'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/stays',      label: 'Stays' },
  { href: '/drive',      label: 'Drive' },
  { href: '/eat',        label: 'Eat' },
  { href: '/fly',        label: 'Fly' },
  { href: '/yacht',      label: 'Yacht' },
  { href: '/security',   label: 'Security' },
  { href: '/shop',       label: 'Shop' },
  { href: '/affiliates', label: 'Affiliates' },
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
      <nav className="nav" style={{ boxShadow: scrolled ? '0 2px 24px rgba(27,108,168,0.06)' : 'none' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1360, margin: '0 auto', padding: '0 2.5rem' }}>
          {/* Logo */}
          <Link href="/" className="footer-logo" style={{ fontSize: '1.4rem', letterSpacing: '0.2em' }}>
            OPV
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden lg:flex">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="footer-link"
                  style={{ color: pathname === l.href ? 'var(--sapphire)' : undefined, fontWeight: pathname === l.href ? 500 : undefined }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/contact" className="btn-primary hidden lg:inline-flex" style={{ padding: '0.65rem 1.4rem' }}>
              Enquire
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
              Enquire
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
