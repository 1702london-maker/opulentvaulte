import Link from 'next/link'
import AdminCmsEditor from '@/components/admin/AdminCmsEditor'

export default function NewVehiclePage() {
  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Drive CMS</span>
        <h1>Add vehicle.</h1>
        <Link href="/admin/vehicles" className="btn-primary">Back to vehicles</Link>
      </div>
      <AdminCmsEditor kind="vehicles" initialData={{ active: true, available: true, chauffeur_available: true, self_drive_available: false, price_on_application: true }} />
    </div>
  )
}
