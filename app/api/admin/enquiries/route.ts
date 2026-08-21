import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const params = new URL(req.url).searchParams
    const page = Math.max(Number(params.get('page') || 1), 1)
    const pageSize = Math.min(Math.max(Number(params.get('pageSize') || 25), 1), 100)
    const from = (page - 1) * pageSize
    const to = from + pageSize - 1

    let query = db
      .from('enquiries')
      .select('*, clients(id, full_name, email, phone, city, country)', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)

    const status = params.get('status')
    const service = params.get('service')
    const search = params.get('search')
    if (status) query = query.eq('status', status)
    if (service) query = query.eq('service', service)
    if (search) query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%,subject.ilike.%${search}%,message.ilike.%${search}%`)

    const { data, error, count } = await query
    if (error) throw error

    return NextResponse.json({ data, count, page, pageSize })
  } catch (error) {
    console.error('Admin enquiries error:', error)
    return NextResponse.json({ error: 'Failed to load enquiries' }, { status: 500 })
  }
}
