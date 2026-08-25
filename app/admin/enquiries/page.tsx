'use client'

import { useEffect, useState } from 'react'

type Enquiry = {
  id: string
  name: string
  email: string
  phone: string | null
  service: string
  message: string
  page: string
  read: boolean
  created_at: string
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Enquiry | null>(null)
  const [filter, setFilter] = useState<'all' | 'unread'>('unread')

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then(r => r.json())
      .then(d => { setEnquiries(d.data ?? []); setLoading(false) })
  }, [])

  const markRead = async (id: string, read: boolean) => {
    await fetch('/api/admin/enquiries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, read }),
    })
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, read } : e))
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, read } : null)
  }

  const visible = filter === 'unread' ? enquiries.filter(e => !e.read) : enquiries

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* List */}
      <div style={{ width: 360, borderRight: '1px solid rgba(255,255,255,0.06)', overflowY: 'auto', flexShrink: 0 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, background: '#0D1520', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>Enquiries</h1>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {(['unread', 'all'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '0.3rem 0.8rem', fontSize: '0.72rem', fontFamily: 'var(--mono)',
                letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                background: filter === f ? 'var(--sapphire)' : 'rgba(255,255,255,0.05)',
                color: filter === f ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading && <div style={{ padding: '2rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>Loading...</div>}

        {visible.map(e => (
          <div key={e.id} onClick={() => { setSelected(e); if (!e.read) markRead(e.id, true) }} style={{
            padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer',
            background: selected?.id === e.id ? 'rgba(255,255,255,0.04)' : 'transparent',
            borderLeft: !e.read ? '2px solid var(--sapphire)' : '2px solid transparent',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: !e.read ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }}>
                {e.name}
              </span>
              <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--mono)' }}>
                {new Date(e.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{e.service} · {e.page}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.3rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {e.message}
            </div>
          </div>
        ))}

        {!loading && visible.length === 0 && (
          <div style={{ padding: '3rem 1.5rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.82rem', textAlign: 'center' }}>
            {filter === 'unread' ? 'All caught up.' : 'No enquiries yet.'}
          </div>
        )}
      </div>

      {/* Detail */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 2.5rem' }}>
        {!selected ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
            Select an enquiry to view
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)', marginBottom: '0.3rem' }}>
                  {selected.name}
                </h2>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
                  {new Date(selected.created_at).toLocaleString('en-GB')} · {selected.service}
                </div>
              </div>
              <button onClick={() => markRead(selected.id, !selected.read)} style={{
                padding: '0.4rem 1rem', fontSize: '0.68rem', fontFamily: 'var(--mono)',
                letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
              }}>
                Mark {selected.read ? 'unread' : 'read'}
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '2rem' }}>
              {[
                { label: 'Email', value: selected.email },
                { label: 'Phone', value: selected.phone ?? '—' },
                { label: 'Service', value: selected.service },
                { label: 'Page', value: selected.page },
              ].map(f => (
                <div key={f.label} style={{ background: '#0D1520', padding: '1.2rem 1.5rem' }}>
                  <div style={{ fontSize: '0.62rem', fontFamily: 'var(--mono)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.4rem' }}>
                    {f.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.62rem', fontFamily: 'var(--mono)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>
                Message
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {selected.message}
              </p>
            </div>

            <a
              href={`mailto:${selected.email}?subject=Re: Your OPV Enquiry`}
              style={{
                display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem',
                background: 'var(--sapphire)', color: 'var(--white)', fontSize: '0.78rem',
                fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Reply by Email →
            </a>
          </>
        )}
      </div>
    </div>
  )
}
