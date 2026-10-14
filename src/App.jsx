import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BangalorePlacesDashboard from './components/BangalorePlacesDashboard';
import SimpleSteps from './components/SimpleSteps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingConcierge from './components/FloatingConcierge';
import BookingModal from './components/BookingModal';

import InstallationSafetyProcess from './components/InstallationSafetyProcess';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const handleGoToDashboard = () => {
    setSelectedPlaceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      {/* Floating Header */}
      <Navbar 
        onGoToDashboard={handleGoToDashboard}
      />

      {/* Main Experience: Starts IMMEDIATELY with the Dashboard */}
      <main className="w-full pt-16 sm:pt-20">
        {/* Bangalore 6-Places Dashboard & Sub-Pages Flow (JP Nagar, KR Puram, RR Nagar, Hennur, E-City, Whitefield) */}
        <BangalorePlacesDashboard 
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={setSelectedPlaceId}
          onBackToDashboard={handleGoToDashboard}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3. Simple 3-Step Process, Installation & Safety, Testimonials (Only shown on main dashboard view, avoiding clutter after place projects) */}
        {!selectedPlaceId && (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InstallationSafetyProcess onOpenBooking={() => setIsBookingOpen(true)} />
            </div>
            <SimpleSteps onOpenBooking={() => setIsBookingOpen(true)} />
            <Testimonials />
          </>
        )}
      </main>

      {/* Corporate Footer with Bangalore HQ & Direct Helpline */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Floating Concierge Action Buttons (WhatsApp + Call) */}
      <FloatingConcierge />

      {/* Frictionless 1-Tap Booking Modal with Instant WhatsApp Dispatch */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
