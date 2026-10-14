import React, { useState } from 'react';
import { Camera, MessageSquare, X, ArrowUpRight } from 'lucide-react';

export default function ProjectGallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inspectedProject, setInspectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "High-Rise Balconies",
      title: "Penthouse Golden Hour Balcony with Family",
      location: "Prestige Shantiniketan, Tower 18 (26th Floor)",
      image: "/images/luxury-family-balcony-sunset.jpg",
      specs: "2.5mm Marine SS-316 • 400kg Tension • 10-Yr Warranty",
      description: "Floor-to-ceiling invisible grill setup preserving the ITPL horizon. Toddler enjoys playing safely on the wooden deck in full natural light.",
      technician: "Lead Tech Suresh & Team Alpha",
      elevation: "26th Floor Penthouse"
    },
    {
      id: 2,
      category: "Certified Technicians at Work",
      title: "Certified Technicians Calibrating Wire Tension",
      location: "High-Rise Elevation, Whitefield",
      image: "/images/technicians-installing-real.jpg",
      specs: "Digital Torque Calibrated • Hilti Anchors • 6063-T6 Tracks",
      description: "Certified safety technicians in harnesses using calibrated digital tension meters along heavy-duty aluminum extruded track.",
      technician: "Senior Tensioning Crew Alpha",
      elevation: "22nd Floor Installation"
    },
    {
      id: 3,
      category: "Floor-to-Ceiling Windows",
      title: "Luxury French Sliding Window Protection",
      location: "Defence Colony Penthouse, Indiranagar",
      image: "/images/french-window.jpg",
      specs: "Champagne Anodized Track • 2.5mm SS-316 • Zero View Loss",
      description: "Custom track finish matching sliding french windows. Gives complete fall protection without iron cage claustrophobia.",
      technician: "Architectural Lead Ramesh Babu",
      elevation: "Boutique Duplex Terrace"
    },
    {
      id: 4,
      category: "Child & Pet Security",
      title: "Zero Anxiety Toddler Balcony Play Zone",
      location: "Salarpuria Greenage, HSR Layout",
      image: "/images/toddler-safe.jpg",
      specs: "50mm Safe Spacing • Soft Virgin Nylon Coat • Baby Safe",
      description: "Certified 400kg individual wire tensile strength. Smooth transparent nylon coating eliminates sharp cuts so babies can play safely.",
      technician: "Lead Fitter Manjunath K.",
      elevation: "18th Floor Lake View"
    },
    {
      id: 5,
      category: "High-Rise Balconies",
      title: "Pigeon-Free Lakefront Balcony Sanctuary",
      location: "Mantri Sarovar, Agara Lakefront",
      image: "/images/pigeon-free.jpg",
      specs: "100% Pigeon Shield • Zero Plastic Nets • 99% Wind Inflow",
      description: "Strict 50mm vertical spacing completely eradicates pigeon nesting and odor while keeping 100% unobstructed lake breeze.",
      technician: "Lead Tech Nagaraj V.",
      elevation: "14th Floor Lake View"
    },
    {
      id: 6,
      category: "High-Rise Balconies",
      title: "Curved Panoramic High-Altitude Balcony",
      location: "Sobha Dream Acres, Sarjapur Road",
      image: "/images/sarjapur-balcony.jpg",
      specs: "2.5mm Molybdenum Core • Anti-Rust • 400kg Load",
      description: "High-tensile continuous lacing on wide curved balcony framing open skyline. Approved by society architectural guidelines.",
      technician: "Specialist Santhosh Kumar",
      elevation: "18th Floor Apartment"
    },
    {
      id: 7,
      category: "Certified Technicians at Work",
      title: "German Sub-Millimeter Laser Survey",
      location: "Godrej E-City, Electronic City Phase 1",
      image: "/images/laser-measurement.jpg",
      specs: "0.1mm Parallelism • Free Bangalore Site Visit",
      description: "Digital laser rangefinder inspection ensuring sub-millimeter level alignment before structural track fastening.",
      technician: "Tech Lead Prasad Rao",
      elevation: "Site Measurement Van"
    },
    {
      id: 8,
      category: "High-Rise Balconies",
      title: "High-Altitude Wind-Load Certified Balcony",
      location: "SNN Clermont, 34th Floor, Hebbal",
      image: "/images/hebbal-balcony.jpg",
      specs: "3.0mm Heavy Duty SS-316 • 420kg Load • Wind Tested",
      description: "High-altitude installation withstanding 70+ km/h wind shear over Hebbal Lake. Heavy seismic anchors for absolute sturdiness.",
      technician: "High-Altitude Lead Chandrashekar",
      elevation: "34th Floor Sky Penthouse"
    },
    {
      id: 9,
      category: "Child & Pet Security",
      title: "Pet Balcony Freedom for Dogs & Cats",
      location: "Brigade Millennium, JP Nagar",
      image: "/images/hsr-family-balcony.jpg",
      specs: "Anti-Climb • Smooth Nylon Sheath • Paw-Safe",
      description: "Curious pets lounge safely by the glass railing. 2-inch gap prevents slipping over while giving fresh air and sunlight.",
      technician: "Lead Installer Nagaraj",
      elevation: "16th Floor Duplex"
    }
  ];

  const categories = [
    "All",
    "High-Rise Balconies",
    "Floor-to-Ceiling Windows",
    "Child & Pet Security",
    "Certified Technicians at Work"
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>CURATED ARCHITECTURAL ARCHIVE • REAL INSTALLATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
              Craftsmanship in{' '}
              <span className="text-emerald-700">High-Rise Architecture</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
              Explore authentic installations across penthouses, curved balconies, french windows, and high-altitude apartments. Tap any project to inspect engineering specifications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Interactive Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setInspectedProject(project)}
              className="group rounded-3xl overflow-hidden border border-zinc-200/90 bg-white hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs cursor-pointer"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-zinc-700/60">
                    {project.category}
                  </div>

                  {/* Specs Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {project.elevation}
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold truncate drop-shadow-sm flex items-center gap-1.5">
                      <span>📍 {project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-zinc-950 group-hover:text-emerald-700 transition leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 text-[11px] text-zinc-500 font-medium">
                    <strong className="text-zinc-700">Specs: </strong>
                    {project.specs}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-zinc-500">
                    by {project.technician.split('&')[0]}
                  </span>

                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition flex items-center gap-1">
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Inspection Modal */}
      {inspectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
          onClick={() => setInspectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setInspectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-950/70 hover:bg-zinc-950 text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950">
              <img
                src={inspectedProject.image}
                alt={inspectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-xs font-semibold">
                📍 {inspectedProject.location}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {inspectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-zinc-950 mt-1.5">
                  {inspectedProject.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {inspectedProject.description}
              </p>

              {/* Specs Box */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Engineering Metallurgy:</span>
                  <span className="font-extrabold text-zinc-900">{inspectedProject.specs.split('•')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Tensile Resistance:</span>
                  <span className="font-extrabold text-emerald-700">{inspectedProject.specs.split('•')[1] || '400kg Breaking Load'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Certified Team:</span>
                  <span className="font-bold text-zinc-800">{inspectedProject.technician}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20want%20this%20exact%20invisible%20grill%20setup%20at%20${encodeURIComponent(inspectedProject.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Similar Setup via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setInspectedProject(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                >
                  Book Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
