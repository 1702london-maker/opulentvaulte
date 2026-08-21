import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin, logActivity, requireAdmin } from '@/lib/api'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req)
  if (denied) return denied

  try {
    const db = getSupabaseAdmin()
    const { data: current, error: readError } = await db.from('partners').select('*').eq('id', params.id).single()
    if (readError) throw readError
    const nextValue = !(current.contract_signed || current.contract_active)
    const { data, error } = await db
      .from('partners')
      .update({ contract_signed: nextValue, contract_active: nextValue })
      .eq('id', params.id)
      .select('*')
      .single()
    if (error) throw error
    await logActivity({ req, action: 'partner.contract_toggled', entityType: 'partner', entityId: params.id, metadata: { contract_signed: nextValue } })
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Partner contract error:', error)
    return NextResponse.json({ error: 'Failed to update contract' }, { status: 500 })
  }
}

