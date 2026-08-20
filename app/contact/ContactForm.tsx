'use client'

import { FormEvent, useState } from 'react'

const services = ['Not sure - please advise', 'Stays', 'Drive', 'Eat', 'Shop', 'Fly', 'Yacht', 'Security', 'Affiliates', 'Something else']

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: services[0], message: '', response: 'Email' })
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const update = (field: keyof typeof form, value: string) => setForm(current => ({ ...current, [field]: value }))

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    const message = [
      form.message,
      '',
      `Preferred response method: ${form.response}`,
    ].join('\n')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: 'contact', service: form.service, name: form.name, email: form.email, phone: form.phone, message }),
      })
      if (!response.ok) throw new Error('Request failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <div className="contact-form-wrap">
      <span className="eyebrow">General enquiry</span>
      <h2>Any service. <em>Any question.</em></h2>
      <p>Use this form for any enquiry - specific or open. If you're not sure which service applies, tell us what you need and we'll advise. A named team member responds, not a template.</p>
      <form className="contact-form" onSubmit={submit}>
        <label>Full name<input required type="text" value={form.name} onChange={event => update('name', event.target.value)} /></label>
        <label>Email<input required type="email" value={form.email} onChange={event => update('email', event.target.value)} /></label>
        <label>Phone - optional but preferred<input type="tel" value={form.phone} onChange={event => update('phone', event.target.value)} /></label>
        <label>What's this about?<select value={form.service} onChange={event => update('service', event.target.value)}>{services.map(service => <option key={service}>{service}</option>)}</select></label>
        <label className="contact-form-wide">Message<textarea required value={form.message} onChange={event => update('message', event.target.value)} placeholder="Tell us what you need. Dates, numbers, preferences, constraints - as much or as little as you have. We'll ask if we need more." /></label>
        <label className="contact-form-wide">Preferred response method<select value={form.response} onChange={event => update('response', event.target.value)}>{['Email', 'Phone call', 'WhatsApp'].map(method => <option key={method}>{method}</option>)}</select></label>
        {state === 'success' ? (
          <p className="contact-form-status">Received. A member of the team will be in touch shortly.</p>
        ) : (
          <button className="btn-primary contact-form-submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Send your message ->'}</button>
        )}
        {state === 'error' && <p className="contact-form-status error">Something went wrong - please call or email us directly. +44 7385 694230</p>}
      </form>
    </div>
  )
}
