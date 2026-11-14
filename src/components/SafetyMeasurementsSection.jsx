import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Layers, 
  Compass, 
  Calendar, 
  Phone, 
  ArrowRight
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';
import { gtag_report_conversion } from '../utils/gtag';

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
          <div className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
            Aura Laser Telemetry &amp; Protocol
          </div>

          <h2 className="text-apple-section font-medium tracking-apple-tight text-zinc-950 leading-[1.12]">
            Measured in tenths of a millimeter.{' '}
            <span className="text-gradient-apple-dark block sm:inline">Calibrated for life.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-500 font-normal leading-relaxed max-w-2xl">
            Every installation is governed by strict structural safety benchmarks—using digital laser telemetry and load-calibrated dynamometers to guarantee absolute security without damaging tiles.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* =========================================================================
              LEFT COLUMN: REALISTIC HARDWARE VISUAL + 2x2 BENCHMARK GRID
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Framed Architectural Picture Card (100% Clean Visual Stage) */}
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[28px] overflow-hidden apple-card-surface hover:shadow-apple-hover transition-all duration-700 bg-zinc-950 group">
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
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />
              </picture>

              {/* Natural subtle edge vignette */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* 2x2 Benchmark Metric Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {benchmarks.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div 
                    key={b.metric} 
                    className="p-4 sm:p-5 rounded-[22px] apple-card-surface hover:shadow-apple-hover transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
                        <IconComponent className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-base sm:text-lg font-medium text-zinc-950 tracking-apple-tight">
                        {b.metric}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-zinc-800 tracking-apple-tight">
                      {b.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-normal pt-0.5 leading-relaxed">
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
            
            <div className="space-y-3">
              {protocolSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-5 sm:p-6 rounded-[24px] apple-card-surface hover:shadow-apple-hover transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-zinc-900 text-white font-mono text-xs font-medium flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-medium text-zinc-950 tracking-apple-tight">
                        {s.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 font-normal text-[10px] tracking-apple-tight shrink-0">
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed pl-10">
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
                className="flex-1 py-3 px-6 rounded-full bg-zinc-950 hover:bg-black text-white font-medium text-xs sm:text-[13px] tracking-apple-tight transition shadow-apple-sm hover:shadow-apple-hover flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>Book Laser Survey &amp; Sample Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <a
                href="tel:+918523068882"
                onClick={() => gtag_report_conversion()}
                className="py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200/70 text-zinc-800 font-medium text-xs sm:text-[13px] tracking-apple-tight transition flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-600" />
                <span>Direct Helpline</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
