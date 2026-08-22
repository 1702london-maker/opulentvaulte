import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isProtected =
    req.nextUrl.pathname.startsWith('/api/admin') ||
    (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.startsWith('/admin/login'))
  const adminKey = process.env.OPV_ADMIN_API_KEY

  if (isProtected && adminKey && req.headers.get('x-opv-admin-key') !== adminKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = NextResponse.next()
  const ref = req.nextUrl.searchParams.get('ref')?.trim()

  if (ref && /^[a-z0-9_-]{3,64}$/i.test(ref)) {
    res.cookies.set('opv_ref', ref, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 90,
    })
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
}
