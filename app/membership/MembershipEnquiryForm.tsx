'use client'

import { FormEvent, useState } from 'react'

export default function MembershipEnquiryForm() {
  const [tier, setTier] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setBusy(true)
    setStatus('')

    const message = [
      `Tier: ${data.get('tier')}`,
      `Use: ${data.get('use')}`,
      `Account: ${data.get('accountType')}`,
      `Company: ${data.get('company') || 'N/A'}`,
      `Source: ${data.get('source')}`,
      `Note: ${data.get('note') || 'N/A'}`,
    ].join('\n')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'membership',
          service: 'membership',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setTier('')
      setStatus('Received. A member of the OPV team will be in touch within 24 hours to arrange a call.')
    } catch {
      setStatus('We could not submit this just now. Please email hello@opulentvault.co.uk.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="membership-form" onSubmit={onSubmit}>
      <label><span>Full name</span><input required name="name" type="text" placeholder="Your name" /></label>
      <label><span>Email</span><input required name="email" type="email" placeholder="your@email.com" /></label>
      <label><span>Phone - required for membership onboarding</span><input required name="phone" type="tel" placeholder="+44..." /></label>
      <label>
        <span>Tier of interest</span>
        <select required name="tier" value={tier} onChange={(event) => setTier(event.target.value)}>
          <option value="">Select tier</option>
          <option>Access - no membership</option>
          <option>Sapphire - From £250/month</option>
          <option>Diamond - From £750/month</option>
          <option>Gold - By invitation</option>
          <option>Not sure - advise me</option>
        </select>
      </label>
      <label className="membership-wide"><span>How would you primarily use OPV?</span><textarea required name="use" placeholder="Stays, Drive, Dining, Security, Aviation, Yacht - and roughly how often" /></label>
      <label>
        <span>Personal or company?</span>
        <select required name="accountType" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Personal</option>
          <option>Corporate</option>
          <option>Both</option>
        </select>
      </label>
      <label><span>Company name</span><input name="company" type="text" placeholder="Optional" /></label>
      <label>
        <span>How did you hear about OPV?</span>
        <select required name="source" defaultValue="">
          <option value="" disabled>Select source</option>
          <option>Existing client referral</option>
          <option>Professional contact</option>
          <option>LinkedIn</option>
          <option>Search</option>
          <option>Event</option>
          <option>Other</option>
        </select>
      </label>
      <label className="membership-wide"><span>Anything else we should know?</span><textarea name="note" placeholder="Travel frequency, specific requirements, anything that helps us prepare for the call..." /></label>
      {tier.includes('Gold') && (
        <div className="membership-gold-note">
          <span>Gold membership</span>
          <p>Your expression of interest will be reviewed by the OPV director personally. If the Gold tier is the right fit, you will receive a direct call within 48 hours.</p>
        </div>
      )}
      <button className="btn-primary membership-wide" type="submit" disabled={busy}>{busy ? 'Sending...' : 'Submit membership enquiry ->'}</button>
      {status && <p className="membership-status membership-wide">{status}</p>}
    </form>
  )
}
