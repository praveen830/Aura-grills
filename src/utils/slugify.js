/**
 * URL Slugification and Route Resolution Utilities for Aura Grills
 * Handles clean, lowercase, hyphen-separated slugs for:
 * - 6 Bangalore Places (e.g. /kr-puram, /whitefield, /jp-nagar, etc.)
 * - 4 Core Balcony Products (e.g. /balcony-services/invisible-grills, /products/...)
 * - 6 Balcony Safety Services (e.g. /balcony-services/invisible-safety-grills, /balcony-services/toddler-balcony-shields, etc.)
 * - Resolves un-slugified or encoded URLs (e.g. /kr%20puram, /kr puram) without errors
 */

/**
 * Standard slugify function: converts any string into clean lowercase hyphen-separated slug
 * Example: "KR PURAM" -> "kr-puram"
 * Example: "Whitefield & ITPL" -> "whitefield-itpl"
 * Example: "Pigeon & Safety Nets" -> "pigeon-safety-nets"
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&+/g, 'and')                   // Replace & with 'and'
    .replace(/[\s_+]+/g, '-')                // Replace spaces, underscores, plus with single hyphens
    .replace(/[^\w-]+/g, '')                 // Remove all remaining non-word characters except hyphens
    .replace(/--+/g, '-')                    // Collapse multiple hyphens into single hyphen
    .replace(/^-+/, '')                      // Trim leading hyphen
    .replace(/-+$/, '');                     // Trim trailing hyphen
}

/**
 * The 6 Bangalore Places definitions & alias mappings
 */
export const LOCATION_ROUTES = [
  {
    id: 'kr-puram',
    name: 'KR PURAM',
    canonicalPath: '/kr-puram',
    aliases: ['kr-puram', 'kr puram', 'krpuram', 'kr_puram', 'kr-puram-corridor', 'kr-puram-lake-road']
  },
  {
    id: 'whitefield',
    name: 'WHITEFIELD',
    canonicalPath: '/whitefield',
    aliases: ['whitefield', 'whitefield-itpl', 'whitefield & itpl', 'whitefield itpl', 'itpl']
  },
  {
    id: 'jp-nagar',
    name: 'JP NAGAR',
    canonicalPath: '/jp-nagar',
    aliases: ['jp-nagar', 'jp nagar', 'jpnagar', 'jp_nagar', 'jp-nagar-phases-1-9', 'jp-nagar-phases']
  },
  {
    id: 'rr-nagar',
    name: 'RR NAGAR',
    canonicalPath: '/rr-nagar',
    aliases: ['rr-nagar', 'rr nagar', 'rrnagar', 'rr_nagar', 'rr-nagar-high-rise-belt', 'rajarajeshwari-nagar']
  },
  {
    id: 'hennur',
    name: 'HENNUR',
    canonicalPath: '/hennur',
    aliases: ['hennur', 'hennur-main-road', 'hennur main road', 'manyata-hennur']
  },
  {
    id: 'electronic-city',
    name: 'ELECTRONIC CITY',
    canonicalPath: '/electronic-city',
    aliases: ['electronic-city', 'electronic city', 'electroniccity', 'electronic_city', 'ecity', 'electronic-city-phase-1-2']
  }
];

/**
 * Additional Bangalore corridors mapped to closest primary hub or location
 */
export const EXTENDED_LOCATION_ROUTES = [
  { id: 'koramangala-hsr', name: 'HSR Layout & Koramangala', canonicalPath: '/koramangala-hsr', fallbackPlaceId: 'jp-nagar', aliases: ['koramangala', 'hsr', 'hsr-layout', 'hsr-koramangala', 'koramangala-hsr'] },
  { id: 'indiranagar-domlur', name: 'Indiranagar & Domlur', canonicalPath: '/indiranagar-domlur', fallbackPlaceId: 'kr-puram', aliases: ['indiranagar', 'domlur', 'indiranagar-domlur'] },
  { id: 'hebbal-yelahanka', name: 'Hebbal & Manyata Tech Park', canonicalPath: '/hebbal-yelahanka', fallbackPlaceId: 'hennur', aliases: ['hebbal', 'yelahanka', 'manyata', 'hebbal-yelahanka', 'hebbal-manyata'] },
  { id: 'sarjapur-road', name: 'Sarjapur Road', canonicalPath: '/sarjapur-road', fallbackPlaceId: 'electronic-city', aliases: ['sarjapur', 'sarjapur-road'] },
  { id: 'thanisandra-main-road', name: 'Thanisandra Main Road', canonicalPath: '/thanisandra-main-road', fallbackPlaceId: 'hennur', aliases: ['thanisandra', 'thanisandra-main-road'] },
  { id: 'bannerghatta-road', name: 'Bannerghatta Road Corridor', canonicalPath: '/bannerghatta-road', fallbackPlaceId: 'jp-nagar', aliases: ['bannerghatta', 'bannerghatta-road', 'bannerghatta-road-corridor'] }
];

/**
 * The 4 Core Products & 6 Balcony Services
 */
export const SERVICE_ROUTES = [
  // 4 Core Products / Services
  {
    id: 'invisible-grills',
    name: 'Invisible Safety Grills',
    canonicalPath: '/balcony-services/invisible-grills',
    productPath: '/products/invisible-grills',
    aliases: [
      'invisible-grills',
      'invisible grills',
      'invisible_grills',
      'invisible-safety-grills',
      'invisible safety grills',
      'aura-invisible-safety-grills',
      'invisiblegrills'
    ]
  },
  {
    id: 'cloth-hangers',
    name: 'Ceiling Cloth Drying Hangers',
    canonicalPath: '/balcony-services/cloth-hangers',
    productPath: '/products/cloth-hangers',
    aliases: [
      'cloth-hangers',
      'cloth hangers',
      'cloth_hangers',
      'ceiling-cloth-hangers',
      'ceiling cloth hangers',
      'ceiling-cloth-drying-hangers',
      'cloth-drying-hangers',
      'clothhangers'
    ]
  },
  {
    id: 'safety-nets',
    name: 'Pigeon & Safety Nets',
    canonicalPath: '/balcony-services/safety-nets',
    productPath: '/products/safety-nets',
    aliases: [
      'safety-nets',
      'safety nets',
      'safety_nets',
      'pigeon-safety-nets',
      'pigeon safety nets',
      'pigeon-and-safety-nets',
      'pigeon-nets',
      'pigeon nets',
      'safetynets'
    ]
  },
  {
    id: 'bird-spikes',
    name: 'Bird Deterrent Spikes',
    canonicalPath: '/balcony-services/bird-spikes',
    productPath: '/products/bird-spikes',
    aliases: [
      'bird-spikes',
      'bird spikes',
      'bird_spikes',
      'bird-deterrent-spikes',
      'bird deterrent spikes',
      'pigeon-spikes',
      'stainless-steel-bird-spikes',
      'birdspikes'
    ]
  },
  // 5 & 6: Specialized Service Pages (referencing Invisible Grills varieties)
  {
    id: 'french-window-protection',
    name: 'French Window Protection',
    canonicalPath: '/balcony-services/french-window-protection',
    productPath: '/products/french-window-protection',
    targetServiceId: 'invisible-grills',
    varietyId: 'ig-5',
    aliases: [
      'french-window-protection',
      'french window protection',
      'french-windows',
      'french windows',
      'french-window-grills'
    ]
  },
  {
    id: 'toddler-balcony-shields',
    name: 'Toddler Balcony Shields',
    canonicalPath: '/balcony-services/toddler-balcony-shields',
    productPath: '/products/toddler-balcony-shields',
    targetServiceId: 'invisible-grills',
    varietyId: 'ig-1',
    aliases: [
      'toddler-balcony-shields',
      'toddler balcony shields',
      'child-safety-grills',
      'child safety grills',
      'toddler-safe'
    ]
  }
];

/**
 * Resolves any URL pathname into its standardized route, placeId, serviceId, and canonical path.
 * Handles encoding errors, un-slugified words (spaces), uppercase characters, trailing slashes, etc.
 * 
 * @param {string} rawPath - The window.location.pathname or href string
 * @returns {object} Route result
 */
export function resolveRoute(rawPath) {
  if (!rawPath || rawPath === '' || rawPath === '/') {
    return {
      type: 'home',
      placeId: null,
      serviceId: null,
      varietyId: null,
      canonicalPath: '/',
      isClean: true
    };
  }

  // Remove hash or query if present in raw path
  const pathOnly = rawPath.split('#')[0].split('?')[0];

  // Decode URI component (e.g. %20 -> space) safely
  let decoded = pathOnly;
  try {
    decoded = decodeURIComponent(pathOnly);
  } catch {
    // If malformed URI, fallback to raw
    decoded = pathOnly;
  }

  // Trim leading/trailing slashes
  const cleanPath = decoded.replace(/^\/+|\/+$/g, '');
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return {
      type: 'home',
      placeId: null,
      serviceId: null,
      varietyId: null,
      canonicalPath: '/',
      isClean: rawPath === '/'
    };
  }

  const firstSeg = slugify(segments[0]);
  const secondSeg = segments[1] ? slugify(segments[1]) : '';

  // -------------------------------------------------------------
  // 1. Check for Service / Product route patterns
  // Examples: /balcony-services/..., /services/..., /products/...
  // -------------------------------------------------------------
  const isServicePrefix = ['balcony-services', 'services', 'service', 'products', 'product'].includes(firstSeg);

  if (isServicePrefix) {
    if (!secondSeg) {
      // Just /balcony-services or /services without slug -> route to services anchor on home
      return {
        type: 'home',
        placeId: null,
        serviceId: null,
        varietyId: null,
        canonicalPath: '/#balcony-services',
        isClean: rawPath === '/#balcony-services' || rawPath === '/balcony-services'
      };
    }

    // Match service by alias or id
    const matchedService = SERVICE_ROUTES.find((s) => {
      if (s.id === secondSeg) return true;
      return s.aliases.some((alias) => slugify(alias) === secondSeg);
    });

    if (matchedService) {
      const canonical = matchedService.canonicalPath;
      const actualTargetId = matchedService.targetServiceId || matchedService.id;
      return {
        type: 'service',
        serviceId: actualTargetId,
        serviceRouteId: matchedService.id,
        varietyId: matchedService.varietyId || null,
        canonicalPath: canonical,
        isClean: pathOnly === canonical
      };
    }
  }

  // -------------------------------------------------------------
  // 2. Check if first segment directly matches a service/product
  // e.g. /invisible-grills, /cloth-hangers, /safety-nets, /bird-spikes
  // -------------------------------------------------------------
  const directServiceMatch = SERVICE_ROUTES.find((s) => {
    if (s.id === firstSeg) return true;
    return s.aliases.some((alias) => slugify(alias) === firstSeg);
  });

  if (directServiceMatch) {
    const canonical = directServiceMatch.canonicalPath;
    const actualTargetId = directServiceMatch.targetServiceId || directServiceMatch.id;
    return {
      type: 'service',
      serviceId: actualTargetId,
      serviceRouteId: directServiceMatch.id,
      varietyId: directServiceMatch.varietyId || null,
      canonicalPath: canonical,
      isClean: false // needs canonicalization to /balcony-services/...
    };
  }

  // -------------------------------------------------------------
  // 3. Check for Location / Place routes
  // e.g. /kr-puram, /kr puram, /kr%20puram, /whitefield, /locations/kr-puram
  // -------------------------------------------------------------
  let placeSlugToTest = firstSeg;
  if (['location', 'locations', 'place', 'places'].includes(firstSeg) && secondSeg) {
    placeSlugToTest = secondSeg;
  }

  // Check 6 main Bangalore Places
  const matchedPlace = LOCATION_ROUTES.find((p) => {
    if (p.id === placeSlugToTest) return true;
    return p.aliases.some((alias) => slugify(alias) === placeSlugToTest);
  });

  if (matchedPlace) {
    const canonical = matchedPlace.canonicalPath;
    return {
      type: 'place',
      placeId: matchedPlace.id,
      serviceId: null,
      varietyId: null,
      canonicalPath: canonical,
      isClean: pathOnly === canonical
    };
  }

  // Check extended locations (e.g. HSR, Koramangala, Hebbal)
  const matchedExtended = EXTENDED_LOCATION_ROUTES.find((e) => {
    if (e.id === placeSlugToTest) return true;
    return e.aliases.some((alias) => slugify(alias) === placeSlugToTest);
  });

  if (matchedExtended) {
    return {
      type: 'place',
      placeId: matchedExtended.fallbackPlaceId,
      extendedId: matchedExtended.id,
      serviceId: null,
      varietyId: null,
      canonicalPath: `/${matchedExtended.id}`,
      isClean: pathOnly === `/${matchedExtended.id}`
    };
  }

  // Fallback: If unknown path, return home with canonical /
  return {
    type: 'home',
    placeId: null,
    serviceId: null,
    varietyId: null,
    canonicalPath: '/',
    isClean: false
  };
}

/**
 * Returns canonical URL for a place ID
 */
export function getLocationUrl(placeId) {
  const match = LOCATION_ROUTES.find((p) => p.id === placeId);
  return match ? match.canonicalPath : `/${slugify(placeId)}`;
}

/**
 * Returns canonical URL for a service ID
 */
export function getServiceUrl(serviceId) {
  const match = SERVICE_ROUTES.find((s) => s.id === serviceId);
  return match ? match.canonicalPath : `/balcony-services/${slugify(serviceId)}`;
}

/**
 * Returns canonical product URL for a product ID
 */
export function getProductUrl(productId) {
  const match = SERVICE_ROUTES.find((s) => s.id === productId);
  return match ? match.productPath : `/products/${slugify(productId)}`;
}
