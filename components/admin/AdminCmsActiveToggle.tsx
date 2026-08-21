'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
  active: boolean
  id: string
  kind: 'properties' | 'vehicles'
}

export function AdminCmsActiveToggle({ active, id, kind }: Props) {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  async function toggleActive() {
    setPending(true)
    try {
      const response = await fetch(`/api/admin/${kind}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !active }),
      })

      if (!response.ok) {
        throw new Error('Unable to update active status')
      }

      router.refresh()
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleActive}
      disabled={pending}
      className="admin-inline-action"
      aria-pressed={active}
    >
      {pending ? 'Saving...' : active ? 'Hide' : 'Activate'}
    </button>
  )
}
