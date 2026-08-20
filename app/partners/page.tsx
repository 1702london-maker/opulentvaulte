import type { Metadata } from 'next'
import Link from 'next/link'
import EnquiryForm from '@/components/ui/EnquiryForm'

export const metadata: Metadata = {
  title: 'Partner Network | OPV',
  description: 'Apply to become an OPV supply-side partner across property, vehicles, dining, aviation, yachts, security and luxury retail.',
}

const categories = [
  ['Properties', 'Penthouses, estates, townhouses and apartments across Manchester, London, Leeds and beyond. OPV Managed and Partner Hosted designations available. Physical inspection and verification required.'],
  ['Vehicles', 'Luxury saloons, SUVs, sports cars and armoured vehicles. Self-maintained or operated. SIA-licensed drivers required for chauffeur arrangements. Fleet must meet OPV specification.'],
  ['Dining & Venues', 'Restaurants, private dining rooms and event spaces. Minimum standard: Michelin quality or equivalent. Private hire capability required for most listings.'],
  ['Aviation', 'Private jet operators, helicopter charter companies and FBO facilities. All aircraft must hold current AOC certification. Crew requirements are non-negotiable.'],
  ['Yachts', 'Motor yachts, sailing yachts, catamarans and superyachts available for day charter or extended voyages. MCA or equivalent certification required. Crew standards assessed.'],
  ['Security', 'Close protection companies and individual SIA-licensed operatives. Background, vetting and operational standard assessed prior to any deployment through OPV.'],
]

const standards = [
  ['Verification', 'Physical or documentary inspection before listing. Identity, insurance and regulatory compliance checked. References from existing clients required for most categories.'],
  ['Operational standard', 'Consistent delivery at the level described. OPV reserves the right to remove any partner whose standard of service falls below what was agreed. No warnings for serious failures.'],
  ['Discretion', 'NDA required before briefing. Client identity and details shared only to the extent operationally necessary. No discussion of OPV clients externally.'],
]

const benefits = [
  ['Qualified introductions only', 'Every OPV client has been through a brief with the concierge team. You receive bookings, not enquiries.'],
  ['No listing fees', 'OPV does not charge partners to be listed. We earn from the client side of the arrangement.'],
  ['Consistent booking volume', 'Partners who maintain the standard receive consistent introductions. We do not rotate on a round-robin basis — quality determines frequency.'],
  ['Single point of contact', 'All OPV bookings arrive through a single channel. No multiple contacts, no conflicting instructions.'],
  ['Prompt payment', 'OPV invoices clients and pays partners within agreed terms. No chasing, no deductions.'],
  ['Brand association', 'Partners are associated with the OPV standard in client communications — a signal of quality that requires no further explanation.'],
]

export default function PartnersPage() {
  return (
    <>
      <section className="editorial-hero split-hero">
        <div>
          <span className="eyebrow">Partner Network</span>
          <h1>Supply the standard. <em>Join the network.</em></h1>
          <p>OPV arranges services for private clients across Manchester, London and Leeds. We work with a small, carefully selected network of suppliers who operate at the level our clients require. If your property, vehicle, venue or service meets that standard, we would like to hear from you.</p>
          <div className="hero-actions"><a className="btn-primary" href="#apply">Apply to become a partner</a><a className="btn-ghost" href="mailto:hello@opulentvault.co.uk?subject=OPV%20partner%20guide%20request">Request partner guide</a></div>
        </div>
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90" alt="Professional OPV partner meeting" />
      </section>

      <section className="opv-section">
        <span className="eyebrow">What we're looking for</span>
        <h2>Six categories. <em>One standard.</em></h2>
        <div className="opv-tile-grid three">
          {categories.map(([title, copy]) => <article key={title}><i /> <h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="opv-section ice">
        <span className="eyebrow">The standard</span>
        <h2>Not everyone <em>qualifies.</em></h2>
        <p className="section-lede">A proportion of partner applications are declined. This is deliberate. The value of the OPV network to existing partners is that every other partner in it has met the same bar.</p>
        <div className="opv-tile-grid three top-only">
          {standards.map(([title, copy]) => <article key={title}><i /> <h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="opv-split">
        <div><span className="eyebrow">What you receive</span><h2>Access to the right <em>clients.</em></h2><p>OPV partners receive introductions to clients who have the means and the intention to book. There is no marketing noise, no price comparison and no race to the bottom.</p></div>
        <div className="benefit-list">{benefits.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}</div>
      </section>

      <section className="opv-split ice" id="apply">
        <div><span className="eyebrow">Apply</span><h2>Tell us about your <em>offering.</em></h2><p>Applications are reviewed by the OPV partner team within 5 business days. We will contact you to arrange a verification process if your application meets the initial criteria.</p></div>
        <EnquiryForm page="partner" cta="Submit partner application ->" />
      </section>
    </>
  )
}
