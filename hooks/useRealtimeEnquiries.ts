'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export function useRealtimeEnquiries() {
  const router = useRouter()

  useEffect(() => {
    const channel = supabase
      .channel('admin-enquiries')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'enquiries' }, (payload) => {
        if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
          new Notification('New OPV enquiry', {
            body: `${payload.new.full_name || 'New client'} - ${payload.new.service || 'general'}`,
          })
        }
        router.refresh()
      })
      .subscribe()

    if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
      Notification.requestPermission()
    }

    return () => {
      supabase.removeChannel(channel)
    }
  }, [router])
}
