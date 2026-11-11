/**
 * Global Responsive Image Error & Fallback Handler
 * Supports strict 16:10 Desktop and 4:5 Mobile visual parity fallbacks
 */
export function handleResponsiveImgError(img) {
  if (!img || img.dataset.errorHandled) return;
  img.dataset.errorHandled = 'true';

  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const fallback = isDesktop
    ? (img.getAttribute('data-fallback-desktop') || img.getAttribute('data-fallback-mobile'))
    : (img.getAttribute('data-fallback-mobile') || img.getAttribute('data-fallback-desktop'));

  if (fallback) {
    const picture = img.parentElement;
    if (picture && picture.tagName && picture.tagName.toLowerCase() === 'picture') {
      const sources = picture.getElementsByTagName('source');
      for (let i = 0; i < sources.length; i++) {
        if (isDesktop && img.getAttribute('data-fallback-desktop')) {
          sources[i].srcset = img.getAttribute('data-fallback-desktop');
        } else if (!isDesktop && img.getAttribute('data-fallback-mobile')) {
          sources[i].srcset = img.getAttribute('data-fallback-mobile');
        } else {
          sources[i].removeAttribute('srcset');
        }
      }
    }
    img.src = fallback;
  }
}

// Attach to window object for inline HTML onerror handlers
if (typeof window !== 'undefined') {
  window.handleResponsiveImgError = handleResponsiveImgError;
}
