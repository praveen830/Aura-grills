import React from 'react';
import { Ruler, ShieldCheck, Hammer, Activity, FileCheck, CheckCircle2 } from 'lucide-react';

export default function InstallationProcess({ onOpenBooking }) {
  const steps = [
    {
      step: "01",
      title: "German Laser Survey & Leveling",
      desc: "Our senior technicians use high-precision laser rangefinders to survey concrete structural ledges, window frames, and glass balustrades to ensure 0.1mm alignment accuracy.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      icon: Ruler,
      highlight: "Free Same-Day Visit"
    },
    {
      step: "02",
      title: "Extruded T6 Aluminum Track Mounting",
      desc: "Aerospace-grade aluminum base tracks are secured into high-density concrete slabs using heavy-duty stainless steel Hilti expansion anchors. Zero masonry crack risk.",
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=600&q=80",
      icon: Hammer,
      highlight: "Seismic-Rated Anchors"
    },
    {
      step: "03",
      title: "SS-316 Marine Cable Lacing",
      desc: "Aerospace 2.5mm / 3.0mm wires infused with 2.5% Molybdenum are laced continuously at exact 2-inch (50mm) vertical intervals—stopping pigeons and guaranteeing child safety.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      icon: ShieldCheck,
      highlight: "2-Inch Safety Spacing"
    },
    {
      step: "04",
      title: "Digital Tension Calibration",
      desc: "Each wire strand is tensioned individually using our electronic torque gauge to 120-140kg resting load, certified to withstand up to 400kg impact without stretching or sag.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      icon: Activity,
      highlight: "400kg Breaking Load"
    },
    {
      step: "05",
      title: "Tamper Caps & 10-Yr Warranty Handover",
      desc: "Safety caps snap over the tracks to conceal all hardware. The lead engineer conducts a tactile safety demonstration and presents the stamped 10-year replacement warranty card.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      icon: FileCheck,
      highlight: "Written 10-Yr Guarantee"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <span>👷 Real Technicians • Precision Craftsmanship</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            How Aurab Grills Secures Your High-Rise Balcony
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No messy welding, no fire hazard sparks, no facade damage. A spotless 4-hour installation by background-verified, harness-certified engineers.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-emerald-500 transition-all duration-300 group"
              >
                {/* Real Installer Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Step Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-emerald-400 font-mono text-xs font-black border border-slate-700 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>STEP {item.step}</span>
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    {item.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-emerald-700 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Aura Standard Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black text-white">
              Ready to safeguard your Bangalore balcony or windows?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an engineer with a laser meter at your door today. 100% free measurement, no obligation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition hover:scale-105 active:scale-95 shadow-lg shrink-0 cursor-pointer"
          >
            Request Free Laser Survey
          </button>
        </div>

      </div>
    </section>
  );
}
