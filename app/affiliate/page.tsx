import { getSupabaseAdmin } from '@/lib/supabase'
import { requireAffiliate } from '@/lib/portal-auth'
import AffiliateShell from './AffiliateShell'

export default async function AffiliatePage() {
  const { affiliate } = await requireAffiliate()
  const { data: referrals } = await getSupabaseAdmin()
    .from('affiliate_referrals')
    .select('*')
    .eq('affiliate_id', affiliate.id)
    .order('created_at', { ascending: false })

  const unpaid = (referrals || []).reduce((sum: number, referral: any) => sum + (!referral.commission_paid ? Number(referral.commission_gbp || 0) : 0), 0)

  return (
    <AffiliateShell affiliate={affiliate}>
      <div className="grid gap-6 md:grid-cols-4">
        <Stat label="Status" value={affiliate.status || 'Applied'} />
        <Stat label="Referral code" value={affiliate.referral_code || 'Pending'} />
        <Stat label="Referrals" value={String(referrals?.length || affiliate.total_referrals || 0)} />
        <Stat label="Unpaid commission" value={`£${unpaid.toLocaleString()}`} />
      </div>
      <section className="mt-10 border border-[#c8dff0] bg-white p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#4774a8]">Referral pipeline</p>
        <div className="mt-6 grid gap-4">
          {(referrals || []).map((referral: any) => (
            <div className="grid gap-3 border-b border-[#e2edf6] py-5 md:grid-cols-4" key={referral.id}>
              <span>{referral.referred_email || 'Private client'}</span>
              <span className="capitalize text-[#6f879d]">{referral.service || 'general'}</span>
              <span className="capitalize text-[#6f879d]">{referral.status}</span>
              <span className="text-right font-semibold">£{Number(referral.commission_gbp || 0).toLocaleString()}</span>
            </div>
          ))}
          {!referrals?.length && <p className="text-[#6f879d]">No referrals have been attributed to this affiliate account yet.</p>}
        </div>
      </section>
    </AffiliateShell>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#c8dff0] bg-white p-7">
      <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#4774a8]">{label}</p>
      <p className="mt-5 break-words font-serif text-3xl capitalize">{value}</p>
    </div>
  )
}

