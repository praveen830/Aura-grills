import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    areaOrSociety: '',
    installationType: initialService || 'High-Rise Balcony (10th+ Floor)',
    preferredSlot: 'Tomorrow Morning (10:00 AM - 1:00 PM)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize initialService when modal opens or initialService changes
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      setFormData(prev => ({ ...prev, installationType: initialService }));
    }
  }

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

    const text = `Hello Aura Grills! I would like to book a Free Laser Balcony Measurement.\n\n👤 Name: ${name}\n📞 WhatsApp: ${phone}\n📍 Area / Society: ${area}\n🏢 Installation Type: ${type}\n🕒 Preferred Slot: ${slot}\n\nPlease confirm technician van availability.`;
    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(text)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-apple-hover border border-black/8 p-6 sm:p-8 space-y-6 text-left"
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
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-apple-tight">
              Survey Request Dispatched!
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed tracking-apple-normal">
              We have forwarded your appointment details to our Bengaluru rapid response van. WhatsApp chat has been initiated with our senior area technician.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs tracking-apple-tight transition active:scale-98 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Apple-Style Form */
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-semibold text-emerald-800 tracking-apple-tight uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Obligation Doorstep Survey</span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-950 tracking-apple-tight">
                Book Free Laser Measurement
              </h2>
              <p className="text-xs text-zinc-500 font-normal pt-1 tracking-apple-normal">
                Our technician visits with physical SS-316 samples, track profiles, and calibrated Bosch laser telemetry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1 tracking-apple-tight uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arun Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-zinc-50 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1 tracking-apple-tight uppercase">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 85230 68882"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-zinc-50 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-700 mb-1 tracking-apple-tight uppercase">
                  Apartment / Society &amp; Area
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Prestige Shantiniketan, Whitefield"
                  value={formData.areaOrSociety}
                  onChange={(e) => setFormData(prev => ({ ...prev, areaOrSociety: e.target.value }))}
                  className="w-full bg-zinc-50 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1 tracking-apple-tight uppercase">
                    Service Type
                  </label>
                  <select
                    value={formData.installationType}
                    onChange={(e) => setFormData(prev => ({ ...prev, installationType: e.target.value }))}
                    className="w-full bg-zinc-50 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition cursor-pointer"
                  >
                    <option value="Balcony Invisible Grills (SS-316)">Balcony Invisible Grills (SS-316)</option>
                    <option value="French Window Invisible Grills">French Window Invisible Grills</option>
                    <option value="Ceiling Cloth Drying Hangers">Ceiling Cloth Drying Hangers</option>
                    <option value="Pigeon & Balcony Safety Nets">Pigeon & Balcony Safety Nets</option>
                    <option value="Bird Spikes Anti-Roosting">Bird Spikes Anti-Roosting</option>
                    <option value="Complete Safety & Utility Package">Complete Safety & Utility Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-700 mb-1 tracking-apple-tight uppercase">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredSlot: e.target.value }))}
                    className="w-full bg-zinc-50 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition cursor-pointer"
                  >
                    <option value="Today (Express Slot)">Today (Express Slot)</option>
                    <option value="Tomorrow Morning (10:00 AM - 1:00 PM)">Tomorrow Morning (10AM - 1PM)</option>
                    <option value="Tomorrow Evening (4:00 PM - 7:00 PM)">Tomorrow Evening (4PM - 7PM)</option>
                    <option value="Weekend Saturday/Sunday">Weekend Saturday/Sunday</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-apple-tight shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Doorstep Laser Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="tel:+918523068882"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 transition font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Prefer to speak immediately? Call +91 85230 68882</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
