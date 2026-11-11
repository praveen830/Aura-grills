import React from 'react';
import { 
  ShieldCheck, 
  Sun, 
  Flame, 
  Compass, 
  Sparkles,
  ArrowRight,
  Layers,
  Activity
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * HardwareBentoGrid - True Apple-Grade Hardware Bento Matrix
 * Modeled after Apple Silicon / Pro Hardware feature grids.
 * Showcases the 4 engineering cornerstones:
 * 1. 400 KG Virgin SS-316 Marine Cable Core
 * 2. 100% Unobstructed Skyline Horizon
 * 3. 50mm Toddler & Pet Lock Pitch
 * 4. 10-Second Rapid Emergency Fire Egress
 * Plus the Apple Silicon-style precision tech-specs telemetry strip.
 */
export default function HardwareBentoGrid({ onOpenBooking }) {
  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  return (
    <section id="hardware-architecture" className="relative py-20 sm:py-28 md:py-32 bg-[#F5F5F7] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-white/70 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-apple-sm text-[11px] font-semibold text-zinc-700 tracking-apple-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase tracking-wider">Aura Pro Hardware Architecture</span>
          </div>

          <h2 className="text-apple-section font-semibold tracking-apple-tight text-zinc-950 leading-[1.08]">
            Engineering so refined,{' '}
            <span className="text-gradient-apple-dark block sm:inline">it disappears into light.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Every millimeter of an Aura installation is calibrated to aerospace benchmarks—certified 400kg tensile load retention without sacrificing a single degree of your skyline.
          </p>
        </div>

        {/* Bento Grid Matrix (Asymmetric 12-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* =========================================================================
              BENTO CARD 1: THE CORE WIRE (Col 1-8 Large Featured Card)
              ========================================================================= */}
          <div className="md:col-span-8 group relative rounded-[28px] overflow-hidden apple-card-surface hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-5 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-800 tracking-apple-tight">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Aerospace Marine Core</span>
              </div>

              {/* Giant Metric Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-apple-metric font-semibold text-zinc-950 tracking-apple-metric leading-none">
                    400
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-zinc-400 tracking-apple-tight">
                    KG
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Certified Breaking Load Per Cable Strand
                </p>
              </div>

              <h3 className="text-apple-headline font-semibold text-zinc-950 tracking-apple-tight leading-snug">
                Virgin SS-316 Marine Core with DuPont Nylon Armor.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Forged with high-grade molybdenum alloy steel, our 2.0mm cables resist torrential monsoon rains, urban smog, and salt air with zero oxidation. Wrapped in UV-stabilized DuPont nylon to protect gentle hands.
              </p>

              {/* Hardware Spec Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-apple-tight">
                  6063-T6 Extrusion Track
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-apple-tight">
                  Molybdenum Infused
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-apple-tight">
                  Zero Rust Guarantee
                </div>
              </div>
            </div>

            {/* Visual Hardware Backdrop Image */}
            <div className="relative mt-8 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/5">
              <picture className="block w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/safety-laser-hardware.webp" />
                <img
                  src="/images/mobile/safety-laser-hardware.webp"
                  data-fallback-desktop="/images/laser-measurement.jpg"
                  data-fallback-mobile="/images/laser-measurement.jpg"
                  onError={handleImgError}
                  alt="Aura SS-316 Invisible Safety Grills Hardware Detail"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                <span>Precision champagne 6063-T6 track with flush double lock-nuts</span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold">
                  Lab Certified
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 2: SKYLINE PANORAMA (Col 9-12 Vertical High-Contrast Dark Card)
              ========================================================================= */}
          <div className="md:col-span-4 group relative rounded-[28px] overflow-hidden apple-card-dark text-white hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-zinc-200 tracking-apple-tight">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero View Obstruction</span>
              </div>

              {/* Giant Metric Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-apple-metric font-semibold text-white tracking-apple-metric leading-none">
                    100%
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Daylight &amp; Horizon Preserved
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-apple-tight leading-snug">
                Unobstructed Skyline Horizon.
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Virtually transparent from 3 meters away. Allows uninterrupted natural sunlight and cross-ventilation while providing total balcony safety.
              </p>
            </div>

            <div className="relative mt-6 aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <picture className="block w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/luxury-family-balcony-sunset.webp" />
                <img
                  src="/images/mobile/luxury-family-balcony-sunset.webp"
                  data-fallback-desktop="/images/luxury-family-balcony-sunset.jpg"
                  data-fallback-mobile="/images/luxury-family-balcony-sunset.jpg"
                  onError={handleImgError}
                  alt="Bengaluru Skyline Balcony View"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                <span>Bengaluru High-Rise Horizon</span>
                <span className="text-emerald-400 font-medium">RWA Approved</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 3: TODDLER & PET LOCK (Col 1-6 Light Card)
              ========================================================================= */}
          <div className="md:col-span-6 group relative rounded-[28px] overflow-hidden apple-card-surface hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-800 tracking-apple-tight">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span>Child &amp; Pet Protection</span>
              </div>

              {/* Giant Metric Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-apple-metric font-semibold text-zinc-950 tracking-apple-metric leading-none">
                    50
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-zinc-400 tracking-apple-tight">
                    MM
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Uniform Laser-Calibrated Pitch
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-apple-tight leading-snug">
                Zero-Foothold Balustrade Lock.
              </h3>

              <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                Strict 2-inch uniform wire spacing eliminates head entrapment risk, prevents climbing footholds, and stops toys or pets from slipping through balcony balustrades.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/5">
              <picture className="block w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/toddler-safe.webp" />
                <img
                  src="/images/mobile/toddler-safe.webp"
                  data-fallback-desktop="/images/toddler-safe.jpg"
                  data-fallback-mobile="/images/toddler-safe.jpg"
                  onError={handleImgError}
                  alt="Child and Pet Balcony Safety"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-semibold">
                Uniform 50mm Laser-Calibrated Pitch • Zero Climbing Footholds
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 4: 10-SECOND FIRE EMERGENCY EGRESS (Col 7-12 Light Card)
              ========================================================================= */}
          <div className="md:col-span-6 group relative rounded-[28px] overflow-hidden apple-card-surface hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[11px] font-semibold text-rose-800 tracking-apple-tight">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>Emergency Egress Protocol</span>
              </div>

              {/* Giant Metric Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-apple-metric font-semibold text-zinc-950 tracking-apple-metric leading-none">
                    &lt; 10
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-zinc-400 tracking-apple-tight">
                    SEC
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Swift Rescue Cut-Time Protocol
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-apple-tight leading-snug">
                10-Second High-Rise Fire Rescue Access.
              </h3>

              <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                Unlike permanent welded iron grilles that trap residents during high-rise fire accidents, Aura high-tensile cables can be swiftly snipped with wire-cutters in under 10 seconds for emergency evacuation.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/5">
              <picture className="block w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/technicians-installing-real.webp" />
                <img
                  src="/images/mobile/technicians-installing-real.webp"
                  data-fallback-desktop="/images/technicians-installing-real.jpg"
                  data-fallback-mobile="/images/technicians-installing-real.jpg"
                  onError={handleImgError}
                  alt="Aura Technicians Calibrating Safety Grills"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-semibold">
                Quick-Snip Egress Approved for High-Rise Apartments
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            APPLE SILICON-STYLE HARDWARE TELEMETRY SPEC STRIP
            ========================================================================= */}
        <div className="apple-card-surface p-6 sm:p-8 rounded-[28px] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-6 border-b border-zinc-100">
            <div>
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-500" />
                <span>Core Material</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-950">
                SS-316 Marine Grade
              </div>
              <div className="text-xs text-zinc-500">
                Molybdenum infused 2.0-3.0mm
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <Activity className="w-3.5 h-3.5 text-zinc-500" />
                <span>Tensile Rating</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-950">
                400 KG Breaking Load
              </div>
              <div className="text-xs text-zinc-500">
                Tensile stress tested per strand
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                <span>Track Alloy</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-950">
                6063-T6 Aluminium
              </div>
              <div className="text-xs text-zinc-500">
                Anodized champagne finish
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                <span>RWA Compliance</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-950">
                100% Facade Legal
              </div>
              <div className="text-xs text-zinc-500">
                Prestige, Sobha &amp; Brigade cleared
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-zinc-600 text-center sm:text-left">
              Need certified technical drawings or RWA approval documentation for your society?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking('Invisible Grills')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-apple-tight transition-all duration-300 shadow-apple-sm active:scale-95"
                >
                  <span>Schedule Precision Laser Survey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
