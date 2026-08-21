import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase'
import { AdminCmsActiveToggle } from '@/components/admin/AdminCmsActiveToggle'

export const dynamic = 'force-dynamic'

export default async function AdminPropertiesPage() {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any).from('properties').select('*').order('created_at', { ascending: false }).limit(100)
    : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Stays CMS</span>
        <h1>Properties.</h1>
        <Link href="/admin/properties/new" className="btn-primary">Add property</Link>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>Property</th><th>City</th><th>Type</th><th>Rate</th><th>Status</th><th>Dates</th><th></th></tr>
          </thead>
          <tbody>
            {(data || []).map((property: any) => (
              <tr key={property.id}>
                <td><strong>{property.name}</strong><span>{property.slug}</span></td>
                <td>{property.city}<span>{property.area}</span></td>
                <td>{property.property_type || 'Private stay'}</td>
                <td>{property.price_from_gbp ? `GBP ${property.price_from_gbp}` : 'On request'}</td>
                <td>
                  <span>{property.active ? 'Active' : 'Hidden'}</span>
                  <span>{property.verified ? 'Verified' : 'Unverified'}</span>
                  <AdminCmsActiveToggle kind="properties" id={property.id} active={Boolean(property.active)} />
                </td>
                <td>{Array.isArray(property.blocked_dates) ? `${property.blocked_dates.length} blocked` : 'No blocks'}</td>
                <td><Link href={`/admin/properties/${property.id}`}>Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
