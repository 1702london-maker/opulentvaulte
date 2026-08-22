'use client'

import { FormEvent, useState } from 'react'

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'footer',
        }),
      })
      if (!response.ok) throw new Error('Newsletter failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="footer-newsletter">
        <p>New residences, seasonal fleet arrivals, empty legs and private dining access - quietly delivered to those who ask.</p>
        <div className="footer-newsletter-success">
          <strong>You're on the list.</strong>
          <span>Expect one or two quiet messages a month.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="footer-newsletter">
      <p>New residences, seasonal fleet arrivals, empty legs and private dining access - quietly delivered to those who ask.</p>
      <form onSubmit={submit}>
        <label htmlFor="footer-email">Your email</label>
        <input id="footer-email" type="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="your@email.com" />
        <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8rem' }}>
          <input type="checkbox" name="consent" required />
          <span>
            I agree to receive updates from OPV.
            View our <a href="/privacy">Privacy Policy</a>.
          </span>
        </label>
        <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</button>
        {status === 'error' && <small>Something went wrong - email us directly.</small>}
      </form>
      <div className="footer-private-note">Private announcements only. No marketing noise. Unsubscribe any time.</div>
    </div>
  )
}
