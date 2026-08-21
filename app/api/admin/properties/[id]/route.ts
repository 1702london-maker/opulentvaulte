import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

const booleanFields = new Set(['active', 'verified', 'available', 'owner_verified'])
const numberFields = new Set(['lat', 'lng', 'bedrooms', 'bathrooms', 'max_guests', 'size_sqft', 'price_from_gbp', 'minimum_stay'])
const arrayFields = new Set(['amenities', 'chips', 'tags'])
const jsonFields = new Set(['images', 'blocked_dates'])
const allowedFields = new Set([
  'name', 'slug', 'designation', 'verified', 'active', 'address_line_1', 'address_line_2', 'city', 'area', 'county',
  'postcode', 'country', 'lat', 'lng', 'property_type', 'bedrooms', 'bathrooms', 'max_guests', 'size_sqft', 'floor',
  'price_from_gbp', 'price_currency', 'price_unit', 'minimum_stay', 'pricing_notes', 'amenities', 'chips',
  'description', 'description_long', 'images', 'video_url', 'owner_name', 'owner_verified', 'owner_contact',
  'management_company', 'available', 'available_from', 'available_to', 'blocked_dates', 'meta_title',
  'meta_description', 'internal_notes', 'tags',
])

function toList(value: unknown) {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean)
  return String(value || '').split(/\r?\n|,/).map(item => item.trim()).filter(Boolean)
}

function toJson(value: unknown, field: string) {
  if (Array.isArray(value) || (value && typeof value === 'object')) return value
  const text = String(value || '').trim()
  if (!text) return []
  if (text.startsWith('[') || text.startsWith('{')) return JSON.parse(text)
  const rows = text.split(/\r?\n/).map(row => row.trim()).filter(Boolean)
  if (field === 'images') return rows.map((url, order) => ({ url, alt: '', primary: order === 0, order }))
  return rows
}

function propertyPayload(input: Record<string, unknown>) {
  const payload: Record<string, unknown> = {}
  for (const [key, raw] of Object.entries(input)) {
    if (!allowedFields.has(key)) continue
    if (booleanFields.has(key)) payload[key] = Boolean(raw)
    else if (numberFields.has(key)) payload[key] = raw === '' || raw == null ? null : Number(raw)
    else if (arrayFields.has(key)) payload[key] = toList(raw)
    else if (jsonFields.has(key)) payload[key] = toJson(raw, key)
    else payload[key] = String(raw ?? '').trim() || null
  }
  if (payload.verified) payload.verified_at = new Date().toISOString()
  return payload
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin().from('properties').select('*').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin property load error:', error)
    return NextResponse.json({ error: 'Failed to load property' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const patch = propertyPayload(await req.json())
    const { data, error } = await getSupabaseAdmin().from('properties').update(patch).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'property.updated', entityType: 'property', entityId: params.id, description: 'Property updated' })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin property update error:', error)
    return NextResponse.json({ error: 'Failed to update property' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { error } = await getSupabaseAdmin().from('properties').update({ active: false }).eq('id', params.id)
    if (error) throw error
    await logActivity({ req, action: 'property.archived', entityType: 'property', entityId: params.id, description: 'Property archived' })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin property archive error:', error)
    return NextResponse.json({ error: 'Failed to archive property' }, { status: 500 })
  }
}
