import React, { useState } from 'react';
import { MapPin, Building, MessageSquare, ArrowRight, Calendar } from 'lucide-react';

const BANGALORE_HUBS = [
  {
    id: 'whitefield',
    name: 'Whitefield & ITPL',
    tagline: 'East Bangalore High-Rise & Penthouse Safety Belt',
    leadSupervisor: 'Suresh Gowda (Whitefield Rapid Response)',
    vanStatus: 'Rapid Survey Van active in Whitefield today',
    coverImage: '/images/whitefield-real-balcony.jpg',
    subPlaces: [
      'All Whitefield',
      'Kadugodi',
      'ITPL Main Road',
      'Varthur Road',
      'Hope Farm Junction',
      'ECC Road'
    ],
    projects: [
      {
        id: 'w1',
        name: 'Prestige Shantiniketan',
        subPlace: 'ITPL Main Road',
        floor: '26th Floor Penthouse Balcony',
        image: '/images/luxury-family-balcony-sunset.jpg',
        description: 'Floor-to-ceiling invisible grill preserving the ITPL skyline. 100% child safe, zero bird droppings.',
        specs: '2-Inch Safe Spacing • SS-316 Marine Grade • 10-Yr Warranty'
      },
      {
        id: 'w2',
        name: 'Godrej United',
        subPlace: 'Whitefield Main Road',
        floor: 'Tower 2 (22nd Floor)',
        image: '/images/penthouse-panoramic-balcony.jpg',
        description: 'High-altitude panoramic curved balcony secured with marine-grade invisible cables.',
        specs: '400kg Breaking Resistance • Anti-Rust • Hilti Anchors'
      },
      {
        id: 'w3',
        name: 'Brigade Cosmopolis',
        subPlace: 'ECC Road',
        floor: '18th Floor Duplex Balcony',
        image: '/images/whitefield-real-balcony.jpg',
        description: 'Wide panoramic open balcony secured against high winds while keeping fresh breeze.',
        specs: '2.5mm Marine Wire • Zero View Block • Child Proof'
      }
    ]
  },
  {
    id: 'hsr-koramangala',
    name: 'HSR Layout & Koramangala',
    tagline: 'South-East Lakefront Apartments & Toddler Safety',
    leadSupervisor: 'Manjunath K. (Senior Balcony Specialist)',
    vanStatus: 'Van stationed near Agara Lake / Sector 2',
    coverImage: '/images/hsr-family-balcony.jpg',
    subPlaces: [
      'All HSR & Koramangala',
      'HSR Sectors 1-7',
      'Agara Lakefront',
      'Koramangala 3rd-6th Block',
      'Sony World Junction'
    ],
    projects: [
      {
        id: 'h1',
        name: 'Salarpuria Greenage',
        subPlace: 'HSR Sectors 1-7',
        floor: 'Ebony Block, 22nd Floor',
        image: '/images/hsr-family-balcony.jpg',
        description: 'Family balcony overlooking greenery. Toddlers and pets play freely with zero fall risk.',
        specs: 'Smooth Nylon Sheath • Baby Safe • 400kg Tension'
      },
      {
        id: 'h2',
        name: 'Mantri Sarovar',
        subPlace: 'Agara Lakefront',
        floor: '14th Floor Lake View Balcony',
        image: '/images/pigeon-free.jpg',
        description: 'Immaculately clean balcony with 100% lake breeze, completely free of pigeons and nets.',
        specs: '100% Pigeon Proof • Zero Green Nets • Clear View'
      },
      {
        id: 'h3',
        name: 'Sobha Opal',
        subPlace: 'Koramangala 3rd-6th Block',
        floor: '16th Floor Sky Balcony',
        image: '/images/luxury-family-balcony-sunset.jpg',
        description: 'Unobstructed morning sunshine and coffee lounge balcony with invisible safety wires.',
        specs: '2-Inch Gap • Rust-Free SS-316 • 10-Yr Guarantee'
      }
    ]
  },
  {
    id: 'sarjapur-bellandur',
    name: 'Sarjapur & Bellandur',
    tagline: 'Tech-Corridor High-Rise Gated Communities',
    leadSupervisor: 'Santhosh Kumar (Structural Specialist)',
    vanStatus: 'Survey Van covering Haralur & Panathur today',
    coverImage: '/images/luxury-family-balcony-sunset.jpg',
    subPlaces: [
      'All Sarjapur',
      'Haralur Road',
      'Panathur Road',
      'Kaikondrahalli Lake',
      'Doddakannelli'
    ],
    projects: [
      {
        id: 's1',
        name: 'Sobha Dream Acres',
        subPlace: 'Panathur Road',
        floor: 'Wing 14, 18th Floor Balcony',
        image: '/images/pigeon-free.jpg',
        description: 'Permanent solution to pigeon nesting. Balcony stays fresh, spotless, and completely open.',
        specs: 'Pigeon Shield • High-Altitude Certified • SS-316'
      },
      {
        id: 's2',
        name: 'Assetz Marq',
        subPlace: 'Doddakannelli',
        floor: '24th Floor Panoramic Deck',
        image: '/images/penthouse-panoramic-balcony.jpg',
        description: 'Expansive open sky deck installation completed in 4 hours with zero tile damage.',
        specs: 'Sub-Millimeter Tension • Dust-Free Drill • 400kg Safe'
      },
      {
        id: 's3',
        name: 'Prestige Ferns Residency',
        subPlace: 'Haralur Road',
        floor: '19th Floor Lake View',
        image: '/images/whitefield-real-balcony.jpg',
        description: 'Full width invisible protection allowing sunset view and cooling cross-ventilation.',
        specs: '2-Inch Grid • Smooth Finish • Fire-Egress Safe'
      }
    ]
  },
  {
    id: 'hebbal-manyata',
    name: 'Hebbal & Manyata',
    tagline: 'North Bangalore High-Altitude Towers & Lake Penthouses',
    leadSupervisor: 'Chandrashekar (High-Altitude Specialist)',
    vanStatus: 'Van active along Nagavara & Thanisandra',
    coverImage: '/images/penthouse-panoramic-balcony.jpg',
    subPlaces: [
      'All Hebbal',
      'Nagavara Lakefront',
      'Sahakar Nagar',
      'Thanisandra Main Road',
      'Yelahanka'
    ],
    projects: [
      {
        id: 'hb1',
        name: 'SNN Clermont',
        subPlace: 'Nagavara Lakefront',
        floor: 'Tower 2, 34th Floor Sky Tower',
        image: '/images/penthouse-panoramic-balcony.jpg',
        description: 'Engineered for intense 70km/h high-altitude winds over Hebbal Lake with zero cable vibration.',
        specs: 'Heavy 3.0mm SS-316 • Wind Certified • 420kg Tensile'
      },
      {
        id: 'hb2',
        name: 'Godrej Platinum',
        subPlace: 'Hebbal',
        floor: '28th Floor Penthouse Balcony',
        image: '/images/whitefield-real-balcony.jpg',
        description: 'Uncut view of Hebbal flyover and skyline. Complete safety for children and visiting elders.',
        specs: '2-Inch Spacing • Zero View Loss • 10-Yr Warranty'
      },
      {
        id: 'hb3',
        name: 'Sobha City',
        subPlace: 'Thanisandra Main Road',
        floor: '21st Floor Luxury Balcony',
        image: '/images/luxury-family-balcony-sunset.jpg',
        description: 'High-rise balcony safety allowing full natural daylight to pour into the living room.',
        specs: 'Marine Core 316 • Hilti Anchor Embedment • Toddler Safe'
      }
    ]
  },
  {
    id: 'indiranagar-central',
    name: 'Indiranagar & Central',
    tagline: 'Luxury French Windows, Duplexes & Penthouse Verandas',
    leadSupervisor: 'Ramesh Babu (Architectural Lead)',
    vanStatus: 'Van in Indiranagar & Domlur corridor today',
    coverImage: '/images/french-window.jpg',
    subPlaces: [
      'All Central',
      'Defence Colony',
      'Domlur',
      'Old Airport Road',
      'Lavelle Road'
    ],
    projects: [
      {
        id: 'ic1',
        name: 'Prestige Leela Residences',
        subPlace: 'Old Airport Road',
        floor: 'Heritage Penthouse Balcony',
        image: '/images/french-window.jpg',
        description: 'Floor-to-ceiling sliding French window protection matching luxury interior architecture.',
        specs: 'Champagne Track Finish • SS-316 • Zero View Loss'
      },
      {
        id: 'ic2',
        name: 'Total Environment Windmills',
        subPlace: 'Defence Colony',
        floor: 'Duplex Terrace Balcony',
        image: '/images/luxury-family-balcony-sunset.jpg',
        description: 'Terrace garden safety preserving natural light for indoor plants and open sky views.',
        specs: 'Paw-Safe Nylon Sheath • 400kg Breaking Resistance'
      }
    ]
  },
  {
    id: 'electronic-city',
    name: 'Electronic City & South',
    tagline: 'Phase 1 & 2 Tech Parks & High-Rise Societies',
    leadSupervisor: 'Prasad Rao (Field Technical Lead)',
    vanStatus: 'Van active in E-City Phase 1 & Neeladri Road',
    coverImage: '/images/installer-work-real.jpg',
    subPlaces: [
      'All E-City',
      'Phase 1',
      'Phase 2',
      'Neeladri Road',
      'Begur Road'
    ],
    projects: [
      {
        id: 'ec1',
        name: 'Godrej E-City',
        subPlace: 'Phase 1',
        floor: '12th Floor Balcony & Utility',
        image: '/images/installer-work-real.jpg',
        description: 'Complete balcony and utility enclosure installed in under 4 hours without any mess.',
        specs: 'Dust-Free Installation • Child Proof • 10-Yr Guarantee'
      },
      {
        id: 'ec2',
        name: 'Ajmera Infinity',
        subPlace: 'Neeladri Road',
        floor: '18th Floor High-Rise Balcony',
        image: '/images/whitefield-real-balcony.jpg',
        description: '100% pigeon deterrence and fall protection for high-rise family home.',
        specs: 'SS-316 Marine Cable • 2-Inch Safe Gap • Pigeon Proof'
      }
    ]
  }
];

export default function CityHubsDashboard({ onOpenBooking }) {
  const [activeHubId, setActiveHubId] = useState('whitefield');
  const [selectedSubPlace, setSelectedSubPlace] = useState('All Whitefield');

  const currentHub = BANGALORE_HUBS.find((hub) => hub.id === activeHubId) || BANGALORE_HUBS[0];

  const handleHubSelect = (hub) => {
    setActiveHubId(hub.id);
    setSelectedSubPlace(hub.subPlaces[0]);
  };

  // Filter projects by sub-place if not "All"
  const filteredProjects = currentHub.projects.filter((project) => {
    if (selectedSubPlace.startsWith('All')) return true;
    return project.subPlace.toLowerCase().includes(selectedSubPlace.toLowerCase());
  });

  return (
    <section id="bangalore-hubs" className="py-20 sm:py-28 bg-zinc-50/70 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>BENGALURU CITY HUBS &amp; HIGH-RISE BALCONY PROJECTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            Choose Your Bangalore Area &amp;{' '}
            <span className="text-emerald-700">See Real Completed Projects</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Click your residential area to view sub-places, verified high-rise apartment balcony installations, and today's free laser survey van status.
          </p>
        </div>

        {/* 1. Main Place Selector (Bangalore City Hubs) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {BANGALORE_HUBS.map((hub) => {
            const isSelected = hub.id === activeHubId;
            return (
              <button
                key={hub.id}
                onClick={() => handleHubSelect(hub)}
                type="button"
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-950/20 scale-102 ring-2 ring-emerald-500'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                }`}
              >
                {hub.name}
              </button>
            );
          })}
        </div>

        {/* 2. Selected Place Dossier Bar: Status, Van Dispatch & Supervisor */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {currentHub.vanStatus}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
              {currentHub.name} • {currentHub.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Assigned Senior Supervisor: <strong className="text-zinc-800">{currentHub.leadSupervisor}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/918523068882?text=${encodeURIComponent(
                `Hello Aura Grills! I live in ${currentHub.name} Bangalore and want to book a free laser balcony measurement.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
              <span>WhatsApp Survey Team</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>

        {/* 3. Sub-Places Pills Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-zinc-500">
              Select Sub-Place in {currentHub.name}:
            </span>
            <span className="text-xs text-emerald-700 font-bold">
              Showing {filteredProjects.length} Verified High-Rise Projects
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {currentHub.subPlaces.map((sub) => {
              const isActive = selectedSubPlace === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubPlace(sub)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Our Real Project Installations in This Place (Grid of Realistic High-Rise Balconies) */}
        <div id="our-projects" className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg sm:text-xl font-black text-zinc-950">
                Our Real High-Rise Balcony Installations in {currentHub.name}
              </h4>
              <p className="text-xs text-zinc-500">
                Real photos from high-rise apartments and penthouses. Tap any project to request a free measurement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:border-zinc-400 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs"
              >
                <div>
                  {/* Clean Realistic High-Rise Photo (No fake line overlays!) */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={`${project.name} Balcony Invisible Grills in Bangalore`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Floor & Subplace Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-zinc-700/60">
                      {project.subPlace}
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {project.floor}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-sm font-black drop-shadow-md flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{project.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    <div className="pt-2 border-t border-zinc-100">
                      <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-1.5 rounded-xl border border-emerald-200/80">
                        {project.specs}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="w-full py-2.5 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>Book Measurement for This Society</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
