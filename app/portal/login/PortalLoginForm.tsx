'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function PortalLoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setStatus('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (!error) {
      router.push('/portal')
      router.refresh()
      return
    }

    setBusy(false)
    setStatus(error.message)
  }

  return (
    <form className="mt-10 max-w-xl border border-[#c8dff0] bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,61,96,0.08)]" onSubmit={submit}>
      <label className="block text-[0.7rem] uppercase tracking-[0.28em] text-[#4774a8]">
        Email address
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-4 w-full border-0 border-b border-[#c8dff0] bg-transparent px-0 py-4 text-lg normal-case tracking-normal text-[#1c2a36] outline-none"
          placeholder="you@email.com"
        />
      </label>
      <label className="mt-6 block text-[0.7rem] uppercase tracking-[0.28em] text-[#4774a8]">
        Password
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-4 w-full border-0 border-b border-[#c8dff0] bg-transparent px-0 py-4 text-lg normal-case tracking-normal text-[#1c2a36] outline-none"
          placeholder="Approved password"
        />
      </label>
      <button className="mt-8 bg-[#4774a8] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.26em] text-white" disabled={busy} type="submit">
        {busy ? 'Signing in...' : 'Sign in'}
      </button>
      {status && <p className="mt-6 text-sm leading-7 text-[#6f879d]">{status}</p>}
    </form>
  )
}
