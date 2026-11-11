import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Layers, 
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

const SERVICES_DATA = [
  {
    id: 'invisible-grills',
    category: 'Invisible Grills',
    filename: 'service-invisible-grill',
    title: 'Balcony Invisible Safety Grills',
    materialBadge: 'AEROSPACE GRADE SS-316',
    fallbackDesktop: '/images/services/ig-lakeview-hero.jpg',
    fallbackMobile: '/images/services/ig-lakeview-hero.jpg',
    description: 'High-tensile 2.0mm marine cables engineered for modern high-rises. Certified 400kg tensile load with zero skyline view loss.',
    specs: [
      '400kg breaking load per cable',
      'Champagne 6063-T6 aluminum track',
      '10-year rustproof replacement bond'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for SS-316 Invisible Safety Grills for my balcony in Bangalore.'
  },
  {
    id: 'cloth-hangers',
    category: 'Ceiling Cloth Hangers',
    filename: 'service-cloth-hanger',
    title: 'Ceiling Cloth Drying Hangers',
    materialBadge: 'STAINLESS STEEL 304',
    fallbackDesktop: '/images/services/cloth-hanger.jpg',
    fallbackMobile: '/images/services/cloth-hanger.jpg',
    description: 'Dual pulley ceiling-suspended stainless steel pipes with individual lowering mechanism. Frees 100% balcony floor space.',
    specs: [
      '6 or 8 individual lowering rods',
      'Heavy-duty nylon & brass pulleys',
      'Frees 100% balcony floor area'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Ceiling Cloth Drying Hangers for my balcony in Bangalore.'
  },
  {
    id: 'pigeon-nets',
    category: 'Safety & Bird Nets',
    filename: 'service-pigeon-net',
    title: 'Pigeon & Balcony Safety Nets',
    materialBadge: 'UV-STABILIZED MONOFILAMENT',
    fallbackDesktop: '/images/services/pigeon-safety-net.jpg',
    fallbackMobile: '/images/services/pigeon-safety-net.jpg',
    description: 'Hospital-grade transparent monofilament netting that prevents pigeon nesting and child fall risks without darkening rooms.',
    specs: [
      '100% weatherproof & UV treated',
      'Stainless steel anchor fasteners',
      'Zero visual obstruction from 3m'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Pigeon & Balcony Safety Nets in Bangalore.'
  },
  {
    id: 'bird-spikes',
    category: 'Safety & Bird Nets',
    filename: 'service-bird-spikes',
    title: 'Stainless Steel Bird Spikes',
    materialBadge: 'VIRGIN POLYMER + SS-304',
    fallbackDesktop: '/images/services/bird-spikes.jpg',
    fallbackMobile: '/images/services/bird-spikes.jpg',
    description: 'Precision anti-roosting spikes for AC compressor outdoor units, window sills, and parapet ledges. Completely humane bird deterrence.',
    specs: [
      'SS-304 marine-grade blunt pins',
      'Flexible UV virgin polymer base',
      'Industrial weatherproof bonding'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Stainless Steel Bird Spikes in Bangalore.'
  },
  {
    id: 'french-window-grills',
    category: 'Invisible Grills',
    filename: 'service-window-grill',
    title: 'French Window Invisible Grills',
    materialBadge: 'SS-316 SLIM TRACK SYSTEM',
    fallbackDesktop: '/images/services/ig-french-window.jpg',
    fallbackMobile: '/images/services/ig-french-window.jpg',
    description: 'Flush-mounted invisible safety cabling for floor-to-ceiling French windows and sliding glass balcony doors. Preserves architectural aesthetics.',
    specs: [
      'Zero-drill option for UPVC frames',
      '10-second emergency fire release',
      'Precision concealed tension track'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for French Window Invisible Grills in Bangalore.'
  },
  {
    id: 'child-safety-shields',
    category: 'Invisible Grills',
    filename: 'service-child-safety',
    title: 'Toddler & Pet Balcony Shields',
    materialBadge: '50MM SAFETY PITCH',
    fallbackDesktop: '/images/services/invisible-grills-child-safe.jpg',
    fallbackMobile: '/images/services/invisible-grills-child-safe.jpg',
    description: 'Reinforced 50mm narrow pitch safety barrier preventing toddlers from slipping through or climbing railing balustrades. Maximum peace of mind.',
    specs: [
      '50mm zero-foothold pitch',
      'Soft virgin nylon transparent jacket',
      'Tested for severe child impacts'
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
    <section id="services" className="relative py-20 sm:py-28 bg-[#F5F5F7] border-t border-black/5 overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <span id="balcony-services" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            1. APPLE KEYNOTE SECTION HEADER & MINIMALIST FILTER TABS
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/5">
          
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-semibold text-zinc-800 shadow-xs tracking-apple-tight">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Architectural Safety Suite</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-apple-tighter text-zinc-950 leading-[1.12]">
              Every space. Every perspective.{' '}
              <span className="text-emerald-700">Protected.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed tracking-apple-normal">
              From high-tensile SS-316 balcony cabling to space-saving ceiling drying systems, engineered with architectural elegance.
            </p>
          </div>

          {/* Apple-style Segmented Filter Pill Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white border border-black/5 shadow-xs self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-apple-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-xs'
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
            2. APPLE PRODUCT CARDS GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-[28px] bg-white border border-black/6 shadow-apple-card hover:shadow-apple-hover transition-all duration-500 overflow-hidden flex flex-col text-left"
            >
              
              {/* Card Image Showcase with HTML5 <picture> */}
              <div className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-zinc-950">
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
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                    loading="lazy"
                  />
                </picture>

                {/* Subtle top & bottom vignette */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />

                {/* Top Material Grade Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold uppercase tracking-apple-tight text-white/95 border border-white/15 shadow-xs">
                    {service.materialBadge}
                  </span>
                </div>

                {/* Bottom Spec Preview */}
                <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
                  <span className="text-[11px] font-medium text-white/90 tracking-apple-normal drop-shadow-sm truncate block">
                    {service.specs[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-zinc-950 tracking-apple-tight leading-snug group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2 tracking-apple-normal">
                    {service.description}
                  </p>

                  {/* 3 Engineering Specifications */}
                  <ul className="space-y-1.5 pt-3 border-t border-black/5 text-xs text-zinc-700 font-medium">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apple-Style Conversion Actions */}
                <div className="pt-4 border-t border-black/5 flex items-center gap-2">
                  {/* Button 1: Survey / Booking */}
                  <button
                    type="button"
                    onClick={() => handleQuoteClick(service.title)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Free Survey</span>
                  </button>

                  {/* Button 2: WhatsApp Directly */}
                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95"
                    aria-label={`Chat directly on WhatsApp for ${service.title}`}
                    title="WhatsApp Quote"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Quote</span>
                  </a>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 transition active:scale-95 cursor-pointer"
                      title="Explore service details"
                      aria-label={`View details for ${service.title}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
