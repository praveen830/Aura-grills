import React from 'react';
import { Phone, MessageSquare, Calendar, Calculator } from 'lucide-react';

export default function MobileFloatingBar({ onOpenBooking, onOpenCalculator }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2.5 py-2 shadow-2xl flex items-center justify-between gap-1.5">
      {/* Direct Call Button */}
      <a
        href="tel:+918523068882"
        className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-slate-900 text-white font-black text-[11px] uppercase tracking-wider active:scale-95 transition shadow-sm"
        title="Call Aurab Grills Bangalore Now"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Call</span>
      </a>

      {/* Direct WhatsApp Button */}
      <a
        href="https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20looking%20for%20invisible%20grills%20installation%20in%20Bangalore."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-emerald-600 text-white font-black text-[11px] uppercase tracking-wider active:scale-95 transition shadow-md shadow-emerald-600/30"
        title="WhatsApp Direct"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Calculator Button */}
      <button
        onClick={onOpenCalculator}
        className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-[11px] uppercase tracking-wider active:scale-95 transition border border-slate-200 cursor-pointer"
      >
        <Calculator className="w-3.5 h-3.5 text-emerald-600" />
        <span>Price</span>
      </button>

      {/* Book Survey Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-300 font-extrabold text-[11px] uppercase tracking-wider active:scale-95 transition cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-emerald-700" />
        <span>Visit</span>
      </button>
    </div>
  );
}
