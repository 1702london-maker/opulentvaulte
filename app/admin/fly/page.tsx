'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ImageManager from '@/components/admin/ImageManager'

type Aircraft = {
  id: string; name: string; type: string; seats: number; range_nm: number
  description: string; images: string[]; chips: string[]; available: boolean; price_from: number; created_at: string
}

const BLANK = { name: '', type: 'jet', seats: 8, range_nm: 0, description: '', images: [] as string[], chips: [] as string[], available: true, price_from: 0 }

const inputStyle: React.CSSProperties = { width: '100%', padding: '0.7rem 0.9rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontFamily: 'var(--body)', outline: 'none' }
const labelStyle: React.CSSProperties = { display: 'block', fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }
const D = { borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }

export default function FlyPage() {
  const [items, setItems] = useState<Aircraft[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ ...BLANK })
  const [editing, setEditing] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

  const load = () => { fetch('/api/admin/aircraft').then(r => r.json()).then(d => { setItems(d.data ?? []); setLoading(false) }) }
  useEffect(() => { load() }, [])

  const F = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(f => ({ ...f, [k]: e.target.value }))

  const save = async () => {
    setSaving(true)
    await fetch(editing ? `/api/admin/aircraft/${editing}` : '/api/admin/aircraft', { method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setSaving(false); setShowForm(false); setEditing(null); setForm({ ...BLANK }); load()
  }

  const del = async (id: string) => { if (!confirm('Delete?')) return; await fetch(`/api/admin/aircraft/${id}`, { method: 'DELETE' }); load() }

  const edit = (v: Aircraft) => {
    setForm({ name: v.name, type: v.type, seats: v.seats, range_nm: v.range_nm, description: v.description, images: v.images ?? [], chips: v.chips ?? [], available: v.available, price_from: v.price_from })
    setEditing(v.id); setShowForm(true)
  }

  return (
    <div style={{ padding: '2.5rem 3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Aviation</div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>Fly</h1>
        </div>
        <button onClick={() => { setForm({ ...BLANK }); setEditing(null); setShowForm(true) }} style={{ padding: '0.65rem 1.5rem', background: 'var(--sapphire)', color: 'var(--white)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>+ Add Aircraft</button>
      </div>

      {showForm && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>{editing ? 'Edit Aircraft' : 'New Aircraft'}</h2>
          <div style={{ ...D, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '1.2rem' }}>
            <div><label style={labelStyle}>Aircraft Name</label><input style={inputStyle} value={form.name} onChange={F('name')} placeholder="Gulfstream G700" /></div>
            <div>
              <label style={labelStyle}>Type</label>
              <select style={inputStyle} value={form.type} onChange={F('type')}>
                {['jet', 'turboprop', 'helicopter', 'seaplane'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div><label style={labelStyle}>Seats</label><input style={inputStyle} type="number" value={form.seats} onChange={F('seats')} min={1} /></div>
            <div><label style={labelStyle}>Range (nm)</label><input style={inputStyle} type="number" value={form.range_nm} onChange={F('range_nm')} min={0} /></div>
            <div><label style={labelStyle}>Price From (£/hr)</label><input style={inputStyle} type="number" value={form.price_from} onChange={F('price_from')} min={0} /></div>
          </div>
          <div style={{ ...D }}>
            <label style={labelStyle}>Description</label>
            <textarea style={{ ...inputStyle, height: 110, resize: 'vertical' }} value={form.description} onChange={F('description')} placeholder="The most advanced ultra-long-range business jet..." />
          </div>
          <div style={{ ...D }}>
            <label style={labelStyle}>Chips / Highlights (comma separated)</label>
            <input style={inputStyle} value={form.chips.join(', ')} onChange={e => setForm(f => ({ ...f, chips: e.target.value.split(',').map(c => c.trim()).filter(Boolean) }))} placeholder="Wi-Fi, Flat-bed seats, Global range, Catering" />
          </div>
          <div style={{ ...D }}>
            <ImageManager images={form.images} onChange={images => setForm(f => ({ ...f, images }))} />
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.available} onChange={e => setForm(f => ({ ...f, available: e.target.checked }))} /> Available to charter
            </label>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={save} disabled={saving} style={{ padding: '0.7rem 2rem', background: 'var(--sapphire)', color: 'var(--white)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>{saving ? 'Saving...' : editing ? 'Update' : 'Publish'}</button>
            <button onClick={() => { setShowForm(false); setEditing(null) }} style={{ padding: '0.7rem 1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}

      {loading && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>Loading...</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
        {items.map(v => (
          <div key={v.id} style={{ background: '#0D1520', display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.2rem 1.5rem' }}>
            {v.images?.[0] && <div style={{ position: 'relative', width: 110, height: 65, flexShrink: 0 }}><Image src={v.images[0]} alt={v.name} fill style={{ objectFit: 'cover' }} /></div>}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: '0.2rem' }}>{v.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{v.type} · {v.seats} seats · {v.range_nm ? `${v.range_nm.toLocaleString()}nm range` : ''} · £{v.price_from?.toLocaleString()}/hr</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <button onClick={() => edit(v)} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>Edit</button>
              <button onClick={() => del(v.id)} style={{ padding: '0.3rem 0.8rem', background: 'transparent', border: '1px solid rgba(255,0,0,0.2)', color: '#f87171', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>Delete</button>
            </div>
          </div>
        ))}
        {!loading && items.length === 0 && <div style={{ background: '#0D1520', padding: '3rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', textAlign: 'center' }}>No aircraft yet.</div>}
      </div>
    </div>
  )
}
