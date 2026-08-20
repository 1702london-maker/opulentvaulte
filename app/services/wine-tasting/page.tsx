export default function WineTastingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4FeS-p2tFMaUemkc2X-iJaiNvXM804E_iH0ZqsUeBLE37EQpYfCOhLfEhUDw9Uo29opkig2jnnDUq6oUcVg1j0FIoGa6nt7DQZJ-7jSBHB6u65v-BseEr9unRWmkz50Z_LRxh0-UvaYToDjQ-Sq-5U9RmBlwv_DvrKXT8bcHotLv80zp5OfsGBrjhfu3hiSUIHdgG0Q2JXHeUdfbUXDyv9DVRm9HjVp_rKKhqpYdveiH81vrTFbAM9g')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0 max-w-4xl">
          <div className="font-label-caps text-secondary mb-6 tracking-widest">VERIFIED BY OPV</div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-8">
            Private Wine Experiences, <br /><span className="italic text-secondary">Curated to the Glass.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-90">
            From hidden family cellars in Bordeaux to ultra-private rooftop tastings in Manhattan, OPV connects the discerning guardian to the world&apos;s most elusive vintages.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a className="bg-secondary text-primary-container px-10 py-4 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block" href="#listings">EXPLORE CELLARS</a>
            <a className="border border-on-surface/30 text-on-surface px-10 py-4 font-label-caps font-bold tracking-widest hover:bg-on-surface hover:text-primary-container transition-all inline-block" href="/membership">MEMBERSHIP INQUIRY</a>
          </div>
        </div>
      </section>

      {/* Category Intro */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto border-b border-outline-variant/20 bg-primary-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-label-caps mb-4 block">THE COLLECTIONS</span>
            <h2 className="font-display-lg text-headline-md text-on-surface mb-6">A Journey Through the Rare and the Refined</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              OPV&apos;s wine tasting listings are not mere events; they are profound explorations of viticulture. Our portfolio spans three distinct pillars: Private Cellar Tastings within the world&apos;s most exclusive estates, Hosted Vertical Experiences led by Master Sommeliers, and Curated Wine Events that merge gastronomy with the rarest liquid assets.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-surface-container-low p-8 flex flex-col justify-end border border-outline-variant/10 hover:border-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">castle</span>
              <h3 className="font-headline-sm text-on-surface">Estate Access</h3>
            </div>
            <div className="h-64 bg-surface-container-low p-8 flex flex-col justify-end border border-outline-variant/10 hover:border-secondary transition-colors mt-8">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">workspace_premium</span>
              <h3 className="font-headline-sm text-on-surface">Sommelier Led</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto bg-primary-container" id="listings">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display-lg text-headline-md text-on-surface">Available Experiences</h2>
            <p className="text-on-surface-variant font-body-md mt-2">Hand-selected for the current season.</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 text-on-surface hover:border-secondary hover:text-secondary transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 text-on-surface hover:border-secondary hover:text-secondary transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-low border border-outline-variant/10 overflow-hidden group hover:border-secondary/40 transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGy09kVn0AcJDDHKDZxF_C1QEFBWKITvkwbM9dDPw6aajxnQu-iKUZLMmXOkD7amtzJrq97Cxw34X7t5f8d6Fz2DmBScFwgX7-4w8ftNhRJXrf6R6NmR4lVMGjy73uC9D_hK2d3f9-UcTPefQee83qizCN-B_6FzddoxHVAmqUbud4e5hU2Z5w5DXwuxSYjNDHfRA2IFx7hda4fITDyIj6-_x3bii9RDhcT-axpGlgQ5JsyASCaQKWQw')" }}></div>
            </div>
            <div className="p-8">
              <p className="text-secondary font-label-caps text-[10px] mb-1">BORDEAUX, FRANCE</p>
              <h3 className="font-headline-sm text-on-surface mb-4">The 1982 Vertical Masterclass</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="text-label-caps font-label-caps">Host: Marc-Antoine J., Master Sommelier</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">wine_bar</span>
                  <span className="text-label-caps font-label-caps">Featured: First Growth Verticals</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span className="text-label-caps font-label-caps">Capacity: Up to 6 Guests</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <p className="text-on-surface font-label-caps text-[14px] font-bold">€4,500 / session</p>
                <button className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                  VIEW DETAILS <span className="material-symbols-outlined text-sm">east</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 overflow-hidden group hover:border-secondary/40 transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyN1YxjwV7Pu_HmiRa6kCx5U3se42d_eQ7xShiskE9gW3lcDvejgZYkHQg9syelcIMaAXghj71kqOLNedpC7lDD01C4Bgc2xu0XSpSBzP0K-YFNaiHwX7RAL_bvhIxngXk5jyp1oh9DfOh0N6Wcx4H8BdyIchL0snvNoTd4CgJvygdbi0BXvOiMHbMOuO9iYD4DDzUtAvRaHYlBxN5b0i_08ZQzki1kD8DTuAZ_96avrR6k8D3sfmiHQ')" }}></div>
            </div>
            <div className="p-8">
              <p className="text-secondary font-label-caps text-[10px] mb-1">TUSCANY, ITALY</p>
              <h3 className="font-headline-sm text-on-surface mb-4">Sunset at Tenuta dell&apos;Anima</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="text-label-caps font-label-caps">Host: Estate Owner &amp; Lead Oenologist</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">wine_bar</span>
                  <span className="text-label-caps font-label-caps">Featured: Super Tuscans &amp; Library Reserves</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span className="text-label-caps font-label-caps">Capacity: Private Couple</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <p className="text-on-surface font-label-caps text-[14px] font-bold">€2,800 / session</p>
                <button className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                  VIEW DETAILS <span className="material-symbols-outlined text-sm">east</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 overflow-hidden group hover:border-secondary/40 transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <div className="font-label-caps text-[10px] border border-secondary text-secondary bg-primary-container/90 px-3 py-1">OPV VERIFIED</div>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPHDZGL82QLbTzQ88JPDfah3bqvD3oTppEHQOVlqfGv2xmWh-KwR9X2GoRY8CbwCudY5nvMJyScVEPBxeW8Smypzk5SOCPBLvwYDFIC2ff6vvBELYybGb03rnZq3X1ke0WdQlU8yJo-SUFwbOODun0sUJjN8t-epW1GvG1svBwY1OMnkbwgvIznzK8aGQNkC_A4zOiRFSt50Bds-gBspnsRfzvnr6_iWFtI0XIXJGIHuKBS1Vlm0ExNg')" }}></div>
            </div>
            <div className="p-8">
              <p className="text-secondary font-label-caps text-[10px] mb-1">MONACO HARBOR</p>
              <h3 className="font-headline-sm text-on-surface mb-4">The Monaco Deck Collection</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="text-label-caps font-label-caps">Host: Curated by Chef de Cave</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">wine_bar</span>
                  <span className="text-label-caps font-label-caps">Featured: Rare Champagne Vintages</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span className="text-label-caps font-label-caps">Capacity: Up to 12 Guests</span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <p className="text-on-surface font-label-caps text-[14px] font-bold">€6,200 / session</p>
                <button className="text-secondary font-label-caps hover:tracking-widest transition-all flex items-center gap-2">
                  VIEW DETAILS <span className="material-symbols-outlined text-sm">east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-container py-section-gap px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Access a Private Cellar</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">Our sommelier network has curated access to estates that are not listed publicly. Submit a confidential inquiry and your dedicated guardian will respond within 24 hours.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">SUBMIT INQUIRY</a>
        </div>
      </section>
    </>
  );
}
