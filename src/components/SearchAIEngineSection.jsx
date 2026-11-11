import React, { useState } from 'react';
import { 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  ArrowRight
} from 'lucide-react';

/**
 * SearchAIEngineSection - Google Search AI & SGE Semantic Authority Engine
 * Engineered for Google Gemini, SGE AI Overviews & Homeowner Architectural Diligence.
 * Features:
 * - Semantic Schema.org FAQPage microdata markup
 * - Direct answers for high-intent queries (Price per sq.ft, RWA approvals, Fire egress, SS-316 vs Iron)
 * - True Apple design DNA: Borderless surfaces, fluid typography, smooth disclosure animations
 */

const FAQS = [
  {
    category: 'Engineering & Materials',
    question: 'Why are SS-316 Invisible Grills replacing iron balcony cages in Bengaluru high-rises?',
    answer: 'Traditional iron grilles corrode quickly under Bengaluru monsoons, block up to 40% of natural sunlight, and permanently alter the building’s exterior facade—often violating gated community RWA bylaws. Aura SS-316 Invisible Grills use aerospace-grade 2.0mm–3.0mm marine cables infused with molybdenum to prevent oxidation. They provide 400kg certified tensile breaking strength per strand while preserving 100% of panoramic skyline views and natural airflow.',
    highlights: ['Resists monsoons & urban smog', 'Zero skyline view blockage', '10-year stamped replacement warranty']
  },
  {
    category: 'RWA & Society Approvals',
    question: 'Are Aura Invisible Grills approved by RWAs in Prestige, Sobha, Brigade, and Godrej societies?',
    answer: 'Yes. Aura Invisible Grills are 100% RWA-compliant and pre-cleared across top Bengaluru residential communities, including Prestige Shantiniketan, Prestige Falcon City, Sobha Dream Acres, Brigade Gateway, and Godrej United. Because our slim 6063-T6 track mounts flush to inner lintel walls without altering the external elevation, RWAs consistently permit Aura installations where bulky iron or safety nets are prohibited.',
    highlights: ['Flush-mount architectural track', 'Zero external facade alteration', 'Pre-cleared in 280+ Bengaluru societies']
  },
  {
    category: 'Safety & Emergency Protocol',
    question: 'How do invisible grills compare to iron bars during a high-rise fire emergency?',
    answer: 'Iron balcony cages create a dangerous entrapment risk during high-rise fires, blocking fire department access and resident evacuation. In contrast, Aura high-tensile invisible grills can be severed with standard emergency wire-cutters in under 10 seconds by rescue personnel or trained homeowners, adhering strictly to modern fire and disaster egress safety guidelines.',
    highlights: ['< 10 second rescue cut-time', 'Fire department evacuation compliant', 'No trapped heat or emergency locks']
  },
  {
    category: 'Child & Pet Protection',
    question: 'How does the 50mm pitch spacing prevent toddler and pet accidents?',
    answer: 'Aura invisible grills are laser-spaced at an exact 50mm (2-inch) uniform pitch. This gap is mathematically calibrated to prevent toddler head entrapment, eliminate climbing footholds, and keep domestic pets (cats and dogs) safe from accidental slips. Furthermore, cables are coated in transparent DuPont virgin nylon to ensure no sharp burrs harm children’s hands.',
    highlights: ['50mm zero-foothold pitch', 'DuPont smooth protective armor', '400kg load test per cable']
  },
  {
    category: 'Pricing & Installation',
    question: 'What is the price of invisible grills per square foot in Bangalore, and how long does installation take?',
    answer: 'Aura Invisible Grills typically range from ₹130 to ₹170 per square foot depending on cable thickness (2.0mm to 3.0mm) and balustrade geometry. Pricing is completely transparent and includes laser-guided measurement, 6063-T6 anodized track extrusions, SS-316 fasteners, professional installation by certified technicians, and our official 10-year stamped bond. Standard balcony installations are completed in 3 to 5 hours with zero mess.',
    highlights: ['Transparent all-inclusive pricing', '3-5 hour clean installation', 'Free doorstep laser measurement']
  },
  {
    category: 'Bird & Pigeon Deterrence',
    question: 'Do invisible grills effectively stop pigeons from entering balconies?',
    answer: 'Yes. The 50mm uniform vertical cable tension prevents pigeons from perching or flying between the lines, making it physically impossible for birds to nest on your balcony ledges. Unlike nylon bird nets that sag or trap birds, invisible grills provide a humane, permanent, and maintenance-free bird barrier.',
    highlights: ['Humane zero-perch barrier', 'No drooping or tearing over time', 'Preserves clean balcony hygiene']
  }
];

const CATEGORIES = [
  'All Queries',
  'Engineering & Materials',
  'RWA & Society Approvals',
  'Safety & Emergency Protocol',
  'Child & Pet Protection',
  'Pricing & Installation'
];

export default function SearchAIEngineSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All Queries');
  const [openIndex, setOpenIndex] = useState(0); // Open first by default for quick view

  const filteredFaqs = activeCategory === 'All Queries'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(prev => prev === idx ? -1 : idx);
  };

  return (
    <section 
      id="search-authority" 
      itemScope 
      itemType="https://schema.org/FAQPage"
      className="relative py-20 sm:py-28 md:py-32 bg-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#F5F5F7]/80 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Apple Keynote Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/80 backdrop-blur-md text-[11px] font-semibold text-zinc-700 tracking-apple-tight">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase tracking-wider">Search AI &amp; Engineering Authority</span>
          </div>

          <h2 className="text-apple-section font-semibold tracking-apple-tight text-zinc-950 leading-[1.08]">
            Frequently asked questions,{' '}
            <span className="text-gradient-apple-dark block sm:inline">answered with precision.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Direct, certified architectural specifications addressing tensile ratings, RWA elevation approvals, fire safety, and fair square-foot pricing in Bengaluru.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-apple-tight transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white shadow-apple-sm'
                    : 'bg-[#F5F5F7] text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Two-Column Structured Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authority Callout Banner */}
          <div className="lg:col-span-4 space-y-6">
            <div className="apple-card-surface bg-[#F5F5F7] p-6 sm:p-8 rounded-[28px] space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-apple-sm flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-950 tracking-apple-tight">
                  Certified Architectural Compliance
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Every Aura installation meets Bureau of Indian Standards (BIS) structural tensile benchmarks and fire department safety escape guidelines.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-zinc-200/60 text-xs text-zinc-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 9001:2015 Certified Fabrication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10-Year Physical Replacement Bond</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-Elevation RWA Facade Approval</span>
                </div>
              </div>

              {onOpenBooking && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('Laser Survey')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-zinc-950 hover:bg-black text-white text-xs font-semibold tracking-apple-tight transition-all duration-300 shadow-apple-sm active:scale-95"
                  >
                    <span>Request Society Approval Kit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
                  </button>
                </div>
              )}
            </div>

            {/* Quick Contact Micro-Card */}
            <div className="p-6 rounded-[24px] border border-zinc-200/80 bg-white space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Technical Support Desk</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Need customized load calculations for penthouses, double-height balconies, or duplexes? Our structural team is available 7 days a week.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Schema Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="rounded-[24px] bg-[#F5F5F7] transition-all duration-300 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 block">
                        {faq.category}
                      </span>
                      <h3 
                        itemProp="name"
                        className="text-base sm:text-lg font-semibold text-zinc-950 tracking-apple-tight leading-snug"
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-white shadow-apple-sm flex items-center justify-center text-zinc-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-zinc-950 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div 
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                      className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-600 space-y-4 border-t border-zinc-200/50"
                    >
                      <div itemProp="text" className="leading-relaxed">
                        {faq.answer}
                      </div>

                      {faq.highlights && (
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {faq.highlights.map((h, i) => (
                            <span 
                              key={i} 
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-zinc-800 text-xs font-medium shadow-xs"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
