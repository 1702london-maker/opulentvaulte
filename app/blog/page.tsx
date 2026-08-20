"use client";

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[819px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="A cinematic, wide-angle shot of a classic private library with dark mahogany wood, floor-to-ceiling bookshelves, and plush leather armchairs."
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhCL-zzlcs2NbLzyaEaTZ7UYSiZzZ0MnmZa7r-ZM7aOORrtwHExNY8PFUCrqLOsUmVLdqZxUHIBXGj0hFOfC-QV683sPbL_fbsNVOFZhqeWemdkQnS0XDA2Cs7ZcCanE9kLANyGm2PKHCEA6G3tZhM7MWNED6zO1tqWd22xFVuAdiPYSLh5CilqlcsL9CzSpi3rt8jdOM9b6E1C49b9dato8pIRnBENVLd1JjsCNdFrvNDOhjWtEJFcw')" }}
          ></div>
          <div className="absolute inset-0 editorial-gradient"></div>
        </div>
        <div className="relative z-10 px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-secondary tracking-[0.4em] mb-4 block">EDITORIAL ARCHIVE</span>
          <h1 className="font-display-lg text-display-lg max-w-3xl leading-none mb-8">From the Vault.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-10">Exclusive insights into the world&apos;s most guarded experiences, private estates, and the philosophy of discerning guardianship.</p>
        </div>
      </section>

      {/* Category Filter — bg-primary-container KEPT DARK */}
      <section className="sticky top-20 z-40 bg-primary-container py-6 border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto w-full overflow-x-auto">
          <div className="flex items-center gap-12 whitespace-nowrap">
            <button className="text-secondary font-label-caps border-b-2 border-secondary pb-1">ALL ARTICLES</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">LUXURY STAYS</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">PRIVATE DINING</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">TRAVEL &amp; YACHTS</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">LIFESTYLE &amp; CARE</button>
            <button className="text-on-surface-variant font-label-caps hover:text-on-surface transition-colors">THE PHILOSOPHY</button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-container-low p-8 lg:p-16 border border-outline-variant/20 hover:border-secondary/40 transition-soft-close group">
          <div className="lg:col-span-7 overflow-hidden h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center transition-soft-close group-hover:scale-105"
              data-alt="An ultra-modern luxury yacht anchored in a secluded Mediterranean cove at twilight."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVUgGvQgnOHeKHmcdzQFaCCi94EdrAAxI750iOL_PAFZ5Cxq5KSn0c-qvpSP0dt-tMe0N1dt0IpVfkB1WTY-tiPzHh7XPAqar_nqPvpzfY_gZCO87TsdmcCED4t5a-XIrCagVOfATPUvHDg05gt4HoTma8W_n65dH4VgZ3_oKkAK6UIGbQEeR-2tWnGpnKR-KcZBkH1fBFYd-BaWtrmgdgNgjWZVcduAlrmZ8fMuRoY_ZWmBPkzLOHyw')" }}
            ></div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label-caps text-secondary">FEATURED</span>
              <div className="w-12 h-[1px] bg-outline-variant"></div>
              <span className="font-label-caps text-on-surface-variant">TRAVEL &amp; YACHTS</span>
            </div>
            <h2 className="font-headline-md text-display-lg-mobile lg:text-headline-md mb-6 leading-tight group-hover:text-secondary transition-colors">The Silent Horizon: Navigating the New Age of Private Voyaging.</h2>
            <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">As the world becomes louder, the elite seek the profound luxury of silence. Explore the technological marvels behind the next generation of emission-free, ultra-silent superyachts.</p>
            <a className="flex items-center gap-3 font-label-caps text-secondary group/link" href="#">
              READ THE ARTICLE
              <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {/* Card 1 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A macro shot of a vintage crystal decanter being poured into a delicate gold-rimmed glass."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByprsGa-wAJ0GJJM1mOhQ4fQZXCSWFHIOzHNF1Ax6X7_m1LXEu2AimxdnGkqcy4ww0URXXEAO5jfoaViVpUWmBWci_mU2RxW3gOcYFqQd0hxPG5fuBFmN2yJ6dWx9bKKuexQoFuxZ-EFGOzXyFj63doGquaBZTqDc_ygRmgHqeXp4QRn4W5IN06E7sE4TN18weJg0IdHiGPFcubMhs51RfQmdfWcqeLN12rMhiBXSe1GIAMSCeLbBVMQ')" }}
              ></div>
              <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full border border-secondary bg-primary-container/40 backdrop-blur-sm">
                <span className="text-secondary text-[10px] font-bold">OPV</span>
              </div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRIVATE DINING</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">A Vintage Unlocked: The Secret Cellars of Bordeaux.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">A journey into the subterranean vaults of France&apos;s most prestigious estates, where history is bottled and time stands perfectly still.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="Exterior of a minimalist, Brutalist-inspired villa in the Swiss Alps."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxFg3_8n1X_05KwkKTs7oUSuLt5uWDIXI3Ra97iAIzZ-Os0yn64SWsy5xQOqOWW56Hs3lry2pCCe2oDTBj5NMT95l8wiXofMw6C-8sAqGyrjLA4XSJF9afWlIishYQFZsPlg9yabRRCnHt1pmX_NhCgPLcLy2rhD7L84gcaTL0ApmaBHXlXK5Ned8iH0aTKMh1qvEym64_ljpwBkUfOMmNJ7kuKcpoLHorGXa_BDWSVglzD4r4wLsamg')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">LUXURY STAYS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Architectural Solitude: Switzerland&apos;s Hidden Alpine Sanctuaries.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">In the high peaks, architecture serves as both a shield and a lens. Discover the retreats redefining &apos;getting away&apos;.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A portrait of a high-end personal concierge dressed in a bespoke dark navy wool suit."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAukdwMN3CmWOISATFJ7Y_ojj-sRrvnG6j2YvTL6ZgqizEWK4XERuWeHFhxkpyvPTM6IO52F60jHLmlRNWeXf3W1Bzu6AguRc2oO9YcNDW2jq7wRThmL-_S-1FJKF-A_JpM_VNQ7bwuEh7uDEP7PdjLoxiGvb6mHkpNT2AZX20chR0YClFZJUuf9LuIapBzh130e4AykR-CXfw0FraOmiLmn-bi7LTEMoEwinhKnWrexgg4aAjSYUUOoA')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">THE PHILOSOPHY</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Art of the Invisible Guardian: Concierge Ethics.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Understanding the delicate balance between high-performance service and the absolute right to privacy.</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="An aerial view of a private island in the Maldives during the blue hour."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRwA_RlQMkDPilohrQSYiHSg3ixcBtg-EBLyHNAcJtdSufFXYJ4zGLhstp9iuTFGglS1Xei-Jy1k-iqsgpnEdX-fNyUHE3DTvhTpkbAshgAplF5ugsCex7Ciow5mK8-xy1TC9Gd6Tp136fH2DXG5e64aMsGhXY1TEnDhfHqCdZJTD2hkQ63ATv21U0aeTE85M5rfKwCdF6q51utWaHTvR1M0h3T5gTIZks5vasGys7Vv5mMGMUbWHGGg')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">TRAVEL &amp; YACHTS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Islands of Discretion: Sovereignty in the South Pacific.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">How private island ownership is evolving beyond leisure into a new form of sovereign living.</p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A close-up of a meticulously tailored charcoal cashmere coat on a classic wooden valet stand."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHvj_pKhtSUImqf8l6CT_DSzXH05GpagydKxEQOJsNmamdx3BwW4fmvtK5d1cv8u-5eWh7lFkv8psLIiIpE9CYH-EyLVo6VwSABgyhA_NjEQ41AXub6rVCYcQ3mOkpX4Gu4bVVxQmBijI9PKj-w7gfX1vDR01QRhTYK6paDdDSHiUJAFNK6KPgndpNNKbgQ90I9Iw8L1MNJEZdSvvlb59Z0QxmHH_ruD-Lk-tYdsiMMBgFWE7_0r19sA')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">LIFESTYLE &amp; CARE</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Curation of the Wardrobe: Heirloom Maintenance.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Preserving excellence. Our guide to the care and storage of high-value artisanal fabrics and bespoke tailoring.</p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A sleek black grand piano in a dimly lit, minimalist hall with concrete charcoal walls."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkneiYOz84b3utiXXZVX7nZXi0tEaBNaVA-ehzDsNtuYaUdH1DgXWHVXuHH2OJrZHbjUMzWCsLbLT15TMAV3WRNui-AkRoRjB9PDE9uZ-VROXwekDFM31Cim_R5KRvHtH_nqLWekHdvlrLVXZlZhyAnFJ5UOdc0jW76PglFHScO7w4ITeDizLSxCLo1zaGaaWmXyss3n_NslizsGjOV_km-NkCfbPboiTp-2eToICWStJEr3TfztucmA')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">EXPERIENCES</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Midnight Concerto: Solo Performances in Empty Halls.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Booking the world&apos;s most famous acoustic spaces for a private audience of one. The ultimate musical luxury.</p>
          </div>

          {/* Card 7 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A macro shot of a rare mechanical watch movement, intricate gold and silver gears in motion."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj3fL8Q2XW4ZQUoc5kNoXI-DQIJtjq1_mBG07UBhY3TB6MLDkDORmoE33sunooyzm9y3MSjftTGjfHe2fJkDS7CivMr1-mECrbpH4mfG_qvhcEtGgceL15FNq3wrCOYPLi2U8V8z93VRaIgDgaXp9RFJptb3V7yOtk3FAsaZ0tTNgCS3ZYEXC4Vk4zSltHBB1q0TIbz7fXGCrvOu17Vg-cp70qRRxqre9DGAaLBFi1Wc4_0p1UofcOqw')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRODUCTS</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Precision as Art: The New Horological Renaissance.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Why independent watchmakers are becoming the new masters of multi-generational wealth preservation.</p>
          </div>

          {/* Card 8 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A high-end private dining table set for two in a glass-walled dining room overlooking a dark, rainy city skyline."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEVRGPK289Eq08or8cvDhnm0IS2au8PXBaGb3JMTCEWdL4OfCcNn-LwiE3iT2LjE3lD7skG8c_yGsqLkPIMzjybQdhXE9jnQKFDtbihGyR3Am8rIPXKMSmFxrscGPc8EmHjFjKLn_S1mrfIFiFSSuOuBav7xxoTkYWSwW-GV2-Nom6aExAlyVMg5h32Lsh3INNhYE-OVP0BpVfq8jK6QBh-mNaC0s-FyJFp2sdXHvDjGr73Ujxc3hk_A')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">PRIVATE DINING</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Chef&apos;s Whisper: The Rise of the Nomadic Kitchen.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Bringing Michelin-starred brilliance to the most remote corners of your estate or sea-faring vessel.</p>
          </div>

          {/* Card 9 */}
          <div className="flex flex-col hover-card cursor-pointer group">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden">
              <div
                className="card-image w-full h-full bg-cover bg-center transition-soft-close"
                data-alt="A minimalist home gallery space with a large abstract painting in muted navy and gold tones."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXdVUnp93XWavVysfuEwawCOuELxD7cu_DEaXVRucXHOdHyckLuIvh30mVIeWd9RXxRoCAt_wBYmZ0M6H9cQDMOxjeMUE0pe1f43JTZxYWB3idY_anh_9ypt97GG8EBXHXiEXxc3M4S6i0bUJulB_AoO2e6OXeiRXxTYgypPn2yAoe6d6cKOzNONoxTZ0Fc5ySrQVsRVidpFNideIsUaYOgBOnbY-uEGQFuXXG2rrYWJm1ly2x8A116w')" }}
              ></div>
            </div>
            <span className="font-label-caps text-on-tertiary-container mb-3 tracking-widest">THE PHILOSOPHY</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">The Guardian&apos;s Legacy: Investing in Future Generations.</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3">Strategies for curating a private collection that speaks of values as much as value itself.</p>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-24 flex justify-center">
          <button className="border border-outline-variant px-12 py-4 font-label-caps tracking-widest hover:border-secondary hover:text-secondary transition-soft-close group flex items-center gap-4">
            EXPLORE FURTHER
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </section>

      {/* Membership CTA — bg-surface-container-lowest → bg-primary-container */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-container-max mx-auto w-full text-center">
          <div className="mb-12 flex justify-center">
            <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center">
              <span className="text-secondary font-display-lg text-headline-sm">OPV</span>
            </div>
          </div>
          <h2 className="font-headline-md text-headline-md mb-6">Access the Inner Sanctum.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">Our editorial archive is but a window. Membership provides the keys to the experiences themselves. Applications are currently reviewed on a rolling basis.</p>
          <button className="bg-secondary text-primary-container px-12 py-5 font-label-caps tracking-[0.2em] hover:bg-secondary-fixed transition-colors">REQUEST ADMISSION</button>
        </div>
      </section>
    </div>
  );
}
