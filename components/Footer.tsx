import Image from 'next/image'
import Link from 'next/link'
import FooterNewsletter from './FooterNewsletter'

const phone = '+44 7385 694230'
const telHref = 'tel:+447385694230'
const email = 'hello@opulentvault.co.uk'
const mailHref = 'mailto:hello@opulentvault.co.uk'
const whatsappHref = 'https://wa.me/447385694230'

const explore = [
  ['Stays', '/stays'],
  ['Drive', '/drive'],
  ['Eat', '/eat'],
  ['Shop', '/shop'],
  ['Fly', '/fly'],
  ['Yacht', '/yacht'],
  ['Security', '/security'],
]

const company = [
  ['About OPV', '/about'],
  ['Affiliates', '/affiliates'],
  ['Careers', '/careers'],
  ['Press', '/press'],
]

const contactLinks = [
  ['Contact', '/contact'],
  ['FAQ', '/faq'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Cookies', '/cookies'],
]

const stickyActions = [
  ['Stays', '/stays'],
  ['Drive', '/drive'],
  ['Eat', '/eat'],
  ['Affiliate', '/affiliates'],
  ['Account', '/portal/login'],
  ['Fly', '/fly'],
  ['Yacht', '/yacht'],
  ['Chat With Us', '#shan'],
]

const socials = [
  ['Instagram', 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-9Zm6-.7h.01'],
  ['Snapchat', 'M12 3c2.4 0 4 1.8 4 4.3v2.1c0 .8.6 1.3 1.4 1.6l1.4.5c.5.2.5.9 0 1.1l-1.5.6c-.5.2-.8.6-.7 1.1.2 1-.5 1.5-1.5 1.3-.7-.1-1.1.2-1.5.8-.4.7-.9 1.1-1.6 1.1s-1.2-.4-1.6-1.1c-.4-.6-.8-.9-1.5-.8-1 .2-1.7-.3-1.5-1.3.1-.5-.2-.9-.7-1.1l-1.5-.6c-.5-.2-.5-.9 0-1.1l1.4-.5c.8-.3 1.4-.8 1.4-1.6V7.3C8 4.8 9.6 3 12 3Z'],
  ['TikTok', 'M15 3v10.2a4.8 4.8 0 1 1-4.8-4.8c.5 0 1 .1 1.4.2v3.1a1.8 1.8 0 1 0 1.4 1.8V3h2Zm0 0c.7 2 2.1 3.3 4 3.7v3.1c-1.5-.1-2.9-.7-4-1.6'],
  ['Facebook', 'M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z'],
]

function StrokeIcon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return href === '#' ? <a href={href} className="footer-link">{label}</a> : <Link href={href} className="footer-link">{label}</Link>
}

export default function Footer() {
  return (
    <footer className="opv-footer">
      <div className="footer-topbar">
        <p>Private Concierge · Manchester · London · Leeds</p>
        <div>
          <a href={telHref}>{phone}</a>
          <a href={mailHref}>{email}</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          <section className="footer-brand">
            <div className="footer-brand-mark">
              <Image src="/opv-logo.png" alt="OPV Luxury" width={96} height={96} />
            </div>
            <span>Private Concierge</span>
            <div className="footer-socials">
              {socials.map(([label, icon]) => (
                <span key={label} aria-label={`${label} account pending`}>
                  <StrokeIcon path={icon} />
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="footer-heading">Explore</h2>
            <nav className="footer-list">{explore.map(([label, href]) => <FooterLink key={href} href={href} label={label} />)}</nav>
          </section>

          <section>
            <h2 className="footer-heading">Company</h2>
            <nav className="footer-list">{company.map(([label, href]) => <FooterLink key={label} href={href} label={label} />)}</nav>
          </section>

          <section>
            <h2 className="footer-heading">Contact</h2>
            <nav className="footer-list">{contactLinks.map(([label, href]) => <FooterLink key={label} href={href} label={label} />)}</nav>
          </section>

          <section>
            <h2 className="footer-heading">The Inner Circle</h2>
            <FooterNewsletter />
          </section>
        </div>
      </div>

      <div className="footer-bottombar">
        <p>© 2026 OPV</p>
      </div>

      <div className="footer-sticky-bar-wrap" aria-label="Quick OPV actions">
        <nav className="footer-sticky-bar">
          {stickyActions.map(([label, href]) => {
            const isChat = label === 'Chat With Us'
            return (
              <Link
                key={label}
                href={href}
                className={`footer-sticky-pill${isChat ? ' footer-sticky-pill-chat' : ''}`}
                data-open-shan={isChat ? 'true' : undefined}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}
