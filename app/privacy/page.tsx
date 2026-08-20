import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | OPV',
  description: 'Privacy Policy for Opulent Vault Limited and the OPV website.',
}

const email = 'hello@opulentvault.co.uk'
const phone = '+44 7385 694230'

const summary = [
  'We collect only the information needed to answer enquiries, arrange services and manage client relationships.',
  'We treat client details, preferences and arrangements with discretion and confidentiality.',
  'We do not sell personal information.',
  'You can request access, correction or deletion of your personal information.',
  `Questions: ${email} · ${phone}`,
]

const navItems = [
  ['Overview', 'overview'],
  ['Who we are', 'who-we-are'],
  ['Information we collect', 'information-we-collect'],
  ['How we use information', 'how-we-use-information'],
  ['Sharing information', 'sharing-information'],
  ['How long we keep information', 'retention'],
  ['Security', 'security'],
  ['Your rights', 'your-rights'],
  ['Cookies', 'cookies'],
  ['Changes', 'changes'],
  ['Contact', 'contact'],
]

function BulletList({ items }: { items: string[] }) {
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-hero">
        <div>
          <span className="eyebrow">Legal</span>
          <h1>Privacy <em>Policy.</em></h1>
          <p>This policy explains how Opulent Vault Limited collects, uses and protects personal information when you use the OPV website or engage our concierge services.</p>
          <small>Last updated: August 2026 · Opulent Vault Limited</small>
        </div>
        <aside>
          <h2>Key points</h2>
          {summary.map(item => <p key={item}><i />{item}</p>)}
        </aside>
      </section>

      <section className="legal-body">
        <nav aria-label="Privacy policy contents">
          <span>Contents</span>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <div className="legal-content">
          <article id="overview">
            <h2>Overview</h2>
            <p>Opulent Vault Limited respects your privacy and handles personal information with care. This policy applies to information collected through opulentvault.co.uk, direct enquiries, client communications and services arranged by OPV.</p>
            <p>References to “OPV”, “we”, “us” and “our” mean Opulent Vault Limited. References to “you” mean website visitors, prospective clients, clients, guests and other individuals whose information we process in connection with our services.</p>
          </article>

          <article id="who-we-are">
            <h2>Who we are</h2>
            <p>Opulent Vault Limited is a private concierge company operating under the trading name OPV.</p>
            <p>For privacy matters, contact us at {email} or call {phone}.</p>
          </article>

          <article id="information-we-collect">
            <h2>Information we collect</h2>
            <p>We collect information you provide directly, information created while arranging services and limited technical information from website use.</p>
            <p>This may include:</p>
            <BulletList items={[
              'Name, email address, phone number and preferred contact details.',
              'Details of your enquiry, brief, preferences, itinerary, booking requirements and service history.',
              'Billing details, invoices, transaction records and account correspondence.',
              'Guest, passenger or party information needed to arrange travel, accommodation, dining, security or other services.',
              'Website usage information, such as pages visited, cookie preferences and device or browser information.',
            ]} />
            <p>Where a request requires sensitive information, such as passport details, access requirements or security considerations, we collect only what is necessary to fulfil the arrangement and handle it with additional care.</p>
          </article>

          <article id="how-we-use-information">
            <h2>How we use information</h2>
            <p>We use personal information to:</p>
            <BulletList items={[
              'Respond to enquiries and provide proposals.',
              'Arrange, manage and deliver requested concierge services.',
              'Communicate updates, confirmations, changes and service details.',
              'Manage payments, invoices, records and client accounts.',
              'Maintain service quality, client preferences and appropriate levels of discretion.',
              'Comply with legal, regulatory, tax, accounting and fraud-prevention obligations.',
              'Improve our website, services and client experience.',
            ]} />
            <p>We process information where it is necessary to perform a contract, to take steps before entering into a contract, to comply with legal obligations, with your consent, or where we have a legitimate interest that does not override your rights.</p>
          </article>

          <article id="sharing-information">
            <h2>Sharing information</h2>
            <p>We share personal information only where needed to provide services, operate the business or meet legal obligations.</p>
            <p>This may include sharing relevant details with:</p>
            <BulletList items={[
              'Hotels, residences, restaurants, transport providers, aviation operators, yacht brokers, security providers and other suppliers involved in your request.',
              'Payment, accounting, legal, insurance, IT and communications providers who support our operations.',
              'Authorities, regulators or professional advisers where required by law or necessary to protect legitimate interests.',
            ]} />
            <p>We do not sell personal information. We do not share personal information with advertising networks for cross-site tracking.</p>
          </article>

          <article id="retention">
            <h2>How long we keep information</h2>
            <p>We keep personal information only for as long as necessary for the purpose it was collected, including service delivery, client relationship management, legal compliance, accounting, dispute handling and fraud prevention.</p>
            <p>Enquiry records that do not become active client arrangements are normally kept for up to 24 months. Client records, invoices and service records may be retained for longer where required by law or where there is a legitimate business need.</p>
          </article>

          <article id="security">
            <h2>Security</h2>
            <p>We use reasonable organisational and technical measures to protect personal information from unauthorised access, loss, misuse or disclosure.</p>
            <p>Access to client information is restricted to people and providers who need it for their role. Where highly confidential arrangements are required, additional confidentiality terms or non-disclosure agreements may be used.</p>
          </article>

          <article id="your-rights">
            <h2>Your rights</h2>
            <p>Depending on your location and the circumstances, you may have rights to:</p>
            <BulletList items={[
              'Access the personal information we hold about you.',
              'Ask us to correct inaccurate or incomplete information.',
              'Ask us to delete information where there is no lawful reason for us to keep it.',
              'Object to or restrict certain processing.',
              'Withdraw consent where processing is based on consent.',
              'Request a portable copy of certain information.',
            ]} />
            <p>To exercise these rights, contact {email}. We may need to verify your identity before responding.</p>
          </article>

          <article id="cookies">
            <h2>Cookies</h2>
            <p>The OPV website uses cookies to provide essential functionality, remember preferences and understand website use. More detail is available in our <Link href="/cookies">Cookie Policy</Link>.</p>
          </article>

          <article id="changes">
            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time to reflect changes in our services, website, legal obligations or privacy practices. The date at the top of the page shows when this policy was last updated.</p>
          </article>

          <article id="contact">
            <h2>Contact</h2>
            <div className="legal-contact-card">
              <span>Opulent Vault Limited</span>
              <a href={`mailto:${email}`}>{email}</a>
              <a href="tel:+447385694230">{phone}</a>
            </div>
          </article>
        </div>
      </section>

      <section className="legal-related">
        {[
          ['Terms of Service', '/terms', 'The terms that govern OPV arrangements and confirmed services.'],
          ['Cookie Policy', '/cookies', 'What cookies the OPV website uses and how to manage them.'],
          ['Contact', '/contact', 'Speak to the team about a privacy question or account request.'],
        ].map(([title, href, copy]) => (
          <Link key={title} href={href}>
            <span>{title}</span>
            <p>{copy}</p>
          </Link>
        ))}
      </section>
    </>
  )
}
