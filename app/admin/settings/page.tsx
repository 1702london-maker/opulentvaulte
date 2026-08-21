import AdminManagementActions from '@/components/admin/AdminManagementActions'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

async function count(table: string) {
  if (!supabaseAdmin) return 0
  const { count } = await (supabaseAdmin as any).from(table).select('id', { count: 'exact', head: true })
  return count || 0
}

export default async function AdminSettingsPage() {
  const [staff, clients, enquiries, communications] = await Promise.all([
    supabaseAdmin ? (supabaseAdmin as any).from('staff').select('*').order('created_at', { ascending: false }).limit(50) : Promise.resolve({ data: [] }),
    count('clients'),
    count('enquiries'),
    count('communications'),
  ])

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Console controls</span>
        <h1>Settings.</h1>
      </div>
      <div className="admin-stat-grid">
        <article><span>Clients</span><strong>{clients}</strong></article>
        <article><span>Enquiries</span><strong>{enquiries}</strong></article>
        <article><span>Communications</span><strong>{communications}</strong></article>
        <article><span>Staff</span><strong>{staff.data?.length || 0}</strong></article>
      </div>
      <div className="admin-settings-grid">
        <section>
          <h2>Staff and guardians</h2>
          {(staff.data || []).map((person: any) => (
            <p key={person.id}><strong>{person.full_name || person.email}</strong><span>{person.role || 'staff'}</span></p>
          ))}
        </section>
        <section>
          <h2>Notifications</h2>
          <p>Email routes through Resend when `RESEND_API_KEY` is present.</p>
          <p>WhatsApp handoff stays manual until a provider is connected.</p>
        </section>
        <section>
          <h2>Status panels</h2>
          <p>Membership, affiliate and partner approvals are available from their admin tables.</p>
          <AdminManagementActions actions={[{ label: 'Log settings check', endpoint: '/api/admin/settings', method: 'POST', body: { action: 'settings.checked' } }]} />
        </section>
      </div>
    </div>
  )
}
