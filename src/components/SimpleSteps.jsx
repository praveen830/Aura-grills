import React from 'react';
import { Ruler, Wrench, Award, ArrowRight } from 'lucide-react';

export default function SimpleSteps({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Ruler,
      title: "Free On-Site Laser Survey",
      time: "Same-Day Within 90 Mins",
      description: "Our local Bangalore technician visits your apartment with digital laser meters to measure balcony curvature, slab level, and exact dimensions. SS-316 samples verified on the spot.",
      points: [
        "Zero-obligation transparent estimate",
        "SS-316 material sample inspection",
        "Society permission assistance"
      ]
    },
    {
      num: "02",
      icon: Wrench,
      title: "Clean 4-Hour Installation",
      time: "Single-Day Turnaround",
      description: "Heavy-duty aluminum tracks are mounted with dust-free drilling and Hilti concrete anchors. Continuous SS-316 marine cables are laced and digitally tensioned to 400kg load rating.",
      points: [
        "Dust-free vacuum drilling (no tile cracks)",
        "Single continuous cable run (zero joint failure)",
        "Spotless cleanup after work"
      ]
    },
    {
      num: "03",
      icon: Award,
      title: "10-Year Written Warranty Handover",
      time: "Official Certificate Handover",
      description: "You conduct a pull-test check with our technician. We hand over the official stamped 10-Year Rust & Tensile Warranty Certificate for complete peace of mind.",
      points: [
        "Witnessed physical pull-test check",
        "10-Year written warranty card",
        "Lifelong local service support"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-emerald-600" />
            <span>SIMPLE 3-STEP PROCESS • SAME-DAY EXECUTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            How It Works:{' '}
            <span className="text-emerald-700">From Free Visit to Handover</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Clean, professional, and reliable. No mess, no delayed timelines, and zero damage to your balcony tiles.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-zinc-300 transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-emerald-600">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-zinc-950">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-zinc-100 text-xs text-zinc-700">
                    {step.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Step 1 Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
