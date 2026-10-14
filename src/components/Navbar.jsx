import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowRight, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ onGoToDashboard }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bangalore Hubs', href: '#bangalore-dashboard' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Helpline', href: '#footer-contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#bangalore-dashboard' && onGoToDashboard) {
      onGoToDashboard();
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 mx-auto w-[94%] max-w-5xl pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl border-zinc-300/80 shadow-md shadow-zinc-950/5'
              : 'bg-white/80 backdrop-blur-md border-zinc-200/80 shadow-xs'
          }`}
        >
          {/* Brand Identity: Monogram + Modern Type */}
          <a
            href="#bangalore-dashboard"
            onClick={(e) => {
              e.preventDefault();
              if (onGoToDashboard) onGoToDashboard();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Shield className="w-4 h-4 text-emerald-400 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-zinc-950 flex items-center gap-1">
                AURA <span className="text-emerald-600 font-black">GRILLS</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-zinc-500">
                Bengaluru Safety
              </span>
            </div>
          </a>

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
          </nav>

          {/* Primary Action Buttons: Call & WhatsApp Buttons & Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Call Button */}
            <a
              href="tel:+918523068882"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-xs active:scale-95"
              title="Call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20invisible%20safety%20grills%20for%20my%20balcony."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-1.5 rounded-full text-zinc-700 hover:bg-zinc-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Aligned to Right Side */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 ml-auto max-w-xs w-full p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-2xl shadow-zinc-950/15 space-y-2 animate-fadeIn">
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
            <div className="pt-2 mt-1 border-t border-zinc-100 grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+918523068882"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold transition active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20invisible%20safety%20grills."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold transition active:scale-95 text-center"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
