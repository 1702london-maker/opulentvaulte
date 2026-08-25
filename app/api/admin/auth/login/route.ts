import { NextRequest, NextResponse } from 'next/server'
import { createSessionToken, SESSION_COOKIE, SESSION_COOKIE_OPTIONS } from '@/lib/session'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const adminPassword = process.env.OPV_ADMIN_PASSWORD

  if (!adminPassword || password !== adminPassword) {
    await new Promise(r => setTimeout(r, 500)) // slow brute force
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = createSessionToken()
  const res = NextResponse.json({ success: true })
  res.cookies.set(SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS)
  return res
}
