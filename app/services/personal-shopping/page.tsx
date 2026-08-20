"use client";
export default function PersonalShoppingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQD68hQdh60qJq-gwY-m2ugBkfr0DE7F_isLPOgOKXHJ5VtqLV80FOoxD8eeuyKPfz5dPHLCb1X8D3ShiIztQB3T5tkf-SZ7oVSARiJY_d7odZ7q52JlAsZbIiX7D8S83arzkmV1x_WSmRtkr8wproLhxYveu8633sJAH94j9O1BebuoffQg55LkIZSRKOvozYJZveaMexY-cRUGm_g-zxmk8G31a_po4cg0jJLMcM_cHZja7Utav6Hw')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/40 to-primary-container"></div>
        </div>
        <div className="relative z-10 px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="font-label-caps text-secondary mb-4 block">Bespoke Acquisition</span>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Your Wants, Sourced.<br /><span className="italic font-normal">Your Time, Protected.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              The Opulent Vault Personal Shopping service transcends traditional retail. We provide a silent, high-performance gateway to the world&apos;s most elusive assets, from limited-edition horology to archival couture.
            </p>
          </div>
        </div>
      </section>

      {/* Service Intro */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-md text-headline-md mb-8 text-on-surface">Beyond the Boutique</h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg">
              <p>Our shoppers are more than stylists; they are curators of lifestyle and guardians of taste. Each request is handled with absolute discretion, leveraging deep-rooted relationships within the primary and secondary luxury markets.</p>
              <p>Whether it is securing a &quot;Sold Out&quot; piece from a Paris runway or navigating the complexities of an off-market private sale, OPV ensures the transition from desire to possession is seamless and invisible.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9qsTt5TwWFU2jub2OaVg5evlwBjy6w-ZVYQd4iQOOFmsoZKksfXchtuoO5CSr2zwuWTB466gL8lgQ8d2MC0Mk3S-kiReC7H_WqGCD63qxwagyKAdegQ7GQl6g4PX8hmd3oiICvJC6Tk-4l-8Dt0BqOL2YUrzZIUT1Pcl9_wwxvIfC-CRJcDw0NJZeRlpMsqcjQ7CHlOBJ-etJlrqXycBHQIA150UOJxwFZlDEtR-Gdt-PA2tGiovwgg" alt="Luxury watch" />
            </div>
            <div className="aspect-[3/4] bg-primary-container overflow-hidden mt-8">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gb8R_67dAKYfo_7jhYHK9HG1p5uh9onBfDHKgeha-3tiFoivRqy2xEtsDmRmC7dcaBTroAmN2DQ2CgnPbyD5OxvUxYqRJTKKzdqJj7J0ZHCJS7jNT6L69M9ddUG3YhnwfjPHOdl7PkPqJPU_hoXuqksaEeSRPI9fEb6zLqSQCMjQddpGDRoB5Qp239SgvydQsKoPlDAxs2CKg_7azyf7XbmzErpu7U-j5IttV_Ub4ZmWn4x1kmEe7w" alt="Leather goods" />
            </div>
          </div>
        </div>
      </section>

      {/* Curators */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-secondary block mb-2">Expertise</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Your Dedicated Curators</h2>
            </div>
            <button className="border border-on-surface-variant/30 px-8 py-3 font-label-caps text-on-surface hover:border-secondary transition-colors hidden md:block">View All Curators</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                name: "Elena Moretti",
                specialty: "Haute Couture & Heritage Jewelry",
                bio: "Former Senior Buyer at LVMH. 15 years specializing in European archival sourcing and private jewelry auctions.",
                credential: "LVMH Group Alumna",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAyU1DxuTo-593xEBYVXae4l3zs9Ge9W8r3FFFD0OSSaDXkrvZTSFQ1_aVjQFyoM_ALIefaY9D6fjlEo5PEEEYCq8c3RiBYp8YnxDSUMTqwN9LNXaZNqYOD5_W8dMy1YkrZ8XSGsSX6Y0EuL2Js3r_hyy7zYblZEzRDgOJDjgQyWqbChLxLbPxa8U19eZ0tHsS1r8ysnnDsRoomHQz1bKpysK_rtxqXPIv4h3jmPBOGvtfs5xdY9ga9A",
              },
              {
                name: "Julian Thorne",
                specialty: "Horology & Bespoke Tailoring",
                bio: "Expert in rare watch complications and Savile Row heritage. Previously headed VIP relations for a Swiss Manufacture.",
                credential: "Certified Gemologist",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJVYl0S3hMRalAIjqQAIdaSoaPPh-yQOSLNW5V5W8kh-x9Yq3TEc-2ySH5sP1Fk8ZAux7RiY296tsJNT4O_S3aL6_w4VSfSzyhULitp-KUKss7GzJqjgHwYKoYBX3gg6-pC3Vay8R9rMJ5qhzJBUno4MU7NMrgRou_yAwXWx_LmJrj1RABJyeXwcndXX0KvhLWlJ_AmrIAKPZx6XM7rtGn3bx44Ol9UETXhpwzeEl4uT4PbVtlvqIeEA",
              },
              {
                name: "Sofia Zhang",
                specialty: "Emerging Luxury & Tech-Fashion",
                bio: "Specialist in limited-edition drops and sustainable luxury innovation. Deep connections within the Tokyo and Milan markets.",
                credential: "Global Fashion Institute Merit",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjpJbo11xoQTpUHrEgY5fDx5QDsE_EwcOUYuxwXXg3n1_OAmIFYmYlx8N7Jr3uAs7wsfS8nZtIjCPaqiq_5JERrdid_lXtjRq3DmLIE9iDcz86ylfMF4Ejquay2XJQzG1UcvyhRJrU2zhaeevQeJ0RDQNXhbTFBosMd_Bk0eflrShrN1iTBv_Yup5R5LCjH5sUt8nqGvtaayEobSG8tZ91GcxCj-QuwszMzxoUtsX5BFcFU09VKRaBXw",
              },
            ].map(({ name, specialty, bio, credential, img }) => (
              <div key={name} className="bg-primary-container border border-outline-variant/20 group hover:border-secondary/40 transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={img} alt={name} />
                  <div className="absolute top-4 right-4 bg-primary-container/80 backdrop-blur px-2 py-1 text-[8px] font-bold text-secondary font-label-caps">OPV</div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-on-surface mb-1">{name}</h3>
                  <p className="font-label-caps text-secondary text-[10px] mb-4">{specialty}</p>
                  <p className="font-body-md text-on-surface-variant text-sm mb-6">{bio}</p>
                  <div className="h-px w-full bg-outline-variant/20 mb-6"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">workspace_premium</span>
                    <span className="font-label-caps text-on-surface-variant text-[10px]">{credential}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Request Form */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-4xl mx-auto border border-outline-variant/20 p-12 md:p-20">
          <h2 className="font-headline-md text-headline-md mb-4 text-on-surface text-center">Acquisition Request</h2>
          <p className="font-body-md text-on-surface-variant text-center mb-16">Outline your requirements. Our specialists will respond within four hours.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Primary Interest</label>
              <select className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary appearance-none">
                <option>Timepieces</option>
                <option>Couture &amp; Ready-to-wear</option>
                <option>Fine Jewelry</option>
                <option>Leather Goods</option>
                <option>Off-Market Rare Finds</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Investment Range (USD)</label>
              <select className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary appearance-none">
                <option>$10,000 - $50,000</option>
                <option>$50,000 - $250,000</option>
                <option>$250,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Item Description &amp; Specifics</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary resize-none placeholder:text-on-surface/20" placeholder="Specify brand, model, year, or archival reference..." rows={3}></textarea>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-label-caps text-[10px] text-secondary mb-2">Style References (Optional)</label>
              <input className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-on-surface focus:outline-none focus:border-secondary placeholder:text-on-surface/20" placeholder="Upload moodboard links or specific aesthetic preferences" type="text" />
            </div>
            <div className="md:col-span-2 pt-8 flex justify-center">
              <button className="bg-secondary text-primary-container px-12 py-4 font-label-caps font-bold text-sm tracking-widest hover:opacity-90 transition-all" type="submit">Initiate Sourcing</button>
            </div>
          </form>
        </div>
      </section>

      {/* Private Sourcing */}
      <section className="py-section-gap px-margin-desktop bg-primary-container">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/3 space-y-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">Private Sourcing</h2>
            <p className="font-body-lg text-on-surface-variant">Access the inaccessible. Our &apos;Under-the-Radar&apos; network connects members directly to private collectors and off-market inventory globally.</p>
            <ul className="space-y-4">
              {["Pre-auction private sales acquisition", "Whitelisted access to limited collaborations", "Authentication & Appraisal by OPV Verified experts"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-gutter">
            <div className="group relative overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTabAq0XFsTMln_ixbHAWOSyWW4q5umNfloG8EF1JqB6cMZExfIBPS_jZoUDUW2CJaoqfZnQa5zdCjVtHJxHI1RT_zu14HbKLI5pcJPLr6u6oki32KPxuUBFuD9_wsZVNcSXq6r56YeyKtNhMVmecHNo6aJfj-H6ETZAkN3hTaYK5UvNOvjzwhtknAeBO5sjQtdPei5pAQHFhDLEN3CcjqA4d6zZMbt7MgXYIBw9lLu1KFfhJWLXZFnQ')" }}></div>
              <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-secondary text-xs">Recently Sourced</span>
                <p className="font-headline-sm text-on-surface">1965 Vintage Grand Tourer</p>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square mt-12">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATNU11ok0AmUMfHrrvrYtkzwm09dfgPRocOWpTON2yaJjMTz2LCzMqbaYR28sysOuw4CiwShwCLZoWm3bSp-9nizB6rI8bAVSh7waxT-5x56vifGWBbfv4i-akXlJ9m_qXURirT9VQk99O4n7DYlMn-tyPtulMYI1mY7umux9XN0EJK28nrfHjJYSOdAu6LfrGKZDTfE37pAMsqbDi49n9_OowxAFoovRSwP4pTMzToEGkve_w2Xj2xw')" }}></div>
              <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-secondary text-xs">Private Sale</span>
                <p className="font-headline-sm text-on-surface">The &apos;Azure&apos; Heritage Suite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap bg-primary-container">
        <div className="px-margin-desktop max-w-[1000px] mx-auto text-center">
          <h2 className="font-display-lg text-headline-md text-on-surface mb-6">Commission Your Personal Curator</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-12">A dedicated OPV curator will be assigned to your account within 24 hours of submission. Fully confidential.</p>
          <a href="/concierge" className="bg-secondary text-primary-container px-12 py-5 font-label-caps font-bold tracking-widest hover:opacity-90 transition-all inline-block">BEGIN ACQUISITION</a>
        </div>
      </section>
    </>
  );
}
