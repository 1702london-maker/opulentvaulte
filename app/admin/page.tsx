import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

async function getCount(table: string) {
  if (!supabaseAdmin) return 0
  const { count } = await (supabaseAdmin as any)
    .from(table)
    .select('id', { count: 'exact', head: true })
  return count || 0
}

export default async function AdminDashboardPage() {
  const [enquiries, clients, subscribers, bookings] = await Promise.all([
    getCount('enquiries'),
    getCount('clients'),
    getCount('newsletter_subscribers'),
    getCount('bookings'),
  ])

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Live console</span>
        <h1>OPV operations.</h1>
        <Link href="/admin/enquiries" className="btn-primary">View enquiries</Link>
      </div>
      <div className="admin-stat-grid">
        {[
          ['Enquiries', enquiries],
          ['Clients', clients],
          ['Subscribers', subscribers],
          ['Bookings', bookings],
        ].map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </div>
  )
}
