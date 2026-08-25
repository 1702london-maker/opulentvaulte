import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Admin route protection — block /admin and /api/admin without key
  const isProtected =
    pathname.startsWith('/admin') || pathname.startsWith('/api/admin')

  if (isProtected) {
    const adminKey = process.env.OPV_ADMIN_API_KEY
    const providedKey = req.headers.get('x-opv-admin-key')

    if (!adminKey || providedKey !== adminKey) {
      // UI route — redirect to home instead of JSON error
      if (pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const res = NextResponse.next()

  // Referral cookie tracking
  const ref = req.nextUrl.searchParams.get('ref')?.trim()
  if (ref && /^[a-z0-9_-]{3,64}$/i.test(ref)) {
    res.cookies.set('opv_ref', ref, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days (reduced from 90)
    })
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
