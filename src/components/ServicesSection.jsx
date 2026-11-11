import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Phone
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';

const SERVICES_DATA = [
  {
    id: 'invisible-grills',
    category: 'Invisible Grills',
    filename: 'service-invisible-grill',
    title: 'Invisible Safety Grills (SS-316)',
    materialBadge: 'AEROSPACE GRADE SS-316',
    fallbackDesktop: '/images/services/ig-lakeview-hero.jpg',
    fallbackMobile: '/images/services/ig-lakeview-hero.jpg',
    description: 'High-tensile 2.0mm marine cables engineered for modern high-rises. Certified 400kg tensile load with zero skyline view loss.',
    specs: [
      '400kg Breaking Load per Wire',
      'Champagne 6063-T6 Aluminum Track',
      '10-Year Rustproof Replacement Bond'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for SS-316 Invisible Safety Grills for my balcony in Bangalore.'
  },
  {
    id: 'cloth-hangers',
    category: 'Ceiling Cloth Hangers',
    filename: 'service-cloth-hanger',
    title: 'Ceiling Cloth Drying Hangers',
    materialBadge: 'PURE STAINLESS STEEL 304',
    fallbackDesktop: '/images/services/cloth-hanger.jpg',
    fallbackMobile: '/images/services/cloth-hanger.jpg',
    description: 'Dual pulley ceiling-suspended stainless steel pipes with individual lowering mechanism. Frees 100% balcony floor space.',
    specs: [
      '6 or 8 Individual Lowering Rods',
      'Heavy-Duty Nylon & Brass Pulleys',
      'Zero Floor Clutter / 25kg Load per Pipe'
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
      '100% Weatherproof & UV Treated',
      'Stainless Steel Anchor Fasteners',
      'Zero Visual Obstruction from 3m'
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
      'SS-304 Marine Grade Blunt Pins',
      'Flexible UV Virgin Polymer Base',
      'Industrial Silicone & Screw Fixing'
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
      'Zero-Drill Option for UPVC Frames',
      'Emergency Fire Egress Quick-Snip',
      'Precision Tightening Tension System'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for French Window Invisible Grills in Bangalore.'
  },
  {
    id: 'child-safety-shields',
    category: 'Invisible Grills',
    filename: 'service-child-safety',
    title: 'Toddler & Pet Balcony Shields',
    materialBadge: 'CHILD-SAFE 50MM PITCH',
    fallbackDesktop: '/images/services/invisible-grills-child-safe.jpg',
    fallbackMobile: '/images/services/invisible-grills-child-safe.jpg',
    description: 'Reinforced 50mm narrow pitch safety barrier preventing toddlers from squeezing through or climbing railing balustrades. Maximum peace of mind.',
    specs: [
      '50mm Zero-Foothold Cable Pitch',
      'Soft Virgin Nylon Transparent Jacket',
      'Tested for Severe Toddler Impacts'
    ],
    whatsappText: 'Hello Aura Grills! I want to speak directly with an expert for Toddler & Pet Balcony Shields in Bangalore.'
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Services (6)' },
  { id: 'Invisible Grills', label: 'Invisible Grills' },
  { id: 'Ceiling Cloth Hangers', label: 'Ceiling Cloth Hangers' },
  { id: 'Safety & Bird Nets', label: 'Safety & Bird Nets' }
];

export default function ServicesSection({ onOpenBooking }) {
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
    const formElement = document.getElementById('bangalore-dashboard') || document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-zinc-50/70 border-t border-zinc-200/80">
      {/* Anchor alias for backwards compatibility */}
      <span id="balcony-services" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* =========================================================================
            1. SECTION HEADER & INTERACTIVE FILTER PILLS
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-200/90">
          
          <div className="space-y-2 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-[11px] font-black text-emerald-800 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>02 • MANA SERVICES (ARCHITECTURAL SAFETY SUITE)</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Complete Balcony &amp; Utility Protection Systems
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl font-medium">
              Aerospace SS-316 high-tensile invisible cables, pure SS-304 ceiling hangers, and hospital-grade bird safety solutions installed across Bengaluru.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-md'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/90'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* =========================================================================
            2. 6 SERVICE CARDS GRID (Dual Desktop/Mobile Picture WebP Support)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col text-left"
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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>

                {/* Subtle top & bottom shadow gradient */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />

                {/* Top Material Grade Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-400 border border-emerald-400/30 shadow-md">
                    {service.materialBadge}
                  </span>
                </div>

                {/* Bottom-Right Direct Call Badge */}
                <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md text-emerald-300 font-extrabold text-[11px] sm:text-xs tracking-tight border border-emerald-400/30 shadow-lg flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Talk Directly</span>
                  </div>
                </div>

              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* 3 Engineering Specification Checkmarks */}
                  <ul className="space-y-1.5 pt-2 border-t border-zinc-100 text-xs text-zinc-700 font-semibold">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2 Direct Customer Conversion Actions */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2.5">
                  {/* Button 1: Call Directly */}
                  <a
                    href="tel:+918523068882"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-black text-xs flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Directly</span>
                  </a>

                  {/* Button 2: WhatsApp Directly */}
                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95"
                    aria-label={`Chat directly on WhatsApp for ${service.title}`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
