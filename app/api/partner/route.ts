import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { sendConfirmationEmail, sendInternalNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company_name, partner_type, contact_email, application_data } = body;
    if (!company_name || !contact_email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("partners").insert({
      company_name, partner_type, contact_email, application_data,
    });
    if (error) throw error;

    await sendConfirmationEmail(
      contact_email,
      "Your Opulent Vault Partner Application",
      `<p>Dear ${company_name},</p><p>Thank you for your partner application. Our partnerships team will review your submission and be in touch within 3–5 business days.</p><p>The Opulent Vault Team</p>`
    );
    await sendInternalNotification(
      `New Partner Application: ${company_name}`,
      `<p><strong>Company:</strong> ${company_name}</p><p><strong>Type:</strong> ${partner_type}</p><p><strong>Email:</strong> ${contact_email}</p><pre>${JSON.stringify(application_data, null, 2)}</pre>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Application failed" }, { status: 500 });
  }
}
