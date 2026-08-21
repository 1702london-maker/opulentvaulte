import { supabaseAdmin } from '@/lib/supabase'
import AnalyticsCharts from './AnalyticsCharts'

export const dynamic = 'force-dynamic'

type AnyRow = Record<string, any>

function monthKey(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })
}

function lastMonths(count = 12) {
  const now = new Date()
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - (count - index - 1), 1)
    return date.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })
  })
}

function countBy(rows: AnyRow[], key: string, fallback = 'Unknown') {
  return rows.reduce((acc, row) => {
    const label = String(row[key] || fallback)
    acc[label] = (acc[label] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

function toRows(record: Record<string, number>, label: string, value: string) {
  return Object.entries(record).map(([name, count]) => ({ [label]: name, [value]: count }))
}

async function fetchRows(table: string, select = '*') {
  if (!supabaseAdmin) return []
  const { data, error } = await (supabaseAdmin as any).from(table).select(select).limit(1000)
  if (error) {
    console.error(`Analytics ${table} error:`, error)
    return []
  }
  return (data || []) as AnyRow[]
}

export default async function AdminAnalyticsPage() {
  const [enquiries, bookings, clients, memberships, referrals, affiliates] = await Promise.all([
    fetchRows('enquiries', 'id, created_at, service, status, first_response_at, converted_to_booking, metadata, utm_source, referrer'),
    fetchRows('bookings', 'id, created_at, service, status, total_amount, quoted_amount'),
    fetchRows('clients', 'id, created_at'),
    fetchRows('memberships', 'id, created_at, tier, status'),
    fetchRows('affiliate_referrals', 'id, created_at, affiliate_id, commission_gbp, commission_paid'),
    fetchRows('affiliates', 'id, full_name, email, total_commission_gbp'),
  ])

  const monthLabels = lastMonths()
  const enquiryMonths = Object.fromEntries(monthLabels.map((month) => [month, 0]))
  enquiries.forEach((row) => {
    const key = monthKey(row.created_at)
    if (key in enquiryMonths) enquiryMonths[key] += 1
  })

  const revenueMonths = Object.fromEntries(monthLabels.map((month) => [month, 0]))
  bookings.forEach((row) => {
    const key = monthKey(row.created_at)
    if (key in revenueMonths) revenueMonths[key] += Number(row.total_amount || row.quoted_amount || 0)
  })

  const clientMonths = Object.fromEntries(monthLabels.map((month) => [month, 0]))
  clients.forEach((row) => {
    const key = monthKey(row.created_at)
    if (key in clientMonths) clientMonths[key] += 1
  })

  const referralCounts = enquiries.reduce((acc, row) => {
    const source = row.utm_source || row.metadata?.utm_source || row.referrer || 'Direct'
    acc[source] = (acc[source] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const affiliateNames = Object.fromEntries(affiliates.map((item) => [item.id, item.full_name || item.email || 'Affiliate']))
  const affiliateRows = referrals.reduce((acc, row) => {
    const name = affiliateNames[row.affiliate_id] || 'Affiliate'
    acc[name] = (acc[name] || 0) + Number(row.commission_gbp || 0)
    return acc
  }, {} as Record<string, number>)

  const converted = enquiries.filter((item) => item.converted_to_booking).length
  const responseRows = enquiries.filter((item) => item.first_response_at).map((item) => {
    const created = new Date(item.created_at).getTime()
    const first = new Date(item.first_response_at).getTime()
    return Math.max(0, Math.round((first - created) / 60000))
  })
  const avgResponse = responseRows.length
    ? Math.round(responseRows.reduce((sum, item) => sum + item, 0) / responseRows.length)
    : 0

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Analytics</span>
        <h1>Performance overview.</h1>
      </div>

      <div className="admin-stat-grid">
        <article><span>Total enquiries</span><strong>{enquiries.length}</strong></article>
        <article><span>Conversion rate</span><strong>{enquiries.length ? Math.round((converted / enquiries.length) * 100) : 0}%</strong></article>
        <article><span>Average response</span><strong>{avgResponse}m</strong></article>
        <article><span>Revenue tracked</span><strong>£{bookings.reduce((sum, item) => sum + Number(item.total_amount || item.quoted_amount || 0), 0).toLocaleString('en-GB')}</strong></article>
      </div>

      <AnalyticsCharts
        serviceRows={toRows(countBy(enquiries, 'service'), 'service', 'enquiries')}
        monthRows={Object.entries(enquiryMonths).map(([month, count]) => ({ month, enquiries: count }))}
        revenueRows={Object.entries(revenueMonths).map(([month, revenue]) => ({ month, revenue }))}
        clientRows={Object.entries(clientMonths).map(([month, count]) => ({ month, clients: count }))}
        membershipRows={toRows(countBy(memberships, 'tier'), 'tier', 'members')}
        referralRows={Object.entries(referralCounts).slice(0, 8).map(([source, count]) => ({ source, enquiries: count }))}
        affiliateRows={Object.entries(affiliateRows).slice(0, 5).map(([affiliate, commission]) => ({ affiliate, commission }))}
      />
    </div>
  )
}
