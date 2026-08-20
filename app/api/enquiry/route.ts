import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message, page } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey && !supabaseUrl.startsWith('your_')) {
      const { createClient } = await import('@supabase/supabase-js')
      const sb = createClient(supabaseUrl, supabaseKey)
      const { error } = await sb.from('opv_enquiries').insert({
        page, name, email, phone: phone || null, service, message,
        metadata: { userAgent: req.headers.get('user-agent') },
      })
      if (error) console.error('Supabase error:', error)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
