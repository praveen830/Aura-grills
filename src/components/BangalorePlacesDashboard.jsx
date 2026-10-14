import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  Building, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Flame,
  Sun,
  HardHat,
  Layers,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstallationSafetyProcess from './InstallationSafetyProcess';
import { BANGALORE_PLACES } from '../data/bangaloreHubsData';
import { AURAB_SERVICES } from '../data/aurabServicesData';
import AurabServiceDetailView from './AurabServiceDetailView';

export default function BangalorePlacesDashboard({ 
  selectedPlaceId, 
  onSelectPlace, 
  selectedServiceId,
  onSelectService,
  onBackToDashboard,
  onOpenBooking 
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const isScrollingByCodeRef = useRef(false);

  const selectedPlace = BANGALORE_PLACES.find((p) => p.id === selectedPlaceId);
  const selectedService = AURAB_SERVICES.find((s) => s.id === selectedServiceId);

  const handleOpenPlace = (placeId) => {
    if (onSelectService) onSelectService(null);
    onSelectPlace(placeId);
    setActiveSlide(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenService = (serviceId) => {
    onSelectPlace(null);
    if (onSelectService) onSelectService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4 Core Problem & Solution items: 1-2 lines of clear text, NO buttons inside
  const problemSolutionsList = [
    {
      id: 1,
      title: "Toddler & Child Balcony Safety",
      badge: "100% Child Safe",
      icon: ShieldCheck,
      text: "2-inch high-tensile SS-316 cables prevent toddlers and pets from slipping through open balcony balustrades with zero climbing footholds.",
      image: "/images/toddler-safe.jpg"
    },
    {
      id: 2,
      title: "Permanent Pigeon & Bird Shield",
      badge: "Zero Pigeon Nesting",
      icon: Sparkles,
      text: "50mm vertical steel cables physically block pigeons from landing or nesting, keeping your balcony spotless without ugly green nets.",
      image: "/images/pigeon-free.jpg"
    },
    {
      id: 3,
      title: "10-Second Emergency Fire Rescue",
      badge: "Fire Egress Certified",
      icon: Flame,
      text: "Unbreakable against human force, yet cuts open in under 10 seconds with rescue wire-cutters so fire teams have instant balcony access.",
      image: "/images/technicians-installing-real.jpg"
    },
    {
      id: 4,
      title: "100% Natural Light & Horizon View",
      badge: "Zero View Loss",
      icon: Sun,
      text: "Virtually invisible from 5 meters away, preserving 100% natural sunlight, cross-ventilation, and uninterrupted panoramic skyline views.",
      image: "/images/luxury-family-balcony-sunset.jpg"
    }
  ];

  // Smooth horizontal scroll ONLY within the slider container - NEVER causes page vertical jumping!
  const scrollToSlide = (index) => {
    if (!sliderRef.current || problemSolutionsList.length === 0) return;
    const container = sliderRef.current;
    const clampedIndex = Math.max(0, Math.min(index, problemSolutionsList.length - 1));
    const child = container.children[clampedIndex];
    if (child) {
      isScrollingByCodeRef.current = true;
      setActiveSlide(clampedIndex);
      const targetLeft = child.offsetLeft - container.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
      setTimeout(() => {
        isScrollingByCodeRef.current = false;
      }, 450);
    }
  };

  const nextSlide = () => {
    if (problemSolutionsList.length === 0) return;
    const nextIdx = (activeSlide + 1) % problemSolutionsList.length;
    scrollToSlide(nextIdx);
  };

  const prevSlide = () => {
    if (problemSolutionsList.length === 0) return;
    const prevIdx = (activeSlide - 1 + problemSolutionsList.length) % problemSolutionsList.length;
    scrollToSlide(prevIdx);
  };

  // Passive horizontal scroll listener to sync active dot indicator as user swipes
  const handleSliderScroll = () => {
    if (isScrollingByCodeRef.current || !sliderRef.current || problemSolutionsList.length === 0) return;
    const container = sliderRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft - container.offsetLeft + child.clientWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeSlide) {
      setActiveSlide(closestIdx);
    }
  };

  // Auto-slide effect for Problem & Solutions carousel in Place View
  useEffect(() => {
    if (!selectedPlaceId || !sliderRef.current || problemSolutionsList.length === 0) return;
    const container = sliderRef.current;
    
    const interval = setInterval(() => {
      if (!container) return;
      const cardWidth = container.firstElementChild?.clientWidth || 280;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 14, behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [selectedPlaceId, problemSolutionsList.length]);

  // Display all project installations directly for this place
  const displayedProjects = selectedPlace ? selectedPlace.projects : [];

  // =========================================================================
  // STATE 0: DEDICATED SERVICE PAGE VIEW (Invisible Grills, Cloth Hangers, Safety Nets, Spikes)
  // =========================================================================
  if (selectedService) {
    return (
      <section id="bangalore-dashboard" className="w-full pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AurabServiceDetailView 
            service={selectedService}
            onBackToDashboard={onBackToDashboard}
            onOpenBooking={onOpenBooking}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="bangalore-dashboard" className="w-full pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* =========================================================================
            STATE 1: MAIN DASHBOARD VIEW
            Sequence:
            1. The 6 Main Bangalore Places (JP Nagar, Whitefield, KR Puram, Hennur, RR Nagar, E-City)
            2. The 4 Core Architectural Services (Invisible Grills, Cloth Hangers, Safety Nets, Bird Spikes)
            All cards are clean with full image, badge & title. NO action buttons on dashboard cards.
            ========================================================================= */}
        {!selectedPlace ? (
          <div className="space-y-8 sm:space-y-12 pt-2">
            
            {/* The 6 Main Places in Tall Reels Cards - Clean Full 9:16 Image with Place Name */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {BANGALORE_PLACES.map((place) => (
                  <div
                    key={place.id}
                    onClick={() => handleOpenPlace(place.id)}
                    className="group relative aspect-[9/16] sm:aspect-[9/14] w-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-950 cursor-pointer hover:shadow-2xl hover:border-zinc-300 transition-all duration-300"
                  >
                    {/* Full image display in 9:16 Tall Reel Ratio */}
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />

                    {/* Bottom edge vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

                    {/* Clean Floating Place Label - ONLY Place Name, NO extra badges/buttons */}
                    <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-xs sm:text-sm font-black tracking-wide uppercase text-white border border-white/20 shadow-md">
                        {place.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================================================================
                SECTION: 4 CORE ARCHITECTURAL BALCONY SERVICES
                1. Invisible Grills
                2. Cloth Drying Hangers
                3. Pigeon & Safety Nets
                4. Bird Spikes
                Clicking opens dedicated page featuring 6 varieties, problem/solutions, process & booking
                ========================================================================= */}
            <div className="pt-2 sm:pt-4 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Aurab Balcony Architectural Systems</span>
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight mt-2">
                    4 Core Balcony Safety & Utility Services
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Click any service to view 6 specialized varieties, problem & solution carousel, installation protocol & direct booking.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
                  Bangalore Certified
                </span>
              </div>

              {/* 4 Services Grid in Uniform 4:5 Ratio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {AURAB_SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => handleOpenService(srv.id)}
                    className="group relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-950 cursor-pointer hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300"
                  >
                    {/* Full Bleed Realistic Service Image */}
                    <img
                      src={srv.image}
                      alt={srv.displayName}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-emerald-400 border border-white/20 shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>{srv.badge}</span>
                      </span>
                    </div>

                    {/* Bottom Vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

                    {/* Service Name & Callout at Bottom (NO action buttons on dashboard cards, keeping them ultra clean) */}
                    <div className="absolute bottom-4 inset-x-4 z-10 pointer-events-none flex flex-col gap-1.5">
                      <span className="px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-xs sm:text-sm font-black tracking-wide uppercase text-white border border-white/20 shadow-md inline-block w-fit">
                        {srv.name}
                      </span>
                      <p className="text-[11px] text-zinc-300 line-clamp-1 font-medium pl-1">
                        {srv.tagline}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 pl-1 pt-0.5">
                        <span>Tap to view 6 varieties</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* =========================================================================
             STATE 2: DEDICATED PLACE PAGE VIEW (e.g. JP Nagar, Whitefield, etc.)
             Sequence:
             1. Area Switcher Pills
             2. The 3 Action Buttons (Call, WhatsApp, Free Visit) ABOVE the image
             3. Main Place Banner: 4:5 Aspect Ratio with ALL people fully covered
             4. Problems & Solutions (FIRST!) in Multi-Card Sliding Carousel (1-2 lines, NO buttons)
             5. Sub-Places Filter
             6. Our Project Installations in that area
             ========================================================================= */
          <div className="space-y-5 sm:space-y-6 animate-fadeIn pt-2">
            
            {/* Clean Back Navigation to All Areas (Area switcher pills removed as requested) */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
              <button
                onClick={onBackToDashboard}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-700 hover:text-emerald-600 transition cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-emerald-600" />
                <span>All Bangalore Areas</span>
              </button>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {selectedPlace.name} Corridor
              </span>
            </div>

            {/* 1. Main Place Banner: 4:5 Aspect Ratio with Action Buttons directly ON the bottom border inside the image */}
            <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-950">
              {/* Full Bleed 4:5 Photo */}
              <img
                src={selectedPlace.image}
                alt={`${selectedPlace.name} Balcony Invisible Grills`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Place Name Badge at Top */}
              <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/20 shadow-lg">
                  {selectedPlace.id === 'kr-puram' || selectedPlace.id === 'hennur'
                    ? `${selectedPlace.name} • CERTIFIED HARNESS INSTALLATION`
                    : `${selectedPlace.name} • 100% FAMILY SAFE BALCONY`}
                </span>
              </div>

              {/* Action Buttons directly ON top of the bottom border inside the 4:5 image */}
              <div className="absolute inset-x-0 bottom-0 pt-16 pb-3.5 px-3 sm:px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-20">
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  {/* Button 1: Call */}
                  <a
                    href="tel:+918523068882"
                    className="py-3 px-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 border border-white/20 shadow-lg text-center backdrop-blur-md active:scale-95"
                    title="Call"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Call</span>
                  </a>

                  {/* Button 2: WhatsApp */}
                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(
                      `Hello Aurab Grills! I am from ${selectedPlace.name} and want to inquire about balcony invisible grills.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 shadow-lg text-center backdrop-blur-md active:scale-95"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Button 3: Free Visit Survey */}
                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="py-3 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black transition flex items-center justify-center gap-1 shadow-lg cursor-pointer text-center active:scale-95"
                    title="Free Visit"
                  >
                    <Calendar className="w-4 h-4 text-white shrink-0" />
                    <span className="truncate">Free Visit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. FIRST: Problems & Solutions in SLIDING CAROUSEL (1-2 lines text, NO inside buttons) */}
            <div 
              className="space-y-3 pt-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Header with Navigation Arrows and Slide Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                    Why Invisible Grills in {selectedPlace.name}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Automatic live showcase • Swipe cards freely
                  </p>
                </div>
              </div>

              {/* Multi-Card Horizontal Sliding Track - Smooth auto-slide, completely free vertical scrolling */}
              <div
                ref={sliderRef}
                onScroll={handleSliderScroll}
                className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 pt-1"
              >
                {problemSolutionsList.map((item, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => scrollToSlide(idx)}
                      className={`snap-center shrink-0 w-[78vw] sm:w-[300px] lg:w-[320px] rounded-3xl border transition-all duration-300 bg-white p-3 shadow-md flex flex-col justify-between cursor-pointer select-none ${
                        isActive
                          ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-lg'
                          : 'border-zinc-200 hover:border-zinc-300 opacity-95'
                      }`}
                    >
                      {/* Photo in EXACT Uniform 4:5 Aspect Ratio */}
                      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 border border-white/20 tracking-wider shadow-md">
                          {item.badge}
                        </span>
                      </div>

                      {/* Concise 1-2 Lines Text, NO inside buttons */}
                      <div className="pt-3 pb-1 space-y-1.5">
                        <h4 className="text-sm sm:text-base font-black text-zinc-950 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sliding Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {problemSolutionsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSlide(idx)}
                    type="button"
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-emerald-600' : 'w-2 bg-zinc-300'
                    }`}
                    aria-label={`Slide to card ${idx + 1}`}
                  />
                ))}
              </div>
            </div>



            {/* 4. Project Installations in This Place (Positioned Below Problems & Solutions) */}
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  Project Installations in {selectedPlace.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  Real high-rise balcony photography from completed apartments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-3xl border border-zinc-200 bg-white overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-zinc-300 transition shadow-xs"
                  >
                    <div>
                      {/* Project Real Balcony Photo in 4:5 Aspect Ratio */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                          {project.elevation}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-5 space-y-2">
                        <h4 className="text-base font-black text-zinc-950 flex items-center gap-1.5">
                          <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{project.name}</span>
                        </h4>
                        <p className="text-xs text-zinc-500">
                          📍 {project.location}
                        </p>
                        <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 grid grid-cols-3 gap-2">
                      {/* Call Button */}
                      <a
                        href="tel:+918523068882"
                        className="py-2.5 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
                        title="Call"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Call</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/918523068882?text=${encodeURIComponent(
                          `Hello Aurab Grills! I am interested in balcony invisible grills like ${project.name} in ${selectedPlace.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
                        title="WhatsApp"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>WhatsApp</span>
                      </a>

                      {/* Free Visit Button */}
                      <button
                        onClick={onOpenBooking}
                        type="button"
                        className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center justify-center gap-1 shadow-xs cursor-pointer text-center active:scale-95"
                        title="Free Visit"
                      >
                        <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                        <span className="truncate">Free Visit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
