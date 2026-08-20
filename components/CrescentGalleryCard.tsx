"use client";
import { useState, useEffect } from "react";

const IMAGES = [
  "/stays/crescent/crescent-1.jpg",
  "/stays/crescent/crescent-2.jpg",
  "/stays/crescent/crescent-3.jpg",
  "/stays/crescent/crescent-4.jpg",
  "/stays/crescent/crescent-5.jpg",
  "/stays/crescent/crescent-6.jpg",
];

export default function CrescentGalleryCard() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const openLightbox = (i: number) => { setLbIndex(i); setLightbox(true); };
  const closeLightbox = () => setLightbox(false);
  const lbPrev = (e: React.MouseEvent) => { e.stopPropagation(); setLbIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length); };
  const lbNext = (e: React.MouseEvent) => { e.stopPropagation(); setLbIndex((i) => (i + 1) % IMAGES.length); };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLbIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
      if (e.key === "ArrowRight") setLbIndex((i) => (i + 1) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const cardPrev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length); };
  const cardNext = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % IMAGES.length); };

  return (
    <>
      {/* Card */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[4/5] mb-6 overflow-hidden" onClick={() => openLightbox(current)}>
          {IMAGES.map((src, i) => (
            <img key={i} src={src} alt={`OPV Crescent view ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${i === current ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          <div className="absolute top-4 left-4 bg-primary-container/80 backdrop-blur px-3 py-1 text-[10px] font-label-caps text-secondary z-10">OPV Managed</div>

          {/* Expand hint */}
          <div className="absolute top-4 right-4 z-10 bg-primary-container/70 backdrop-blur p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-secondary text-[18px]">zoom_in</span>
          </div>

          <button onClick={cardPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-primary-container/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-secondary text-lg">chevron_left</span>
          </button>
          <button onClick={cardNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-primary-container/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-secondary text-lg">chevron_right</span>
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {IMAGES.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-secondary w-4" : "bg-white/50 w-1.5"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-start mb-2">
          <h4 className="font-headline-sm text-on-surface">OPV Crescent</h4>
          <div className="border border-[#d4af37] rounded-full px-2 py-[2px] text-[10px] text-[#d4af37] inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Verified
          </div>
        </div>
        <p className="font-label-caps text-on-surface-variant text-[11px] mb-3">Manchester, United Kingdom</p>
        <p className="text-on-surface-variant font-body-md line-clamp-1 mb-4">A stunning high-rise apartment with city views and premium finishes.</p>
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
          <span className="text-on-surface font-label-caps">2 Guests</span>
          <span className="text-secondary font-semibold font-body-md">from £350 <span className="text-[12px] font-normal text-on-surface-variant">/ night</span></span>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "rgba(11,18,33,0.92)", backdropFilter: "blur(12px)" }}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-3xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button onClick={closeLightbox}
              className="absolute -top-10 right-0 text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1 font-label-caps text-[11px]">
              <span className="material-symbols-outlined text-[18px]">close</span>
              Close
            </button>

            {/* Main image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low">
              {IMAGES.map((src, i) => (
                <img key={i} src={src} alt={`OPV Crescent view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${i === lbIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}

              <button onClick={lbPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-container/80 flex items-center justify-center hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-secondary">chevron_left</span>
              </button>
              <button onClick={lbNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-container/80 flex items-center justify-center hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 bg-primary-container/80 px-3 py-1 font-label-caps text-[10px] text-secondary">
                {lbIndex + 1} / {IMAGES.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {IMAGES.map((src, i) => (
                <button key={i} onClick={() => setLbIndex(i)}
                  className={`flex-shrink-0 w-20 h-14 overflow-hidden transition-all ${i === lbIndex ? "ring-2 ring-secondary" : "opacity-50 hover:opacity-80"}`}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <p className="mt-3 font-label-caps text-[10px] text-on-surface-variant">OPV Crescent — Manchester &nbsp;·&nbsp; Use arrow keys to navigate</p>
          </div>
        </div>
      )}
    </>
  );
}
