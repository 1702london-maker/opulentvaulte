'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '◈' },
  { href: '/admin/enquiries', label: 'Enquiries', icon: '✉' },
  { href: '/admin/memberships', label: 'Memberships', icon: '◎' },
  { href: '/admin/properties', label: 'Properties', icon: '⌂' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const logout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--body)', background: '#0D1520' }}>
      {/* Sidebar */}
      <aside style={{
        width: 220, flexShrink: 0, background: '#0A1018', borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh',
      }}>
        <div style={{ padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.3rem' }}>
            Opulent Vault
          </div>
          <div style={{ fontFamily: 'var(--display)', color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 400 }}>
            Admin
          </div>
        </div>

        <nav style={{ flex: 1, padding: '1rem 0' }}>
          {NAV.map(({ href, label, icon }) => {
            const active = pathname === href || (href !== '/admin' && pathname.startsWith(href))
            return (
              <Link key={href} href={href} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.65rem 1.5rem', fontSize: '0.82rem', fontWeight: active ? 500 : 400,
                color: active ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                background: active ? 'rgba(255,255,255,0.06)' : 'transparent',
                borderLeft: active ? '2px solid var(--sapphire)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{icon}</span>
                {label}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>
            ← Back to site
          </Link>
          <button onClick={logout} style={{
            width: '100%', padding: '0.5rem', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)',
            fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: 'pointer',
          }}>
            Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, overflowY: 'auto', background: '#0D1520' }}>
        {children}
      </main>
    </div>
  )
}
