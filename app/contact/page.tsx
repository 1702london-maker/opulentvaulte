import ContactForm from './ContactForm'
import MapEmbed from './MapEmbed'

const phone = '+44 7385 694230'
const telHref = 'tel:+447385694230'
const email = 'hello@opulentvault.co.uk'
const mailHref = 'mailto:hello@opulentvault.co.uk'
const whatsAppHref = 'https://wa.me/447385694230'

const contactMethods = [
  {
    label: 'Call us',
    title: 'Call the team',
    value: phone,
    href: telHref,
    description: 'Direct line to the OPV concierge team. Answered at any hour, any day. No IVR, no menu, no hold - a person picks up.',
    cta: 'Call now',
    icon: 'M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.3 19.3 0 0 1-5.95-5.95A19.7 19.7 0 0 1 2.23 4.2 2 2 0 0 1 4.21 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.79a2 2 0 0 1-.45 2.11L8.17 9.87a15.4 15.4 0 0 0 5.96 5.96l1.25-1.25a2 2 0 0 1 2.11-.45c.89.31 1.83.53 2.79.66A2 2 0 0 1 22 16.9Z',
  },
  {
    label: 'Email us',
    title: 'Send an email',
    value: email,
    href: mailHref,
    description: 'For briefs that benefit from detail - dates, guest counts, specific requirements. We read every email ourselves and respond within two hours.',
    cta: 'Send email',
    icon: 'M4 6h16v12H4V6Zm0 0 8 7 8-7',
  },
  {
    label: 'WhatsApp',
    title: 'WhatsApp',
    value: phone,
    href: whatsAppHref,
    external: true,
    description: 'The fastest route for same-day requests, last-minute changes and anything where speed matters. Message us directly - no chatbot, no delay.',
    cta: 'Message now',
    icon: 'M21 11.5a8.4 8.4 0 0 1-12.2 7.45L3 20l1.3-5.16A8.4 8.4 0 1 1 21 11.5Zm-11-3c.4 2 1.6 3.7 3.5 4.6l1.35-1.1 2.15.95-.35 1.85c-.2.55-.85.84-1.4.65-3.35-1.1-5.75-3.55-6.86-6.86-.18-.55.1-1.2.66-1.4L10 8.5Z',
  },
]

const socials = [
  ['Instagram', '#', 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-9Zm6-.7h.01'],
  ['LinkedIn', '#', 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4.5 4.5 0 0 1 2-3ZM2 9h4v12H2V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'],
  ['X', '#', 'M4 4l16 16M20 4 4 20'],
  ['WhatsApp', whatsAppHref, 'M21 11.5a8.4 8.4 0 0 1-12.2 7.45L3 20l1.3-5.16A8.4 8.4 0 1 1 21 11.5Z'],
]

function StrokeIcon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-left">
          <span className="eyebrow">Get in touch</span>
          <h1>We're always <em>available.</em></h1>
          <p>No automated responses. No ticketing system. No hold music. A member of the OPV team picks up every call and responds to every message - typically within two hours, often within minutes.</p>
          <small>Tell us what you need. We'll handle the rest.</small>
        </div>
        <div className="contact-hero-right">
          <div>
            <span>Call us</span>
            <a href={telHref}>{phone}</a>
            <p>Answered around the clock, 365 days a year. If we miss you, we call back within 10 minutes.</p>
          </div>
          <div>
            <span>Email us</span>
            <a href={mailHref}>{email}</a>
            <p>For detailed briefs, document sharing and anything that benefits from a written record. Response within 2 hours.</p>
          </div>
          <div>
            <span>WhatsApp</span>
            <a href={whatsAppHref} target="_blank" rel="noopener noreferrer">{phone}</a>
            <p>Preferred for immediate requests, quick confirmations and anything time-sensitive. Message us directly.</p>
          </div>
        </div>
      </section>

      <section className="contact-channel-section">
        <div className="contact-channel-grid">
          {contactMethods.map(method => (
            <article key={method.title} className="contact-channel-card">
              <StrokeIcon path={method.icon} />
              <span>{method.label}</span>
              <h2>{method.title}</h2>
              <a href={method.href} target={method.external ? '_blank' : undefined} rel={method.external ? 'noopener noreferrer' : undefined}>{method.value}</a>
              <p>{method.description}</p>
              <a className="btn-ghost" href={method.href} target={method.external ? '_blank' : undefined} rel={method.external ? 'noopener noreferrer' : undefined}>{method.cta} -&gt;</a>
            </article>
          ))}
        </div>
      </section>

      <section id="enquiry" className="contact-enquiry-section">
        <div className="contact-enquiry-grid">
          <ContactForm />
          <aside className="contact-office-panel">
            <span className="eyebrow">Find us</span>
            <h2>Two offices. <em>One standard.</em></h2>
            <p>OPV is headquartered in Manchester with a London presence. Both offices run to the same standard - walk-in appointments are not usual, but the team is always reachable.</p>
            {[
              ['Manchester - Primary', '14 John Dalton Street · Manchester · M2 6JR'],
              ['London', '22 Brook Mews · Mayfair · London · W1K 4DW'],
            ].map(([label, address]) => (
              <div className="contact-office-block" key={label}>
                <span>{label}</span>
                <strong>OPV Luxury</strong>
                <p>{address}</p>
                <a href={telHref}>{phone}</a>
                <a href={mailHref}>{email}</a>
              </div>
            ))}
            <div className="contact-hours">
              <span>Office hours</span>
              {[
                ['Mon-Fri', '08:00 - 22:00'],
                ['Saturday', '09:00 - 20:00'],
                ['Sunday', '10:00 - 18:00'],
                ['Emergency', '24 hours'],
              ].map(([day, time]) => <div key={day}><small>{day}</small><strong>{time}</strong></div>)}
              <div className="contact-emergency">
                <span>Emergency line</span>
                <a href={telHref}>{phone}</a>
                <p>For existing clients with urgent requirements outside office hours.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <MapEmbed />

      <section className="contact-social-section">
        <div className="contact-social-left">
          <span className="eyebrow">Follow</span>
          <h2>Stay in the <em>world.</em></h2>
          <p>New residences, seasonal fleet additions, empty legs and private dining access - quietly announced to those who follow.</p>
          <div className="contact-social-links">
            {socials.map(([label, href, icon]) => (
              <a key={label} href={href} target={href === whatsAppHref ? '_blank' : undefined} rel={href === whatsAppHref ? 'noopener noreferrer' : undefined}>
                <StrokeIcon path={icon} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-social-right">
          <p>One contact. Every arrangement. Nothing falls between the cracks.</p>
          <small>OPV Luxury · Budruum Ltd · Manchester & London · Registered in England & Wales</small>
        </div>
      </section>

      <section className="contact-closing">
        <p>Tell us what you need. Leave the rest to us.</p>
        <div>
          <a className="btn-primary" href={telHref}>Call now</a>
          <a className="btn-ghost" href={mailHref}>Send an email</a>
        </div>
      </section>
    </>
  )
}
