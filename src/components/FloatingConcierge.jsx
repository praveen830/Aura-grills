import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingConcierge() {
  return (
    <aside aria-label="Floating Quick Actions">
      {/* Floating Call Pill (Bottom-Left) */}
      <a
        href="tel:+918523068882"
        aria-label="Direct Phone Call"
        className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-40 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-zinc-950/95 hover:bg-black backdrop-blur-md border border-white/20 text-white shadow-2xl active:scale-95 transition text-xs sm:text-sm font-black tracking-wider cursor-pointer"
        style={{ paddingBottom: 'calc(0.65rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <Phone className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
        <span className="text-white whitespace-nowrap font-black uppercase tracking-wider">CALL</span>
      </a>

      {/* Floating WhatsApp Button (Bottom-Right, Pulsing) */}
      <a
        href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20with%20stainless%20steel%20for%20my%20balcony."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aura Grills on WhatsApp"
        className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer border-2 border-white/30 shrink-0"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none"></span>
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-sm" />
      </a>
    </aside>
  );
}
