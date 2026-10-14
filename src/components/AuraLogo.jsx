import React from 'react';

export default function AuraLogo({ className = "w-10 h-10" }) {
  return (
    <img 
      src="/images/aura-grills-logo.jpg" 
      alt="Aura Grills Logo" 
      className={`${className} object-contain rounded-xl shadow-xs`}
    />
  );
}
