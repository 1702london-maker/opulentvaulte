'use client'

import { Suspense } from 'react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function AdminLoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      setBusy(false)
      return
    }

    const redirectTo =
      typeof window === 'undefined'
        ? '/admin'
        : new URLSearchParams(window.location.search).get('from') || '/admin'

    router.push(redirectTo)
    router.refresh()
  }

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={submit}>
        <span className="eyebrow">OPV Admin</span>
        <h1>Concierge command.</h1>
        <label>
          Email
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password
          <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button className="btn-primary" type="submit" disabled={busy}>
          {busy ? 'Signing in...' : 'Sign in'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </main>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<main className="admin-login-page" />}>
      <AdminLoginForm />
    </Suspense>
  )
}
