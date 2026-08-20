import type { Metadata } from 'next'
import FAQSection, { type FAQ } from './FAQSection'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the questions prospective OPV clients ask about access, pricing, privacy, stays, transport, aviation, dining, yachts and close protection.',
}

const phone = '+44 7385 694230'
const telHref = 'tel:+447385694230'
const email = 'hello@opulentvault.co.uk'
const mailHref = 'mailto:hello@opulentvault.co.uk'
const whatsAppHref = 'https://wa.me/447385694230'

const faqs: FAQ[] = [
  { id: 'gs-1', category: 'Getting Started', question: 'What exactly is OPV?', answer: 'OPV is a private concierge service. We arrange stays, chauffeured cars, private dining, personal shopping, close protection, private aviation and yacht charter - under a single contact, on a single invoice. You describe what you need. We handle everything from that point forward.' },
  { id: 'gs-2', category: 'Getting Started', question: 'How do I become a client?', answer: 'Contact us by phone, email or WhatsApp. There is no application form for most services - you simply get in touch and we begin. For membership access to off-market properties and preferential pricing, there is a brief onboarding process. Call +44 7385 694230 or email hello@opulentvault.co.uk to start.' },
  { id: 'gs-3', category: 'Getting Started', question: 'Do I need to become a member to use OPV?', answer: 'No. Many services - including stays, drive, dining and aviation - can be arranged for new clients without any formal membership. Membership unlocks preferential pricing, off-market access and a dedicated named guardian. It is worth having but not required to begin.' },
  { id: 'gs-4', category: 'Getting Started', question: 'What cities do you cover?', answer: 'Our primary coverage is Manchester, London and Leeds. Many services - aviation, yacht charter, security and shopping - operate globally. If you need something arranged in a city not listed, contact us. The network reaches further than the website suggests.' },
  { id: 'gs-5', category: 'Getting Started', question: 'How quickly can you arrange something?', answer: 'It depends on the service. A chauffeured car can be arranged within 90 minutes. A private jet from Manchester same-day. A restaurant reservation at a venue with a six-month waitlist requires more notice - typically 48 to 72 hours. Security details can be deployed same-day. Tell us what you need and we will tell you honestly whether we can deliver it in your timeframe.' },
  { id: 'gs-6', category: 'Getting Started', question: 'Can I arrange multiple services in one request?', answer: 'Yes - and this is one of the core reasons clients use OPV. A single brief can cover a residence, a car, a table and a security detail for the same visit. One contact coordinates everything. One invoice covers everything. Nothing falls between the cracks.' },
  { id: 'st-1', category: 'Stays', question: 'Why are your properties not listed publicly?', answer: 'Most of the properties available through OPV are not listed on any public platform by design. Owners have chosen to keep them private - some for security reasons, some because they only want a specific calibre of guest. We act as the trusted intermediary. The absence of a public listing is a feature, not a limitation.' },
  { id: 'st-2', category: 'Stays', question: 'What is the difference between OPV Managed and Partner Hosted?', answer: 'OPV Managed properties are directly contracted to and serviced by our team. We prepare the arrival, manage the stay and handle every issue. Partner Hosted properties are owner-operated but have been physically inspected, legally verified and photographically audited by OPV before we agreed to list them. The concierge contact remains OPV in both cases.' },
  { id: 'st-3', category: 'Stays', question: 'What does your 200-point verification cover?', answer: 'It covers five areas: physical inspection of the property including all fixtures, appliances and communal areas; identity and background checks on the owner; legal title confirmation via HM Land Registry; photography audit - all images are commissioned or approved by OPV and must accurately represent the property; and a concierge walkthrough where arrival logistics, emergency contacts and local partnerships are confirmed.' },
  { id: 'st-4', category: 'Stays', question: 'Can you arrange staffing for a property stay?', answer: 'Yes. For longer stays and larger properties we can arrange a housekeeper, private chef, butler or full domestic team. These are briefed specifically to the client and the stay - not generic hospitality staff. This is arranged as part of the initial brief.' },
  { id: 'st-5', category: 'Stays', question: 'What is the minimum stay?', answer: 'It varies by property. Most city apartments are available from one night. Estates and larger properties typically have a two or three night minimum. Some properties - particularly in Cheshire and the countryside - are weekend or weekly only. We will confirm the minimum when presenting the shortlist.' },
  { id: 'st-6', category: 'Stays', question: 'Can you arrange a property for a large group?', answer: 'Yes. We have estates and multi-bedroom properties across Manchester, Cheshire, London and Leeds that accommodate groups of up to 20 guests in a single property. For larger groups we can arrange adjacent properties. Tell us the guest count and we will present appropriate options.' },
  { id: 'dr-1', category: 'Drive', question: 'Are your drivers SIA licensed?', answer: 'Yes. Every OPV chauffeur holds a current SIA licence and has been subject to enhanced DBS checks. All are NDA-signed and route-surveyed before each engagement. For security-level transport, drivers additionally hold advanced driving and close-protection certifications.' },
  { id: 'dr-2', category: 'Drive', question: 'Can I request a specific vehicle?', answer: 'Yes. The fleet includes Rolls-Royce Ghost, Rolls-Royce Cullinan, Bentley Flying Spur, Bentley Bentayga, Range Rover Autobiography, Mercedes-Maybach S-Class, Lamborghini Urus and others. B6-rated armoured vehicles are available at 90 minutes notice. If you have a preference, state it in the brief. If we do not have it in the fleet, we will source it.' },
  { id: 'dr-3', category: 'Drive', question: 'Do you offer self-drive?', answer: 'Yes, for selected vehicles in the fleet - primarily the sports and grand tourer category. Self-drive requires a clean licence, identity verification and a security deposit. Chauffeur-driven is available for every vehicle in the fleet.' },
  { id: 'dr-4', category: 'Drive', question: 'Can you arrange airport transfers at short notice?', answer: 'Yes. We monitor flight arrivals in real time. If your flight is delayed, the car waits. If it lands early, we aim to be there. For Manchester, London City, Heathrow, Gatwick, Luton and Farnborough we offer meet-and-greet with a name board, complimentary 60-minute wait and no surcharge for delays.' },
  { id: 'ea-1', category: 'Eat', question: 'Can you get tables at fully booked restaurants?', answer: 'In most cases, yes. OPV holds standing relationships with a number of restaurants in Manchester, London and Leeds that do not take bookings from individual members of the public in the usual way. We are not always able to guarantee a specific date at a specific venue, but if the relationship exists, we use it. Tell us where you want to go.' },
  { id: 'ea-2', category: 'Eat', question: 'Can you arrange private dining rooms?', answer: 'Yes. We have access to private dining rooms at a range of venues across Manchester, Spinningfields, Mayfair, Knightsbridge and Leeds. Rooms from 2 guests to 40, with full bespoke menus, name cards and AV if required. Available for corporate entertaining, celebrations and private occasions.' },
  { id: 'ea-3', category: 'Eat', question: 'Do you handle dietary requirements?', answer: 'Yes, in full. When you submit a dining brief, include all dietary requirements, allergies and preferences. We communicate these directly to the kitchen and confirm they are managed before your reservation is confirmed. We do not leave this to chance or to a note on a booking system.' },
  { id: 'ea-4', category: 'Eat', question: 'Can you arrange a chef for a private residence?', answer: 'Yes. We can arrange a private chef for a dinner, a weekend or an extended stay. Menus are agreed in advance, ingredients sourced to the chef\'s specification and the service conducted at the residence or private venue. This is arranged as part of a stay brief or independently.' },
  { id: 'sh-1', category: 'Shop', question: 'Do you have commission arrangements with any brands?', answer: 'No. OPV does not accept referral fees, affiliate commissions or preferential arrangements from any brand or retailer. What we source is determined entirely by your brief. This is non-negotiable and applies to every sourcing engagement.' },
  { id: 'sh-2', category: 'Shop', question: 'Can you source items that are on allocation or waiting lists?', answer: 'In many cases, yes. We have relationships with specific houses and dealers that provide access beyond standard retail channels. This is particularly relevant for watches - Patek Philippe, Audemars Piguet, Richard Mille - and certain Hermes categories. We will be honest about what is achievable and in what timeframe.' },
  { id: 'sh-3', category: 'Shop', question: 'How does the personal stylist service work?', answer: 'You begin with a session - virtual or in-person - where the stylist understands your aesthetic, your schedule and what you need. From there, they source, present options and manage all purchases, alterations, tailoring appointments and deliveries. Available as a one-off or on a retainer basis for ongoing wardrobe management.' },
  { id: 'sh-4', category: 'Shop', question: 'Can you manage corporate gifting programmes?', answer: 'Yes. We arrange corporate gifting for individual recipients up to full client portfolio programmes. Every gift is sourced, packaged and presented to the same standard. A single invoice covers all recipients. The gift is never visibly from a third party unless you specify otherwise.' },
  { id: 'fl-1', category: 'Fly', question: 'How quickly can you arrange a private jet?', answer: 'For most European routes departing from Manchester, we can arrange a flight same-day - occasionally within a few hours. Longer routes and less-common departure points require more lead time. We respond to every flight brief within 90 minutes with options and pricing.' },
  { id: 'fl-2', category: 'Fly', question: 'What does the price include?', answer: 'All-in pricing includes the aircraft, crew, FBO terminal access at departure, catering to your brief, ground transport to the aircraft and landing fees. There are no handling surprises on the invoice. What we quote is what you pay.' },
  { id: 'fl-3', category: 'Fly', question: 'What are empty legs?', answer: 'An empty leg is a positioning flight - an aircraft that needs to travel from A to B without passengers in order to pick up another charter. These flights are offered at significantly reduced rates, sometimes up to 75% below standard charter price. Availability is real-time and changes within hours. We monitor the market daily and alert members when relevant routes appear.' },
  { id: 'fl-4', category: 'Fly', question: 'Which airports do you operate from?', answer: 'Manchester International, London Heathrow, London City, London Gatwick, London Luton and Farnborough. All departures use a dedicated VIP FBO terminal - no shared terminal, no queues, no standard security process. You arrive by car, board by foot.' },
  { id: 'fl-5', category: 'Fly', question: 'Can you arrange helicopter transfers?', answer: 'Yes. Helicopter transfers are available for city-to-city transfers - Manchester to London in 90 minutes - and for airport-to-property transfers where a helipad is available. The Sikorsky S-76 is the preferred aircraft for VIP transfers. Available at short notice across the UK.' },
  { id: 'fl-6', category: 'Fly', question: 'Can you arrange security on the aircraft?', answer: 'Yes. For principals requiring close protection, we coordinate between the security team and the aviation team to ensure the transition from ground to aircraft and aircraft to ground is seamless. The CP operative travels in the cabin.' },
  { id: 'ya-1', category: 'Yacht', question: 'What is the difference between a day charter and a week voyage?', answer: 'A day charter is typically 6 to 12 hours on the water - departing and returning to the same marina. A week voyage is a multi-day itinerary with overnight stays on board, moving between locations. Both are fully crewed and catered. The week voyage gives significantly more flexibility in itinerary and destinations.' },
  { id: 'ya-2', category: 'Yacht', question: 'Is the crew included in the charter price?', answer: 'Yes. All OPV yacht charters are crewed. The crew is included in the charter rate for standard charters. For superyachts, an Advanced Provisioning Allowance (APA) - typically 30-35% of the charter fee - covers fuel, provisions, marina fees and crew gratuity. We explain this clearly before any agreement is reached.' },
  { id: 'ya-3', category: 'Yacht', question: 'Can we change the itinerary once we are on board?', answer: 'Yes. The itinerary is always the client\'s to direct. The captain executes - they do not dictate. If you want to stay an extra night in a bay, skip a port or change course entirely, the crew accommodates it. The only constraints are weather, maritime safety and fuel range.' },
  { id: 'ya-4', category: 'Yacht', question: 'Can you arrange a corporate charter for a large group?', answer: 'Yes. Corporate charters for up to 150 guests are available on larger motor yachts and superyachts. AV, branding, catering at restaurant standard, photography and hosting are all arranged as part of the brief. Frequently chartered from Monaco during Grand Prix, from the Solent during Cowes Week and from Palma during Copa del Rey.' },
  { id: 'se-1', category: 'Security', question: 'Are your security operatives SIA licensed?', answer: 'Yes. Every OPV security operative holds a current SIA Close Protection licence. All are former military or police, subject to enhanced DBS checks and NDA-signed before any engagement. Vetting records are maintained and refreshed annually. No exceptions for experience or seniority.' },
  { id: 'se-2', category: 'Security', question: 'How quickly can you deploy a close protection officer?', answer: 'Same-day deployment is available in Manchester and London. For other UK cities, typically within 24 hours. For international deployments, 48 to 72 hours depending on destination. We hold a roster of vetted operatives on standby specifically for short-notice requirements.' },
  { id: 'se-3', category: 'Security', question: 'Do your operatives carry weapons?', answer: 'No. OPV security operatives operate within UK law. None carry weapons. Protection is achieved through intelligence, planning, advance work, route surveying and the physical presence and training of the operative. In high-risk international environments where armed support is required, we coordinate with licensed in-country providers.' },
  { id: 'se-4', category: 'Security', question: 'Can security be arranged alongside other OPV services?', answer: 'Yes - and this is where the integrated approach adds most value. A security detail that is coordinated with the driver, the property team and the aviation team operates at a different level to one that is arranged in isolation. Brief us on the full trip and we coordinate across all services.' },
  { id: 'se-5', category: 'Security', question: 'Is my enquiry confidential?', answer: 'Completely. Security enquiries are handled directly by the OPV security director. Details are not shared beyond the operational team. An NDA is available before the first call if preferred. All operational records are destroyed on completion of the engagement.' },
  { id: 'pr-1', category: 'Pricing & Billing', question: 'How does billing work?', answer: 'A single invoice covers all services arranged in a booking. For ongoing or multi-service arrangements, we issue one consolidated invoice at the agreed interval. Corporate clients can be invoiced to the company. Payment is by bank transfer. We do not use consumer payment processors.' },
  { id: 'pr-2', category: 'Pricing & Billing', question: 'Are prices fixed or negotiable?', answer: 'Most OPV rates are fixed and presented clearly before any commitment is made. For very large or complex arrangements - extended security details, superyacht charters, block aviation time - there is room for a commercial conversation. We will always tell you whether a rate is firm or flexible.' },
  { id: 'pr-3', category: 'Pricing & Billing', question: 'Is there a minimum spend?', answer: 'No. There is no minimum spend requirement for any service. You can arrange a single airport transfer or a six-week multi-service engagement. The standard applied is identical regardless of scale.' },
  { id: 'pr-4', category: 'Pricing & Billing', question: 'What is your cancellation policy?', answer: 'Cancellation terms vary by service. For transport, 24 hours notice is required to avoid a cancellation fee. For properties, the owner\'s terms apply - typically 30 to 50% within 14 days and 100% within 48 hours of check-in. For aviation, terms vary by operator. We present full cancellation terms before any booking is confirmed and never commit you to a service without your explicit approval of the terms.' },
  { id: 'pr-5', category: 'Pricing & Billing', question: 'Do you charge a service fee?', answer: 'Our fee structure varies by service. For some services, OPV earns a margin on the arranged rate. For others, a fixed concierge fee applies. For members, preferential pricing applies across all services. The fee structure is always disclosed before commitment. We do not hide fees in invoice lines.' },
  { id: 'dp-1', category: 'Discretion & Privacy', question: 'How do you protect client privacy?', answer: 'Client information is held on a need-to-know basis within OPV. Suppliers are briefed only on what they require to deliver the service - never the full picture. All staff and operatives are NDA-signed. We do not discuss clients internally beyond operational necessity and never externally under any circumstances.' },
  { id: 'dp-2', category: 'Discretion & Privacy', question: 'Do you share client data with third parties?', answer: 'Never beyond operational necessity. To arrange a flight, the operator requires the passenger manifest. To arrange a property, the owner requires a check-in date. We share the minimum required to deliver the service and nothing beyond it. We do not sell, license or share client data with any commercial third party.' },
  { id: 'dp-3', category: 'Discretion & Privacy', question: 'Can I use OPV without my identity being known to the supplier?', answer: 'In most cases, yes. For property bookings, vehicle hire and dining reservations, we can arrange in the OPV name with no reference to the client. For aviation, regulatory requirements mean the passenger manifest must include real names. For security, the operative must be briefed on the principal - this is non-negotiable for operational reasons.' },
  { id: 'dp-4', category: 'Discretion & Privacy', question: 'What happens to my data after an engagement ends?', answer: 'Client preferences and contact details are retained to improve future service unless you ask us to delete them. Operational records - briefings, supplier communications, itineraries - are retained for 12 months and then deleted unless you request otherwise. Security-related records are deleted on completion of the engagement.' },
  { id: 'ma-1', category: 'Membership & Access', question: 'What does OPV membership provide?', answer: 'Membership provides: preferential pricing across all services, access to off-market properties that are never publicly listed, a dedicated named guardian who knows your preferences and history, priority allocation when availability is limited and first notification of new residences, empty legs and private dining access.' },
  { id: 'ma-2', category: 'Membership & Access', question: 'How do I apply for membership?', answer: 'Contact us by phone or email. There is a brief onboarding conversation - we want to understand who you are and how OPV fits into what you need. Most applications from genuine enquirers are approved within 48 hours. We decline a proportion of requests. This is what allows us to maintain the standard we do.' },
  { id: 'ma-3', category: 'Membership & Access', question: 'Is there a cost to membership?', answer: 'Membership terms are discussed during the onboarding conversation and depend on the services and level of access required. For most clients, the preferential pricing more than offsets any membership arrangement. We do not publish membership pricing publicly.' },
  { id: 'ma-4', category: 'Membership & Access', question: 'Can a company hold a corporate membership?', answer: 'Yes. Corporate memberships are available for companies whose principals and executive teams require OPV services on an ongoing basis. A single corporate account covers multiple users, with individual billing profiles per person where required. Invoiced to the company, managed by a nominated internal contact.' },
]

function Icon({ type }: { type: 'phone' | 'email' | 'whatsapp' }) {
  const paths = {
    phone: 'M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.3 19.3 0 0 1-5.95-5.95A19.7 19.7 0 0 1 2.23 4.2 2 2 0 0 1 4.21 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.79a2 2 0 0 1-.45 2.11L8.17 9.87a15.4 15.4 0 0 0 5.96 5.96l1.25-1.25a2 2 0 0 1 2.11-.45c.89.31 1.83.53 2.79.66A2 2 0 0 1 22 16.9Z',
    email: 'M4 6h16v12H4V6Zm0 0 8 7 8-7',
    whatsapp: 'M21 11.5a8.4 8.4 0 0 1-12.2 7.45L3 20l1.3-5.16A8.4 8.4 0 1 1 21 11.5Zm-11-3c.4 2 1.6 3.7 3.5 4.6l1.35-1.1 2.15.95-.35 1.85c-.2.55-.85.84-1.4.65-3.35-1.1-5.75-3.55-6.86-6.86-.18-.55.1-1.2.66-1.4L10 8.5Z',
  }

  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[type]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function FAQPage() {
  return (
    <>
      <section className="faq-hero">
        <div className="faq-container">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h1>Everything you <em>wanted to ask.</em></h1>
          <p>If something is not answered here, call us. The team is available around the clock and there is no question too specific, too sensitive or too straightforward to ask.</p>
          <div>
            <a className="btn-primary" href={telHref}>Call us now</a>
            <a className="btn-ghost" href={mailHref}>Send an email</a>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="faq-direct">
        <div>
          <span className="eyebrow">Not answered here</span>
          <h2>Ask us <em>directly.</em></h2>
          <p>The team is available around the clock. There is no question too specific, too sensitive or too last-minute. Call, email or WhatsApp - a person responds, not a template.</p>
          <div className="faq-contact-links">
            <a href={telHref}><Icon type="phone" /><span>{phone}</span><small>24 hours</small></a>
            <a href={mailHref}><Icon type="email" /><span>{email}</span><small>2hr response</small></a>
            <a href={whatsAppHref} target="_blank" rel="noopener noreferrer"><Icon type="whatsapp" /><span>{phone}</span><small>Immediate</small></a>
          </div>
        </div>
        <div>
          <span className="eyebrow">Response times</span>
          <div className="faq-response-table">
            {[
              ['Phone call', 'Immediate'],
              ['WhatsApp', 'Under 10 minutes'],
              ['Email', 'Within 2 hours'],
              ['Complex brief', 'Same business day'],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <small>Response times are targets, not guarantees. In practice, most responses are faster.</small>
        </div>
      </section>

      <section className="faq-quote">
        <p>If you have to ask the price, we will tell you. If you have to ask whether we can arrange it, we probably can.</p>
        <span>OPV · Private Concierge · Manchester · London · Leeds</span>
      </section>
    </>
  )
}
