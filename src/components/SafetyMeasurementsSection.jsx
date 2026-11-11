import React from 'react';
import { 
  Crosshair, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Compass, 
  Calendar, 
  Phone, 
  ArrowRight
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 03 (#measurements) - Apple Tech Specs Grade Engineering Protocol
 * Precision Bosch laser telemetry, structural core evaluation, and dynamometer calibration.
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
    const form = document.getElementById('contact') || document.querySelector('form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  const benchmarks = [
    {
      metric: '50 MM (2.0")',
      label: 'Toddler & Pet Pitch',
      desc: 'Zero head entrapment or climbing footholds',
      icon: Compass
    },
    {
      metric: '400 KG+',
      label: 'Tensile Load Rating',
      desc: 'Certified breaking force per individual wire',
      icon: ShieldCheck
    },
    {
      metric: '6063-T6',
      label: 'Aerospace Track',
      desc: 'Corrosion-proof champagne anodized alloy',
      icon: Layers
    },
    {
      metric: '10 SEC',
      label: 'Emergency Release',
      desc: 'Quick-snip egress protocol for fire rescue',
      icon: Flame
    }
  ];

  const protocolSteps = [
    {
      step: '01',
      title: 'Bosch Digital Laser Perimeter Scan',
      badge: '±0.1mm Accuracy',
      desc: 'Our certified engineer measures your balcony slab curvature, ceiling beam depth, and wall plumb lines with precision Bosch laser optics for perfect uniform cable tensioning.'
    },
    {
      step: '02',
      title: 'Concrete & Granite Core Evaluation',
      badge: '50mm Anchor Depth',
      desc: 'Structural hardness assessment of balustrade concrete to calibrate exact stainless steel expansion bolt embedment (minimum 50mm tensile grip depth).'
    },
    {
      step: '03',
      title: 'Dust-Free HEPA Vacuum Drilling',
      badge: 'Zero Tile Cracks',
      desc: 'Industrial rotary hammer drills paired with active HEPA dust extraction capture 99.8% of concrete dust, protecting your living room furniture and preventing tile micro-fractures.'
    },
    {
      step: '04',
      title: 'Digital Dynamometer Tension Calibration',
      badge: '400 KG Verified',
      desc: 'Each virgin SS-316 line is individually tensioned and verified on a digital load-cell dynamometer to hold 400kg breaking load before double lock-nut sealing.'
    }
  ];

  return (
    <section id="measurements" className="relative py-20 sm:py-28 bg-white border-t border-black/5 overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <span id="specs" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-left max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/80 backdrop-blur-md shadow-apple-sm text-[11px] font-semibold text-zinc-700 tracking-apple-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <Crosshair className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase tracking-wider">Laser Telemetry &amp; Protocol</span>
          </div>

          <h2 className="text-apple-section font-semibold tracking-apple-tight text-zinc-950 leading-[1.08]">
            Measured in tenths of a millimeter.{' '}
            <span className="text-gradient-apple-dark block sm:inline">Calibrated for life.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-600 font-normal leading-relaxed max-w-2xl">
            Every installation is governed by strict structural safety benchmarks—using digital laser telemetry and load-calibrated dynamometers to guarantee absolute security without damaging tiles.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* =========================================================================
              LEFT COLUMN: REALISTIC HARDWARE VISUAL + 2x2 BENCHMARK GRID
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Framed Architectural Picture Card */}
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[28px] overflow-hidden border border-black/8 shadow-apple-card hover:shadow-apple-hover transition-all duration-700 bg-zinc-950 group">
              <picture className="block w-full h-full">
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/images/desktop/laser-measurement.webp" 
                />
                <img
                  src="/images/mobile/laser-measurement.webp"
                  data-fallback-desktop="/images/laser-measurement.jpg"
                  data-fallback-mobile="/images/laser-measurement.jpg"
                  onError={handleImgError}
                  alt="Aura Grills Certified Technician performing Bosch laser survey"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>

              {/* Architectural Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Caption Pill */}
              <div className="absolute inset-x-4 bottom-4 z-20">
                <div className="p-3 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/12 shadow-apple-float flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold tracking-apple-tight text-zinc-100">
                      Certified Bosch Laser Telemetry Van
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    ±0.1mm Uniform Gap
                  </span>
                </div>
              </div>
            </div>

            {/* 2x2 Benchmark Metric Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {benchmarks.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div 
                    key={b.metric} 
                    className="p-4 rounded-2xl bg-zinc-50 border border-black/5 hover:border-emerald-500/30 hover:bg-white hover:shadow-apple-card transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-8 h-8 rounded-xl bg-white border border-black/5 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shadow-xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-zinc-950 tracking-apple-tight">
                        {b.metric}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 tracking-apple-tight">
                      {b.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-normal pt-0.5 tracking-apple-normal leading-relaxed">
                      {b.desc}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4-STEP PROTOCOL FLOW (Col 7-12)
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="space-y-3.5">
              {protocolSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-5 sm:p-6 rounded-[24px] bg-zinc-50/70 border border-black/5 hover:border-emerald-500/30 hover:bg-white hover:shadow-apple-card transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-zinc-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 tracking-apple-tight">
                        {s.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px] tracking-apple-tight shrink-0 border border-emerald-200/80">
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed pl-10 tracking-apple-normal">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Apple Clean CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleBookingClick}
                className="flex-1 py-3.5 px-6 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-apple-tight transition shadow-apple-card hover:shadow-apple-hover flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-300" />
                <span>Book Laser Survey &amp; Sample Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <a
                href="tel:+918523068882"
                className="py-3.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200/80 font-semibold text-xs sm:text-sm tracking-apple-tight transition shadow-xs flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Direct Helpline</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
