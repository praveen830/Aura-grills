import React from 'react';
import { BANGALORE_LOCATIONS } from '../data/bangaloreLocations';
import { ArrowRight, MessageSquare, Eye } from 'lucide-react';
import GrillVisualizer from './GrillVisualizer';
import SocietyProofSection from './SocietyProofSection';
import ProblemSolution from './ProblemSolution';
import RealGallery from './RealGallery';
import WarrantySection from './WarrantySection';
import Footer from './Footer';

export default function SnapSliderHome({ onSelectCity, onOpenBooking, onOpenLocationDetail }) {
  return (
    <main
      id="main-snap-container"
      className="h-[calc(100vh-61px)] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-50 no-scrollbar"
    >
      {/* 7 Regional Hub Snap Slides */}
      {BANGALORE_LOCATIONS.map((loc, index) => {
        const slideNumber = String(index + 1).padStart(2, '0');
        const totalSlides = String(BANGALORE_LOCATIONS.length).padStart(2, '0');

        return (
          <section
            key={loc.id}
            id={`slide-${loc.id}`}
            className="relative w-full h-[calc(100dvh-61px)] min-h-[580px] snap-start snap-always flex flex-col justify-between overflow-hidden select-none border-b border-slate-200 bg-white"
          >
            {/* ========================================================
                MOBILE VIEW (9:16 Full-bleed vertical image matching reference)
               ======================================================== */}
            <div
              className="md:hidden absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => (onOpenLocationDetail ? onOpenLocationDetail(loc) : onSelectCity(loc))}
            >
              {/* Background cover image */}
              <img
                src={loc.coverImage}
                alt={`Aura Grills Invisible Grills in ${loc.mainPlace}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Realistic High-Tensile Stainless Steel Micro-Cable Lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.9) 0px,
                    rgba(226, 232, 240, 0.8) 1.2px,
                    transparent 1.2px,
                    transparent 20px
                  )`,
                }}
              ></div>

              {/* Top & Bottom extruded aluminum rail markers */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

              {/* Gradient Vignette for readable text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none"></div>

              {/* Top Mobile Bar Overlay */}
              <div className="absolute top-3 inset-x-3.5 z-20 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-[10px] font-black text-[#16A34A] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                    <span>{loc.mainPlace.split('&')[0]}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-md">
                    {slideNumber} / {totalSlides}
                  </div>
                </div>

                <div className="w-fit mx-auto px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-emerald-400 text-[9px] font-black uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
                  <span className="text-[#16A34A] font-bold">—</span>
                  <span>INVISIBLE GRILLS &amp; SAFETY SOLUTIONS</span>
                  <span className="text-[#16A34A] font-bold">—</span>
                </div>
              </div>

              {/* Center Tap Indicator Hint */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-[10px] font-bold text-white flex items-center gap-1.5 shadow-lg animate-pulse">
                  <Eye className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Tap to inspect sub-places &amp; specs</span>
                </div>
              </div>

              {/* Bottom Mobile Content & Direct Action */}
              <div
                className="absolute bottom-5 inset-x-3.5 z-20 flex flex-col gap-2.5"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  onClick={() => (onOpenLocationDetail ? onOpenLocationDetail(loc) : onSelectCity(loc))}
                  className="bg-slate-950/85 backdrop-blur-md border border-slate-700/80 p-3.5 rounded-2xl text-white space-y-1.5 cursor-pointer active:scale-98 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                      📍 {loc.zone}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">
                      {loc.completedProjects}+ Installs
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-white leading-tight">
                    {loc.mainPlace}
                  </h2>
                  <p className="text-xs text-slate-300 leading-snug line-clamp-1 font-normal">
                    {loc.tagline}
                  </p>

                  {/* Sub-places preview */}
                  <div className="pt-0.5 text-[10px] text-slate-300 font-medium">
                    <strong className="text-emerald-400">Belts: </strong>
                    {loc.subPlaces.slice(0, 3).join(' • ')}
                  </div>
                </div>

                {/* Main Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCity(loc)}
                    className="flex-1 py-3.5 rounded-2xl bg-[#16A34A] hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xl shadow-emerald-950/50 cursor-pointer transition active:scale-95"
                  >
                    <span>Check {loc.mainPlace.split(' ')[0]} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 font-black" />
                  </button>

                  <button
                    onClick={() => (onOpenLocationDetail ? onOpenLocationDetail(loc) : onSelectCity(loc))}
                    className="px-3.5 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 cursor-pointer"
                    title="Quick Specs Modal"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* ========================================================
                DESKTOP VIEW (12-Column Split matching reference layout)
               ======================================================== */}
            <div className="hidden md:flex relative w-full h-full flex-col justify-between p-6 sm:p-8 bg-slate-50">
              {/* Ambient Blurred Background Glow */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-3xl scale-125 opacity-20 pointer-events-none transition-all duration-700"
                style={{ backgroundImage: `url(${loc.coverImage})` }}
              ></div>

              {/* Slide Counter Top Right */}
              <div className="absolute top-4 right-8 z-20 pointer-events-none">
                <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#16A34A] font-black shadow-xs">
                  {slideNumber} / {totalSlides}
                </span>
              </div>

              {/* 12-Column Centered Grid */}
              <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 grid grid-cols-12 gap-8 lg:gap-12 items-center justify-center my-auto">
                {/* Left 7 Columns: Framed Luxury Image with GrillVisualizer */}
                <div className="col-span-7 flex flex-col items-center justify-center">
                  <div
                    onClick={() => (onOpenLocationDetail ? onOpenLocationDetail(loc) : onSelectCity(loc))}
                    className="relative block w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden border-2 border-emerald-500 shadow-xl bg-white group transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer"
                  >
                    <GrillVisualizer
                      imageSrc={loc.coverImage}
                      altText={`Aura Grills Invisible Grills in ${loc.mainPlace}`}
                      locationName={loc.mainPlace}
                      completedProjects={loc.completedProjects}
                    />
                  </div>
                </div>

                {/* Right 5 Columns: Elevated Content matching reference */}
                <div className="col-span-5 flex flex-col items-start text-left space-y-4">
                  {/* Reference Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-500 text-[11px] font-black tracking-wider uppercase text-emerald-950 shadow-xs">
                    <span className="text-[#16A34A] font-extrabold text-sm">—</span>
                    <span className="font-extrabold tracking-[0.14em]">INVISIBLE GRILLS &amp; SAFETY SOLUTIONS</span>
                    <span className="text-[#16A34A] font-extrabold text-sm">—</span>
                  </div>

                  {/* Corridor Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-[#16A34A] uppercase tracking-wider">
                    <span>📍 {loc.zone.toUpperCase()} CORRIDOR</span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-snug tracking-tight">
                    {loc.mainPlace.split('&')[0]} •{' '}
                    <span className="text-[#16A34A]">Architectural Safety</span>
                  </h2>

                  {/* Tagline */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {loc.tagline}. High-tensile SS-316 vertical cables spaced at 2 inches to guarantee child and pet fall safety with zero view obstruction.
                  </p>

                  {/* Prominent Service Belts (Reference Box) */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 w-full space-y-1.5 shadow-xs">
                    <div className="text-xs font-bold text-[#16A34A] uppercase tracking-wider flex items-center justify-between">
                      <span>Prominent Service Belts:</span>
                      <span className="text-[10px] text-slate-500 font-bold">{loc.completedProjects}+ Projects</span>
                    </div>
                    <div className="text-xs text-slate-700 font-medium leading-relaxed">
                      {loc.subPlaces.join(' • ')}
                    </div>
                  </div>

                  {/* Big CTA Button */}
                  <div className="flex items-center gap-3 w-full pt-1">
                    <button
                      onClick={() => onSelectCity(loc)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#16A34A] hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Check {loc.mainPlace.split(' ')[0]} Solutions</span>
                      <ArrowRight className="w-4 h-4 font-black" />
                    </button>

                    <button
                      onClick={() => (onOpenLocationDetail ? onOpenLocationDetail(loc) : onSelectCity(loc))}
                      className="px-4 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                    >
                      Details
                    </button>

                    <a
                      href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20looking%20for%20invisible%20grills%20in%20${encodeURIComponent(loc.mainPlace)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#16A34A] border border-slate-200 transition shrink-0"
                      title="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Snap Section 8: Society Proof Section */}
      <section className="snap-start">
        <SocietyProofSection
          onOpenBooking={onOpenBooking}
          onSelectLocation={onSelectCity}
        />
      </section>

      {/* Snap Section 9: One Problem, Many Solutions */}
      <section className="snap-start">
        <ProblemSolution
          onOpenBooking={onOpenBooking}
        />
      </section>

      {/* Snap Section 10: Real Installers & Craftsmanship Gallery */}
      <section className="snap-start">
        <RealGallery
          onOpenBooking={onOpenBooking}
          onSelectLocation={onSelectCity}
        />
      </section>

      {/* Snap Section 11: Official 10-Year Warranty & Guarantee */}
      <section className="snap-start">
        <WarrantySection
          onOpenBooking={onOpenBooking}
        />
      </section>

      {/* Snap Section 12: Footer */}
      <section className="snap-start">
        <Footer
          onSelectLocation={onSelectCity}
          onOpenBooking={onOpenBooking}
        />
      </section>
    </main>
  );
}
