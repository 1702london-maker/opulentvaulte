'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AdminLogout() {
  const router = useRouter()

  async function logout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button type="button" className="admin-logout" onClick={logout}>
      Sign out
    </button>
  )
}
