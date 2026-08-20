'use client'

import { FormEvent, useState } from 'react'

const roles = [
  ['Senior Concierge', 'Full-time', 'Manchester', 'The central role. You manage client relationships, brief suppliers and coordinate arrangements across all service categories. You have experience in luxury hospitality, private aviation or high-end property - ideally more than one. You are calm, discreet and deeply reliable.'],
  ['Close Protection Officer', 'Contract', 'Manchester & London', 'SIA Close Protection licence required. Former military or Metropolitan Police background expected. You are suited to plainclothes environments, medically trained and available at short notice. NDA signed before interview.'],
  ['Client Relations Executive', 'Full-time', 'London', 'First point of contact for new client enquiries. You handle incoming briefs, qualify requirements and ensure the initial experience of OPV matches the standard of the service itself. Background in luxury goods, private banking or premium hospitality preferred.'],
]

const qualities = [
  ['Judgement over process', 'The ability to make the right call in an unfamiliar situation without being told what to do. OPV clients do not wait for escalation.'],
  ['Discretion as default', 'Not as a policy you follow but as a value you hold. The kind of person who does not mention who they work with at dinner.'],
  ['Obsession with delivery', 'Not satisfaction with arrangements that are mostly right. An inability to sign off on something that is not exactly right.'],
  ['Composure under pressure', 'Last-minute changes, unavailable suppliers, demanding timelines. The ability to resolve these calmly and without making the client aware of the difficulty.'],
]

const expectations = [
  ['No hierarchy for its own sake', 'Small team means direct access to decision-making. Ideas are heard if they are good. Seniority is earned by judgement and delivery, not tenure.'],
  ['Clients who are serious', 'The briefs are real, the standards are high and the satisfaction of delivering correctly is genuine. You are not processing requests - you are making arrangements that matter.'],
  ['Discretion in both directions', 'OPV protects client information absolutely. We extend the same respect to team information. What happens inside OPV stays there.'],
]

function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="careers-form-success" role="status">
        <strong>Application received.</strong>
        <p>We will be in touch within 10 business days.</p>
        <small>Please also send your CV directly to hello@opulentvault.co.uk with the role in the subject line.</small>
      </div>
    )
  }

  return (
    <form className="careers-form" onSubmit={onSubmit}>
      <label><span>Full name</span><input required type="text" name="name" placeholder="Your name" /></label>
      <label><span>Email</span><input required type="email" name="email" placeholder="your@email.com" /></label>
      <label><span>Phone</span><input required type="tel" name="phone" placeholder="+44..." /></label>
      <label>
        <span>Role applying for</span>
        <select required name="role" defaultValue="">
          <option value="" disabled>Select role</option>
          <option>Senior Concierge</option>
          <option>Close Protection Officer</option>
          <option>Client Relations Executive</option>
          <option>Speculative application</option>
        </select>
      </label>
      <label><span>Current location</span><input required type="text" name="location" placeholder="City / country" /></label>
      <label>
        <span>Relevant background</span>
        <select required name="background" defaultValue="">
          <option value="" disabled>Select background</option>
          <option>Luxury hospitality</option>
          <option>Private aviation</option>
          <option>Security</option>
          <option>Finance</option>
          <option>Property</option>
          <option>Other</option>
        </select>
      </label>
      <label className="careers-form-wide">
        <span>Cover note</span>
        <textarea required name="note" placeholder="Tell us why you are right for OPV. Be specific - a generic cover letter will not be read." />
      </label>
      <label className="careers-file careers-form-wide">
        <span>CV upload</span>
        <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name || '')} />
        <b>{fileName || 'Choose file'}</b>
        <small>File acknowledged locally. Please also email your CV after submitting.</small>
      </label>
      <label className="careers-form-wide">
        <span>How did you hear about OPV?</span>
        <select required name="source" defaultValue="">
          <option value="" disabled>Select source</option>
          <option>LinkedIn</option>
          <option>Referral</option>
          <option>Search</option>
          <option>Other</option>
        </select>
      </label>
      <button className="btn-primary careers-form-wide" type="submit">Submit application -&gt;</button>
    </form>
  )
}

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div>
          <span className="eyebrow">Careers</span>
          <h1>Small team. <em>High standard.</em></h1>
          <p>OPV is not a large organisation and does not intend to become one. We grow only when we find people who meet the standard the role requires. If that describes you, we would like to hear from you.</p>
        </div>
        <aside>
          <strong>3</strong>
          <span>Current openings</span>
          <p>We also consider exceptional speculative applications at any time.</p>
          <small>Opulent Vault Limited</small>
        </aside>
      </section>

      <section className="careers-section careers-white">
        <span className="eyebrow">What we look for</span>
        <h2>Four things that <em>matter here.</em></h2>
        <div className="careers-quality-grid">
          {qualities.map(([title, copy]) => <article key={title}><i /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="careers-section careers-ice">
        <span className="eyebrow">Open roles</span>
        <h2>Current <em>openings.</em></h2>
        <div className="careers-role-list">
          {roles.map(([title, type, location, description]) => (
            <article key={title}>
              <div><h3>{title}</h3><span>{type} · {location}</span><p>{description}</p></div>
              <aside><a href="#apply">Apply -&gt;</a><small>{location}</small></aside>
            </article>
          ))}
        </div>
        <p className="careers-speculative">Don&apos;t see a role that fits? We consider speculative applications from exceptional candidates at any time. Send your CV and a brief note to <a href="mailto:hello@opulentvault.co.uk">hello@opulentvault.co.uk</a></p>
      </section>

      <section className="careers-section careers-white">
        <span className="eyebrow">Working here</span>
        <h2>What you can <em>expect.</em></h2>
        <div className="careers-expect-grid">
          {expectations.map(([title, copy]) => <article key={title}><i /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="careers-apply careers-ice" id="apply">
        <div>
          <span className="eyebrow">Apply</span>
          <h2>Send us your <em>application.</em></h2>
          <p>Applications are reviewed by the founding team. We respond to every application - successful or not - within 10 business days.</p>
        </div>
        <CareersApplicationForm />
      </section>
    </>
  )
}
