'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

const roles = [
  ['Senior Concierge', 'Full-time', 'Manchester', 'Own client briefs from first call to final confirmation across residences, cars, dining and private access.'],
  ['Client Relations Executive', 'Full-time', 'London', 'Qualify incoming enquiries, protect the tone of first contact and coordinate briefs with the concierge team.'],
  ['Close Protection Officer', 'Contract', 'Manchester & London', 'SIA Close Protection licence required. Plainclothes work, route planning and discreet principal movement.'],
]

const standards = [
  ['Judgement', 'You can make the right call before a process catches up.'],
  ['Discretion', 'Client information stays private without needing reminders.'],
  ['Delivery', 'Almost right is not the standard. Finished means exact.'],
  ['Composure', 'Pressure is handled calmly and away from the client.'],
]

const moments = [
  {
    title: 'Private Client Desk',
    copy: 'Briefs are handled personally, with context carried from request to delivery.',
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=90',
  },
  {
    title: 'Supplier Standards',
    copy: 'The role is coordination, verification and judgement, not call-centre handoff.',
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=90',
  },
  {
    title: 'Field Readiness',
    copy: 'The best team members are as comfortable on site as they are behind a desk.',
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90',
  },
]

function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="careers-form-success" role="status">
        <strong>Application received.</strong>
        <p>Thank you. OPV will review the note and respond if there is a clear fit.</p>
      </div>
    )
  }

  return (
    <form className="careers-form" onSubmit={onSubmit}>
      <label><span>Full name</span><input required name="name" type="text" placeholder="Your name" /></label>
      <label><span>Email</span><input required name="email" type="email" placeholder="your@email.com" /></label>
      <label><span>Phone</span><input required name="phone" type="tel" placeholder="+44..." /></label>
      <label>
        <span>Role</span>
        <select required name="role" defaultValue="">
          <option value="" disabled>Select role</option>
          {roles.map(([title]) => <option key={title}>{title}</option>)}
          <option>Speculative application</option>
        </select>
      </label>
      <label className="careers-form-wide">
        <span>Why OPV?</span>
        <textarea required name="note" placeholder="Keep it specific. Tell us where your standard has already been tested." />
      </label>
      <button className="btn-primary careers-form-wide" type="submit">Submit application -&gt;</button>
    </form>
  )
}

export default function CareersPage() {
  return (
    <main className="editorial-page">
      <section className="editorial-hero careers-editorial-hero">
        <div className="editorial-hero-copy">
          <span className="eyebrow">Careers</span>
          <h1>Small team. <em>Exacting standard.</em></h1>
          <p>
            OPV grows carefully. We are interested in people who understand private clients, hold detail naturally and
            know how to deliver without turning the work into theatre.
          </p>
          <a className="btn-primary" href="#apply">View roles -&gt;</a>
        </div>
        <div className="editorial-hero-image">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=90"
            alt="Refined private office prepared for concierge work"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="editorial-section editorial-ice">
        <span className="eyebrow">The standard</span>
        <h2>What matters <em>here.</em></h2>
        <div className="editorial-card-grid four">
          {standards.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <span className="eyebrow">Inside the work</span>
        <h2>Service, but <em>private.</em></h2>
        <div className="editorial-image-row careers-moment-row">
          {moments.map((moment) => (
            <article key={moment.title}>
              <Image src={moment.src} alt={moment.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-feature reverse">
        <div className="editorial-feature-copy">
          <span className="eyebrow">Open roles</span>
          <h2>Current <em>openings.</em></h2>
          <div className="careers-role-list compact">
            {roles.map(([title, type, location, description]) => (
              <article key={title}>
                <div>
                  <h3>{title}</h3>
                  <span>{type} · {location}</span>
                  <p>{description}</p>
                </div>
                <aside><a href="#apply">Apply -&gt;</a></aside>
              </article>
            ))}
          </div>
        </div>
        <div className="editorial-feature-image">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=90"
            alt="Manchester commercial architecture in a quiet premium palette"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="careers-apply careers-ice" id="apply">
        <div>
          <span className="eyebrow">Apply</span>
          <h2>Send us your <em>application.</em></h2>
          <p>
            We read applications for judgement, clarity and proof of standards. A short, specific note is better than a
            generic cover letter.
          </p>
        </div>
        <CareersApplicationForm />
      </section>
    </main>
  )
}
