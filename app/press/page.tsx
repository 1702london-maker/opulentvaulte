import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Press | OPV Luxury',
  description: 'Press resources, facts and approved editorial assets for OPV.',
}

const facts = [
  ['Founded', '2023'],
  ['Headquarters', 'Manchester, England'],
  ['Core cities', 'Manchester, London, Leeds'],
  ['Services', 'Stays, Drive, Eat, Shop, Security, Fly, Yacht'],
  ['Standard', 'Physical checks, licensed teams, private access'],
  ['Operator', 'Opulent Vault Limited'],
]

const imageSet = [
  {
    title: 'Private Residences',
    copy: 'Verified apartments, townhouses and estates presented by request.',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90',
  },
  {
    title: 'Private Movement',
    copy: 'Chauffeur, fleet and secure transport arranged quietly across the UK.',
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=90',
  },
  {
    title: 'Private Tables',
    copy: 'Dining access, chefs and hosted rooms for clients who do not queue.',
    src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1200&q=90',
  },
]

const guidelines = [
  ['Name', 'Use OPV for the service and Opulent Vault Limited for the operating company.'],
  ['Positioning', 'Describe OPV as a private concierge and arrangement service, not a public booking marketplace.'],
  ['Tone', 'Quiet, exact and discreet. Avoid exaggerated consumer-luxury language.'],
  ['Imagery', 'Use editorial photography that shows access, place and service standards. Avoid generic icons and cartoons.'],
]

export default function PressPage() {
  return (
    <main className="editorial-page">
      <section className="page-hero page-hero-clear-top press-page-hero">
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=90"
          alt="Editorial private members interior with refined seating"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-overlay page-hero-overlay-light" />
        <div className="page-hero-inner">
          <div className="page-hero-copy page-hero-copy-raised press-page-hero-copy">
            <span className="eyebrow page-hero-kicker">Press</span>
            <h1 className="page-hero-title">Private access. <em>Public facts.</em></h1>
            <p className="page-hero-body">
              Media resources for OPV: approved company language, key facts, brand guidance and editorial imagery for coverage
              of a private concierge service operating across Manchester, London and Leeds.
            </p>
            <div className="page-hero-actions">
              <Link className="btn-primary" href="mailto:hello@opulentvault.co.uk?subject=OPV%20press%20enquiry">
                Press enquiry
              </Link>
              <Link className="btn-ghost-light" href="#facts">View facts</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-split">
        <div>
          <span className="eyebrow">Boilerplate</span>
          <h2>How to describe <em>OPV.</em></h2>
        </div>
        <div>
          <p>
            OPV is a private concierge service arranging residences, cars, dining, shopping, security, aviation and yachts
            through one named contact and one invoice. The service is built for clients who need discretion, speed and
            standards held consistently across every category.
          </p>
          <p>
            OPV is operated by Opulent Vault Limited and serves private clients, visiting principals, family offices and
            corporate guests across Manchester, London and Leeds.
          </p>
        </div>
      </section>

      <section id="facts" className="editorial-section editorial-ice">
        <span className="eyebrow">Key facts</span>
        <h2>The details <em>editors need.</em></h2>
        <div className="editorial-fact-grid">
          {facts.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <span className="eyebrow">Approved image direction</span>
        <h2>Show the <em>standard.</em></h2>
        <div className="editorial-image-row">
          {imageSet.map((image) => (
            <article key={image.title}>
              <Image src={image.src} alt={image.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <h3>{image.title}</h3>
                <p>{image.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-feature">
        <div className="editorial-feature-image">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=90"
            alt="Private lounge prepared for an editorial meeting"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="editorial-feature-copy">
          <span className="eyebrow">Brand guidance</span>
          <h2>Quiet language. <em>Clear claims.</em></h2>
          <div className="editorial-card-grid two">
            {guidelines.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-closing editorial-ice">
        <span className="eyebrow">Media contact</span>
        <h2>For interviews, imagery and fact checks.</h2>
        <p>Press enquiries are handled directly by OPV. We prioritise corrections, image approvals and feature requests.</p>
        <Link className="btn-primary" href="mailto:hello@opulentvault.co.uk?subject=OPV%20press%20request">
          Contact press -&gt;
        </Link>
      </section>
    </main>
  )
}
