import { createHmac, timingSafeEqual } from 'crypto'

const SECRET = process.env.OPV_SESSION_SECRET ?? 'change-me-in-production'
const DURATION = 8 * 60 * 60 * 1000 // 8 hours

export function createSessionToken(): string {
  const expires = Date.now() + DURATION
  const payload = expires.toString()
  const sig = createHmac('sha256', SECRET).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function verifySessionToken(token: string): boolean {
  try {
    const [payload, sig] = token.split('.')
    if (!payload || !sig) return false
    const expected = createHmac('sha256', SECRET).update(payload).digest('base64url')
    const a = Buffer.from(sig)
    const b = Buffer.from(expected)
    if (a.length !== b.length) return false
    if (!timingSafeEqual(a, b)) return false
    const expires = parseInt(payload, 10)
    return Date.now() < expires
  } catch {
    return false
  }
}

export const SESSION_COOKIE = 'opv_admin_session'
export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 8 * 60 * 60,
}
