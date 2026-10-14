import React, { useState } from 'react';
import { MapPin, Building, ShieldCheck, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BangaloreZones({ onOpenBooking }) {
  const [activeZone, setActiveZone] = useState('All Bangalore');

  const zoneData = {
    'All Bangalore': {
      title: 'Citywide High-Rise Architectural Coverage',
      coverage: '3 Rapid Response Laser Survey Vans active across all corridors today',
      supervisor: 'Suresh Gowda & Team Alpha',
      role: 'Chief Technical Supervisor (Bangalore Metro)',
      dispatchStatus: 'Active citywide: Same-day 90-min survey dispatch guaranteed',
      image: '/images/technicians-installing-real.jpg',
      societies: [
        { name: 'Prestige Shantiniketan', location: 'Whitefield', elevation: '26th Floor Penthouse', verified: '34 Balconies' },
        { name: 'Sobha Dream Acres', location: 'Sarjapur Road', elevation: '18th Floor High-Rise', verified: '85 Balconies' },
        { name: 'Salarpuria Greenage', location: 'Hosur Rd / HSR', elevation: '22nd Floor Lake View', verified: '42 Balconies' },
        { name: 'SNN Clermont', location: 'Hebbal Lakefront', elevation: '34th Floor Sky Tower', verified: '28 Balconies' },
        { name: 'Phoenix One Bangalore West', location: 'Rajajinagar', elevation: '29th Floor Duplex', verified: '24 Balconies' },
        { name: 'Prestige Leela Residences', location: 'Old Airport Rd', elevation: 'Heritage Penthouse', verified: '19 Balconies' }
      ],
      whatsappIntent: 'Hello Aurab Grills! I am in Bangalore and want to book a free laser site survey.'
    },
    'East Belt (Whitefield / ITPL)': {
      title: 'East Corridor: High-Rise Balcony & Penthouse Safety Belt',
      coverage: 'Serving Whitefield, ITPL, Kadugodi, Varthur, and Palm Meadows',
      supervisor: 'Suresh Gowda (Lead Tensioning Specialist)',
      role: 'Senior Supervisor • East Bangalore Division',
      dispatchStatus: 'Van in Whitefield: 2 Free measurement slots available today',
      image: '/images/whitefield-real-balcony.jpg',
      societies: [
        { name: 'Prestige Shantiniketan', location: 'Whitefield Main Rd', elevation: 'Floors 12 to 34', verified: '34 Balconies' },
        { name: 'Godrej United', location: 'ITPL Main Road', elevation: 'Towers 2 & 3 Balconies', verified: '26 Balconies' },
        { name: 'Brigade Cosmopolis', location: 'ECC Road', elevation: 'Duplex High-Rise Penthouses', verified: '22 Balconies' },
        { name: 'Total Environment Rhapsody', location: 'ITPL Corridor', elevation: 'Terrace Garden Balconies', verified: '18 Balconies' },
        { name: 'Sobha Rose', location: 'Whitefield', elevation: 'Panoramic Verandas', verified: '15 Balconies' }
      ],
      whatsappIntent: 'Hello Aurab Grills! I am in Whitefield / ITPL and want to book a free laser site survey.'
    },
    'South Corridor (HSR / Sarjapur)': {
      title: 'South-East Corridor: Tech-Belt High-Rise Mega Communities',
      coverage: 'Serving HSR Layout Sectors 1-7, Sarjapur Road, KR Puram, and Haralur',
      supervisor: 'Santhosh Kumar (Structural Specialist)',
      role: 'Senior Supervisor • South-East Corridor',
      dispatchStatus: 'Van in Sarjapur / HSR: Free measurement slot available today',
      image: '/images/sarjapur-balcony.jpg',
      societies: [
        { name: 'Sobha Dream Acres', location: 'Panathur Road', elevation: '18th Floor High-Rise', verified: '85 Balconies' },
        { name: 'Salarpuria Greenage', location: 'Hosur Rd / HSR', elevation: '22nd Floor Lake View', verified: '42 Balconies' },
        { name: 'Sobha Lake Garden', location: 'KR Puram Lake Road', elevation: '19th Floor Lake View', verified: '29 Balconies' },
        { name: 'Mantri Sarovar', location: 'HSR Agara Lakefront', elevation: 'Lake-Facing Balconies', verified: '27 Balconies' },
        { name: 'Purva Fairmont', location: 'HSR Sector 2', elevation: 'High-Rise Apartments', verified: '21 Balconies' }
      ],
      whatsappIntent: 'Hello Aurab Grills! I am in HSR / Sarjapur and want to book a free laser site survey.'
    },
    'Central & West (Indiranagar / Rajajinagar)': {
      title: 'Central & West: Boutique Penthouses & Luxury High-Rises',
      coverage: 'Serving Indiranagar, Domlur, Old Airport Road, and Rajajinagar',
      supervisor: 'Ramesh Babu (Architectural Alignment Lead)',
      role: 'Senior Supervisor • Central & West Division',
      dispatchStatus: 'Van in Indiranagar / Rajajinagar: Afternoon survey slot open',
      image: '/images/penthouse-panoramic-balcony.jpg',
      societies: [
        { name: 'Prestige Leela Residences', location: 'Old Airport Road', elevation: 'Palatial Duplex Verandas', verified: '19 Balconies' },
        { name: 'Phoenix One Bangalore West', location: 'Rajajinagar', elevation: '29th Floor Sky Tower', verified: '24 Balconies' },
        { name: 'Embassy Boulevard', location: 'Boutique Residences', elevation: 'Luxury Balconies', verified: '16 Balconies' },
        { name: 'Sobha Indraprastha', location: 'Central Belt', elevation: 'Luxury Apartments', verified: '20 Balconies' },
        { name: 'Gopalan Grandeur', location: 'Domlur Corridor', elevation: 'High-Rise Glass Railings', verified: '14 Balconies' }
      ],
      whatsappIntent: 'Hello Aurab Grills! I am in Indiranagar / Central Bangalore and want to book a free survey.'
    },
    'North (Hebbal / Manyata)': {
      title: 'North Corridor: Expressway Condos & High-Altitude Towers',
      coverage: 'Serving Hebbal, Manyata Tech Park, Thanisandra, and Yelahanka',
      supervisor: 'Chandrashekar (High-Altitude Wind Specialist)',
      role: 'Senior Supervisor • North Bangalore Division',
      dispatchStatus: 'Van in Hebbal / Manyata: Same-day survey dispatch available',
      image: '/images/hebbal-balcony.jpg',
      societies: [
        { name: 'SNN Clermont', location: 'Hebbal Lakefront', elevation: '34th-Floor Skyway Penthouse', verified: '28 Balconies' },
        { name: 'Karle Zenith Residences', location: 'Manyata Corridor', elevation: '27th-Floor High-Rise', verified: '26 Balconies' },
        { name: 'Brigade Caladium', location: 'Hebbal Expressway', elevation: 'Waterfront Balconies', verified: '18 Balconies' },
        { name: 'Godrej Platinum', location: 'Hebbal Lakefront', elevation: 'High-Altitude Condos', verified: '23 Balconies' },
        { name: 'Sobha City', location: 'Thanisandra Road', elevation: 'High-Rise Living', verified: '31 Balconies' }
      ],
      whatsappIntent: 'Hello Aurab Grills! I am in Hebbal / North Bangalore and want to book a free laser survey.'
    }
  };

  const zones = [
    'All Bangalore',
    'East Belt (Whitefield / ITPL)',
    'South Corridor (HSR / Sarjapur)',
    'Central & West (Indiranagar / Rajajinagar)',
    'North (Hebbal / Manyata)'
  ];

  const current = zoneData[activeZone];

  return (
    <section id="bangalore-hubs" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>LOCAL BENGALURU GEOGRAPHY • RAPID SITE SURVEY DISPATCH</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            Active High-Rise Corridors{' '}
            <span className="text-emerald-700">Across Bengaluru</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Select your residential corridor to inspect verified completed societies, today's laser survey van dispatch status, and assigned senior area supervisor.
          </p>
        </div>

        {/* Clean Segment Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10 sm:mb-14">
          {zones.map((zone) => {
            const isSelected = activeZone === zone;
            return (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                type="button"
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-950 text-white shadow-md shadow-zinc-950/15 scale-102'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                {zone}
              </button>
            );
          })}
        </div>

        {/* Dynamic Corridor Overview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Supervisor Card & Mobile Laser Dispatch Status (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-zinc-950 text-white p-6 sm:p-8 flex flex-col justify-between border border-zinc-800/80 shadow-2xl shadow-zinc-950/10 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Rapid Survey Van</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                {current.coverage}
              </p>

              {/* Dispatch Alert Box */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 space-y-1.5">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Real-Time Dispatch Status</span>
                </div>
                <div className="text-xs text-white font-medium">
                  {current.dispatchStatus}
                </div>
              </div>

              {/* Technician Info */}
              <div className="pt-2 flex items-center gap-3.5 border-t border-zinc-900">
                <div className="w-13 h-13 rounded-2xl overflow-hidden border-2 border-emerald-500/60 shrink-0 bg-zinc-900">
                  <img src={current.image} alt={current.supervisor} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {current.supervisor}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {current.role}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium">
                    Hilti Certified • Digital Torque Calibration
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Actions for Selected Corridor */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-900">
              <a
                href={`https://wa.me/918523068882?text=${encodeURIComponent(current.whatsappIntent)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant 1-Tap WhatsApp for this Area</span>
              </a>

              <button
                onClick={onOpenBooking}
                type="button"
                className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>Book Free Laser Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Prominent Societies Grid in Selected Corridor (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-50 border border-zinc-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-zinc-950 flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span>Verified High-Rise Societies Fitted</span>
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Over 850+ luxury apartments safely secured across these communities
                  </p>
                </div>

                <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  100% HOA Compliant
                </span>
              </div>

              {/* Society List Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.societies.map((soc, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-400/80 transition space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-zinc-950">
                        {soc.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {soc.verified}
                      </span>
                    </div>

                    <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{soc.location}</span>
                    </div>

                    <div className="text-[11px] font-semibold text-zinc-700">
                      {soc.elevation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Assurance Strip */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pre-approved by Prestige, Sobha, Brigade &amp; Salarpuria HOA elevation bylaws.</span>
              </div>

              <button
                onClick={onOpenBooking}
                type="button"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Check Your Society</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
