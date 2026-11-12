import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Sticky Mobile Conversion Dock (md:hidden)
 * Modeled after iOS Dynamic Floating Action Capsule.
 * Highlighted with high-contrast, theme-matched button colors:
 * 1. Call: Solid Dark Zinc/Black with Emerald Phone Icon & Crisp White Text
 * 2. WhatsApp: Official Vibrant WhatsApp Green with White Icon & Text
 * 3. Survey: Rich Emerald Safety Green with White Calendar Icon & Text
 */
export default function StickyMobileConversionBar({ onOpenBooking }) {
  const handleSurvey = () => {
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }
    const target = document.getElementById('contact') || document.querySelector('form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-3.5 inset-x-3 z-40 md:hidden max-w-sm mx-auto"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="bg-white/95 backdrop-blur-2xl rounded-full p-1.5 flex items-center justify-between gap-1.5 shadow-[0_14px_40px_-8px_rgba(0,0,0,0.22)] border border-zinc-200/90">
        {/* 1. Direct Call Now (Solid Black + Emerald Icon + Crisp White Text) */}
        <a
          href="tel:+918523068882"
          className="flex-1 py-2.5 px-3 rounded-full bg-zinc-950 hover:bg-black text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
          aria-label="Call Aura Grills Direct"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Call</span>
        </a>

        {/* 2. Direct WhatsApp (Vibrant WhatsApp Green + White Icon) */}
        <a
          href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        {/* 3. Free Survey (Rich Emerald Safety Green + White Calendar Icon) */}
        <button
          type="button"
          onClick={handleSurvey}
          className="flex-1 py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm cursor-pointer"
          aria-label="Book Free Doorstep Survey"
        >
          <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">Survey</span>
        </button>
      </div>
    </aside>
  );
}
