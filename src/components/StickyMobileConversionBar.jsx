import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Sticky Mobile Conversion Dock (md:hidden)
 * Modeled after iOS Dynamic Floating Action Capsule.
 * High-contrast, theme-matched button colors:
 * 1. Call: Royal Blue (#0071e3) with White Phone Icon & Bold Text (Universal Voice Call Color)
 * 2. WhatsApp: Vibrant WhatsApp Green (#25D366) with White WhatsApp Icon & Bold Text
 * 3. Survey: Rich Safety Emerald Green (bg-emerald-600) with White Calendar Icon & Bold Text
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
      <div className="bg-white/95 backdrop-blur-2xl rounded-full p-1.5 flex items-center justify-between gap-2 shadow-[0_14px_40px_-8px_rgba(0,0,0,0.25)] border border-zinc-200">
        {/* 1. Direct Call Now: Royal Action Blue with White Phone Icon */}
        <a
          href="tel:+918523068882"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#0071e3] hover:bg-[#0062c4] text-white font-bold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
          aria-label="Call Aura Grills Direct"
        >
          <Phone className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">Call</span>
        </a>

        {/* 2. Direct WhatsApp: Official WhatsApp Green with White Icon */}
        <a
          href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        {/* 3. Free Survey: Rich Safety Emerald Green with White Calendar Icon */}
        <button
          type="button"
          onClick={handleSurvey}
          className="flex-1 py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm cursor-pointer"
          aria-label="Book Free Doorstep Survey"
        >
          <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">Survey</span>
        </button>
      </div>
    </aside>
  );
}
