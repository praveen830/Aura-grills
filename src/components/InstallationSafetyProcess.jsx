import React from 'react';
import { 
  Ruler, 
  ShieldCheck, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Truck, 
  Award, 
  HardHat 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function InstallationSafetyProcess({ onOpenBooking, placeName }) {
  const currentArea = placeName || 'Bangalore';

  return (
    <section className="space-y-6 pt-4 pb-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-zinc-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-black uppercase tracking-wider mb-2">
            <HardHat className="w-3.5 h-3.5 text-emerald-600" />
            <span>Installation Process &amp; Safety Requirements</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-950 tracking-tight">
            How We Install &amp; Safety Measurements
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mt-1">
            Certified harness technicians, digital laser precision measurement, and aerospace-grade SS-316 materials across {currentArea}.
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          type="button"
          className="self-start sm:self-auto px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 shrink-0"
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>Book Free Laser Survey</span>
        </button>
      </div>

      {/* 2 Featured Visual Process Cards (Van Survey & High-Rise Installation) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Official Rapid Survey Van & Laser Measurement */}
        <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group">
          <div>
            {/* Real Branded Service Van Photo */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/places/survey-van-vertical.jpg"
                alt="Aurab Grills Rapid Survey Van and Technician in Bangalore"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

              {/* Status Badge */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 tracking-wider border border-white/20 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rapid Survey Van • Within 90 Mins</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none text-white">
                <span className="text-xs font-extrabold uppercase tracking-wide bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Step 01: Doorstep Laser Measurement &amp; Sample Check
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-3">
              <h4 className="text-base sm:text-lg font-black text-zinc-950 leading-snug">
                Doorstep Digital Laser Survey &amp; Physical Sample Verification
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Our mobile rapid response van arrives directly at your society in {currentArea}. Senior engineers verify balcony curvature, railing height, and slab density using digital laser rangefinders with zero obligation.
              </p>

              {/* Safety Measurement Points */}
              <ul className="space-y-1.5 pt-1 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>0.1mm digital laser alignment &amp; curvature calibration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physical SS-316 marine cable track inspection on the spot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gated society RWA elevation permission compliance assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons: Call, WhatsApp, Free Visit (NO numbers shown) */}
          <div className="p-4 pt-0 grid grid-cols-3 gap-2">
            <a
              href="tel:+918523068882"
              className="py-2.5 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
              title="Call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/918523068882?text=${encodeURIComponent(
                `Hello Aurab Grills! I want to schedule a rapid van survey for invisible grills in ${currentArea}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center justify-center gap-1 shadow-xs cursor-pointer text-center active:scale-95"
              title="Free Visit"
            >
              <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="truncate">Free Visit</span>
            </button>
          </div>
        </div>

        {/* Card 2: Skilled Technicians High-Rise Installation & Digital Tensioning */}
        <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-xl hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group">
          <div>
            {/* Real Balcony Installation Work Photo */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/places/installation-real-vertical.jpg"
                alt="Skilled technicians installing invisible safety grills on high rise balcony"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

              {/* Status Badge */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-black uppercase text-emerald-400 tracking-wider border border-white/20 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>400kg Breaking Resistance • 10-Yr Warranty</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none text-white">
                <span className="text-xs font-extrabold uppercase tracking-wide bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Step 02: Harness Installation &amp; Tension Calibration
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-3">
              <h4 className="text-base sm:text-lg font-black text-zinc-950 leading-snug">
                Precision Aluminum Tracks, Hilti Anchors &amp; SS-316 Cables
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                T6 extruded aluminum tracks are anchored with dust-free vacuum drilling. Marine-grade SS-316 cables (2-inch gap) are threaded in a single continuous line and digitally calibrated to 400kg tensile load.
              </p>

              {/* Safety Specification Points */}
              <ul className="space-y-1.5 pt-1 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified 400kg tensile break load (high-altitude windproof)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Virgin SS-316 metallurgy with anti-rust nylon polymer coat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physical pull-test and stamped 10-year warranty card handover</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons: Call, WhatsApp, Free Visit (NO numbers shown) */}
          <div className="p-4 pt-0 grid grid-cols-3 gap-2">
            <a
              href="tel:+918523068882"
              className="py-2.5 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
              title="Call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/918523068882?text=${encodeURIComponent(
                `Hello Aurab Grills! I want to inquire about balcony invisible grills installation and safety requirements in ${currentArea}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center justify-center gap-1 shadow-xs cursor-pointer text-center active:scale-95"
              title="Free Visit"
            >
              <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="truncate">Free Visit</span>
            </button>
          </div>
        </div>

      </div>

      {/* Safety Metallurgy & Requirements Grid Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-1">
          <div className="text-xs sm:text-sm font-black text-zinc-950">SS-316 Marine</div>
          <div className="text-[11px] text-zinc-500 font-medium">2.5% Molybdenum Rustproof</div>
        </div>
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-1">
          <div className="text-xs sm:text-sm font-black text-zinc-950">400kg Breaking Load</div>
          <div className="text-[11px] text-zinc-500 font-medium">High-Altitude Windproof</div>
        </div>
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-1">
          <div className="text-xs sm:text-sm font-black text-zinc-950">50mm Safe Gap</div>
          <div className="text-[11px] text-zinc-500 font-medium">100% Toddler &amp; Bird Safe</div>
        </div>
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-1">
          <div className="text-xs sm:text-sm font-black text-zinc-950">10-Yr Guarantee</div>
          <div className="text-[11px] text-zinc-500 font-medium">Written Stamped Certificate</div>
        </div>
      </div>
    </section>
  );
}
