import React from 'react';

export default function AuraLogo({ className = "w-10 h-10" }) {
  return (
    <img 
      src="/images/aura-grills-logo.jpg" 
      alt="AG Aura Grills - Invisible Grills with Stainless Steel" 
      width="48"
      height="48"
      loading="eager"
      decoding="async"
      className={`${className} object-cover rounded-full border border-emerald-500/20 shadow-xs ring-1 ring-zinc-900/10`}
    />
  );
}
