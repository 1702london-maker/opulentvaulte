'use client'

import { FormEvent, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AffiliateLoginForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setStatus('')

    const origin = window.location.origin
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/api/affiliate/auth/callback`,
      },
    })

    setBusy(false)
    setStatus(error ? error.message : 'Check your email for the secure affiliate portal link.')
  }

  return (
    <form className="mt-10 max-w-xl border border-[#c8dff0] bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,61,96,0.08)]" onSubmit={submit}>
      <label className="block text-[0.7rem] uppercase tracking-[0.28em] text-[#4774a8]">
        Affiliate email
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-4 w-full border-0 border-b border-[#c8dff0] bg-transparent px-0 py-4 text-lg normal-case tracking-normal text-[#1c2a36] outline-none"
          placeholder="partner@email.com"
        />
      </label>
      <button className="mt-8 bg-[#4774a8] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.26em] text-white" disabled={busy} type="submit">
        {busy ? 'Sending...' : 'Send magic link'}
      </button>
      {status && <p className="mt-6 text-sm leading-7 text-[#6f879d]">{status}</p>}
    </form>
  )
}

