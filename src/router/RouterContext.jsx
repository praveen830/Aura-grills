import React, { useState, useEffect, useCallback } from 'react';
import { resolveRoute, getLocationUrl, getServiceUrl, getProductUrl, slugify } from '../utils/slugify';
import { BANGALORE_PLACES } from '../data/bangaloreHubsData';
import { AURAB_SERVICES } from '../data/aurabServicesData';
import { RouterContext } from './RouterContextDefinition';
import { useRouter } from './useRouter';

export function RouterProvider({ children }) {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return resolveRoute(window.location.pathname);
  });

  // Handle browser Back / Forward navigation (popstate) & initial URL sanitization
  useEffect(() => {
    // If accessed via un-slugified URL (e.g. /kr puram or /kr%20puram), replaceState to clean canonical slug
    const resolved = resolveRoute(window.location.pathname);
    if (!resolved.isClean && resolved.canonicalPath !== '/') {
      const newUrl = resolved.canonicalPath + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }

    const handlePopState = () => {
      setCurrentRoute(resolveRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize dynamic document.title and canonical tag with route
  useEffect(() => {
    // Dynamic canonical tag synchronization
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const canonicalPath = currentRoute.canonicalPath === '/' ? '/' : currentRoute.canonicalPath;
      canonicalLink.setAttribute('href', `https://www.auragrills.in${canonicalPath}`);
    }

    if (currentRoute.type === 'place' && currentRoute.placeId) {
      const place = BANGALORE_PLACES.find((p) => p.id === currentRoute.placeId);
      if (place) {
        document.title = `${place.displayName} | Aura Grills™ Bangalore Balcony Safety`;
        return;
      }
    }

    if (currentRoute.type === 'service' && currentRoute.serviceId) {
      const service = AURAB_SERVICES.find((s) => s.id === currentRoute.serviceId);
      if (service) {
        document.title = `${service.displayName} | Balcony Services | Aura Grills™`;
        return;
      }
    }

    document.title = 'Aura Grills™ | Invisible Grills with Stainless Steel | Bangalore Balcony Safety';
  }, [currentRoute]);

  // Navigation function (SPA client-side navigation)
  const navigate = useCallback((to, { replace = false, smoothScroll = true } = {}) => {
    if (!to) return;

    // Handle hash-only on current page
    if (to.startsWith('#')) {
      const target = document.querySelector(to);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Split target into path and hash
    const [targetPath, hash] = to.split('#');
    const resolved = resolveRoute(targetPath || '/');
    const finalPath = resolved.canonicalPath + (hash ? `#${hash}` : '');

    if (replace) {
      window.history.replaceState(null, '', finalPath);
    } else {
      window.history.pushState(null, '', finalPath);
    }

    setCurrentRoute(resolved);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: smoothScroll ? 'smooth' : 'auto' });
        }
      }, 50);
    } else if (smoothScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Quick navigation back to dashboard / home view
  const goToDashboard = useCallback((hash) => {
    navigate(hash ? `/#${hash}` : '/', { smoothScroll: true });
  }, [navigate]);

  const value = {
    route: currentRoute,
    pathname: currentRoute.canonicalPath,
    selectedPlaceId: currentRoute.placeId,
    selectedServiceId: currentRoute.serviceId,
    varietyId: currentRoute.varietyId,
    navigate,
    goToDashboard,
    getLocationUrl,
    getServiceUrl,
    getProductUrl,
    slugify
  };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

/**
 * Accessible Link component that performs client-side routing while keeping
 * valid href for SEO, middle-click, and browser native interactions.
 */
export function Link({ to, href, children, className, onClick, ...props }) {
  const { navigate } = useRouter();
  const target = to || href || '#';
  
  const isExternal = typeof target === 'string' && (
    target.startsWith('http://') ||
    target.startsWith('https://') ||
    target.startsWith('tel:') ||
    target.startsWith('mailto:')
  );

  const handleClick = (e) => {
    if (onClick) onClick(e);

    // Only intercept plain left clicks without modifier keys
    if (
      !e.defaultPrevented &&
      !isExternal &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(target);
    }
  };

  return (
    <a href={target} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
