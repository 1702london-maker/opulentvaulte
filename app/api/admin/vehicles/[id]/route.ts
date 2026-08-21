import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

const booleanFields = new Set(['active', 'available', 'is_armoured', 'chauffeur_available', 'self_drive_available', 'price_on_application'])
const numberFields = new Set(['year', 'passengers', 'luggage_large', 'luggage_small', 'price_per_day_gbp', 'price_per_transfer_gbp'])
const arrayFields = new Set(['chips'])
const jsonFields = new Set(['images'])
const allowedFields = new Set([
  'make', 'model', 'variant', 'year', 'registration', 'colour', 'vin', 'category', 'sub_category', 'passengers',
  'luggage_large', 'luggage_small', 'fuel_type', 'transmission', 'is_armoured', 'armour_rating',
  'chauffeur_available', 'self_drive_available', 'price_per_day_gbp', 'price_per_transfer_gbp',
  'price_on_application', 'available', 'based_at', 'images', 'description', 'chips', 'last_service_date',
  'mot_expiry', 'insurance_expiry', 'internal_notes', 'active',
])

function toList(value: unknown) {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean)
  return String(value || '').split(/\r?\n|,/).map(item => item.trim()).filter(Boolean)
}

function toImages(value: unknown) {
  if (Array.isArray(value) || (value && typeof value === 'object')) return value
  const text = String(value || '').trim()
  if (!text) return []
  if (text.startsWith('[') || text.startsWith('{')) return JSON.parse(text)
  return text.split(/\r?\n/).map(row => row.trim()).filter(Boolean).map((url, order) => ({ url, alt: '', primary: order === 0, order }))
}

function vehiclePayload(input: Record<string, unknown>) {
  const payload: Record<string, unknown> = {}
  for (const [key, raw] of Object.entries(input)) {
    if (!allowedFields.has(key)) continue
    if (booleanFields.has(key)) payload[key] = Boolean(raw)
    else if (numberFields.has(key)) payload[key] = raw === '' || raw == null ? null : Number(raw)
    else if (arrayFields.has(key)) payload[key] = toList(raw)
    else if (jsonFields.has(key)) payload[key] = toImages(raw)
    else payload[key] = String(raw ?? '').trim() || null
  }
  return payload
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin().from('vehicles').select('*').eq('id', params.id).single()
    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin vehicle load error:', error)
    return NextResponse.json({ error: 'Failed to load vehicle' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin().from('vehicles').update(vehiclePayload(await req.json())).eq('id', params.id).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'vehicle.updated', entityType: 'vehicle', entityId: params.id, description: 'Vehicle updated' })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Admin vehicle update error:', error)
    return NextResponse.json({ error: 'Failed to update vehicle' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { error } = await getSupabaseAdmin().from('vehicles').update({ active: false }).eq('id', params.id)
    if (error) throw error
    await logActivity({ req, action: 'vehicle.archived', entityType: 'vehicle', entityId: params.id, description: 'Vehicle archived' })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin vehicle archive error:', error)
    return NextResponse.json({ error: 'Failed to archive vehicle' }, { status: 500 })
  }
}
