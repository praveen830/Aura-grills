import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Layers, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

const SERVICES_DATA = [
  {
    id: 'invisible-grills',
    routeId: 'invisible-grills',
    category: 'Invisible Grills',
    filename: 'service-invisible-grill',
    title: 'Balcony Invisible Safety Grills',
    subtitle: 'High-Tensile Marine Architecture',
    materialBadge: 'AEROSPACE GRADE SS-316',
    fallbackDesktop: '/images/services/ig-lakeview-hero.jpg',
    fallbackMobile: '/images/services/ig-lakeview-hero.jpg',
    description: 'High-tensile 2.0mm marine cables engineered for modern Bengaluru high-rises. Certified 400kg tensile load with zero skyline view loss.',
    specs: [
      '400kg breaking load per cable strand',
      'Champagne 6063-T6 aluminum track',
      '10-year stamped rustproof replacement warranty'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for SS-316 Invisible Safety Grills for my balcony in Bangalore.'
  },
  {
    id: 'cloth-hangers',
    routeId: 'cloth-hangers',
    category: 'Ceiling Cloth Hangers',
    filename: 'service-cloth-hanger',
    title: 'Ceiling Cloth Drying Hangers',
    subtitle: 'Dual-Pulley Space Reclamation',
    materialBadge: 'STAINLESS STEEL 304',
    fallbackDesktop: '/images/services/cloth-hanger.jpg',
    fallbackMobile: '/images/services/cloth-hanger.jpg',
    description: 'Dual pulley ceiling-suspended stainless steel pipes with individual lowering mechanism. Frees 100% balcony floor space.',
    specs: [
      '6 or 8 individual lowering stainless steel rods',
      'Heavy-duty nylon & brass bearing pulleys',
      'Frees 100% usable balcony floor area'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Ceiling Cloth Drying Hangers for my balcony in Bangalore.'
  },
  {
    id: 'pigeon-nets',
    routeId: 'safety-nets',
    category: 'Safety & Bird Nets',
    filename: 'service-pigeon-net',
    title: 'Pigeon & Balcony Safety Nets',
    subtitle: 'Hospital-Grade Monofilament',
    materialBadge: 'UV-STABILIZED MONOFILAMENT',
    fallbackDesktop: '/images/services/pigeon-safety-net.jpg',
    fallbackMobile: '/images/services/pigeon-safety-net.jpg',
    description: 'Hospital-grade transparent monofilament netting that prevents pigeon nesting and child fall risks without darkening interior rooms.',
    specs: [
      '100% weatherproof & UV-resistant monofilament',
      'SS-316 rust-free anchor fasteners',
      'Virtually invisible from 3 meters'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Pigeon & Balcony Safety Nets in Bangalore.'
  },
  {
    id: 'bird-spikes',
    routeId: 'bird-spikes',
    category: 'Safety & Bird Nets',
    filename: 'service-bird-spikes',
    title: 'Stainless Steel Bird Spikes',
    subtitle: 'Humane Roosting Deterrence',
    materialBadge: 'VIRGIN POLYMER + SS-304',
    fallbackDesktop: '/images/services/bird-spikes.jpg',
    fallbackMobile: '/images/services/bird-spikes.jpg',
    description: 'Precision anti-roosting spikes for AC compressor outdoor units, window sills, and parapet ledges. Completely humane bird deterrence.',
    specs: [
      'SS-304 marine-grade blunt deterrent pins',
      'Flexible UV-resistant virgin polymer base',
      'High-adhesion weatherproof structural bonding'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Stainless Steel Bird Spikes in Bangalore.'
  },
  {
    id: 'french-window-grills',
    routeId: 'french-window-protection',
    category: 'Invisible Grills',
    filename: 'service-window-grill',
    title: 'French Window Invisible Grills',
    subtitle: 'Slim Architectural Track System',
    materialBadge: 'SS-316 SLIM TRACK SYSTEM',
    fallbackDesktop: '/images/services/ig-french-window.jpg',
    fallbackMobile: '/images/services/ig-french-window.jpg',
    description: 'Flush-mounted invisible safety cabling for floor-to-ceiling French windows and sliding glass balcony doors. Preserves architectural aesthetics.',
    specs: [
      'Zero-drill option for delicate UPVC frames',
      '10-second emergency rescue fire release',
      'Precision concealed tension track'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for French Window Invisible Grills in Bangalore.'
  },
  {
    id: 'child-safety-shields',
    routeId: 'toddler-balcony-shields',
    category: 'Invisible Grills',
    filename: 'service-child-safety',
    title: 'Toddler & Pet Balcony Shields',
    subtitle: 'Zero-Foothold High-Rise Security',
    materialBadge: '50MM SAFETY PITCH',
    fallbackDesktop: '/images/services/invisible-grills-child-safe.jpg',
    fallbackMobile: '/images/services/invisible-grills-child-safe.jpg',
    description: 'Reinforced 50mm narrow pitch safety barrier preventing toddlers from slipping through or climbing railing balustrades. Maximum peace of mind.',
    specs: [
      'Strict 50mm zero-foothold laser pitch',
      'Soft virgin nylon transparent protective jacket',
      'Tested against extreme child impact forces'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Toddler & Pet Balcony Shields in Bangalore.'
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Solutions (6)' },
  { id: 'Invisible Grills', label: 'Invisible Grills' },
  { id: 'Ceiling Cloth Hangers', label: 'Ceiling Hangers' },
  { id: 'Safety & Bird Nets', label: 'Safety & Bird Nets' }
];

export default function ServicesSection({ onOpenBooking, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  const handleServiceNavigate = (service) => {
    if (onSelectService) {
      onSelectService(service.routeId || service.id);
    }
  };

  const handleQuoteClick = (serviceTitle) => {
    if (onOpenBooking) {
      onOpenBooking(serviceTitle);
      return;
    }
    const formElement = document.getElementById('contact') || document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-32 bg-[#F5F5F7] overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <span id="balcony-services" className="sr-only" />

      {/* Ambient soft glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[450px] bg-white/60 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            1. APPLE KEYNOTE SECTION HEADER & MINIMALIST FILTER TABS
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200/80">
          
          <div className="space-y-3.5 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-apple-sm text-[11px] font-semibold text-zinc-700 tracking-apple-tight">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span className="uppercase tracking-wider">Explore the Lineup</span>
            </div>

            <h2 className="text-apple-section font-semibold tracking-apple-tight text-zinc-950 leading-[1.08]">
              Which safety system is right{' '}
              <span className="text-gradient-apple-dark block sm:inline">for your home?</span>
            </h2>

            <p className="text-apple-subhead text-zinc-600 font-normal leading-relaxed">
              From aerospace-grade SS-316 balcony cabling to space-saving ceiling drying systems, engineered with architectural quiet luxury.
            </p>
          </div>

          {/* Apple-style Segmented Filter Pill Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/80 backdrop-blur-md shadow-apple-sm border border-black/5 self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-apple-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-apple-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* =========================================================================
            2. APPLE PRODUCT CARDS GRID (WITH BUTTER-SMOOTH HOVER & CLICKABLE VISUALS)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-[28px] apple-card-surface hover:shadow-apple-hover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 overflow-hidden flex flex-col text-left"
            >
              
              {/* Card Image Showcase with Butter-Smooth Hover Animation & Click-to-Navigate */}
              <div 
                onClick={() => handleServiceNavigate(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceNavigate(service);
                  }
                }}
                aria-label={`Explore architectural details for ${service.title}`}
                className="relative w-full aspect-[16/11] overflow-hidden bg-zinc-950 cursor-pointer select-none"
              >
                <picture className="block w-full h-full">
                  <source 
                    media="(min-width: 768px)" 
                    srcSet={`/images/desktop/${service.filename}.webp`} 
                  />
                  <img
                    src={`/images/mobile/${service.filename}.webp`}
                    data-fallback-desktop={service.fallbackDesktop}
                    data-fallback-mobile={service.fallbackMobile}
                    onError={handleImgError}
                    alt={`${service.title} - Aura Grills Bangalore`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                    loading="lazy"
                  />
                </picture>

                {/* Subtle top & bottom vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />

                {/* Top Material Grade Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-white/95 border border-white/15 shadow-apple-sm">
                    {service.materialBadge}
                  </span>
                </div>

                {/* Interactive Butter-Smooth Center Pill on Mouse Over */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-zinc-950 font-semibold text-xs tracking-apple-tight shadow-apple-float flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-800" />
                  </div>
                </div>

                {/* Bottom Subtitle Preview */}
                <div className="absolute bottom-3 left-3.5 right-3.5 z-10 pointer-events-none">
                  <span className="text-[11px] font-medium text-white/90 drop-shadow-sm truncate block tracking-apple-tight">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                    {service.category}
                  </div>

                  <h3 
                    onClick={() => handleServiceNavigate(service)}
                    className="text-xl font-semibold text-zinc-950 tracking-apple-tight leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* 3 Engineering Specifications */}
                  <ul className="space-y-2 pt-3 border-t border-zinc-100 text-xs sm:text-[13px] text-zinc-700 font-medium">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apple-Style Conversion Actions */}
                <div className="pt-5 border-t border-zinc-100 flex items-center gap-2">
                  {/* Button 1: Survey / Booking */}
                  <button
                    type="button"
                    onClick={() => handleQuoteClick(service.title)}
                    className="flex-1 py-2.5 px-3.5 rounded-full bg-zinc-950 hover:bg-black text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 transition-all duration-300 shadow-apple-sm active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Free Survey</span>
                  </button>

                  {/* Button 2: WhatsApp Directly */}
                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 transition-all duration-300 shadow-apple-sm active:scale-95"
                    aria-label={`Chat directly on WhatsApp for ${service.title}`}
                    title="WhatsApp Quote"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Quote</span>
                  </a>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => handleServiceNavigate(service)}
                      className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 transition-all duration-300 active:scale-95 cursor-pointer"
                      title="Explore architectural details"
                      aria-label={`View architectural details for ${service.title}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Apple Store Footnote Guarantee */}
        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto">
            All systems installed with laser-guided alignment, backed by our 10-year stamped replacement guarantee.
          </p>
        </div>

      </div>
    </section>
  );
}
