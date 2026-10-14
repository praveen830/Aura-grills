import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    areaOrSociety: '',
    installationType: 'High-Rise Balcony (10th+ Floor)',
    preferredSlot: 'Tomorrow Morning (10:00 AM - 1:00 PM)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSubmitted(false);
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim() || 'Homeowner';
    const phone = formData.phone.trim() || 'Not Provided';
    const area = formData.areaOrSociety.trim() || 'Bangalore';
    const type = formData.installationType;
    const slot = formData.preferredSlot;

    const text = `Hello Aurab Grills! I would like to book a Free Laser Balcony Measurement.\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n📍 Area / Society: ${area}\n🏢 Installation Type: ${type}\n🕒 Preferred Slot: ${slot}\n\nPlease confirm technician van availability.`;
    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(text)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl border border-zinc-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
              Survey Request Dispatched!
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              We have forwarded your appointment details to our Bangalore rapid response van. WhatsApp chat has been initiated with our senior area technician.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-zinc-800 transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Frictionless Single-Screen Booking Form */
          <>
            <div className="space-y-1.5 pr-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Free Doorstep Laser Survey • 0% Obligation</span>
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                Schedule Free Site Measurement
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Our certified technician visits your balcony with digital laser rangefinders and physical SS-316 samples. Zero sales pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Field 1: Resident Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-bold text-zinc-700 mb-1">
                    Resident Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arun Nair"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-3.5 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold text-zinc-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 85230 68882"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-3.5 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Field 2: Bangalore Area / Society Name */}
              <div>
                <label className="block text-[11px] uppercase font-bold text-zinc-700 mb-1 flex items-center justify-between">
                  <span>Bangalore Area / Society Name</span>
                  <span className="text-[10px] text-zinc-400 font-normal">e.g. Whitefield, HSR, Sobha, Prestige</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prestige Shantiniketan, Whitefield"
                    value={formData.areaOrSociety}
                    onChange={(e) => setFormData({ ...formData, areaOrSociety: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-9 pr-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                  <MapPin className="w-4 h-4 text-emerald-600 absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Installation Type & Preferred Visit Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-bold text-zinc-700 mb-1">
                    Installation Type
                  </label>
                  <select
                    value={formData.installationType}
                    onChange={(e) => setFormData({ ...formData, installationType: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-3 py-3 text-xs text-zinc-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition cursor-pointer"
                  >
                    <option value="High-Rise Balcony (10th+ Floor)">High-Rise Balcony (10th+ Floor)</option>
                    <option value="Curved Balcony Profile">Curved Balcony Profile</option>
                    <option value="Floor-to-Ceiling French Windows">Floor-to-Ceiling Windows</option>
                    <option value="Duplex Terrace & Staircase">Duplex Terrace &amp; Staircase</option>
                    <option value="Multiple Balconies (Whole Flat)">Multiple Balconies (Whole Flat)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold text-zinc-700 mb-1">
                    Preferred Visit Slot
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-3 py-3 text-xs text-zinc-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition cursor-pointer"
                  >
                    <option value="Today (Express Slot)">Today (Express Slot)</option>
                    <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                    <option value="Tomorrow Evening (4 PM - 7 PM)">Tomorrow Evening (4 PM - 7 PM)</option>
                    <option value="Upcoming Weekend Slot">Upcoming Weekend Slot</option>
                  </select>
                </div>
              </div>

              {/* Instant WhatsApp Dispatch Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-101 active:scale-98 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Confirm Appointment on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Call Fallback */}
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>Prefer to speak with an engineer?</span>
                <a
                  href="tel:+918523068882"
                  className="px-3.5 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold transition flex items-center gap-1.5 active:scale-95 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call</span>
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
