import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Sticky Mobile Bottom Conversion Bar (md:hidden)
 * Fixed at bottom-0 with 3 instant thumb-friendly actions:
 * 1. Call Now (+91 85230 68882)
 * 2. WhatsApp Direct
 * 3. Free Survey (modal trigger or scroll to #contact)
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
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 shadow-2xl px-2.5 py-2 flex items-center justify-between gap-1.5"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* 1. Direct Call Now */}
      <a
        href="tel:+918523068882"
        className="flex-1 py-2.5 px-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 active:scale-95 transition"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
        <span className="whitespace-nowrap">Call Now</span>
      </a>

      {/* 2. Direct WhatsApp */}
      <a
        href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony."
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* 3. Free Survey */}
      <button
        type="button"
        onClick={handleSurvey}
        className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-md cursor-pointer"
        aria-label="Book Free Doorstep Survey"
      >
        <Calendar className="w-3.5 h-3.5 text-emerald-100" />
        <span className="whitespace-nowrap">Free Survey</span>
      </button>
    </aside>
  );
}
