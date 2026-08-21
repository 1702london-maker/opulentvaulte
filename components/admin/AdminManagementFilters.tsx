'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function AdminManagementFilters({
  filters,
}: {
  filters: Array<{ name: string; label: string; options: Array<{ label: string; value: string }> }>
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function update(name: string, value: string) {
    const params = new URLSearchParams(searchParams?.toString() || '')
    if (value) params.set(name, value)
    else params.delete(name)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="admin-filter-row">
      {filters.map((filter) => (
        <label key={filter.name}>
          <span>{filter.label}</span>
          <select defaultValue={searchParams?.get(filter.name) || ''} onChange={(event) => update(filter.name, event.target.value)}>
            <option value="">All</option>
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      ))}
    </div>
  )
}
