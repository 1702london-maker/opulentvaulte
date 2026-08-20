import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { sendConfirmationEmail, sendInternalNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, email, network_description } = body;
    if (!full_name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const referral_code = `OPV-${full_name.toUpperCase().replace(/\s+/g, "").slice(0, 6)}-${Date.now().toString(36).toUpperCase()}`;

    const supabase = createServerClient();
    const { error } = await supabase.from("affiliates").insert({
      full_name, email, network_description, referral_code,
    });
    if (error) throw error;

    await sendConfirmationEmail(
      email,
      "Your Opulent Vault Affiliate Application",
      `<p>Dear ${full_name},</p><p>Thank you for applying to the Opulent Vault Affiliate Programme. Your referral code is <strong>${referral_code}</strong>. Our team will be in touch shortly.</p><p>The Opulent Vault Team</p>`
    );
    await sendInternalNotification(
      `New Affiliate Application: ${full_name}`,
      `<p><strong>Name:</strong> ${full_name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Referral Code:</strong> ${referral_code}</p><p><strong>Network:</strong> ${network_description}</p>`
    );

    return NextResponse.json({ success: true, referral_code });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Application failed" }, { status: 500 });
  }
}
