'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const from = params.get('from') ?? '/admin'
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push(from)
    } else {
      setStatus('error')
      setPassword('')
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--ink)', fontFamily: 'var(--body)',
    }}>
      <div style={{ width: '100%', maxWidth: 380, padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '0.8rem' }}>
            Opulent Vault
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--white)', fontWeight: 300, letterSpacing: '-0.01em' }}>
            Admin Access
          </div>
        </div>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoFocus
            style={{
              width: '100%', padding: '0.85rem 1rem', border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.06)', color: 'var(--white)', fontSize: '0.9rem',
              fontFamily: 'var(--body)', outline: 'none',
            }}
          />
          {status === 'error' && (
            <p style={{ fontSize: '0.78rem', color: '#f87171', textAlign: 'center' }}>
              Incorrect password
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '0.85rem', background: 'var(--sapphire)', color: 'var(--white)',
              fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', border: 'none', cursor: 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading' ? 'Verifying...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
