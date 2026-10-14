import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Calendar, 
  Building, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Flame,
  Sun,
  HardHat
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstallationSafetyProcess from './InstallationSafetyProcess';
import { BANGALORE_PLACES } from '../data/bangaloreHubsData';

export default function BangalorePlacesDashboard({ 
  selectedPlaceId, 
  onSelectPlace, 
  onBackToDashboard,
  onOpenBooking 
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const touchStartXRef = useRef(null);

  const selectedPlace = BANGALORE_PLACES.find((p) => p.id === selectedPlaceId);

  const handleOpenPlace = (placeId) => {
    onSelectPlace(placeId);
    setActiveSlide(0);
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

  // Auto-slide effect every 4 seconds (pauses on hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % problemSolutionsList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, problemSolutionsList.length]);

  // Sync horizontal scroll container when activeSlide changes
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const child = container.children[activeSlide];
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSlide]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % problemSolutionsList.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + problemSolutionsList.length) % problemSolutionsList.length);
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  // Display all project installations directly for this place
  const displayedProjects = selectedPlace ? selectedPlace.projects : [];

  return (
    <section id="bangalore-dashboard" className="w-full pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* =========================================================================
            STATE 1: MAIN DASHBOARD VIEW
            9:16 tall vertical aspect ratio as requested for modern mobile reels style.
            ========================================================================= */}
        {!selectedPlace ? (
          <div className="space-y-4 pt-2">
            
            {/* The 6 Main Places in Tall Reels Cards with Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {BANGALORE_PLACES.map((place) => (
                <div
                  key={place.id}
                  className="rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-white flex flex-col justify-between hover:shadow-2xl hover:border-zinc-300 transition-all duration-300"
                >
                  {/* Realistic Balcony Photo in 9:16 vertical view */}
                  <div
                    onClick={() => handleOpenPlace(place.id)}
                    className="group relative aspect-[9/16] sm:aspect-[9/14] w-full overflow-hidden bg-zinc-950 cursor-pointer"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                      loading="eager"
                    />

                    {/* Status Pill Badge at Top */}
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      {place.id === 'kr-puram' || place.id === 'hennur' ? (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-700/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-white border border-white/20 shadow-md flex items-center gap-1">
                          <HardHat className="w-3 h-3 text-emerald-200" />
                          <span>Harness Installation</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-emerald-400 border border-white/20 shadow-md flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>100% Family Safe</span>
                        </span>
                      )}
                    </div>

                    {/* Minimal bottom edge vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

                    {/* Clean Floating Place Label & Details link */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs sm:text-sm font-black tracking-wide uppercase border border-white/20 shadow-md">
                        {place.name}
                      </span>
                      <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md flex items-center gap-1 text-[11px] font-bold text-white group-hover:bg-emerald-600 transition-colors shadow-md">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Direct Call, WhatsApp & Free Visit Buttons (NO numbers shown) */}
                  <div className="p-3 bg-white grid grid-cols-3 gap-2 border-t border-zinc-100">
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
                        `Hello Aura Grills! I am interested in invisible grills in ${place.name}.`
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

            {/* 1. Main Place Banner: 4:5 Aspect Ratio FULLY OCCUPIED - NO insert space, NO letterbox */}
            <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-950">
              {/* Full Bleed 4:5 Photo - 100% occupies frame with family & parents centered and fully visible */}
              <img
                src={selectedPlace.image}
                alt={`${selectedPlace.name} Balcony Invisible Grills`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Minimal bottom vignette overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

              {/* Place Name Badge on Banner */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 pointer-events-none flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/20 shadow-lg">
                  {selectedPlace.id === 'kr-puram' || selectedPlace.id === 'hennur'
                    ? `${selectedPlace.name} • CERTIFIED HARNESS INSTALLATION`
                    : `${selectedPlace.name} • 100% FAMILY SAFE BALCONY`}
                </span>
              </div>
            </div>

            {/* 2. The 3 Direct Action Buttons BELOW the 4:5 image (Call, WhatsApp, Free Visit) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-md mx-auto w-full">
              {/* Button 1: Call */}
              <a
                href="tel:+918523068882"
                className="py-3.5 px-2 sm:px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 sm:gap-2 border border-zinc-700 shadow-md text-center active:scale-98"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Call</span>
              </a>

              {/* Button 2: WhatsApp */}
              <a
                href={`https://wa.me/918523068882?text=${encodeURIComponent(
                  `Hello Aura Grills! I am from ${selectedPlace.name} and want to inquire about balcony invisible grills.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-2 sm:px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 sm:gap-2 shadow-md text-center active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Button 3: Free Visit Survey */}
              <button
                onClick={onOpenBooking}
                type="button"
                className="py-3.5 px-2 sm:px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 sm:gap-2 shadow-md cursor-pointer text-center active:scale-98"
              >
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span className="truncate">Free Visit</span>
              </button>
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
                    Slide cards to view key safety solutions
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-500 font-mono">
                    {activeSlide + 1} / {problemSolutionsList.length}
                  </span>
                  <button
                    onClick={prevSlide}
                    type="button"
                    className="p-1.5 sm:p-2 rounded-full border border-zinc-300 hover:bg-zinc-100 text-zinc-700 transition cursor-pointer active:scale-95"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    type="button"
                    className="p-1.5 sm:p-2 rounded-full border border-zinc-300 hover:bg-zinc-100 text-zinc-700 transition cursor-pointer active:scale-95"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Multi-Card Horizontal Sliding Track (Touch Swipe on Mobile) */}
              <div
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 pt-1"
              >
                {problemSolutionsList.map((item, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`snap-center shrink-0 w-[84vw] sm:w-[320px] lg:w-[360px] rounded-2xl border transition-all duration-300 bg-white p-3 shadow-xs flex flex-col justify-between cursor-pointer ${
                        isActive
                          ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                          : 'border-zinc-200 hover:border-zinc-300 opacity-90'
                      }`}
                    >
                      {/* Photo in 16:9 Widescreen Framing (Uncropped) */}
                      <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-zinc-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-black uppercase text-white tracking-wider">
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
                    onClick={() => setActiveSlide(idx)}
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
                      {/* Project Real Balcony Photo (16:10 aspect ratio) */}
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider">
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
                          `Hello Aura Grills! I am interested in balcony invisible grills like ${project.name} in ${selectedPlace.name}.`
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

            {/* 5. Our Installation Process, Safety Measurements & Materials (Before Footer) */}
            <InstallationSafetyProcess 
              onOpenBooking={onOpenBooking} 
              placeName={selectedPlace.name} 
            />

          </div>
        )}

      </div>
    </section>
  );
}
