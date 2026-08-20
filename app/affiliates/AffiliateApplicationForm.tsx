'use client'

import { FormEvent, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  company: '',
  city: '',
  fit: '',
  contacts: '1-5',
  source: 'Professional recommendation',
  url: '',
}

export default function AffiliateApplicationForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const update = (field: keyof typeof initialForm, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const message = [
      `Profession / role: ${form.role}`,
      `Company or firm: ${form.company || 'Not provided'}`,
      `City: ${form.city}`,
      `Relevant contacts: ${form.contacts}`,
      `Heard about OPV: ${form.source}`,
      `LinkedIn / website: ${form.url || 'Not provided'}`,
      '',
      form.fit,
    ].join('\n')
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'affiliates', service: 'affiliates', name: form.name, email: form.email, phone: form.phone, message }),
    })
    if (response.ok) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="affiliate-form" onSubmit={submit}>
      <label>Full name<input required value={form.name} onChange={e => update('name', e.target.value)} /></label>
      <label>Email<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} /></label>
      <label>Phone<input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} /></label>
      <label>Profession / role<input required value={form.role} onChange={e => update('role', e.target.value)} placeholder="Wealth manager, sports agent, solicitor..." /></label>
      <label>Company or firm<input value={form.company} onChange={e => update('company', e.target.value)} /></label>
      <label>City<input required value={form.city} onChange={e => update('city', e.target.value)} placeholder="Where you are primarily based" /></label>
      <label className="affiliate-form-wide">Why is your network a good fit for OPV?<textarea required value={form.fit} onChange={e => update('fit', e.target.value)} placeholder="Tell us about your clients or contacts and why an OPV introduction would make sense for them." /></label>
      <label>Approximate relevant contacts<select value={form.contacts} onChange={e => update('contacts', e.target.value)}>{['1-5', '5-20', '20-50', '50+', 'Prefer not to say'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>How did you hear about OPV?<select value={form.source} onChange={e => update('source', e.target.value)}>{['Existing OPV client', 'Professional recommendation', 'LinkedIn', 'Search', 'Event or introduction', 'Other'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label className="affiliate-form-wide">LinkedIn or website URL<input type="url" value={form.url} onChange={e => update('url', e.target.value)} /></label>
      <button type="submit" className="btn-primary affiliate-form-submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Submitting...' : 'Submit application ->'}</button>
      {status === 'success' && <p className="affiliate-form-status">Application received. We&apos;ll review and respond within 48 hours.</p>}
      {status === 'error' && <p className="affiliate-form-status">Unable to submit. Please try again or contact the concierge directly.</p>}
    </form>
  )
}
