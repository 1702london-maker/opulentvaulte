'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function useEnquiryForm(service: string) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function submit(formData: Record<string, unknown>) {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service,
          metadata: Object.fromEntries(
            Object.entries(formData).filter(([key]) => !['full_name', 'name', 'email', 'phone', 'service'].includes(key))
          ),
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data?.error || 'Something went wrong. Please try again.')
        return null
      }

      setStatus('success')
      return data
    } catch {
      setStatus('error')
      setErrorMessage('Connection error. Please try again.')
      return null
    }
  }

  return { status, errorMessage, submit }
}
