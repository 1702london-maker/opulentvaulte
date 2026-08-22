import { escapeHtml, prettyService } from '../email'

const shell = (title: string, body: string) => `
  <div style="margin:0;background:#F7FBFE;padding:28px 0;font-family:Arial,sans-serif;color:#1A2733;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #C8DFF0;">
      <div style="background:#1B6CA8;color:#fff;padding:24px 30px;letter-spacing:5px;text-transform:uppercase;font-size:12px;">OPV</div>
      <div style="padding:34px 30px;">
        <h1 style="font-family:Georgia,serif;font-weight:400;font-size:30px;margin:0 0 20px;">${title}</h1>
        ${body}
      </div>
      <div style="padding:18px 30px;border-top:1px solid #EAF4FB;color:#6B87A0;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Opulent Vault Limited · hello@opulentvault.co.uk</div>
    </div>
  </div>
`

export function enquiryNotificationEmail(input: {
  service: string
  full_name: string
  email: string
  phone?: string | null
  message?: string | null
  metadata?: unknown
  enquiry_id: string
  priority?: number
}) {
  return shell(
    `New ${escapeHtml(prettyService(input.service))} enquiry`,
    `
      <p><strong>Priority:</strong> ${escapeHtml(input.priority || 3)}</p>
      <p><strong>Name:</strong> ${escapeHtml(input.full_name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone || 'Not provided')}</p>
      <p><strong>Message:</strong><br>${escapeHtml(input.message || 'No message').replace(/\n/g, '<br>')}</p>
      <p><strong>Enquiry ID:</strong> ${escapeHtml(input.enquiry_id)}</p>
      <pre style="white-space:pre-wrap;background:#F7FBFE;border:1px solid #C8DFF0;padding:14px;">${escapeHtml(JSON.stringify(input.metadata || {}, null, 2))}</pre>
    `
  )
}

export function enquiryConfirmationEmail(input: { full_name: string; service: string; enquiry_id: string }) {
  const first = input.full_name.trim().split(/\s+/)[0] || 'there'
  return shell(
    `${escapeHtml(first)}, we have received it.`,
    `
      <p style="line-height:1.8;color:#3A5068;">Your ${escapeHtml(prettyService(input.service)).toLowerCase()} enquiry is with the OPV team.</p>
      <p style="line-height:1.8;color:#3A5068;">A member of the concierge team will respond within two hours where possible.</p>
      <p style="font-family:monospace;letter-spacing:2px;color:#1B6CA8;">${escapeHtml(input.enquiry_id)}</p>
    `
  )
}

export function newsletterWelcomeEmail({ email }: { email: string }) {
  return shell(
    'You are on the list.',
    `
      <p style="line-height:1.8;color:#3A5068;">Private announcements only: residences, seasonal fleet arrivals, empty legs and private dining access.</p>
      <p style="line-height:1.8;color:#3A5068;">No marketing noise. You can unsubscribe by replying to this email.</p>
      <p style="font-family:monospace;color:#6B87A0;">${escapeHtml(email)}</p>
    `
  )
}

export function adminReplyEmail({ message }: { message: string }) {
  return shell('A note from OPV.', `<p style="line-height:1.8;color:#3A5068;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>`)
}

export function membershipWelcomeEmail({ full_name, tier, email, password, portal_link }: { full_name: string; tier: string; email?: string; password?: string; portal_link?: string }) {
  return shell(
    `Welcome to ${escapeHtml(tier)} membership.`,
    `
      <p style="line-height:1.8;color:#3A5068;">${escapeHtml(full_name)}, your OPV membership has been approved. Your account is now authorised for portal access.</p>
      ${email ? `<p><strong>Username:</strong> ${escapeHtml(email)}</p>` : ''}
      ${password ? `<p><strong>Temporary password:</strong> ${escapeHtml(password)}</p>` : ''}
      ${portal_link ? `<p><a href="${escapeHtml(portal_link)}">${escapeHtml(portal_link)}</a></p>` : ''}
      <p style="line-height:1.8;color:#6B87A0;">Keep these details private. OPV can reset access from the admin portal if needed.</p>
    `
  )
}

export function affiliateApprovedEmail({
  full_name,
  referral_code,
  referral_link,
  email,
  password,
  portal_link,
}: {
  full_name: string
  referral_code: string
  referral_link: string
  email?: string
  password?: string
  portal_link?: string
}) {
  return shell(
    'Affiliate access approved.',
    `
      <p style="line-height:1.8;color:#3A5068;">${escapeHtml(full_name)}, your OPV affiliate application has been approved.</p>
      ${email ? `<p><strong>Username:</strong> ${escapeHtml(email)}</p>` : ''}
      ${password ? `<p><strong>Temporary password:</strong> ${escapeHtml(password)}</p>` : ''}
      <p><strong>Code:</strong> ${escapeHtml(referral_code)}</p>
      <p><a href="${escapeHtml(referral_link)}">${escapeHtml(referral_link)}</a></p>
      ${portal_link ? `<p><strong>Portal:</strong> <a href="${escapeHtml(portal_link)}">${escapeHtml(portal_link)}</a></p>` : ''}
    `
  )
}

export function bookingConfirmationEmail(input: { full_name: string; booking_ref: string; service: string; start_date?: string | null; service_detail?: unknown }) {
  return shell(
    'Your OPV booking is confirmed.',
    `
      <p style="line-height:1.8;color:#3A5068;">${escapeHtml(input.full_name)}, your ${escapeHtml(prettyService(input.service)).toLowerCase()} booking is confirmed.</p>
      <p><strong>Reference:</strong> ${escapeHtml(input.booking_ref)}</p>
      <p><strong>Start:</strong> ${escapeHtml(input.start_date || 'To be confirmed')}</p>
    `
  )
}
