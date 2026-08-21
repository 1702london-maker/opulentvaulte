import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

async function createEmptyLeg(formData: FormData) {
  'use server'
  if (!supabaseAdmin) return
  await (supabaseAdmin as any).from('empty_legs').insert({
    departure_iata: String(formData.get('departure_iata') || '').toUpperCase(),
    arrival_iata: String(formData.get('arrival_iata') || '').toUpperCase(),
    departure_city: String(formData.get('departure_city') || ''),
    arrival_city: String(formData.get('arrival_city') || ''),
    date_from: String(formData.get('date_from') || ''),
    date_to: String(formData.get('date_to') || '') || null,
    aircraft_type: String(formData.get('aircraft_type') || ''),
    max_passengers: Number(formData.get('max_passengers') || 0) || null,
    estimated_saving_pct: Number(formData.get('estimated_saving_pct') || 0) || null,
    price_from_gbp: Number(formData.get('price_from_gbp') || 0) || null,
    operator: String(formData.get('operator') || ''),
    notes: String(formData.get('notes') || ''),
    available: true,
  })
  revalidatePath('/admin/empty-legs')
  revalidatePath('/fly')
}

async function toggleEmptyLeg(formData: FormData) {
  'use server'
  if (!supabaseAdmin) return
  await (supabaseAdmin as any)
    .from('empty_legs')
    .update({ available: formData.get('available') !== 'true', updated_at: new Date().toISOString() })
    .eq('id', String(formData.get('id') || ''))
  revalidatePath('/admin/empty-legs')
  revalidatePath('/fly')
}

async function deleteEmptyLeg(formData: FormData) {
  'use server'
  if (!supabaseAdmin) return
  await (supabaseAdmin as any).from('empty_legs').delete().eq('id', String(formData.get('id') || ''))
  revalidatePath('/admin/empty-legs')
  revalidatePath('/fly')
}

export default async function EmptyLegsAdminPage() {
  const { data: legs } = supabaseAdmin
    ? await (supabaseAdmin as any)
        .from('empty_legs')
        .select('*')
        .order('date_from', { ascending: true })
    : { data: [] }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <span className="eyebrow">Aviation CMS</span>
        <h1>Empty legs.</h1>
      </div>

      <form action={createEmptyLeg} className="admin-form-grid">
        <input name="departure_iata" placeholder="Departure IATA" required maxLength={4} />
        <input name="arrival_iata" placeholder="Arrival IATA" required maxLength={4} />
        <input name="departure_city" placeholder="Departure city" />
        <input name="arrival_city" placeholder="Arrival city" />
        <input name="date_from" type="date" required />
        <input name="date_to" type="date" />
        <input name="aircraft_type" placeholder="Aircraft type" />
        <input name="max_passengers" type="number" placeholder="Passengers" />
        <input name="estimated_saving_pct" type="number" placeholder="Saving %" />
        <input name="price_from_gbp" type="number" step="0.01" placeholder="Price from GBP" />
        <input name="operator" placeholder="Operator" />
        <textarea name="notes" placeholder="Notes" />
        <button className="btn-primary" type="submit">Add empty leg</button>
      </form>

      <div className="admin-table">
        <div className="admin-table-row admin-table-head">
          <span>Route</span><span>Date</span><span>Aircraft</span><span>Seats</span><span>Price</span><span>Status</span><span>Actions</span>
        </div>
        {(legs || []).map((leg: any) => (
          <div className="admin-table-row" key={leg.id}>
            <span>{leg.departure_iata} {'->'} {leg.arrival_iata}</span>
            <span>{leg.date_from}{leg.date_to ? ` - ${leg.date_to}` : ''}</span>
            <span>{leg.aircraft_type || 'Aircraft TBC'}</span>
            <span>{leg.max_passengers || '-'}</span>
            <span>{leg.price_from_gbp ? `£${Number(leg.price_from_gbp).toLocaleString('en-GB')}` : 'POA'}</span>
            <span>{leg.available ? 'Live' : 'Hidden'}</span>
            <span className="admin-row-actions">
              <form action={toggleEmptyLeg}>
                <input type="hidden" name="id" value={leg.id} />
                <input type="hidden" name="available" value={String(leg.available)} />
                <button type="submit">{leg.available ? 'Hide' : 'Publish'}</button>
              </form>
              <form action={deleteEmptyLeg}>
                <input type="hidden" name="id" value={leg.id} />
                <button type="submit">Delete</button>
              </form>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
