"use client";
import { useState } from "react";
import AIConciergeSection from "@/components/AIConciergeSection";

const TIERS = [
  { name: "Bronze", rate: "8%", threshold: "0 - 5 referrals/month", perks: ["Dedicated link", "Monthly payouts", "Marketing kit"] },
  { name: "Silver", rate: "12%", threshold: "6 - 15 referrals/month", perks: ["Everything in Bronze", "Priority support", "90-day cookie", "Quarterly bonus"] },
  { name: "Gold", rate: "18%", threshold: "16+ referrals/month", perks: ["Everything in Silver", "Personal account manager", "VIP event invitations", "Bespoke commission structures"] },
];

const FAQS = [
  { q: "Who can apply to the Opulent Vault Affiliate Programme?", a: "We welcome luxury travel consultants, lifestyle bloggers, digital creators, and tastemakers with an audience aligned to the ultra-high-net-worth demographic." },
  { q: "How quickly are commissions paid?", a: "Commissions are paid monthly via bank transfer or cryptocurrency. Gold tier members have no minimum payout threshold." },
  { q: "How long does the cookie window last?", a: "We offer a 90-day attribution window — one of the most generous in the luxury sector — to ensure you are credited for considered, high-value purchases." },
  { q: "What assets are provided?", a: "Affiliates receive access to our full suite of high-resolution photography, video content, deep links, and an exclusive brand guidelines document." },
  { q: "Is there a minimum audience size requirement?", a: "We assess partners on the quality and alignment of their audience rather than size alone. Niche luxury audiences are highly valued." },
];

export default function AffiliatesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      full_name: (form.querySelector("#aff_name") as HTMLInputElement)?.value,
      email: (form.querySelector("#aff_email") as HTMLInputElement)?.value,
      platform: (form.querySelector("#aff_platform") as HTMLInputElement)?.value,
      audience_size: (form.querySelector("#aff_audience") as HTMLInputElement)?.value,
      message: (form.querySelector("#aff_message") as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch("/api/affiliate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover grayscale opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcgMbzx3g3SZsd-0IqLQT9qiBGwoVEXb-dK6kU1mbTUF8nunhwJBrM4bVITjCLm1B7HTW67XGlye9ciV-nv9oPPUC0PdcQ2Cme7cDTjUNoY9oN8zRgahorlLM402ghmSNIYmWPx6LZIC5Uh78iFY_9JtOjQ0dsVRwsJkDtUb_45dGkO_eyNzZTj9psRbPoZLcBhNgM9GKcm9v55o70pBVyYBYnfxUfxshw8iRH_SxDcn32gkO-QryZVhtUTd-thpjuMo3pWIKwKVGi" alt="Affiliates" data-placeholder="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-secondary mb-6 block">Partnership Excellence</span>
            <h1 className="font-serif text-display-xl mb-8 leading-[1.1]">The Opulent Vault Circle Affiliate Programme.</h1>
            <p className="font-sans text-body-lg text-on-surface-variant mb-10 max-w-xl">Unlock a world of unparalleled luxury. Partner with the global leader in bespoke high-end services and earn elite commissions while providing your audience with access to the extraordinary.</p>
            <a className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-12 py-5 hover:opacity-90 transition-all" href="#join">Join the Programme</a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Overview</span>
              <h2 className="font-serif text-headline-lg mb-8">Elevating the Art of Referral.</h2>
              <p className="font-sans text-body-md text-on-surface-variant mb-6">The Opulent Vault Circle is more than an affiliate program; it is a curated network of tastemakers, luxury consultants, and digital creators. We provide the tools and the pedigree to help you monetise your influence within the ultra-high-net-worth demographic.</p>
              <div className="space-y-4">
                {["Exclusive brand association", "Dedicated partner management", "Access to VIP assets and content"].map((item) => (
                  <div key={item} className="flex items-center space-x-4 border-b border-outline/10 pb-4">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <span className="font-sans text-body-md">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="relative">
                <img className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64G6fh7cj5KYz-TTku5yLv7c7HvLIEBdXEBEqAoULMGFHCYdgP0YLxi3LrnM-pU7ImYJPJAS4K9jjKjq0sFQIiA5UeW_PSNB2YtaIyjz4yN6_-7YURGxLNyVB12JvzdQft58MMX434L90YTWqe8TAmBaC2givSOsiJmHuyz-DTgp9u43byMoEKSJ6swrB2QWaZ6xfZP_k7ul1DTULWRvqMFZ5UKjEDXvL2T6QSyGl5Dc_iq6F4BuL_tHCwUW6t0slLnicIrcpR4UU" alt="Luxury affiliate" data-placeholder="true" />
                <div className="absolute -bottom-8 -left-8 bg-surface p-8 hidden md:block border border-outline-variant/20">
                  <p className="font-serif text-headline-md leading-none mb-1">12%</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Average Commission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Benefits</span>
            <h2 className="font-serif text-headline-lg">Unrivaled Rewards for Quality.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: "payments", title: "Competitive Commissions", desc: "Earn high-percentage commissions on every luxury stay, flight, and concierge service booked through your unique link." },
              { icon: "query_stats", title: "Real-Time Tracking", desc: "Access our proprietary dashboard to monitor clicks, conversions, and earnings with surgical precision and live updates." },
              { icon: "calendar_month", title: "90-Day Cookie Window", desc: "Luxury decisions take time. We offer an extended attribution window to ensure you get credited for long-term considerations." },
            ].map((b) => (
              <div key={b.title} className="bg-surface p-12 border border-outline/5 hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center border border-secondary mb-8">
                  <span className="material-symbols-outlined text-secondary">{b.icon}</span>
                </div>
                <h3 className="font-serif text-headline-md mb-6">{b.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">Commission Structure</span>
          <h2 className="font-serif text-headline-lg">Three Tiers of Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <div key={tier.name} className={"p-10 border " + (i === 2 ? "bg-primary text-on-primary border-primary" : "bg-surface border-outline-variant/30")}>
              <span className={"font-label-caps text-label-caps mb-4 block " + (i === 2 ? "text-secondary-fixed" : "text-secondary")}>{tier.name}</span>
              <div className={"font-serif text-display-xl mb-2 " + (i === 2 ? "text-on-primary" : "text-primary")}>{tier.rate}</div>
              <p className={"font-sans text-body-md mb-8 " + (i === 2 ? "text-on-primary/70" : "text-on-surface-variant")}>{tier.threshold}</p>
              <ul className="space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className={"flex items-start gap-3 font-sans text-body-md " + (i === 2 ? "text-on-primary/80" : "text-on-surface-variant")}>
                    <span className={"material-symbols-outlined text-sm mt-0.5 " + (i === 2 ? "text-secondary-fixed" : "text-secondary")}>check_small</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">The Interface</span>
            <h2 className="font-serif text-headline-lg text-on-primary">Precision Control.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Earnings", value: "£24,830", icon: "payments" },
              { label: "Active Links", value: "12", icon: "link" },
              { label: "Conversions", value: "47", icon: "trending_up" },
              { label: "Cookie Days", value: "90", icon: "calendar_month" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-low/10 border border-white/10 p-8">
                <span className="material-symbols-outlined text-secondary-fixed mb-4 block text-3xl">{stat.icon}</span>
                <div className="font-serif text-headline-md text-on-primary mb-1">{stat.value}</div>
                <p className="font-label-caps text-label-caps text-on-primary/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="join">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Join The Circle</span>
            <h2 className="font-serif text-headline-lg text-primary mb-8">Apply for Membership</h2>
            <p className="font-sans text-body-lg text-on-surface-variant mb-12">Complete our brief application form. We review each partner to ensure brand alignment with our luxury standards and will respond within 48 hours.</p>
          </div>
          <div>
            {submitted ? (
              <div className="bg-surface-container-low border border-secondary/30 p-16 text-center">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">check_circle</span>
                <h3 className="font-serif text-headline-md text-primary mb-4">Application Submitted</h3>
                <p className="font-sans text-body-lg text-on-surface-variant">Welcome to the Circle. Our team will review your application and be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-surface-container-low p-12 border border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Full Name</label>
                    <input id="aff_name" className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Your full name" type="text" required />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Email Address</label>
                    <input id="aff_email" className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="you@example.com" type="email" required />
                  </div>
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Platform / Website</label>
                  <input id="aff_platform" className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="Instagram, Blog, YouTube..." type="text" />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Audience Size</label>
                  <input id="aff_audience" className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans" placeholder="e.g. 50,000 followers" type="text" />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Why Join the Circle?</label>
                  <textarea id="aff_message" className="w-full border-b border-primary/20 py-3 px-0 outline-none font-sans resize-none" placeholder="Tell us about your audience and why you are a great fit..." rows={4} />
                </div>
                <button className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all" type="submit" disabled={loading}>
                  {loading ? "Processing..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">FAQ</span>
            <h2 className="font-serif text-headline-lg">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-outline-variant/30">
                <button className="w-full text-left py-6 flex justify-between items-center gap-4 group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-serif text-headline-md text-primary">{faq.q}</span>
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>expand_more</span>
                </button>
                {openFaq === i && (
                  <div className="pb-6">
                    <p className="font-sans text-body-lg text-on-surface-variant">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}