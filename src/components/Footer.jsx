import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  MapPin, 
  X, 
  Layers, 
  Building2, 
  HardHat, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Cookie,
  Network
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import AurabLogo from './AurabLogo';

export default function Footer({ onOpenBooking }) {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isPrivacyCookiesOpen, setIsPrivacyCookiesOpen] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(true);
  const [cookiePrefs, setCookiePrefs] = useState(true);
  const [cookieSaved, setCookieSaved] = useState(false);

  const bangaloreCorridors = [
    "Whitefield & ITPL",
    "KR Puram Corridor",
    "JP Nagar Phases 1-9",
    "Electronic City Phase 1 & 2",
    "RR Nagar High-Rise Belt",
    "Hennur Main Road",
    "Sarjapur Road",
    "HSR Layout (Sectors 1-7)",
    "Indiranagar & Domlur",
    "Hebbal & Manyata Tech Park",
    "Thanisandra Main Road",
    "Bannerghatta Road Corridor"
  ];

  const handleSaveCookies = () => {
    setCookieSaved(true);
    setTimeout(() => {
      setCookieSaved(false);
      setIsPrivacyCookiesOpen(false);
    }, 900);
  };

  return (
    <footer id="footer-contact" className="bg-zinc-950 text-white pt-16 sm:pt-20 pb-24 sm:pb-16 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Main 4-Column Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Operating Headquarters (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <AurabLogo className="w-8 h-8 shrink-0 drop-shadow-sm" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  AURA <span className="text-emerald-400">GRILLS</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 pt-0.5">
                  Aura Invisible Grills • For Your Safety
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              Bangalore’s premier architectural safety systems specialist. Engineering certified aerospace SS-316 high-tensile cable systems and balcony utility drying systems for luxury apartments and penthouses.
            </p>

            <div className="space-y-1 text-xs text-emerald-400 font-semibold pt-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ISO 9001:2015 Certified Installation Protocol</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Virgin SS-316 Metallurgy (2.5% Molybdenum Rustproof Core)</span>
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
              Direct Contact &amp; Hotline
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
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Immediate Helpline</div>
                  <div className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition">+91 85230 68882</div>
                </div>
              </a>

              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20looking%20for%20balcony%20invisible%20safety%20grills%20and%20cloth%20hangers%20in%20Bangalore."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 text-white transition group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Instant Quote &amp; Survey</div>
                  <div className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition">WhatsApp Direct</div>
                </div>
              </a>

              <a
                href="mailto:auragrills@gmail.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>auragrills@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Architectural Collections (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="hover:text-white transition">Invisible Safety Grills</li>
              <li className="hover:text-white transition">Ceiling Cloth Hangers</li>
              <li className="hover:text-white transition">Pigeon &amp; Safety Nets</li>
              <li className="hover:text-white transition">Bird Deterrent Spikes</li>
              <li className="hover:text-white transition">French Window Protection</li>
              <li className="hover:text-white transition">Toddler Balcony Shields</li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Sitemap Trigger (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Site Architecture
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="hover:text-emerald-400 transition text-left cursor-pointer flex items-center gap-1.5 text-emerald-400 font-bold"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Site Mapping Diagram</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyCookiesOpen(true)}
                  className="hover:text-emerald-400 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Privacy &amp; Cookie Policy</span>
                </button>
              </li>
              <li><a href="#bangalore-dashboard" className="hover:text-white transition">Bangalore Corridors</a></li>
              <li><a href="#bangalore-dashboard" className="hover:text-white transition">Balcony Systems</a></li>
            </ul>

            <button
              onClick={onOpenBooking}
              type="button"
              className="mt-3 w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-[11px] uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-md"
            >
              Book Free Survey
            </button>
          </div>

        </div>

        {/* Local Bangalore Geo-SEO Corridor Links */}
        <div className="pt-8 border-t border-zinc-900 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Active Bengaluru Service Corridors:
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
            {bangaloreCorridors.map((corridor, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                📍 {corridor}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal, Privacy & Sitemap Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 <strong>Aura Grills™</strong> Architectural Safety. All Rights Reserved. Protecting Families Across Bengaluru.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <button
              onClick={() => setIsSitemapOpen(true)}
              className="text-zinc-400 hover:text-emerald-400 transition cursor-pointer underline underline-offset-4"
            >
              Site Mapping Diagram
            </button>
            <span>•</span>
            <button
              onClick={() => setIsPrivacyCookiesOpen(true)}
              className="text-zinc-400 hover:text-emerald-400 transition cursor-pointer underline underline-offset-4"
            >
              Privacy &amp; Cookies
            </button>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">SS-316 Marine Grade</span>
            <span>•</span>
            <span>Zero View Loss</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          MODAL 1: VISUAL SITE MAPPING DIAGRAM (Architecture Flowchart)
          ========================================================================= */}
      {isSitemapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-3xl rounded-3xl p-5 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Aura Grills™ Architecture &amp; Site Mapping Diagram
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Comprehensive visual hierarchy of systems, Bangalore regions &amp; engineering
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsSitemapOpen(false)}
                className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tree Architecture Diagram */}
            <div className="space-y-4 font-mono text-xs">
              
              {/* Root */}
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-emerald-500/40 text-center font-bold text-emerald-400 shadow-md">
                [AURA GRILLS ROOT: BANGALORE BALCONY ARCHITECTURAL SYSTEMS]
              </div>

              {/* Branch 1: 6 Bangalore Places */}
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1. Bangalore 6 Key Corridors (High-Rise Residential Hubs)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-4 text-zinc-300 font-sans text-xs">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 Whitefield Corridor</div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 KR Puram Corridor</div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 JP Nagar Phases</div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 Electronic City Phase 1 &amp; 2</div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 RR Nagar Skyline</div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">📍 Hennur Main Road</div>
                </div>
              </div>

              {/* Branch 2: 4 Core Services */}
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2. Core Architectural Balcony Services</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 text-zinc-300 font-sans text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <strong className="text-white">Invisible Safety Grills:</strong> Aerospace SS-316 cables with 2-inch safe spacing
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <strong className="text-white">Ceiling Cloth Hangers:</strong> Individual pulley lowering heavy SS-304 pipes
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <strong className="text-white">Pigeon &amp; Safety Nets:</strong> High-density Garware UV monofilament envelope
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <strong className="text-white">Bird Spikes:</strong> Polycarbonate base with 304 marine stainless steel spikes
                  </div>
                </div>
              </div>

              {/* Branch 3: Standard Protocol & Concierge */}
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <HardHat className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3. Protocol, Verified Projects &amp; Concierge Dispatch</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-4 text-zinc-300 font-sans text-xs">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                    ✓ Laser Rangefinder Survey
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                    ✓ Verified High-Rise Projects
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                    ✓ Instant WhatsApp Dispatch
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsSitemapOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Close Sitemap Diagram
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: PRIVACY POLICY & COOKIE PREFERENCES
          ========================================================================= */}
      {isPrivacyCookiesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-3xl p-5 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Privacy Policy &amp; Cookie Preferences
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Resident confidentiality &amp; zero-spam commitment
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPrivacyCookiesOpen(false)}
                className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Privacy Commitments */}
            <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Resident Privacy (Zero Data Selling)</span>
                </div>
                <p className="text-zinc-400">
                  We never share, sell, or rent homeowner phone numbers or society addresses to third-party telemarketers. Information submitted is used solely for scheduling technical balcony measurement vans.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp Survey Coordination</span>
                </div>
                <p className="text-zinc-400">
                  When you request a quote or laser survey, communication is initiated directly between you and certified Aura Grills installation leads without unsolicited spam.
                </p>
              </div>
            </div>

            {/* Cookie Preferences Toggles */}
            <div className="space-y-3 pt-2 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                <Cookie className="w-4 h-4 text-emerald-400" />
                <span>Manage Cookie &amp; Storage Preferences:</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Essential */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div>
                    <div className="font-bold text-white">Essential Security Cookies</div>
                    <div className="text-[11px] text-zinc-500">Required for website security and navigation</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    Always Active
                  </span>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div>
                    <div className="font-bold text-white">Performance &amp; Speed Analytics</div>
                    <div className="text-[11px] text-zinc-500">Helps us optimize high-resolution photo loading</div>
                  </div>
                  <button
                    onClick={() => setCookieAnalytics(!cookieAnalytics)}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      cookieAnalytics ? 'bg-emerald-600' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        cookieAnalytics ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Preferences */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div>
                    <div className="font-bold text-white">Regional Area Preferences</div>
                    <div className="text-[11px] text-zinc-500">Remembers selected Bengaluru corridor</div>
                  </div>
                  <button
                    onClick={() => setCookiePrefs(!cookiePrefs)}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      cookiePrefs ? 'bg-emerald-600' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        cookiePrefs ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3">
              {cookieSaved && (
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Preferences Saved!
                </span>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={handleSaveCookies}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => {
                    setCookieAnalytics(true);
                    setCookiePrefs(true);
                    handleSaveCookies();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}

