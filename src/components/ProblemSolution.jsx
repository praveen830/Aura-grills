import React, { useState } from 'react';
import { XCircle, CheckCircle2, Shield, Eye, Wind, Flame, Sparkles, Heart, Check, ArrowRight, AlertTriangle } from 'lucide-react';

export default function ProblemSolution({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const problemsAndSolutions = [
    {
      id: "child-safety",
      tabTitle: "Toddler & Baby Safety",
      icon: Shield,
      problem: {
        tag: "Critical Hazard #01",
        heading: "Terrifying Fall Risks on 15th+ Floor Balconies",
        description: "Modern architectural glass railings or wide bar balustrades leave fatal 6-8 inch openings. Curious toddlers and crawling infants can slip through within a split second, causing constant parental anxiety and fear of stepping onto your own balcony.",
        image: "/images/toddler-safe.jpg",
        painPoints: [
          "Glass railings have gap heights unsafe for toddlers",
          "Constant worry prevents children from playing in fresh air",
          "One second of distraction can cause irreversible tragedy"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #01",
        heading: "Certified 400kg Load • Zero Slip-Through 2-Inch Grid",
        description: "High-tensile SS-316 vertical wires spaced at strict 50mm (2-inch) gaps. Physically impossible for children or babies to squeeze through. Encased in transparent virgin nylon that is soft to infant hands with zero sharp edges.",
        image: "/images/toddler-safe.jpg",
        keyBenefits: [
          "Tested to 400kg individual wire tensile break resistance",
          "Babies and children play freely and safely in morning sunshine",
          "Soft UV-nylon coating prevents hand or finger abrasions"
        ]
      }
    },
    {
      id: "pigeon-menace",
      tabTitle: "Pigeon & Bird Menace",
      icon: Sparkles,
      problem: {
        tag: "Hygiene Hazard #02",
        heading: "Ugly Green Nylon Nets, Bird Poop & Toxic Spores",
        description: "Pigeons turn luxury Bangalore balconies into filthy nesting grounds. Their acidic droppings ruin tiles and spread airborne respiratory fungal spores. Conventional green nylon bird nets tear in high wind, trap dead birds, and make apartments look like construction slums.",
        image: "/images/pigeon-free.jpg",
        painPoints: [
          "Bird droppings create severe foul odors and lung health risks",
          "Cheap plastic nets sag, tear, collect dust, and discolor",
          "Destroys balcony usability for morning tea and family lounging"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #02",
        heading: "100% Pigeon Exclusion with Zero Ugly Nets",
        description: "Strict 2-inch vertical stainless steel barrier prevents pigeons and birds from entering, landing, or perching on railings. Balconies stay immaculately clean, odorless, and sanitary 365 days a year without ugly sagging nets.",
        image: "/images/pigeon-free.jpg",
        keyBenefits: [
          "Complete eradication of pigeon nesting and foul droppings",
          "Preserves 99% open light, wind, and aesthetic beauty",
          "Zero dust accumulation and 100% easy to wipe clean"
        ]
      }
    },
    {
      id: "view-aesthetic",
      tabTitle: "Skyline View & Breeze",
      icon: Eye,
      problem: {
        tag: "Aesthetic Hazard #03",
        heading: "Heavy Iron Grills Look Like Cages & Block 60% Wind",
        description: "You invested ₹1.5 Cr to ₹5 Cr for high-rise views of Bangalore's skyline, lakes, and greenery. Traditional mild-steel (MS) box grills convert your luxury home into a gloomy prison cell, cutting off cross ventilation and natural morning daylight.",
        image: "/images/whitefield-real-balcony.jpg",
        painPoints: [
          "Cuts off 60% of natural sunlight and fresh air circulation",
          "Suffocating cage feeling destroys luxury interior aesthetics",
          "Reduces resale and rental appeal of premium apartments"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #03",
        heading: "98.7% Invisible Optical Freedom & Full Cross Breeze",
        description: "Slender 2.5mm / 3.0mm aerospace-grade cables disappear into the horizon from just 5 feet away. Enjoy 100% unhindered panoramic views of sunrises, sunsets, and lush tree canopies while feeling completely safe.",
        image: "/images/penthouse-panoramic-balcony.jpg",
        keyBenefits: [
          "Unblocked 180° horizon views with luxury resort ambience",
          "Full natural Bangalore cross-ventilation and sunlight inflow",
          "Seamlessly blends into luxury minimalist interior design"
        ]
      }
    },
    {
      id: "rust-corrosion",
      tabTitle: "Rust & Monsoons",
      icon: Wind,
      problem: {
        tag: "Durability Hazard #04",
        heading: "Monsoon Rust Streaks, Corroding Joints & Flaking Paint",
        description: "Bangalore monsoons and morning lakefront humidity quickly corrode ordinary iron and low-grade SS-202 grills. Within 18-24 months, rust stains drip onto expensive floor tiles, structural weld joints weaken, and toxic paint flakes off.",
        image: "/images/laser-measurement.jpg",
        painPoints: [
          "Ordinary iron grills rust and weaken within 2 monsoon seasons",
          "Dripping rust permanently stains Italian marble and vitrified tiles",
          "Requires recurring repainting, scraping, and maintenance costs"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #04",
        heading: "10-Year 100% Anti-Rust Certified SS-316 Marine Grade",
        description: "Forged with genuine Virgin Marine-Grade SS-316 infused with 2.5% Molybdenum core alloy and ASTM B117 salt-mist certified. Guaranteed zero rust, zero oxidation, and zero pitting. Backed by our official 10-year replacement warranty certificate.",
        image: "/images/installer-work-real.jpg",
        keyBenefits: [
          "SS-316 with 2.5% Molybdenum core immune to moisture & lake mists",
          "Zero maintenance — never requires painting or anti-rust coatings",
          "Official 10-Year written warranty certificate provided on site"
        ]
      }
    },
    {
      id: "fire-egress",
      tabTitle: "Fire Emergency",
      icon: Flame,
      problem: {
        tag: "Safety Hazard #05",
        heading: "Permanently Welded Iron Grills Trap Families in Fires",
        description: "In high-rise electrical short circuits or kitchen fire emergencies, conventional iron grills act as inescapable death traps. Welded iron bars cannot be breached by occupants or firefighters without heavy industrial gas cutters.",
        image: "/images/french-window.jpg",
        painPoints: [
          "Balconies become trapped dead-ends during residential fires",
          "Fire rescue crews cannot break through heavy welded iron bars quickly",
          "Causes severe compliance violations in modern society bylaws"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #05",
        heading: "10-Second Emergency Wire-Cutter Evacuation Protocol",
        description: "While physically unyielding and unbreakable by human hands or weight, Aura Grills cables can be cleanly snipped using standard emergency wire-cutters by first responders in under 10 seconds, ensuring a safe evacuation window.",
        image: "/images/installer-work-real.jpg",
        keyBenefits: [
          "Emergency rescue crews can cleanly cut wires in under 10 seconds",
          "Complies with Indian National Building Code (NBC) fire safety guidelines",
          "Provides unconditional life safety for your family and elderly parents"
        ]
      }
    },
    {
      id: "pet-safety",
      tabTitle: "Dog & Cat Security",
      icon: Heart,
      problem: {
        tag: "Pet Hazard #06",
        heading: "Curious Pets, Vertigo & Deadly High-Rise Falls",
        description: "Cats chasing pigeons or curious dogs peering over balconies are at constant risk of high-rise 'high-rise syndrome' falls. Pet parents are forced to keep balcony French doors permanently locked, depriving pets of fresh air and sunlight.",
        image: "/images/hsr-family-balcony.jpg",
        painPoints: [
          "Balcony doors kept permanently locked out of anxiety for pets",
          "Wide railing gaps let cats and small dogs slip over the edge",
          "Sharp wire edges on cheap chicken meshes cause paw injuries"
        ]
      },
      solution: {
        tag: "Aura Grills Solution #06",
        heading: "Smooth Nylon Coating • Complete High-Rise Pet Freedom",
        description: "Our seamless vertical cable system allows dogs and cats to sunbathe, observe birds, and enjoy the breeze with total security. Smooth nylon sheath guarantees zero paw cuts, and the 2-inch gap prevents any pet from slipping through.",
        image: "/images/hsr-family-balcony.jpg",
        keyBenefits: [
          "Pet parents can leave balcony sliding doors open with peace of mind",
          "Ultra-smooth coating protects pet paws, noses, and coats",
          "Zero vertigo sensation while keeping pets firmly on the balcony"
        ]
      }
    }
  ];

  const current = problemsAndSolutions[activeTab];

  return (
    <section id="problem-solutions" className="relative py-20 px-5 sm:px-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[10px] font-bold text-[#16A34A] uppercase tracking-widest mb-3 shadow-xs">
            <span>ONE CRITICAL DILEMMA • MULTIPLE ENGINEERED SOLUTIONS</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight">
            THE HIGH-RISE BALCONY PROBLEM, <span className="text-[#16A34A]">SOLVED PERMANENTLY</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            High-rise living is magnificent, but unshielded balconies or ugly iron cages create endless headaches. See how certified SS-316 invisible grills deliver the ultimate multi-purpose solution.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {problemsAndSolutions.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-emerald-600/25 scale-102'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Problem / The Pain (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-rose-200 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase tracking-wider">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>The Pain Point</span>
                </span>
                <span className="text-xs font-mono font-bold text-rose-500 uppercase">
                  {current.problem.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {current.problem.heading}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {current.problem.description}
              </p>

              {/* Pain Point Bullets */}
              <div className="space-y-2.5 pt-2">
                {current.problem.painPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-rose-900 font-medium">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/80 flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-rose-300 bg-slate-200">
                <img src={current.problem.image} alt={current.problem.heading} className="w-full h-full object-cover filter grayscale contrast-125" />
              </div>
              <div className="text-xs text-rose-800 font-semibold leading-relaxed">
                Traditional solutions like welded iron bars or plastic green nets only introduce new dangers and ruin aesthetics.
              </div>
            </div>
          </div>

          {/* Right: The Solution / Invisible Grills (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-emerald-500/10">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-100" />
                  <span>The Engineered Solution</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                  100% Guaranteed
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {current.solution.heading}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {current.solution.description}
              </p>

              {/* Solution Highlights */}
              <div className="space-y-2.5 pt-2">
                {current.solution.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold bg-white/80 p-2.5 rounded-xl border border-emerald-200/70 shadow-2xs">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Proof and CTA */}
            <div className="mt-8 pt-5 border-t border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-500 shadow-md relative bg-slate-900">
                  <img src={current.solution.image} alt={current.solution.heading} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-50"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 10px)'
                    }}
                  ></div>
                </div>
                <div className="text-xs text-emerald-950 font-bold leading-snug">
                  Zero view obstruction • 10-Year Anti-Rust Warranty • 400kg Breaking Load
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#16A34A] hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg transition cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Upgrade Balcony</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 8-Point Solutions Matrix Banner */}
        <div className="mt-14 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h4 className="text-base font-extrabold uppercase tracking-tight text-slate-900">
              Why Bangalore High-Rises Choose Invisible Grills Over Everything Else
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl font-black text-[#16A34A]">400 KG</div>
              <div className="text-[11px] font-bold text-slate-800 uppercase mt-1">Tensile Breaking Load</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Impervious to body weight</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl font-black text-[#16A34A]">2 INCH</div>
              <div className="text-[11px] font-bold text-slate-800 uppercase mt-1">Safety Gap Spacing</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Zero pigeon & child slip</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl font-black text-[#16A34A]">99%</div>
              <div className="text-[11px] font-bold text-slate-800 uppercase mt-1">View & Breeze Retention</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Disappears from 5 feet away</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl font-black text-[#16A34A]">10 YRS</div>
              <div className="text-[11px] font-bold text-slate-800 uppercase mt-1">Anti-Rust Warranty</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Marine-grade SS-316 core</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
