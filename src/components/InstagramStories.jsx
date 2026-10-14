import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { INSTALLER_STORIES } from '../data/installerStories';

export default function InstagramStories({ onOpenBooking }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const activeStory = activeStoryIndex !== null ? INSTALLER_STORIES[activeStoryIndex] : null;

  // Auto progression like Instagram
  useEffect(() => {
    if (activeStoryIndex === null || isPaused) return;

    let isFirst = true;
    const duration = 5000; // 5 seconds per story
    const stepTime = 50;
    const stepPercent = (stepTime / duration) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (isFirst) {
          isFirst = false;
          return stepPercent;
        }
        if (prev >= 100) {
          // Go to next story
          if (activeStoryIndex < INSTALLER_STORIES.length - 1) {
            setActiveStoryIndex((idx) => idx + 1);
            return 0;
          } else {
            // Close when finished
            setActiveStoryIndex(null);
            return 0;
          }
        }
        return prev + stepPercent;
      });
    }, stepTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeStoryIndex, isPaused]);

  const handleNextStory = (e) => {
    e?.stopPropagation();
    if (activeStoryIndex < INSTALLER_STORIES.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1);
      setProgress(0);
    } else {
      setActiveStoryIndex(null);
    }
  };

  const handlePrevStory = (e) => {
    e?.stopPropagation();
    if (activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
      setProgress(0);
    }
  };

  return (
    <section className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-wider text-slate-800">
              Live Stories • Bangalore Installations
            </span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">
            Tap to view authentic footage
          </span>
        </div>

        {/* Horizontal Story Reel */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2">
          {INSTALLER_STORIES.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className="flex flex-col items-center gap-1.5 focus:outline-none flex-shrink-0 group cursor-pointer"
            >
              <div className="story-ring transition-transform group-hover:scale-105 group-active:scale-95 shadow-md">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-white overflow-hidden bg-slate-900 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-800 text-center max-w-[76px] truncate group-hover:text-emerald-600 transition">
                {story.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Instagram Story Fullscreen Viewer Modal */}
      {activeStory && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 select-none"
          onClick={() => setActiveStoryIndex(null)}
        >
          <div
            className="relative w-full max-w-md h-full sm:h-[85vh] sm:max-h-[780px] bg-slate-950 sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Top Progress Bars */}
            <div className="absolute top-3 inset-x-3 z-30 flex items-center gap-1.5">
              {INSTALLER_STORIES.map((s, i) => (
                <div key={s.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-75"
                    style={{
                      width:
                        i < activeStoryIndex
                          ? '100%'
                          : i === activeStoryIndex
                          ? `${progress}%`
                          : '0%',
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Story Header */}
            <div className="absolute top-7 inset-x-4 z-30 flex items-center justify-between text-white drop-shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border-2 border-emerald-400 overflow-hidden bg-slate-800">
                  <img src={activeStory.image} alt={activeStory.technician} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-black tracking-wide">
                    <span>{activeStory.technician}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium">
                    Aurab Grills Certified BLR Team • {activeStory.tag}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveStoryIndex(null)}
                className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Story Image Background */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
              />
              {/* Subtle vertical wire overlay visualization */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.7) 0px, rgba(255,255,255,0.7) 1px, transparent 1px, transparent 24px)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/50"></div>

              {/* Tap navigation zones */}
              <div className="absolute inset-y-20 left-0 w-1/3 cursor-pointer z-10" onClick={handlePrevStory}></div>
              <div className="absolute inset-y-20 right-0 w-1/3 cursor-pointer z-10" onClick={handleNextStory}></div>
            </div>

            {/* Story Footer & CTAs */}
            <div className="absolute bottom-4 inset-x-4 z-30 flex flex-col gap-3 text-white">
              <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 shadow-lg">
                <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-emerald-500/30">
                  {activeStory.stats}
                </span>
                <h3 className="text-sm font-extrabold text-white leading-snug mb-1">
                  {activeStory.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {activeStory.caption}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/918523068882?text=Hi%20Aura%20Guilds!%20I%20saw%20your%20story%20about%20"${encodeURIComponent(activeStory.title)}"%20and%20want%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp This Tech</span>
                </a>
                <button
                  onClick={() => {
                    setActiveStoryIndex(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-3 rounded-xl bg-white text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition shadow-lg"
                >
                  Book Visit
                </button>
              </div>
            </div>

            {/* Prev / Next controls for desktop */}
            <button
              onClick={handlePrevStory}
              disabled={activeStoryIndex === 0}
              className={`hidden sm:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition ${
                activeStoryIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextStory}
              disabled={activeStoryIndex === INSTALLER_STORIES.length - 1}
              className={`hidden sm:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition ${
                activeStoryIndex === INSTALLER_STORIES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
