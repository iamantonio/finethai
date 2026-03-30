// =============================================================================
// IMAGE SWAP GUIDE
// =============================================================================
// Replace files in public/images/ with real restaurant photos.
// Keep the same filenames — no code changes needed.
//
// Recommended sizes:
//   hero.jpg           — 1920x1080 (landscape, the main background image)
//   pad-thai.jpg       — 600x400  (featured dish card)
//   panang-curry.jpg   — 600x400  (featured dish card)
//   basil-duck.jpg     — 600x400  (featured dish card)
//   drunken-noodles.jpg— 600x400  (featured dish card)
//   about-curry.jpg    — 400x533  (portrait, about section)
//   about-pad-thai.jpg — 400x533  (portrait, about section)
//   promo-banner.jpg   — 1920x600 (wide banner background)
// =============================================================================

export const images = {
  hero: "/images/hero.jpg",
  padThai: "/images/pad-thai.jpg",
  panangCurry: "/images/panang-curry.jpg",
  basilDuck: "/images/basil-duck.jpg",
  drunkenNoodles: "/images/drunken-noodles.jpg",
  aboutCurry: "/images/about-curry.jpg",
  aboutPadThai: "/images/about-pad-thai.jpg",
  promoBanner: "/images/promo-banner.jpg",
} as const;
