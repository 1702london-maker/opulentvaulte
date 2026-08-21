'use client'

import { useMemo, useState } from 'react'

type Option = { label: string; value: string }
type Action = {
  label: string
  endpoint: string
  method?: 'POST' | 'PATCH'
  body?: Record<string, unknown>
  prompt?: string
  options?: Option[]
  field?: string
}

export default function AdminManagementActions({ actions }: { actions: Action[] }) {
  const [busy, setBusy] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const adminKey = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.localStorage.getItem('opv_admin_key') || ''
  }, [])

  async function run(action: Action, value?: string) {
    const promptValue = action.prompt ? window.prompt(action.prompt, value || '') : value
    if (action.prompt && !promptValue) return

    setBusy(action.label)
    setMessage(null)

    const body = {
      ...(action.body || {}),
      ...(action.field && promptValue ? { [action.field]: promptValue } : {}),
    }

    const res = await fetch(action.endpoint, {
      method: action.method || 'POST',
      headers: {
        'content-type': 'application/json',
        ...(adminKey ? { 'x-opv-admin-key': adminKey } : {}),
      },
      body: JSON.stringify(body),
    })

    setBusy(null)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setMessage(data.error || 'Action failed')
      return
    }

    setMessage('Saved')
    window.location.reload()
  }

  return (
    <div className="admin-actions">
      {actions.map((action) => (
        action.options ? (
          <select
            key={action.label}
            disabled={busy === action.label}
            defaultValue=""
            onChange={(event) => {
              const value = event.target.value
              event.currentTarget.value = ''
              if (value) run(action, value)
            }}
          >
            <option value="">{action.label}</option>
            {action.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <button key={action.label} type="button" disabled={busy === action.label} onClick={() => run(action)}>
            {busy === action.label ? 'Working...' : action.label}
          </button>
        )
      ))}
      {message && <span>{message}</span>}
    </div>
  )
}

