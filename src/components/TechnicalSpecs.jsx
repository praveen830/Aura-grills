import React from 'react';
import { ShieldCheck, Zap, Layers, Sun, Anchor, Flame, CheckCircle2 } from 'lucide-react';
import { TECHNICAL_SPECS } from '../data/bangaloreLocations';

const iconMap = {
  ShieldCheck,
  Zap,
  Layers,
  Sun,
  Anchor,
  Flame
};

export default function TechnicalSpecs({ onOpenBooking }) {
  return (
    <section id="tech-specs" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <span>🛡️ Certified Hardware & Lab Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            SS-316 Marine Grade Architectural Integrity
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every millimeter of cable, anchor bolt, and extruded track installed by Aura Grills in Bangalore is certified to international aerospace and structural safety standards.
          </p>
        </div>

        {/* 6 Tech Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SPECS.map((spec, i) => {
            const Icon = iconMap[spec.icon] || ShieldCheck;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {spec.value}
                    </span>
                    <h3 className="text-base font-black text-slate-900 mt-2">
                      {spec.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tested & Stamped by Aura Grills BLR</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
          >
            <span>Request Certified Material Sample &amp; Free Laser Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
