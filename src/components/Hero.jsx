import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * Section 01 (#intro) - Apple Keynote-Grade Hero Section
 * Minimalist, ultra-clean editorial layout with high-precision architectural framing.
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

  const specs = [
    {
      value: 'SS-316',
      label: 'Marine-grade virgin core',
      icon: ShieldCheck
    },
    {
      value: '400 KG',
      label: 'Tensile breaking load',
      icon: Award
    },
    {
      value: '±0.1 MM',
      label: 'Bosch laser precision',
      icon: Zap
    },
    {
      value: '10-YEAR',
      label: 'Stamped replacement bond',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="intro" className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 bg-white overflow-hidden">
      {/* Apple Subtle Architectural Ambient Lighting */}
      <div className="absolute top-0 inset-x-0 h-[480px] bg-gradient-to-b from-zinc-100/60 via-zinc-50/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: EDITORIAL KEYNOTE PRESENTATION (Col 1-6)
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Apple-style Subtle Metallic Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/80 border border-black/5 text-[11px] font-semibold tracking-apple-tight text-zinc-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Bengaluru RWA-Approved Architectural Safety</span>
            </div>

            {/* Confident Keynote Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold tracking-apple-tighter text-zinc-950 leading-[1.1] sm:leading-[1.08]">
                Safety so clear,{' '}
                <span className="text-emerald-700">it disappears into your view.</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-xl tracking-apple-normal pt-2">
                Aura Grills engineers ultra-slim 2.0mm marine-grade SS-316 cables anchored into champagne-anodized 6063-T6 aluminum tracks—protecting children, pets, and panoramic skyline vistas across high-rises in Bengaluru.
              </p>
            </div>

            {/* Apple Hardware Spec Cards (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-xl">
              {specs.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.value}
                    className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/80 border border-black/5 hover:border-emerald-500/30 hover:bg-white hover:shadow-apple-card transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-1.5 text-zinc-950 font-bold text-sm sm:text-base tracking-apple-tight">
                      <IconComponent className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{item.value}</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-zinc-500 font-normal pt-0.5 tracking-apple-normal">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apple Clean CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
              <button
                type="button"
                onClick={handleSurveyClick}
                className="px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs sm:text-sm tracking-apple-tight transition-all duration-300 shadow-apple-card hover:shadow-apple-hover flex items-center justify-center gap-2 active:scale-95 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-zinc-300" />
                <span>Book Free Doorstep Laser Survey</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="tel:+918523068882"
                className="px-5 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200/80 font-semibold text-xs sm:text-sm tracking-apple-tight transition-all duration-200 shadow-xs flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call 85230 68882</span>
              </a>
            </div>

            {/* Micro reassurance line */}
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Same-day van dispatch in Whitefield, JP Nagar, HSR &amp; Electronic City</span>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: CINEMATIC SHOWCASE (Col 7-12)
              Framed architectural showcase card with aspect-[4/5] md:aspect-[16/10]
              HTML5 <picture> tag with dual desktop/mobile folder support
              ========================================================================= */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[28px] overflow-hidden border border-black/8 shadow-apple-card hover:shadow-apple-hover transition-all duration-700 bg-zinc-950 group">
              
              {/* HTML5 <picture> tag with responsive WebP sources */}
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
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

              {/* Top-Left Floating Spec Chip */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-[11px] font-semibold tracking-apple-tight uppercase shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>RWA Approved • Prestige, Sobha &amp; Brigade Grade</span>
                </div>
              </div>

              {/* Bottom Floating Glass Capsule Bar */}
              <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-20">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/12 shadow-apple-float flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  {/* Left Specs */}
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium tracking-apple-normal text-zinc-100">
                      2.0mm Virgin SS-316 • 50mm Toddler-Safe Pitch
                    </span>
                  </div>

                  {/* Right WhatsApp Action */}
                  <a
                    href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20a%20free%20laser%20survey%20and%20quote%20for%20balcony%20invisible%20safety%20grills."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 shrink-0 shadow-xs"
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
