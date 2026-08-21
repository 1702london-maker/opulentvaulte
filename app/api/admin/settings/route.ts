import { NextRequest, NextResponse } from 'next/server'
import { logActivity, requireAdmin } from '@/lib/api'
import type { Json } from '@/lib/database.types'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  return NextResponse.json({
    data: {
      resend: Boolean(process.env.RESEND_API_KEY),
      adminKey: Boolean(process.env.OPV_ADMIN_API_KEY),
      supabase: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    },
  })
}

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req)
  if (denied) return denied

  const body = await req.json().catch(() => ({}))
  await logActivity({ req, action: body.action || 'settings.updated', entityType: 'settings', metadata: body as Json })
  return NextResponse.json({ data: { ok: true } })
}
