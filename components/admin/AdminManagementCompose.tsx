'use client'

import { useState } from 'react'

export default function AdminManagementCompose() {
  const [status, setStatus] = useState<string | null>(null)

  async function submit(formData: FormData) {
    setStatus('Sending...')
    const adminKey = window.localStorage.getItem('opv_admin_key') || ''
    const res = await fetch('/api/admin/communications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(adminKey ? { 'x-opv-admin-key': adminKey } : {}),
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })

    setStatus(res.ok ? 'Logged' : 'Could not log message')
    if (res.ok) window.location.reload()
  }

  return (
    <form action={submit} className="admin-compose">
      <input name="to_address" type="email" placeholder="Client email" required />
      <input name="subject" placeholder="Subject" required />
      <textarea name="body" placeholder="Message" required />
      <button type="submit">Log communication</button>
      {status && <span>{status}</span>}
    </form>
  )
}
