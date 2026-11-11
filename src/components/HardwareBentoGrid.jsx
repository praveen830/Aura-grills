import React from 'react';
import { 
  ShieldCheck, 
  Sun, 
  Flame, 
  Layers, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * HardwareBentoGrid - Apple-Inspired Bento Hardware Matrix
 * Highlights the 4 engineering cornerstones of Aura Invisible Grills
 * Modeled after Apple Silicon / Pro Hardware feature grids.
 */
export default function HardwareBentoGrid({ onOpenBooking }) {
  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#F5F5F7] border-t border-black/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/70 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-semibold text-zinc-800 shadow-xs tracking-apple-tight">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hardware Architecture &amp; Precision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-apple-tighter text-zinc-950 leading-[1.12]">
            Engineering so refined,{' '}
            <span className="text-gradient-apple-dark">it disappears into light.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed tracking-apple-normal max-w-2xl mx-auto">
            Every millimeter of an Aura installation is calibrated to aerospace benchmarks—delivering certified 400kg tensile load retention without obscuring a single degree of your skyline.
          </p>
        </div>

        {/* Bento Grid Matrix (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* =========================================================================
              BENTO CARD 1: THE CORE WIRE (Col 1-8 Large Featured Card)
              ========================================================================= */}
          <div className="md:col-span-8 group relative rounded-[28px] overflow-hidden bg-white border border-black/6 shadow-apple-card hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 max-w-xl z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Aerospace Core</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-apple-tight leading-snug">
                Virgin SS-316 Marine Wire with DuPont Nylon Armor.
              </h3>

              <p className="text-sm text-zinc-600 font-normal leading-relaxed tracking-apple-normal">
                Forged with high-grade molybdenum steel, our 2.0mm cables resist monsoon rain, urban smog, and salt air with zero oxidation. Wrapped in UV-stabilized nylon to protect gentle hands.
              </p>

              {/* Spec Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <div className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold">
                  400 KG Breaking Load
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold">
                  Molybdenum Infused
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold">
                  Zero Rust Guarantee
                </div>
              </div>
            </div>

            {/* Visual Hardware Backdrop Image */}
            <div className="relative mt-6 sm:mt-8 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/5">
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
              <div className="absolute bottom-3 left-4 text-white text-xs font-medium tracking-apple-normal">
                Precision champagne 6063-T6 track with flush double lock-nuts
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 2: SKYLINE PANORAMA (Col 9-12 Vertical High-Contrast Card)
              ========================================================================= */}
          <div className="md:col-span-4 group relative rounded-[28px] overflow-hidden bg-zinc-950 text-white border border-white/10 shadow-apple-card hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-3 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-zinc-200">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero View Loss</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-apple-tight leading-snug">
                Unobstructed Skyline Horizon.
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed tracking-apple-normal">
                Virtually transparent from 3 meters away. Allows 100% natural sunlight and fresh cross-ventilation while keeping family and pets safe.
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold">
                100% Natural Horizon Preservation
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 3: TODDLER & PET LOCK (Col 1-6)
              ========================================================================= */}
          <div className="md:col-span-6 group relative rounded-[28px] overflow-hidden bg-white border border-black/6 shadow-apple-card hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-3 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span>Child-Safe Pitch</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-apple-tight leading-snug">
                50mm Toddler &amp; Pet Lock Pitch.
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed tracking-apple-normal">
                Strict 2-inch uniform wire spacing eliminates head entrapment, prevents climbing footholds, and stops toys and pets from slipping past balustrades.
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
                Uniform 50mm Laser-Calibrated Pitch
              </div>
            </div>
          </div>

          {/* =========================================================================
              BENTO CARD 4: 10-SECOND FIRE EMERGENCY EGRESS (Col 7-12)
              ========================================================================= */}
          <div className="md:col-span-6 group relative rounded-[28px] overflow-hidden bg-white border border-black/6 shadow-apple-card hover:shadow-apple-hover transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-3 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-[11px] font-semibold text-rose-800">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>Emergency Protocol</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-apple-tight leading-snug">
                10-Second Fire Rescue Egress.
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed tracking-apple-normal">
                Unlike permanent iron prison grilles that trap residents during high-rise fire accidents, Aura cables can be swiftly snipped with wire-cutters in under 10 seconds for emergency evacuation.
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

      </div>
    </section>
  );
}
