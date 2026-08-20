const boilerplates = [
  ['Short version', 'OPV is a private concierge service operating across Manchester, London and Leeds. It arranges stays, chauffeured cars, private dining, personal shopping, close protection, private aviation and yacht charter - under a single contact, on a single invoice. OPV is operated by Opulent Vault Limited.'],
  ['Long version', 'OPV is a private concierge platform serving ultra-high-net-worth individuals, corporate clients and VIP guests across Manchester, London and Leeds. The service covers seven categories - stays, drive, eat, shop, security, fly and yacht - coordinated by a single named concierge and consolidated onto a single invoice. OPV was established to address a specific gap: the absence of a concierge service operating at London standard in Manchester, and the absence of one that genuinely integrates across all service categories rather than referring out. Every property is physically inspected. Every security operative is SIA-licensed. Every flight is arranged with VIP FBO access. The standard does not flex based on the size of the booking. OPV is operated by Opulent Vault Limited and is available by enquiry at opulentvault.co.uk.'],
]

const facts = [
  ['Founded', '2023'], ['Headquarters', 'Manchester, England'], ['Cities covered', 'Manchester, London, Leeds'],
  ['Services', 'Seven (Stays, Drive, Eat, Shop, Security, Fly, Yacht)'], ['Properties in portfolio', '500+'],
  ['Countries of operation', '34'], ['Verification standard', '200-point inspection'],
  ['Concierge availability', '24 hours, 365 days'], ['Operating company', 'Opulent Vault Limited'],
]

const guidelines = [
  ['Name usage', "The correct form is 'OPV' in all references. Do not use 'O.P.V.' or 'Opv'. In first reference in a feature, 'OPV (Opulent Vault)' is acceptable. The operating company is 'Opulent Vault Limited' - use this in formal or legal contexts."],
  ['Colours', 'The OPV brand uses sapphire blue (#1B6CA8) and white (#FFFFFF) as primary colours. Ice blue (#EAF4FB) is used as a secondary surface. Do not reproduce the OPV brand in black, grey or any other colour palette.'],
  ['Tone', "OPV is described as a private concierge service - not a 'luxury booking platform', 'travel company' or 'lifestyle service'. The distinction matters. We arrange things. We do not list them."],
  ['Imagery', 'Approved press imagery is available below. Do not use imagery from the OPV website without prior written approval. Do not use stock imagery in association with OPV coverage without checking it has not been used by OPV.'],
]

const images = [
  ['OPV - Manchester penthouse interior', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=90'],
  ['OPV - Luxury vehicle fleet', 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=90'],
  ['OPV - Private dining', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90'],
  ['OPV - Private aviation', 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=90'],
  ['OPV - Yacht charter', 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=90'],
  ['OPV - Manchester cityscape', 'https://images.unsplash.com/photo-1529655682523-9e9a5a6f6b3e?w=800&q=90'],
]

const offers = ['Founder interviews (arranged subject to schedule)', 'On-record quotes on industry topics', 'Exclusive access for right-fit features', 'Fact-checking and background briefings', 'Approved imagery in high resolution', 'Property and location access for shoots (arranged case by case)']

// TODO: Replace placeholder coverage entries with real coverage as it is published.
const coverage = [
  ['Manchester Evening News', "Inside Manchester's most private concierge service", 'September 2026', "OPV has quietly built a client base among the city's wealthiest residents..."],
  ['The Times', 'The concierge services the ultra-wealthy actually use', 'October 2026', 'Away from the noise of consumer-facing luxury brands, a new category of service has emerged...'],
  ['Tatler', 'The new name in private arrangement', 'November 2026', "OPV's approach to concierge - everything through one contact, on one invoice - has found a ready audience..."],
]

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ContactIcon({ type }: { type: 'email' | 'phone' }) {
  const path = type === 'email' ? 'M4 6h16v12H4V6Zm0 0 8 7 8-7' : 'M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.3 19.3 0 0 1-5.95-5.95A19.7 19.7 0 0 1 2.23 4.2 2 2 0 0 1 4.21 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.79a2 2 0 0 1-.45 2.11L8.17 9.87a15.4 15.4 0 0 0 5.96 5.96l1.25-1.25a2 2 0 0 1 2.11-.45c.89.31 1.83.53 2.79.66A2 2 0 0 1 22 16.9Z'
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function PressPage() {
  return (
    <>
      <section className="press-hero">
        <div>
          <span className="eyebrow">Press & Media</span>
          <h1>Press <em>resources.</em></h1>
          <p>Everything a journalist or editor needs to cover OPV - company background, key facts, approved imagery and brand guidelines. For interviews, exclusives and media enquiries, contact the press team directly.</p>
          <a className="btn-primary" href="mailto:hello@opulentvault.co.uk">Press enquiry -&gt;</a>
        </div>
        <aside>
          <span>Quick access</span>
          {['boilerplate', 'facts', 'brand', 'press-contact'].map((id, index) => (
            <a key={id} href={`#${id}`}><b>{['Company boilerplate', 'Key facts & figures', 'Brand guidelines', 'Press contact'][index]}</b><i>-&gt;</i></a>
          ))}
        </aside>
      </section>

      <section className="press-section press-white" id="boilerplate">
        <span className="eyebrow">About OPV</span>
        <h2>Approved <em>boilerplate.</em></h2>
        <p className="press-section-intro">The following copy is approved for use in media coverage of OPV. Please use the short version for news items and the long version for features. Do not alter the text without prior approval.</p>
        <div className="press-boilerplates">{boilerplates.map(([label, copy]) => <article key={label}><span>{label}</span><p>{copy}</p><button type="button">Copy text</button></article>)}</div>
      </section>

      <section className="press-section press-ice" id="facts">
        <span className="eyebrow">Key facts & figures</span>
        <h2>The numbers behind <em>OPV.</em></h2>
        <div className="press-facts-layout">
          <div className="press-fact-table">{facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          <div className="press-stat-stack">{[['500+', 'Properties in the OPV portfolio'], ['200', 'Point property verification standard'], ['24/7', 'Concierge availability - no out-of-hours service']].map(([value, label]) => <article key={value}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </div>
      </section>

      <section className="press-section press-white" id="brand">
        <span className="eyebrow">Brand guidelines</span>
        <h2>Using the <em>OPV name.</em></h2>
        <p className="press-section-intro">The following guidelines apply to all media coverage of OPV. Please observe them - incorrect use of the brand will be followed up.</p>
        <div className="press-guideline-grid">{guidelines.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="press-section press-ice">
        <span className="eyebrow">Press imagery</span>
        <h2>Approved <em>images.</em></h2>
        <p className="press-section-intro">The following images are approved for editorial use in connection with coverage of OPV. Credit: OPV / Opulent Vault Limited. High-resolution versions available on request.</p>
        <div className="press-image-grid">
          {images.map(([title, src]) => <article key={title}><img src={src} alt={title} /><span /><div><h3>{title}</h3><small>Credit: OPV / Opulent Vault Limited</small><a href="mailto:hello@opulentvault.co.uk?subject=Press%20imagery%20request">Request high-res -&gt;</a></div></article>)}
        </div>
      </section>

      <section className="press-contact press-white" id="press-contact">
        <div>
          <span className="eyebrow">Media enquiries</span>
          <h2>Speak to <em>the team.</em></h2>
          <p>For interviews, exclusives, comment requests, fact-checking and image approvals, contact the OPV press team directly. We aim to respond to all media enquiries within 4 hours on business days.</p>
          <p>For urgent enquiries outside business hours - call +44 7385 694230. Press calls are prioritised.</p>
          <div className="press-contact-links"><a href="mailto:hello@opulentvault.co.uk"><ContactIcon type="email" />hello@opulentvault.co.uk</a><a href="tel:+447385694230"><ContactIcon type="phone" />+44 7385 694230</a><small>Response within 4 hours on business days · Same day for urgent requests</small></div>
        </div>
        <aside><span>What we can offer</span>{offers.map((offer) => <p key={offer}><CheckIcon />{offer}</p>)}</aside>
      </section>

      <section className="press-section press-ice">
        <span className="eyebrow">In the press</span>
        <h2>Coverage <em>to date.</em></h2>
        <p className="press-section-intro">As a recently launched service, OPV is building its press profile. The following coverage reflects our first year of operation.</p>
        <div className="press-coverage-grid">{coverage.map(([publication, headline, date, excerpt]) => <article key={publication}><span>{publication}</span><h3>{headline}</h3><small>{date}</small><p>{excerpt}</p><a href="mailto:hello@opulentvault.co.uk?subject=Coverage%20request">Read coverage -&gt;</a></article>)}</div>
      </section>
    </>
  )
}
