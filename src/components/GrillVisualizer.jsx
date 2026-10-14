import React, { useState } from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

export default function GrillVisualizer({
  imageSrc,
  altText = "Aura Grills Invisible Grill Balcony",
  locationName = "Bangalore Balcony",
  completedProjects = 300,
  className = ""
}) {
  const [grillMode, setGrillMode] = useState('invisible'); // 'invisible' | 'traditional' | 'bare'
  const [isTensionActive, setIsTensionActive] = useState(false);

  const handleTestTension = (e) => {
    e.stopPropagation();
    setIsTensionActive(true);
    setTimeout(() => {
      setIsTensionActive(false);
    }, 1500);
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border-2 border-emerald-500 shadow-2xl bg-slate-950 group select-none ${className}`}>
      {/* Balcony Base Image */}
      <div className="relative w-full aspect-4/3 sm:aspect-16/10 md:aspect-square lg:aspect-4/3 overflow-hidden bg-slate-900">
        <img
          src={imageSrc}
          alt={altText}
          className={`w-full h-full object-cover transition-all duration-700 ${
            grillMode === 'traditional' ? 'brightness-75 contrast-125 saturate-50' : 'brightness-100'
          }`}
          loading="lazy"
        />

        {/* 1. INVISIBLE GRILL OVERLAY (SS-316 high-tensile continuous vertical cables) */}
        {grillMode === 'invisible' && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-500">
            {/* Top Architectural Extruded Aluminum Track */}
            <div className="absolute top-0 inset-x-0 h-4 sm:h-5 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-b border-emerald-500/60 shadow-md flex items-center justify-around px-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner"></div>
              ))}
            </div>

            {/* High-tensile SS-316 Vertical Cables (2-inch precision spacing) */}
            <div
              className={`absolute inset-0 top-4 bottom-4 transition-transform ${
                isTensionActive ? 'animate-pulse scale-[1.002]' : ''
              }`}
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.95) 0px,
                  rgba(226, 232, 240, 0.85) 1.2px,
                  rgba(148, 163, 184, 0.4) 2.2px,
                  transparent 2.2px,
                  transparent 22px
                )`,
              }}
            ></div>

            {/* Shimmering Metallic Light Sheen */}
            <div
              className="absolute inset-0 top-4 bottom-4 pointer-events-none opacity-30"
              style={{
                background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 4s infinite linear'
              }}
            ></div>

            {/* Bottom Architectural Extruded Aluminum Track */}
            <div className="absolute bottom-0 inset-x-0 h-4 sm:h-5 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-950 border-t border-emerald-500/60 shadow-md flex items-center justify-around px-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner"></div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TRADITIONAL HEAVY IRON CAGE OVERLAY (To show user the difference!) */}
        {grillMode === 'traditional' && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-500">
            {/* Heavy Black MS Iron Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(30, 20, 20, 0.9) 0px, rgba(30, 20, 20, 0.9) 10px, transparent 10px, transparent 60px),
                  repeating-linear-gradient(90deg, rgba(30, 20, 20, 0.9) 0px, rgba(30, 20, 20, 0.9) 10px, transparent 10px, transparent 60px)
                `,
              }}
            ></div>
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply"></div>
          </div>
        )}

        {/* Top Floating Controls: Mode Switcher */}
        <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2">
          {/* Status Badge */}
          <div className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 shadow-md">
            <span className={`w-2 h-2 rounded-full ${grillMode === 'invisible' ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`}></span>
            <span>{locationName} • {completedProjects}+ Installs</span>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1 bg-slate-950/90 backdrop-blur-md p-1 rounded-full border border-slate-700 shadow-lg">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGrillMode('invisible');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider transition ${
                grillMode === 'invisible'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              SS-316 Invisible
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGrillMode('traditional');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider transition ${
                grillMode === 'traditional'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Old MS Cage
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGrillMode('bare');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider transition ${
                grillMode === 'bare'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Bare View
            </button>
          </div>
        </div>

        {/* Bottom Floating Info & Live Tension Button */}
        <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between gap-2">
          <div className="px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md text-[10px] font-bold text-white border border-slate-700/80 shadow-md">
            {grillMode === 'invisible' && (
              <span className="text-emerald-300 font-extrabold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                2" Gap • 400kg Tensile Load
              </span>
            )}
            {grillMode === 'traditional' && (
              <span className="text-rose-400 font-bold">
                ⚠️ Blocks 60% Light • Rust Hazard
              </span>
            )}
            {grillMode === 'bare' && (
              <span className="text-amber-300 font-bold">
                ⚠️ No Child / Pigeon Protection
              </span>
            )}
          </div>

          {grillMode === 'invisible' && (
            <button
              onClick={handleTestTension}
              className="px-2.5 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-wider transition flex items-center gap-1 shadow-lg active:scale-95 cursor-pointer"
              title="Test certified 400kg wire tension"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>{isTensionActive ? 'Tested 400kg!' : 'Stress Test'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
