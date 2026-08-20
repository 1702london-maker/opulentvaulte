import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { sendConfirmationEmail, sendInternalNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message, payload } = body;
    if (!type || !name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("enquiries").insert({
      type, name, email, phone, message, payload,
    });
    if (error) throw error;

    await sendConfirmationEmail(
      email,
      "Your Opulent Vault Request Has Been Received",
      `<p>Dear ${name},</p><p>Thank you for your enquiry. A member of the Opulent Vault team will be in touch within 24 hours.</p><p>The Opulent Vault Team</p>`
    );
    await sendInternalNotification(
      `New Enquiry: ${type}`,
      `<p><strong>Type:</strong> ${type}</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p><pre>${JSON.stringify(payload, null, 2)}</pre>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
