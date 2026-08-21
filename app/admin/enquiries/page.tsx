import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminEnquiriesPage() {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any)
        .from('enquiries')
        .select('id, created_at, full_name, email, phone, service, status, message, metadata, page_url')
        .order('created_at', { ascending: false })
        .limit(50)
    : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Inbox</span>
        <h1>Latest enquiries.</h1>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Received</th>
              <th>Client</th>
              <th>Service</th>
              <th>Status</th>
              <th>Brief</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((enquiry: any) => (
              <tr key={enquiry.id}>
                <td>{new Date(enquiry.created_at).toLocaleString('en-GB')}</td>
                <td>
                  <strong>{enquiry.full_name}</strong>
                  <span>{enquiry.email}</span>
                  {enquiry.phone && <span>{enquiry.phone}</span>}
                </td>
                <td>{enquiry.service}</td>
                <td>{enquiry.status}</td>
                <td>{enquiry.message || enquiry.metadata?.message || enquiry.page_url || 'No brief supplied'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
