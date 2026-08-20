import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | OPV',
  description: 'Cookie Policy for Opulent Vault Limited and the OPV website.',
}

const email = 'hello@opulentvault.co.uk'
const phone = '+44 7385 694230'

const summary = [
  'We use three types of cookies: essential, analytics and preference.',
  'We do not use advertising cookies. We do not track you across other websites.',
  'You can decline non-essential cookies at any time.',
  `Questions: ${email}`,
]

const navItems = [
  ['What are cookies', 'what-are-cookies'],
  ['The cookies we use', 'cookies-we-use'],
  ['What we do not use', 'what-we-dont-use'],
  ['Managing preferences', 'managing-preferences'],
  ['Third-party cookies', 'third-party'],
  ['Changes', 'changes'],
  ['Contact', 'contact'],
]

const cookieGroups = [
  {
    title: 'Essential cookies',
    body: 'Required for the website to function. These cannot be disabled — without them, core features of the site will not work.',
    rows: [
      ['session_id', 'Maintains your session as you browse', 'Session'],
      ['csrf_token', 'Protects against cross-site request forgery', 'Session'],
      ['cookie_consent', 'Remembers your cookie preferences', '12 months'],
    ],
  },
  {
    title: 'Analytics cookies',
    body: 'Help us understand how visitors use the site — which pages are visited, how long people spend and where they come from. This data is anonymised and aggregated. We use it to improve the site.',
    rows: [
      ['_ga', 'Google Analytics — distinguishes users', '2 years'],
      ['_ga_[ID]', 'Google Analytics — session state', '2 years'],
      ['_gid', 'Google Analytics — distinguishes users', '24 hours'],
    ],
    note: 'You can opt out of Google Analytics at any time via tools.google.com/dlpage/gaoptout',
  },
  {
    title: 'Preference cookies',
    body: 'Remember your choices as you use the site — region, language or display preferences.',
    rows: [
      ['opv_region', 'Remembers your selected region', '12 months'],
      ['opv_currency', 'Remembers your currency preference', '12 months'],
    ],
  },
]

const browserLinks = [
  ['Chrome', 'https://support.google.com/chrome/answer/95647'],
  ['Safari', 'https://support.apple.com/guide/safari/manage-cookies'],
  ['Firefox', 'https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox'],
  ['Edge', 'https://support.microsoft.com/microsoft-edge/delete-cookies'],
  ['Opera', 'https://help.opera.com/en/latest/web-preferences'],
]

function CookieTable({ rows }: { rows: string[][] }) {
  return (
    <div className="legal-table cookie-table">
      <div><span>Cookie name</span><span>Purpose</span><span>Duration</span></div>
      {rows.map(([name, purpose, duration]) => (
        <div key={name}><strong>{name}</strong><span>{purpose}</span><span>{duration}</span></div>
      ))}
    </div>
  )
}

export default function CookiesPage() {
  return (
    <>
      <section className="legal-hero">
        <div>
          <span className="eyebrow">Legal</span>
          <h1>Cookie <em>Policy.</em></h1>
          <p>This policy explains the cookies used on the OPV website, what they do and how to manage your preferences.</p>
          <small>Last updated: August 2026 · Opulent Vault Limited</small>
        </div>
        <aside>
          <h2>Key points</h2>
          {summary.map(item => (
            <p key={item}><i />{item}</p>
          ))}
        </aside>
      </section>

      <section className="legal-body">
        <nav aria-label="Cookie policy contents">
          <span>Contents</span>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <div className="legal-content">
          <article id="what-are-cookies">
            <h2>What are cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work, remember your preferences and help site owners understand how their sites are used.</p>
            <p>Cookies do not give us access to your device or any information beyond what they store themselves.</p>
          </article>

          <article id="cookies-we-use">
            <h2>The cookies we use</h2>
            <p>We use three categories of cookie on the OPV website:</p>
            {cookieGroups.map(group => (
              <div className="cookie-type" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
                <CookieTable rows={group.rows} />
                {group.note ? <small>{group.note}</small> : null}
              </div>
            ))}
          </article>

          <article id="what-we-dont-use">
            <h2>What we do not use</h2>
            <p>We do not use:</p>
            <div className="legal-cross-list">
              {[
                'Advertising or targeting cookies',
                'Cross-site tracking of any kind',
                'Social media tracking pixels',
                'Third-party behavioural analytics',
              ].map(item => <p key={item}><b>×</b><span>{item}</span></p>)}
            </div>
            <p>We do not share analytics data with advertising networks.</p>
          </article>

          <article id="managing-preferences">
            <h2>Managing your preferences</h2>
            <p>You can manage cookie preferences in two ways:</p>
            <h3>Via our cookie banner</h3>
            <p>When you first visit the site, a cookie banner allows you to accept or decline non-essential cookies. You can change your preference at any time by clearing your browser cookies and revisiting the site.</p>
            <h3>Via your browser</h3>
            <p>All major browsers allow you to block or delete cookies. Instructions for the most common browsers:</p>
            <div className="browser-list">
              {browserLinks.map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"><span>{name}</span><b>Open guide</b></a>
              ))}
            </div>
            <p>Note: blocking essential cookies will affect the functionality of the site.</p>
          </article>

          <article id="third-party">
            <h2>Third-party cookies</h2>
            <p>The OPV website may include content from third parties — such as embedded maps or video — which may set their own cookies. These are not controlled by Opulent Vault Limited.</p>
            <p>Third-party services that may set cookies:</p>
            <ul>
              <li>Google Maps (contact page map embed) — subject to Google's privacy policy</li>
              <li>Google Analytics — subject to Google's privacy policy</li>
            </ul>
            <p>We do not use Facebook Pixel, LinkedIn Insight Tag or any other social media tracking.</p>
          </article>

          <article id="changes">
            <h2>Changes to this policy</h2>
            <p>We update this policy when our cookie use changes or when legal requirements change. The date at the top of the page shows when the policy was last updated.</p>
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
          ['Privacy Policy', '/privacy', 'How OPV handles personal information and client confidentiality.'],
          ['Terms of Service', '/terms', 'The terms that govern OPV arrangements and confirmed services.'],
          ['Contact', '/contact', 'Speak to the team about a booking, privacy question or account request.'],
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
