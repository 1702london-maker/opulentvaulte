import { NextRequest, NextResponse } from 'next/server'
import type { EnquiryService, Json } from './database.types'
import { getSupabaseAdmin } from './supabase'
export { getSupabaseAdmin }

export const allowedServices: EnquiryService[] = [
  'stays',
  'drive',
  'eat',
  'shop',
  'fly',
  'yacht',
  'security',
  'membership',
  'affiliates',
  'partners',
  'careers',
  'newsletter',
  'general',
  'press',
]

export const priorityByService: Record<EnquiryService, number> = {
  security: 1,
  fly: 1,
  membership: 1,
  yacht: 2,
  stays: 2,
  drive: 2,
  eat: 3,
  shop: 3,
  general: 3,
  press: 3,
  affiliates: 4,
  partners: 4,
  careers: 4,
  newsletter: 5,
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

export function normaliseService(value: unknown): EnquiryService {
  const raw = String(value || 'general').toLowerCase().trim()
  const service = raw
    .replace(/not sure.*/, 'general')
    .replace(/something else.*/, 'general')
    .replace(/^affiliate.*/, 'affiliates')
    .replace(/^partner.*/, 'partners')
    .replace(/^career.*/, 'careers')
    .replace(/^press.*/, 'press')
    .replace(/^newsletter.*/, 'newsletter')

  return allowedServices.includes(service as EnquiryService) ? (service as EnquiryService) : 'general'
}

export function getIp(req: NextRequest) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || null
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://opulentvault.co.uk').replace(/\/$/, '')
}

export function isEmail(value: string) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
}

export async function logActivity(input: {
  req?: NextRequest
  actorEmail?: string | null
  action: string
  entityType: string
  entityId?: string | null
  description?: string | null
  metadata?: Json
}) {
  const db = getSupabaseAdmin()
  await db.from('activity_log').insert({
    actor_type: input.actorEmail ? 'staff' : 'system',
    actor_email: input.actorEmail || null,
    action: input.action,
    entity_type: input.entityType,
    entity_id: input.entityId || null,
    description: input.description || null,
    metadata: input.metadata || {},
    ip_address: input.req ? getIp(input.req) : null,
  })
}

export function adminAllowed(req: NextRequest) {
  const key = process.env.OPV_ADMIN_API_KEY
  if (!key) return true
  return req.headers.get('x-opv-admin-key') === key
}

export function requireAdmin(req: NextRequest) {
  if (!adminAllowed(req)) return jsonError('Unauthorized', 401)
  return null
}

export function cleanString(value: unknown) {
  const text = String(value ?? '').trim()
  return text || null
}

export async function upsertClient(input: {
  fullName: string
  email: string
  phone?: string | null
  source?: string | null
  metadata?: Json
}) {
  const db = getSupabaseAdmin()
  const { data: existing, error: existingError } = await db
    .from('clients')
    .select('id, phone')
    .eq('email', input.email)
    .maybeSingle()

  if (existingError) throw existingError

  if (existing?.id) {
    const update: Record<string, unknown> = {
      full_name: input.fullName,
      source: input.source || 'website',
    }
    if (input.phone) update.phone = input.phone

    await db.from('clients').update(update).eq('id', existing.id)
    return existing.id as string
  }

  const { data, error } = await db
    .from('clients')
    .insert({
      full_name: input.fullName,
      email: input.email,
      phone: input.phone || null,
      source: input.source || 'website',
      preferences: input.metadata || {},
    })
    .select('id')
    .single()

  if (error) throw error
  return data.id as string
}
