import AdminManagementActions from '@/components/admin/AdminManagementActions'
import AdminManagementFilters from '@/components/admin/AdminManagementFilters'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const tiers = ['access', 'sapphire', 'diamond', 'gold']
const statuses = ['enquiry', 'pending_review', 'invited', 'active', 'paused', 'cancelled']

export default async function AdminMembershipsPage({ searchParams }: { searchParams?: Record<string, string> }) {
  let query = supabaseAdmin
    ? (supabaseAdmin as any).from('memberships').select('*, clients(*)').order('created_at', { ascending: false }).limit(100)
    : null

  if (query && searchParams?.status) query = query.eq('status', searchParams.status)
  if (query && searchParams?.tier) query = query.eq('tier', searchParams.tier)

  const { data } = query ? await query : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Private access</span>
        <h1>Memberships.</h1>
      </div>
      <AdminManagementFilters
        filters={[
          { name: 'status', label: 'Status', options: statuses.map((value) => ({ label: value, value })) },
          { name: 'tier', label: 'Tier', options: tiers.map((value) => ({ label: value, value })) },
        ]}
      />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Tier</th>
              <th>Status</th>
              <th>Guardian</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((member: any) => (
              <tr key={member.id}>
                <td>
                  <strong>{member.clients?.full_name || member.full_name || member.email || 'Member'}</strong>
                  <span>{member.clients?.email || member.email || member.client_id}</span>
                </td>
                <td>{member.tier || 'access'}</td>
                <td>{member.status || 'pending_review'}</td>
                <td>{member.guardian_id || member.assigned_to || 'Unassigned'}</td>
                <td>
                  <AdminManagementActions
                    actions={[
                      { label: 'Approve', endpoint: `/api/admin/memberships/${member.id}`, method: 'PATCH', body: { status: 'active', approved_date: new Date().toISOString() } },
                      {
                        label: 'Upgrade tier',
                        endpoint: `/api/admin/memberships/${member.id}/upgrade`,
                        field: 'tier',
                        options: tiers.map((value) => ({ label: value, value })),
                      },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

