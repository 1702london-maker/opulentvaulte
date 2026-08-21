import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isAdminApi = req.nextUrl.pathname.startsWith('/api/admin')
  const adminKey = process.env.OPV_ADMIN_API_KEY

  if (isAdminApi && adminKey && req.headers.get('x-opv-admin-key') !== adminKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/admin/:path*'],
}
