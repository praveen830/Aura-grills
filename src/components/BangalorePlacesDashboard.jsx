import React, { useState, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  HardHat, 
  CheckCircle2, 
  User, 
  MapPin, 
  Truck,
  ArrowLeft,
  ChevronRight,
  Building2
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BANGALORE_PLACES } from '../data/bangaloreHubsData';
import { AURAB_SERVICES } from '../data/aurabServicesData';
import AurabServiceDetailView from './AurabServiceDetailView';
import { Link } from '../router';

/**
 * BangalorePlacesDashboard - Apple Store / City Hub Regional Corridors
 * Modeled after Apple Store location guides with full-bleed architectural cards,
 * verified apartment high-rise installations, and doorstep rapid survey dispatch.
 */
export default function BangalorePlacesDashboard({ 
  selectedPlaceId, 
  onSelectPlace, 
  selectedServiceId,
  selectedVarietyId,
  onSelectService,
  onBackToDashboard,
  onOpenBooking 
}) {
  const selectedPlace = BANGALORE_PLACES.find((p) => p.id === selectedPlaceId);
  const selectedService = AURAB_SERVICES.find((s) => s.id === selectedServiceId);

  const formRef = useRef(null);

  // In-Page Personal Info / Free Laser Survey Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArea, setFormArea] = useState('');
  const [formSlot, setFormSlot] = useState('Today (Express Slot)');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Visual Safety & Installation Cards with Real Van and Technicians
  const safetyVisualCards = [
    {
      id: 'safety-van',
      title: "Doorstep Digital Laser Survey & Rapid Van",
      badge: "Official Aura Grills Van",
      image: "/images/places/survey-van-vertical.jpg",
      icon: Truck,
      points: [
        "0.1mm digital laser curvature and slab alignment check",
        "Physical SS-316 sample & mounting track verification",
        "Gated community RWA elevation permission compliance"
      ]
    },
    {
      id: 'safety-install',
      title: "Certified High-Rise Safety Harness Installation",
      badge: "Certified Harness Crew",
      image: "/images/places/installation-real-vertical.jpg",
      icon: HardHat,
      points: [
        "Dual-ring safety harness protocol on 10th to 45th floors",
        "Continuous single-cable lacing with dust-free vacuum drilling",
        "Digital tension meter load calibration (400kg load tested)"
      ]
    }
  ];

  const handleOpenPlace = (placeId) => {
    if (onSelectService) onSelectService(null);
    onSelectPlace(placeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  // Handle Free Laser Survey WhatsApp Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = formName.trim() || 'Homeowner';
    const phone = formPhone.trim() || 'Not Provided';
    const area = formArea.trim() || (selectedPlace ? selectedPlace.name : 'Bangalore');

    const message = `Hello Aura Grills! I want to schedule a Free Laser Site Survey.\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n📍 Area / Society: ${area}\n🕒 Preferred Slot: ${formSlot}\n\nPlease dispatch the rapid response survey van.`;
    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(message)}`;

    setIsFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  // =========================================================================
  // STATE 0: DEDICATED SERVICE PAGE VIEW
  // =========================================================================
  if (selectedService) {
    return (
      <section id="bangalore-dashboard" className="w-full pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AurabServiceDetailView 
            service={selectedService}
            selectedVarietyId={selectedVarietyId}
            onBackToDashboard={onBackToDashboard}
            onOpenBooking={onOpenBooking}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="bangalore-dashboard" className="w-full py-20 sm:py-28 md:py-32 bg-[#F5F5F7] overflow-hidden">
      
      {/* =========================================================================
          STATE 1: MAIN REGIONAL HUBS OVERVIEW
          ========================================================================= */}
      {!selectedPlace ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Apple Keynote Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-apple-sm text-[11px] font-semibold text-zinc-700 tracking-apple-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span className="uppercase tracking-wider">Bengaluru Regional Corridors</span>
            </div>

            <h2 className="text-apple-section font-semibold tracking-apple-tight text-zinc-950 leading-[1.08]">
              Securing balconies across{' '}
              <span className="text-gradient-apple-dark block sm:inline">Bengaluru's top high-rises.</span>
            </h2>

            <p className="text-apple-subhead text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Our certified survey vans operate daily with doorstep laser telemetry across Whitefield, JP Nagar, HSR Layout, Electronic City, KR Puram, and Hebbal.
            </p>
          </div>

          {/* Apple-Style Regional Location Cards (Responsive 3-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {BANGALORE_PLACES.map((place, idx) => (
              <Link
                key={place.id}
                to={`/${place.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenPlace(place.id);
                }}
                className="group relative rounded-[28px] overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-zinc-950 apple-card-surface hover:shadow-apple-hover transition-all duration-500 cursor-pointer text-left flex flex-col justify-between p-6 sm:p-7"
              >
                {/* Full-bleed high-res background image */}
                <img
                  src={place.image}
                  alt={`${place.displayName} Balcony Invisible Grills`}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />

                {/* Apple Vignettes for High-Contrast Text Legibility */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Top Badge: Van Active Status */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold tracking-apple-tight uppercase text-white border border-white/15 shadow-apple-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{place.name}</span>
                  </span>

                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-2 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-apple-tight leading-snug drop-shadow-sm">
                    {place.displayName}
                  </h3>
                  
                  <p className="text-xs text-zinc-300 font-normal leading-relaxed line-clamp-1">
                    {place.zone}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{place.stats}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      ) : (
        /* =========================================================================
           STATE 2: DEDICATED LOCATION CORRIDOR VIEW
           ========================================================================= */
        <div className="space-y-10 sm:space-y-12 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Apple-Style Breadcrumb Navigation */}
          <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-200/80">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                onBackToDashboard();
              }}
              className="inline-flex items-center gap-1.5 font-semibold text-zinc-700 hover:text-zinc-950 transition group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>All Bengaluru Corridors</span>
            </Link>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              {selectedPlace.name} Corridor
            </span>
          </div>

          {/* Location Hero Showcase (Centered Apple Card) */}
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full rounded-[28px] overflow-hidden apple-card-surface bg-zinc-950">
              <img
                src={selectedPlace.image}
                alt={`${selectedPlace.name} Balcony Invisible Grills`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Top Details */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold tracking-apple-tight uppercase text-white border border-white/15">
                  {selectedPlace.name} • Certified Division
                </span>
              </div>

              {/* Bottom Quick Action Dock Overlaid on Image */}
              <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5 z-20">
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="tel:+918523068882"
                    className="py-3 rounded-2xl bg-white/95 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-apple-sm active:scale-95 transition text-center"
                    title="Call Corridor Supervisor"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Call</span>
                  </a>

                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="py-3 rounded-2xl bg-zinc-950/95 hover:bg-black text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-apple-sm active:scale-95 transition cursor-pointer text-center"
                    title="Book Free Site Visit"
                  >
                    <Calendar className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                    <span>Free Visit</span>
                  </button>

                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(
                      `Hello Aura Grills! I am from ${selectedPlace.name} and want to inquire about balcony invisible safety grills.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-apple-sm active:scale-95 transition text-center"
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Place Heading & Sub-Localities */}
          <div className="max-w-3xl mx-auto space-y-4 text-center sm:text-left">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-950 tracking-apple-tight leading-tight">
                {selectedPlace.displayName}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed pt-1">
                {selectedPlace.zone} • {selectedPlace.stats}
              </p>
            </div>

            {/* Sub-Places / Apartment Hubs Pill Tags */}
            {selectedPlace.subPlaces && (
              <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                {selectedPlace.subPlaces.map((sub, i) => (
                  <div
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-white shadow-apple-sm text-xs text-zinc-700 font-medium"
                  >
                    <span className="font-semibold text-zinc-950">{sub.name}</span>
                    <span className="text-zinc-400 text-[11px] ml-1.5">({sub.verified})</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Featured Apartment Projects in this Corridor */}
          {selectedPlace.projects && selectedPlace.projects.length > 0 && (
            <div className="max-w-5xl mx-auto space-y-6 pt-6 border-t border-zinc-200/80">
              <div className="text-left space-y-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-apple-tight">
                  Verified Apartment Installations in {selectedPlace.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Prestige, Sobha, Brigade, and Godrej high-rises secured with certified SS-316 cables.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedPlace.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-[24px] apple-card-surface hover:shadow-apple-hover transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold drop-shadow-sm">
                          {proj.elevation}
                        </div>
                      </div>

                      <div className="p-5 space-y-2">
                        <h4 className="text-base font-semibold text-zinc-950 tracking-apple-tight">
                          {proj.name}
                        </h4>
                        <p className="text-xs text-zinc-500">
                          {proj.location}
                        </p>
                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <span className="block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80 truncate">
                        {proj.specs}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety & Real Van Cards */}
          <div className="max-w-5xl mx-auto space-y-6 pt-6 border-t border-zinc-200/80">
            <div className="text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-apple-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Certified High-Rise Installation Crew</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                Doorstep laser measurement vans equipped with Bosch optics and certified dual-ring harness crews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyVisualCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="rounded-[28px] apple-card-surface overflow-hidden hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold uppercase text-white tracking-apple-tight border border-white/15 flex items-center gap-1.5 shadow-apple-sm">
                          <Icon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{card.badge}</span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 space-y-3">
                        <h4 className="text-lg font-semibold text-zinc-950 tracking-apple-tight">
                          {card.title}
                        </h4>

                        <ul className="space-y-2 pt-1 text-xs text-zinc-600 font-medium">
                          {card.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Free Laser Site Measurement Form (Under Both) */}
          <div ref={formRef} className="max-w-2xl mx-auto pt-6 border-t border-zinc-200/80">
            <div className="apple-card-dark text-white p-6 sm:p-8 rounded-[28px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 border border-white/15 text-[10px] font-semibold uppercase tracking-apple-tight">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero Obligation • Doorstep Rapid Van</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-apple-tight">
                    Schedule Free Laser Site Measurement
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Enter your details below to confirm a technician van visit for your {selectedPlace.name} apartment.
                  </p>
                </div>

                {isFormSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-semibold text-white tracking-apple-tight">Survey Dispatched!</h4>
                    <p className="text-xs text-zinc-300">
                      WhatsApp chat initiated with our {selectedPlace.name} technician van. We will verify your balcony with laser meters.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight">
                          Resident Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                          />
                          <User className="w-4 h-4 text-zinc-500 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight">
                          WhatsApp Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="+91 85230 68882"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                          />
                          <Phone className="w-4 h-4 text-zinc-500 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight">
                          Apartment / Society Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sobha / Prestige, Tower 3"
                            value={formArea}
                            onChange={(e) => setFormArea(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                          />
                          <MapPin className="w-4 h-4 text-zinc-500 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight">
                          Preferred Survey Slot
                        </label>
                        <select
                          value={formSlot}
                          onChange={(e) => setFormSlot(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                        >
                          <option value="Today (Express Slot)">Today (Express Slot)</option>
                          <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                          <option value="Tomorrow Evening (4 PM - 7 PM)">Tomorrow Evening (4 PM - 7 PM)</option>
                          <option value="Weekend Saturday/Sunday">Weekend Saturday/Sunday</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-apple-tight shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Laser Survey Slot</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
