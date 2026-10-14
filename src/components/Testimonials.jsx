import { CheckCircle2, Building2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      author: "Arun & Pooja Nair",
      role: "Residents since 2021",
      society: "Prestige Shantiniketan",
      tower: "Tower 18, 26th Floor",
      location: "Whitefield, East Bangalore",
      rating: 5,
      comment: "Living on the 26th floor with a 3-year-old was terrifying until Aura Grills installed invisible grills. The view of ITPL skyline is 100% open, but the safety is unbreakable. Our toddler plays freely on the wooden deck without any fear.",
      specs: "2.5mm Marine SS-316 • 26th Floor Penthouse"
    },
    {
      id: 2,
      author: "Karthik Raghavan",
      role: "IT Director & Resident",
      society: "Sobha Dream Acres",
      tower: "Wing 14, 18th Floor",
      location: "Panathur Road, Sarjapur Belt",
      rating: 5,
      comment: "Pigeons in Sarjapur were making our balcony unusable. Traditional green nets looked like an eyesore and tore in wind. Aura Grills invisible grills solved the bird problem permanently while looking like 5-star hotel luxury.",
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
      comment: "Our balcony faces Agara Lake, and we didn't want ugly iron cages ruining our morning coffee. Our Golden Retriever and daughter safely lounge by the railing now. You can barely see the wires from 10 feet away!",
      specs: "Lakefront Breeze • Child & Pet Safe"
    },
    {
      id: 4,
      author: "Col. Rajesh Verma (Retd.)",
      role: "Homeowner",
      society: "SNN Clermont",
      tower: "Tower 2, 34th Floor",
      location: "Nagavara Lakefront, Hebbal",
      rating: 5,
      comment: "At the 34th floor, wind speeds are intense. Aura Grills did a laser-calibrated tensioning job that is sturdy as a rock. Clean, punctual, and respectful technicians. Handed over written warranty card on spot.",
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
    <section id="reviews" className="py-20 sm:py-28 bg-zinc-50/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>VERIFIED HOMEOWNER ENDORSEMENTS • 850+ RESIDENCES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            Trusted by High-Rise Families{' '}
            <span className="text-emerald-700">Across Bengaluru</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Read genuine feedback from homeowners living across prominent towers in Whitefield, Sarjapur, HSR, Indiranagar, and Hebbal.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200/90 hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs group"
            >
              <div className="space-y-4">
                {/* Top Row: Verified Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Installation</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic font-normal">
                  "{rev.comment}"
                </p>

                {/* Specs Tag */}
                <div className="text-[11px] font-semibold text-emerald-800 bg-zinc-50 px-3 py-1.5 rounded-xl border border-zinc-200/80">
                  {rev.specs}
                </div>
              </div>

              {/* Author & Society Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-zinc-950">
                    {rev.author}
                  </h4>
                  <div className="text-[11px] text-zinc-500">
                    {rev.tower} • <strong className="text-zinc-700">{rev.society}</strong>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500 text-right">
                  📍 {rev.location.split(',')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Builder Society Strip */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-200/80">
          <div className="text-center text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-6">
            Compliant with Elevation Bylaws Across Premium Bengaluru Communities
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-extrabold text-zinc-700 uppercase tracking-wider">
            {societyPartners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition"
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
