import React from 'react';
import { 
  Crosshair, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Layers, 
  Compass, 
  Calendar, 
  Phone, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 04 (#measurements) - Engineering & Laser Protocol
 * CRITICAL RULE: Zero wire simulators or orientation lab boxes.
 * Features realistic hardware & laser visual card, 2x2 benchmark grid, and 4-step doorstep laser protocol.
 */
export default function SafetyMeasurementsSection({ onOpenBooking }) {
  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking('Free Laser Measurement & Sample Demo');
      return;
    }
    const form = document.getElementById('bangalore-dashboard') || document.querySelector('form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  const benchmarks = [
    {
      metric: '50 MM (2.0")',
      label: 'Toddler & Pet Lock Gap',
      desc: 'Zero head entrapment or foothold climbing risk',
      icon: Compass
    },
    {
      metric: '400 KG+',
      label: 'Tensile Breaking Load',
      desc: 'Certified per individual SS-316 steel line',
      icon: ShieldCheck
    },
    {
      metric: '6063-T6',
      label: 'Anodized Concealed Track',
      desc: 'Corrosion-proof aerospace aluminum alloy',
      icon: Layers
    },
    {
      metric: '10 SEC',
      label: 'Fire Emergency Quick-Release',
      desc: 'Rapid snip egress protocol for rescue teams',
      icon: Flame
    }
  ];

  const protocolSteps = [
    {
      step: 'STEP 01',
      title: 'Bosch Digital Laser Perimeter Scan',
      badge: '±0.1mm Accuracy',
      desc: 'Our engineer measures your balcony slab curvature, ceiling beam depth, and wall plumb line with high-precision Bosch laser optics to ensure perfectly uniform cable tensioning.'
    },
    {
      step: 'STEP 02',
      title: 'Concrete & Granite Core Evaluation',
      badge: '50mm Anchor Depth',
      desc: 'Structural hardness assessment of balustrade concrete and granite capping to calibrate exact stainless steel expansion bolt embedment (minimum 50mm tensile grip).'
    },
    {
      step: 'STEP 03',
      title: 'Dust-Free HEPA Vacuum Drilling',
      badge: 'Zero Tile Cracks',
      desc: 'Industrial rotary hammer drills coupled with active HEPA dust extraction suppress 99.8% of concrete dust, safeguarding living rooms and preventing tile micro-fractures.'
    },
    {
      step: 'STEP 04',
      title: 'Digital Dynamometer Cable Tensioning',
      badge: '400 KG Calibration',
      desc: 'Each virgin SS-316 line is individually tensioned and verified on a digital load-cell dynamometer to hold 400kg breaking load before double lock-nut sealing.'
    }
  ];

  return (
    <section id="measurements" className="relative py-16 sm:py-24 bg-zinc-50/70 border-t border-zinc-200/80">
      {/* Anchor alias for backwards compatibility */}
      <span id="specs" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2 pb-2 border-b border-zinc-200/90">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-[11px] font-black text-emerald-800 uppercase tracking-wider">
            <Crosshair className="w-3.5 h-3.5 text-emerald-600" />
            <span>03 • SAFETY MEASUREMENTS &amp; ENGINEERING PROTOCOL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
            Military-Grade Balcony Safety Measurements &amp; Laser Protocol
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
            Every millimeter is verified using Bosch laser distance telemetry and calibrated dynamometer tensioning—guaranteeing 400kg+ load retention without damaging high-rise tiles or slabs.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* =========================================================================
              LEFT COLUMN: REALISTIC HARDWARE & LASER VISUAL + 2x2 BENCHMARK GRID
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Framed Architectural Picture Card */}
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-zinc-950 group">
              <picture className="block w-full h-full">
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/images/desktop/safety-laser-hardware.webp" 
                />
                <img
                  src="/images/mobile/safety-laser-hardware.webp"
                  data-fallback-desktop="/images/laser-measurement.jpg"
                  data-fallback-mobile="/images/laser-measurement.jpg"
                  onError={handleImgError}
                  alt="Aura Grills Precision Laser Balcony Measurement"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>

              {/* Vignettes for floating glass pills */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Top-Left Floating Glass Pill */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-xl flex items-center gap-1.5">
                  <Crosshair className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BOSCH LASER TELEMETRY • ±0.1MM TOLERANCE</span>
                </div>
              </div>

              {/* Bottom Floating Glass Pill */}
              <div className="absolute bottom-4 inset-x-4 z-10 pointer-events-none">
                <div className="p-3 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-white/15 text-white flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] sm:text-xs font-bold text-zinc-100">
                      Certified SS-316 Marine Hardware &amp; Dynamometer Calibration
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-emerald-400 hidden sm:inline-block">
                    RWA Spec Standard
                  </span>
                </div>
              </div>
            </div>

            {/* 2x2 Engineering Benchmark Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {benchmarks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-zinc-200/90 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-zinc-950 font-black text-base sm:text-lg tracking-tight">
                      <IconComponent className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.metric}</span>
                    </div>
                    <div className="text-xs font-bold text-zinc-800 pt-0.5">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4-STEP DOORSTEP LASER PROTOCOL & DIRECT CTA BAR
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="space-y-3.5">
              {protocolSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-600 text-white font-mono text-xs font-black">
                        {step.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-zinc-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold shrink-0">
                      {step.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct CTA Bar at Bottom */}
            <div className="p-4 sm:p-5 rounded-3xl bg-zinc-950 text-white shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free Laser Measurement &amp; Sample Demo</span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Technician van visits with laser kit &amp; physical SS-316 samples across Bangalore.
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleBookingClick}
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
