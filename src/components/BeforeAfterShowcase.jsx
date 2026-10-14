import React, { useState } from 'react';
import { Sun, Flame, Sparkles, CheckCircle2, XCircle, ArrowLeftRight, ArrowRight } from 'lucide-react';

export default function BeforeAfterShowcase({ onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-zinc-50/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <ArrowLeftRight className="w-3.5 h-3.5 text-emerald-600" />
            <span>VISUAL TRANSFORMATION • PROVEN ELEVATION IMPACT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            Traditional Iron Cage vs.{' '}
            <span className="text-emerald-700">Invisible Safety</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Drag the interactive slider horizontally to witness how invisible safety grills liberate your high-rise balcony without sacrificing security.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full aspect-4/3 sm:aspect-16/9 rounded-3xl sm:rounded-[32px] overflow-hidden border border-zinc-300/80 shadow-2xl shadow-zinc-950/10 select-none cursor-ew-resize bg-zinc-950 group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Background Layer: RIGHT SIDE (After - Invisible Grills) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/whitefield-real-balcony.jpg"
                alt="Open Balcony with Invisible Safety Grills"
                className="w-full h-full object-cover object-center"
              />

              {/* Realistic vertical tension cable lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-55"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.95) 0px,
                    rgba(255, 255, 255, 0.95) 1.2px,
                    transparent 1.2px,
                    transparent 22px
                  )`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

              {/* Right Side Pill Badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SS-316 Invisible Grill</span>
              </div>

              {/* Right Side Metrics Box */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 bg-zinc-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-emerald-500/40 text-white text-right max-w-[260px] space-y-1">
                <div className="text-xs sm:text-sm font-black text-emerald-400">
                  99% Natural Sunlight
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-300 leading-snug">
                  Uncut horizon view • 400kg fall security • 10-second fire escape ready
                </div>
              </div>
            </div>

            {/* Foreground Layer: LEFT SIDE (Before - Heavy MS Iron Cage) Clipped by Slider */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: '100%', minWidth: '700px' }}>
                <img
                  src="/images/whitefield-real-balcony.jpg"
                  alt="Ugly Traditional Iron Cage Balcony"
                  className="w-full h-full object-cover filter brightness-[0.45] contrast-125 saturate-50"
                />

                {/* Heavy Ugly Iron Prison Cage Grid Simulation */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, rgba(20, 15, 12, 0.95) 0px, rgba(20, 15, 12, 0.95) 14px, transparent 14px, transparent 60px),
                      repeating-linear-gradient(90deg, rgba(20, 15, 12, 0.95) 0px, rgba(20, 15, 12, 0.95) 14px, transparent 14px, transparent 60px)
                    `,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>

                {/* Left Side Pill Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3.5 py-1.5 rounded-full bg-rose-700 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Old MS Iron Cage</span>
                </div>

                {/* Left Side Metrics Box */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 bg-zinc-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-rose-500/40 text-white text-left max-w-[260px] space-y-1">
                  <div className="text-xs sm:text-sm font-black text-rose-400">
                    Suffocating Prison Feel
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-300 leading-snug">
                    Blocks 60% breeze • Monsoon rust stains • Inescapable fire trap
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Dividing Bar & Center Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-zinc-900 border-2 border-emerald-500 hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              </div>
            </div>
          </div>

          <div className="text-center mt-3 text-xs text-zinc-600">
            Drag the handle to slide between old MS iron cage and SS-316 invisible grills.
          </div>
        </div>

        {/* 3 Minimal Comparative Metrics Cards */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 space-y-2.5 shadow-2xs hover:border-emerald-300 transition">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Sun className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="text-base font-black text-zinc-950">99% Natural Light</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Slender 2.5mm aerospace cables disappear into the skyline from 5 feet away, flooding indoor living areas with unblocked daylight.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 space-y-2.5 shadow-2xs hover:border-emerald-300 transition">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Flame className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="text-base font-black text-zinc-950">10-Second Fire Egress</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Unlike welded iron bars that create deadly dead-ends in residential fires, emergency crews can cleanly snip cables in seconds.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 space-y-2.5 shadow-2xs hover:border-emerald-300 transition">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="text-base font-black text-zinc-950">Zero Pigeon Menace</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Strict 50mm vertical spacing physically prevents pigeons and birds from entering or perching, eliminating droppings without ugly nylon nets.
            </p>
          </div>
        </div>

        {/* Direct Action Trigger */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>Upgrade Your Balcony</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
