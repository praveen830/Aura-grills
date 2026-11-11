import React from 'react';
import { handleResponsiveImgError } from '../utils/imageHandler';

/**
 * ResponsivePicture
 * Reusable HTML5 <picture> component adhering to Google Ads conversion architecture:
 * - Desktop screens (>= 768px): 16:10 landscape ratio (/images/desktop/[filename].webp)
 * - Mobile screens (< 768px): 4:5 vertical portrait ratio (/images/mobile/[filename].webp)
 * - Dynamic fallback handling for desktop/mobile via handleResponsiveImgError
 *
 * Usage:
 * <ResponsivePicture
 *   filename="aura-grills-brand-hero"
 *   fallbackDesktop="/images/aura-grills-brand-hero.jpg"
 *   fallbackMobile="/images/aura-grills-brand-hero.jpg"
 *   alt="Aura Grills Invisible Safety Grills Bangalore"
 * />
 */
export default function ResponsivePicture({
  filename,
  desktopSrc,
  mobileSrc,
  fallbackDesktop,
  fallbackMobile,
  alt = 'Aura Grills Bangalore Invisible Safety Grills',
  className = 'w-full h-full object-cover',
  pictureClassName = 'block w-full h-full',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
  ...props
}) {
  const baseName = filename ? filename.replace(/\.(webp|jpg|jpeg|png)$/i, '') : '';
  const resolvedDesktop = desktopSrc || (baseName ? `/images/desktop/${baseName}.webp` : '');
  const resolvedMobile = mobileSrc || (baseName ? `/images/mobile/${baseName}.webp` : '');

  const onErrorHandler = (e) => {
    handleResponsiveImgError(e.currentTarget);
  };

  return (
    <picture className={pictureClassName}>
      {resolvedDesktop && <source media="(min-width: 768px)" srcSet={resolvedDesktop} />}
      <img
        src={resolvedMobile}
        data-fallback-desktop={fallbackDesktop || ''}
        data-fallback-mobile={fallbackMobile || ''}
        onError={onErrorHandler}
        alt={alt}
        className={className}
        loading={loading}
        {...(fetchPriority ? { fetchPriority } : {})}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        {...props}
      />
    </picture>
  );
}
