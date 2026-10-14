import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Award, Wind, Flame, Activity, Zap } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  // Live Digital Tension Tester state (from 140kg resting to 400kg stress test)
  const [loadValue, setLoadValue] = useState(140);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleRunStressTest = () => {
    setIsSimulating(true);
    let current = 140;
    const interval = setInterval(() => {
      current += 20;
      if (current >= 400) {
        current = 400;
        setLoadValue(400);
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 800);
      } else {
        setLoadValue(current);
      }
    }, 60);
  };

  const getSafetyStatus = (load) => {
    if (load <= 160) return { label: 'Optimal Calibrated Tension', color: 'text-emerald-600', badge: 'bg-emerald-50 border-emerald-200 text-emerald-800' };
    if (load <= 300) return { label: 'High Wind / Child Impact Absorbed', color: 'text-emerald-700', badge: 'bg-emerald-100 border-emerald-300 text-emerald-900' };
    return { label: 'Peak 400kg Load Certified (Zero Structural Yield)', color: 'text-emerald-800', badge: 'bg-emerald-500 text-white border-emerald-600' };
  };

  const status = getSafetyStatus(loadValue);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-zinc-100/70 via-emerald-50/25 to-transparent pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-emerald-500/6 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          
          {/* Corridor Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>BENGALURU HIGH-RISE ARCHITECTURAL SAFETY</span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.08] sm:leading-[1.05]">
            Architectural Skyline Views.{' '}
            <span className="text-emerald-700">Unbreakable Balcony Safety.</span>
          </h1>

          {/* Exact Required Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Engineered exclusively for Bangalore's high-rise residences. Aerospace SS-316 marine cables deliver certified 400kg fall protection and complete bird deterrence without obstructing daylight or cross breeze.
          </p>

          {/* 4 Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-2xl mx-auto">
            <div className="px-3 py-2 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-left space-y-0.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>400kg Threshold</span>
              </div>
              <div className="text-[10px] text-zinc-500">Impact breaking load</div>
            </div>

            <div className="px-3 py-2 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-left space-y-0.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-xs">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>SS-316 Marine</span>
              </div>
              <div className="text-[10px] text-zinc-500">10-Yr rustproof warranty</div>
            </div>

            <div className="px-3 py-2 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-left space-y-0.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-xs">
                <Wind className="w-3.5 h-3.5 text-emerald-600" />
                <span>99% Airflow</span>
              </div>
              <div className="text-[10px] text-zinc-500">Full horizon retention</div>
            </div>

            <div className="px-3 py-2 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-left space-y-0.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-xs">
                <Flame className="w-3.5 h-3.5 text-emerald-600" />
                <span>&lt;15s Fire Egress</span>
              </div>
              <div className="text-[10px] text-zinc-500">Life-saving wire snip</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-zinc-950/15 transition-all duration-200 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <span>Schedule Free Laser Survey</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>

            <a
              href="https://wa.me/918523068882?text=Hello%20Aura%20Guilds!%20I%20am%20looking%20for%20SS-316%20invisible%20safety%20grills%20for%20my%20balcony%20in%20Bangalore.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-2xs transition-all duration-200 hover:border-zinc-400 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp Direct</span>
            </a>
          </div>

        </div>

        {/* Hero Visual Frame + Live Digital Tension Tester */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto space-y-6">
          
          {/* Photorealistic High-Rise Balcony Photo */}
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-zinc-200/90 shadow-2xl shadow-zinc-950/10 bg-zinc-950 group">
            <div className="relative aspect-16/10 sm:aspect-21/9 w-full overflow-hidden">
              <img
                src="/images/luxury-family-balcony-sunset.jpg"
                alt="Luxury Penthouse Balcony with SS-316 Invisible Safety Grills in Bangalore"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />

              {/* Floating Architectural Spec Pill */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-white text-[10px] sm:text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Certified SS-316 Marine Core (2.5mm / 3.0mm)</span>
                </div>
              </div>

              {/* Floating Location Overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
                <div className="bg-zinc-950/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-zinc-800/80 max-w-sm space-y-1">
                  <div className="text-xs sm:text-sm font-extrabold flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Real Bangalore Penthouse Installation</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 leading-snug">
                    Golden hour view from 26th-floor balcony in Whitefield. 100% child-safe, zero bird droppings, invisible from 5 meters.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-zinc-200 text-zinc-900 text-xs font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>Verified 850+ Bangalore Apartments Secured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Live Digital Tension Tester Widget */}
          <div className="rounded-3xl bg-zinc-950 text-white p-5 sm:p-7 border border-zinc-800/80 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                    Live Digital Cable Tension Tester
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Simulate mechanical load deflection from resting tension (140 kg) up to certified breaking threshold (400 kg).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunStressTest}
                  disabled={isSimulating}
                  type="button"
                  className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition active:scale-95 disabled:opacity-60 cursor-pointer shadow-md"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isSimulating ? 'Testing...' : 'Simulate 400kg Peak Test'}</span>
                </button>
              </div>
            </div>

            {/* Slider & Meter Gauge */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left: Interactive Slider */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 uppercase font-semibold">Tension Load Control</span>
                  <span className="font-mono font-black text-emerald-400 text-base">
                    {loadValue} kg / Wire
                  </span>
                </div>

                <input
                  type="range"
                  min="140"
                  max="400"
                  step="10"
                  value={loadValue}
                  onChange={(e) => setLoadValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />

                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>140 kg (Resting)</span>
                  <span>250 kg (High Wind)</span>
                  <span className="text-emerald-400 font-bold">400 kg (Max Breaking)</span>
                </div>
              </div>

              {/* Right: Live Diagnostics readout */}
              <div className="md:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Wire Metallurgy:</span>
                  <span className="text-white font-mono font-bold">SS-316 Marine + Nylon</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Safety Margin:</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    {(400 / Math.max(1, loadValue)).toFixed(1)}x Factor
                  </span>
                </div>

                <div className="pt-2 border-t border-zinc-800/80">
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full border ${status.badge}`}>
                    {status.label}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
