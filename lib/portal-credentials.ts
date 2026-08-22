import { getSupabaseAdmin } from './supabase'

const passwordAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!$%'

export function generatePortalPassword(length = 14) {
  const bytes = crypto.getRandomValues(new Uint32Array(length))
  return Array.from(bytes, (value) => passwordAlphabet[value % passwordAlphabet.length]).join('')
}

async function findAuthUserByEmail(email: string) {
  const admin = getSupabaseAdmin()
  const normalized = email.trim().toLowerCase()
  let page = 1

  while (page < 20) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 100 })
    if (error) throw error
    const user = data.users.find((item: any) => item.email?.toLowerCase() === normalized)
    if (user) return user
    if (data.users.length < 100) return null
    page += 1
  }

  return null
}

export async function ensurePasswordUser(input: {
  email: string
  fullName?: string | null
  existingUserId?: string | null
  role: 'client' | 'affiliate'
}) {
  const admin = getSupabaseAdmin()
  const password = generatePortalPassword()
  const email = input.email.trim().toLowerCase()

  if (input.existingUserId) {
    const { data, error } = await admin.auth.admin.updateUserById(input.existingUserId, {
      password,
      email_confirm: true,
      user_metadata: {
        full_name: input.fullName || '',
        portal_role: input.role,
      },
    })
    if (error) throw error
    return { userId: data.user.id, password, created: false }
  }

  const existing = await findAuthUserByEmail(email)
  if (existing) {
    const { data, error } = await admin.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
      user_metadata: {
        full_name: input.fullName || '',
        portal_role: input.role,
      },
    })
    if (error) throw error
    return { userId: data.user.id, password, created: false }
  }

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: input.fullName || '',
      portal_role: input.role,
    },
  })
  if (error) throw error

  return { userId: data.user.id, password, created: true }
}
