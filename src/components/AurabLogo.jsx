import React from 'react';

export default function AurabLogo({ className = "w-9 h-9" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Aurab Grills Logo"
    >
      <defs>
        <linearGradient id="aurab-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#09090b" />
          <stop offset="60%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="aurab-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="aurab-steel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* Protective Architectural Shield Base */}
      <path 
        d="M50 7 L86 21 V49 C86 72 50 93 50 93 C50 93 14 72 14 49 V21 L50 7 Z" 
        fill="url(#aurab-bg)" 
        stroke="url(#aurab-glow)" 
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Precision High-Tensile Vertical Cable Lines (Invisible Grills) */}
      <line x1="38" y1="36" x2="38" y2="72" stroke="url(#aurab-steel)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <line x1="50" y1="28" x2="50" y2="78" stroke="url(#aurab-steel)" strokeWidth="3" strokeLinecap="round" />
      <line x1="62" y1="36" x2="62" y2="72" stroke="url(#aurab-steel)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

      {/* Bold Modern "A" Structural Arch */}
      <path 
        d="M32 64 L50 26 L68 64" 
        stroke="#ffffff" 
        strokeWidth="3.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Tension Tie-Bar in Emerald */}
      <line x1="36" y1="52" x2="64" y2="52" stroke="#10b981" strokeWidth="3.2" strokeLinecap="round" />

      {/* Top Precision Beacon */}
      <circle cx="50" cy="20" r="3.5" fill="#34d399" />
    </svg>
  );
}
