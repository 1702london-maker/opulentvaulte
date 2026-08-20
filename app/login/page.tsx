"use client";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Atmospheric background */}
        <div className="absolute inset-0 z-0 opacity-40"></div>
        <div className="glow-overlay absolute inset-0 z-0"></div>

        {/* Auth Container */}
        <div className="relative z-10 w-full max-w-[1000px] flex flex-col md:flex-row shadow-2xl luxury-ease">
          {/* Visual Half */}
          <div className="hidden md:flex flex-1 relative min-h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="A macro cinematic shot of a high-end textured champagne-colored silk fabric gently rippling in low-key lighting."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO90xkyEJtGlmzM6oNWumTG-3GPHWpfDH8-soxcVgcj_iS84Ak-_BArBC3po34vKQtvTbn8w166CHdkDauz2YLQe5a-zRem0tlon80gavIXJeR4Rd9c-l02RteC3KPitrTEL5mMJGxvquftKurxrlgTptiCxz-vowA_24PTAVvJZ3u_Afehrk40arRBuLwp2JAehJve-rFj530zmgzY1cTomGAyN3dcN8U6JZp341oQ7zEF7sP8a5ecg')" }}
            ></div>
            <div className="absolute inset-0 bg-primary-container/40 backdrop-brightness-75"></div>
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center text-[10px] font-label-caps text-secondary">OPV</div>
                <span className="font-label-caps text-secondary">VERIFIED GUARDIAN</span>
              </div>
              <h2 className="font-display-lg text-headline-md text-white mb-4">The Gate to Excellence.</h2>
              <p className="font-body-md text-on-surface-variant max-w-xs">Access the world&apos;s most exclusive sanctuary for the discerning few.</p>
            </div>
          </div>

          {/* Form Half */}
          <div className="flex-1 bg-surface-container-low p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10" id="auth-header">
              <h1 className="font-display-lg text-headline-md text-on-surface mb-2" id="form-title">Sign In</h1>
              <p className="font-body-md text-on-surface-variant" id="form-subtitle">Enter your credentials to access your vault.</p>
            </div>

            {/* Tab Toggle */}
            <div className="flex gap-8 mb-10 border-b border-outline-variant/20">
              <button
                className="pb-3 font-label-caps text-secondary border-b border-secondary luxury-ease"
                id="tab-login"
                onClick={() => {}}
              >
                Login
              </button>
              <button
                className="pb-3 font-label-caps text-on-surface-variant hover:text-secondary luxury-ease"
                id="tab-register"
                onClick={() => {}}
              >
                Register
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-8" id="auth-form" onSubmit={(e) => e.preventDefault()}>
              {/* Registration Fields (hidden initially) */}
              <div className="hidden space-y-8" id="registration-fields">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant text-[10px] uppercase tracking-widest">Full Name</label>
                  <div className="soft-stone-border py-2 flex items-center">
                    <input className="bg-transparent border-none w-full p-0 text-on-surface placeholder:text-outline-variant/40 focus:ring-0 font-body-md" placeholder="ALEXANDER VANCE" type="text" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant text-[10px] uppercase tracking-widest">Email Address</label>
                <div className="soft-stone-border py-2 flex items-center">
                  <input className="bg-transparent border-none w-full p-0 text-on-surface placeholder:text-outline-variant/40 focus:ring-0 font-body-md" placeholder="GUARDIAN@OPULENTVAULT.COM" type="email" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-on-surface-variant text-[10px] uppercase tracking-widest">Password</label>
                  <a className="text-[10px] font-label-caps text-secondary/70 hover:text-secondary uppercase tracking-widest luxury-ease" href="#" id="forgot-password">Forgot?</a>
                </div>
                <div className="soft-stone-border py-2 flex items-center">
                  <input className="bg-transparent border-none w-full p-0 text-on-surface placeholder:text-outline-variant/40 focus:ring-0 font-body-md" placeholder="••••••••••••" type="password" />
                </div>
              </div>

              <button className="w-full champagne-gradient py-4 text-primary-container font-label-caps uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] luxury-ease">
                <span id="btn-text">Authenticate</span>
              </button>
            </form>

            {/* Discreet Footer Links */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-outline-variant/20"></div>
                <span className="font-label-caps text-[10px] text-outline-variant/40 uppercase">Social Access</span>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border border-outline-variant/30 py-3 font-label-caps text-[10px] hover:bg-surface-container-low/5 luxury-ease">
                  <span className="material-symbols-outlined text-sm">key</span>
                  PASSKEY
                </button>
                <button className="flex items-center justify-center gap-2 border border-outline-variant/30 py-3 font-label-caps text-[10px] hover:bg-surface-container-low/5 luxury-ease">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  SAML
                </button>
              </div>
              <p className="text-[11px] font-body-md text-on-surface-variant/60 leading-relaxed text-center">
                By continuing, you acknowledge our <a className="text-secondary/60 hover:text-secondary underline underline-offset-4" href="#">Privacy Charter</a>. We safeguard your digital presence with sovereign-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
