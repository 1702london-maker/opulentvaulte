import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'opv_admin_session'
const SECRET = process.env.OPV_SESSION_SECRET ?? 'change-me-in-production'

async function verifyToken(token: string): Promise<boolean> {
  try {
    const [payload, sig] = token.split('.')
    if (!payload || !sig) return false
    const encoder = new TextEncoder()
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )
    const expected = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
    const expectedB64 = btoa(String.fromCharCode(...new Uint8Array(expected)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
    if (expectedB64 !== sig) return false
    const expires = parseInt(payload, 10)
    return Date.now() < expires
  } catch {
    return false
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAdminUi = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')
  const isAdminApi = pathname.startsWith('/api/admin')

  if (isAdminUi || isAdminApi) {
    const token = req.cookies.get(SESSION_COOKIE)?.value
    const valid = token ? await verifyToken(token) : false

    if (!valid) {
      if (isAdminApi) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const loginUrl = new URL('/admin/login', req.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
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
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
