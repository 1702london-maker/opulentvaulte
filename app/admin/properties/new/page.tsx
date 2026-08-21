import Link from 'next/link'
import AdminCmsEditor from '@/components/admin/AdminCmsEditor'

export default function NewPropertyPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Stays CMS</span>
        <h1>Add property.</h1>
        <Link href="/admin/properties" className="btn-primary">Back to properties</Link>
      </div>
      <AdminCmsEditor kind="properties" initialData={{ active: true, available: true, country: 'United Kingdom', price_currency: 'GBP', price_unit: 'night', designation: 'ovp-managed' }} />
    </div>
  )
}
