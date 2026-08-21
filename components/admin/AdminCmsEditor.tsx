'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

export type CmsKind = 'properties' | 'vehicles'
type RecordValue = string | number | boolean | null | string[] | unknown[] | Record<string, unknown>
type CmsRecord = Record<string, RecordValue>

type Field = {
  name: string
  label: string
  type?: 'text' | 'number' | 'date' | 'textarea' | 'select' | 'checkbox' | 'json' | 'list'
  options?: string[]
  wide?: boolean
}

const propertyFields: Field[] = [
  { name: 'name', label: 'Property name' },
  { name: 'slug', label: 'Slug' },
  { name: 'designation', label: 'Designation', type: 'select', options: ['ovp-managed', 'partner-hosted'] },
  { name: 'active', label: 'Active on OPV', type: 'checkbox' },
  { name: 'verified', label: 'Verified by OPV', type: 'checkbox' },
  { name: 'available', label: 'Available', type: 'checkbox' },
  { name: 'city', label: 'City', type: 'select', options: ['London', 'Manchester', 'Leeds'] },
  { name: 'area', label: 'Area' },
  { name: 'address_line_1', label: 'Address line 1', wide: true },
  { name: 'address_line_2', label: 'Address line 2', wide: true },
  { name: 'county', label: 'County' },
  { name: 'postcode', label: 'Postcode' },
  { name: 'country', label: 'Country' },
  { name: 'lat', label: 'Latitude', type: 'number' },
  { name: 'lng', label: 'Longitude', type: 'number' },
  { name: 'property_type', label: 'Property type', type: 'select', options: ['penthouse', 'villa', 'estate', 'townhouse', 'apartment', 'loft'] },
  { name: 'bedrooms', label: 'Bedrooms', type: 'number' },
  { name: 'bathrooms', label: 'Bathrooms', type: 'number' },
  { name: 'max_guests', label: 'Max guests', type: 'number' },
  { name: 'size_sqft', label: 'Size sqft', type: 'number' },
  { name: 'floor', label: 'Floor' },
  { name: 'price_from_gbp', label: 'From GBP', type: 'number' },
  { name: 'price_currency', label: 'Currency' },
  { name: 'price_unit', label: 'Price unit' },
  { name: 'minimum_stay', label: 'Minimum stay', type: 'number' },
  { name: 'pricing_notes', label: 'Pricing notes', type: 'textarea', wide: true },
  { name: 'amenities', label: 'Amenities, one per line', type: 'list', wide: true },
  { name: 'chips', label: 'Card chips, one per line', type: 'list', wide: true },
  { name: 'description', label: 'Card description', type: 'textarea', wide: true },
  { name: 'description_long', label: 'Long description', type: 'textarea', wide: true },
  { name: 'images', label: 'Gallery JSON or image URLs, one per line', type: 'json', wide: true },
  { name: 'video_url', label: 'Video URL', wide: true },
  { name: 'owner_name', label: 'Owner name' },
  { name: 'owner_verified', label: 'Owner verified', type: 'checkbox' },
  { name: 'owner_contact', label: 'Owner contact', wide: true },
  { name: 'management_company', label: 'Management company' },
  { name: 'available_from', label: 'Available from', type: 'date' },
  { name: 'available_to', label: 'Available to', type: 'date' },
  { name: 'blocked_dates', label: 'Blocked dates JSON or one date per line', type: 'json', wide: true },
  { name: 'meta_title', label: 'Meta title', wide: true },
  { name: 'meta_description', label: 'Meta description', type: 'textarea', wide: true },
  { name: 'internal_notes', label: 'Internal notes', type: 'textarea', wide: true },
  { name: 'tags', label: 'Tags, one per line', type: 'list', wide: true },
]

const vehicleFields: Field[] = [
  { name: 'make', label: 'Make' },
  { name: 'model', label: 'Model' },
  { name: 'variant', label: 'Variant' },
  { name: 'active', label: 'Active on OPV', type: 'checkbox' },
  { name: 'available', label: 'Available', type: 'checkbox' },
  { name: 'year', label: 'Year', type: 'number' },
  { name: 'registration', label: 'Registration' },
  { name: 'colour', label: 'Colour' },
  { name: 'vin', label: 'VIN' },
  { name: 'category', label: 'Category', type: 'select', options: ['saloon', 'suv', 'sports', 'armoured', 'van', 'helicopter'] },
  { name: 'sub_category', label: 'Sub-category' },
  { name: 'passengers', label: 'Passengers', type: 'number' },
  { name: 'luggage_large', label: 'Large luggage', type: 'number' },
  { name: 'luggage_small', label: 'Small luggage', type: 'number' },
  { name: 'fuel_type', label: 'Fuel type' },
  { name: 'transmission', label: 'Transmission' },
  { name: 'is_armoured', label: 'Armoured', type: 'checkbox' },
  { name: 'armour_rating', label: 'Armour rating' },
  { name: 'chauffeur_available', label: 'Chauffeur available', type: 'checkbox' },
  { name: 'self_drive_available', label: 'Self-drive available', type: 'checkbox' },
  { name: 'price_per_day_gbp', label: 'Price per day GBP', type: 'number' },
  { name: 'price_per_transfer_gbp', label: 'Transfer price GBP', type: 'number' },
  { name: 'price_on_application', label: 'Price on application', type: 'checkbox' },
  { name: 'based_at', label: 'Based at' },
  { name: 'images', label: 'Gallery JSON or image URLs, one per line', type: 'json', wide: true },
  { name: 'description', label: 'Description', type: 'textarea', wide: true },
  { name: 'chips', label: 'Chips, one per line', type: 'list', wide: true },
  { name: 'last_service_date', label: 'Last service date', type: 'date' },
  { name: 'mot_expiry', label: 'MOT expiry', type: 'date' },
  { name: 'insurance_expiry', label: 'Insurance expiry', type: 'date' },
  { name: 'internal_notes', label: 'Internal notes', type: 'textarea', wide: true },
]

function stringifyValue(value: RecordValue | undefined, type?: Field['type']) {
  if (value == null) return ''
  if (type === 'list' && Array.isArray(value)) return value.join('\n')
  if (type === 'json') {
    if (Array.isArray(value) && value.every(item => typeof item === 'string')) return value.join('\n')
    return JSON.stringify(value, null, 2)
  }
  return String(value)
}

export default function AdminCmsEditor({ kind, initialData }: { kind: CmsKind; initialData?: CmsRecord | null }) {
  const router = useRouter()
  const fields = kind === 'properties' ? propertyFields : vehicleFields
  const [values, setValues] = useState<Record<string, string | boolean>>(() => {
    const base: Record<string, string | boolean> = {}
    for (const field of fields) {
      if (field.type === 'checkbox') base[field.name] = Boolean(initialData?.[field.name] ?? false)
      else base[field.name] = stringifyValue(initialData?.[field.name], field.type)
    }
    return base
  })
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const endpoint = initialData?.id ? `/api/admin/${kind}/${initialData.id}` : `/api/admin/${kind}`
  const title = useMemo(() => (kind === 'properties' ? 'property' : 'vehicle'), [kind])

  function update(name: string, value: string | boolean) {
    setValues(current => ({ ...current, [name]: value }))
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('saving')
    const res = await fetch(endpoint, {
      method: initialData?.id ? 'PATCH' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    })
    if (!res.ok) {
      setState('error')
      return
    }
    setState('saved')
    router.push(`/admin/${kind}`)
    router.refresh()
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', maxWidth: 1120 }}>
      {fields.map(field => (
        <label key={field.name} style={{ display: 'grid', gap: '0.45rem', gridColumn: field.wide ? '1 / -1' : undefined, color: 'var(--ink-soft)', fontSize: '0.78rem' }}>
          <span style={{ fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{field.label}</span>
          {field.type === 'textarea' || field.type === 'json' || field.type === 'list' ? (
            <textarea value={String(values[field.name] ?? '')} onChange={event => update(field.name, event.target.value)} rows={field.type === 'json' ? 7 : 4} style={{ border: '1px solid var(--border)', padding: '0.8rem', minHeight: 120 }} />
          ) : field.type === 'select' ? (
            <select value={String(values[field.name] ?? '')} onChange={event => update(field.name, event.target.value)} style={{ border: '1px solid var(--border)', padding: '0.8rem' }}>
              <option value="">Select</option>
              {field.options?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          ) : field.type === 'checkbox' ? (
            <input type="checkbox" checked={Boolean(values[field.name])} onChange={event => update(field.name, event.target.checked)} style={{ width: 24, height: 24 }} />
          ) : (
            <input type={field.type || 'text'} value={String(values[field.name] ?? '')} onChange={event => update(field.name, event.target.value)} style={{ border: '1px solid var(--border)', padding: '0.8rem' }} />
          )}
        </label>
      ))}
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn-primary" disabled={state === 'saving'}>{state === 'saving' ? 'Saving...' : `Save ${title}`}</button>
        {state === 'saved' && <span>Saved for Opulent Vault Limited.</span>}
        {state === 'error' && <span style={{ color: '#9f1d1d' }}>Could not save. Check required fields.</span>}
      </div>
    </form>
  )
}
