import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { sendConfirmationEmail, sendInternalNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { email, source_page } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const supabase = createServerClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email, source_page }, { onConflict: "email" });

    if (error) throw error;

    await sendConfirmationEmail(
      email,
      "Welcome to the OPV Circle",
      `<p>Thank you for joining the Opulent Vault Circle. You will receive exclusive destination guides, member offers, and luxury lifestyle inspiration.</p>`
    );
    await sendInternalNotification(
      "New Newsletter Subscriber",
      `<p>New subscriber: ${email} (from: ${source_page})</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
