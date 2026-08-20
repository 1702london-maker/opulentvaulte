export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.4em] mb-4">The Discerning Guardian</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">The OPV Ecosystem</h1>
          <p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant opacity-80">A curated tapestry of uncompromising services designed for the global elite. From subterranean vaults to high-altitude sanctuaries, every detail is managed with silent precision.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-margin-desktop max-w-container-max mx-auto py-section-gap bg-primary-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-y-24">
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACDZCO2akNxkYmYSp5tQtoUV2kWhMdKtBVEIudBLPhpuW0uQe4xQseQEb0N2H0j2ymgkrpVEKwd-aBqdfv4JQ3ixfZRhqJjs_5FID2eArXE3hJcznn5YIrFiuPUUm1b1yI1HitzBcyUzFg4R4L8bDEaDcHTfUdCALlx78bOPsgOV3D79Ekr5jx7SbE7eohI0924GiaDgSB9IBmSe1DDYkkuQAWxDAlwAXYeUxnVf1fXajPv9-ld_hfAw" alt="Luxury Stays" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Stays</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Unparalleled access to the world&apos;s most private estates and villas, where privacy is the ultimate amenity.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/luxury-stays">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9MV5tD3CNQndBt1fJLSfvMTSGJwrm6eWolldkt7i47lJurBFz2DKTe70-1HNXXUpLNXftq9kjDMVxx42RPwrxlGumejr25thZzMrunDtM9czhx8E0HUBDkX2pp8QYj2vQ0qXGyjmZUi_hxwENEF_NSlTbxh-aT5uxtl4gibXYolEuoupiQjhTVq0XWcHkYEizHedwas68QaMMqlaL4ucvMCzxA8_mFRAx00vjF3RjzjlM-otJCya1g" alt="Private Dining" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Private Dining</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Culinary masterpieces prepared in total seclusion by Michelin-starred masters.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/private-dining">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3V7z1rtGeEGMNzim5qBuiByRcvYNiEtrSsg4Ecs4dX7v-muPnxHGQij5SZ4_a37H6CSSF4Im8KdgUS-Bv4q7Kc1WQtERnxjgqTQwjFlsGFgWVXEdHVBArvVhq81qVRZtuxo0GewZ0S5VMnfq1LTOyiXzCjyD7MMboikXgdbsL8UqD-R05Mu_3qSYffm5liPS9pXR6uRfElLApNEgKmO10dTWSekpRwn2noadhIAEj35C6vk6YLIrHCw" alt="Events" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Events &amp; Experiences</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Access to the inaccessible. From private gallery openings to closed-set performances.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/events-experiences">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOOaoLexo20TdKfyE4YSuuyK53UmKTJe5XEtztT85N4OJJnT2bFHRvQLr3rw462gLQVkUdD0daJTy2TdvBdd3EYLAn70nTz7QFpyto5wY6w2MZ4chs9aITyYYKdFkgExOffb1sFConIrV_OxbuViIvpkTh8Bwe5qTtFhj0-lNqkE4mOIGB2C5LWKVuCQgm8J5KTJAe5SjdWBxkOP6pfucscnH6nn3fD6kOsDOmG1i0CLN9GaCG8kUOmA" alt="Wine Tasting" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Wine Tasting</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Sommelier-led journeys through the world&apos;s most guarded vintages. Private access to chateaus and cellar collections.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/wine-tasting">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPLRqakzQkjwPxrtmBykfL2Q2OAItS8T_WdWx7OeeGpo9FQSPQuHLuMyTDCXp1PKMOwTK0mpV7JlrUwgGBcSCIvAtZa2TmyZOepZIfLyw-9rwWvpYplmtQ7P4Rd-xCWA1c0ie6bPhyEmsaCFwg8Nq2D8mj9azkWBOhvWtDBBWQ9BkjwPzxPRBt8pYVi_qenhRVzmStNyhOwplpgyl9lq1eB3XONZGynx2PtMOUDYIsC8KmHFNzf9THFQ" alt="Yacht Services" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Yacht Services</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Global maritime coordination for the most sophisticated vessels afloat. Port logistics, provisioning, and crew management.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/yacht-services">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zUEmg3a0x8Qz6gbQH9pltDp3w5AA_LZ-l7UKyLyjk44_viDwlTB4E6eMP2JWvz3F29AGPRhdmerVLUzH9fqQFSiqJd0Y1jPBbFTVMpL-JKj-Sp4GFKgmDQwO9AD_Z_L6aNTfMmc6mR3hgHf_W8AQWT_fmzjNYZiHuKz8FzmqyCk0dS8uVF_2C3qiEppKc0gTNBJmeqJlU4NixgKcF-vZ1qPGy-yRhCt-xACkPhzjmVAaMMG6IIFiww" alt="VIP Security" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">VIP &amp; Celebrity Security</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Invisible yet impenetrable protection. Former special forces operating with absolute discretion and tactical superiority.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/vip-security">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-Cc9gjlzkzRJLzdt_MfUi8CmQvBgnebvw5HKAGFKodFl1-vwZ-yln_Bmj1B9Jifku4Nj-XLbArmhmZDUBN1Il9THXdxXiRUGY_2n9RkgW63WP2HyzH_5prjgo3NOSiTQdlPlaE87sRasEtkaG3TV2gWRHqZXzdfkXsrudoUvjVDwN15s4Li02B-Ic53zclioM5pCJddfr4gym3T-EINjrCddjJWaMNMUcqPIceOxBr-Tj2wv7SDuFg" alt="Luxury Cars" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Car Rentals</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">A fleet of the world&apos;s most sought-after automobiles, from limited-edition hypercars to classic restorations.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/car-rentals">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIyPlE-S8te2JqNbx_RZL5XtBRPII4xvgHETVvNoQFfwGIRxTLPg77HaSvFfG77UPGLoPgIl1xfnY8akjH4mfxkk2I5VsbBd6GJzaWi6IAaNfThMms5VTeT9qHQTeD9sUJ8LvQMqVnOteXGsvuZam5AWez0zAjSqJ2o7Wqsi7l2uz658jTGvO-m__E8a471G_GlVcjGlNFhg-g4dK2u4NgrBe8mwF99paLGqYfXMyymaORnKpCNDZBAg" alt="Photography" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Videography &amp; Photography</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Documenting your legacy with world-class visual artists. Private event coverage and heritage films.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/videography-photography">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM3qPQGu91OSb-hryiQB8cT5zh2PKwSrv74RKPGBfkFPM3yMWCwGMrYGeKTfWeBsvy9N9SCPVMRZYR-JNcOnSnI_mrfWZCqOK-1QbEIUXDGwl_07nKRYsS1lf7r6XxUlDGh9Ne7jGvg9eY3ht6HTfWi7DXmTSY6_XggJzRKWVoO2xKCGd4YIEbVMSnymeoKPJ2EzaJYM7dosIR8gqnWUDGpKpWYtSAzRJJbG2P6S7TLYdf7MuPnf9INw" alt="Personal Shopping" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Personal Shopping</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Sourcing the impossible. Whether it&apos;s haute couture or an off-market masterpiece, our global network finds what others cannot.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/personal-shopping">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb702LyKecqdNHx6U6FpRbGcyMlLr6AZ7h3TOdM0PUy9x7SuV77hfcVZ-uzQP3XnrLz_nnKJoyH4VyB_8T6yWABxduOSHcgVOVv47KMMTwsjrKMqCepS1OZrBYebjJKgYtcMMmPd8LXE7vgY0946Y_wDXqodhvauJoOZx8BAy86KIid3r6O7FMkbuu7knh5r5i1EHr4SlXyEe6Vz32FViWlMVU76VVIKIkM9hZgn9H2eGlwt8yUcV1XQ" alt="Private Tours" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Private Tours</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Expert-led expeditions into the world&apos;s most significant cultural and natural landmarks, removed from public constraints.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/private-tours">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwhBpM0O0bz8qJ4IqXN8g2SPy2I0gD0WfYTEfp-Ac6ki5Quf8jN3jrTD6hUqyVIVR_c6u2WELV2vv3FTd_GCJqPFlgWigo2pFaHH4aUyhfnyMixxFycgc7JRA-RnZtlkO7_fnO69MmV2i_P2dVKCw1g8f8T22Ll_ZWV93Olj5Z5e8kXy82feZyMLBKad6CoVDo-iGscu0bNHjd0wiPUXJdFN71xv82jwHIgkmKci8U-b-JMLa4Pih2iA" alt="Cleaning Lifestyle" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Cleaning &amp; Lifestyle</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">The silent restoration of your environment. Discreet, expert management of your residences to exacting standards.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/cleaning-lifestyle">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
          <div className="group flex flex-col space-y-6">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">
              <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7cC-Hwc97Z1-nBKFtSAIiTg_5U9iE6VuQU1GSLl-G4TlbNKl_9pxKWWLbs6ASOBd3luJDL3ZrgPHET2d-5tGXmtzv9RGWWvTWb0wFI8X2eu-m0TvcN4GOnYXCbAm_TOrRlQd73E3-tOCq5KNaoX7-wA54AkOahw-swivX1qsxGTqxGSXtQ5EvW3t2LfzsUd_6NS8FryOwGQYdW8Nsmcqn0-SuniqiS1xGvujjKbpOF8mFzqGICY5PJQ" alt="Luxury Products" />
              <div className="absolute top-6 left-6 border border-secondary w-8 h-8 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary">OPV</div>
            </div>
            <div>
              <h3 className="font-headline-md text-on-surface mb-2">Luxury Products</h3>
              <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">Direct access to the OPV Private Reserve—a collection of manufactured and sourced assets exclusive to our membership base.</p>
              <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary group-hover:gap-4 transition-all duration-300" href="/services/luxury-products">EXPLORE <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Promise Section */}
      <section className="bg-primary-container py-section-gap px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-secondary w-12 h-12 flex items-center justify-center rounded-full text-[8px] font-semibold text-secondary mx-auto mb-8">OPV</div>
          <h2 className="font-display-lg text-headline-md md:text-headline-md text-on-surface mb-8">The OPV Verification Promise</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 1: Provenance</p>
              <p className="font-body-md text-on-surface-variant">Every service provider undergoes a 12-month vetting process verifying financial stability and security clearance.</p>
            </div>
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 2: Performance</p>
              <p className="font-body-md text-on-surface-variant">We employ anonymous &apos;Secret Guardians&apos; to test service quality and discretion under high-pressure scenarios.</p>
            </div>
            <div className="space-y-4">
              <p className="font-label-caps text-secondary uppercase tracking-widest text-[10px]">Tier 3: Protection</p>
              <p className="font-body-md text-on-surface-variant">Legal and physical indemnity frameworks are established for every transaction to ensure absolute client anonymity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="relative py-section-gap px-margin-desktop bg-primary-container overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-8">The Vault Awaits</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-12">Our concierge team is available 24/7 across every time zone to facilitate your next acquisition or journey.</p>
          <a href="/concierge" className="px-12 py-5 bg-secondary text-primary-container font-label-caps text-label-caps uppercase tracking-[0.3em] font-bold hover:px-16 transition-all duration-500 ease-in-out active:scale-95 inline-block">Initiate Request</a>
        </div>
      </section>
    </>
  );
}
