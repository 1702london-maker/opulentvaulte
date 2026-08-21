import AdminManagementActions from '@/components/admin/AdminManagementActions'
import AdminManagementFilters from '@/components/admin/AdminManagementFilters'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const statuses = ['applied', 'under_review', 'approved', 'active', 'suspended', 'rejected']
const categories = ['property', 'vehicle', 'dining', 'aviation', 'yacht', 'security', 'retail', 'other']

export default async function AdminPartnersPage({ searchParams }: { searchParams?: Record<string, string> }) {
  let query = supabaseAdmin
    ? (supabaseAdmin as any).from('partners').select('*').order('created_at', { ascending: false }).limit(100)
    : null
  if (query && searchParams?.status) query = query.eq('status', searchParams.status)
  if (query && searchParams?.category) query = query.eq('category', searchParams.category)
  const { data } = query ? await query : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Supplier network</span>
        <h1>Partners.</h1>
      </div>
      <AdminManagementFilters
        filters={[
          { name: 'status', label: 'Status', options: statuses.map((value) => ({ label: value, value })) },
          { name: 'category', label: 'Category', options: categories.map((value) => ({ label: value, value })) },
        ]}
      />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Partner</th>
              <th>Category</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Contract</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((partner: any) => (
              <tr key={partner.id}>
                <td>
                  <strong>{partner.company_name || partner.name || partner.email}</strong>
                  <span>{partner.contact_name || partner.email || partner.phone}</span>
                </td>
                <td>{partner.category || 'other'}</td>
                <td>{partner.status || 'applied'}</td>
                <td>{partner.rating || 'Not rated'}</td>
                <td>{partner.contract_signed || partner.contract_active ? 'Signed' : 'Pending'}</td>
                <td>
                  <AdminManagementActions
                    actions={[
                      { label: 'Approve', endpoint: `/api/admin/partners/${partner.id}`, method: 'PATCH', body: { status: 'approved' } },
                      { label: 'Activate', endpoint: `/api/admin/partners/${partner.id}`, method: 'PATCH', body: { status: 'active' } },
                      { label: 'Rating', endpoint: `/api/admin/partners/${partner.id}`, method: 'PATCH', prompt: 'Rating 1-5', field: 'rating' },
                      { label: 'Toggle contract', endpoint: `/api/admin/partners/${partner.id}/contract` },
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

