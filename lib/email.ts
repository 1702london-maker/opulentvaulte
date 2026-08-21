import { Resend } from 'resend'

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export const opvFromEmail = process.env.OPV_FROM_EMAIL || 'noreply@opulentvault.co.uk'
export const opvNotificationEmail = process.env.OPV_NOTIFICATION_EMAIL || 'hello@opulentvault.co.uk'

export function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function prettyService(service: string) {
  return service.charAt(0).toUpperCase() + service.slice(1)
}
