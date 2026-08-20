import Image from 'next/image'
import AffiliateApplicationForm from './AffiliateApplicationForm'
import AffiliateFAQ from './AffiliateFAQ'

const profiles = [
  ['Wealth Managers & Private Bankers', 'UHNW clients who travel extensively, require discretion and expect a standard that most services cannot reach. A natural and frequent fit for every OPV service.', 'M4 18h16M6 15l4-4 3 3 5-8m0 0v5h-5'],
  ['Sports Agents & Management', 'Athletes and public personalities with complex schedules, high profiles and a requirement for security, transport and accommodation that handles the level.', 'm12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.5 7.2 17l.9-5.4-3.9-3.8 5.4-.8L12 3Z'],
  ['Luxury Real Estate Brokers', 'Clients relocating to Manchester, London or Leeds, purchasing investment properties or requiring temporary residence at a standard that matches what they are buying.', 'M4 20V8l8-4 8 4v12M9 20v-6h6v6m3-11 2-1M8 12h.01M16 12h.01'],
  ['Legal, Corporate & Hospitality Professionals', 'Solicitors, accountants, hospitality consultants and senior executive assistants whose clients require everything OPV arranges - often urgently, always discreetly.', 'M9 7V5a3 3 0 0 1 6 0v2h4v12H5V7h4Zm2 0h2V5a1 1 0 0 0-2 0v2Z'],
]

const steps = [
  ['01', 'Apply for the programme', 'Submit an application below. We review every applicant manually, looking at your background, your network and how OPV fits into what you already do. We respond within 48 hours.'],
  ['02', 'Introduce people to OPV', 'You receive a unique referral link, a branded digital introduction card and a concise overview of OPV to share by conversation, email or WhatsApp.'],
  ['03', 'Receive your commission', 'When a referred client books and completes a service, commission is calculated on net service value, tracked transparently and paid by BACS each month.'],
]

const rates = [
  ['Stays', '8%', '12%', 'Lifetime', 'Per night booked'],
  ['Drive', '6%', '10%', 'Lifetime', 'Per day or transfer'],
  ['Eat', '5%', '8%', 'Lifetime', 'Per booking value'],
  ['Shop', '4%', '7%', 'Lifetime', 'Per sourcing value'],
  ['Fly', '3%', '6%', 'Lifetime', 'Per flight segment'],
  ['Yacht', '4%', '7%', 'Lifetime', 'Per charter value'],
  ['Security', '4%', '6%', 'Lifetime', 'Per operational period'],
  ['Concierge packages', '6%', '10%', 'Lifetime', 'On total package value'],
  ['New member referral', '£250 flat', '£500 flat', 'One-time', 'On first completed booking'],
]

const benefits = [
  ['Real-time dashboard', 'Track every referral, conversion and payment in your affiliate portal as bookings complete.'],
  ['Monthly BACS payments', 'No threshold, no delay. Processed on the first of each month for confirmed completions.'],
  ['Lifetime attribution', 'A client you introduce in 2026 earns commission in 2028 with no further action from you.'],
  ['Dedicated account manager', 'A named OPV contact who keeps your affiliate relationship clear and commercially useful.'],
  ['Elite: member-rate access', 'Once Elite status is reached, your own OPV bookings are charged at member rates.'],
  ['Elite: priority introductions', 'We can introduce Elite affiliates to relevant professionals in the OPV network where mutually agreed.'],
]

function LineIcon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function AffiliatesPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top affiliate-page-hero">
        <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=90" alt="Private professional partnership meeting" fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised affiliate-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Referral & Partnership Programme</span>
            <h1 className="page-hero-title">Earn by<br /><em>introducing.</em></h1>
            <p className="page-hero-body">If the people you work with belong in the OPV world, introduce them. You earn commission on every completed service they book - paid monthly, tracked transparently, attributed for life.</p>
            <div className="page-hero-actions">
              <a href="#apply" className="btn-primary">Apply for the programme</a>
              <a href="#rates" className="btn-ghost-light">View commission rates</a>
            </div>
          </div>
        </div>
      </section>

      <section className="affiliate-stats">{[['15%', 'Maximum commission'], ['90', 'Day cookie period'], ['Monthly', 'BACS payout'], ['Lifetime', 'Attribution']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="affiliate-section affiliate-ice">
        <div className="affiliate-container">
          <span className="eyebrow">Who applies</span>
          <h2 className="display-md">The right network. <em>The right fit.</em></h2>
          <p className="body-lg affiliate-intro">OPV approves applications manually. We look for professionals whose network naturally includes people who would use our services - not cold leads, but existing relationships where an introduction makes sense.</p>
          <div className="affiliate-profile-grid">{profiles.map(([title, body, icon]) => <article key={title}><LineIcon path={icon} /><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="affiliate-section affiliate-white">
        <div className="affiliate-container">
          <span className="eyebrow">How it works</span>
          <h2 className="display-md">Three steps. <em>Then it runs itself.</em></h2>
          <div className="affiliate-step-grid">{steps.map(([number, title, body]) => <article key={number}><strong>{number}</strong><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section id="rates" className="affiliate-section affiliate-ice">
        <div className="affiliate-container">
          <span className="eyebrow">Commission structure</span>
          <h2 className="display-md">Standard and <em>Elite.</em></h2>
          <p className="body-lg affiliate-intro">Elite status is automatically applied when you refer 5 or more active clients in a rolling 12-month period. Rates apply to net service value of completed bookings, excluding VAT and third-party costs.</p>
          <p className="affiliate-mono-note">Elite affiliates also receive OPV member-rate access across all services.</p>
          <div className="affiliate-rate-table"><div className="affiliate-rate-head">{['Service', 'Standard commission', 'Elite commission', 'Attribution', 'Notes'].map(h => <span key={h}>{h}</span>)}</div>{rates.map(row => <div className="affiliate-rate-row" key={row[0]}>{row.map((cell, index) => <span className={index === 1 || index === 2 ? 'commission' : ''} key={cell}>{cell}</span>)}</div>)}</div>
          <p className="affiliate-mono-note">Commissions calculated on net service value. Referral attribution is lifetime - if your client returns six months later, you earn.</p>
        </div>
      </section>

      <section className="affiliate-feature affiliate-white">
        <div className="affiliate-feature-image"><Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=90" alt="Professional collaboration in a high-end office" fill style={{ objectFit: 'cover' }} /></div>
        <div className="affiliate-feature-copy">
          <span className="eyebrow">Beyond commission</span>
          <h2 className="display-md">More than a <em>percentage.</em></h2>
          <p>Elite affiliates receive access to OPV services at member rates - the same preferential pricing extended to private clients. In practice, your own stays, travel and experiences are arranged at the same level as the introductions you make.</p>
          <div className="affiliate-benefit-list">{benefits.map(([title, body]) => <div key={title}><CheckIcon /><p><strong>{title}</strong> - {body}</p></div>)}</div>
        </div>
      </section>

      <section className="affiliate-section affiliate-ice">
        <div className="affiliate-container affiliate-faq-wrap">
          <span className="eyebrow">Common questions</span>
          <h2 className="display-md">Straightforward <em>answers.</em></h2>
          <AffiliateFAQ />
        </div>
      </section>

      <section id="apply" className="affiliate-section affiliate-white">
        <div className="affiliate-container affiliate-apply-grid">
          <div>
            <span className="eyebrow">Apply now</span>
            <h2 className="display-md">Join the <em>programme.</em></h2>
            <p className="body-lg">Applications are reviewed within 48 hours. We look for professionals with genuine access to clients who would use OPV - not volume, but fit.</p>
            {['Reviewed within 48 hours', 'No cost to join', 'Commission from your first referral'].map(item => <div className="affiliate-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}
            <div className="affiliate-notice">All application details are treated in confidence. We do not share applicant information.</div>
          </div>
          <AffiliateApplicationForm />
        </div>
      </section>
    </>
  )
}
