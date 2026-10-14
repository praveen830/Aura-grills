import React from 'react';
import { ShieldCheck, Lock, Wrench, Droplets, CheckCircle2 } from 'lucide-react';

export default function WarrantySection({ onOpenBooking }) {
  const warrantyCards = [
    {
      icon: ShieldCheck,
      badge: "SS-316 Molybdenum Core",
      title: "10-Year 100% Anti-Rust Replacement Warranty",
      description: "Manufactured strictly using SS-316 with 2-3% Molybdenum core alloy. If any rust, oxidation, or corrosion occurs in damp lakefronts or Bangalore monsoon rains, we provide 100% FREE wire-and-track replacement."
    },
    {
      icon: Lock,
      badge: "UV-Nylon Multi-Strand",
      title: "400 KG / Cable Tensile Breakage Guarantee",
      description: "Multi-strand 316-grade stainless steel cables encased in UV-stabilized, transparent high-grade virgin nylon. Guaranteed zero structural breakage under extreme high-rise impacts or child play."
    },
    {
      icon: Wrench,
      badge: "6063-T6 Structural Tracks",
      title: "Lifetime Zero-Loose Wires Service Guarantee",
      description: "Solid anchored installation using 6063-T6 heavy-duty structural aluminum tracks. Includes free periodic wire tension inspections, digital tension tests, and re-tightening support."
    },
    {
      icon: Droplets,
      badge: "ASTM B117 Saline Tested",
      title: "ASTM B117 Saline Mist Laboratory Certification",
      description: "Independently tested for 1,000+ continuous hours of saline mist exposure with zero pitting, rusting, or surface discoloration across harsh high-altitude microclimates."
    }
  ];

  return (
    <section id="warranty-section" className="relative py-20 px-5 sm:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[10px] font-bold text-[#16A34A] uppercase tracking-widest mb-3 shadow-xs">
            <span>UNCONDITIONAL PEACE OF MIND • STRUCTURAL INTEGRITY</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight">
            OFFICIAL 10-YEAR STRUCTURAL WARRANTY &amp; <span className="text-[#16A34A]">UNCONDITIONAL GUARANTEE</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Certified Virgin Marine-Grade SS-316 metallurgy engineered for Bangalore high-rise &amp; lakefront longevity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {warrantyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#16A34A] mb-5 group-hover:scale-110 transition-transform shadow-xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A] block mb-1">
                    {card.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#16A34A] font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> 100% Certified
                  </span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider">
                    Aura Guarantee
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Laser Survey Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50 border border-emerald-300 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-300 text-[10px] font-bold text-[#16A34A] uppercase tracking-widest shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>100% Free Doorstep Engineering Survey</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
              Precision Laser Measurement &amp; Genuine SS-316 Sample Verification
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
              Our certified technicians visit your balcony with digital laser meters, genuine SS-316 cable cross-section samples, and provide accurate on-spot pricing with zero sales pressure.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            type="button"
            className="px-6 py-3.5 rounded-2xl bg-[#16A34A] hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider shadow-lg shrink-0 transition cursor-pointer hover:scale-105 active:scale-95"
          >
            Book Free Laser Survey →
          </button>
        </div>

      </div>
    </section>
  );
}
