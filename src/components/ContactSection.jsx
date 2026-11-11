import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Truck, 
  Calendar, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const SLOTS = [
  { id: 'today', label: 'Today Express', highlight: true, note: 'Same-day van dispatch' },
  { id: 'tomorrow-am', label: 'Tomorrow 10AM–1PM', highlight: false, note: 'Morning slot' },
  { id: 'tomorrow-pm', label: 'Tomorrow 4PM–7PM', highlight: false, note: 'Evening slot' },
  { id: 'weekend', label: 'Weekend Slot', highlight: false, note: 'Saturday / Sunday' }
];

const SERVICES_LIST = [
  'SS-316 Invisible Safety Grills (Balcony)',
  'Ceiling Cloth Drying Hangers',
  'Pigeon & Balcony Safety Nets',
  'Stainless Steel Bird Spikes',
  'French Window Invisible Grills',
  'Toddler & Pet Balcony Shields',
  'Full Balcony Safety + Utility Combo'
];

const BANGALORE_HUBS = [
  'Whitefield & ITPL',
  'Sarjapur & Bellandur ORR',
  'HSR Layout & Koramangala',
  'JP Nagar & Jayanagar',
  'Electronic City Phases 1 & 2',
  'Hebbal & Manyata Tech Park',
  'Yelahanka & Thanisandra',
  'RR Nagar & Kanakapura Road'
];

/**
 * Section 05 (#contact) - Apple Keynote Dark Grade Survey Dispatch
 */
export default function ContactSection() {
  const [selectedSlot, setSelectedSlot] = useState('Today Express');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [service, setService] = useState('SS-316 Invisible Safety Grills (Balcony)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    const genTicket = `AG-SRV-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(genTicket);
    setIsSubmitted(true);

    const message = `*AURA GRILLS — EXPRESS SURVEY TICKET: ${genTicket}*\n\n` +
      `👤 *Customer Name:* ${name || 'Homeowner'}\n` +
      `📞 *Mobile Phone:* ${cleanPhone || phone || 'Not specified'}\n` +
      `🏢 *Apartment / Locality:* ${locality || 'Bengaluru'}\n` +
      `🛠️ *Service Required:* ${service}\n` +
      `🕒 *Preferred Slot:* ${selectedSlot}\n\n` +
      `📍 *Dispatch Request:* Please confirm van route and technician arrival for free doorstep laser survey.`;

    const whatsappUrl = `https://wa.me/918523068882?text=${encodeURIComponent(message)}`;

    // Open WhatsApp ticket dispatch
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Apple Keynote Section Header */}
        <div className="text-left max-w-3xl space-y-4 pb-4 border-b border-zinc-900">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-emerald-400 tracking-apple-tight uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Truck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Express Van Dispatch • Bengaluru Helpline</span>
          </div>

          <h2 className="text-apple-section font-semibold text-white tracking-apple-tight leading-[1.08]">
            Schedule your free doorstep{' '}
            <span className="text-gradient-silver block sm:inline">laser survey today.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-400 font-normal leading-relaxed max-w-2xl">
            Our certified engineering vans carry Bosch laser telemetry, physical SS-316 samples, and mounting track profiles across Bengaluru.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* =========================================================================
              LEFT COLUMN: DIRECT HELPLINE, WHATSAPP DESK & SERVICE HUBS
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Helpline Card */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-zinc-900/80 border border-white/10 shadow-apple-card space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      Direct Helpline
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white tracking-apple-tight">
                      +91 85230 68882
                    </div>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Open 7 Days a Week • 8:00 AM – 9:00 PM</span>
              </div>

              <a
                href="tel:+918523068882"
                className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-2 transition active:scale-95 text-center shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Helpline Directly</span>
              </a>
            </div>

            {/* Instant WhatsApp Desk Card */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-zinc-900/80 border border-white/10 shadow-apple-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                    Instant WhatsApp Desk
                  </div>
                  <div className="text-sm font-bold text-white tracking-apple-tight">
                    Photo Reviews &amp; Quick Quotations
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed tracking-apple-normal">
                Share balcony photos or floor plans with our engineers for immediate price estimations and society RWA clearance checks.
              </p>

              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20would%20like%20to%20get%20a%20quick%20quote%20for%20balcony%20invisible%20safety%20grills%20in%20Bengaluru."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-apple-tight flex items-center justify-center gap-2 transition shadow-md active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp (Avg Reply &lt; 3 Min)</span>
              </a>
            </div>

            {/* Service Coverage Hub Badges */}
            <div className="p-6 rounded-[28px] bg-zinc-900/50 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-300 tracking-apple-tight">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Bengaluru Service Coverage Hubs</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">4 ACTIVE VANS</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {BANGALORE_HUBS.map((hub, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-zinc-800/90 border border-white/5 text-[10px] font-medium text-zinc-300"
                  >
                    {hub}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Same-Day Laser Van Survey Available across all corridors</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: APPLE-STYLE EXPRESS SURVEY BOOKING FORM
              ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[28px] bg-zinc-900/90 border border-white/10 shadow-apple-card relative overflow-hidden">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-apple-tight">
                    Confirm Doorstep Survey Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 pt-1 tracking-apple-normal leading-relaxed">
                    Zero obligation. Our van visits with physical SS-316 samples, track profiles, and calibrated Bosch laser meters.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-apple-tight">
                      Ticket Generated: {ticketId}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                      WhatsApp dispatch ticket initiated. Our technician van route supervisor will confirm your survey slot within 5 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Slot Selector */}
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 mb-2 tracking-apple-tight uppercase">
                        Select Preferred Time Slot
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                        {SLOTS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSelectedSlot(s.label)}
                            className={`p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer ${
                              selectedSlot === s.label
                                ? 'bg-emerald-950/90 border-emerald-500 text-white shadow-xs'
                                : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                            }`}
                          >
                            <div className="font-semibold text-white">{s.label}</div>
                            <div className="text-[10px] text-zinc-400 pt-0.5">{s.note}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight uppercase">
                          Resident Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Arun Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight uppercase">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 85230 68882"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight uppercase">
                          Apartment / Society Name &amp; Area
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Prestige Shantiniketan, Whitefield"
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1 tracking-apple-tight uppercase">
                          Service Required
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                        >
                          {SERVICES_LIST.map((srv, idx) => (
                            <option key={idx} value={srv} className="bg-zinc-900 text-white">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-apple-tight shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Laser Survey Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </form>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
