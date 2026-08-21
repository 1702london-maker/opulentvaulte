import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerClient } from '@supabase/auth-helpers-nextjs'
import { getSupabaseAdmin } from './supabase'
import type { Database } from './database.types'

export type PortalClient = {
  id: string
  full_name: string
  email: string
  phone?: string | null
  whatsapp?: string | null
  city?: string | null
  country?: string | null
  preferred_channel?: string | null
  language?: string | null
  membership_tier?: string | null
  membership_status?: string | null
  preferences?: unknown
}

export type PortalAffiliate = {
  id: string
  full_name: string
  email: string
  phone?: string | null
  company?: string | null
  city?: string | null
  country?: string | null
  status?: string | null
  referral_code?: string | null
  commission_rate?: number | null
  total_referrals?: number | null
  total_commission_gbp?: number | null
  paid_commission_gbp?: number | null
}

export function createPortalServerClient() {
  const cookieStore = cookies()
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xersmsnjpeywpwoqzurp.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'missing-anon-key',
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: items => {
          try {
            items.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // Server components cannot set cookies; route handlers can.
          }
        },
      },
    },
  )
}

export function createPortalRouteClient() {
  return createPortalServerClient()
}

export async function getAuthenticatedUser() {
  const supabase = createPortalServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}

export async function requirePortalClient() {
  const user = await getAuthenticatedUser()

  if (!user) {
    redirect('/portal/login')
  }

  const { data, error } = await getSupabaseAdmin()
    .from('clients')
    .select('*')
    .eq('supabase_user_id', user.id)
    .single()

  if (error || !data) {
    redirect('/portal/login?missing=client')
  }

  return { user, client: data as PortalClient }
}

export async function requireAffiliate() {
  const user = await getAuthenticatedUser()

  if (!user) {
    redirect('/affiliate/login')
  }

  const { data, error } = await getSupabaseAdmin()
    .from('affiliates')
    .select('*')
    .eq('supabase_user_id', user.id)
    .single()

  if (error || !data) {
    redirect('/affiliate/login?missing=affiliate')
  }

  return { user, affiliate: data as PortalAffiliate }
}
