import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | OPV',
  description: 'Terms of Service for Opulent Vault Limited, trading as OPV.',
}

const email = 'hello@opulentvault.co.uk'
const phone = '+44 7385 694230'

const keyPoints = [
  'Services are arranged by Opulent Vault Limited on your behalf.',
  'Cancellation terms vary by service — stated clearly before any commitment.',
  'We do not charge for services we cannot deliver.',
  'Our liability is limited to the value of the service arranged.',
  'These terms are governed by the law of England and Wales.',
  `Questions: ${email} · ${phone}`,
]

const sections = [
  ['About these terms', 'about'],
  ['Who we are', 'who-we-are'],
  ['Our services', 'our-services'],
  ['Making a booking', 'making-a-booking'],
  ['Pricing and payment', 'pricing-and-payment'],
  ['Cancellation and changes', 'cancellation'],
  ['Our responsibilities', 'our-responsibilities'],
  ['Your responsibilities', 'your-responsibilities'],
  ['Liability', 'liability'],
  ['Intellectual property', 'intellectual-property'],
  ['Confidentiality', 'confidentiality'],
  ['Complaints', 'complaints'],
  ['Governing law', 'governing-law'],
  ['Contact', 'contact'],
]

const cancellations = [
  ['Chauffeured transport', '24 hours', '100% of booking value if cancelled within 24 hours'],
  ['Property stays', '14 days', '50% within 14 days · 100% within 48 hours of check-in'],
  ['Dining reservations', '48 hours', 'Subject to venue terms — communicated at booking'],
  ['Private aviation', '72 hours', 'Subject to operator terms — typically 25–100% depending on notice'],
  ['Yacht charter', '30 days', 'Subject to owner terms — typically 50% within 30 days · 100% within 7 days'],
  ['Security services', '48 hours', '50% within 48 hours · 100% within 24 hours'],
  ['Personal shopping', 'No charge', 'Sourcing fee may apply if significant work has been completed'],
]

function BulletList({ items }: { items: string[] }) {
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export default function TermsPage() {
  return (
    <>
      <section className="legal-hero">
        <div>
          <span className="eyebrow">Legal</span>
          <h1>Terms of <em>Service.</em></h1>
          <p>These terms govern the arrangement of services by Opulent Vault Limited. They are written to be understood, not to create ambiguity.</p>
          <small>Last updated: August 2026 · Opulent Vault Limited</small>
        </div>
        <aside>
          <h2>Key points</h2>
          {keyPoints.map(point => <p key={point}><i />{point}</p>)}
        </aside>
      </section>

      <section className="legal-body">
        <nav aria-label="Terms contents">
          <span>Contents</span>
          {sections.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="legal-content">
          <article id="about">
            <h2>About these terms</h2>
            <p>These Terms of Service govern the relationship between Opulent Vault Limited and any person who engages our services or uses our website at opulentvault.co.uk.</p>
            <p>By making an enquiry, accepting a proposal or engaging any OPV service, you agree to these terms. If you do not agree, please do not use our services.</p>
            <p>We may update these terms from time to time. The version in force at the time of your booking applies to that booking. We will notify you of material changes by email.</p>
          </article>
          <article id="who-we-are">
            <h2>Who we are</h2>
            <p>Opulent Vault Limited is a private concierge company operating under the trading name OPV.</p>
            <p>Contact: {email} · {phone}</p>
            <p>References to “OPV”, “we”, “us” and “our” throughout these terms refer to Opulent Vault Limited.</p>
          </article>
          <article id="our-services">
            <h2>Our services</h2>
            <p>OPV arranges services on your behalf including, but not limited to: private residences and stays, chauffeured and self-drive vehicles, private dining and restaurant reservations, personal shopping and luxury sourcing, close protection and security, private aviation and helicopter charter, and yacht charter.</p>
            <p>We act as an arranger and concierge — coordinating with third-party suppliers to deliver the services you request. We are not in all cases the direct provider of the service itself.</p>
            <p>The specific terms applicable to each service type — including cancellation, liability and supplier terms — are communicated at the point of booking confirmation.</p>
          </article>
          <article id="making-a-booking">
            <h2>Making a booking</h2>
            <p>A booking is confirmed when:</p>
            <BulletList items={[
              'You have received a written confirmation from OPV stating the service details, pricing and cancellation terms.',
              'You have provided explicit approval — by email, message or phone — of those terms.',
              'Where a deposit or full payment is required, that payment has been received.',
            ]} />
            <p>No booking is confirmed until all three conditions above are met. Verbal discussions, proposals and shortlists presented prior to your approval do not constitute a confirmed booking.</p>
            <p>We reserve the right to decline any booking at our discretion without obligation to provide a reason.</p>
          </article>
          <article id="pricing-and-payment">
            <h2>Pricing and payment</h2>
            <p>All prices are quoted in pounds sterling (GBP) and are inclusive of VAT where applicable, unless stated otherwise.</p>
            <p>Payment terms are stated on each invoice. Standard terms are payment within 7 days of invoice date unless otherwise agreed.</p>
            <p>For certain services — particularly aviation, superyacht charter and extended security details — a deposit of 25–50% is required to secure the booking. The balance is due on or before the service date unless otherwise agreed.</p>
            <p>We accept payment by bank transfer. We do not accept payment by personal cheque. Corporate payment terms are available for established accounts.</p>
            <p>Prices quoted are valid for the period stated in the proposal. OPV reserves the right to adjust pricing where third-party costs change materially between proposal and confirmation.</p>
          </article>
          <article id="cancellation">
            <h2>Cancellation and changes</h2>
            <p>Cancellation terms vary by service. The specific terms applicable to your booking are communicated at the point of confirmation. General terms are as follows:</p>
            <div className="legal-table terms-cancel-table">
              <div><span>Service</span><span>Notice required</span><span>Cancellation charge</span></div>
              {cancellations.map(([service, notice, charge]) => <div key={service}><strong>{service}</strong><span>{notice}</span><span>{charge}</span></div>)}
            </div>
            <p>Changes to confirmed bookings are accommodated where possible. Changes within 24 hours of service delivery may be subject to additional charges.</p>
            <p>All cancellations must be confirmed in writing to {email}. Verbal cancellations are not accepted.</p>
          </article>
          <article id="our-responsibilities">
            <h2>Our responsibilities</h2>
            <p>Opulent Vault Limited is responsible for:</p>
            <BulletList items={[
              'Arranging the services you have requested to the standard described at the point of booking.',
              'Communicating with you promptly about your arrangements.',
              'Acting in your interests when coordinating with third-party suppliers.',
              'Maintaining the confidentiality of your personal information in accordance with our Privacy Policy.',
            ]} />
            <p>Where a service cannot be delivered as arranged due to circumstances beyond our control — including supplier failure, force majeure, or regulatory prohibition — we will notify you immediately and work to arrange a suitable alternative. Where no suitable alternative can be found, a full or partial refund will be issued depending on the circumstances.</p>
          </article>
          <article id="your-responsibilities">
            <h2>Your responsibilities</h2>
            <p>When engaging OPV services, you are responsible for:</p>
            <BulletList items={[
              'Providing accurate and complete information in your brief.',
              'Notifying us promptly of any changes to your requirements.',
              'Complying with the terms and conditions of any third-party supplier whose services are arranged on your behalf.',
              'Ensuring all members of your party are aware of and comply with applicable property rules, aviation regulations and other supplier requirements.',
              'Payment of all confirmed invoices within the stated terms.',
            ]} />
            <p>OPV cannot be held responsible for service failures resulting from inaccurate or incomplete information provided by you.</p>
          </article>
          <article id="liability">
            <h2>Liability</h2>
            <p>Opulent Vault Limited's total liability to you in connection with any single booking or arrangement is limited to the value of that booking as stated on the confirmed invoice.</p>
            <p>We are not liable for:</p>
            <BulletList items={[
              'Indirect or consequential losses — including loss of profit, loss of opportunity or reputational damage.',
              'Failures by third-party suppliers where we have exercised reasonable care in their selection.',
              'Losses arising from circumstances beyond our reasonable control.',
            ]} />
            <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded by law.</p>
            <p>If you are a consumer, your statutory rights are unaffected by these terms.</p>
          </article>
          {[
            ['intellectual-property', 'Intellectual property', 'All content on the OPV website — including text, images, design, logos and software — is the property of Opulent Vault Limited or its licensors and is protected by intellectual property law.', 'You may not reproduce, distribute or use any OPV content without our prior written permission.', 'Nothing in these terms grants you any licence to use the OPV name, logo or brand in any context.'],
            ['confidentiality', 'Confidentiality', 'We treat all client information with absolute confidentiality. Our approach to confidentiality is described in detail in our Privacy Policy.', 'Where specific confidentiality arrangements are required — including NDA agreements for security engagements — these are documented separately and take precedence over the general terms in this section.', 'We expect the same discretion in return. Details of pricing, arrangements and the identity of other OPV clients are confidential and should not be disclosed.'],
            ['complaints', 'Complaints', 'If you are dissatisfied with any aspect of OPV’s service, we want to hear about it immediately.', `To make a complaint: contact us at ${email} or call ${phone}. We acknowledge all complaints within 24 hours and aim to resolve them within 5 business days.`, 'Where a complaint relates to a third-party supplier, we will represent your interests with that supplier and keep you informed throughout.', 'If you are not satisfied with our response, you may refer the matter to an appropriate dispute resolution service. Details available on request.'],
            ['governing-law', 'Governing law', 'These terms are governed by the law of England and Wales. Any disputes arising from or in connection with these terms are subject to the exclusive jurisdiction of the courts of England and Wales.', 'If any provision of these terms is found to be unenforceable, the remaining provisions continue in full force.'],
          ].map(([id, title, ...paras]) => (
            <article id={id} key={id}><h2>{title}</h2>{paras.map(p => <p key={p}>{p}</p>)}</article>
          ))}
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
          ['Privacy Policy', '/privacy', 'How OPV handles personal information and client confidentiality.'],
          ['Cookie Policy', '/cookies', 'What cookies the OPV website uses and how to manage them.'],
          ['Contact', '/contact', 'Speak to the team about terms, bookings or account requests.'],
        ].map(([title, href, copy]) => <Link key={title} href={href}><span>{title}</span><p>{copy}</p></Link>)}
      </section>
    </>
  )
}
