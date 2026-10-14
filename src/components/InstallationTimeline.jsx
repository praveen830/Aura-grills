import React from 'react';
import { Ruler, Anchor, Gauge, Award, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export default function InstallationTimeline({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Ruler,
      tag: "Laser Site Inspection & Balcony Survey",
      time: "Same-Day Within 90 Mins",
      description: "Certified technician visits with sub-millimeter laser rangefinders to evaluate concrete slab strength, curvature, wind exposure, and exact cable spacing requirements.",
      details: [
        "0.1mm digital laser distance precision",
        "Physical SS-316 sample verification",
        "Instant fixed-price estimate with zero hidden costs"
      ]
    },
    {
      num: "02",
      icon: Anchor,
      tag: "Track Mounting & Hilti Anchor Embedment",
      time: "Turnaround: 45 Mins",
      description: "Heavy 6063-T6 structural aluminum tracks are securely anchored into ceiling and parapet concrete slabs using industrial Hilti expansion fasteners with dust-free vacuum drilling.",
      details: [
        "Zero facade damage or tile cracking",
        "Continuous rubber vibration dampening",
        "Concealed stainless anchor system"
      ]
    },
    {
      num: "03",
      icon: Gauge,
      tag: "SS-316 Cable Lacing & Torque Calibration",
      time: "Turnaround: 90 Mins",
      description: "Single continuous lacing of 2.5mm / 3.0mm marine cables. Each wire is digitally tensioned with electronic torque gauges to maintain a uniform 400kg breaking threshold.",
      details: [
        "Single continuous cable without joint failure",
        "Digital torque-meter calibration",
        "Zero-sag lock-pin fastening"
      ]
    },
    {
      num: "04",
      icon: Award,
      tag: "Safety Load Verification & Warranty Issuance",
      time: "Final Handover (Under 4 Hrs)",
      description: "Final physical stress-testing conducted in your presence. Handover of your stamped 10-Year Anti-Rust Written Warranty Certificate and lifetime tension support guarantee.",
      details: [
        "Homeowner pull & stress test verification",
        "Official 10-Year Warranty Certificate card",
        "Spotless cleanup with zero debris left behind"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>SPOTLESS 4-HOUR EXECUTION • ZERO BALCONY DAMAGE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            From Laser Survey to{' '}
            <span className="text-emerald-700">Certified Handover</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Our certified technicians execute clean, sub-millimeter installations in under 4 hours without debris, dust, or structural disruption.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-3xl p-6 bg-zinc-50 border border-zinc-200/90 hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs relative group"
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
                      {step.tag}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-zinc-200/60">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-200/60 text-[11px] text-zinc-500 font-medium">
                  Phase {step.num} of 04
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
