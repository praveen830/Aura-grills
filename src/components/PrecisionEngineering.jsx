import React from 'react';
import { ShieldCheck, Layers, Cpu, Zap, CheckCircle2 } from 'lucide-react';

export default function PrecisionEngineering({ onOpenBooking }) {
  const engineeringCards = [
    {
      icon: ShieldCheck,
      badge: "Core Metallurgy",
      title: "Marine-Grade SS-316 Core & Virgin Nylon Coat",
      headline: "2.5% Molybdenum Core • ASTM B117 Certified",
      description: "Forged strictly using virgin SS-316 alloy infused with 2-3% Molybdenum core, making it completely impervious to monsoon moisture and lakefront humidity. Encased in high-temperature transparent virgin nylon that is soft to toddler hands with zero sharp edges.",
      points: [
        "10-Year written 100% anti-rust replacement guarantee",
        "ASTM B117 salt-spray tested for 1,000+ continuous hours",
        "Smooth UV-resistant transparent protective sheath"
      ]
    },
    {
      icon: Layers,
      badge: "Structural Framework",
      title: "Aerospace T6 Aluminum Tracks & Hidden Anchors",
      headline: "6063-T6 Extruded Profile • Hilti Anchors",
      description: "Solid track mounting using 6063-T6 heavy-duty structural aluminum extrusion. Anchored with industrial Hilti concrete expansion bolts embedded directly into balcony slab ledges with zero facade or tile chipping.",
      points: [
        "Concealed stainless lock-pins for spotless aesthetics",
        "Architectural anodized powder-coated finish",
        "Seismic and high-wind structural slab embedment"
      ]
    },
    {
      icon: Cpu,
      badge: "Fall & Bird Defense",
      title: "50mm Calibrated Spacing: Child & Bird Shield",
      headline: "Zero Slip-Through • Zero Bird Droppings",
      description: "Calibrated 50mm (2-inch) vertical grid spacing. Physically impossible for crawling toddlers, children, or pets to slip through open ledges. Simultaneously eliminates pigeon nesting and foul droppings without ugly nylon netting.",
      points: [
        "Strict 50mm child-safe architectural spacing",
        "100% permanent pigeon and bird deterrence",
        "Retains 99% unobstructed wind, sunlight, and vista"
      ]
    },
    {
      icon: Zap,
      badge: "Tension Dynamics",
      title: "Electronic Torque Calibration (400kg Threshold)",
      headline: "Calibrated Tension • Unyielding 400kg Capacity",
      description: "Every continuous cable run is tensioned using digital torque gauges to ensure uniform tension. Tested to a certified 400kg breaking load per wire — unbendable and unyielding to adult body weight or high-altitude gusts.",
      points: [
        "Individual wire stress-tested to 400kg tensile load",
        "Calibrated digital torque tensioning during installation",
        "Lifetime anti-sag guarantee with free re-tension support"
      ]
    }
  ];

  return (
    <section id="engineering" className="py-20 sm:py-28 bg-zinc-50/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>METALLURGY &amp; SPECIFICATIONS • ZERO COMPROMISE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            Precision Engineering.{' '}
            <span className="text-emerald-700">Certified Resilience.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Every component is engineered with aerospace-grade metallurgy and certified laboratory standards to protect high-rise families for decades.
          </p>
        </div>

        {/* 4 Sleek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {engineeringCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200/90 hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:scale-105 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 leading-snug">
                    {card.title}
                  </h3>

                  <div className="text-xs font-bold text-emerald-800">
                    {card.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>Aura Standards Spec 0{idx + 1}</span>
                  <span className="text-emerald-700 font-bold">100% Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Consultation Banner */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-zinc-950 text-white p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-zinc-950/20">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
              Free Doorstep Engineering Inspection
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Inspect Genuine SS-316 Cross-Section Samples
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-2xl leading-relaxed">
              Our certified technicians carry digital laser meters, physical cable samples, and track profiles directly to your balcony. Zero pressure, 100% transparent consultation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            type="button"
            className="w-full md:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 hover:scale-102 active:scale-98 shadow-lg shadow-emerald-500/20 shrink-0 cursor-pointer"
          >
            Book Free Laser Survey →
          </button>
        </div>

      </div>
    </section>
  );
}
