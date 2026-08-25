import { supabaseAdmin } from '@/lib/supabase-admin'
import Link from 'next/link'

async function getCounts() {
  const [enquiries, properties, memberships] = await Promise.all([
    supabaseAdmin.from('opv_enquiries').select('id, read', { count: 'exact' }),
    supabaseAdmin.from('opv_properties').select('id', { count: 'exact' }),
    supabaseAdmin.from('opv_memberships').select('id, status', { count: 'exact' }),
  ])
  const unread = (enquiries.data ?? []).filter((e: any) => !e.read).length
  const pendingMembers = (memberships.data ?? []).filter((m: any) => m.status === 'pending').length
  return {
    enquiries: enquiries.count ?? 0,
    unread,
    properties: properties.count ?? 0,
    memberships: memberships.count ?? 0,
    pendingMembers,
  }
}

const S: React.CSSProperties = {
  color: 'rgba(255,255,255,0.85)',
}

export default async function AdminDashboard() {
  const counts = await getCounts()

  const stats = [
    { label: 'Total Enquiries', value: counts.enquiries, sub: `${counts.unread} unread`, href: '/admin/enquiries', alert: counts.unread > 0 },
    { label: 'Properties', value: counts.properties, sub: 'Active listings', href: '/admin/properties', alert: false },
    { label: 'Memberships', value: counts.memberships, sub: `${counts.pendingMembers} pending`, href: '/admin/memberships', alert: counts.pendingMembers > 0 },
  ]

  return (
    <div style={{ padding: '2.5rem 3rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>
          Overview
        </div>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
          Dashboard
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '3rem' }}>
        {stats.map(s => (
          <Link key={s.label} href={s.href} style={{
            background: '#0D1520', padding: '2rem', display: 'block',
            textDecoration: 'none', transition: 'background 0.2s',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {s.label}
              </span>
              {s.alert && (
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', display: 'block', marginTop: 2 }} />
              )}
            </div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '3rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1, marginBottom: '0.5rem' }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>{s.sub}</div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <QuickLink href="/admin/enquiries" title="View Enquiries" desc="See all form submissions from the site" />
        <QuickLink href="/admin/properties" title="Add Property" desc="Upload images and publish a new listing" />
      </div>
    </div>
  )
}

function QuickLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} style={{
      display: 'block', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)',
      textDecoration: 'none', transition: 'border-color 0.2s',
    }}>
      <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>{title} →</div>
      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>{desc}</div>
    </Link>
  )
}
