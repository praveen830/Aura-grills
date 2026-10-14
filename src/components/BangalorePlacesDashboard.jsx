import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  ChevronLeft, 
  ShieldCheck, 
  HardHat, 
  Sparkles, 
  Flame, 
  Sun, 
  CheckCircle2, 
  User, 
  MapPin, 
  Truck,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
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
  const selectedPlace = BANGALORE_PLACES.find((p) => p.id === selectedPlaceId);
  const selectedService = AURAB_SERVICES.find((s) => s.id === selectedServiceId);

  // Sliding Carousel State for Problems & Solutions
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const isScrollingByCodeRef = useRef(false);
  const formRef = useRef(null);

  // In-Page Personal Info / Free Laser Survey Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArea, setFormArea] = useState('');
  const [formSlot, setFormSlot] = useState('Today (Express Slot)');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // 4 Core Problem & Solution items in Sliding View
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

  // Visual Safety & Installation Cards with Real Van and Technicians (NOT plain text!)
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

  const handleOpenService = (serviceId) => {
    onSelectPlace(null);
    if (onSelectService) onSelectService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to Form on Free Visit click
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  // Smooth horizontal scroll for Problems & Solutions
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
    if (!selectedPlaceId || !sliderRef.current) return;
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
  }, [selectedPlaceId]);

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
      {/* =========================================================================
          STATE 1: MAIN DASHBOARD VIEW (MATCHING REFERENCE IMAGE 2)
          - Full Screen Mobile View: Edge-to-edge, full height below header
          - At the bottom of image:
            Left: Dark pill [ 📞 CALL +91 85230 68882 ]
            Right: Circular green WhatsApp button [ 💬 ]
          - Place name tag, tap opens 4:5 place detail view
          - Smooth snap scroll between the 6 Bangalore places
          ========================================================================= */}
      {!selectedPlace ? (
        <div className="space-y-8 sm:space-y-16">
          
          {/* =========================================================================
              THE 6 MAIN BANGALORE PLACES (Full Screen Mobile View with All Previous Features)
              - Full mobile viewport height: h-[calc(100dvh-4rem)]
              - Smooth, natural scroll through all 6 places on mobile
              - Name badge placed at the bottom border of the image (above display name)
              - All previous features preserved: stats badge, display name, zone & tagline, tap link
              ========================================================================= */}
          <div className="w-full space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {BANGALORE_PLACES.map((place) => (
              <div
                key={place.id}
                onClick={() => handleOpenPlace(place.id)}
                className="group relative w-full h-[calc(100dvh-4rem)] sm:h-auto sm:aspect-[9/14] sm:rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 cursor-pointer"
              >
                {/* Full-bleed vertical photo */}
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle top & bottom gradients for elegant contrast */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

                {/* Bottom Border: Place Name & Info (Requested: name kindha unta baguthundhi) */}
                <div className="absolute inset-x-4 bottom-22 sm:bottom-6 z-20 space-y-2 pointer-events-none">
                  {/* Name badge at bottom border alongside stats */}
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-xs sm:text-sm font-black tracking-wider uppercase text-white border border-white/25 shadow-lg inline-block">
                      {place.name}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md">
                      {place.stats}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                    {place.displayName}
                  </h2>
                  <p className="text-xs text-zinc-300 line-clamp-1 font-medium drop-shadow-xs">
                    {place.zone} • {place.tagline}
                  </p>
                  <div className="pt-0.5 flex items-center gap-1.5 text-emerald-400 text-xs font-extrabold">
                    <span>Tap to Inspect Balcony Solutions &amp; Free Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              SECTION: 4 CORE BALCONY SERVICES
              ========================================================================= */}
          <div id="balcony-services" className="pt-2 space-y-5 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  Balcony Safety &amp; Utility Services
                </h2>
                <p className="text-xs text-zinc-500">
                  Bangalore certified safety solutions with 10-year manufacturer warranty
                </p>
              </div>
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
                Bangalore Certified
              </span>
            </div>

            {/* 4 Services Grid in Clean Mobile View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {AURAB_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => handleOpenService(srv.id)}
                  className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-zinc-950 cursor-pointer border border-zinc-200 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <img
                    src={srv.image}
                    alt={srv.displayName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Service Info at Bottom (Name at bottom, not covering top of image) */}
                  <div className="absolute inset-x-4 bottom-5 z-20 space-y-1.5 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] sm:text-xs font-black tracking-wide uppercase text-white border border-white/20 shadow-md inline-block">
                      {srv.name}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-sm">
                      {srv.displayName}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-1 font-medium">
                      {srv.tagline || 'Engineered Balcony Safety'}
                    </p>
                    <div className="pt-0.5 flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                      <span>View Service Details &amp; Models</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* =========================================================================
           STATE 2: DEDICATED PLACE PAGE VIEW (EXACT LOOK OF REFERENCE IMAGE 3)
           Sequence:
           1. Clean Minimal Back Navigation
           2. Banner Image in EXACT 4:5 Aspect Ratio (Requested: "update 4:5 images")
           3. The 3 White Pill Buttons [ Contact Us / Call ] [ Free Visit ] [ WhatsApp ] 
              OVERLAID ON THE BOTTOM OF THE 4:5 IMAGE (Exact look of Reference Image 3)
           4. Problems & Solutions in Sliding View
           5. Real Visual Safety Cards with Van & Technicians (NOT plain text!)
           6. Personal Info & Free Laser Site Measurement Form (UNDER BOTH)
           ========================================================================= */
        <div className="space-y-6 animate-fadeIn pt-2 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* 1. Main Place Banner: EXACT 4:5 RATIO WITH BUTTONS ON IMAGE (Exact Look of Reference Image 3) */}
          <div className="w-full max-w-md sm:max-w-xl mx-auto">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/50 bg-zinc-950">
              <img
                src={selectedPlace.image}
                alt={`${selectedPlace.name} Balcony Invisible Grills`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Bottom Vignette for Buttons Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* 2. The 3 White Glass Pill Buttons ON THE BOTTOM OF THE 4:5 IMAGE (Reference Image 3) */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-20">
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  {/* Button 1: Call */}
                  <a
                    href="tel:+918523068882"
                    className="py-3 px-2 rounded-2xl bg-white/95 hover:bg-white text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xl border border-white/80 active:scale-95 transition text-center"
                    title="Call"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Call</span>
                  </a>

                  {/* Button 2: Free Visit */}
                  <button
                    onClick={scrollToForm}
                    type="button"
                    className="py-3 px-2 rounded-2xl bg-white/95 hover:bg-white text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xl border border-white/80 active:scale-95 transition cursor-pointer text-center"
                    title="Free Visit"
                  >
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Visit</span>
                  </button>

                  {/* Button 3: WhatsApp */}
                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(
                      `Hello Aura Grills! I am from ${selectedPlace.name} and want to inquire about balcony invisible safety grills.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-2 rounded-2xl bg-white/95 hover:bg-white text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xl border border-white/80 active:scale-95 transition text-center"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Place Name Badge & 1 or 2 Lines H1 & H2 INSERTED BELOW THE IMAGE (Requested: name kindha unta baguthundhi) */}
          <div className="text-center sm:text-left space-y-1.5 pt-2 max-w-md sm:max-w-xl mx-auto w-full">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-zinc-950 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md inline-block">
                {selectedPlace.name}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight leading-tight">
              {selectedPlace.displayName}
            </h1>
            <h2 className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide">
              {selectedPlace.tagline} • Certified SS-316
            </h2>
          </div>

          {/* 4. Problems & Solutions in SLIDING VIEW CAROUSEL (Auto Sliding Option) */}
          <div className="space-y-3 pt-4 border-t border-zinc-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                  Key Balcony Safety Solutions
                </h3>
                <p className="text-xs text-zinc-500">
                  High-rise apartment balcony protection • Auto-sliding showcase
                </p>
              </div>
            </div>

            {/* Multi-Card Horizontal Sliding Track */}
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
                    className={`snap-center shrink-0 w-[80vw] sm:w-[320px] rounded-3xl border transition-all duration-300 bg-white p-3.5 shadow-md flex flex-col justify-between cursor-pointer select-none ${
                      isActive
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-lg'
                        : 'border-zinc-200 hover:border-zinc-300 opacity-95'
                    }`}
                  >
                    {/* Photo in Uniform 4:5 Aspect Ratio */}
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

          {/* 5. Real Visual Safety Cards with Van & Technicians (NOT plain text!) */}
          <div className="space-y-4 pt-4 border-t border-zinc-200">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Safety Measurements &amp; Certified Installation</span>
              </h3>
              <p className="text-xs text-zinc-500">
                Real doorstep van laser measurement and certified high-rise harness installations.
              </p>
            </div>

            {/* 2 Visual Cards with Real Photography of Van & Technicians */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyVisualCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Real Photo in 4:5 Aspect Ratio */}
                      <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                        {/* Top Badge */}
                        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 tracking-wider border border-white/20 flex items-center gap-1.5 shadow-md">
                          <Icon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{card.badge}</span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-5 space-y-3">
                        <h4 className="text-base sm:text-lg font-black text-zinc-950 leading-snug">
                          {card.title}
                        </h4>

                        <ul className="space-y-2 pt-1 text-xs text-zinc-700">
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

          {/* 6. Personal Info & Free Laser Site Measurement Form (UNDER BOTH) */}
          <div ref={formRef} className="pt-4 border-t border-zinc-200">
            <div className="rounded-3xl bg-zinc-950 text-white p-6 sm:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-xl mx-auto space-y-5">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero Obligation • Doorstep Rapid Van</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
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
                    <h4 className="text-base font-bold text-white">Survey Dispatched!</h4>
                    <p className="text-xs text-zinc-300">
                      WhatsApp chat initiated with our {selectedPlace.name} technician van. We will verify your balcony with laser meters.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
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
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
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
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
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
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
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
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Laser Survey Slot →</span>
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
