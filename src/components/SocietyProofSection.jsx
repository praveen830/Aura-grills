import React, { useState } from 'react';
import { Building2, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';
import { BANGALORE_LOCATIONS } from '../data/bangaloreLocations';

export default function SocietyProofSection({ onOpenBooking, onSelectLocation }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const societies = [
    {
      id: 1,
      name: "Prestige Shantiniketan",
      hub: "whitefield",
      hubLabel: "Whitefield & ITPL",
      location: "Whitefield Main Road, East Bangalore",
      elevation: "26th-Floor Penthouse",
      metallurgy: "2.5mm Marine SS-316",
      securedCount: "34 Balconies Secured",
      image: "/images/whitefield-real-balcony.jpg",
      highlight: "100% Unblocked ITPL Skyline & Zero Vertigo Risk",
      quote: "Valley breeze passes freely with zero vertigo risk for kids up to 26 floors.",
      author: "Arun Nair (Tower 18, 26th Floor)"
    },
    {
      id: 2,
      name: "Sobha Dream Acres",
      hub: "sarjapur-bellandur",
      hubLabel: "Sarjapur & Bellandur",
      location: "Panathur Road, Balagere, Sarjapur Belt",
      elevation: "18th-Floor Lake-Facing Flat",
      metallurgy: "2.5mm Molybdenum SS-316",
      securedCount: "85 Balconies Secured",
      image: "/images/sarjapur-balcony.jpg",
      highlight: "Zero Pigeon Intrusion & Open Tech-Belt Horizon",
      quote: "Pigeon nuisance completely eradicated without ugly green plastic nets. Pure peace of mind.",
      author: "Karthik Raghavan (Wing 14)"
    },
    {
      id: 3,
      name: "Salarpuria Greenage",
      hub: "koramangala-hsr",
      hubLabel: "Koramangala & HSR",
      location: "Hosur Road, Near HSR Sector 2",
      elevation: "22nd-Floor Corner Balcony",
      metallurgy: "2.5mm Marine SS-316",
      securedCount: "42 Balconies Secured",
      image: "/images/hsr-family-balcony.jpg",
      highlight: "Lake Breeze Retained • Toddler & Pet Lockdown",
      quote: "Our toddler and golden retriever play by the railing without any fear. Invisible from 10 feet away.",
      author: "Vikram Shenoy (Ebony Block)"
    },
    {
      id: 4,
      name: "SNN Clermont",
      hub: "hebbal-yelahanka",
      hubLabel: "Hebbal & Yelahanka",
      location: "Nagavara Lakefront, Outer Ring Road",
      elevation: "34th-Floor Skyway Penthouse",
      metallurgy: "3.0mm Heavy-Duty SS-316",
      securedCount: "28 Balconies Secured",
      image: "/images/hebbal-balcony.jpg",
      highlight: "High-Altitude 70km/h Wind-Load Certified",
      quote: "At the 34th floor, wind speeds are severe. The calibrated tension is rock-solid.",
      author: "Col. Rajesh Verma (Retd.) (34th Floor)"
    },
    {
      id: 5,
      name: "Prestige Leela Residences",
      hub: "indiranagar-domlur",
      hubLabel: "Indiranagar & Domlur",
      location: "Old Airport Road, Near Indiranagar",
      elevation: "Palatial Duplex Veranda (7th Floor)",
      metallurgy: "2.5mm Molybdenum Core",
      securedCount: "19 Balconies Secured",
      image: "/images/penthouse-panoramic-balcony.jpg",
      highlight: "Boutique Architectural Harmony • Champagne Tracks",
      quote: "Architectural aesthetics remained 100% intact. Zero cage feeling, looks royal.",
      author: "Dr. Ananya Murthy (Penthouse Wing)"
    },
    {
      id: 6,
      name: "Godrej E-City",
      hub: "electronic-city",
      hubLabel: "Electronic City",
      location: "Electronic City Phase 1",
      elevation: "14th-Floor Garden View Balcony",
      metallurgy: "2.5mm Marine SS-316",
      securedCount: "38 Balconies Secured",
      image: "/images/ecity-balcony.jpg",
      highlight: "Zero Bird Droppings & 100% Fresh Air Ventilation",
      quote: "Cleanest installation with zero debris left behind. 10-Year warranty stamped certificate handed over.",
      author: "Praveen & Sneha (Tower B)"
    },
    {
      id: 7,
      name: "Brigade Millennium",
      hub: "jp-nagar-jayanagar",
      hubLabel: "JP Nagar & Jayanagar",
      location: "JP Nagar 7th Phase, South Bangalore",
      elevation: "16th-Floor Duplex Balcony",
      metallurgy: "2.5mm Marine SS-316",
      securedCount: "31 Balconies Secured",
      image: "/images/jpnagar-balcony.jpg",
      highlight: "Child Play Zone & French Window Protection",
      quote: "Kids can play safely on the balcony without us worrying for a second. Highly recommended!",
      author: "Deepak Somasekhar (Magnolia Block)"
    },
    {
      id: 8,
      name: "Total Environment Windmills",
      hub: "whitefield",
      hubLabel: "Whitefield & ITPL",
      location: "EPIP Zone, Whitefield",
      elevation: "Luxury Terrace Garden Apartment",
      metallurgy: "3.0mm Marine SS-316",
      securedCount: "22 Balconies Secured",
      image: "/images/french-window.jpg",
      highlight: "Preserves Landscape Integration with Unbreakable Safety",
      quote: "Retains the green terrace garden aesthetic completely while ensuring fail-safe protection.",
      author: "Siddharth Rao (Meadow Block)"
    },
    {
      id: 9,
      name: "Karle Zenith Residences",
      hub: "hebbal-yelahanka",
      hubLabel: "Hebbal & Yelahanka",
      location: "Manyata SEZ Corridor, Nagavara",
      elevation: "27th-Floor Corner High-Rise",
      metallurgy: "2.5mm High-Tensile SS-316",
      securedCount: "26 Balconies Secured",
      image: "/images/technicians-installing-real.jpg",
      highlight: "180° Expressway Skyline & Laser Calibrated Tension",
      quote: "Sub-millimeter laser alignment and German anchors. Certified technicians did a wonderful job.",
      author: "Manoj Swaminathan (Zenith A)"
    }
  ];

  const filterTabs = [
    { label: "All Bangalore Hubs (850+)", value: "All" },
    { label: "Whitefield", value: "whitefield" },
    { label: "Koramangala & HSR", value: "koramangala-hsr" },
    { label: "Indiranagar & Domlur", value: "indiranagar-domlur" },
    { label: "Sarjapur & Bellandur", value: "sarjapur-bellandur" },
    { label: "Electronic City", value: "electronic-city" },
    { label: "JP Nagar", value: "jp-nagar-jayanagar" },
    { label: "Hebbal", value: "hebbal-yelahanka" }
  ];

  const filteredSocieties = activeFilter === 'All'
    ? societies
    : societies.filter((s) => s.hub === activeFilter);

  return (
    <section id="society-proof-section" className="relative py-16 sm:py-20 px-5 sm:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[10px] font-bold text-[#16A34A] uppercase tracking-widest mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>REAL HIGH-RISE PROOF • 850+ VERIFIED APARTMENTS</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight">
            RECENTLY COMPLETED INSTALLATIONS ACROSS <span className="text-[#16A34A]">BANGALORE SOCIETIES</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
            Over 850+ luxury high-rise balconies secured with certified SS-316 marine-grade invisible safety cables.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                  isSelected
                    ? 'bg-[#16A34A] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-500 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Society Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSocieties.map((soc) => (
            <div
              key={soc.id}
              className="group rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500 bg-white transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              <div>
                {/* Card Image with subtle wire simulation */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={soc.image}
                    alt={`${soc.name} SS-316 Balcony Invisible Grills`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1.2px, transparent 1.2px, transparent 18px)'
                    }}
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Verified Installation</span>
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {soc.securedCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16A34A] transition mb-1">
                    {soc.name}
                  </h3>

                  <button
                    onClick={() => {
                      if (onSelectLocation) {
                        const matched = BANGALORE_LOCATIONS.find((l) => l.id === soc.hub);
                        if (matched) onSelectLocation(matched);
                      }
                    }}
                    type="button"
                    className="flex items-center gap-1.5 text-xs text-slate-600 mb-3 hover:text-[#16A34A] transition cursor-pointer text-left"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>{soc.location}</span>
                  </button>

                  {/* Elevation & Metallurgy Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Elevation:</span>
                      <span className="text-slate-800 font-semibold">{soc.elevation}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Metallurgy:</span>
                      <span className="text-[#16A34A] font-bold">{soc.metallurgy}</span>
                    </div>
                  </div>

                  {/* Feature Highlight */}
                  <div className="text-xs font-semibold text-[#16A34A] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
                    <span>{soc.highlight}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-slate-600 italic font-light leading-relaxed">
                    "{soc.quote}"
                  </p>
                  <div className="text-[10px] text-slate-400 font-medium mt-1">
                    — {soc.author}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    10-Year Anti-Rust Guaranteed
                  </span>
                  <button
                    onClick={() => {
                      if (onOpenBooking) onOpenBooking();
                    }}
                    type="button"
                    className="text-xs font-bold text-[#16A34A] hover:text-emerald-700 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
