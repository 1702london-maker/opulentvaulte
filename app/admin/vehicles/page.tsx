import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase'
import { AdminCmsActiveToggle } from '@/components/admin/AdminCmsActiveToggle'

export const dynamic = 'force-dynamic'

function expiringSoon(value: string | null) {
  if (!value) return false
  const days = (new Date(value).getTime() - Date.now()) / 86400000
  return days <= 30
}

type VehicleRow = Record<string, any>

export default async function AdminVehiclesPage() {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any).from('vehicles').select('*').order('category', { ascending: true }).order('created_at', { ascending: false }).limit(100)
    : { data: [] }
  const groups: Record<string, VehicleRow[]> = (data || []).reduce((acc: Record<string, VehicleRow[]>, vehicle: VehicleRow) => {
    const category = vehicle.category || 'Uncategorised fleet'
    acc[category] = acc[category] || []
    acc[category].push(vehicle)
    return acc
  }, {})

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Drive CMS</span>
        <h1>Vehicles.</h1>
        <Link href="/admin/vehicles/new" className="btn-primary">Add vehicle</Link>
      </div>
      <div className="admin-table-wrap">
        {(Object.entries(groups) as [string, VehicleRow[]][]).map(([category, vehicles]) => (
          <section key={category} className="admin-cms-group">
            <div className="admin-cms-group-heading">
              <span className="eyebrow">{category}</span>
              <span>{vehicles.length} vehicle{vehicles.length === 1 ? '' : 's'}</span>
            </div>
            <table className="admin-table">
              <thead>
                <tr><th>Vehicle</th><th>Category</th><th>Base</th><th>Options</th><th>Status</th><th>Compliance</th><th></th></tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle: any) => (
                  <tr key={vehicle.id}>
                    <td><strong>{vehicle.make} {vehicle.model}</strong><span>{vehicle.variant || vehicle.registration}</span></td>
                    <td>{vehicle.category || 'fleet'}<span>{vehicle.sub_category}</span></td>
                    <td>{vehicle.based_at || 'UK'}</td>
                    <td>
                      <span>{vehicle.chauffeur_available ? 'Chauffeur' : 'No chauffeur'}</span>
                      <span>{vehicle.self_drive_available ? 'Self-drive' : 'No self-drive'}</span>
                    </td>
                    <td>
                      <span>{vehicle.active ? 'Active' : 'Hidden'}</span>
                      <span>{vehicle.available ? 'Available' : 'Unavailable'}</span>
                      <AdminCmsActiveToggle kind="vehicles" id={vehicle.id} active={Boolean(vehicle.active)} />
                    </td>
                    <td>
                      <span style={{ color: expiringSoon(vehicle.mot_expiry) ? '#9f1d1d' : undefined }}>MOT {vehicle.mot_expiry || 'not set'}</span>
                      <span style={{ color: expiringSoon(vehicle.insurance_expiry) ? '#9f1d1d' : undefined }}>Insurance {vehicle.insurance_expiry || 'not set'}</span>
                    </td>
                    <td><Link href={`/admin/vehicles/${vehicle.id}`}>Edit</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  )
}
