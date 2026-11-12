import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2, 
  Calendar,
  Phone, 
  ArrowRight
} from 'lucide-react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 01 (#intro) - True Apple Keynote Billboard Hero
 * Mobile-first responsive hierarchy:
 * - Mobile: Hero visual on top, followed by keynote typography and highlighted CTA actions.
 * - Desktop: Grand architectural keynote typography on top, followed by panoramic balcony stage.
 * Highlighted buttons with high-contrast, theme-matched colors.
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
      label: 'Tensile Breaking Load',
      sub: 'Certified per individual wire',
      icon: Award
    },
    {
      metric: 'SS-316',
      label: 'Marine Virgin Core',
      sub: 'Molybdenum anti-rust alloy',
      icon: ShieldCheck
    },
    {
      metric: '50 MM',
      label: 'Toddler Safety Pitch',
      sub: 'Zero head entrapment pitch',
      icon: Zap
    },
    {
      metric: '10-YEAR',
      label: 'Stamped Warranty Bond',
      sub: 'Full replacement guarantee',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="intro" className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-white overflow-hidden">
      {/* Apple Keynote Ambient Diffuse Lighting */}
      <div className="absolute top-0 inset-x-0 h-[450px] bg-gradient-to-b from-zinc-100/60 via-zinc-50/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 sm:space-y-8 md:space-y-10">
        
        {/* =========================================================================
            1. PRISTINE ARCHITECTURAL BALCONY STAGE
            Mobile: order-1 (IMAGE ON TOP!), Desktop: md:order-2
            ========================================================================= */}
        <div className="order-1 md:order-2 relative w-full max-w-6xl mx-auto aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] sm:rounded-[36px] overflow-hidden apple-card-surface shadow-apple-diffuse group">
          
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
              alt="Aura SS-316 Invisible Safety Grills on High-Rise Balcony with Natural Daylight and Clear Skyline"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000 ease-out"
              loading="eager"
              fetchPriority="high"
            />
          </picture>

          {/* Gentle, Natural Edge Blend Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* =========================================================================
            2. POISED KEYNOTE HEADER
            Mobile: order-2 (BELOW IMAGE!), Desktop: md:order-1
            ========================================================================= */}
        <div className="order-2 md:order-1 text-center max-w-3xl mx-auto space-y-4">
          
          {/* Subtle Quiet Eyebrow */}
          <div className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
            Aura Architectural Balcony Systems
          </div>

          {/* Poised Keynote Heading (Balanced 2-Line Scale) */}
          <h1 className="text-apple-hero text-zinc-950 font-medium tracking-apple-tight leading-[1.12] max-w-2xl mx-auto">
            Safety so clear,{' '}
            <span className="text-gradient-apple-dark block sm:inline">
              it disappears into the horizon.
            </span>
          </h1>

          {/* Calm, Concise Subtitle */}
          <p className="text-apple-subhead text-zinc-500 font-normal leading-relaxed max-w-xl mx-auto">
            Aerospace-grade SS-316 high-tensile invisible cables for Bengaluru high-rises. Certified 400kg protection with 100% skyline view preservation.
          </p>

          {/* Highlighted Apple Action Buttons (Theme Matched & High Contrast) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-md mx-auto">
            {/* Button 1: Schedule Site Survey (Solid Black + Emerald Icon + Crisp White Text) */}
            <button
              type="button"
              onClick={handleSurveyClick}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-950 hover:bg-black text-white font-bold text-xs sm:text-[13px] tracking-apple-tight transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Schedule Free Survey</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {/* Button 2: Direct Call (Solid Emerald Green with White Phone Icon) */}
            <a
              href="tel:+918523068882"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-[13px] tracking-apple-tight transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call +91 85230 68882</span>
            </a>
          </div>

          {/* Quiet Reassurance Footnote */}
          <div className="text-[11px] sm:text-xs text-zinc-400 pt-0.5 font-normal tracking-apple-tight">
            Certified doorstep laser survey van active in Whitefield, JP Nagar, HSR &amp; E-City
          </div>

        </div>

        {/* =========================================================================
            3. QUIET LUXURY TELEMETRY BENCHMARK STATS (4-COLUMN ROW)
            ========================================================================= */}
        <div className="order-3 md:order-3 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 max-w-6xl mx-auto">
          {telemetryStats.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.metric}
                className="apple-card-surface p-5 sm:p-6 text-left hover:shadow-apple-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                    SPEC
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-medium tracking-apple-tight text-zinc-950 mb-0.5">
                  {item.metric}
                </div>

                <div className="text-xs font-medium text-zinc-800 tracking-apple-tight">
                  {item.label}
                </div>

                <div className="text-[11px] text-zinc-500 font-normal pt-0.5">
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
