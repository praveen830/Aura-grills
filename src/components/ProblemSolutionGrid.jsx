import React from 'react';
import { ShieldCheck, Sparkles, Flame, Droplets, Eye, Heart, ArrowRight } from 'lucide-react';

export default function ProblemSolutionGrid({ onOpenBooking }) {
  const challenges = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Toddler Fall Prevention",
      badge: '2" Precision Safety Spacing',
      problem: "Standard modern glass railings leave dangerous 6-8 inch open ledges where crawling infants can slip through in a split second.",
      solution: "Slender SS-316 cables tensioned at 50mm gaps. Physically impossible for children to slip through, encased in smooth virgin nylon soft to infant skin.",
      metric: "400kg Breaking Resistance",
      image: "/images/toddler-safe.jpg"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Pigeon & Pest Eradication",
      badge: "Zero Bird Entry & Droppings",
      problem: "Pigeons turn luxury balconies into filthy nesting spots with acidic droppings and toxic fungal spores. Cheap green nets sag, tear, and trap dust.",
      solution: "50mm vertical stainless steel grid prevents pigeons from landing or perching. Balconies stay immaculately clean and odor-free 365 days a year.",
      metric: "100% Pigeon Shield",
      image: "/images/pigeon-free.jpg"
    },
    {
      id: 3,
      icon: Flame,
      title: "Fire Emergency Rescue",
      badge: "10-Second Snip Egress",
      problem: "Permanently welded MS iron bars trap families during domestic kitchen or electrical fires, preventing fire ladder evacuations.",
      solution: "Impervious to human hands and body weight, but can be cleanly snipped using standard wire-cutters by emergency rescue crews in under 10 seconds.",
      metric: "NBC Fire Code Compliant",
      image: "/images/technicians-installing-real.jpg"
    },
    {
      id: 4,
      icon: Droplets,
      title: "Rustproof Weather Defense",
      badge: "SS-316 + 2.5% Molybdenum",
      problem: "Ordinary iron and low-grade SS-202 corrode in Bangalore monsoons and lake mists, dripping ugly reddish-brown rust stains on balcony tiles.",
      solution: "Forged with genuine Virgin Marine-Grade SS-316 infused with Molybdenum alloy. 100% immune to corrosion, backed by a 10-year written warranty.",
      metric: "10-Year Replacement Warranty",
      image: "/images/installer-work-real.jpg"
    },
    {
      id: 5,
      icon: Eye,
      title: "Uncompromised Skyline Views",
      badge: "Zero Prison Cage Feeling",
      problem: "Heavy MS iron grills block up to 60% natural daylight and wind, making ₹2 Cr+ high-rise apartments feel like suffocating prison cells.",
      solution: "Slender 2.5mm aerospace cables disappear into the horizon from 5 feet away. Enjoy 100% unhindered panoramic sunrise views and natural cross-breeze.",
      metric: "99% View & Breeze Retained",
      image: "/images/penthouse-panoramic-balcony.jpg"
    },
    {
      id: 6,
      icon: Heart,
      title: "Pet & Cat Balcony Freedom",
      badge: "High-Rise Paw-Safe Security",
      problem: "Curious cats chasing birds or playful dogs peering over open balustrades are at constant risk of vertigo and deadly high-rise falls.",
      solution: "Ultra-smooth nylon sheath prevents paw cuts while giving pets total freedom to sunbathe safely by open French doors with zero anxiety.",
      metric: "Zero Vertigo Anxiety",
      image: "/images/hsr-family-balcony.jpg"
    }
  ];

  return (
    <section id="engineering" className="py-20 sm:py-28 bg-zinc-50/60 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ARCHITECTURAL ENGINEERING • 6 CRITICAL SOLUTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
            High-Rise Challenges,{' '}
            <span className="text-emerald-700">Engineered Solutions</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            See how certified SS-316 invisible safety grills eliminate the dangers, filth, and aesthetic compromises of traditional railings.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group rounded-3xl overflow-hidden border border-zinc-200/90 bg-white hover:border-zinc-400/90 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-950/5 shadow-2xs"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {card.metric}
                    </div>

                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-zinc-700/60">
                      {card.badge}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h3 className="text-base font-extrabold text-zinc-950 leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed">
                      <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/80 text-rose-900">
                        <strong className="block text-[10px] uppercase font-bold text-rose-700 mb-0.5">The Pain:</strong>
                        {card.problem}
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                        <strong className="block text-[10px] uppercase font-bold text-emerald-700 mb-0.5">Aura Solution:</strong>
                        {card.solution}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-zinc-500 font-medium">
                      100% Guaranteed Outcome
                    </span>

                    <button
                      onClick={onOpenBooking}
                      type="button"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Protected</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
