import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About OPV',
  description: 'About OPV Luxury, a private concierge service operated by Opulent Vault Limited across Manchester, London and Leeds.',
}

const phone = '+44 7385 694230'
const telHref = 'tel:+447385694230'
const email = 'hello@opulentvault.co.uk'
const mailHref = 'mailto:hello@opulentvault.co.uk'
const whatsappHref = 'https://wa.me/447385694230'

const principles = [
  ['The standard is non-negotiable', 'Every property is physically inspected. Every operative is SIA-licensed and NDA-signed. Every vehicle is maintained to manufacturer specification. Every reservation is confirmed directly. The standard does not flex based on the size of the booking or the time of the request.'],
  ['One contact handles everything', 'The complexity of coordinating a car, a property, a table and a security detail across a single visit is significant. We absorb that complexity entirely. The client makes one call. Everything else is invisible.'],
  ['Discretion is structural', 'We do not discuss clients. Not internally beyond operational necessity, not externally under any circumstances. Client information is held on a need-to-know basis and deleted when the engagement ends.'],
]

const cities = [
  ['Manchester', 'Our home city.', 'Spinningfields · Ancoats · Castlefield · Deansgate', 'https://images.unsplash.com/photo-1529655682523-9e9a5a6f6b3e?w=900&q=85'],
  ['London', 'The global stage.', 'Mayfair · Knightsbridge · Belgravia · Shoreditch', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=85'],
  ['Leeds', 'The northern ambition.', 'Granary Wharf · Victoria Quarter · Harewood · City Centre', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=85'],
]

const stats = [
  ['500+', 'Curated properties'],
  ['34', 'Countries of operation'],
  ['12', 'Vehicles in the fleet'],
  ['200', 'Point verification standard'],
  ['3', 'Cities covered'],
  ['24/7', 'Concierge operations'],
]

const comparisons = [
  ['Single contact for all services', 'Sometimes', 'Always'],
  ['Physical property inspection', 'Rarely', 'Every property'],
  ['SIA-licensed security', 'Outsourced', 'Directly vetted'],
  ['Same-day aviation', 'Possible', 'Standard'],
  ['NDA on all staff', 'Optional', 'Mandatory'],
  ['Off-market properties', 'Uncommon', 'Core offering'],
  ['Named personal guardian', 'Premium tier only', 'Standard'],
  ['One invoice for all services', 'Rare', 'Always'],
  ['24-hour genuine response', 'Automated out-of-hours', 'Person, always'],
  ['No commission bias in sourcing', 'Rarely disclosed', 'Structural policy'],
  ['Discretion as architecture', 'Stated as policy', 'Built into operations'],
  ['Manchester coverage at London standard', 'Not offered', 'Founded here'],
]

const values = [
  ['Delivery over promise', 'We would rather under-promise and deliver precisely than over-promise and manage expectations afterwards. If we cannot arrange something at the required standard, we say so.'],
  ['Silence as a service', 'The best arrangement is the one the client barely notices happening. The car is there. The room is ready. The table is held. Silence is the outcome of everything working.'],
  ['The brief is everything', 'Understanding exactly what is needed, including what has not been said, is where the difference is made. A wrong assumption at the brief stage costs more than all the execution that follows.'],
  ['Relationships over transactions', 'OPV works best as an ongoing relationship. Over time, the guardian knows your preferences, your schedule and the things that matter most.'],
]

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ContactIcon({ type }: { type: 'phone' | 'email' | 'whatsapp' }) {
  const paths = {
    phone: 'M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.3 19.3 0 0 1-5.95-5.95A19.7 19.7 0 0 1 2.23 4.2 2 2 0 0 1 4.21 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.79a2 2 0 0 1-.45 2.11L8.17 9.87a15.4 15.4 0 0 0 5.96 5.96l1.25-1.25a2 2 0 0 1 2.11-.45c.89.31 1.83.53 2.79.66A2 2 0 0 1 22 16.9Z',
    email: 'M4 6h16v12H4V6Zm0 0 8 7 8-7',
    whatsapp: 'M21 11.5a8.4 8.4 0 0 1-12.2 7.45L3 20l1.3-5.16A8.4 8.4 0 1 1 21 11.5Zm-11-3c.4 2 1.6 3.7 3.5 4.6l1.35-1.1 2.15.95-.35 1.85c-.2.55-.85.84-1.4.65-3.35-1.1-5.75-3.55-6.86-6.86-.18-.55.1-1.2.66-1.4L10 8.5Z',
  }
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[type]} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90" alt="" />
        <div className="about-hero-wash" />
        <div className="about-container">
          <div className="about-hero-copy">
            <span className="eyebrow">About OPV</span>
            <h1>Private concierge. <em>Properly done.</em></h1>
            <p>OPV was built on a single observation: the level of service available to people who need it most is consistently below the level they have every right to expect. We set out to change that. Quietly, comprehensively and without compromise.</p>
            <Link className="btn-primary" href="/contact">Speak to the team -&gt;</Link>
          </div>
        </div>
        <span className="about-caption">Manchester, England · 2026</span>
      </section>

      <section className="about-statement">
        <p>Most concierge services arrange things. OPV arranges things at the level the client actually requires - and then handles everything that happens between the arrangement and the delivery.</p>
        <i />
        <div>
          <p>The difference is not in the services we offer. Every concierge company offers the same list. The difference is in the depth of the relationship with each supplier, the quality of the people who make the arrangements, and the standard applied when something does not go to plan.</p>
          <p>OPV operates across Manchester, London and Leeds. We cover stays, cars, private dining, personal shopping, close protection, private aviation and yacht charter. One contact, one invoice and a team that treats every brief as if their reputation depends on it - because it does.</p>
        </div>
      </section>

      <section className="about-editorial about-editorial-ice">
        <div className="about-editorial-image">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=90" alt="Luxury private interior" />
          <span>Est. Manchester · 2023</span>
        </div>
        <div className="about-editorial-copy">
          <span className="eyebrow">The founding</span>
          <h2>Built in Manchester. <em>Built for this.</em></h2>
          <p>OPV was founded in Manchester deliberately. The city has the wealth, the ambition and the client base that demands exactly what OPV provides. It did not have a service that operated at the required level. That gap was the founding observation.</p>
          <p>The platform is owned and operated by Opulent Vault Limited. It is not a side project. It is a purpose-built private concierge operation with the infrastructure, supplier relationships and team to deliver at the level it promises.</p>
          <p>We extended to London and Leeds within the first year. The services, the standard and the people are identical in each city. The only thing that changes is the address.</p>
          <div className="about-stat-row">
            <div><strong>2023</strong><span>Founded in Manchester</span></div>
            <div><strong>3</strong><span>Cities covered</span></div>
            <div><strong>7</strong><span>Services under one roof</span></div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <span className="eyebrow">What we stand for</span>
        <h2>Three principles. <em>No exceptions.</em></h2>
        <div>
          {principles.map(([title, copy]) => (
            <article key={title}>
              <i />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-editorial about-team">
        <div className="about-editorial-copy">
          <span className="eyebrow">The team</span>
          <h2>The people behind <em>every arrangement.</em></h2>
          <p>OPV is run by a small, senior team. There are no junior members handling arrangements, no offshore call centres and no scripts. Every person who picks up the phone or responds to a message has the authority and knowledge to commit to the arrangement being discussed.</p>
          <p>The security division works with former police and military personnel holding current SIA licences. The concierge team has backgrounds in luxury hospitality, private aviation and high-end property.</p>
          <p>We are deliberately sized to maintain the standard. The team grows only when we are certain the quality of every new addition meets the bar we have set for the clients we serve.</p>
          <div className="about-benefits">
            {[
              ['Senior team only', 'No junior members make commitments on the company\'s behalf.'],
              ['Vetted security division', 'Every security operative is licensed, checked and NDA-signed.'],
              ['Purpose-built operations', 'The client process and supplier network are built around private concierge delivery.'],
              ['24-hour operations', 'There is no out-of-hours service - there is just the service.'],
            ].map(([title, copy]) => (
              <div key={title}><CheckIcon /><span><strong>{title}</strong><small>{copy}</small></span></div>
            ))}
          </div>
        </div>
        <div className="about-editorial-image">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=90" alt="Senior professional team" />
        </div>
      </section>

      <section className="about-cities">
        <span className="eyebrow">Where we work</span>
        <h2>Three cities. <em>One standard.</em></h2>
        <p>OPV operates identically across Manchester, London and Leeds. The supplier relationships, the team, the standard and the invoice process are the same in each city. The only variable is the address.</p>
        <div>
          {cities.map(([city, tagline, neighbourhoods, image]) => (
            <article key={city}>
              <img src={image} alt={city} />
              <span />
              <div>
                <h3>{city}</h3>
                <strong>{tagline}</strong>
                <p>{neighbourhoods}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stats">
        {stats.map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="about-company">
        <div>
          <span className="eyebrow">Opulent Vault Limited</span>
          <h2>The company behind <em>the service.</em></h2>
          <p>OPV Luxury is owned and operated by Opulent Vault Limited. The business exists for one purpose: to coordinate private residences, movement, dining, aviation, yacht charter, sourcing and close protection at a level that protects the client from friction.</p>
          <p>The platform, supplier network and operating process were built specifically for private concierge work. It is not adapted from a generic booking platform. The whole structure is designed around one contact, one invoice and complete discretion.</p>
          <p>Opulent Vault Limited is the company behind OPV. The service, the client relationship and the operating standard sit with OPV alone.</p>
          <div>
            <span>Get in touch</span>
            <a href={mailHref}>{email}</a>
            <a href={telHref}>{phone}</a>
          </div>
        </div>
        <aside>
          <div><span>Registered name</span><strong>Opulent Vault Limited</strong><p>Registered in England & Wales</p></div>
          <div><span>Operating name</span><strong>OPV Luxury</strong><p>Private concierge across Manchester, London and Leeds</p></div>
          <div><span>Contact</span><a href={mailHref}>{email}</a><a href={telHref}>{phone}</a></div>
        </aside>
      </section>

      <section className="about-difference">
        <span className="eyebrow">The difference</span>
        <h2>Not a booking platform. <em>Not a chatbot. Not a form.</em></h2>
        <p>There are many services that claim to arrange things. The difference is in what happens when you actually test the claim.</p>
        <div className="about-table">
          <div className="about-table-head"><span>Feature</span><span>Standard concierge</span><span>OPV</span></div>
          {comparisons.map(([feature, standard, opv]) => (
            <div key={feature}><span>{feature}</span><small>{standard}</small><strong>{opv}</strong></div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <span className="eyebrow">What we believe</span>
        <h2>Four things we <em>won't compromise on.</em></h2>
        <div>
          {values.map(([title, copy]) => (
            <article key={title}><i /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="eyebrow">Become a client</span>
          <h2>Ready to make <em>contact?</em></h2>
          <p>Call, email or WhatsApp. A member of the team responds - not a form, not a chatbot. Tell us what you need.</p>
          <div>
            <a href={telHref}><ContactIcon type="phone" />{phone}</a>
            <a href={mailHref}><ContactIcon type="email" />{email}</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><ContactIcon type="whatsapp" />{phone}</a>
          </div>
          <Link className="btn-primary" href="/contact">Go to contact page -&gt;</Link>
        </div>
        <div>
          <span className="eyebrow">Explore the services</span>
          <h2>Not sure where <em>to start?</em></h2>
          <p>Browse the services or explore what OPV has available right now. If something fits, get in touch. If nothing quite matches what you need, call us.</p>
          <nav>
            {['Stays', 'Drive', 'Eat', 'Shop', 'Fly', 'Yacht', 'Security'].map(service => (
              <Link key={service} href={`/${service.toLowerCase()}`}>→ {service}</Link>
            ))}
            <Link href="/contact">→ Concierge</Link>
          </nav>
          <Link className="btn-ghost" href="/stays">Browse all services -&gt;</Link>
        </div>
      </section>

      <section className="about-quote">
        <p>We are not the largest concierge service. We are the one that turns up at the standard we promised.</p>
        <span>OPV Luxury · Opulent Vault Limited · Manchester · London · Leeds</span>
      </section>
    </>
  )
}

