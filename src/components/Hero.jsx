import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 01 (#intro) - Clean Brand Intro & Realistic Hero Showcase
 * Rebuilt for high Google Ads conversion and strict Desktop (16:10) / Mobile (4:5) visual parity.
 * CRITICAL RULE: Zero view simulators or tab switching overlays. Luxury architectural focus.
 */
export default function Hero({ onOpenBooking }) {
  const handleSurveyClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }
    const formElement = document.getElementById('bangalore-dashboard') || document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  return (
    <section id="intro" className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 bg-white overflow-hidden">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-50/40 via-zinc-50/50 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: EDITORIAL INTRO & TELEMETRY SPECS (Col 1-6)
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[10px] sm:text-[11px] font-black text-emerald-900 uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BENGALURU'S #1 RWA-APPROVED BALCONY SAFETY ARCHITECTS</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-black tracking-tight text-zinc-950 leading-[1.12] sm:leading-[1.08]">
              Unobstructed Skyline Views.{' '}
              <span className="text-emerald-700">Zero-Rust SS-316 Protection.</span>
            </h1>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
              Aura Grills replaces bulky iron cages with 2.0mm marine-grade SS-316 cables that lock cleanly into champagne-anodized 6063-T6 tracks—protecting children, pets, and high-rise balconies across Bengaluru.
            </p>

            {/* 4 Telemetry Spec Pills (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-xl">
              {/* Pill 1 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-zinc-950 font-black text-sm sm:text-base tracking-tight">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SS-316</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium pt-0.5">
                  Marine Grade Core (Zero Rust)
                </div>
              </div>

              {/* Pill 2 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-zinc-950 font-black text-sm sm:text-base tracking-tight">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>400 KG</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium pt-0.5">
                  Breaking Load Per Cable
                </div>
              </div>

              {/* Pill 3 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-zinc-950 font-black text-sm sm:text-base tracking-tight">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>0.1 MM</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium pt-0.5">
                  Bosch Laser Measurement
                </div>
              </div>

              {/* Pill 4 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-zinc-950 font-black text-sm sm:text-base tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10-YR</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 font-medium pt-0.5">
                  Stamped Warranty Bond
                </div>
              </div>
            </div>

            {/* Google Ads Primary Conversion Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
              <button
                type="button"
                onClick={handleSurveyClick}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm tracking-wide transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>Book Free Doorstep Laser Survey</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-100" />
              </button>

              <a
                href="tel:+918523068882"
                className="px-6 py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs sm:text-sm tracking-wide transition shadow-md flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 85230 68882</span>
              </a>
            </div>

            {/* Micro reassurance line */}
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Same-Day Laser Survey Available in Whitefield, JP Nagar, HSR &amp; E-City</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: REALISTIC HERO IMAGE SHOWCASE (Col 7-12)
              Framed architectural showcase card with aspect-[4/5] md:aspect-[16/10]
              Using HTML5 <picture> tag with dual desktop/mobile folder support
              ========================================================================= */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-zinc-950 group">
              
              {/* HTML5 <picture> tag matching exact architectural specification */}
              <picture className="block w-full h-full">
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/images/desktop/hero-main-balcony.webp" 
                />
                <img
                  src="/images/mobile/hero-main-balcony.webp"
                  data-fallback-desktop="/images/aura-grills-brand-hero.jpg"
                  data-fallback-mobile="/images/aura-grills-brand-hero.jpg"
                  onError={handleImgError}
                  alt="Aura Grills SS-316 Invisible Safety Grills for Bengaluru Balconies"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>

              {/* Architectural Vignette Overlays for Text Legibility */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Top-Left Floating Glass Pill */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <div className="px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-xl flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>RWA APPROVED • PRESTIGE, SOBHA &amp; BRIGADE STANDARD</span>
                </div>
              </div>

              {/* Bottom Floating Glass Bar */}
              <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-20">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  {/* Left Specs */}
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-wide text-zinc-100">
                      2.0mm Virgin SS-316 Nylon Coated • 50mm Child-Safe Gap
                    </span>
                  </div>

                  {/* Right Action: Direct WhatsApp Quote */}
                  <a
                    href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20a%20free%20laser%20survey%20and%20quote%20for%20balcony%20invisible%20safety%20grills."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95 shrink-0"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
