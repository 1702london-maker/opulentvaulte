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

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const params = new URL(req.url).searchParams
    let query = getSupabaseAdmin().from('vehicles').select('*', { count: 'exact' }).order('category', { ascending: true }).order('created_at', { ascending: false }).limit(100)
    if (params.get('category')) query = query.eq('category', params.get('category'))
    if (params.get('active')) query = query.eq('active', params.get('active') === 'true')
    const { data, error, count } = await query
    if (error) throw error
    return NextResponse.json({ data, count })
  } catch (error) {
    console.error('Admin vehicles error:', error)
    return NextResponse.json({ error: 'Failed to load vehicles' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const { data, error } = await getSupabaseAdmin().from('vehicles').insert(vehiclePayload(await req.json())).select('*').single()
    if (error) throw error
    await logActivity({ req, action: 'vehicle.created', entityType: 'vehicle', entityId: data.id, description: 'Vehicle created for Opulent Vault Limited' })
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    console.error('Admin vehicle create error:', error)
    return NextResponse.json({ error: 'Failed to create vehicle' }, { status: 500 })
  }
}
