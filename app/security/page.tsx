import Image from 'next/image'
import Link from 'next/link'
import SecurityEnquiryForm from './SecurityEnquiryForm'

const clientTypes = [
  ['Ultra-High-Net-Worth Individuals', 'Principals, family offices and private households requiring discreet ongoing protection across residences, travel and public engagements. Known only to the operational team.', 'M12 3 20 7v5c0 5-3.5 8-8 9-5.5-1-8-4-8-9V7l8-4Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'],
  ['Celebrities & Public Figures', 'Talent, musicians, athletes and media personalities navigating public exposure. Plainclothes protection, crowd management, venue advance work and travel security - visible only when necessary.', 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0c-4.4 0-8 2.4-8 5.4V20h16v-2.6c0-3-3.6-5.4-8-5.4Zm0-10a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z'],
  ['Corporate Executives', 'C-suite executives, board members and deal teams operating in elevated-risk environments. Threat assessment, secure transport and close protection for domestic and international travel.', 'M9 7V5a3 3 0 0 1 6 0v2h4v12H5V7h4Zm2 0h2V5a1 1 0 0 0-2 0v2Zm1 4 4 2v3c0 2.5-1.7 4.5-4 5-2.3-.5-4-2.5-4-5v-3l4-2Z'],
  ['Visiting Dignitaries & VIP Guests', 'International principals visiting Manchester, London or Leeds. Meet-at-aircraft, motorcade coordination, advance surveys and residential security for the duration of the visit.', 'm12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4L7.5 16l.9-5-3.6-3.5 5-.7L12 3Zm0 5 5 2v3c0 3-2 5.3-5 6-3-.7-5-3-5-6v-3l5-2Z'],
]

const services = [
  ['Close Protection', 'Single close protection officers and full principal protection teams. Intelligence-led advance work, route surveys and reactive support across Manchester, London and internationally.', 'M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Zm-3 9 2 2 4-5'],
  ['Personal Protection Operative', 'Dedicated one-to-one presence for principals requiring constant cover. Suited plainclothes for social and corporate settings, or overt where deterrence is required.', 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m-7-8 5 2v3c0 2.5-1.7 4.5-5 5-3.3-.5-5-2.5-5-5v-3l5-2Z'],
  ['Residential Security', 'Static guarding, access control and CCTV monitoring for private residences, estates and serviced apartments. Uniformed or covert, matched to the setting.', 'M4 11 12 4l8 7v9H4v-9Zm6 9v-5h4v5m1-8h3v8h-3v-8Z'],
  ['Secure Transport', 'B6-rated armoured vehicles with advanced-driving-trained operators. Pre-route surveys, convoy capability and medical first-response included.', 'M5 16h14M7 16l1.5-5h7L17 16M7 16v3m10-3v3M9 7h6l3 4H6l3-4Zm3 5 4 2v3c0 2.5-1.7 4.5-4 5-2.3-.5-4-2.5-4-5v-3l4-2Z'],
  ['Event Security', 'Corporate events, private parties, venue security and VIP escort. Crowd management, access control and principal extraction plans prepared in advance.', 'M7 3v3m10-3v3M4 8h16v12H4V8Zm4 5h8m-4-2 4 2v3c0 2.5-1.7 4.5-4 5-2.3-.5-4-2.5-4-5v-3l4-2Z'],
  ['Travel Security', 'End-to-end security for international travel. Threat assessment, in-country liaison, accommodation review, airport fast-track and in-destination protection.', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.4 3.7 5.4 3.7 9S14.5 18.6 12 21m0-18C9.5 5.4 8.3 8.4 8.3 12S9.5 18.6 12 21M3 12h18m-9-2 4 2v3c0 2.5-1.7 4.5-4 5-2.3-.5-4-2.5-4-5v-3l4-2Z'],
]

const standards = [
  ['Identity & Vetting', 'Enhanced DBS, SIA licence verification, employment history and personal references for every operative, refreshed annually. No exceptions for experience or seniority.'],
  ['Operational Training', 'Surveillance detection, evasive driving, emergency first response, threat assessment and hostile environment training. Scenario training is maintained quarterly.'],
  ['Discretion Protocol', 'No social media, no external contact logging, no client discussion outside the operational team. NDA signed before deployment, lifetime in duration.'],
]

const protectionBenefits = [
  'Former Metropolitan Police or military background',
  'SIA Close Protection licence mandatory',
  'NDA signed before first briefing',
  'Medically trained to emergency response standard',
  'Driver-trained and vehicle-checked',
  'Available day-rate, monthly or long-term retainer',
]

const transportBenefits = [
  'B6 ballistic rating available across selected fleet vehicles',
  'Run-flat tyres and secure communications as standard',
  'Advanced and evasive driving-trained operators',
  'Pre-route intelligence survey every deployment',
  'Convoy support and motorcade coordination',
]

function LineIcon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero page-hero-clear-top security-page-hero">
        <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=90" alt="Secure technology operations room with monitored infrastructure" fill priority sizes="100vw" />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised security-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Close Protection & Security</span>
            <h1 className="page-hero-title">Protection that travels<br /><em>with you.</em></h1>
            <p className="page-hero-body">SIA-licensed operatives. Intelligence-led advance work. Discreet by design, precise by training. From a single close protection officer to a full residential detail - assembled to your brief, deployed without delay.</p>
            <div className="page-hero-actions">
              <a href="#security-enquiry" className="btn-primary">Request a security detail</a>
              <Link href="/contact" className="btn-ghost-light">Speak confidentially</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="security-section security-white">
        <div className="security-container">
          <span className="eyebrow">Who we protect</span>
          <h2 className="display-md">Private clients. <em>Public figures.</em></h2>
          <div className="security-client-grid">
            {clientTypes.map(([title, body, icon]) => (
              <article className="security-tile" key={title}>
                <LineIcon path={icon} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-section security-ice">
        <div className="security-container">
          <span className="eyebrow">What we provide</span>
          <h2 className="display-md">Six disciplines. <em>One team.</em></h2>
          <div className="security-service-grid">
            {services.map(([title, body, icon]) => (
              <article className="security-service-card" key={title}>
                <LineIcon path={icon} />
                <h3>{title}</h3>
                <p>{body}</p>
                <a href="#security-enquiry">Brief this service</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-feature security-white">
        <div className="security-feature-copy">
          <span className="eyebrow">Personal Protection</span>
          <h2 className="display-md">Your operative. <em>Your brief.</em></h2>
          <p>A personal protection operative is more than a physical presence. The right person knows your schedule before you share it, reads a room before you enter it and handles the situation before it reaches you.</p>
          <p>Every engagement begins with a full client brief: routines, risk profile, preferences and operating boundaries. The operative is matched specifically. No generic deployments.</p>
          <div className="security-benefit-list">
            {protectionBenefits.map(item => <div key={item}><CheckIcon /><span>{item}</span></div>)}
          </div>
          <div className="security-cta-row">
            <a href="#security-enquiry" className="btn-primary">Request personal protection</a>
            <Link href="/contact" className="btn-ghost">Speak to the security director</Link>
          </div>
        </div>
        <div className="security-feature-image">
          <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=90" alt="Security technology hardware and access-control circuitry" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <span>CCTV · Access Control · SIA Standard</span>
        </div>
      </section>

      <section className="security-section security-ice">
        <div className="security-container">
          <span className="eyebrow">Our standard</span>
          <h2 className="display-md">Vetted. Trained. <em>Trusted.</em></h2>
          <div className="security-standard-grid">
            {standards.map(([title, body]) => (
              <article key={title}>
                <div />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-feature security-white security-feature-reverse">
        <div className="security-feature-image">
          <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=90" alt="Security operations dashboard for routing and incident monitoring" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className="security-feature-copy">
          <span className="eyebrow">Secure Transport</span>
          <h2 className="display-md">B6 rated. <em>90 minutes.</em></h2>
          <p>B6-ballistic rated saloons and SUVs at 90 minutes notice across Manchester and London. Every vehicle is maintained to manufacturer specification and driven by operators holding advanced driving, close-protection and medical response certification.</p>
          <div className="security-stat-row">
            <span><strong>B6</strong>Ballistic rating</span>
            <span><strong>90min</strong>Deployment time</span>
            <span><strong>24/7</strong>On-call dispatch</span>
          </div>
          <div className="security-benefit-list">
            {transportBenefits.map(item => <div key={item}><CheckIcon /><span>{item}</span></div>)}
          </div>
          <a href="#security-enquiry" className="btn-primary security-single-cta">Request armoured transport</a>
        </div>
      </section>

      <section id="security-enquiry" className="security-section security-ice">
        <div className="security-container security-enquiry-grid">
          <div>
            <span className="eyebrow">Confidential Enquiry</span>
            <h2 className="display-md">Describe the <em>requirement.</em></h2>
            <p className="body-lg">All security enquiries are handled directly by the OPV security director. Details are retained only for the operational period and destroyed on completion. An NDA is available before the first call if preferred.</p>
            {['Director-level response within 2 hours', 'Same-day deployment where required', 'NDA provided before first briefing'].map(item => <div className="security-check-row" key={item}><CheckIcon /><p>{item}</p></div>)}
            <div className="security-notice">This form does not store data in your browser. Submissions are handled confidentially.</div>
          </div>
          <SecurityEnquiryForm />
        </div>
      </section>
    </>
  )
}
