import AdminManagementCompose from '@/components/admin/AdminManagementCompose'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminCommunicationsPage() {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any).from('communications').select('*, clients(*), enquiries(*)').order('created_at', { ascending: false }).limit(100)
    : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Client record</span>
        <h1>Communications.</h1>
      </div>
      <AdminManagementCompose />
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Direction</th>
              <th>Channel</th>
              <th>Recipient</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((row: any) => (
              <tr key={row.id}>
                <td>{new Date(row.created_at).toLocaleString('en-GB')}</td>
                <td>{row.direction}</td>
                <td>{row.channel}</td>
                <td>{row.to_address || row.clients?.email || row.enquiries?.email || 'Internal'}</td>
                <td>{row.subject || 'No subject'}</td>
                <td>{row.status || (row.delivered ? 'delivered' : 'logged')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

