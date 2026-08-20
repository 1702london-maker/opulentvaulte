"use client";
import { useState } from "react";
import AIConciergeSection from "@/components/AIConciergeSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: "contact",
      name: (form.querySelector("#c_name") as HTMLInputElement)?.value,
      email: (form.querySelector("#c_email") as HTMLInputElement)?.value,
      subject: (form.querySelector("#c_subject") as HTMLSelectElement)?.value,
      message: (form.querySelector("#c_message") as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-40 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcGzksrWNGTvCHBJo_X9xYFE7a8mU7XfrhBaCXttF0cAZpep-wS-61f9nFj2QQ8cHyZek6yI8V8if-b8R0RUxHFnVpTbwrBN__aBv4wCqXjrwoPT1kYWX_4sHqiin6d3rhDBg0XrnXpAL7KniJFcAgyn2tX13YPIS6xRt4swHTC68t3evkXuar3qugyEP9yAu7b3sHfiFJ926x7p2zIqzET-7moH5cFi3oog0b3pKdJACCeDWjmaTzYA" alt="" data-placeholder="true" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">Bespoke Support</span>
          <h1 className="font-serif text-display-xl mb-6 leading-[1.1]">We Are Always<br />At Your Service.</h1>
          <p className="font-sans text-body-lg text-on-primary/70 max-w-xl mx-auto">Our concierge team operates 24 hours a day, seven days a week. No request is too complex, no detail too small.</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
            {[
              { icon: "phone", label: "Telephone", value: "+44 20 7946 0958", sub: "24/7 Concierge Line" },
              { icon: "mail", label: "Email", value: "concierge@opulentvault.com", sub: "Response within 2 hours" },
              { icon: "location_on", label: "Head Office", value: "Mayfair, London W1K", sub: "By appointment only" },
            ].map((c) => (
              <div key={c.label} className="bg-surface-container-low p-6 md:p-12 text-center border border-outline/5">
                <div className="w-14 h-14 flex items-center justify-center border border-secondary mx-auto mb-6">
                  <span className="material-symbols-outlined text-secondary">{c.icon}</span>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">{c.label}</p>
                <p className="font-serif text-body-lg md:text-headline-md mb-1 break-all">{c.value}</p>
                <p className="font-sans text-body-md text-on-surface-variant">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Send a Message</span>
              <h2 className="font-serif text-headline-lg mb-6">Tell Us How We Can Help.</h2>
              <p className="font-sans text-body-lg text-on-surface-variant">Whether you have a specific request, a question about our services, or simply wish to explore what is possible, we look forward to hearing from you.</p>
            </div>
            <div>
              {submitted ? (
                <div className="bg-surface-container-low border border-secondary/30 p-8 md:p-16 text-center">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">check_circle</span>
                  <h3 className="font-serif text-headline-md mb-4">Message Received</h3>
                  <p className="font-sans text-body-lg text-on-surface-variant">A member of our concierge team will respond within two hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 bg-surface-container-low p-6 md:p-12 border border-outline-variant/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Full Name</label>
                      <input id="c_name" className="w-full border-b border-primary/20 py-3 outline-none font-sans" placeholder="Your name" type="text" required />
                    </div>
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Email Address</label>
                      <input id="c_email" className="w-full border-b border-primary/20 py-3 outline-none font-sans" placeholder="you@example.com" type="email" required />
                    </div>
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Subject</label>
                    <select id="c_subject" className="w-full border-b border-primary/20 py-3 outline-none font-sans bg-transparent">
                      <option>General Enquiry</option>
                      <option>Property Booking</option>
                      <option>Private Aviation</option>
                      <option>Chauffeur Services</option>
                      <option>Concierge Request</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Message</label>
                    <textarea id="c_message" className="w-full border-b border-primary/20 py-3 outline-none font-sans resize-none" placeholder="Your message..." rows={5} required />
                  </div>
                  <button className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}