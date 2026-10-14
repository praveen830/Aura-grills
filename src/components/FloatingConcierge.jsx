import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingConcierge() {
  return (
    <aside aria-label="Floating Quick Actions">
      {/* Floating WhatsApp Button (Bottom-Right, Pulsing) */}
      <a
        href="https://wa.me/918523068882?text=Hello%20Aurab%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony.%20Please%20share%20details."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aurab Grills on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-108 active:scale-95 group cursor-pointer border-2 border-white/20"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none"></span>
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-sm" />
        <span className="hidden md:group-hover:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-bold whitespace-nowrap shadow-xl">
          WhatsApp
        </span>
      </a>

      {/* Floating Mobile Phone Call Pill (Bottom-Left on Mobile Only) */}
      <a
        href="tel:+918523068882"
        aria-label="Direct Phone Call"
        className="md:hidden fixed bottom-5 left-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-white shadow-lg active:scale-95 transition text-xs font-bold uppercase tracking-wider group cursor-pointer"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
        <span className="text-white font-bold">Call</span>
      </a>
    </aside>
  );
}
