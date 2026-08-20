"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav bg-primary-container/80 backdrop-blur-md transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">

        {/* Logo */}
        <div className="flex items-center gap-10">
          <a className="flex items-center" href="/" aria-label="OPV home">
            <img className="h-16 w-16 object-contain" src="/opv-logo.png" alt="Opulent Vault logo" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 items-center">

            {/* Services mega dropdown */}
            <div className="relative group">
              <a className="text-secondary font-semibold border-b border-secondary pb-1 font-label-caps uppercase text-[13px]" href="/services/">Services</a>
              <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[860px] max-w-[calc(100vw-160px)]">
                <div className="bg-primary-container/95 backdrop-blur-xl border border-outline-variant/20 p-8 grid grid-cols-2 lg:grid-cols-3 gap-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/luxury-stays/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Stays</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Verified properties and private residences</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-dining/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Dining</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Chefs, tastings, and hosted tables</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/events-experiences/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Events &amp; Experiences</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Member events and rare access</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/wine-tasting/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Wine Tasting</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Cellars, vintages, and private tastings</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-tours/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Tours</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Guided journeys with expert hosts</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/vip-security/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">VIP &amp; Celebrity Security</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Confidential protection requests</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/car-rentals/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Car Rentals</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Self-drive and chauffeur vehicles</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/private-jet/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Private Jet</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Private aircraft and aviation concierge</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/yacht-services/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Yacht Services</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Charters, crews, and event hire</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/cleaning-lifestyle/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Cleaning &amp; Lifestyle</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Housekeeping and property care</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/videography-photography/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Videography &amp; Photography</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Luxury creative coverage</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/personal-shopping/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Personal Shopping</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Private sourcing and wardrobe support</span></a>
                  <a className="group/item block border border-outline-variant/20 p-4 hover:border-secondary/50 hover:bg-white/5 transition-colors" href="/services/luxury-products/"><span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block mb-2">Luxury Products</span><span className="font-body-md text-sm text-on-surface-variant leading-5">Curated goods and private sourcing</span></a>
                  <a className="lg:col-span-3 text-secondary font-label-caps text-label-caps uppercase tracking-widest border-t border-outline-variant/20 pt-5 hover:text-white transition-colors" href="/services/">View All Services</a>
                </div>
              </div>
            </div>

            {/* Experiences dropdown */}
            <div className="relative group">
              <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/services/events-experiences/">Experiences</a>
              <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
                <div className="bg-primary-container/95 backdrop-blur-xl border border-outline-variant/20 p-5 space-y-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/events-experiences/">Events &amp; Experiences</a>
                  <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/private-tours/">Private Tours</a>
                  <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/services/wine-tasting/">Wine Tasting</a>
                  <a className="block font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-secondary" href="/blog/">Blog &amp; Editorial</a>
                </div>
              </div>
            </div>

            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/services/luxury-products/">Products</a>
            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/about/">About</a>
            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/concierge/">Concierge</a>
            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/membership/">Membership</a>
            <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-all duration-300 ease-out uppercase text-[13px]" href="/affiliates/">Affiliate</a>
          </div>
        </div>

        {/* Right CTAs */}
        <div className="flex gap-5 items-center shrink-0">
          <a className="hidden md:inline-flex rounded-full border border-secondary text-on-surface px-7 py-3 font-label-caps uppercase text-[13px] tracking-widest hover:bg-secondary hover:text-primary-container transition-colors whitespace-nowrap" href="/services/">Search the Vault</a>
          <a className="text-on-surface-variant font-label-caps hover:text-secondary transition-colors uppercase text-[13px]" href="/login/">Login</a>
          <a className="bg-secondary text-primary-container px-7 py-3 font-label-caps uppercase text-[13px] font-bold tracking-widest hover:bg-white transition-colors duration-300" href="/login/">Register</a>
          {/* Mobile hamburger */}
          <button className="md:hidden text-on-surface" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="material-symbols-outlined text-2xl">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-container/98 border-t border-outline-variant/20 px-margin-mobile py-6 space-y-4">
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/services/" onClick={() => setMobileOpen(false)}>Services</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/services/events-experiences/" onClick={() => setMobileOpen(false)}>Experiences</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/services/luxury-products/" onClick={() => setMobileOpen(false)}>Products</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/about/" onClick={() => setMobileOpen(false)}>About</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/concierge/" onClick={() => setMobileOpen(false)}>Concierge</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/membership/" onClick={() => setMobileOpen(false)}>Membership</a>
          <a className="block font-label-caps uppercase text-[13px] text-on-surface-variant hover:text-secondary py-2 border-b border-outline-variant/20" href="/affiliates/" onClick={() => setMobileOpen(false)}>Affiliate</a>
          <div className="flex flex-col gap-3 pt-2">
            <a className="text-center border border-secondary text-on-surface px-7 py-3 font-label-caps uppercase text-[13px] tracking-widest hover:bg-secondary hover:text-primary-container transition-colors" href="/login/" onClick={() => setMobileOpen(false)}>Login</a>
            <a className="text-center bg-secondary text-primary-container px-7 py-3 font-label-caps uppercase text-[13px] font-bold tracking-widest" href="/login/" onClick={() => setMobileOpen(false)}>Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}
