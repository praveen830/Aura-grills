import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Sticky Mobile Conversion Dock (md:hidden)
 * Modeled after iOS Dynamic Floating Action Capsule.
 * Suspended above bottom viewport with safe-area protection and frosted glass.
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
      className="fixed bottom-3 inset-x-3 z-40 md:hidden max-w-md mx-auto"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="glass-apple-dark bg-zinc-950/92 rounded-2xl p-1.5 flex items-center justify-between gap-1.5 shadow-apple-float border border-white/12">
        {/* 1. Direct Call Now */}
        <a
          href="tel:+918523068882"
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition"
          aria-label="Call Aura Grills Direct"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Call</span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        {/* 3. Free Survey */}
        <button
          type="button"
          onClick={handleSurvey}
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm cursor-pointer"
          aria-label="Book Free Doorstep Survey"
        >
          <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">Survey</span>
        </button>
      </div>
    </aside>
  );
}
