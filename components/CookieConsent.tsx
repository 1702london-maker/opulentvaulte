'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const storageKey = 'opv-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!window.localStorage.getItem(storageKey))
  }, [])

  function choose(value: 'accepted' | 'declined') {
    window.localStorage.setItem(storageKey, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <section className="cookie-consent" aria-label="Cookie consent">
      <div>
        <strong>Cookie preferences</strong>
        <p>We use essential cookies to run the website. Optional analytics and preference cookies help improve OPV. No advertising cookies, no cross-site tracking.</p>
        <Link href="/cookies">Cookie policy</Link>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" onClick={() => choose('declined')}>Decline optional</button>
        <button type="button" onClick={() => choose('accepted')}>Accept</button>
      </div>
    </section>
  )
}
