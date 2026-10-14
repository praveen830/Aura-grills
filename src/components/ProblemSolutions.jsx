import React from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemSolutions({ onOpenBooking }) {
  const problemsAndSolutions = [
    {
      id: 1,
      tag: "Child Safety",
      title: "Toddler & Child Balcony Protection",
      problem: "High-rise modern glass balustrades leave open gaps or ledges where crawling infants and curious children can slip through in a split-second.",
      solution: "Slender SS-316 high-tensile invisible grill cables tensioned at 2-inch safe gaps. Soft to infant hands, zero climbing footholds, and certified 400kg fall resistance.",
      image: "/images/toddler-safe.jpg",
      highlight: "100% Baby-Safe • 2-Inch Precision Spacing"
    },
    {
      id: 2,
      tag: "Bird Deterrence",
      title: "Permanent Pigeon Shield Without Ugly Green Nets",
      problem: "Pigeons turn luxury balconies into messy nesting zones with acidic droppings and bad odors. Traditional plastic green nets sag, tear in wind, and trap dust.",
      solution: "Strict 50mm vertical steel cables physically stop pigeons from entering or landing on railings. Balconies stay spotless, clean, and odor-free 365 days a year.",
      image: "/images/pigeon-free.jpg",
      highlight: "Zero Birds & Droppings • No Sagging Nets"
    },
    {
      id: 3,
      tag: "Emergency Safety",
      title: "10-Second Fire Evacuation Egress",
      problem: "Permanently welded traditional MS iron grills trap families inside during domestic kitchen or electrical fires, blocking fire department ladders.",
      solution: "While completely unbreakable by human hands or body weight, invisible grill cables can be quickly cut by emergency rescue crews in under 10 seconds using wire cutters.",
      image: "/images/technicians-installing-real.jpg",
      highlight: "Emergency Snip In 10s • Fire Norm Compliant"
    },
    {
      id: 4,
      tag: "Lifestyle & Views",
      title: "100% Daylight, Fresh Breeze & Uncut Horizon",
      problem: "Dark iron grills create a prison-like cage feeling, blocking natural morning sunlight, cross-ventilation, and the high-rise cityscape you paid for.",
      solution: "Virtually invisible from 5 meters away. Enjoy pure natural sunlight, uninterrupted evening breeze, and 100% open panoramic skyline views.",
      image: "/images/luxury-family-balcony-sunset.jpg",
      highlight: "Unobstructed Views • Zero Rust Marine SS-316"
    }
  ];

  return (
    <section id="problem-solutions" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
            <span>REAL PROBLEMS • CERTIFIED INVISIBLE GRILL SOLUTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            High-Rise Balcony Problems,{' '}
            <span className="text-emerald-700">Solved Permanently</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Traditional iron cages and green nets ruin your home. See how certified SS-316 invisible safety grills solve safety and bird problems without compromising your view.
          </p>
        </div>

        {/* 4 Authentic Problem vs Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemsAndSolutions.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-zinc-200 bg-zinc-50/50 overflow-hidden hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between hover:shadow-lg shadow-2xs"
            >
              <div>
                {/* Real Balcony Image */}
                <div className="relative aspect-16/9 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-zinc-700/60">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-xl bg-white/95 text-emerald-800 text-xs font-black shadow-md">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950">
                    {item.title}
                  </h3>

                  {/* Problem Box */}
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[10px] text-rose-700 block">
                      The Common Problem:
                    </span>
                    <p className="leading-relaxed">{item.problem}</p>
                  </div>

                  {/* Solution Box */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[10px] text-emerald-700 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                      Our Invisible Grill Solution:
                    </span>
                    <p className="leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="w-full py-2.5 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Measurement for this Issue</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
