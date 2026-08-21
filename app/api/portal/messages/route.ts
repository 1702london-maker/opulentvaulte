import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = getSupabaseAdmin()
  const { data: client } = await db.from('clients').select('id').eq('supabase_user_id', user.id).single()
  if (!client) return NextResponse.json({ error: 'Client profile not found' }, { status: 404 })

  const { data, error } = await db.from('communications').select('*').eq('client_id', client.id).order('created_at', { ascending: true })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  const {
    data: { user },
  } = await createPortalRouteClient().auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const message = String(body.body || '').trim()
  if (!message) return NextResponse.json({ error: 'Message body is required' }, { status: 400 })

  const db = getSupabaseAdmin()
  const { data: client } = await db.from('clients').select('id, email').eq('supabase_user_id', user.id).single()
  if (!client) return NextResponse.json({ error: 'Client profile not found' }, { status: 404 })

  const { data, error } = await db
    .from('communications')
    .insert({
      client_id: client.id,
      direction: 'inbound',
      channel: 'email',
      from_address: client.email,
      to_address: 'hello@opulentvault.co.uk',
      subject: 'Client portal message',
      body: message,
      status: 'new',
      metadata: { source: 'client_portal' },
    })
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ data }, { status: 201 })
}
