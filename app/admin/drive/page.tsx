'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ImageManager from '@/components/admin/ImageManager'
import ColourManager from '@/components/admin/ColourManager'

type Vehicle = {
  id: string
  name: string
  make: string
  model: string
  type: string
  seats: number
  doors: number
  colours: string[]
  description: string
  images: string[]
  chips: string[]
  available: boolean
  price_from: number
  created_at: string
}

const BLANK = {
  name: '', make: '', model: '', type: 'sedan', seats: 4, doors: 4,
  colours: [] as string[], description: '', images: [] as string[],
  chips: [] as string[], available: true, price_from: 0,
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.7rem 0.9rem', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)',
  fontSize: '0.85rem', fontFamily: 'var(--body)', outline: 'none',
}
const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--mono)', fontSize: '0.58rem',
  letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
  marginBottom: '0.4rem',
}
const divider = { borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }

export default function DrivePage() {
  const [items, setItems] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ ...BLANK })
  const [editing, setEditing] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

  const load = () => {
    fetch('/api/admin/vehicles').then(r => r.json()).then(d => { setItems(d.data ?? []); setLoading(false) })
  }
  useEffect(load, [])

  const F = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
  }

  const save = async () => {
    setSaving(true)
    const url = editing ? `/api/admin/vehicles/${editing}` : '/api/admin/vehicles'
    await fetch(url, { method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setSaving(false); setShowForm(false); setEditing(null); setForm({ ...BLANK }); load()
  }

  const del = async (id: string) => {
    if (!confirm('Delete this vehicle?')) return
    await fetch(`/api/admin/vehicles/${id}`, { method: 'DELETE' }); load()
  }

  const edit = (v: Vehicle) => {
    setForm({ name: v.name, make: v.make, model: v.model, type: v.type, seats: v.seats, doors: v.doors, colours: v.colours ?? [], description: v.description, images: v.images ?? [], chips: v.chips ?? [], available: v.available, price_from: v.price_from })
    setEditing(v.id); setShowForm(true)
  }

  return (
    <div style={{ padding: '2.5rem 3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Fleet</div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>Drive</h1>
        </div>
        <button onClick={() => { setForm({ ...BLANK }); setEditing(null); setShowForm(true) }} style={{ padding: '0.65rem 1.5rem', background: 'var(--sapphire)', color: 'var(--white)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
          + Add Vehicle
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>{editing ? 'Edit Vehicle' : 'New Vehicle'}</h2>

          <div style={{ ...divider }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div><label style={labelStyle}>Display Name</label><input style={inputStyle} value={form.name} onChange={F('name')} placeholder="Rolls-Royce Ghost" /></div>
              <div><label style={labelStyle}>Make</label><input style={inputStyle} value={form.make} onChange={F('make')} placeholder="Rolls-Royce" /></div>
              <div><label style={labelStyle}>Model</label><input style={inputStyle} value={form.model} onChange={F('model')} placeholder="Ghost" /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1.2rem' }}>
              <div>
                <label style={labelStyle}>Type</label>
                <select style={inputStyle} value={form.type} onChange={F('type')}>
                  {['sedan', 'suv', 'supercar', 'van', 'convertible', 'limousine', 'pickup'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label style={labelStyle}>Seats</label><input style={inputStyle} type="number" value={form.seats} onChange={F('seats')} min={1} max={20} /></div>
              <div><label style={labelStyle}>Doors</label><input style={inputStyle} type="number" value={form.doors} onChange={F('doors')} min={2} max={6} /></div>
              <div><label style={labelStyle}>Price From (£/day)</label><input style={inputStyle} type="number" value={form.price_from} onChange={F('price_from')} min={0} /></div>
            </div>
          </div>

          <div style={{ ...divider }}>
            <label style={labelStyle}>Description</label>
            <textarea style={{ ...inputStyle, height: 110, resize: 'vertical' }} value={form.description} onChange={F('description')} placeholder="The Ghost redefines effortless luxury..." />
          </div>

          <div style={{ ...divider }}>
            <label style={labelStyle}>Chips / Highlights (comma separated)</label>
            <input style={inputStyle} value={form.chips.join(', ')} onChange={e => setForm(f => ({ ...f, chips: e.target.value.split(',').map(c => c.trim()).filter(Boolean) }))} placeholder="Chauffeur available, Bespoke interior, Star-light ceiling" />
          </div>

          <div style={{ ...divider }}>
            <ColourManager colours={form.colours} onChange={colours => setForm(f => ({ ...f, colours }))} />
          </div>

          <div style={{ ...divider }}>
            <ImageManager images={form.images} onChange={images => setForm(f => ({ ...f, images }))} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.available} onChange={F('available')} /> Available to book
            </label>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={save} disabled={saving} style={{ padding: '0.7rem 2rem', background: 'var(--sapphire)', color: 'var(--white)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Saving...' : editing ? 'Update' : 'Publish'}
            </button>
            <button onClick={() => { setShowForm(false); setEditing(null) }} style={{ padding: '0.7rem 1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {loading && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>Loading...</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
        {items.map(v => (
          <div key={v.id} style={{ background: '#0D1520', display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.2rem 1.5rem' }}>
            {v.images?.[0] && (
              <div style={{ position: 'relative', width: 110, height: 70, flexShrink: 0 }}>
                <Image src={v.images[0]} alt={v.name} fill style={{ objectFit: 'cover' }} />
              </div>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: '0.2rem' }}>{v.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{v.type} · {v.seats} seats · {v.colours?.length ?? 0} colours · £{v.price_from?.toLocaleString()}/day</div>
              {v.colours?.length > 0 && (
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                  {v.colours.map(c => <span key={c} style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.5rem' }}>{c}</span>)}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', color: v.available ? '#10B981' : '#6B7280', padding: '0.2rem 0.5rem', border: `1px solid ${v.available ? '#10B98122' : '#6B728022'}` }}>{v.available ? 'Available' : 'Unavailable'}</span>
              <button onClick={() => edit(v)} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>Edit</button>
              <button onClick={() => del(v.id)} style={{ padding: '0.3rem 0.8rem', background: 'transparent', border: '1px solid rgba(255,0,0,0.2)', color: '#f87171', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>Delete</button>
            </div>
          </div>
        ))}
        {!loading && items.length === 0 && <div style={{ background: '#0D1520', padding: '3rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', textAlign: 'center' }}>No vehicles yet.</div>}
      </div>
    </div>
  )
}
