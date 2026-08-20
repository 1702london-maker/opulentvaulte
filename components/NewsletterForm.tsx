'use client'

import { FormEvent, useState } from 'react'

export default function NewsletterForm() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <form className="home-newsletter-form" onSubmit={submit}>
      <input type="email" name="email" placeholder="Your email" required />
      <button type="submit">{sent ? 'Joined' : 'Join'}</button>
    </form>
  )
}
