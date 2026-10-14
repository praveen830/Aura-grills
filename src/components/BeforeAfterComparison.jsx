import React, { useState } from 'react';
import { Sparkles, XCircle, CheckCircle2, Shield, Eye, Flame } from 'lucide-react';

export default function BeforeAfterComparison({ onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="before-after" className="py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Visual Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Slide to Compare: Iron Cage vs Aura Invisible Grill
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Drag the slider horizontally to witness the transformation of a high-rise balcony.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full aspect-4/3 sm:aspect-16/9 rounded-3xl overflow-hidden border-2 border-slate-300 shadow-2xl select-none cursor-ew-resize bg-slate-900"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background Layer: RIGHT SIDE (Aurab Grills SS-316 Invisible Grill - Bright, Clear View) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/whitefield-real-balcony.jpg"
                alt="Aurab Grills Invisible Grill Installation"
                className="w-full h-full object-cover"
              />
              {/* Invisible Wires Simulation */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.9) 0px,
                    rgba(255, 255, 255, 0.9) 1.2px,
                    transparent 1.2px,
                    transparent 20px
                  )`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Badge for Right Side */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>AURA INVISIBLE GRILL</span>
              </div>

              {/* Feature Points on Right */}
              <div className="absolute bottom-4 right-4 z-10 bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-emerald-500/50 text-white text-right max-w-xs space-y-1">
                <div className="text-xs font-black text-emerald-400">98.7% Open Sky View</div>
                <div className="text-[11px] text-slate-300">
                  Unbroken sunrise breeze • 400kg toddler fall protection • 100% pigeon-free
                </div>
              </div>
            </div>

            {/* Foreground Layer: LEFT SIDE (Old Dark Iron Cage) - Clipped by Slider */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: '100%', minWidth: '896px' }}>
                <img
                  src="/images/whitefield-real-balcony.jpg"
                  alt="Old Heavy Iron Balcony Grill"
                  className="w-full h-full object-cover filter brightness-50 contrast-125 saturate-50"
                />
                {/* Heavy Ugly Iron Grid Simulation */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, rgba(20, 15, 10, 0.95) 0px, rgba(20, 15, 10, 0.95) 12px, transparent 12px, transparent 55px),
                      repeating-linear-gradient(90deg, rgba(20, 15, 10, 0.95) 0px, rgba(20, 15, 10, 0.95) 12px, transparent 12px, transparent 55px)
                    `
                  }}
                ></div>
                <div className="absolute inset-0 bg-amber-950/30 mix-blend-multiply"></div>

                {/* Badge for Left Side */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-rose-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-white" />
                  <span>OLD IRON CAGE / NETS</span>
                </div>

                {/* Feature Points on Left */}
                <div className="absolute bottom-4 left-4 z-10 bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-rose-500/50 text-white text-left max-w-xs space-y-1">
                  <div className="text-xs font-black text-rose-400">Jail-Like Dark Prison</div>
                  <div className="text-[11px] text-slate-300">
                    Blocks 60% daylight • Deadly fire trap • Severe monsoon rust stains
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Draggable Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl z-30 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 border-2 border-emerald-500 shadow-xl flex items-center justify-center font-bold text-xs select-none">
                ⇄
              </div>
            </div>

          </div>

          {/* Quick Caption */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mt-3 px-2">
            <span>← Old Iron Cages &amp; Green Nets</span>
            <span>Drag slider to see difference</span>
            <span>Aura SS-316 Invisible Grill →</span>
          </div>
        </div>

        {/* 4 Key Takeaway Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>Daylight &amp; View</span>
            </div>
            <p className="text-xs text-slate-600">
              Iron bars block 60% light. Invisible grills preserve 99% panoramic sunlight.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Toddler &amp; Pet Safety</span>
            </div>
            <p className="text-xs text-slate-600">
              2-Inch spacing certified to withstand 400kg tension impact per wire.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-emerald-600" />
              <span>Fire Rescue Escape</span>
            </div>
            <p className="text-xs text-slate-600">
              Welded cages trap families. Invisible wires snip in 10 seconds for emergency rescue.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Rustproof SS-316</span>
            </div>
            <p className="text-xs text-slate-600">
              Marine-grade alloy with 2.5% Molybdenum. 10-Year rustproof warranty card.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition shadow-md cursor-pointer active:scale-95"
          >
            <span>Replace Old Cages With Invisible Grills</span>
          </button>
        </div>

      </div>
    </section>
  );
}
