"use client";

export default function Footer() {
  return (
    <footer className="bg-[#fbf9f8] border-t border-[#dbdad9] py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter mb-16">
          <div>
            <a className="block mb-6" href="/" aria-label="OPV home">
              <img className="h-28 w-28 object-contain" src="/opv-logo.png" alt="Opulent Vault logo" />
            </a>
            <p className="font-body-md text-[#575e71] text-sm mb-8">Opulent Vault is Manchester&apos;s curated luxury lifestyle concierge marketplace.</p>
            <div className="flex gap-5 text-[#575e71]">
              <a className="hover:text-secondary" href="https://www.instagram.com/" aria-label="Instagram"><span className="material-symbols-outlined">photo_camera</span></a>
              <a className="hover:text-secondary" href="https://www.linkedin.com/" aria-label="LinkedIn"><span className="material-symbols-outlined">business_center</span></a>
              <a className="hover:text-secondary" href="https://x.com/" aria-label="X"><span className="material-symbols-outlined">alternate_email</span></a>
              <a className="hover:text-secondary" href="https://www.facebook.com/" aria-label="Facebook"><span className="material-symbols-outlined">groups</span></a>
              <a className="hover:text-secondary" href="https://www.youtube.com/" aria-label="YouTube"><span className="material-symbols-outlined">play_circle</span></a>
            </div>
          </div>
          <div>
            <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Services</h6>
            <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
              <li><a className="hover:text-secondary transition-colors" href="/services/luxury-stays/">Luxury Stays</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/private-dining/">Private Dining</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/events-experiences/">Events &amp; Experiences</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/wine-tasting/">Wine Tasting</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/private-tours/">Private Tours</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/vip-security/">VIP &amp; Celebrity Security</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/car-rentals/">Luxury Car Rentals</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/services/private-jet/">Private Jet</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Company</h6>
            <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
              <li><a className="hover:text-secondary transition-colors" href="/about/">About OPV</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/partners/apply/">Become a Host or Partner</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/affiliates/">Affiliate Programme</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/blog/">Blog &amp; Editorial</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/faqs/">FAQs</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Legal</h6>
            <ul className="space-y-3 font-body-md text-[#575e71] text-sm">
              <li><a className="hover:text-secondary transition-colors" href="/legal/terms">Terms &amp; Conditions</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/legal/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/legal/verification">Verification Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/legal/cancellation">Cancellation &amp; Refund Policy</a></li>
              <li><a className="hover:text-secondary transition-colors" href="/legal/cookies">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-6">Stay in the Know</h6>
            <p className="font-body-md text-[#575e71] text-sm mb-6">Private invitations, editorial notes, and verified luxury access from the Vault.</p>
            <form className="flex flex-col gap-3" action="/contact/">
              <input className="bg-transparent border-0 border-b border-[#dbdad9] text-[#1e2020] placeholder:text-[#575e71] focus:border-secondary focus:ring-0 px-0" type="email" placeholder="Email address" />
              <button className="bg-secondary text-primary-container px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest font-bold hover:bg-[#1e2020] hover:text-white transition-colors" type="submit">Subscribe</button>
            </form>
            <p className="font-body-md text-[#575e71] text-xs mt-4">Your details remain private and are used only for OPV communications.</p>
          </div>
        </div>
        <div className="border-t border-[#dbdad9] py-2">
          <div className="max-w-4xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-3">
            <p className="font-body-md text-[#575e71] text-[10px] shrink-0">@2026 OPULENT VAULT.</p>
            <div className="flex items-center justify-center gap-2 shrink-0">
              <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Available on</span>
              <a className="inline-flex" href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
                <img className="h-6 w-auto object-contain" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
              </a>
              <a className="inline-flex" href="https://play.google.com/store" aria-label="Get it on Google Play">
                <img className="h-6 w-auto object-contain" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 shrink-0">
              <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-2"><img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/visa/1A1F71" alt="Visa" /></div>
              <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5"><img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/mastercard/EB001B" alt="Mastercard" /></div>
              <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5"><img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/americanexpress/2E77BC" alt="Amex" /></div>
              <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5"><img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/paypal/003087" alt="PayPal" /></div>
              <div className="h-7 w-12 border border-[#dbdad9] bg-white flex items-center justify-center px-1.5"><img className="max-h-3.5 max-w-full object-contain" src="https://cdn.simpleicons.org/klarna/FFB3C7" alt="Klarna" /></div>
            </div>
            <a className="font-label-caps text-[10px] uppercase tracking-widest text-[#575e71] hover:text-secondary shrink-0" href="/legal/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
