import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Truck, 
  Calendar, 
  CheckCircle2, 
  Send, 
  Building2, 
  ShieldCheck, 
  Sparkles,
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
 * Section 06 (#contact) - Express Survey Van Dispatch & Direct Helpline
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
    }, 600);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2 pb-2 border-b border-zinc-800/90">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] sm:text-[11px] font-black text-emerald-400 uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-emerald-400" />
            <span>05 • EXPRESS SURVEY VAN DISPATCH &amp; DIRECT HELPLINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Schedule Your Free Doorstep Laser Measurement Today
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
            Our certified engineering vans are equipped with Bosch laser telemetry, physical SS-316 cable cross-sections, and sample track profiles across Bengaluru.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* =========================================================================
              LEFT COLUMN: DIRECT CALL CARD, WHATSAPP DESK & SERVICE COVERAGE HUBS
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Helpline Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      IMMEDIATE HELPLINE
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">
                      +91 85230 68882
                    </div>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1 border-t border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Open 7 Days a Week • 8:00 AM – 9:00 PM (Direct Calling)</span>
              </div>

              <a
                href="tel:+918523068882"
                className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call Now</span>
              </a>
            </div>

            {/* Instant WhatsApp Desk Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                    INSTANT WHATSAPP DESK
                  </div>
                  <div className="text-sm font-black text-white">
                    Photo Reviews &amp; Quick Quotations
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Send balcony photos or floor plans to our engineers for immediate price estimations and society RWA clearance checks.
              </p>

              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20would%20like%20to%20get%20a%20quick%20quote%20for%20balcony%20invisible%20safety%20grills%20in%20Bengaluru."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-[#25D366]/20 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp (Avg Reply &lt; 3 Min)</span>
              </a>
            </div>

            {/* Service Coverage Hub Badges */}
            <div className="p-5 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-black text-zinc-300">
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
                    className="px-2.5 py-1 rounded-xl bg-zinc-800/90 border border-zinc-700/60 text-[10px] font-bold text-zinc-300"
                  >
                    {hub}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Same-Day Laser Van Survey Available across all zones</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: EXPRESS DOORSTEP SURVEY BOOKING FORM
              ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                      BOOKING CONFIRMED • {ticketId}
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      Express Survey Ticket Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed pt-1">
                      Our dispatch desk is routing your ticket to the nearest field van in Bengaluru. Opening WhatsApp for direct instant confirmation...
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:+918523068882"
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs flex items-center justify-center gap-2 transition"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Call Dispatch Desk</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition cursor-pointer"
                    >
                      Book Another Survey
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Express Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 pb-1 border-b border-zinc-800">
                    <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Instant Laser Van Request</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      Express Doorstep Survey Booking
                    </h3>
                  </div>

                  {/* 1-Tap Time Slot Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>1. Select Preferred Time Slot:</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot.label;
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setSelectedSlot(slot.label)}
                            className={`p-2.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                                : 'bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              {slot.highlight && (
                                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-400'} animate-pulse shrink-0`} />
                              )}
                              <span className="text-[11px] font-black leading-tight truncate">
                                {slot.label}
                              </span>
                            </div>
                            <div className={`text-[9.5px] pt-1 truncate ${isSelected ? 'text-emerald-100' : 'text-zinc-400'}`}>
                              {slot.note}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Customer Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300">
                        Your Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-2xl bg-zinc-800/90 border border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 text-white text-xs placeholder:text-zinc-500 outline-none transition"
                      />
                    </div>

                    {/* 10-Digit Mobile */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300">
                        10-Digit Mobile Phone:
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="85230 68882"
                          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-zinc-800/90 border border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 text-white text-xs placeholder:text-zinc-500 outline-none transition font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Apartment / Locality */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Apartment Society &amp; Locality in Bengaluru:</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      placeholder="e.g. Prestige Shantiniketan, Whitefield / Sobha Dream Acres"
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-800/90 border border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 text-white text-xs placeholder:text-zinc-500 outline-none transition"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300">
                      Service System Required:
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-800/90 border border-zinc-700 focus:border-emerald-400 focus:bg-zinc-800 text-white text-xs outline-none transition cursor-pointer"
                    >
                      {SERVICES_LIST.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-zinc-900 text-white py-1">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl shadow-emerald-600/30 active:scale-95 cursor-pointer"
                    >
                      <Truck className="w-4 h-4" />
                      <span>Confirm &amp; Dispatch Van Survey Ticket</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-[11px] text-zinc-400 text-center pt-2">
                      🔒 100% Free Doorstep Survey • Zero Sales Pressure • Official RWA Documentation
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
