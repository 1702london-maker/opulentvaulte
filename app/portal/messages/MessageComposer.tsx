'use client'

import { FormEvent, useState } from 'react'

export default function MessageComposer() {
  const [body, setBody] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setStatus('')

    const response = await fetch('/api/portal/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body }),
    })

    setBusy(false)
    if (!response.ok) {
      setStatus('Message could not be saved. Please try again.')
      return
    }

    setBody('')
    setStatus('Message saved to your OPV thread.')
  }

  return (
    <form className="mt-8 border border-[#e2edf6] p-5" onSubmit={submit}>
      <label className="block text-[0.65rem] uppercase tracking-[0.28em] text-[#4774a8]">
        New message
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className="mt-4 min-h-32 w-full border-0 border-b border-[#c8dff0] bg-transparent px-0 py-4 text-base normal-case tracking-normal text-[#1c2a36] outline-none"
          placeholder="Tell OPV what you need..."
        />
      </label>
      <button className="mt-6 bg-[#4774a8] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white" disabled={busy} type="submit">
        {busy ? 'Saving...' : 'Send to thread'}
      </button>
      {status && <p className="mt-4 text-sm text-[#6f879d]">{status}</p>}
    </form>
  )
}

