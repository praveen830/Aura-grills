import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowRight, 
  Check, 
  Sparkles,
  Building
} from 'lucide-react';
import AuraLogo from './AuraLogo';

/**
 * Section 04 (#warranty) - AppleCare-Grade 10-Year Stamped Guarantee
 * Features interactive 3D flippable warranty certificate card & 4-point material guarantee checklist.
 */
export default function WarrantySection({ onOpenBooking }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const checklistItems = [
    {
      num: '01',
      title: '3.5% Molybdenum Marine SS-316 Core',
      tag: 'Zero Rust & Pitting',
      desc: 'Formulated with authentic AISI SS-316 alloy enriched with molybdenum. Immune to acid rain, lakefront humidity, and severe Bengaluru monsoon corrosion with 100% free wire-and-track replacement.'
    },
    {
      num: '02',
      title: 'UV-12 Polyamide Nylon Armor',
      tag: 'Zero Cracking or Peeling',
      desc: 'Transparent medical-grade virgin nylon sheath protects cables from environmental grit while remaining gentle on toddler fingers. Never discolors, hardens, or turns brittle under harsh UV sunlight.'
    },
    {
      num: '03',
      title: '100% Society RWA Facade Compliance',
      tag: 'Approved in 850+ Towers',
      desc: 'Designed to strictly adhere to modern architectural elevation covenants in Prestige, Sobha, Brigade, Godrej, Purva, and Salarpuria high-rises without structural facade alteration.'
    },
    {
      num: '04',
      title: 'Free Tension Audit & Doorstep Support',
      tag: 'Complimentary On-Site Care',
      desc: 'Dedicated Bengaluru engineering vans equipped with calibrated dynamometers provide periodic complimentary cable tension audits and hardware tune-ups upon simple request.'
    }
  ];

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking('10-Year Warranty Sample & Physical Demo');
      return;
    }
    const form = document.getElementById('contact') || document.querySelector('form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="warranty" className="relative py-20 sm:py-28 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-left max-w-3xl space-y-3 pb-2 border-b border-black/5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/5 text-[11px] font-semibold text-zinc-800 shadow-xs tracking-apple-tight">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>10-Year Stamped Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-apple-tighter text-zinc-950 leading-[1.12]">
            Ten years of complete protection.{' '}
            <span className="text-emerald-700">Stamped in steel.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed tracking-apple-normal max-w-2xl">
            Every Aura installation is backed by an official serialized 10-year metallurgical warranty bond. Tap the certificate below to examine our independent NABL laboratory chemical composition test.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch text-left">
          
          {/* =========================================================================
              LEFT COLUMN: INTERACTIVE 3D FLIPPABLE 10-YEAR WARRANTY CERTIFICATE
              ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Click to flip 10-Year Warranty Certificate"
              className="relative cursor-pointer select-none group [perspective:1200px] w-full flex-1 min-h-[500px] sm:min-h-[520px]"
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                
                {/* -------------------------------------------------------------
                    FRONT FACE: Official Stamped Warranty Bond
                    ------------------------------------------------------------- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[28px] p-6 sm:p-7 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-white/12 shadow-apple-card hover:shadow-apple-hover flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle decorative security background */}
                  <div className="absolute -right-16 -top-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bond Header */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2.5">
                        <AuraLogo className="w-8 h-8 rounded-full border border-emerald-400/40" />
                        <div>
                          <div className="text-xs font-bold tracking-apple-tight text-white">AURA GRILLS™</div>
                          <div className="text-[9px] font-mono text-emerald-400">SERIAL: AG-NABL-2026-SS316</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] font-semibold text-emerald-300 uppercase tracking-widest">
                        AUTHENTIC BOND
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                        OFFICIAL RESIDENTIAL COVENANT
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-apple-tight leading-snug">
                        10-Year Stamped Manufacturer Warranty
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                        Issued to verified Bengaluru high-rise balcony owners for aerospace SS-316 high-tensile invisible cabling and 6063-T6 anodized track systems.
                      </p>
                    </div>

                    {/* Coverage Scope List */}
                    <div className="space-y-2 pt-2 border-t border-zinc-800/80 text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% Free Replacement against Rust or Pitting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Certified 400kg Structural Impact Immunity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% Facade Integrity &amp; RWA Standard Compliance</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stamp & Signature Area */}
                  <div className="pt-4 border-t border-zinc-800 relative z-10 flex items-end justify-between">
                    <div>
                      <div className="text-[9px] text-zinc-500 uppercase font-mono">AUTHORIZED SEAL</div>
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-400/60 flex items-center justify-center text-center p-1 mt-1 bg-emerald-950/40">
                        <div className="text-[8px] font-bold uppercase text-emerald-300 leading-tight">
                          AURA GRILLS<br />★ 10-YR ★<br />CERTIFIED
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400">NABL QA Chief Engineer</div>
                      <div className="text-xs font-bold text-emerald-400 italic">S. Gopinath (QA Head)</div>
                      <div className="text-[9px] text-zinc-500 font-mono">BENGALURU QA CELL</div>
                    </div>
                  </div>

                  {/* Flip Prompt Footer */}
                  <div className="mt-3 pt-2 text-center border-t border-zinc-800/80 text-[10px] font-semibold text-emerald-400/90 flex items-center justify-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tap to view NABL metallurgical test table ↺</span>
                  </div>

                </div>

                {/* -------------------------------------------------------------
                    BACK FACE: NABL Chemical Composition Table
                    ------------------------------------------------------------- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[28px] p-6 sm:p-7 bg-zinc-950 text-white border border-white/12 shadow-apple-card flex flex-col justify-between overflow-hidden">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div>
                        <div className="text-xs font-bold text-white tracking-apple-tight">NABL METALLURGICAL TEST REPORT</div>
                        <div className="text-[9px] font-mono text-zinc-400">TEST REF: NABL-CHEM-316-BLR</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-[9px] font-bold text-emerald-400 uppercase">
                        PASSED 100%
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Spectrometry chemical analysis verifying virgin AISI SS-316 grade raw wire composition with molybdenum:
                    </p>

                    {/* Chemical Composition Table */}
                    <div className="rounded-2xl border border-zinc-800 overflow-hidden text-xs">
                      <table className="w-full text-left">
                        <thead className="bg-zinc-900 text-zinc-400 font-mono text-[10px] uppercase">
                          <tr>
                            <th className="p-2.5">Element</th>
                            <th className="p-2.5">Standard</th>
                            <th className="p-2.5">Aura SS-316</th>
                            <th className="p-2.5">Result</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                          <tr>
                            <td className="p-2.5 font-bold text-white">Chromium (Cr)</td>
                            <td className="p-2.5 text-zinc-400">16.0–18.0%</td>
                            <td className="p-2.5 font-mono text-emerald-400 font-bold">17.20%</td>
                            <td className="p-2.5 text-emerald-400">Pass ✓</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-white">Nickel (Ni)</td>
                            <td className="p-2.5 text-zinc-400">10.0–14.0%</td>
                            <td className="p-2.5 font-mono text-emerald-400 font-bold">12.15%</td>
                            <td className="p-2.5 text-emerald-400">Pass ✓</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-white">Molybdenum (Mo)</td>
                            <td className="p-2.5 text-zinc-400">2.0–3.0%</td>
                            <td className="p-2.5 font-mono text-emerald-400 font-bold">2.45%</td>
                            <td className="p-2.5 text-emerald-400">Pass ✓</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-white">Carbon (C)</td>
                            <td className="p-2.5 text-zinc-400">&lt; 0.08%</td>
                            <td className="p-2.5 font-mono text-emerald-400 font-bold">0.03%</td>
                            <td className="p-2.5 text-emerald-400">Pass ✓</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Return Prompt */}
                  <div className="mt-3 pt-2 text-center border-t border-zinc-800 text-[10px] font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tap to return to Warranty Bond certificate ↺</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4-POINT MATERIAL INTEGRITY CHECKLIST
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              {checklistItems.map((item) => (
                <div
                  key={item.num}
                  className="p-5 sm:p-6 rounded-[24px] bg-zinc-50/80 border border-black/5 hover:border-emerald-500/30 hover:bg-white hover:shadow-apple-card transition-all duration-300 group text-left"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-zinc-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {item.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 tracking-apple-tight">
                        {item.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px] tracking-apple-tight shrink-0 border border-emerald-200/80">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed pl-10 tracking-apple-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Apple Clean CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleBooking}
                className="flex-1 py-3.5 px-6 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-apple-tight transition shadow-apple-card hover:shadow-apple-hover flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-300" />
                <span>Request Physical Sample &amp; Test Bond</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <a
                href="tel:+918523068882"
                className="py-3.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200/80 font-semibold text-xs sm:text-sm tracking-apple-tight transition shadow-xs flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Helpline</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
