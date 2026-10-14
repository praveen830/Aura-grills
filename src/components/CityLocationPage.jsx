import React from 'react';
import { Phone, MessageSquare, Calendar, MapPin, Building, Check, ArrowLeft, Star } from 'lucide-react';
import GrillVisualizer from './GrillVisualizer';

export default function CityLocationPage({ location, onBack, onOpenBooking }) {
  if (!location) return null;

  // 12-Card Horizontal Problem vs Solution Pairs (Exact reference structure)
  const problemSolutionCards = [
    {
      num: "01 • PROBLEM",
      isProblem: true,
      category: "CHILDREN SAFETY",
      tag: "⚠️ DANGER: ACCIDENTAL FALL RISK",
      title: "Children Fall Hazard",
      subtitle: "Low Railings & Unprotected Open Ledges",
      image: "/images/toddler-safe.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "02 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "CHILDREN SAFETY",
      tag: "🛡️ 100% TODDLER FALL PROTECTION",
      title: "Children Freedom & Safety",
      subtitle: 'High-Tensile SS-316 @ 2" Safe Gap',
      image: "/images/luxury-family-balcony-sunset.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "03 • PROBLEM",
      isProblem: true,
      category: "PIGEON MENACE",
      tag: "⚠️ UNHYGIENIC: DROPPINGS & BACTERIA",
      title: "Wild Pigeon Infestation",
      subtitle: "Foul Droppings, Mites & Feathers",
      image: "/images/pigeon-free.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "04 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "PIGEON MENACE",
      tag: "🛡️ 100% BIRD-FREE CLEAN HYGIENE",
      title: "Zero Pigeon Menace",
      subtitle: "Precision 50mm Structural Physical Barrier",
      image: "/images/pigeon-free.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "05 • PROBLEM",
      isProblem: true,
      category: "VIEW & AIRFLOW",
      tag: "⚠️ HAZARD: BLOCKED BREEZE & FIRE TRAP",
      title: "Traditional Heavy Iron Cage",
      subtitle: "Blocks 40% Daylight & Deadly Fire Trap",
      image: "/images/whitefield-real-balcony.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "06 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "VIEW & AIRFLOW",
      tag: "🛡️ 99% AIRFLOW & 1-MIN FIRE ESCAPE",
      title: "100% Open Air & Fire Safety",
      subtitle: "Unobstructed Panoramic Views",
      image: "/images/penthouse-panoramic-balcony.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "07 • PROBLEM",
      isProblem: true,
      category: "SENIOR CITIZENS",
      tag: "⚠️ ACROPHOBIA: FEAR OF HEIGHTS & VERTIGO",
      title: "Senior Balcony Vertigo & Fear of Heights",
      subtitle: "Dizziness at Balcony Edge & Fear of Falling",
      image: "/images/hebbal-balcony.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "08 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "SENIOR CITIZENS",
      tag: "🛡️ 100% PEACEFUL RETIREMENT & VERTIGO RELIEF",
      title: "Senior Comfort & Fall Protection",
      subtitle: "Floor-to-Ceiling SS-316 High-Tension Barrier",
      image: "/images/hsr-family-balcony.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "09 • PROBLEM",
      isProblem: true,
      category: "FIRE SAFETY & ESCAPE",
      tag: "🔥 CRITICAL: DEADLY MS GRILL FIRE TRAP",
      title: "Overheated MS Iron Grill Fire Trap",
      subtitle: "Welded Iron Cages Prevent Life-Saving Egress",
      image: "/images/french-window.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "10 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "FIRE SAFETY & ESCAPE",
      tag: "🧯 60-SEC EMERGENCY LIFE-SAVING EGRESS",
      title: "60-Second Fire Escape System",
      subtitle: "Instant Cable-Cut & Fire Brigade Ladder Evacuation",
      image: "/images/technicians-installing-real.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "11 • PROBLEM",
      isProblem: true,
      category: "PET SAFETY & FREEDOM",
      tag: "⚠️ DANGER: ACCIDENTAL PET FALL HAZARD",
      title: "Pet Balcony Fall Anxiety",
      subtitle: "Curious Cats & Dogs at Risk on Open Balconies",
      image: "/images/sarjapur-balcony.jpg",
      cta: `Solve in ${location.mainPlace.split(' ')[0]} →`
    },
    {
      num: "12 • Aurab Grills SOLUTION",
      isProblem: false,
      category: "PET SAFETY & FREEDOM",
      tag: "🐾 100% SECURE PET FREEDOM & RELAXATION",
      title: "Safe Pet Balcony Living",
      subtitle: "Relaxed Sunbathing & Unrestricted Peace of Mind",
      image: "/images/hsr-family-balcony.jpg",
      cta: `Protect in ${location.mainPlace.split(' ')[0]} →`
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* Top Breadcrumb & Return to Reel */}
      <div className="bg-slate-100 border-b border-slate-200 py-2 px-4 sm:px-8 text-xs flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-emerald-700 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Bangalore Reel</span>
        </button>

        <div className="flex items-center gap-2 text-slate-600">
          <span>Bangalore Hubs</span>
          <span>/</span>
          <strong className="text-emerald-700">{location.mainPlace}</strong>
        </div>
      </div>

      {/* ========================================================
          HERO SECTION (Exact Reference: Centered Image with action buttons inside)
         ======================================================== */}
      <section className="relative w-full bg-slate-50 py-6 sm:py-10 lg:py-12 border-b border-slate-200 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-400/10 blur-[120px] pointer-events-none rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl mx-auto w-full flex flex-col items-center">
            
            {/* Framed Image with Interactive GrillVisualizer and quick action buttons */}
            <div className="relative w-full rounded-3xl overflow-hidden border-2 border-emerald-500 bg-white shadow-2xl group">
              <GrillVisualizer
                imageSrc={location.coverImage}
                altText={`Aurab Grills Invisible Safety in ${location.mainPlace}`}
                locationName={location.mainPlace}
                completedProjects={location.completedProjects}
              />

              {/* Inset Action Buttons at bottom of image */}
              <div className="p-3 bg-slate-900 flex items-center justify-between gap-1.5 sm:gap-2.5 z-10 border-t border-slate-800">
                <a
                  href="tel:+918523068882"
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] sm:text-xs font-bold transition-all shadow-md text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Call Hotline</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] sm:text-xs font-bold transition-all shadow-md text-center cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="truncate">Free Visit</span>
                </button>

                <a
                  href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20interested%20in%20a%20site%20visit%20for%20${encodeURIComponent(location.mainPlace)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] sm:text-xs font-bold transition-all shadow-md text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* City Title & Description below Image */}
            <div className="mt-5 sm:mt-6 text-center w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-2.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Certified SS-316 Balcony Engineering</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                Invisible Safety Grills in <span className="text-emerald-600">{location.mainPlace}</span>
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Engineered SS-316 high-tensile balcony protection with 100% unblocked views, toddler safety, and 10-year anti-rust warranty across {location.mainPlace}.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          HORIZONTAL PROBLEM VS SOLUTION CAROUSEL (Exact Reference: 12 Cards)
         ======================================================== */}
      <section className="w-full bg-slate-50 py-14 px-4 sm:px-6 lg:px-8 text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Why Choose Invisible Grills?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why Install Invisible Grills?{' '}
              <span className="text-emerald-600">One Single Installation, Every Problem Solved.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              A single modern installation solves all your major balcony challenges at once — guaranteeing 100% toddler safety, eliminating pigeon mess, preventing iron rust, and giving you crystal-clear open views without that caged feeling.
            </p>
          </div>

          {/* 12 Horizontal Cards Carousel */}
          <div className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar select-none">
            {problemSolutionCards.map((card, i) => (
              <div
                key={i}
                className={`w-[260px] sm:w-[290px] md:w-[310px] shrink-0 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 bg-white border ${
                  card.isProblem
                    ? 'border-rose-200 hover:border-rose-400'
                    : 'border-emerald-200 hover:border-emerald-400'
                }`}
              >
                {/* Card Top Image */}
                <div className="relative h-[210px] sm:h-[230px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Header badges inside image */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider backdrop-blur-md border shadow-2xs bg-white/95 ${
                        card.isProblem
                          ? 'text-rose-700 border-rose-200'
                          : 'text-emerald-800 border-emerald-200'
                      }`}
                    >
                      {card.num}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider shadow-2xs text-white ${
                        card.isProblem ? 'bg-rose-600' : 'bg-emerald-600'
                      }`}
                    >
                      {card.isProblem ? 'PROBLEM' : 'SOLUTION'}
                    </span>
                  </div>

                  {/* Bottom tag inside image */}
                  <div className="absolute bottom-2 left-2 right-2 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold backdrop-blur-md border shadow-2xs truncate max-w-full ${
                        card.isProblem
                          ? 'bg-rose-950/90 text-rose-100 border-rose-400/40'
                          : 'bg-emerald-950/90 text-emerald-100 border-emerald-400/40'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          card.isProblem ? 'bg-rose-400 animate-pulse' : 'bg-emerald-400'
                        }`}
                      ></span>
                      <span className="truncate">{card.tag}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Button */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow text-left bg-white">
                  <div>
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                        card.isProblem ? 'text-rose-600' : 'text-emerald-700'
                      }`}
                    >
                      {card.category}
                    </span>
                    <h3
                      className={`text-base font-black tracking-tight leading-snug transition-colors text-slate-900 ${
                        card.isProblem
                          ? 'group-hover:text-rose-600'
                          : 'group-hover:text-emerald-700'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium mt-1 leading-snug">
                      {card.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className={`mt-3 w-full py-2 rounded-xl text-[11px] font-bold transition-all duration-300 text-center block shadow-2xs cursor-pointer text-white ${
                      card.isProblem
                        ? 'bg-rose-600 hover:bg-rose-700'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    }`}
                  >
                    {card.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="text-xs text-slate-500 font-medium inline-flex items-center gap-2">
              <span>⇄</span> Scroll horizontally to inspect all 12 problems &amp; solutions
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          PROMINENT SERVICE BELTS & LANDMARK SOCIETIES (Mapped for BLR)
         ======================================================== */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Sub-places mapping */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Prominent Service Belts &amp; Micro-Localities in {location.mainPlace}</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {location.subPlaces.map((sub, i) => (
              <span
                key={i}
                className="text-xs font-extrabold bg-white text-slate-900 border border-slate-300 px-3.5 py-2 rounded-xl shadow-2xs"
              >
                📍 {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Landmark High-Rise Projects */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-900">
            <Building className="w-4 h-4 text-emerald-700" />
            <span>Landmark High-Rise Societies Installed by Aurab Grills</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {location.prominentSocieties.map((soc, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-xs font-bold text-slate-900 bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs"
              >
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{soc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Technician Profile & Local Review */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Technician Contact Box */}
          <div className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between space-y-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-sm">
                <img src={location.installerImage} alt={location.leadTechnician} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Area Lead Technician
                </span>
                <h3 className="text-base font-black text-slate-900 mt-1">
                  {location.leadTechnician}
                </h3>
                <p className="text-xs text-slate-500">
                  {location.completedProjects}+ Verified Installations in {location.mainPlace}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20in%20${encodeURIComponent(location.mainPlace)}%20and%20want%20to%20schedule%20a%20site%20visit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Supervisor</span>
              </a>
              <a
                href="tel:+918523068882"
                className="px-4 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider"
              >
                Call
              </a>
            </div>
          </div>

          {/* Verified Customer Testimonial */}
          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-900 text-white flex flex-col justify-between space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase">
                Verified Resident
              </span>
            </div>

            <p className="text-xs text-slate-300 italic leading-relaxed">
              "{location.localReview.comment}"
            </p>

            <div className="pt-2 border-t border-slate-800 text-xs">
              <strong className="text-white block">{location.localReview.author}</strong>
              <span className="text-slate-400 text-[11px]">{location.localReview.society}</span>
            </div>
          </div>

        </div>

      </section>

      {/* Floating Survey Dispatch Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Schedule Free Laser Measurement in {location.mainPlace}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Laser rangefinder van reaches your doorstep within 90 minutes. 100% free estimate.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition hover:scale-105 active:scale-95 shadow-lg shrink-0 cursor-pointer"
          >
            Book Free Laser Survey
          </button>
        </div>
      </div>

    </div>
  );
}
