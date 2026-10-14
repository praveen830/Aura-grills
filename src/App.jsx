import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BangalorePlacesDashboard from './components/BangalorePlacesDashboard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingConcierge from './components/FloatingConcierge';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleGoToDashboard = () => {
    setSelectedPlaceId(null);
    setSelectedServiceId(null);
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
        {/* Bangalore 6-Places Dashboard & Sub-Pages Flow + 4 Services Flow */}
        <BangalorePlacesDashboard 
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={setSelectedPlaceId}
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
          onBackToDashboard={handleGoToDashboard}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Verified Reviews Section (Only on main dashboard view) */}
        {!selectedPlaceId && !selectedServiceId && (
          <Testimonials />
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
