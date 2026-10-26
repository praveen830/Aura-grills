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
  Lock, 
  Network,
  ArrowRight,
  Clock,
  Sparkles,
  Calendar,
  Compass
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import AuraLogo from './AuraLogo';
import { Link } from '../router';

export default function Footer({ onOpenBooking }) {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isPrivacyCookiesOpen, setIsPrivacyCookiesOpen] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(true);
  const [cookiePrefs, setCookiePrefs] = useState(true);
  const [cookieSaved, setCookieSaved] = useState(false);

  // 12 Regional Corridors & Hubs across Bangalore with clean, lowercase, hyphen-separated slugs
  const regionalCorridors = [
    {
      name: "Whitefield & ITPL",
      slug: "whitefield",
      zone: "East Bangalore Mega Corridor",
      subtitle: "Kadugodi, Hope Farm & ECC Road",
      badge: "78+ Societies Secured",
      vanActive: true
    },
    {
      name: "KR Puram Corridor",
      slug: "kr-puram",
      zone: "East-Central Connecting Belt",
      subtitle: "TC Palya, Lake Road & Bhattarahalli",
      badge: "39+ Societies Secured",
      vanActive: true
    },
    {
      name: "JP Nagar & Jayanagar",
      slug: "jp-nagar",
      zone: "South Bangalore High-Rise Hub",
      subtitle: "Phases 1-9, Sarakki & Dollars Colony",
      badge: "48+ Societies Secured",
      vanActive: true
    },
    {
      name: "Electronic City Phase 1 & 2",
      slug: "electronic-city",
      zone: "South Tech Expressway",
      subtitle: "Neeladri Road, Begur & Bommasandra",
      badge: "62+ Societies Secured",
      vanActive: true
    },
    {
      name: "RR Nagar High-Rise Belt",
      slug: "rr-nagar",
      zone: "West Bangalore High-Rise",
      subtitle: "BEML Layout, Ideal Homes & Hill View",
      badge: "34+ Societies Secured",
      vanActive: true
    },
    {
      name: "Hennur Main Road",
      slug: "hennur",
      zone: "North-East High-Altitude Belt",
      subtitle: "Byrathi, Kothanur & Manyata Strip",
      badge: "42+ Societies Secured",
      vanActive: true
    },
    {
      name: "HSR Layout & Koramangala",
      slug: "koramangala-hsr",
      zone: "South-East Lakefront Belt",
      subtitle: "Sectors 1-7, Agara Lake & Sony World",
      badge: "55+ Societies Secured",
      vanActive: true
    },
    {
      name: "Indiranagar & Domlur",
      slug: "indiranagar-domlur",
      zone: "Central-East Boutique Hub",
      subtitle: "100ft Road, HAL 2nd Stage & EGL",
      badge: "31+ Societies Secured",
      vanActive: true
    },
    {
      name: "Hebbal & Manyata Tech Park",
      slug: "hebbal-yelahanka",
      zone: "North Expressway Corridor",
      subtitle: "Bellary Road, Nagavara & Yelahanka",
      badge: "46+ Societies Secured",
      vanActive: true
    },
    {
      name: "Sarjapur Road Corridor",
      slug: "sarjapur-road",
      zone: "East Tech Belt",
      subtitle: "Carmelaram, Bellandur & Doddakannelli",
      badge: "51+ Societies Secured",
      vanActive: true
    },
    {
      name: "Thanisandra Main Road",
      slug: "thanisandra-main-road",
      zone: "North-East Growth Belt",
      subtitle: "Bhartiya City, Sobha City & Outer Ring",
      badge: "29+ Societies Secured",
      vanActive: true
    },
    {
      name: "Bannerghatta Road Corridor",
      slug: "bannerghatta-road",
      zone: "South Gateway Belt",
      subtitle: "Arekere, Meenakshi Mall & Hulimavu",
      badge: "36+ Societies Secured",
      vanActive: true
    }
  ];

  // 6 Standardized Balcony Services with clean slugs
  const serviceLinks = [
    { name: "Invisible Safety Grills", slug: "invisible-grills", desc: "Aerospace SS-316 high-tensile cables" },
    { name: "Ceiling Cloth Drying Hangers", slug: "cloth-hangers", desc: "Individual pulley SS-304 lowering pipes" },
    { name: "Pigeon & Balcony Safety Nets", slug: "safety-nets", desc: "Garware high-density UV transparent net" },
    { name: "Stainless Steel Bird Spikes", slug: "bird-spikes", desc: "100% humane anti-perch SS-304 needles" },
    { name: "French Window Protection", slug: "french-window-protection", desc: "Architectural floor-to-ceiling alignment" },
    { name: "Toddler Balcony Shields", slug: "toddler-balcony-shields", desc: "2-inch baby-safe narrow fall barrier" }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* =========================================================================
            TOP BRAND & VALUE PROPOSITION HERO BAR
            ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/90 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="flex items-center gap-3">
              <AuraLogo className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-md" />
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
                  AURA <span className="text-emerald-400">GRILLS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-zinc-400 pt-1 block">
                  Invisible Grills With Stainless Steel • Bengaluru Operational HQ
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Bangalore’s benchmark in high-rise architectural balcony safety. Engineering certified aerospace SS-316 high-tensile invisible grills, ceiling cloth drying systems, and bird exclusion barriers with certified same-day digital laser surveys.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-emerald-400 font-semibold pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 Protocol</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Virgin SS-316 (2.5% Mo)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>400kg Breaking Resistance</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto relative z-10 shrink-0">
            <button
              onClick={onOpenBooking}
              type="button"
              className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-xl flex items-center justify-center gap-2 text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Laser Survey</span>
            </button>
            <a
              href="tel:+918523068882"
              className="py-3 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition border border-zinc-700 flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 85230 68882</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            THE 4 MAIN COLUMNS: HELP, SERVICES, ABOUT, CONNECT
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-4">
          
          {/* -----------------------------------------------------------------------
              COLUMN 1: HELP
              ----------------------------------------------------------------------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">
                Help &amp; Support
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-emerald-400 transition text-left cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  <span>Free Doorstep Laser Survey</span>
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20need%20help%20with%20balcony%20invisible%20safety%20grills."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  <span>1-Tap WhatsApp Survey Booking</span>
                </a>
              </li>
              <li>
                <Link
                  to="/balcony-services/invisible-grills"
                  className="hover:text-emerald-400 transition flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  <span>10-Second Fire Rescue Egress Protocol</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/#bangalore-dashboard"
                  className="hover:text-emerald-400 transition flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  <span>High-Rise Safety Harness Standards</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/balcony-services/toddler-balcony-shields"
                  className="hover:text-emerald-400 transition flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  <span>Child &amp; Toddler Fall Prevention</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyCookiesOpen(true)}
                  className="hover:text-emerald-400 transition text-left cursor-pointer flex items-center gap-2 group"
                >
                  <Lock className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400" />
                  <span>Privacy Policy &amp; Cookie Consent</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="hover:text-emerald-400 transition text-left cursor-pointer flex items-center gap-2 group text-emerald-400 font-semibold"
                >
                  <Network className="w-3 h-3 text-emerald-400" />
                  <span>Interactive Site Mapping Diagram</span>
                </button>
              </li>
            </ul>
          </div>

          {/* -----------------------------------------------------------------------
              COLUMN 2: SERVICES
              ----------------------------------------------------------------------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
              <Layers className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">
                Balcony Services
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              {serviceLinks.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/balcony-services/${srv.slug}`}
                    className="hover:text-emerald-400 transition flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-zinc-300 group-hover:text-white transition block">
                        {srv.name}
                      </span>
                      <span className="text-[10.5px] text-zinc-500 font-normal block leading-tight">
                        {srv.desc}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-zinc-900">
                <Link
                  to="/balcony-services"
                  className="text-emerald-400 font-bold hover:underline flex items-center gap-1.5 text-xs"
                >
                  <span>Explore All Balcony Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* -----------------------------------------------------------------------
              COLUMN 3: ABOUT
              ----------------------------------------------------------------------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">
                About Aura Grills
              </h4>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Specialized in high-altitude architectural balcony solutions engineered specifically for high-rise apartments and penthouses in Bengaluru.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>SS-316 Marine Metallurgy (Rustproof core)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>400kg Breaking Tensile Load Test</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>70km/h Penthouse Wind Shear Tested</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Dust-Free Vacuum Drill Protocol</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>10-Year Stamped Manufacturer Card</span>
              </li>
            </ul>

            <div className="pt-1 text-[11px] text-zinc-500">
              Trusted by 850+ gated community residents across Prestige, Sobha, Brigade, and Godrej societies.
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              COLUMN 4: CONNECT
              ----------------------------------------------------------------------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
              <Phone className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">
                Connect &amp; Hotline
              </h4>
            </div>

            <div className="space-y-2.5 text-xs">
              {/* Direct Phone Card */}
              <a
                href="tel:+918523068882"
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 text-white transition group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Immediate Helpline</div>
                  <div className="text-sm font-black text-white group-hover:text-emerald-400 transition">+91 85230 68882</div>
                </div>
              </a>

              {/* Instant WhatsApp Card */}
              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20looking%20for%20balcony%20invisible%20safety%20grills%20and%20cloth%20hangers%20in%20Bangalore."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 text-white transition group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">WhatsApp Survey Concierge</div>
                  <div className="text-sm font-black text-white group-hover:text-emerald-400 transition">Instant Quote &amp; Dispatch</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:auragrills@gmail.com"
                className="flex items-center gap-2 p-2 rounded-xl text-zinc-400 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">auragrills@gmail.com</span>
              </a>

              {/* Operating Hours */}
              <div className="flex items-start gap-2 p-2 text-zinc-400 text-[11px]">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Hours:</strong> Mon – Sun: 8:00 AM – 9:00 PM (Rapid survey van available)
                </span>
              </div>

              {/* Operational HQ Address */}
              <div className="flex items-start gap-2 p-2 text-zinc-400 text-[11px]">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Operational HQ:</strong> Outer Ring Road &amp; HSR Sector 2 Corridor, Bengaluru 560102
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            EXPLORE REGIONAL CORRIDORS & HUBS (Interactive Grid Section)
            ========================================================================= */}
        <div className="pt-10 border-t border-zinc-900 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Active Service Network Across Bangalore</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Explore Regional Corridors &amp; Hubs
              </h3>
              <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
                Click any regional corridor card below to inspect hyper-local balcony installations, verified society projects, and dispatch our rapid survey van directly to your apartment.
              </p>
            </div>

            <Link
              to="/#bangalore-dashboard"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition shrink-0"
            >
              <span>View All 6 Interactive Place Cards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 12 Regional Corridor Cards in Clean Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {regionalCorridors.map((hub) => (
              <Link
                key={hub.slug}
                to={`/${hub.slug}`}
                className="group p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/60 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 truncate">
                      {hub.zone}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" title="Survey Van Active" />
                  </div>

                  <h4 className="text-sm font-black text-white group-hover:text-emerald-400 transition leading-snug flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{hub.name}</span>
                  </h4>

                  <p className="text-[11px] text-zinc-400 leading-tight">
                    {hub.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500 font-semibold">
                    {hub.badge}
                  </span>
                  <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM LEGAL, PRIVACY & SITEMAP BAR
            ========================================================================= */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            © 2026 <strong>Aura Grills™</strong> Architectural Balcony Safety Systems. All Rights Reserved. Protecting Families Across Bengaluru.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
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
            <span>•</span>
            <span>400kg Breaking Resistance</span>
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
                  <Link 
                    to="/whitefield" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 Whitefield Corridor
                  </Link>
                  <Link 
                    to="/kr-puram" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 KR Puram Corridor
                  </Link>
                  <Link 
                    to="/jp-nagar" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 JP Nagar Phases
                  </Link>
                  <Link 
                    to="/electronic-city" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 Electronic City Phase 1 &amp; 2
                  </Link>
                  <Link 
                    to="/rr-nagar" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 RR Nagar Skyline
                  </Link>
                  <Link 
                    to="/hennur" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    📍 Hennur Main Road
                  </Link>
                </div>
              </div>

              {/* Branch 2: 4 Core Services */}
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2. Core Architectural Balcony Services</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 text-zinc-300 font-sans text-xs">
                  <Link 
                    to="/balcony-services/invisible-grills" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    <strong className="text-white">Invisible Safety Grills:</strong> Aerospace SS-316 cables with 2-inch safe spacing
                  </Link>
                  <Link 
                    to="/balcony-services/cloth-hangers" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    <strong className="text-white">Ceiling Cloth Hangers:</strong> Individual pulley lowering heavy SS-304 pipes
                  </Link>
                  <Link 
                    to="/balcony-services/safety-nets" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    <strong className="text-white">Pigeon &amp; Safety Nets:</strong> High-density Garware UV monofilament envelope
                  </Link>
                  <Link 
                    to="/balcony-services/bird-spikes" 
                    onClick={() => setIsSitemapOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition block"
                  >
                    <strong className="text-white">Bird Spikes:</strong> Polycarbonate base with 304 marine stainless steel spikes
                  </Link>
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
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-3xl p-5 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Privacy Policy &amp; Cookie Preferences
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Aura Grills™ Customer Data Protection &amp; Cookie Compliance
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

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>1. Zero Spam &amp; Direct Homeowner Confidentiality</span>
                </h4>
                <p>
                  Aura Grills only uses your phone number and society name to confirm your requested doorstep laser site survey. We never sell, share, or lease customer data to third-party brokers, interior designers, or marketers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                <h4 className="font-bold text-white flex items-center gap-1.5 text-sm">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>2. Cookie Preferences &amp; Anonymous Analytics</span>
                </h4>
                
                <div className="space-y-3 pt-1">
                  <label className="flex items-center justify-between cursor-pointer p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div>
                      <div className="font-bold text-white">Essential Performance Cookies</div>
                      <div className="text-[11px] text-zinc-400">Required for smooth site navigation and instant quote dispatches.</div>
                    </div>
                    <input type="checkbox" checked disabled className="w-4 h-4 text-emerald-600 rounded bg-zinc-800 border-zinc-700" />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div>
                      <div className="font-bold text-white">Anonymous Experience Analytics</div>
                      <div className="text-[11px] text-zinc-400">Helps us optimize rapid survey van routing across Bangalore hubs.</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={cookieAnalytics} 
                      onChange={(e) => setCookieAnalytics(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded bg-zinc-800 border-zinc-700 cursor-pointer" 
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div>
                      <div className="font-bold text-white">Preferred Area Memorization</div>
                      <div className="text-[11px] text-zinc-400">Stores selected apartment corridor for faster WhatsApp quotes.</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={cookiePrefs} 
                      onChange={(e) => setCookiePrefs(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded bg-zinc-800 border-zinc-700 cursor-pointer" 
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 font-semibold">
                {cookieSaved ? "✓ Preferences Updated!" : "All telemetry is anonymized."}
              </span>
              <button
                onClick={handleSaveCookies}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
