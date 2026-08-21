import Link from 'next/link'
import { notFound } from 'next/navigation'
import AdminCmsEditor from '@/components/admin/AdminCmsEditor'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function EditPropertyPage({ params }: { params: { id: string } }) {
  const { data } = supabaseAdmin
    ? await (supabaseAdmin as any).from('properties').select('*').eq('id', params.id).maybeSingle()
    : { data: null }
  if (!data) notFound()

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Stays CMS</span>
        <h1>Edit property.</h1>
        <Link href="/admin/properties" className="btn-primary">Back to properties</Link>
      </div>
      <AdminCmsEditor kind="properties" initialData={data} />
    </div>
  )
}
