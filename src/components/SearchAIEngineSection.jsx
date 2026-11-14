import React, { useState } from 'react';
import { 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { gtag_report_conversion } from '../utils/gtag';

/**
 * SearchAIEngineSection - Google Search AI & SGE Semantic Authority Engine
 * Engineered for Google Gemini, SGE AI Overviews & Homeowner Architectural Diligence.
 * Features:
 * - Semantic Schema.org FAQPage microdata markup
 * - Direct answers for high-intent queries (Price per sq.ft, RWA approvals, Fire egress, SS-316 vs Iron)
 * - True Apple design DNA: Borderless surfaces, poised typography, smooth disclosure animations
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
          <div className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
            Search AI &amp; Architectural Authority
          </div>

          <h2 className="text-apple-section font-medium tracking-apple-tight text-zinc-950 leading-[1.12]">
            Frequently asked questions,{' '}
            <span className="text-gradient-apple-dark block sm:inline">answered with precision.</span>
          </h2>

          <p className="text-apple-subhead text-zinc-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Direct, certified architectural specifications addressing tensile ratings, RWA elevation approvals, fire safety, and fair square-foot pricing in Bengaluru.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full bg-zinc-100/90 border border-black/5 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium tracking-apple-tight transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white shadow-apple-sm'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Apple-Style Disclosure Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="apple-card-surface hover:shadow-apple-hover transition-all duration-300 overflow-hidden text-left"
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-medium tracking-[0.16em] text-zinc-400">
                      {faq.category}
                    </span>
                    <h3 
                      itemProp="name" 
                      className="text-base sm:text-lg font-medium text-zinc-950 tracking-apple-tight leading-snug"
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-zinc-900 text-white' : 'text-zinc-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-100 space-y-4"
                  >
                    <p 
                      itemProp="text" 
                      className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed"
                    >
                      {faq.answer}
                    </p>

                    {/* Spec Highlights */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {faq.highlights.map((highlight, hIdx) => (
                        <span 
                          key={hIdx}
                          className="px-3 py-1 rounded-full bg-zinc-100/80 text-zinc-600 text-xs font-normal"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical Inquiry Direct Action */}
        <div className="max-w-xl mx-auto text-center pt-4 space-y-3">
          <p className="text-xs sm:text-[13px] text-zinc-500 font-normal">
            Have a custom balcony question or specialized facade configuration?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/918523068882?text=Hello%20Aura%20Grills!%20I%20have%20a%20technical%20question%20regarding%20invisible%20safety%20grills%20for%20my%20balcony."
              target="_blank"
              rel="noreferrer"
              onClick={() => gtag_report_conversion()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200/70 text-zinc-800 font-medium text-xs sm:text-[13px] tracking-apple-tight transition flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask Our Technical Lead on WhatsApp</span>
            </a>

            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking('Technical Advisory')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-black text-white font-medium text-xs sm:text-[13px] tracking-apple-tight transition shadow-apple-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Architectural Callback</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
