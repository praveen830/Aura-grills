import React, { useState } from 'react';
import { Calculator, MessageSquare, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { BANGALORE_LOCATIONS } from '../data/bangaloreLocations';

export default function BalconyCalculator({ onOpenBooking }) {
  const [selectedHub, setSelectedHub] = useState(BANGALORE_LOCATIONS[0].mainPlace);
  const [installationType, setInstallationType] = useState('Balcony');
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(5);
  const [cableGrade, setCableGrade] = useState('3.0mm'); // '2.5mm' | '3.0mm'

  const ratePerSqFt = cableGrade === '3.0mm' ? 165 : 145;
  const totalSqFt = Math.max(1, width * height);
  const estimatedCost = totalSqFt * ratePerSqFt;

  const handleSendToWhatsApp = () => {
    const text = `*Aurab Grills - Invisible Grill Price Estimate*\n` +
      `📍 *Location:* ${selectedHub}\n` +
      `🛡️ *Type:* ${installationType}\n` +
      `📏 *Dimensions:* ${width} ft (W) × ${height} ft (H) = *${totalSqFt} Sq.Ft*\n` +
      `⚙️ *Cable Selected:* SS-316 ${cableGrade} Marine Grade\n` +
      `💰 *Estimated Cost:* ₹${estimatedCost.toLocaleString('en-IN')} (Approx)\n` +
      `\nHi, please confirm site measurement slot and give me the best deal for my home.`;
    
    window.open(`https://wa.me/918523068882?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="price-calculator" className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Bangalore Transparent Cost Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Calculate Invisible Grill Price For Your Balcony
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            No hidden charges. Enter your balcony dimensions for an instant estimate with genuine SS-316 marine cables, Hilti anchors, and a 10-year warranty card.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-xl border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 Columns: Form Controls */}
          <div className="md:col-span-7 space-y-5">
            
            {/* 1. Bangalore Location Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                1. Select Bangalore Locality Hub
              </label>
              <select
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                {BANGALORE_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.mainPlace}>
                    📍 {loc.mainPlace} ({loc.zone})
                  </option>
                ))}
                <option value="Other Bangalore Neighborhood">📍 Other Bangalore Area</option>
              </select>
            </div>

            {/* 2. Installation Area */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                2. Installation Area
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Balcony', 'French Windows', 'Full Apartment', 'Staircase', 'Terrace Patio'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInstallationType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer text-center ${
                      installationType === type
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Dimensions Sliders (Width & Height) */}
            <div className="space-y-4 pt-1">
              <div>
                <div className="flex items-center justify-between text-xs font-black uppercase text-slate-300 mb-1.5">
                  <span>Balcony Width (Feet)</span>
                  <span className="text-emerald-400 font-mono text-sm">{width} ft</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="45"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-black uppercase text-slate-300 mb-1.5">
                  <span>Balcony Height (Feet)</span>
                  <span className="text-emerald-400 font-mono text-sm">{height} ft</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* 4. Cable Grade Choice */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                4. Cable Specification
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCableGrade('3.0mm')}
                  className={`p-3 rounded-2xl text-left border transition cursor-pointer ${
                    cableGrade === '3.0mm'
                      ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">SS-316 3.0mm</span>
                    <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-1.5 py-0.5 rounded">
                      POPULAR
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    420kg breaking load. Best for 10th+ floor balconies.
                  </p>
                  <div className="text-xs font-bold text-emerald-400 mt-2">₹165 / sq.ft</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCableGrade('2.5mm')}
                  className={`p-3 rounded-2xl text-left border transition cursor-pointer ${
                    cableGrade === '2.5mm'
                      ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-black text-white">SS-316 2.5mm</div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Standard marine cable. Suitable for windows & lower floors.
                  </p>
                  <div className="text-xs font-bold text-emerald-400 mt-2">₹145 / sq.ft</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Result Box & Direct Owner Trigger */}
          <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-black">
                <span>Calculated Total Area:</span>
                <span className="text-white font-mono text-sm bg-slate-800 px-2 py-0.5 rounded">
                  {totalSqFt} Sq.Ft
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Estimated Turnkey Investment
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                  ₹{estimatedCost.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400">
                  Includes All Materials + Fitting + GST
                </div>
              </div>

              {/* Free Inclusions list */}
              <div className="space-y-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free German Laser Site Survey (BLR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hilti Heavy-Duty Stainless Steel Anchors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10-Year Written Replacement Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>On-Site Electronic Tension Load Test</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate to Owner (WhatsApp)</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Book Free Site Visit Today</span>
              </button>

              <div className="text-center pt-1">
                <a
                  href="tel:+918523068882"
                  className="text-[11px] text-slate-400 hover:text-emerald-400 transition inline-flex items-center gap-1 font-semibold"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>Direct Hotline: +91 85230 68882</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
