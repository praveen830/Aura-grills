import React, { useState, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { handleResponsiveImgError } from '../utils/imageHandler';
import { gtag_report_conversion } from '../utils/gtag';

const PROJECTS_DATA = [
  {
    id: 'whitefield',
    zone: 'Whitefield',
    society: 'Prestige Shantiniketan',
    location: 'Whitefield Main Road, Bengaluru',
    floor: '18th Floor Horizon Balcony',
    system: 'SS-316 Invisible Safety Grills (Vertical)',
    area: '185 Sq.Ft',
    time: '4.5 Hours Total Installation',
    filename: 'project-whitefield',
    fallbackDesktop: '/images/whitefield-real-balcony.jpg',
    fallbackMobile: '/images/whitefield-real-balcony.jpg',
    specs: ['Child & Toddler Lock', '100% Horizon View', 'Zero Pigeon Nesting'],
    whatsappMsg: 'Hello Aura Grills! I saw the Prestige Shantiniketan Whitefield installation and would like a quote for my apartment.'
  },
  {
    id: 'sarjapur',
    zone: 'Sarjapur & ORR',
    society: 'Sobha Dream Acres',
    location: 'Panathur / Balagere, Sarjapur Outer Ring Road',
    floor: '14th Floor High-Rise Balcony',
    system: 'SS-316 Grills + Pigeon Deterrence Shield',
    area: '160 Sq.Ft',
    time: '4.0 Hours Total Installation',
    filename: 'project-sarjapur',
    fallbackDesktop: '/images/sarjapur-balcony.jpg',
    fallbackMobile: '/images/sarjapur-balcony.jpg',
    specs: ['2.0mm High-Tensile Wire', 'Pre-Anodized Tracks', '10-Yr Guarantee'],
    whatsappMsg: 'Hello Aura Grills! I saw the Sobha Dream Acres Sarjapur installation and would like a quote for my balcony.'
  },
  {
    id: 'hsr',
    zone: 'HSR & Koramangala',
    society: 'Purva Vantage',
    location: 'HSR Layout Sector 2, Bengaluru',
    floor: '9th Floor Extended French Balcony',
    system: 'SS-316 Invisible Grills + SS-304 Cloth Hanger',
    area: '210 Sq.Ft',
    time: '5.5 Hours Total Installation',
    filename: 'project-hsr',
    fallbackDesktop: '/images/hsr-family-balcony.jpg',
    fallbackMobile: '/images/hsr-family-balcony.jpg',
    specs: ['Dual Balcony + Utility Combo', 'Ceiling Pulley System', 'Pet Safety Guard'],
    whatsappMsg: 'Hello Aura Grills! I saw the Purva Vantage HSR Layout installation and would like to schedule a survey.'
  },
  {
    id: 'hebbal',
    zone: 'Hebbal & North',
    society: 'Brigade Caladium',
    location: 'Hebbal Lakeview Corridor, Bengaluru',
    floor: '22nd Floor Penthouse Deck',
    system: 'Aerospace SS-316 Full-Height Horizon Cable',
    area: '240 Sq.Ft',
    time: '6.0 Hours Total Installation',
    filename: 'project-hebbal',
    fallbackDesktop: '/images/hebbal-balcony.jpg',
    fallbackMobile: '/images/hebbal-balcony.jpg',
    specs: ['Wind Shear Resistant', '400kg Breaking Load', 'Emergency Snip Wire'],
    whatsappMsg: 'Hello Aura Grills! I saw the Brigade Caladium Hebbal installation and would like a quote for my penthouse balcony.'
  },
  {
    id: 'ecity',
    zone: 'Electronic City',
    society: 'Godrej E-City',
    location: 'Electronic City Phase 1, Bengaluru',
    floor: '11th Floor Child-Safe Balcony',
    system: '50mm Child & Pet Safety Invisible Shield',
    area: '145 Sq.Ft',
    time: '3.5 Hours Total Installation',
    filename: 'project-ecity',
    fallbackDesktop: '/images/ecity-balcony.jpg',
    fallbackMobile: '/images/ecity-balcony.jpg',
    specs: ['50mm Narrow Pitch Gap', 'Virgin Nylon Coating', 'Laser-Aligned Track'],
    whatsappMsg: 'Hello Aura Grills! I saw the Godrej E-City installation and would like a free laser measurement.'
  },
  {
    id: 'southblr',
    zone: 'South BLR',
    society: 'Brigade Millennium',
    location: 'JP Nagar 7th Phase, Bengaluru South',
    floor: '12th Floor Master Balcony & Utility',
    system: 'SS-316 Marine Grills + Transparent Bird Net',
    area: '175 Sq.Ft',
    time: '4.0 Hours Total Installation',
    filename: 'project-southblr',
    fallbackDesktop: '/images/jpnagar-balcony.jpg',
    fallbackMobile: '/images/jpnagar-balcony.jpg',
    specs: ['Dual Balcony Protection', 'Rustproof Anchor Screws', 'Society Approved'],
    whatsappMsg: 'Hello Aura Grills! I saw the Brigade Millennium JP Nagar installation and would like a quote for my apartment.'
  }
];

const ZONE_FILTERS = [
  { id: 'all', label: 'All Bengaluru (6)' },
  { id: 'Whitefield', label: 'Whitefield' },
  { id: 'Sarjapur & ORR', label: 'Sarjapur & ORR' },
  { id: 'HSR & Koramangala', label: 'HSR & Koramangala' },
  { id: 'Hebbal & North', label: 'Hebbal & North' },
  { id: 'Electronic City', label: 'Electronic City' },
  { id: 'South BLR', label: 'South BLR' }
];

export default function ProjectsSection({ onOpenBooking }) {
  const [activeZone, setActiveZone] = useState('all');
  const sliderRef = useRef(null);

  const filteredProjects = activeZone === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.zone === activeZone);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.85;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleImgError = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  const handleBookClick = (societyName) => {
    if (onOpenBooking) {
      onOpenBooking(`Installation Survey for ${societyName}`);
      return;
    }
    const form = document.getElementById('bangalore-dashboard') || document.querySelector('form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* =========================================================================
            1. SECTION HEADER WITH ZONE FILTERS & SLIDER CONTROLS
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-zinc-200/90 text-left">
          
          <div className="space-y-2 max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-[11px] font-black text-emerald-800 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>03 • VERIFIED BENGALURU INSTALLATIONS LOOKBOOK</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Real High-Rise Balcony Transformations Across Bengaluru
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              Over 850+ premium apartments secured in Prestige, Sobha, Brigade, Godrej &amp; Purva communities with zero skyline view obstruction.
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="hidden sm:flex items-center gap-2 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 transition shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 transition shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Zone Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-left">
          {ZONE_FILTERS.map((filter) => {
            const isActive = activeZone === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveZone(filter.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white shadow-md'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 border border-zinc-200/80'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            2. HORIZONTAL TOUCH-AND-BUTTON SLIDING LOOKBOOK CAROUSEL
            ========================================================================= */}
        <div 
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[86vw] sm:w-[380px] md:w-[420px] shrink-0 snap-center rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col text-left group"
            >
              
              {/* Picture Element with Dual Desktop/Mobile Folder Support */}
              <div className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-zinc-950">
                <picture className="block w-full h-full">
                  <source 
                    media="(min-width: 768px)" 
                    srcSet={`/images/desktop/${project.filename}.webp`} 
                  />
                  <img
                    src={`/images/mobile/${project.filename}.webp`}
                    data-fallback-desktop={project.fallbackDesktop}
                    data-fallback-mobile={project.fallbackMobile}
                    onError={handleImgError}
                    alt={`${project.society} Invisible Grills Installation Bengaluru`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </picture>

                {/* Subtle top & bottom vignette */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Top-Left Zone Pill */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-400 border border-emerald-400/30 shadow-md flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{project.zone}</span>
                  </span>
                </div>

                {/* Bottom-Right Verified Badge */}
                <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600/95 backdrop-blur-md text-[10px] font-black tracking-wider uppercase text-white border border-emerald-400/40 shadow-lg flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>RWA Verified</span>
                  </span>
                </div>

                {/* Bottom-Left Floor Tag */}
                <div className="absolute bottom-3 left-3 z-10 pointer-events-none text-white">
                  <div className="text-[11px] sm:text-xs font-bold text-zinc-200 drop-shadow">
                    {project.floor}
                  </div>
                </div>

              </div>

              {/* Card Body: Project Specs & Telemetry */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                      {project.society}
                    </h3>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 pt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{project.location}</span>
                    </p>
                  </div>

                  {/* 4-Item Telemetry Matrix */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100 text-xs">
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">System</div>
                      <div className="text-[11px] font-black text-zinc-900 pt-0.5 truncate">{project.system}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Measured Area</div>
                      <div className="text-[11px] font-black text-emerald-700 pt-0.5">{project.area}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Installation Time</div>
                      <div className="text-[11px] font-black text-zinc-900 pt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        <span>{project.time}</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">RWA Compliance</div>
                      <div className="text-[11px] font-black text-emerald-700 pt-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>100% Approved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-zinc-100 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleBookClick(project.society)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-100" />
                    <span>Book Similar Survey</span>
                  </button>

                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(project.whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => gtag_report_conversion()}
                    className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center justify-center gap-1.5 transition shadow-xs active:scale-95 shrink-0"
                    aria-label={`WhatsApp query for ${project.society}`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Micro reassurance under slider */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pt-1 border-t border-zinc-100">
          <span>*Swipe horizontally on mobile to view all Bengaluru high-rise balcony projects</span>
          <span className="font-bold text-emerald-700 hidden sm:inline-block">850+ Completed Installations Across 14 Zones</span>
        </div>

      </div>
    </section>
  );
}
