'use client'

import { useState } from 'react'

const faqs = [
  ['How long does approval take?', 'We review every application manually and respond within 48 hours. Applications that fit our affiliate profile are typically approved within 24 hours.'],
  ['Is there a cost to join?', 'None. The programme is free to join and there are no fees, subscriptions or minimum performance requirements.'],
  ['How is my referral tracked?', 'You receive a unique referral link. When a contact clicks it, a 90-day cookie is set. If they book within 90 days of clicking, the booking is attributed to you.'],
  ['What counts as a completed booking?', 'A booking is confirmed when the service has been delivered and payment received from the client. For stays this is typically check-out; for charter and security, completion of the engagement.'],
  ['Can I refer corporate clients as well as individuals?', 'Yes. Commission applies to all OPV bookings, including corporate accounts. If you introduce a company whose executive team becomes regular clients, commission applies to every booking they make.'],
  ['What if my client books multiple services?', 'Commission is calculated per service on each booking. If a client books a stay, a car and a table in one arrangement, you earn commission across all three at the applicable rates.'],
  ['How do I reach Elite status?', 'Elite status is automatically applied when you have referred 5 or more active clients within a rolling 12-month period. Your account manager confirms the upgrade.'],
  ['Can I refer other affiliates?', 'Not currently. The programme is for direct client introductions only. Other professionals are welcome to apply independently.'],
]

export default function AffiliateFAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="affiliate-faq">
      {faqs.map(([question, answer], index) => (
        <div className="affiliate-faq-item" key={question}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{question}</span>
            <strong>{open === index ? '-' : '+'}</strong>
          </button>
          {open === index && <p>{answer}</p>}
        </div>
      ))}
    </div>
  )
}
