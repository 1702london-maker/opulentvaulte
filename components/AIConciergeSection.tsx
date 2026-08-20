"use client";

export default function AIConciergeSection() {
  return (
    <section className="bg-primary text-on-primary py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim block mb-4 uppercase">
              AI-Powered, Human-Perfected
            </span>
            <h2 className="font-serif text-headline-lg text-on-primary mb-6 leading-tight">
              Your Personal Concierge,<br />Always On.
            </h2>
            <p className="font-sans text-body-lg text-on-primary/70 mb-8 leading-relaxed">
              The Opulent Vault AI Concierge anticipates your needs before you even voice them.
              From property recommendations and private jet charters to bespoke experiences and
              24/7 booking support — intelligence at your fingertips, luxury at every step.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Instant property recommendations tailored to your taste",
                "Private aviation and helicopter transfer requests",
                "Curated dining, spa, and experience bookings",
                "Round-the-clock concierge and booking support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-sm mt-0.5">check_small</span>
                  <span className="font-sans text-body-md text-on-primary/70">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const widget = document.querySelector("[aria-label='AI Concierge']") as HTMLButtonElement;
                widget?.click();
              }}
              className="border border-on-primary/30 text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all"
            >
              Speak to Concierge
            </button>
          </div>

          <div className="relative">
            <div className="border border-white/10 p-8 bg-white/5">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-base">auto_awesome</span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-on-primary uppercase">OPV AI Concierge</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                    <span className="font-sans text-xs text-on-primary/50">Online</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-4">
                  <p className="font-sans text-sm text-on-primary/80 leading-relaxed">
                    &ldquo;Good evening. I have a preference for high-floor penthouses with panoramic city views in London this weekend. Can you arrange a private transfer from Heathrow as well?&rdquo;
                  </p>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 p-4">
                  <p className="font-sans text-sm text-on-primary/80 leading-relaxed">
                    Certainly. I&apos;ve identified three exceptional penthouses available this weekend — The Shard Residence, One Hyde Park, and The OPV Mayfair Suite. I&apos;ve also reserved a Rolls-Royce Phantom for your Heathrow collection at 18:30. Shall I proceed?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
