import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MembershipEnquiryForm from './MembershipEnquiryForm'

export const metadata: Metadata = {
  title: 'Membership | OPV',
  description: 'OPV membership tiers for private concierge clients of Opulent Vault Limited.',
}

const gold = '#B8952A'

const why = [
  ['You are known', 'From the first arrangement, your guardian builds a picture of your preferences, your schedule and the things that matter. By the second arrangement, you do not repeat yourself. By the third, you do not need to explain.'],
  ['You are prioritised', 'When availability is limited - a property, an aircraft, a table - members are contacted first. Off-market access that never reaches the public listing is presented to members as standard.'],
  ['You pay less', "Member pricing applies across all services. The preferential rate covers every arrangement - not just the ones where it's advertised. Over the course of a year, the saving is significant."],
  ['You are protected', 'A named guardian is accountable for every arrangement. Not a team. A person. If something needs fixing, you know exactly who is fixing it - and they know your situation without being briefed again.'],
]

const tiers = [
  {
    key: 'access',
    badge: 'Access',
    name: 'Access',
    copy: 'For first-time clients and occasional use. No commitment, no minimum. The OPV service without a formal membership arrangement.',
    features: ['Access to all OPV services', 'Standard concierge team response', 'Individual service pricing', 'Single invoice per arrangement', 'Standard property and vehicle availability', '2-hour email response'],
    price: 'Standard service rates. No membership fee.',
    cta: ['Start with Access ->', '/contact'],
  },
  {
    key: 'sapphire',
    badge: 'Sapphire',
    flag: 'Most Popular',
    priceLabel: 'Application only',
    name: 'Sapphire',
    copy: 'For regular clients who use OPV across multiple services. A named guardian, preferential pricing and priority access to availability.',
    features: ['Named personal guardian - your single point of contact', 'Preferential pricing across all services (typically 8-15% reduction)', 'Priority access to new property and vehicle listings', 'Off-market properties presented before public release', '30-minute response guarantee - any channel', 'Same-day arrangement capability for all services', 'Preferred status at OPV dining partners', 'Monthly account summary', 'One consolidated monthly invoice (if preferred)'],
    excluded: ['Dedicated 24h emergency line (Diamond+)', 'Unlimited concierge requests (Diamond+)'],
    price: 'By approved application',
    note: 'Indicative Sapphire retainers begin from £250/month. No payment is taken online.',
    cta: ['Apply for Sapphire ->', '#apply'],
  },
  {
    key: 'diamond',
    badge: 'Diamond',
    priceLabel: 'Application only',
    name: 'Diamond',
    copy: 'For high-frequency clients and principals who require OPV as a constant rather than an occasional arrangement. Unlimited access, maximum priority.',
    features: ['Everything in Sapphire', 'Dedicated 24-hour direct line to guardian', 'Unlimited concierge requests - no monthly cap', 'Maximum priority on all availability', 'Proactive briefings - guardian anticipates needs without being asked', 'Security pre-briefing included on travel arrangements', 'Aviation empty leg alerts - first notification', 'Quarterly in-person review with OPV director', 'Corporate account capability - multiple user profiles', 'NDA as standard across all engagements', "White-glove property arrivals - prepared to guardian's brief, not standard checklist"],
    excluded: ['Global network access (Gold)', 'Founding member status (Gold)'],
    price: 'By approved application',
    note: 'Indicative Diamond retainers begin from £750/month. Payment terms are agreed privately.',
    cta: ['Apply for Diamond ->', '#apply'],
  },
  {
    key: 'gold',
    badge: 'Gold',
    priceLabel: 'By invitation',
    name: 'Gold',
    copy: 'The highest tier. Extended by invitation to clients whose relationship with OPV operates at the level where the service becomes entirely invisible. Everything is anticipated. Nothing is chased.',
    features: ['Everything in Diamond', 'Invitation-only status - Gold is not applied for, it is offered', 'Founding member recognition on the OPV client record', 'Global network access - OPV arranges on your behalf in cities beyond Manchester, London and Leeds', 'Dedicated guardian pair - primary and secondary, available simultaneously', 'Zero-notice arrangement - no lead time requirements across any service', 'Personal security pre-assessment on every international trip', 'Annual private client dinner - hosted by OPV directors', 'Bespoke pricing structure - negotiated individually', 'Direct line to OPV director - not the concierge team'],
    availability: 'Gold membership is extended to a maximum of 50 clients globally at any one time. Current availability is limited.',
    price: 'By arrangement',
    note: 'Terms discussed privately with the OPV director.',
    cta: ['Express interest in Gold ->', '#apply'],
  },
]

const comparison = [
  ['Access to all OPV services', true, true, true, true],
  ['Named personal guardian', false, true, true, true],
  ['Preferential pricing', false, true, true, true],
  ['Off-market property access', false, true, true, true],
  ['Priority availability', false, true, true, true],
  ['30-minute response guarantee', false, true, true, true],
  ['Same-day arrangement', false, true, true, true],
  ['Dining partner preferred status', false, true, true, true],
  ['Monthly account summary', false, true, true, true],
  ['Consolidated monthly invoice', false, true, true, true],
  ['24-hour direct guardian line', false, false, true, true],
  ['Unlimited concierge requests', false, false, true, true],
  ['Proactive guardian briefings', false, false, true, true],
  ['Security pre-briefing on travel', false, false, true, true],
  ['Empty leg first notification', false, false, true, true],
  ['Quarterly director review', false, false, true, true],
  ['Corporate account - multi-user', false, false, true, true],
  ['NDA standard on all engagements', false, false, true, true],
  ['White-glove property arrivals', false, false, true, true],
  ['Invitation-only status', false, false, false, true],
  ['Global network access', false, false, false, true],
  ['Dual guardian pair', false, false, false, true],
  ['Zero-notice arrangement', false, false, false, true],
  ['Personal security pre-assessment', false, false, false, true],
  ['Annual private client dinner', false, false, false, true],
  ['Direct line to OPV director', false, false, false, true],
  ['Bespoke pricing structure', false, false, false, true],
  ['Maximum 50 members globally', false, false, false, true],
]

const guardianRows = [
  ['Single point of accountability', 'Your guardian is responsible for every arrangement. Not the team - the person.'],
  ['Institutional knowledge of you', 'From the second arrangement, they know your preferences without asking.'],
  ['Brief once, never repeat', 'Preferences, standards and non-negotiables are logged and applied automatically.'],
  ['Available when it matters', 'Not office hours. The hours when arrangements actually need to be made.'],
]

const faq = [
  ['Is there a joining fee?', 'No. There is no joining fee for Sapphire or Diamond. Membership begins with the first month fee. Gold terms are discussed individually.'],
  ['Can I change tiers?', 'Yes. You can upgrade at any time - the change takes effect immediately. To downgrade, 30 days notice is required. You remain on the higher tier during the notice period.'],
  ['Can I cancel?', 'Yes. Sapphire and Diamond memberships can be cancelled with 30 days written notice to hello@opulentvault.co.uk. Annual memberships are non-refundable after the first 30 days. Gold terms are agreed individually.'],
  ['Can a company hold a membership?', 'Yes. Diamond and Gold tiers include corporate account capability - multiple user profiles under one membership, with individual billing profiles where required. Sapphire can be structured as a corporate account on request.'],
  ['What happens to my guardian if they leave OPV?', 'Continuity of service is our responsibility. If your guardian changes for any reason, you are introduced to your new guardian personally. Your brief, your preferences and your history transfer completely.'],
  ['Is the pricing fixed or can it change?', 'Membership pricing is fixed for 12 months from the date of joining. We give 90 days notice of any pricing changes. Annual memberships are locked at the agreed rate for the full year.'],
  ["What does 'by invitation' mean for Gold?", 'Gold membership is offered by the OPV director to clients whose frequency and level of engagement make the Gold standard the right fit. You can express interest and the director will be in touch if appropriate.'],
  ['How does the 30-minute response guarantee work?', 'For Sapphire members and above, we guarantee a response - by a person, not an automated acknowledgement - within 30 minutes of any contact, by any channel, at any hour.'],
]

function Check({ goldCheck = false, invert = false }: { goldCheck?: boolean; invert?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="membership-check" style={{ color: goldCheck ? gold : invert ? '#FFFFFF' : 'var(--sapphire)' }}>
      <path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MembershipPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top membership-page-hero">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1800&q=90"
          alt="Private members lounge prepared for OPV membership"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised membership-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Membership</span>
            <h1 className="page-hero-title">Access at the level <em>you require.</em></h1>
            <p className="page-hero-body">OPV membership is not a subscription to a service. It is the relationship that makes every arrangement faster, more personal and more precise. Four tiers. Genuine differences between them. No upselling once you are in.</p>
            <div className="page-hero-actions">
              <a href="#tiers" className="btn-primary">View membership tiers</a>
              <Link href="/contact" className="btn-ghost-light">Speak to the team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-section membership-white">
        <div className="membership-container">
          <span className="eyebrow">Why it matters</span>
          <h2>The difference membership <em>makes.</em></h2>
          <div className="membership-why-grid">
            {why.map(([title, copy]) => <article key={title}><i /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="tiers" className="membership-section membership-ice">
        <div className="membership-container membership-centered">
          <span className="eyebrow">Membership tiers</span>
          <h2>Four tiers. <em>Real differences.</em></h2>
          <p>Each tier is designed for a different level of engagement with OPV. The differences are genuine - not cosmetic. Choose the tier that matches how you intend to use the service.</p>
        </div>
        <div className="membership-tier-grid">
          {tiers.map(tier => {
            const diamond = tier.key === 'diamond'
            const isGold = tier.key === 'gold'
            return (
              <article key={tier.key} className={`membership-tier-card ${tier.key}`} style={isGold ? { borderColor: gold } : undefined}>
                {tier.flag && <div className="membership-tier-flag">{tier.flag}</div>}
                {isGold && <div className="membership-gold-ribbon">Gold</div>}
                <div className="membership-tier-top">
                  <span style={isGold ? { borderColor: gold, color: gold } : undefined}>{tier.badge}</span>
                  {tier.priceLabel && <small style={isGold ? { color: gold } : undefined}>{tier.priceLabel}</small>}
                </div>
                <h3>{tier.name}</h3>
                <i className="membership-tier-line" style={isGold ? { backgroundColor: gold } : undefined} />
                <p>{tier.copy}</p>
                <div className="membership-feature-list">
                  {tier.features.map(feature => <div key={feature}><Check goldCheck={isGold} invert={diamond} /><span>{feature}</span></div>)}
                </div>
                {tier.excluded && <div className="membership-excluded">{tier.excluded.map(item => <p key={item}>- {item}</p>)}</div>}
                {tier.availability && <div className="membership-availability" style={{ borderColor: 'rgba(184,149,42,0.3)' }}><span style={{ color: gold }}>Availability</span><p>{tier.availability}</p></div>}
                <div className="membership-price">
                  <small>Membership</small>
                  <strong style={isGold ? { color: gold } : undefined}>{tier.price}</strong>
                  {tier.note && <p>{tier.note}</p>}
                </div>
                <Link href={tier.cta[1]} className={diamond ? 'membership-diamond-cta' : 'btn-primary'} style={isGold ? { backgroundColor: gold } : undefined}>{tier.cta[0]}</Link>
              </article>
            )
          })}
        </div>
      </section>

      <section className="membership-section membership-white">
        <div className="membership-container">
          <span className="eyebrow">Full comparison</span>
          <h2>Every benefit. <em>Side by side.</em></h2>
          <div className="membership-table-wrap">
            <table className="membership-table">
              <thead><tr><th>Benefit</th><th>Access</th><th>Sapphire</th><th>Diamond</th><th style={{ color: gold }}>Gold</th></tr></thead>
              <tbody>
                {comparison.map(([benefit, access, sapphire, diamond, goldCell]) => (
                  <tr key={String(benefit)}>
                    <td>{benefit}</td>
                    {[access, sapphire, diamond, goldCell].map((value, index) => <td key={index}>{value ? <Check goldCheck={index === 3} /> : <span>-</span>}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="membership-guardian">
        <div className="membership-guardian-copy">
          <span className="eyebrow">Your guardian</span>
          <h2>One person. <em>Everything handled.</em></h2>
          <p>From Sapphire tier upwards, you are assigned a named guardian. This is not a team. It is not a rotation. It is one person who becomes expert in you - your preferences, your schedule, your standard and the things you will not compromise on.</p>
          <p>The guardian handles every arrangement. They brief every supplier. They absorb every complication. When something does not go to plan - and occasionally something will not - they resolve it before you know it existed.</p>
          <p>At Diamond tier, the guardian is available around the clock on a direct line. At Gold, there is a primary and secondary guardian simultaneously - so the knowledge of your brief is never dependent on one person being available.</p>
          <div className="membership-guardian-list">{guardianRows.map(([title, copy]) => <div key={title}><Check /><span><strong>{title}</strong><small>{copy}</small></span></div>)}</div>
        </div>
        <div className="membership-guardian-image">
          <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=90" alt="Private concierge desk with architectural detail" fill sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>

      <section className="membership-section membership-white">
        <div className="membership-container">
          <span className="eyebrow">Transparent pricing</span>
          <h2>No hidden fees. <em>No surprises.</em></h2>
          <p className="membership-lede">OPV membership is approved by application. Pricing is discussed privately after the brief is understood; no card details are taken on the website and service costs remain separate and itemised.</p>
          <div className="membership-pricing-grid">
            {[
              ['Sapphire', 'Application', '', 'Indicative retainer from £250/month.', 'Guardian assignment, preferential pricing, priority access and 30-minute response guarantee. Service costs billed separately per arrangement.', 'No online checkout. Membership starts only after approval and signed terms.'],
              ['Diamond', 'Application', '', 'Indicative retainer from £750/month.', 'Everything in Sapphire plus 24-hour direct line, unlimited requests, proactive briefings, corporate account capability and white-glove property arrivals. Service costs billed separately.', 'Priority onboarding within 24 hours. NDA standard.'],
              ['Gold', 'By arrangement', '', 'Pricing agreed directly with the OPV director.', 'Everything, without limit. Bespoke pricing means the membership is structured to your actual usage - not a fixed tier you fit into.', 'Invitation only. Maximum 50 members globally.'],
            ].map(([name, price, suffix, annual, copy, note]) => <article key={name} className={name === 'Gold' ? 'gold' : name.toLowerCase()}><span>{name}</span><h3>{price}<small>{suffix}</small></h3><p>{annual}</p><p>{copy}</p><small>{note}</small></article>)}
          </div>
        </div>
      </section>

      <section className="membership-section membership-ice">
        <div className="membership-container">
          <span className="eyebrow">Member notes</span>
          <h2>What members <em>say.</em></h2>
          <div className="membership-testimonials">
            {[
              ['Sapphire', "The guardian remembered I don't drink white wine. I mentioned it once, six months ago. It has not appeared on a table since. That is what the membership actually means in practice.", 'C. Whitfield', 'Manchester'],
              ['Diamond', 'I moved to Diamond after three months on Sapphire. The 24-hour direct line alone justified the difference. I have called it at 11pm on a Sunday twice. Both times it was answered and both times the arrangement was made.', 'P. Osei', 'London'],
              ['Gold', 'I was invited to Gold after a year. I did not know there was a tier above Diamond until the director called. The detail at this level is genuinely different - I do not think about arrangements anymore. They are simply made.', 'A. Al-Rashid', 'London'],
            ].map(([tier, quote, name, place]) => <article key={tier} className={tier.toLowerCase()}><span>{tier}</span><blockquote>{quote}</blockquote><strong>{name}</strong><small>{place}</small></article>)}
          </div>
        </div>
      </section>

      <section className="membership-section membership-white">
        <div className="membership-container">
          <span className="eyebrow">Questions</span>
          <h2>Membership <em>answered.</em></h2>
          <div className="membership-faq">
            {faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="apply" className="membership-apply">
        <div>
          <span className="eyebrow">Apply for membership</span>
          <h2>Start the <em>conversation.</em></h2>
          <p>Sapphire and Diamond membership begins with a brief call to understand your requirements and confirm the right tier. Gold membership is discussed with the OPV director directly. Complete the form and we will be in touch within 24 hours.</p>
          <div className="membership-apply-list"><p><Check />No obligation at this stage</p><p><Check />Response within 24 hours</p><p><Check />Director call for Diamond and Gold</p></div>
        </div>
        <MembershipEnquiryForm />
      </section>

      <section className="membership-closing">
        <p>The membership is not what you pay. It is what you stop thinking about.</p>
        <span>Opulent Vault Limited · hello@opulentvault.co.uk · +44 7385 694230</span>
        <div><a href="#apply" className="btn-primary">Apply for membership</a><Link href="/contact" className="btn-ghost">Speak to the team</Link></div>
      </section>
    </>
  )
}
