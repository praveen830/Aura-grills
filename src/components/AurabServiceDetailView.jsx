import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  User, 
  MapPin 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function AurabServiceDetailView({ 
  service, 
  onBackToDashboard: _onBackToDashboard, 
  onOpenBooking 
}) {
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

  const problemSolutions = service.problemSolutions || [];

  // Safety Requirements & Specifications
  const safetyRequirements = [
    {
      title: "Aerospace Grade SS-316 Metallurgy",
      spec: "400kg Tensile Load Tested",
      desc: "Rustproof 2.5% Molybdenum core wire resistant to coastal moisture, wind shear, and weather corrosion."
    },
    {
      title: "Virgin UV-Transparent Sheathing",
      spec: "Anti-Cut & Anti-Scratch",
      desc: "Smooth transparent protective layer shielding children's hands, preventing scratches and cable fraying."
    },
    {
      title: "6063-T6 Heavy-Duty Aluminum Track",
      spec: "Hilti Concrete Anchors",
      desc: "Anodized alloy track fastened with German Hilti expansion bolts and dust-free vacuum drilling."
    },
    {
      title: "Dual-Harness Rigging & Tension Meter",
      spec: "Digital Calibration",
      desc: "Installed strictly by certified technicians using safety harnesses and calibrated digital tension meters."
    }
  ];

  // Auto-slide effect for Problem & Solutions carousel
  useEffect(() => {
    if (!sliderRef.current || problemSolutions.length === 0) return;
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
  }, [service.id, problemSolutions.length]);

  // Smooth horizontal scroll ONLY within the slider container
  const scrollToSlide = (index) => {
    if (!sliderRef.current || problemSolutions.length === 0) return;
    const container = sliderRef.current;
    const clampedIndex = Math.max(0, Math.min(index, problemSolutions.length - 1));
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
    if (isScrollingByCodeRef.current || !sliderRef.current || problemSolutions.length === 0) return;
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

  // Scroll to Form on Free Visit click
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  // Handle in-page survey submission (WhatsApp dispatch)
  const handleInPageBooking = (e) => {
    e.preventDefault();
    const name = formName.trim() || 'Homeowner';
    const phone = formPhone.trim() || 'Not Provided';
    const area = formArea.trim() || 'Bangalore';

    const message = `Hello Aura Grills! I want to schedule a Free Laser Site Survey for ${service.displayName}.\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n📍 Area / Society: ${area}\n🕒 Preferred Slot: ${formSlot}\n\nPlease dispatch technician van.`;
    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(message)}`;

    setIsFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="space-y-8 sm:space-y-10 animate-fadeIn pt-2">
      {/* 2. Clean Varieties Gallery in 4:5 Aspect Ratio */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {service.varieties.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Bottom subtle vignette */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Clean Floating Title Pill at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-xs sm:text-sm font-black tracking-wide uppercase text-white border border-white/20 shadow-md inline-block">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The 3 Action Buttons (Call, Free Visit, WhatsApp) in white pill style matching Reference Image 3 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-4 pb-2 px-1 max-w-md sm:max-w-lg mx-auto w-full">
          <a
            href="tel:+918523068882"
            className="py-3 px-2 rounded-2xl bg-white hover:bg-zinc-50 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md border border-zinc-200 active:scale-95 transition text-center"
            title="Call"
          >
            <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Call</span>
          </a>

          <button
            onClick={scrollToForm}
            type="button"
            className="py-3 px-2 rounded-2xl bg-white hover:bg-zinc-50 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md border border-zinc-200 active:scale-95 transition cursor-pointer text-center"
            title="Free Visit"
          >
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Free Visit</span>
          </button>

          <a
            href={`https://wa.me/918523068882?text=${encodeURIComponent(
              `Hello Aura Grills! I want to inquire about ${service.name}.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-2 rounded-2xl bg-white hover:bg-zinc-50 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md border border-zinc-200 active:scale-95 transition text-center"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* 1 or 2 Lines H1 & H2 INSERTED BELOW THE IMAGES (Requested: above text must insert below the images) */}
        <div className="text-center sm:text-left space-y-1.5 pt-2 max-w-md sm:max-w-lg mx-auto w-full">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-zinc-950 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md inline-block">
              {service.name}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight leading-tight">
            {service.displayName}
          </h1>
          <h2 className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide">
            100% Child &amp; Pigeon Safety • Certified SS-316 Installation
          </h2>
        </div>
      </div>

      {/* 4. Problems & Solutions in SLIDING VIEW CAROUSEL (HIDDEN) */}
      {/* Section hidden as requested */}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src="/images/places/survey-van-vertical.jpg"
                  alt="Aura Grills Rapid Van"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 tracking-wider border border-white/20 shadow-md">
                  Official Aura Grills Van
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h4 className="text-base sm:text-lg font-black text-zinc-950 leading-snug">
                  Doorstep Digital Laser Survey &amp; Rapid Van
                </h4>
                <ul className="space-y-2 pt-1 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>0.1mm digital laser curvature and slab alignment check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Physical SS-316 sample &amp; mounting track verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Gated community RWA elevation permission compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src="/images/places/installation-real-vertical.jpg"
                  alt="Certified Installation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 tracking-wider border border-white/20 shadow-md">
                  Certified Harness Crew
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h4 className="text-base sm:text-lg font-black text-zinc-950 leading-snug">
                  Certified High-Rise Safety Harness Installation
                </h4>
                <ul className="space-y-2 pt-1 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dual-ring safety harness protocol on 10th to 45th floors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Continuous single-cable lacing with dust-free vacuum drilling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Digital tension meter load calibration (400kg load tested)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5.5 Certified Technical Specifications Grid */}
      <div className="space-y-3 pt-4 border-t border-zinc-200">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Certified Technical Specifications</span>
          </h3>
          <p className="text-xs text-zinc-500">
            Aura Grills structural engineering and safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {safetyRequirements.map((req, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full inline-block">
                {req.spec}
              </span>
              <h4 className="text-xs font-black text-zinc-900">{req.title}</h4>
              <p className="text-[11px] text-zinc-600 leading-relaxed">{req.desc}</p>
            </div>
          ))}
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
                Enter your details to confirm a free site survey for {service.displayName}.
              </p>
            </div>

            {isFormSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Survey Dispatched!</h4>
                <p className="text-xs text-zinc-300">
                  WhatsApp chat initiated with our {service.name} technician. We will inspect your balcony with digital laser meters.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInPageBooking} className="space-y-3.5 text-left">
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
                  <span>Confirm Free Laser Survey Slot →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
