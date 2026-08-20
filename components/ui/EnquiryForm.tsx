'use client'

import { useState } from 'react'

const services = ['Stays', 'Drive', 'Eat', 'Fly', 'Yacht', 'Security', 'Shop', 'General']

interface Props {
  page: string
  cta?: string
}

export default function EnquiryForm({ page, cta = 'Send enquiry' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: page, message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, page }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ padding: '3rem', background: 'var(--ice)', border: '1px solid var(--border)', textAlign: 'center' }}>
        <span className="eyebrow" style={{ marginBottom: '0.8rem' }}>Received</span>
        <p className="body-lg">Your enquiry has been sent. Your concierge will respond within two hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} autoComplete="off">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <label className="opv-label" htmlFor="name">Full name</label>
          <input id="name" className="opv-input" placeholder="Your name" required value={form.name} onChange={set('name')} />
        </div>
        <div>
          <label className="opv-label" htmlFor="email">Email address</label>
          <input id="email" type="email" className="opv-input" placeholder="your@email.com" required value={form.email} onChange={set('email')} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <label className="opv-label" htmlFor="phone">Phone (optional)</label>
          <input id="phone" type="tel" className="opv-input" placeholder="+44..." value={form.phone} onChange={set('phone')} />
        </div>
        <div>
          <label className="opv-label" htmlFor="service">Service</label>
          <select id="service" className="opv-input" style={{ cursor: 'pointer' }} value={form.service} onChange={set('service')}>
            {services.map(s => <option key={s} value={s.toLowerCase()}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="opv-label" htmlFor="message">Your brief</label>
        <textarea
          id="message"
          className="opv-input"
          placeholder="Dates, number of guests, any specific requirements..."
          rows={5}
          required
          value={form.message}
          onChange={set('message')}
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
          {status === 'sending' ? 'Sending...' : cta}
        </button>
        {status === 'error' && <p className="body-sm" style={{ color: '#dc2626' }}>Something went wrong. Please try again or email us directly.</p>}
      </div>
    </form>
  )
}
