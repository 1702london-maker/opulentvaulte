import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('opv_properties')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, city, area, type, designation, beds, guests, price_from, description, images, chips, verified, available } = body

  const { data, error } = await supabaseAdmin
    .from('opv_properties')
    .insert({ name, city, area, type, designation, beds, guests, price_from, description, images: images ?? [], chips: chips ?? [], verified: verified ?? false, available: available ?? true })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}
