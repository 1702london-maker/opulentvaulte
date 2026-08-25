'use client'

import { useEffect, useState } from 'react'

type Membership = {
  id: string
  name: string
  email: string
  phone: string | null
  tier: string
  status: 'pending' | 'active' | 'declined'
  created_at: string
}

const STATUS_COLORS: Record<string, string> = {
  pending: '#F59E0B',
  active: '#10B981',
  declined: '#6B7280',
}

export default function MembershipsPage() {
  const [items, setItems] = useState<Membership[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/memberships')
      .then(r => r.json())
      .then(d => { setItems(d.data ?? []); setLoading(false) })
  }, [])

  const updateStatus = async (id: string, status: string) => {
    await fetch('/api/admin/memberships', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setItems(prev => prev.map(m => m.id === id ? { ...m, status: status as any } : m))
  }

  return (
    <div style={{ padding: '2.5rem 3rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>
          Members
        </div>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
          Memberships
        </h1>
      </div>

      {loading && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>Loading...</div>}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Name', 'Email', 'Phone', 'Tier', 'Date', 'Status', ''].map(h => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map(m => (
              <tr key={m.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{m.name}</td>
                <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.5)' }}>{m.email}</td>
                <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.4)' }}>{m.phone ?? '—'}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sapphire-lt)' }}>
                    {m.tier}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--mono)', fontSize: '0.72rem' }}>
                  {new Date(m.created_at).toLocaleDateString('en-GB')}
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{
                    display: 'inline-block', padding: '0.2rem 0.6rem', fontSize: '0.65rem',
                    fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: STATUS_COLORS[m.status] ?? '#888',
                    border: `1px solid ${STATUS_COLORS[m.status] ?? '#888'}22`,
                    background: `${STATUS_COLORS[m.status] ?? '#888'}11`,
                  }}>
                    {m.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <select
                    value={m.status}
                    onChange={e => updateStatus(m.id, e.target.value)}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', padding: '0.3rem 0.5rem',
                      fontFamily: 'var(--mono)', cursor: 'pointer',
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="declined">Declined</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && items.length === 0 && (
          <div style={{ padding: '3rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', textAlign: 'center' }}>
            No membership applications yet.
          </div>
        )}
      </div>
    </div>
  )
}
