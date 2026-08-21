import { NextResponse } from 'next/server'
import { createPortalRouteClient } from '@/lib/portal-auth'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') || '/portal'

  if (code) {
    await createPortalRouteClient().auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(next, url.origin))
}

