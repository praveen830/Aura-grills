import React from 'react';
import { Phone, Mail, Shield, ShieldCheck, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenBooking }) {
  const bangaloreCorridors = [
    "Whitefield & ITPL",
    "Sarjapur Road",
    "HSR Layout (Sectors 1-7)",
    "Bellandur Outer Ring Road",
    "Electronic City Phase 1 & 2",
    "Indiranagar & Domlur",
    "Hebbal & Manyata Tech Park",
    "JP Nagar & Jayanagar",
    "Thanisandra Main Road",
    "Yelahanka New Town",
    "Marathahalli & Kadugodi",
    "Bannerghatta Road Corridor"
  ];

  return (
    <footer id="footer-contact" className="bg-zinc-950 text-white pt-16 sm:pt-20 pb-24 sm:pb-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Main 4-Column Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Operating Headquarters (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                AURA <span className="text-emerald-400">GRILLS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              Bangalore’s premier architectural invisible safety grill specialist. Engineering certified aerospace SS-316 high-tensile cable systems for luxury high-rises, penthouses, and modern apartments.
            </p>

            <div className="space-y-1 text-xs text-emerald-400 font-semibold pt-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ISO 9001:2015 Certified Installation Protocol</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Virgin SS-316 Metallurgy (2.5% Molybdenum Core)</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-zinc-500 space-y-1.5 border-t border-zinc-900">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-zinc-300">Bangalore Operational HQ:</strong> Outer Ring Road &amp; HSR Sector 2 Corridor, Bengaluru, Karnataka 560102
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Hotline (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Emergency &amp; Hotline
            </h4>
            
            <div className="space-y-2 text-xs">
              <a
                href="tel:+918523068882"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 text-white transition group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Immediate Assistance</div>
                  <div className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition">Call</div>
                </div>
              </a>

              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20looking%20for%20invisible%20safety%20grills%20for%20my%20balcony%20in%20Bangalore."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 text-white transition group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Instant Quote &amp; Survey</div>
                  <div className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition">WhatsApp</div>
                </div>
              </a>

              <a
                href="mailto:auragrillss@gmail.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>auragrillss@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Architectural Collections (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Safety Collections
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="hover:text-white transition">High-Rise Balcony Grills</li>
              <li className="hover:text-white transition">French Window Protection</li>
              <li className="hover:text-white transition">Penthouse Terrace Systems</li>
              <li className="hover:text-white transition">Duplex Staircase Cables</li>
              <li className="hover:text-white transition">50mm Anti-Pigeon Shields</li>
              <li className="hover:text-white transition">Pet Balcony Barriers</li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Booking (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition">Overview</a></li>
              <li><a href="#visual-proof" className="hover:text-white transition">Visual Proof</a></li>
              <li><a href="#engineering" className="hover:text-white transition">Engineering</a></li>
              <li><a href="#bangalore-hubs" className="hover:text-white transition">Bangalore Hubs</a></li>
              <li><a href="#installation" className="hover:text-white transition">Installation</a></li>
              <li><a href="#client-stories" className="hover:text-white transition">Client Stories</a></li>
            </ul>

            <button
              onClick={onOpenBooking}
              type="button"
              className="mt-2 w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-[11px] uppercase tracking-wider transition cursor-pointer"
            >
              Book Free Survey
            </button>
          </div>

        </div>

        {/* Local Bangalore Geo-SEO Corridor Links */}
        <div className="pt-8 border-t border-zinc-900 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Active Bengaluru Service Areas &amp; High-Rise Corridors:
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
            {bangaloreCorridors.map((corridor, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition"
              >
                📍 {corridor}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Certifications Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 <strong>Aura Grills™</strong> Architectural Safety. All Rights Reserved. Protecting Families Across Bengaluru.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wider">
            <span className="text-emerald-400 font-semibold">100% Invisible Grills</span>
            <span>•</span>
            <span>400kg Tensile Load</span>
            <span>•</span>
            <span>SS-316 Marine Grade</span>
            <span>•</span>
            <span>10-Year Warranty</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
