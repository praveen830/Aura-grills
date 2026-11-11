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
 * Section 05 (#warranty) - 10-Year Stamped Bond & Quality Checklist
 * CRITICAL RULE: Zero calculator widgets. 
 * Features interactive 3D flippable warranty certificate card & 4-point material guarantee checklist.
 */
export default function WarrantySection({ onOpenBooking }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const checklistItems = [
    {
      num: '01',
      title: '3.5% Molybdenum Marine SS-316 Guarantee',
      tag: 'Zero Rust & Zero Pitting',
      desc: 'Formulated with authentic AISI SS-316 alloy enriched with molybdenum. Immune to acid rain, lakefront humidity, and severe Bengaluru monsoon corrosion with 100% free wire-and-track replacement.'
    },
    {
      num: '02',
      title: 'UV-12 Polyamide Nylon Protective Jacket',
      tag: 'Zero Cracking & Zero Peeling',
      desc: 'Transparent medical-grade virgin nylon sheath protects cables from environmental grit while remaining gentle on toddler fingers. Never discolors, hardens, or turns brittle under harsh UV sunlight.'
    },
    {
      num: '03',
      title: '100% Society RWA Facade Compliance',
      tag: 'Approved in 850+ Communities',
      desc: 'Designed to strictly adhere to modern architectural elevation covenants in Prestige, Sobha, Brigade, Godrej, Purva, and Salarpuria high-rises without structural facade alteration.'
    },
    {
      num: '04',
      title: 'Free Tension Check & Doorstep Support',
      tag: 'Complimentary On-Site Calibrations',
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
    <section id="warranty" className="relative py-16 sm:py-24 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2 pb-2 border-b border-zinc-200/90">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-[11px] font-black text-emerald-800 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>04 • 10-YEAR STAMPED BOND &amp; MATERIAL INTEGRITY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
            Certified 10-Year Stamped Warranty &amp; Quality Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
            Every Aura Grills installation is backed by an official serialized 10-year metallurgical warranty bond. Tap the certificate below to examine our independent NABL laboratory chemical composition test.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left">
          
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
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle decorative security background */}
                  <div className="absolute -right-16 -top-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bond Header */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2.5">
                        <AuraLogo className="w-8 h-8 rounded-full border border-emerald-400/40" />
                        <div>
                          <div className="text-xs font-black tracking-wider text-white">AURA GRILLS™</div>
                          <div className="text-[9px] font-mono text-emerald-400">SERIAL: AG-NABL-2026-SS316</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] font-black text-emerald-300 uppercase tracking-widest">
                        AUTHENTIC BOND
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                        OFFICIAL RESIDENTIAL COVENANT
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                        10-Year Stamped Manufacturer Warranty
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                        Issued to Verified Bangalore High-Rise Balcony Owners for aerospace SS-316 high-tensile invisible cabling and 6063-T6 anodized track systems.
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
                        <div className="text-[8px] font-black uppercase text-emerald-300 leading-tight">
                          AURA GRILLS<br />★ 10-YR ★<br />CERTIFIED
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400">NABL QA Chief Engineer</div>
                      <div className="text-xs font-black text-emerald-400 italic">S. Gopinath (QA Head)</div>
                      <div className="text-[9px] text-zinc-500 font-mono">BENGALURU QA CELL</div>
                    </div>
                  </div>

                  {/* Flip Prompt Footer */}
                  <div className="mt-3 pt-2 text-center border-t border-zinc-800/80 text-[10px] font-bold text-emerald-400/90 flex items-center justify-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                    <RotateCcw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Tap or Click to Flip for NABL Metallurgical Lab Table ↺</span>
                  </div>

                </div>

                {/* -------------------------------------------------------------
                    BACK FACE: NABL Lab Metallurgical Test Report
                    ------------------------------------------------------------- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between overflow-hidden">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-black tracking-wider uppercase text-white">NABL LAB REPORT</span>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        LAB NO: NABL/MET/BLR-4892
                      </span>
                    </div>

                    <div className="text-left">
                      <div className="text-[10px] text-zinc-400 font-mono">TEST SPECIFICATION: ASTM E1086 / ASTM B117</div>
                      <div className="text-sm font-black text-emerald-300">AISI SS-316 Chemical Composition &amp; Tensile Yield</div>
                    </div>

                    {/* Metallurgical Table */}
                    <div className="rounded-xl border border-zinc-800 overflow-hidden text-[11px] font-mono">
                      <table className="w-full text-left">
                        <thead className="bg-zinc-900 text-zinc-400 text-[10px] uppercase">
                          <tr>
                            <th className="p-2">Element</th>
                            <th className="p-2">Observed</th>
                            <th className="p-2">Standard</th>
                            <th className="p-2 text-right">Result</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                          <tr>
                            <td className="p-2 font-bold text-white">Molybdenum (Mo)</td>
                            <td className="p-2 text-emerald-400">2.82%</td>
                            <td className="p-2">2.0 - 3.0%</td>
                            <td className="p-2 text-right text-emerald-400">PASS</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-white">Chromium (Cr)</td>
                            <td className="p-2 text-emerald-400">17.84%</td>
                            <td className="p-2">16.0 - 18.0%</td>
                            <td className="p-2 text-right text-emerald-400">PASS</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-white">Nickel (Ni)</td>
                            <td className="p-2 text-emerald-400">12.18%</td>
                            <td className="p-2">10.0 - 14.0%</td>
                            <td className="p-2 text-right text-emerald-400">PASS</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-white">Carbon (C)</td>
                            <td className="p-2 text-emerald-400">0.026%</td>
                            <td className="p-2">&lt; 0.030%</td>
                            <td className="p-2 text-right text-emerald-400">PASS</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-white">Breaking Load</td>
                            <td className="p-2 text-emerald-400">420 kgf</td>
                            <td className="p-2">&gt; 400 kgf</td>
                            <td className="p-2 text-right text-emerald-400">PASS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[10px] text-emerald-300 space-y-0.5">
                      <div className="font-bold">✓ ASTM B117 Saline Mist Exposure (1000+ Hrs):</div>
                      <div className="text-zinc-400">Zero surface pitting, zero discoloration, zero rust bleed.</div>
                    </div>
                  </div>

                  {/* Flip Back Footer */}
                  <div className="pt-2 text-center border-t border-zinc-800/80 text-[10px] font-bold text-emerald-400/90 flex items-center justify-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tap or Click to Flip Back to Warranty Bond ↺</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4-POINT MATERIAL & RWA GUARANTEE CHECKLIST
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            
            <div className="space-y-3.5">
              {checklistItems.map((item) => (
                <div
                  key={item.num}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/20 transition-all duration-300 space-y-2 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-mono text-xs font-black flex items-center justify-center shrink-0">
                        {item.num}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-zinc-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <span className="self-start sm:self-auto px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-1 sm:pl-9">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Reassurance Banner with Action Button */}
            <div className="p-4 sm:p-5 rounded-3xl bg-zinc-950 text-white shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Physical Sample &amp; Warranty Verification</span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Inspect genuine SS-316 cable cross-sections and NABL bond documents at your doorstep.
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleBooking}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Free Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:+918523068882"
                  className="px-3.5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 active:scale-95"
                  aria-label="Call Helpline"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
