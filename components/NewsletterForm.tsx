'use client'

import { FormEvent, useState } from 'react'

export default function NewsletterForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = String(new FormData(form).get('email') || '')
    setLoading(true)
    await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'homepage' }),
    })
    setLoading(false)
    setSent(true)
    form.reset()
  }

  return (
    <form className="home-newsletter-form" onSubmit={submit}>
      <input type="email" name="email" placeholder="Your email" required />
      <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8rem' }}>
        <input type="checkbox" name="consent" required />
        <span>
          I agree to receive updates from OPV.
          View our <a href="/privacy">Privacy Policy</a>.
        </span>
      </label>
      <button type="submit" disabled={loading}>{loading ? 'Joining' : sent ? 'Joined' : 'Join'}</button>
    </form>
  )
}
