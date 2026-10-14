import React, { useState } from 'react';
import { Heart, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BANGALORE_LOCATIONS } from '../data/bangaloreLocations';

export default function RealGallery({ onOpenBooking, onSelectLocation }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [likes, setLikes] = useState({
    1: 142, 2: 189, 3: 231, 4: 98, 5: 312, 6: 175, 7: 219, 8: 164, 9: 288
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "Balconies",
      title: "Luxury High-Rise Golden Hour Balcony with Family",
      location: "East Bangalore (Whitefield)",
      locationId: "whitefield",
      image: "/images/luxury-family-balcony-sunset.jpg",
      description: "Sunset horizon view with certified SS-316 vertical invisible grills. Toddler safely enjoying the wooden deck balcony with parents in complete safety.",
      installedBy: "Team Alpha (Suresh G.)",
      specs: "SS-316 2.5mm • 10-Yr Warranty"
    },
    {
      id: 2,
      category: "Installers at Work",
      title: "Certified Technicians Calibrating Wire Tension",
      location: "Prestige Shantiniketan, Whitefield",
      locationId: "whitefield",
      image: "/images/technicians-installing-real.jpg",
      description: "Two certified installers in safety harnesses calibrating digital tension gauge along heavy-duty 6063-T6 aluminum track for flawless alignment.",
      installedBy: "Senior Tech Suresh & Fitter",
      specs: "Laser Calibrated • 400kg Load"
    },
    {
      id: 3,
      category: "Installers at Work",
      title: "Precision Tensioning Gauge on High-Rise Balcony",
      location: "Sobha Dream Acres, Sarjapur Road",
      locationId: "sarjapur-bellandur",
      image: "/images/installer-work-real.jpg",
      description: "Certified Aura Grills installer adjusting continuous tension along top extruded track using high-grade safety harness and torque meter.",
      installedBy: "Lead Tech Santhosh",
      specs: "Laser Calibrated • Hilti Anchors"
    },
    {
      id: 3,
      category: "Kids & Pets",
      title: "Zero Anxiety Toddler Balcony Play Zone",
      location: "Salarpuria Greenage, HSR Layout",
      locationId: "koramangala-hsr",
      image: "/images/toddler-safe.jpg",
      description: "Unbreakable 400kg tensile strength. Soft transparent virgin nylon coat prevents finger cuts while toddlers enjoy fresh air safely.",
      installedBy: "Lead Fitter Manjunath",
      specs: "2-Inch Spacing • Baby-Proof"
    },
    {
      id: 4,
      category: "French Windows",
      title: "Floor-to-Ceiling Luxury Window Protection",
      location: "Defence Colony Penthouse, Indiranagar",
      locationId: "indiranagar-domlur",
      image: "/images/french-window.jpg",
      description: "Custom champagne track finish matching sliding french window frames. Modern architectural aesthetic with zero iron cage feeling.",
      installedBy: "Architect Lead Ramesh",
      specs: "Anodized Track • Marine Grade"
    },
    {
      id: 5,
      category: "Kids & Pets",
      title: "Pet-Safe Balcony for Golden Retriever & Cats",
      location: "Mantri Sarovar, HSR Layout",
      locationId: "koramangala-hsr",
      image: "/images/hsr-family-balcony.jpg",
      description: "Curious pets safely lounging by the railing. 2-inch vertical gap prevents dogs and cats from squeezing through open balustrades.",
      installedBy: "Team HSR (Vikram)",
      specs: "Anti-Climb • Paw Safe"
    },
    {
      id: 6,
      category: "Pigeon Proof",
      title: "Pigeon-Free Balcony Over Agara Lakefront",
      location: "HSR Layout Sector 1",
      locationId: "koramangala-hsr",
      image: "/images/pigeon-free.jpg",
      description: "Pigeon nuisance completely resolved. 50mm vertical cables prevent roosting while preserving the open lakefront horizon.",
      installedBy: "Lead Tech Nagaraj",
      specs: "100% Pigeon Shield • No Nets"
    },
    {
      id: 7,
      category: "Balconies",
      title: "Panoramic Penthouse Horizon View",
      location: "Domlur & Old Airport Road Corridor",
      locationId: "indiranagar-domlur",
      image: "/images/penthouse-panoramic-balcony.jpg",
      description: "Complete 180-degree unobstructed horizon view with total fall security for duplex verandas and luxury penthouses.",
      installedBy: "Architect Lead Ramesh",
      specs: "SS-316 Marine • 10-Yr Guarantee"
    },
    {
      id: 8,
      category: "Installers at Work",
      title: "Sub-Millimeter German Laser Survey On-Site",
      location: "Electronic City Phase 1",
      locationId: "electronic-city",
      image: "/images/laser-measurement.jpg",
      description: "Laser level digital rangefinder ensuring sub-millimeter parallelism across concrete slab ledges prior to track fastening.",
      installedBy: "Tech Lead Prasad Rao",
      specs: "0.1mm Accuracy • Free BLR Visit"
    },
    {
      id: 9,
      category: "Balconies",
      title: "High-Altitude Wind Test on 34th Floor",
      location: "SNN Clermont, Hebbal",
      locationId: "hebbal-yelahanka",
      image: "/images/hebbal-balcony.jpg",
      description: "High-wind certified installation at 34th floor overlooking Hebbal Lake. Heavy aerodynamic structural anchors withstand severe gusts.",
      installedBy: "Tech Lead Chandrashekar",
      specs: "Wind-Load Certified • 420kg Load"
    }
  ];

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="real-gallery" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
              <span>📸 Real Installations • Bangalore High-Rises</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Real Installations. Real Craftsmanship. 100% Transparent.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Tap any photo to inspect cable tension, view apartment details, or share directly to your society WhatsApp group.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Balconies', 'Kids & Pets', 'Pigeon Proof', 'French Windows', 'Installers at Work'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container with Wire Simulation */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Subtle invisible wire overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-45 group-hover:opacity-75 transition-opacity"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 1.2px, transparent 1.2px, transparent 18px)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-slate-700">
                  {item.category}
                </div>

                {/* Specs pill on image */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-emerald-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {item.specs}
                </div>

                {/* Location Badge on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-black truncate drop-shadow-md flex items-center gap-1.5">
                    <span>📍 {item.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action Row: Likes, Installer, WhatsApp */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      className="flex items-center gap-1.5 text-rose-600 font-bold hover:scale-110 active:scale-95 transition cursor-pointer"
                      title="Like this installation"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      <span>{likes[item.id] || 0}</span>
                    </button>
                    <span className="text-[11px] text-slate-400 font-medium">
                      by {item.installedBy.split(' ')[0]}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20love%20this%20installation%20at%20${encodeURIComponent(item.title)}.%20Can%20you%20do%20the%20same%20for%20my%20balcony?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition flex items-center gap-1 font-bold text-[11px]"
                    title="Inquire about this design on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Inspect Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-cover" />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 1.2px, transparent 1.2px, transparent 18px)'
                }}
              ></div>
              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-xl bg-emerald-500 text-slate-950 text-xs font-black uppercase">
                {selectedImage.specs}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {selectedImage.location}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
                >
                  Close
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-700 font-semibold">
                  Installed by: <strong>{selectedImage.installedBy}</strong>
                </span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 10-Yr Replacement Warranty
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20want%20this%20exact%20invisible%20grill%20installation%20(${encodeURIComponent(selectedImage.title)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get This Setup via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const loc = BANGALORE_LOCATIONS.find((l) => l.id === selectedImage.locationId);
                    setSelectedImage(null);
                    if (loc && onSelectLocation) {
                      onSelectLocation(loc);
                    } else if (onOpenBooking) {
                      onOpenBooking();
                    }
                  }}
                  className="px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Locality Hub
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
