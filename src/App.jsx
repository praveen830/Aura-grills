import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HardwareBentoGrid from './components/HardwareBentoGrid';
import ServicesSection from './components/ServicesSection';
import SafetyMeasurementsSection from './components/SafetyMeasurementsSection';
import WarrantySection from './components/WarrantySection';
import ContactSection from './components/ContactSection';
import StickyMobileConversionBar from './components/StickyMobileConversionBar';
import BangalorePlacesDashboard from './components/BangalorePlacesDashboard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingConcierge from './components/FloatingConcierge';
import BookingModal from './components/BookingModal';
import { RouterProvider, useRouter } from './router';

function MainLayout() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState('');
  const { 
    selectedPlaceId, 
    selectedServiceId, 
    varietyId,
    navigate, 
    goToDashboard,
    getLocationUrl,
    getServiceUrl 
  } = useRouter();

  const handleOpenPlace = (placeId) => {
    navigate(getLocationUrl(placeId));
  };

  const handleOpenService = (serviceId) => {
    navigate(getServiceUrl(serviceId));
  };

  const handleOpenBooking = (serviceName = '') => {
    setSelectedBookingService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {/* Floating Header */}
      <Navbar onGoToDashboard={() => goToDashboard()} onOpenBooking={handleOpenBooking} />

      {/* Main Experience: Starts with Hero Section 01 (#intro) */}
      <main className="w-full pt-16 sm:pt-20">
        {/* SECTION 01: Main Introduction & Realistic Hero Showcase */}
        {!selectedPlaceId && !selectedServiceId && (
          <Hero onOpenBooking={handleOpenBooking} />
        )}

        {/* SECTION 01B: Apple Hardware Bento Grid (Engineering Core & Precision) */}
        {!selectedPlaceId && !selectedServiceId && (
          <HardwareBentoGrid onOpenBooking={handleOpenBooking} />
        )}

        {/* SECTION 02: Mana Services (Architectural Safety Suite) */}
        {!selectedPlaceId && !selectedServiceId && (
          <ServicesSection 
            onOpenBooking={handleOpenBooking} 
            onSelectService={handleOpenService}
          />
        )}

        {/* SECTION 03: Safety Measurements & Engineering Laser Protocol */}
        {!selectedPlaceId && !selectedServiceId && (
          <SafetyMeasurementsSection onOpenBooking={handleOpenBooking} />
        )}

        {/* SECTION 04: 10-Year Stamped Bond & Material Quality Checklist */}
        {!selectedPlaceId && !selectedServiceId && (
          <WarrantySection onOpenBooking={handleOpenBooking} />
        )}

        {/* Bangalore 6-Places Dashboard & Sub-Pages Flow + 4 Services Flow */}
        <BangalorePlacesDashboard 
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={handleOpenPlace}
          selectedServiceId={selectedServiceId}
          selectedVarietyId={varietyId}
          onSelectService={handleOpenService}
          onBackToDashboard={() => goToDashboard()}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Verified Reviews Section (Only on main dashboard view) */}
        {!selectedPlaceId && !selectedServiceId && (
          <Testimonials />
        )}

        {/* SECTION 06: Express Doorstep Survey Van Dispatch & Direct Helpline */}
        {!selectedPlaceId && !selectedServiceId && (
          <ContactSection />
        )}
      </main>

      {/* Corporate Footer with Bangalore HQ & Direct Helpline */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Desktop Floating Concierge Action Buttons (hidden md:block) */}
      <FloatingConcierge />

      {/* Sticky Mobile Bottom Conversion Bar (md:hidden) */}
      <StickyMobileConversionBar onOpenBooking={handleOpenBooking} />

      {/* Frictionless 1-Tap Booking Modal with Instant WhatsApp Dispatch */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedBookingService('');
        }}
        initialService={selectedBookingService}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
