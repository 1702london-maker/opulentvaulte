'use client'

import { FormEvent, useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  organisation: '',
  service: 'Close Protection',
  principals: '1 principal',
  startDate: '',
  duration: 'Single day',
  locations: '',
  brief: '',
  nda: 'Yes, please send NDA first',
}

export default function SecurityEnquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const update = (field: keyof typeof initialForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const message = [
      `Organisation: ${form.organisation || 'Not provided'}`,
      `Service required: ${form.service}`,
      `Principal count: ${form.principals}`,
      `Start date: ${form.startDate || 'To be discussed'}`,
      `Duration: ${form.duration}`,
      `Locations: ${form.locations}`,
      `NDA before first contact: ${form.nda}`,
      '',
      form.brief,
    ].join('\n')

    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'security', service: 'security', name: form.name, email: form.email, phone: form.phone, message }),
    })

    if (response.ok) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="security-form" onSubmit={submit}>
      <label>Full name<input required value={form.name} onChange={e => update('name', e.target.value)} /></label>
      <label>Contact number<span>We may call rather than email for sensitive enquiries</span><input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} /></label>
      <label>Email<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} /></label>
      <label>Company or household (optional)<input value={form.organisation} onChange={e => update('organisation', e.target.value)} /></label>
      <label>Service required<select value={form.service} onChange={e => update('service', e.target.value)}>{['Close Protection', 'Personal Bodyguard', 'Residential Security', 'Secure Transport', 'Event Security', 'Travel Security', 'Multiple services'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Principal count<select value={form.principals} onChange={e => update('principals', e.target.value)}>{['1 principal', '2-4 principals', '5-10 principals', '10+ principals', 'Not applicable'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Start date<input type="date" value={form.startDate} onChange={e => update('startDate', e.target.value)} /></label>
      <label>Duration<select value={form.duration} onChange={e => update('duration', e.target.value)}>{['Single day', '2-7 days', '1-4 weeks', '1-3 months', 'Ongoing', 'To be discussed'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Location(s)<input value={form.locations} onChange={e => update('locations', e.target.value)} placeholder="Cities, countries or venues involved" /></label>
      <label className="security-form-wide">Operational brief<textarea required value={form.brief} onChange={e => update('brief', e.target.value)} placeholder="Nature of requirement, known threats or concerns, principal lifestyle context, or specific operational constraints." /></label>
      <label className="security-form-wide">NDA before first contact?<select value={form.nda} onChange={e => update('nda', e.target.value)}><option>Yes, please send NDA first</option><option>Not required</option></select></label>
      <button className="btn-primary security-form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Submitting...' : 'Submit confidential enquiry ->'}</button>
      {status === 'success' && <p className="security-form-status">Received. The security director will respond within 2 hours.</p>}
      {status === 'error' && <p className="security-form-status">Unable to send. Please try again or contact the concierge directly.</p>}
    </form>
  )
}
