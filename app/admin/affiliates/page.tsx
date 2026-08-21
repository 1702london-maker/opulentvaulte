import AdminManagementActions from '@/components/admin/AdminManagementActions'
import AdminManagementFilters from '@/components/admin/AdminManagementFilters'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const statuses = ['applied', 'approved', 'active', 'suspended', 'elite', 'rejected']

export default async function AdminAffiliatesPage({ searchParams }: { searchParams?: Record<string, string> }) {
  let query = supabaseAdmin
    ? (supabaseAdmin as any).from('affiliates').select('*').order('created_at', { ascending: false }).limit(100)
    : null
  if (query && searchParams?.status) query = query.eq('status', searchParams.status)

  const [{ data }, referrals] = await Promise.all([
    query ? query : Promise.resolve({ data: [] }),
    supabaseAdmin ? (supabaseAdmin as any).from('affiliate_referrals').select('*').limit(500) : Promise.resolve({ data: [] }),
  ])

  const referralRows = referrals.data || []

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Growth circle</span>
        <h1>Affiliates.</h1>
        <a className="btn-primary" href="/api/admin/affiliates/payouts.csv">Export payout CSV</a>
      </div>
      <AdminManagementFilters filters={[{ name: 'status', label: 'Status', options: statuses.map((value) => ({ label: value, value })) }]} />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Affiliate</th>
              <th>Status</th>
              <th>Code</th>
              <th>Referrals</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((affiliate: any) => {
              const related = referralRows.filter((row: any) => row.affiliate_id === affiliate.id)
              return (
                <tr key={affiliate.id}>
                  <td>
                    <strong>{affiliate.full_name || affiliate.name || affiliate.email}</strong>
                    <span>{affiliate.email}</span>
                  </td>
                  <td>{affiliate.status || 'applied'}</td>
                  <td>{affiliate.referral_code || 'Pending'}</td>
                  <td>{related.length} referral{related.length === 1 ? '' : 's'}</td>
                  <td>
                    <AdminManagementActions
                      actions={[
                        { label: 'Approve', endpoint: `/api/admin/affiliates/${affiliate.id}/approve` },
                        { label: 'Reject', endpoint: `/api/admin/affiliates/${affiliate.id}`, method: 'PATCH', body: { status: 'rejected' } },
                        { label: 'Activate', endpoint: `/api/admin/affiliates/${affiliate.id}`, method: 'PATCH', body: { status: 'active' } },
                      ]}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

