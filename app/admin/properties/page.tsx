'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Property = {
  id: string
  name: string
  city: string
  area: string
  type: string
  designation: string
  beds: number
  guests: number
  price_from: number
  description: string
  images: string[]
  chips: string[]
  verified: boolean
  available: boolean
  created_at: string
}

const BLANK: Omit<Property, 'id' | 'created_at'> = {
  name: '', city: '', area: '', type: 'villa', designation: '',
  beds: 2, guests: 4, price_from: 0, description: '',
  images: [], chips: [], verified: false, available: true,
}

export default function PropertiesPage() {
  const [items, setItems] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState<typeof BLANK>({ ...BLANK })
  const [editing, setEditing] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const load = () => {
    fetch('/api/admin/properties')
      .then(r => r.json())
      .then(d => { setItems(d.data ?? []); setLoading(false) })
  }

  useEffect(load, [])

  const uploadImage = async (file: File) => {
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    setUploading(false)
    if (data.url) setForm(f => ({ ...f, images: [...f.images, data.url] }))
  }

  const removeImage = (url: string) => {
    setForm(f => ({ ...f, images: f.images.filter(i => i !== url) }))
  }

  const save = async () => {
    setSaving(true)
    const url = editing ? `/api/admin/properties/${editing}` : '/api/admin/properties'
    const method = editing ? 'PUT' : 'POST'
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    setShowForm(false)
    setEditing(null)
    setForm({ ...BLANK })
    load()
  }

  const deleteProperty = async (id: string) => {
    if (!confirm('Delete this property?')) return
    await fetch(`/api/admin/properties/${id}`, { method: 'DELETE' })
    load()
  }

  const startEdit = (p: Property) => {
    setForm({ name: p.name, city: p.city, area: p.area, type: p.type, designation: p.designation, beds: p.beds, guests: p.guests, price_from: p.price_from, description: p.description, images: p.images, chips: p.chips, verified: p.verified, available: p.available })
    setEditing(p.id)
    setShowForm(true)
  }

  const F = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
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

  return (
    <div style={{ padding: '2.5rem 3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>
            Listings
          </div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
            Properties
          </h1>
        </div>
        <button onClick={() => { setForm({ ...BLANK }); setEditing(null); setShowForm(true) }} style={{
          padding: '0.65rem 1.5rem', background: 'var(--sapphire)', color: 'var(--white)',
          fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', border: 'none', cursor: 'pointer',
        }}>
          + Add Property
        </button>
      </div>

      {/* Property form */}
      {showForm && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '2rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
            {editing ? 'Edit Property' : 'New Property'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div><label style={labelStyle}>Property Name</label><input style={inputStyle} value={form.name} onChange={F('name')} placeholder="Villa Azur, Cap Ferret" /></div>
            <div><label style={labelStyle}>Designation</label><input style={inputStyle} value={form.designation} onChange={F('designation')} placeholder="Private Villa · Sleeps 8" /></div>
            <div><label style={labelStyle}>City</label><input style={inputStyle} value={form.city} onChange={F('city')} placeholder="Manchester" /></div>
            <div><label style={labelStyle}>Area / Neighbourhood</label><input style={inputStyle} value={form.area} onChange={F('area')} placeholder="Alderley Edge" /></div>
            <div>
              <label style={labelStyle}>Type</label>
              <select style={inputStyle} value={form.type} onChange={F('type')}>
                {['villa', 'penthouse', 'estate', 'chalet', 'townhouse', 'cottage'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div><label style={labelStyle}>Beds</label><input style={inputStyle} type="number" value={form.beds} onChange={F('beds')} min={1} /></div>
              <div><label style={labelStyle}>Guests</label><input style={inputStyle} type="number" value={form.guests} onChange={F('guests')} min={1} /></div>
              <div><label style={labelStyle}>Price From (£)</label><input style={inputStyle} type="number" value={form.price_from} onChange={F('price_from')} min={0} /></div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Description</label>
            <textarea style={{ ...inputStyle, height: 120, resize: 'vertical' }} value={form.description} onChange={F('description')} placeholder="A private villa nestled in the hills..." />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Chips / Tags (comma separated)</label>
            <input style={inputStyle} value={form.chips.join(', ')} onChange={e => setForm(f => ({ ...f, chips: e.target.value.split(',').map(c => c.trim()).filter(Boolean) }))} placeholder="Private pool, Chef on request, Helipad" />
          </div>

          {/* Image upload */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={labelStyle}>Images</label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {form.images.map(url => (
                <div key={url} style={{ position: 'relative', width: 120, height: 90 }}>
                  <Image src={url} alt="" fill style={{ objectFit: 'cover' }} />
                  <button onClick={() => removeImage(url)} style={{
                    position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.7)',
                    color: 'white', border: 'none', width: 20, height: 20, fontSize: '0.7rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>✕</button>
                </div>
              ))}
              <button onClick={() => fileRef.current?.click()} style={{
                width: 120, height: 90, border: '1px dashed rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.3)',
                fontSize: '1.5rem', cursor: 'pointer',
              }}>
                {uploading ? '...' : '+'}
              </button>
            </div>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) uploadImage(f) }} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.verified} onChange={F('verified')} /> Verified property
            </label>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.available} onChange={F('available')} /> Available to book
            </label>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={save} disabled={saving} style={{
              padding: '0.7rem 2rem', background: 'var(--sapphire)', color: 'var(--white)',
              fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1,
            }}>
              {saving ? 'Saving...' : editing ? 'Update' : 'Publish'}
            </button>
            <button onClick={() => { setShowForm(false); setEditing(null) }} style={{
              padding: '0.7rem 1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.4)',
              fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Property list */}
      {loading && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>Loading...</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
        {items.map(p => (
          <div key={p.id} style={{ background: '#0D1520', display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.2rem 1.5rem' }}>
            {p.images[0] && (
              <div style={{ position: 'relative', width: 80, height: 60, flexShrink: 0 }}>
                <Image src={p.images[0]} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: '0.2rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                {p.city} · {p.beds} beds · {p.guests} guests · £{p.price_from?.toLocaleString()}/night
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', color: p.available ? '#10B981' : '#6B7280', padding: '0.2rem 0.5rem', border: `1px solid ${p.available ? '#10B98122' : '#6B728022'}` }}>
                {p.available ? 'Available' : 'Unavailable'}
              </span>
              <button onClick={() => startEdit(p)} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>
                Edit
              </button>
              <button onClick={() => deleteProperty(p.id)} style={{ padding: '0.3rem 0.8rem', background: 'transparent', border: '1px solid rgba(255,0,0,0.2)', color: '#f87171', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'var(--mono)' }}>
                Delete
              </button>
            </div>
          </div>
        ))}
        {!loading && items.length === 0 && (
          <div style={{ background: '#0D1520', padding: '3rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', textAlign: 'center' }}>
            No properties yet. Add your first one above.
          </div>
        )}
      </div>
    </div>
  )
}
