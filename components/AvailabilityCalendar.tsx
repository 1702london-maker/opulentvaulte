'use client'

import { useMemo, useState } from 'react'

type DateRange = { from: string; to: string; reason?: string }

export default function AvailabilityCalendar({
  propertyId,
  initialBlockedRanges = [],
}: {
  propertyId: string
  initialBlockedRanges?: DateRange[]
}) {
  const [open, setOpen] = useState(false)
  const [blockedRanges, setBlockedRanges] = useState(initialBlockedRanges)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    const next = !open
    setOpen(next)
    if (!next || blockedRanges.length || loading) return

    setLoading(true)
    try {
      const res = await fetch(`/api/public/properties/${propertyId}/availability`)
      if (res.ok) {
        const json = await res.json()
        setBlockedRanges(json.blocked_ranges || [])
      }
    } finally {
      setLoading(false)
    }
  }

  const days = useMemo(() => {
    const start = new Date()
    start.setDate(1)
    return Array.from({ length: 35 }, (_, index) => {
      const date = new Date(start)
      date.setDate(index + 1)
      const iso = date.toISOString().slice(0, 10)
      const blocked = blockedRanges.some((range) => iso >= range.from && iso <= range.to)
      return { iso, day: date.getDate(), outside: date.getMonth() !== start.getMonth(), blocked }
    })
  }, [blockedRanges])

  return (
    <div className="availability-calendar">
      <button type="button" onClick={toggle} className="availability-calendar-trigger">
        {open ? 'Hide availability' : 'View availability'}
      </button>
      {open && (
        <div className="availability-calendar-panel">
          <div className="availability-calendar-head">
            <span>Availability</span>
            <small>{loading ? 'Loading...' : 'Blocked dates marked'}</small>
          </div>
          <div className="availability-calendar-grid">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => <strong key={day}>{day}</strong>)}
            {days.map((day) => (
              <span
                key={day.iso}
                className={`${day.outside ? 'is-outside' : ''} ${day.blocked ? 'is-blocked' : ''}`}
                title={day.blocked ? 'Blocked' : 'Available'}
              >
                {day.day}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
