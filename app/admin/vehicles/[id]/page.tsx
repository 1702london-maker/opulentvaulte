import Link from 'next/link'
import { notFound } from 'next/navigation'
import AdminCmsEditor from '@/components/admin/AdminCmsEditor'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function EditVehiclePage({ params }: { params: { id: string } }) {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any).from('vehicles').select('*').eq('id', params.id).maybeSingle()
    : { data: null }
  if (!data) notFound()

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Drive CMS</span>
        <h1>Edit vehicle.</h1>
        <Link href="/admin/vehicles" className="btn-primary">Back to vehicles</Link>
      </div>
      <AdminCmsEditor kind="vehicles" initialData={data} />
    </div>
  )
}
