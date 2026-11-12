import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      author: "Arun & Pooja Nair",
      role: "Residents since 2021",
      society: "Prestige Shantiniketan",
      tower: "Tower 18, 26th Floor",
      location: "Whitefield, East Bengaluru",
      rating: 5,
      comment: "Living on the 26th floor with a 3-year-old was terrifying until Aura Grills installed invisible safety grills. The panoramic view of the ITPL skyline is 100% open, but the safety is rock solid. Our daughter plays freely on the wooden deck without any anxiety.",
      specs: "2.0mm Marine SS-316 • 26th Floor Penthouse"
    },
    {
      id: 2,
      author: "Karthik Raghavan",
      role: "IT Director & Resident",
      society: "Sobha Dream Acres",
      tower: "Wing 14, 18th Floor",
      location: "Panathur Road, Sarjapur Belt",
      rating: 5,
      comment: "Pigeons in Sarjapur were making our balcony unusable. Traditional nylon nets looked like an eyesore and tore in the wind. Aura Grills solved the bird problem permanently while looking like 5-star hotel luxury. Balcony is clean 365 days a year.",
      specs: "100% Pigeon Shield • Zero Droppings"
    },
    {
      id: 3,
      author: "Vikram & Ananya Shenoy",
      role: "Architect & Pet Parent",
      society: "Salarpuria Greenage",
      tower: "Ebony Block, 22nd Floor",
      location: "Hosur Road, Near HSR Layout",
      rating: 5,
      comment: "Our balcony faces Agara Lake, and we didn't want bulky iron cages ruining our morning coffee. Our Golden Retriever and toddler safely lounge by the railing now. You can barely see the cables from 3 meters away!",
      specs: "Lakefront Horizon • Child & Pet Safe"
    },
    {
      id: 4,
      author: "Col. Rajesh Verma (Retd.)",
      role: "Homeowner",
      society: "SNN Clermont",
      tower: "Tower 2, 34th Floor",
      location: "Nagavara Lakefront, Hebbal",
      rating: 5,
      comment: "At the 34th floor, wind speeds are intense. Aura Grills did a laser-calibrated tensioning job that is sturdy as an aircraft wing. Punctual and respectful technicians who handed over our written warranty card on the spot.",
      specs: "High-Altitude 70km/h Wind Certified"
    }
  ];

  const societyPartners = [
    "Prestige Estates",
    "Sobha Limited",
    "Brigade Group",
    "Godrej Properties",
    "Salarpuria Sattva",
    "Phoenix Mills",
    "Total Environment"
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F5F5F7] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
            Verified Homeowner Endorsements
          </div>

          <h2 className="text-apple-section font-medium tracking-apple-tight text-zinc-950 leading-[1.12]">
            Trusted by families across{' '}
            <span className="text-gradient-apple-dark block sm:inline">Bengaluru's finest towers.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Read genuine reflections from residents living across iconic high-rises in Whitefield, Sarjapur, HSR Layout, Indiranagar, and Hebbal.
          </p>
        </div>

        {/* Testimonials 2x2 Apple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 text-left">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-[28px] p-6 sm:p-8 apple-card-surface hover:shadow-apple-hover transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Star Rating + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-normal tracking-apple-tight">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Installation</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-zinc-700 leading-relaxed font-normal tracking-apple-normal">
                  "{rev.comment}"
                </p>

                {/* Specs Tag */}
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-xl bg-zinc-100 text-zinc-800 text-[11px] font-semibold tracking-apple-tight">
                    {rev.specs}
                  </span>
                </div>
              </div>

              {/* Author & Tower Info */}
              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950 tracking-apple-tight">
                    {rev.author}
                  </h3>
                  <div className="text-xs text-zinc-500 font-normal">
                    {rev.role}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-semibold text-emerald-700 tracking-apple-tight">
                    {rev.society}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {rev.tower}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Societies Strip */}
        <div className="pt-6 border-t border-black/5 space-y-4 text-center">
          <p className="text-[11px] uppercase font-semibold tracking-wider text-zinc-400">
            RWA Approved Standards Installed In Communities Built By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {societyPartners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-black/5 text-xs font-semibold text-zinc-700 shadow-xs"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
