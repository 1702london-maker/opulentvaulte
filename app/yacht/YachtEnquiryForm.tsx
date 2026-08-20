'use client'

import { FormEvent, useState } from 'react'

const initial = { name: '', email: '', phone: '', charterType: 'Day charter', location: '', startDate: '', duration: 'Full day', guests: '', vessel: 'No preference', budget: 'To be discussed', requirements: '' }

export default function YachtEnquiryForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const set = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(current => ({ ...current, [key]: event.target.value }))

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const message = [`Charter type: ${form.charterType}`, `Preferred location: ${form.location}`, `Start date: ${form.startDate}`, `Duration: ${form.duration}`, `Guests: ${form.guests}`, `Vessel preference: ${form.vessel}`, `Budget range: ${form.budget}`, `Special requirements: ${form.requirements}`].join('\n')
    try {
      const response = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ page: 'yacht', service: 'yacht', name: form.name, email: form.email, phone: form.phone, message }) })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') return <div className="yacht-form yacht-form-state"><span className="eyebrow">Received</span><p>Received. Vessel options and pricing within 2 hours.</p></div>

  return (
    <form className="yacht-form" onSubmit={submit}>
      <div><label className="opv-label" htmlFor="yacht-name">Full name</label><input id="yacht-name" className="opv-input" value={form.name} onChange={set('name')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-email">Email</label><input id="yacht-email" type="email" className="opv-input" value={form.email} onChange={set('email')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-phone">Phone</label><input id="yacht-phone" type="tel" className="opv-input" value={form.phone} onChange={set('phone')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-type">Charter type</label><select id="yacht-type" className="opv-input" value={form.charterType} onChange={set('charterType')}>{['Day charter', 'Week voyage', 'Corporate charter', 'Not sure - advise me'].map(option => <option key={option}>{option}</option>)}</select></div>
      <div><label className="opv-label" htmlFor="yacht-location">Preferred location</label><input id="yacht-location" className="opv-input" placeholder="Mediterranean, Solent, Caribbean, Adriatic..." value={form.location} onChange={set('location')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-date">Start date</label><input id="yacht-date" type="date" className="opv-input" value={form.startDate} onChange={set('startDate')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-duration">Duration</label><select id="yacht-duration" className="opv-input" value={form.duration} onChange={set('duration')}>{['Half day', 'Full day', '2-4 nights', '1 week', '2 weeks', '3+ weeks', 'To be discussed'].map(option => <option key={option}>{option}</option>)}</select></div>
      <div><label className="opv-label" htmlFor="yacht-guests">Guests</label><input id="yacht-guests" type="number" min="1" className="opv-input" value={form.guests} onChange={set('guests')} required /></div>
      <div><label className="opv-label" htmlFor="yacht-vessel">Vessel preference</label><select id="yacht-vessel" className="opv-input" value={form.vessel} onChange={set('vessel')}>{['No preference', 'Motor yacht', 'Sailing yacht', 'Superyacht (40m+)', 'Catamaran', 'Day boat'].map(option => <option key={option}>{option}</option>)}</select></div>
      <div><label className="opv-label" htmlFor="yacht-budget">Budget range</label><select id="yacht-budget" className="opv-input" value={form.budget} onChange={set('budget')}>{['Under £5,000', '£5,000-£20,000', '£20,000-£50,000', '£50,000-£150,000', '£150,000+', 'To be discussed'].map(option => <option key={option}>{option}</option>)}</select></div>
      <div className="yacht-form-wide"><label className="opv-label" htmlFor="yacht-requirements">Special requirements</label><textarea id="yacht-requirements" className="opv-input" rows={5} placeholder="Water toys, on-board chef, corporate branding, photography, dietary requirements, specific ports of call..." value={form.requirements} onChange={set('requirements')} /></div>
      <button type="submit" className="btn-primary yacht-form-wide" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send charter brief →'}</button>
      {status === 'error' && <p className="body-sm yacht-form-wide" style={{ color: '#b91c1c' }}>Something went wrong. Please try again or email us directly.</p>}
    </form>
  )
}
