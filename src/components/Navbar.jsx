import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Calendar } from 'lucide-react';
import AuraLogo from './AuraLogo';
import WhatsAppIcon from './WhatsAppIcon';
import { useRouter, Link } from '../router';

export default function Navbar({ onGoToDashboard, onOpenBooking }) {
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Apple-grade clean editorial navigation items
  const navLinks = [
    { name: 'Overview', href: '/#intro' },
    { name: 'Services', href: '/#services' },
    { name: 'Engineering', href: '/#measurements' },
    { name: '10-Yr Warranty', href: '/#warranty' },
    { name: 'Bangalore Hubs', href: '/#bangalore-dashboard' },
    { name: 'Contact', href: '/#contact' },
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

  const handleBookClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 mx-auto w-[92%] sm:w-[94%] max-w-6xl pointer-events-none transition-all duration-500">
        <div
          className={`pointer-events-auto flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'glass-apple bg-white/85 shadow-apple-float border border-black/8'
              : 'glass-apple bg-white/70 shadow-apple-sm border border-black/5'
          }`}
        >
          {/* Brand Identity: Apple-grade Monogram & Clean Typography */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              if (onGoToDashboard) onGoToDashboard();
              else goToDashboard();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="relative">
                <AuraLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-medium tracking-apple-tight text-zinc-950 flex items-center gap-1 leading-tight">
                  AURA <span className="text-zinc-950 font-semibold">GRILLS</span>
                </span>
                <span className="text-[9px] tracking-[0.16em] uppercase font-medium text-zinc-400 leading-tight">
                  Architectural Safety
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links: Apple-style Minimalist Text Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.04] transition-all duration-200 tracking-apple-tight whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: Sleek Apple Pill Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:+918523068882"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.04] transition-all flex items-center gap-1.5"
              title="Call Aura Grills Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-zinc-800 font-medium">+91 85230 68882</span>
            </a>

            <button
              type="button"
              onClick={handleBookClick}
              className="px-4 py-2 rounded-full bg-zinc-950 hover:bg-black text-white text-xs font-medium tracking-apple-tight transition-all duration-300 shadow-apple-sm hover:shadow-apple-hover flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Book Site Survey</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Mobile Actions: Call Shortcut + Hamburger */}
          <div className="lg:hidden flex items-center gap-1.5">
            <a
              href="tel:+918523068882"
              className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-[11px] font-semibold flex items-center gap-1 shadow-xs active:scale-95 transition"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-full text-zinc-800 hover:bg-black/5 active:scale-95 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Frosted Glass Modal Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xl animate-fadeIn flex flex-col justify-between p-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between pt-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <AuraLogo className="w-8 h-8 rounded-full" />
                <span className="text-white text-base font-semibold tracking-apple-tight">
                  Aura Grills
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center space-y-3 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center justify-between text-2xl font-semibold text-white/90 hover:text-white py-2 transition tracking-apple-tight"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-5 h-5 text-zinc-500" />
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleBookClick}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Doorstep Survey</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+918523068882"
                  className="py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20am%20interested%20in%20SS-316%20invisible%20safety%20grills."
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition text-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
