import React, { useState } from 'react';
import { X, MapPin, Building, ShieldCheck, Wrench, Phone, MessageSquare, Check, Star, ArrowRight, Zap, Flame, Eye, Sparkles, Heart } from 'lucide-react';
import GrillVisualizer from './GrillVisualizer';

export default function LocationDetailModal({ location, onClose, onOpenBooking }) {
  const [activeSubPlace, setActiveSubPlace] = useState('');

  if (!location) return null;

  const currentSubPlace = activeSubPlace || location.subPlaces[0];

  const purposes = [
    {
      title: "Toddler & Child Fall Safety",
      desc: "Strict 2-inch safe vertical gap prevents toddlers from slipping through high-rise railings.",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-100"
    },
    {
      title: "100% Pigeon & Bird Protection",
      desc: "Eliminates pigeon droppings, foul smell, and dust without ugly, sagging green nylon nets.",
      icon: Sparkles,
      color: "text-blue-700 bg-blue-100"
    },
    {
      title: "Panoramic Skyline & Breeze",
      desc: "Retains 99% natural morning sunlight and Bangalore cross breezes without feeling trapped in a cage.",
      icon: Eye,
      color: "text-amber-700 bg-amber-100"
    },
    {
      title: "10-Second Fire Escape Rescue",
      desc: "Unlike welded iron cages that trap families, emergency services can cleanly snip cables in seconds.",
      icon: Flame,
      color: "text-rose-700 bg-rose-100"
    },
    {
      title: "Curious Dog & Cat Safety",
      desc: "Smooth virgin nylon sheath prevents paw cuts while giving pets total freedom to sunbathe safely.",
      icon: Heart,
      color: "text-purple-700 bg-purple-100"
    },
    {
      title: "10-Year Rustproof SS-316",
      desc: "Infused with 2.5% Molybdenum to prevent corrosion in Bangalore monsoons. Stamped warranty card.",
      icon: Zap,
      color: "text-teal-700 bg-teal-100"
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-fadeIn my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white transition cursor-pointer shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Interactive Grill Visualizer with mode toggle */}
        <div className="relative w-full shrink-0">
          <GrillVisualizer
            imageSrc={location.coverImage}
            altText={`Invisible Grills in ${location.mainPlace}`}
            locationName={`${location.mainPlace} • 30+ Floors`}
            completedProjects={location.completedProjects}
          />
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto flex-1 text-slate-900">
          
          {/* Header Info */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                📍 {location.zone} Corridor Hub
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{location.rating} / 5.0 Rating • {location.completedProjects}+ Homes</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {location.mainPlace}
            </h2>
            <p className="text-sm font-semibold text-emerald-700 mt-1">
              {location.tagline}
            </p>
          </div>

          {/* 1. Mapped Bangalore Sub-Places (Micro-Localities) */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mapped Sub-Places &amp; Active Service Belts:</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">
                Tap to inquire for your locality
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {location.subPlaces.map((sub, i) => {
                const isSelected = currentSubPlace === sub;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSubPlace(sub)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-800 border border-slate-200'
                    }`}
                  >
                    📍 {sub}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-2 text-[11px] text-slate-500">
              Selected service point: <strong className="text-emerald-700">{currentSubPlace}</strong> (Rapid Laser Survey dispatch available today)
            </div>
          </div>

          {/* 2. Working Purpose & Safety Purposes (All 6 Included) */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Core Working &amp; Safety Purposes Solved:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {purposes.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-emerald-400 transition">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${p.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-black text-slate-900 leading-tight">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Landmark Societies Fitted with Aurab Grills Grills */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-950 flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-700" />
              <span>Completed Landmark Societies in {location.mainPlace}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {location.prominentSocieties.map((soc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white p-2.5 rounded-xl border border-emerald-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{soc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Balcony Requirements & Technical Specs */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-emerald-600" />
              <span>Balcony Engineering Specifications:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Balcony Profile</span>
                <span className="font-extrabold text-slate-900 mt-0.5 block">{location.installationRequirements.balconyType}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Cable Standard</span>
                <span className="font-extrabold text-slate-900 mt-0.5 block">{location.installationRequirements.recommendedWire}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Anchor System</span>
                <span className="font-extrabold text-slate-900 mt-0.5 block">{location.installationRequirements.anchorSystem}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Laser Distance Survey</span>
                <span className="font-extrabold text-emerald-700 mt-0.5 block">{location.installationRequirements.surveyTime}</span>
              </div>
            </div>
          </div>

          {/* 5. Lead Technician Profile & Direct WhatsApp / Call */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 shadow-md">
                <img src={location.installerImage} alt={location.leadTechnician} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-emerald-400 tracking-wider">
                  Area Lead Station Supervisor
                </span>
                <div className="text-sm font-black text-white mt-0.5">
                  {location.leadTechnician}
                </div>
                <div className="text-xs text-slate-300">
                  {location.completedProjects}+ Verified Inspections • Base: {location.mainPlace.split('&')[0]}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20in%20${encodeURIComponent(currentSubPlace || location.mainPlace)}%20and%20want%20to%20schedule%20a%20free%20laser%20survey.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Technician</span>
              </a>
              <a
                href="tel:+918523068882"
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* 6. Verified Local Resident Review */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">
                Verified Resident
              </span>
            </div>
            <p className="text-xs text-slate-700 italic leading-relaxed">
              "{location.localReview.comment}"
            </p>
            <div className="text-[11px] font-bold text-slate-900 pt-1">
              — {location.localReview.author} <span className="text-slate-500 font-normal">({location.localReview.society})</span>
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="hidden sm:block text-xs text-slate-600 font-semibold">
            <span className="text-emerald-700 font-black">10-Year Written Warranty Card</span> handed over after digital tension test.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
