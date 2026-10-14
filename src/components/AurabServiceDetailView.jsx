import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  Building, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  HardHat, 
  CheckCircle2, 
  MapPin, 
  User, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function AurabServiceDetailView({ 
  service, 
  onBackToDashboard, 
  onOpenBooking 
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const isScrollingByCodeRef = useRef(false);

  // In-page Personal Info / Free Laser Survey Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formArea, setFormArea] = useState('');
  const [formSlot, setFormSlot] = useState('Today (Express Slot)');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Auto-slide effect for Problem & Solutions carousel
  useEffect(() => {
    if (!sliderRef.current || !service.problemSolutions || service.problemSolutions.length === 0) return;
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
  }, [service.id, service.problemSolutions]);

  // Smooth horizontal scroll ONLY within the slider container - NEVER causes page vertical jumping!
  const scrollToSlide = (index) => {
    if (!sliderRef.current || !service.problemSolutions || service.problemSolutions.length === 0) return;
    const container = sliderRef.current;
    const clampedIndex = Math.max(0, Math.min(index, service.problemSolutions.length - 1));
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

  const nextSlide = () => {
    if (!service.problemSolutions || service.problemSolutions.length === 0) return;
    const nextIdx = (activeSlide + 1) % service.problemSolutions.length;
    scrollToSlide(nextIdx);
  };

  const prevSlide = () => {
    if (!service.problemSolutions || service.problemSolutions.length === 0) return;
    const prevIdx = (activeSlide - 1 + service.problemSolutions.length) % service.problemSolutions.length;
    scrollToSlide(prevIdx);
  };

  // Passive horizontal scroll listener to sync active dot indicator as user swipes
  const handleSliderScroll = () => {
    if (isScrollingByCodeRef.current || !sliderRef.current || !service.problemSolutions) return;
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

  // Handle in-page survey submission (WhatsApp dispatch)
  const handleInPageBooking = (e) => {
    e.preventDefault();
    const name = formName.trim() || 'Homeowner';
    const phone = formPhone.trim() || 'Not Provided';
    const area = formArea.trim() || 'Bangalore';

    const message = `Hello Aurab Grills! I want to schedule a Free Laser Survey for ${service.displayName}.\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n📍 Area / Society: ${area}\n🕒 Preferred Slot: ${formSlot}\n\nPlease confirm technician survey van availability.`;
    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(message)}`;

    setIsFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="space-y-8 sm:space-y-12 animate-fadeIn pt-2">
      
      {/* 1. Clean Back Navigation & Service Corridor Pill */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
        <button
          onClick={onBackToDashboard}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-700 hover:text-emerald-600 transition cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 text-emerald-600" />
          <span>Back to All Services &amp; Dashboard</span>
        </button>
        <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs">
          {service.badge}
        </span>
      </div>

      {/* Service Header Info */}
      <div className="space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Aurab Architectural Specialty</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight">
          {service.displayName}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-2xl leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* =========================================================================
          SECTION 1: THE 4 TO 6 VARIETIES / REAL IMAGE GALLERY
          User requirement: "ఆ ఇమేజ్ పైన బటన్స్ ఎందుకు... అవేమీ అవసరం లేదు మనకి... జస్ట్ ఇమేజ్ స్క్రోల్ అవుతూ ఉండాలి"
          ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-100 pb-3">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{service.name} Architectural Gallery</span>
            </h2>
            <p className="text-xs text-zinc-500">
              Real high-rise balcony photography and installation varieties
            </p>
          </div>
          <span className="text-xs font-bold text-zinc-400 font-mono">
            {service.varieties.length} Verified Photos
          </span>
        </div>

        {/* Responsive Grid of Clean Variety Images in 4:5 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.varieties.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 group"
            >
              {/* Variety Image Container in 4:5 Aspect Ratio - Clean, No Badges, No Overlaid Buttons */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Bottom subtle vignette */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

                {/* Clean Floating Title Pill at Bottom - Clean and Uncluttered */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-xs sm:text-sm font-black tracking-wide uppercase text-white border border-white/20 shadow-md inline-block">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: PROBLEMS & SOLUTIONS CAROUSEL (Smooth Auto-Slide, Free Vertical Scroll)
          ========================================================================= */}
      {service.problemSolutions && service.problemSolutions.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-zinc-200">
          {/* Clean Header without Counter & Buttons */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                Problems &amp; Solutions for {service.name}
              </h2>
              <p className="text-xs text-zinc-500">
                Key safety challenges solved by Aurab engineering • Auto-showcase
              </p>
            </div>
          </div>

          {/* Sliding Cards Track - Smooth auto-slide, completely free vertical page scrolling */}
          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 pt-1"
          >
            {service.problemSolutions.map((sol, idx) => {
              const isActive = activeSlide === idx;
              return (
                <div
                  key={sol.id}
                  onClick={() => scrollToSlide(idx)}
                  className={`snap-center shrink-0 w-[78vw] sm:w-[300px] lg:w-[320px] rounded-3xl border transition-all duration-300 bg-white p-3 shadow-md flex flex-col justify-between cursor-pointer select-none ${
                    isActive
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-lg'
                      : 'border-zinc-200 hover:border-zinc-300 opacity-95'
                  }`}
                >
                  {/* Photo in EXACT Uniform 4:5 Aspect Ratio */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-950">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 border border-white/20 tracking-wider shadow-md">
                      {sol.badge}
                    </span>
                  </div>

                  <div className="pt-3 pb-1 space-y-1.5">
                    <h3 className="text-sm sm:text-base font-black text-zinc-950 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {sol.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {service.problemSolutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                type="button"
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx ? 'w-6 bg-emerald-600' : 'w-2 bg-zinc-300'
                }`}
                aria-label={`Slide to solution ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 3: OUR PROJECTS / COMPLETED INSTALLATIONS
          ========================================================================= */}
      {service.projects && service.projects.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-zinc-200">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
              Verified Project Installations
            </h2>
            <p className="text-xs text-zinc-500">
              High-rise balcony installations completed by Aurab teams across Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl border border-zinc-200 bg-white overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-zinc-300 transition shadow-xs"
              >
                <div>
                  {/* Project Real Balcony Photo in 4:5 Aspect Ratio */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                      {proj.elevation}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-zinc-950 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{proj.name}</span>
                    </h3>
                    <p className="text-xs text-zinc-500">
                      📍 {proj.location}
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 grid grid-cols-3 gap-2">
                  <a
                    href="tel:+918523068882"
                    className="py-2 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-xs text-center active:scale-95"
                    title="Call"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Call</span>
                  </a>

                  <a
                    href={`https://wa.me/918523068882?text=${encodeURIComponent(
                      `Hello Aurab Grills! I am interested in ${service.name} like ${proj.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-xs text-center active:scale-95"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center justify-center gap-1 shadow-xs cursor-pointer text-center active:scale-95"
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
      )}

      {/* =========================================================================
          SECTION 5: PERSONAL INFO / FREE LASER SURVEY BOOKING FORM
          User requirement: "దాని కింద పర్సనల్ ఇన్ఫో. ఇలా ఉండాల"
          ========================================================================= */}
      <div className="pt-4 border-t border-zinc-200">
        <div className="rounded-3xl bg-zinc-950 text-white p-6 sm:p-10 border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center sm:text-left space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Sales Pressure • Same-Day Survey</span>
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Personal Info &amp; Free Laser Site Measurement
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Enter your details to receive an instant WhatsApp confirmation from our rapid response survey van covering your Bengaluru apartment.
              </p>
            </div>

            {isFormSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Survey Dispatched!</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  WhatsApp chat initiated with our {service.name} technician. We will inspect your balcony with laser precision meters and genuine material samples.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInPageBooking} className="space-y-4 text-left">
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
                      Apartment / Bangalore Society
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prestige Shantiniketan, Whitefield"
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
                  <span>Submit Personal Info &amp; Dispatch Survey Slot →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
