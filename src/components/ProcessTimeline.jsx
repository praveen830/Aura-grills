import React from 'react';
import { Ruler, Anchor, Gauge, Award, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export default function ProcessTimeline({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Ruler,
      title: "Laser Distance & Alignment Mapping",
      subtitle: "Digital 0.1mm Leveling & Slab Assessment",
      time: "Turnaround: 30 Mins",
      description: "Our certified technician uses high-precision digital laser meters to measure wall-to-wall parallelism, slab level, and curvature. Cross-sectional SS-316 samples verified on spot.",
      highlights: [
        "Sub-millimeter laser distance leveling",
        "Structural concrete anchor inspection",
        "Zero-obligation transparent quote handover"
      ]
    },
    {
      num: "02",
      icon: Anchor,
      title: "T6 Track Mounting & Hilti Anchors",
      subtitle: "Heavy-Duty Structural Concrete Embedment",
      time: "Turnaround: 45 Mins",
      description: "Aerospace-grade 6063-T6 aluminum tracks are mounted along floor ledges and ceiling beams using heavy Hilti expansion bolts with dust-free vacuum drilling.",
      highlights: [
        "Zero facade damage or tile cracking",
        "Continuous rubber vibration dampening",
        "Concealed stainless anchor system"
      ]
    },
    {
      num: "03",
      icon: Gauge,
      title: "SS-316 Cable Lacing & Torque Calibration",
      subtitle: "Continuous Lacing with 140kg Calibrated Tension",
      time: "Turnaround: 90 Mins",
      description: "Marine-grade SS-316 wire is threaded through precision track bushings in a single continuous run. Individual cables are digitally torque-tensioned to maintain 140kg resting tension and 400kg peak load.",
      highlights: [
        "Single continuous cable without joint failure",
        "Digital torque-meter tension verification",
        "Zero-sag lock-pin fastening"
      ]
    },
    {
      num: "04",
      icon: Award,
      title: "Tamper-Proof Lock & 10-Yr Warranty Handover",
      subtitle: "Final Pull-Test & Official Stamped Certificate",
      time: "Final Handover (Under 4 Hrs)",
      description: "Aesthetic tamper-proof caps snap over the tracks to conceal all hardware. The homeowner conducts a witnessed stress-test, followed by issuance of the stamped 10-Year Warranty Card.",
      highlights: [
        "Homeowner physical stress-test verification",
        "Official 10-Year Written Warranty Certificate",
        "Spotless cleanup with zero debris left behind"
      ]
    }
  ];

  return (
    <section id="installation" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>TRANSPARENT 4-STAGE PRECISION FLOW • SPOTLESS EXECUTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            From Laser Survey to{' '}
            <span className="text-emerald-700">Certified Handover</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Our certified technicians complete clean, sub-millimeter installations in under 4 hours without dust, structural damage, or disturbance to your family.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-3xl p-6 bg-zinc-50 border border-zinc-200/90 hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-zinc-300 group-hover:text-emerald-600 transition-colors">
                      {step.num}
                    </span>

                    <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {step.time}
                    </span>
                    <h3 className="text-base font-extrabold text-zinc-950 leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-zinc-500">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-zinc-200/60">
                    {step.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-200/60 text-[11px] text-zinc-500 font-medium">
                  Stage {step.num} of 04
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-zinc-950/15 transition-all duration-200 hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>Book Your 4-Hour Installation</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
