'use client'

import { FormEvent, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  departure: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  passengers: '1',
  aircraft: 'No preference',
  catering: '',
  requirements: '',
}

export default function FlyEnquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const update = (field: keyof typeof initialForm, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const message = [
      `Departure airport: ${form.departure}`,
      `Destination: ${form.destination}`,
      `Departure date: ${form.departureDate}`,
      `Return date: ${form.returnDate || 'Not applicable'}`,
      `Passengers: ${form.passengers}`,
      `Aircraft preference: ${form.aircraft}`,
      `Catering requirements: ${form.catering || 'None provided'}`,
      '',
      form.requirements,
    ].join('\n')

    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 'fly', service: 'fly', name: form.name, email: form.email, phone: form.phone, message }),
    })

    if (response.ok) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="fly-form" onSubmit={submit}>
      <label>Full name<input required value={form.name} onChange={e => update('name', e.target.value)} /></label>
      <label>Email<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} /></label>
      <label>Phone<input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} /></label>
      <label>Departure airport<input required value={form.departure} onChange={e => update('departure', e.target.value)} placeholder="MAN, LHR, LCY, FAB..." /></label>
      <label>Destination<input required value={form.destination} onChange={e => update('destination', e.target.value)} placeholder="Airport code or city name" /></label>
      <label>Departure date<input required type="date" value={form.departureDate} onChange={e => update('departureDate', e.target.value)} /></label>
      <label>Return date (if applicable)<input type="date" value={form.returnDate} onChange={e => update('returnDate', e.target.value)} /></label>
      <label>Passengers<input required type="number" min="1" value={form.passengers} onChange={e => update('passengers', e.target.value)} /></label>
      <label>Aircraft preference<select value={form.aircraft} onChange={e => update('aircraft', e.target.value)}>{['No preference', 'Turboprop', 'Light Jet', 'Midsize', 'Heavy Jet', 'Ultra Long Range', 'Helicopter'].map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Catering requirements<input value={form.catering} onChange={e => update('catering', e.target.value)} placeholder="Dietary needs, preferred cuisine, champagne on board..." /></label>
      <label className="fly-form-wide">Additional requirements<textarea value={form.requirements} onChange={e => update('requirements', e.target.value)} placeholder="Security team, ground transport on arrival, additional stops, pet transport, special cargo..." /></label>
      <button type="submit" className="btn-primary fly-form-submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Submitting...' : 'Request flight brief ->'}</button>
      {status === 'success' && <p className="fly-form-status">Received. Aircraft options and pricing within 90 minutes.</p>}
      {status === 'error' && <p className="fly-form-status">Unable to send. Please try again or contact the concierge directly.</p>}
    </form>
  )
}
