import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 01 (#intro) - True Apple Keynote Billboard Hero
 * Massive fluid typography, cinematic architectural balcony stage, borderless diffuse surfaces,
 * and Apple hardware telemetry.
 */
export default function Hero({ onOpenBooking }) {
  const handleSurveyClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }
    const formElement = document.getElementById('contact') || document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  const telemetryStats = [
    {
      metric: '400 KG',
      label: 'Tensile breaking load',
      sub: 'Certified per individual wire',
      icon: Award
    },
    {
      metric: 'SS-316',
      label: 'Marine virgin core',
      sub: 'Molybdenum anti-rust alloy',
      icon: ShieldCheck
    },
    {
      metric: '±0.1 MM',
      label: 'Bosch laser precision',
      sub: 'Doorstep curvature survey',
      icon: Zap
    },
    {
      metric: '10-YEAR',
      label: 'Stamped warranty bond',
      sub: 'Full replacement guarantee',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="intro" className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-white overflow-hidden">
      {/* Apple Keynote Ambient Diffuse Lighting */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-zinc-100/70 via-zinc-50/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* =========================================================================
            1. GRAND KEYNOTE BILLBOARD HEADER
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          
          {/* Subtle Metallic Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/90 text-[11px] sm:text-xs font-semibold tracking-apple-tight text-zinc-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bengaluru RWA-Approved Architectural Safety</span>
          </div>

          {/* Heroic Keynote Heading (Optimized Apple Fluid Clamp) */}
          <h1 className="text-apple-hero text-zinc-950 font-semibold tracking-apple-tight leading-[1.08] max-w-3xl mx-auto">
            Safety so clear,{' '}
            <span className="text-gradient-apple-dark block sm:inline">
              it disappears into the horizon.
            </span>
          </h1>

          {/* Calm, Editorial Subtitle */}
          <p className="text-apple-subhead text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Aerospace-grade 2.0mm marine SS-316 cables anchored in champagne-anodized 6063-T6 tracks. Safeguarding children, pets, and panoramic skyline vistas across high-rises in Bengaluru with zero view loss.
          </p>

          {/* Apple Action Buttons Row */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={handleSurveyClick}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-zinc-950 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-apple-tight transition-all duration-300 shadow-apple-card hover:shadow-apple-hover flex items-center justify-center gap-2 active:scale-95 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-zinc-300" />
              <span>Book Free Laser Survey</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="tel:+918523068882"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 font-semibold text-xs sm:text-sm tracking-apple-tight transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call 85230 68882</span>
            </a>
          </div>

          {/* Reassurance Micro-line */}
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Same-day laser survey van in Whitefield, JP Nagar, HSR &amp; Electronic City</span>
          </div>

        </div>

        {/* =========================================================================
            2. CINEMATIC ARCHITECTURAL BALCONY STAGE (BORDERLESS LUXURY)
            ========================================================================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[28px] sm:rounded-apple-hero overflow-hidden shadow-apple-diffuse hover:shadow-apple-hover transition-all duration-700 bg-zinc-950 group">
          
          {/* HTML5 <picture> tag with dual desktop/mobile high-resolution sources */}
          <picture className="block w-full h-full">
            <source 
              media="(min-width: 768px)" 
              srcSet="/images/desktop/hero-main-balcony.jpg" 
            />
            <img
              src="/images/mobile/hero-main-balcony.jpg"
              data-fallback-desktop="/images/desktop/hero-main-balcony.webp"
              data-fallback-mobile="/images/mobile/hero-main-balcony.webp"
              onError={handleImgError}
              alt="Aura SS-316 Invisible Safety Grills on Luxury Bengaluru Penthouse Balcony at Golden Hour"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
              loading="eager"
              fetchPriority="high"
            />
          </picture>

          {/* Cinematic Vignettes */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          {/* Top Floating Glass Callouts */}
          <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
            <div className="px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-xs font-semibold tracking-apple-tight uppercase shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>2.0mm Virgin SS-316 Core</span>
            </div>

            <div className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-xs font-semibold tracking-apple-tight uppercase shadow-xs">
              Prestige, Sobha &amp; Brigade Grade
            </div>
          </div>

          {/* Bottom Floating Glass Capsule Bar */}
          <div className="absolute inset-x-3 sm:inset-x-6 bottom-3 sm:bottom-6 z-20">
            <div className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-zinc-950/80 backdrop-blur-xl border border-white/12 shadow-apple-float flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              {/* Left Specs */}
              <div className="flex items-center gap-2.5 text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-apple-normal text-zinc-100">
                  400kg Breaking Load • 50mm Toddler-Safe Pitch • 10-Yr Stamped Bond
                </span>
              </div>

              {/* Right WhatsApp Action */}
              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20a%20free%20laser%20survey%20and%20quote%20for%20balcony%20invisible%20safety%20grills."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 shrink-0 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. APPLE TELEMETRY BENCHMARK STATS (4-COLUMN ROW)
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {telemetryStats.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.metric}
                className="apple-card-surface p-5 sm:p-6 text-left group hover:shadow-apple-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                    VERIFIED
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-apple-metric text-zinc-950 mb-1">
                  {item.metric}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-apple-tight">
                  {item.label}
                </div>

                <div className="text-[11px] sm:text-xs text-zinc-500 font-normal pt-0.5 tracking-apple-normal">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
