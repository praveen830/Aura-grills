import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AurabLogo from './AurabLogo';

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
              ? 'bg-white/95 backdrop-blur-xl border-zinc-300/80 shadow-md shadow-zinc-950/5'
              : 'bg-white/90 backdrop-blur-md border-zinc-200/80 shadow-xs'
          }`}
        >
          {/* Brand Identity: Custom Aurab Logo + For Your Safety Tag */}
          <a
            href="#bangalore-dashboard"
            onClick={(e) => {
              e.preventDefault();
              if (onGoToDashboard) onGoToDashboard();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
          >
            <AurabLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-black tracking-tight text-zinc-950 flex items-center gap-1 leading-none">
                AURAB <span className="text-emerald-600">GRILLS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-extrabold text-zinc-500 pt-1 leading-none">
                Aurab Invisible Grills • For Your Safety
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

          {/* Mobile Menu Toggle (Call & WhatsApp buttons removed from above dashboard as requested) */}
          <div className="md:hidden flex items-center">
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
                Aurab Invisible Grills • For Your Safety
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
          </div>
        )}
      </header>
    </>
  );
}
