'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  { href: '/admin',            label: 'Dashboard',   icon: '◈' },
  { href: '/admin/enquiries',  label: 'Enquiries',   icon: '✉' },
  { href: '/admin/memberships',label: 'Memberships', icon: '◎' },
  { divider: true, label: 'CONTENT' },
  { href: '/admin/properties', label: 'Stays',       icon: '⌂' },
  { href: '/admin/drive',      label: 'Drive',       icon: '◉' },
  { href: '/admin/eat',        label: 'Eat',         icon: '◆' },
  { href: '/admin/fly',        label: 'Fly',         icon: '△' },
  { href: '/admin/yacht',      label: 'Yacht',       icon: '◇' },
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
        width: 220, flexShrink: 0, background: '#0A1018',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        position: 'sticky', top: 0, height: '100vh', overflowY: 'auto',
      }}>
        <div style={{ padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.3rem' }}>
            Opulent Vault
          </div>
          <div style={{ fontFamily: 'var(--display)', color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontWeight: 400 }}>
            Admin
          </div>
        </div>

        <nav style={{ flex: 1, padding: '0.75rem 0' }}>
          {NAV.map((item, i) => {
            if ('divider' in item) {
              return (
                <div key={i} style={{ padding: '1rem 1.5rem 0.4rem', fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
                  {item.label}
                </div>
              )
            }
            const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href!))
            return (
              <Link key={item.href} href={item.href!} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.6rem 1.5rem', fontSize: '0.82rem',
                fontWeight: active ? 500 : 400,
                color: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.38)',
                background: active ? 'rgba(255,255,255,0.06)' : 'transparent',
                borderLeft: active ? '2px solid var(--sapphire)' : '2px solid transparent',
                transition: 'all 0.15s', textDecoration: 'none',
              }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.65, width: 14, textAlign: 'center' }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" target="_blank" style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem', textDecoration: 'none' }}>
            ↗ View site
          </Link>
          <button onClick={logout} style={{
            width: '100%', padding: '0.5rem', background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)',
            fontSize: '0.68rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em',
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
