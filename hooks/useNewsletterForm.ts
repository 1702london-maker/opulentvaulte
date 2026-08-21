'use client'

import { useState } from 'react'

export function useNewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function subscribe(email: string, fullName?: string, source?: string) {
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, full_name: fullName, source }),
      })
      setStatus(res.ok ? 'success' : 'error')
      return res.ok
    } catch {
      setStatus('error')
      return false
    }
  }

  return { status, subscribe }
}
