import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Floating Concierge Dock (Desktop only: md:flex)
 * Modeled after Apple's minimalist floating control capsule
 */
export default function FloatingConcierge() {
  return (
    <aside aria-label="Aura Concierge Dock" className="hidden md:block">
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 p-1.5 rounded-full glass-dock border border-black/8 shadow-apple-float transition-all duration-300 hover:shadow-apple-hover">
        {/* Direct Call Pill */}
        <a
          href="tel:+918523068882"
          aria-label="Direct Phone Call to Aura Grills Helpline"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-semibold tracking-apple-tight transition-all duration-300 active:scale-95 group shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="whitespace-nowrap font-medium text-zinc-100">85230 68882</span>
        </a>

        {/* WhatsApp Direct Action */}
        <a
          href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills%20with%20stainless%20steel%20for%20my%20balcony."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Aura Grills on WhatsApp"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-apple-tight transition-all duration-300 active:scale-95 shadow-xs"
          title="Instant WhatsApp Quote"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
