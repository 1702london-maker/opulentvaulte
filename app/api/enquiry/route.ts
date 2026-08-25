import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const ALLOWED_ORIGINS = [
  'https://opulentvault.co.uk',
  'https://www.opulentvault.co.uk',
  'https://opv-sandy.vercel.app',
]

const MAX = { name: 120, email: 254, message: 4000, phone: 80 }

const rateLimitMap = new Map<string, { count: number; ts: number }>()

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const window = 60_000
  const limit = 5
  const entry = rateLimitMap.get(key)
  if (!entry || now - entry.ts > window) {
    rateLimitMap.set(key, { count: 1, ts: now })
    return false
  }
  if (entry.count >= limit) return true
  entry.count++
  return false
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function POST(req: NextRequest) {
  // CSRF — origin check
  const origin = req.headers.get('origin')
  if (process.env.NODE_ENV === 'production') {
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(`enquiry:${ip}`)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const { name, email, phone, service, message, page } = body

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Field length limits
    if (name.length > MAX.name) {
      return NextResponse.json({ error: 'Name is too long' }, { status: 400 })
    }
    if (email.length > MAX.email) {
      return NextResponse.json({ error: 'Email is too long' }, { status: 400 })
    }
    if (message.length > MAX.message) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 })
    }
    if (phone && phone.length > MAX.phone) {
      return NextResponse.json({ error: 'Phone number is too long' }, { status: 400 })
    }

    // Basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey && !supabaseUrl.startsWith('your_')) {
      const { createClient } = await import('@supabase/supabase-js')
      const sb = createClient(supabaseUrl, supabaseKey)
      const { error } = await sb.from('opv_enquiries').insert({
        page,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        service,
        message: message.trim(),
        metadata: { userAgent: req.headers.get('user-agent') },
      })
      if (error) console.error('Supabase error:', error.message)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
