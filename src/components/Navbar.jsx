import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import AuraLogo from './AuraLogo';
import { useRouter, Link } from '../router';

export default function Navbar({ onGoToDashboard }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigate, goToDashboard } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bangalore Hubs', href: '/#bangalore-dashboard' },
    { name: 'Balcony Services', href: '/#balcony-services' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Helpline', href: '/#footer-contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '');
      if (window.location.pathname !== '/') {
        navigate(`/#${hash}`);
      } else {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 mx-auto w-[94%] max-w-5xl pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-zinc-300/80 shadow-md shadow-zinc-950/5'
              : 'bg-white/90 backdrop-blur-md border-zinc-200/80 shadow-xs'
          }`}
        >
          {/* Brand Identity: Custom Aura Logo + Stainless Steel Tag */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (onGoToDashboard) onGoToDashboard();
              else goToDashboard();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
          >
            <AuraLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-black tracking-tight text-zinc-950 flex items-center gap-1 leading-none">
                AURA <span className="text-emerald-600">GRILLS</span>
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] tracking-wider uppercase font-extrabold text-zinc-500 pt-1 leading-none truncate max-w-[190px] sm:max-w-none">
                Invisible Grills With Stainless Steel
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918523068882"
              className="ml-2 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-1.5">
            <a
              href="tel:+918523068882"
              className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold"
              aria-label="Direct Phone Call"
            >
              Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 rounded-full text-zinc-700 hover:bg-zinc-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Aligned to Right Side */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 ml-auto max-w-xs w-full p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-2xl shadow-zinc-950/15 space-y-1 animate-fadeIn">
            <div className="px-3 py-1.5 pb-2 border-b border-zinc-100 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600">
                Aura Grills • SS-316 Stainless Steel
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-100 space-y-1.5">
              <a
                href="tel:+918523068882"
                className="w-full py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-bold flex items-center justify-center gap-1.5 text-center active:scale-95 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 text-center"
              >
                💬 WhatsApp Instant Quote
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
