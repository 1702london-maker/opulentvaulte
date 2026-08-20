import { Resend } from "resend";

const INTERNAL_EMAIL = process.env.INTERNAL_EMAIL || "booking@budruum.co.uk";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key || key === "REPLACE_WITH_RESEND_API_KEY") return null;
  return new Resend(key);
}

export async function sendConfirmationEmail(to: string, subject: string, body: string) {
  const resend = getResend();
  if (!resend) {
    console.log("[Email no-op] Would send to:", to, "Subject:", subject);
    return;
  }
  await resend.emails.send({
    from: "Opulent Vault <noreply@opulentvault.co.uk>",
    to,
    subject,
    html: body,
  });
}

export async function sendInternalNotification(subject: string, body: string) {
  const resend = getResend();
  if (!resend) {
    console.log("[Email no-op] Internal notification:", subject);
    return;
  }
  await resend.emails.send({
    from: "Opulent Vault <noreply@opulentvault.co.uk>",
    to: INTERNAL_EMAIL,
    subject,
    html: body,
  });
}
