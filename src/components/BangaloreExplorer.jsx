import React, { useState } from 'react';
import { MapPin, Building, Wrench, UserCheck, Phone, MessageSquare, ArrowRight, Check, Star, Search } from 'lucide-react';
import { BANGALORE_LOCATIONS } from '../data/bangaloreLocations';
import GrillVisualizer from './GrillVisualizer';

export default function BangaloreExplorer({ onSelectLocation, onOpenBooking }) {
  const [selectedZone, setSelectedZone] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLocationId, setActiveLocationId] = useState(BANGALORE_LOCATIONS[0].id);

  const zones = ['All', 'East Bangalore', 'South-East Bangalore', 'Central-East Bangalore', 'East-South Corridor', 'South Bangalore', 'North Bangalore'];

  // Filter by zone AND search query (checks mainPlace, subPlaces, and prominentSocieties)
  const filteredLocations = BANGALORE_LOCATIONS.filter((loc) => {
    const matchesZone = selectedZone === 'All' || loc.zone === selectedZone || loc.zone.includes(selectedZone.replace(' Bangalore', ''));
    if (!matchesZone) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const inMain = loc.mainPlace.toLowerCase().includes(query);
    const inTag = loc.tagline.toLowerCase().includes(query);
    const inSub = loc.subPlaces.some((sub) => sub.toLowerCase().includes(query));
    const inSoc = loc.prominentSocieties.some((soc) => soc.toLowerCase().includes(query));

    return inMain || inTag || inSub || inSoc;
  });

  const activeLoc = BANGALORE_LOCATIONS.find((loc) => loc.id === activeLocationId) || filteredLocations[0] || BANGALORE_LOCATIONS[0];

  return (
    <section id="bangalore-hubs" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Bangalore Locality Mapping &amp; Dispatch Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Every Bangalore Place &amp; Landmark High-Rise Mapped
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Search your apartment society or neighborhood. Every corridor is supported by dedicated local mobile teams equipped with German laser distance meters.
          </p>

          {/* Search Bar Input */}
          <div className="pt-3 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by area (e.g. Whitefield, HSR, Kadugodi, Prestige, Sobha)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition cursor-pointer ${
                selectedZone === zone
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Main Grid: Locality Selector List + Rich Dossier Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Bangalore Places List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-500 mb-2 px-1">
              <span>Matching Hubs ({filteredLocations.length})</span>
              <span className="text-emerald-700 font-bold">Bangalore Fast Dispatch</span>
            </div>

            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
                No exact match found for "{searchQuery}". We service all areas in Bangalore!
                <button
                  onClick={onOpenBooking}
                  className="mt-3 block mx-auto px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Book Free Measurement for My Area
                </button>
              </div>
            ) : (
              filteredLocations.map((loc) => {
                const isSelected = loc.id === activeLoc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-2 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-white hover:bg-slate-100/80 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                            📍 {loc.zone}
                          </span>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                            {loc.completedProjects}+ Installs
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                          {loc.mainPlace}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                          {loc.tagline}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-600 translate-x-1' : 'text-slate-400'}`} />
                      </div>
                    </div>

                    {/* Sub-places preview badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-slate-100">
                      {loc.subPlaces.slice(0, 3).map((sub, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {sub}
                        </span>
                      ))}
                      {loc.subPlaces.length > 3 && (
                        <span className="text-[10px] font-bold text-emerald-600 px-1 py-0.5">
                          +{loc.subPlaces.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Exhaustive Mapping Card with GrillVisualizer */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl space-y-6 sticky top-20 text-slate-900">
            
            {/* Realistic Grill Visualizer with interactive toggles */}
            <div className="w-full">
              <GrillVisualizer
                imageSrc={activeLoc.coverImage}
                altText={`Invisible Grills in ${activeLoc.mainPlace}`}
                locationName={activeLoc.mainPlace}
                completedProjects={activeLoc.completedProjects}
              />
            </div>

            {/* 1. MAIN PLACE HEADER */}
            <div className="border-b border-slate-200 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  📍 {activeLoc.zone} Hub
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{activeLoc.rating} / 5.0 Rating ({activeLoc.completedProjects}+ Projects)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {activeLoc.mainPlace}
              </h2>
              <p className="text-sm font-semibold text-emerald-700 mt-1">
                {activeLoc.tagline}
              </p>
            </div>

            {/* 2. SUB-PLACES MAPPING */}
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mapped Sub-Places &amp; Micro-Localities:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeLoc.subPlaces.map((sub, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1.5 rounded-xl shadow-2xs"
                  >
                    📍 {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. OUR PROJECTS (LANDMARK SOCIETIES) */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-700">
                <Building className="w-4 h-4 text-emerald-600" />
                <span>Completed Landmark High-Rise Projects in this Belt:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {activeLoc.prominentSocieties.map((soc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{soc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. BALCONY REQUIREMENTS & SPECIFICATIONS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Wrench className="w-4 h-4 text-emerald-600" />
                <span>Balcony Profile &amp; Installation Standards:</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Balcony Profile</div>
                  <div className="text-xs font-extrabold text-slate-900">{activeLoc.installationRequirements.balconyType}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Recommended Cable</div>
                  <div className="text-xs font-extrabold text-slate-900">{activeLoc.installationRequirements.recommendedWire}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Anchor Mechanism</div>
                  <div className="text-xs font-extrabold text-slate-900">{activeLoc.installationRequirements.anchorSystem}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Laser Survey Speed</div>
                  <div className="text-xs font-extrabold text-emerald-700">{activeLoc.installationRequirements.surveyTime}</div>
                </div>
              </div>
            </div>

            {/* 5. PERSONAL INFO & LOCAL TECHNICIAN LEAD */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-sm">
                  <img src={activeLoc.installerImage} alt={activeLoc.leadTechnician} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{activeLoc.leadTechnician}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Certified Area Supervisor • {activeLoc.completedProjects}+ Balconies
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20am%20in%20${encodeURIComponent(activeLoc.mainPlace)}%20and%20want%20to%20book%20a%20free%20laser%20survey.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Lead</span>
                </a>
                <a
                  href="tel:+918523068882"
                  className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-2">
              <button
                onClick={() => onSelectLocation(activeLoc)}
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition hover:scale-[1.01] active:scale-99 shadow-md cursor-pointer"
              >
                <span>View Full {activeLoc.mainPlace} Solutions Page</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
