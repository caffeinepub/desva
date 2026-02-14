/**
 * Catalog Image Mapping
 * Maps uploaded images to product catalog items and Cute Essentials
 */

// Bouquet Collection Images (1-6) - Using generated soft white background versions
export const bouquetImages = {
  ribbon: '/assets/generated/IMG_6954_softwhite.dim_1600x1600.png',           // 1st - Ribbon bouquet
  artificial: '/assets/generated/IMG_6959_softwhite.dim_1600x1600.png',       // 2nd - Artificial bouquet
  natural: '/assets/generated/IMG_6960-5_softwhite.dim_1600x1600.png',        // 3rd - Natural flower
  pipeCleaner: '/assets/generated/IMG_6958-5_softwhite.dim_1600x1600.png',    // 4th - Pipe cleaner bouquet
  polaroid: '/assets/generated/IMG_6967-5_softwhite.dim_1600x1600.png',       // 5th - Polaroid bouquet
  customized: '/assets/generated/IMG_6966-5_softwhite.dim_1600x1600.png',     // 6th - Customized bouquet
};

// Polaroid Bouquet Images (5-6)
export const polaroidBouquetImages = {
  standard: '/assets/IMG_6967-1.jpeg',         // 5th upload - Polaroid bouquet
  customized: '/assets/IMG_6967-1.jpeg',       // 6th upload - Custom bucket (using same for now)
};

// Frames & Memory Keepsakes Images (7-9)
export const framesMemoryImages = {
  polaroidPrints: '/assets/IMG_6967-1.jpeg',   // 7th upload - Poo🌷 (reusing polaroid bouquet)
  polaroidBook: '/assets/IMG_6966-1.jpeg',     // 8th upload - Polaroid book
  magazineAlbum: '/assets/IMG_6963-1.jpeg',    // 9th upload - Magazines
};

// Bookmarks Image (10)
export const bookmarksImage = '/assets/IMG_6962-1.jpeg';  // 10th upload - Bookmarks

// Customized Cards Image (11)
export const customizedCardsImage = '/assets/IMG_6961-1.jpeg';  // 11th upload - Cards

// Cute Essentials Images (12-22) - Edited versions with soft white background
export const cuteEssentialsImages = [
  '/assets/generated/IMG_6935_softwhite.dim_1600x1600.png',  // 12th
  '/assets/generated/IMG_6957_softwhite.dim_1600x1600.png',  // 13th
  '/assets/generated/IMG_6432_softwhite.dim_1600x1600.png',  // 14th
  '/assets/generated/IMG_6966_softwhite.dim_1600x1600.png',  // 15th
  '/assets/generated/IMG_6427_softwhite.dim_1600x1600.png',  // 16th
  '/assets/generated/IMG_6961_softwhite.dim_1600x1600.png',  // 17th
  '/assets/generated/IMG_6433_softwhite.dim_1600x1600.png',  // 18th
  '/assets/generated/IMG_6424_softwhite.dim_1600x1600.png',  // 19th
  '/assets/generated/IMG_6426_softwhite.dim_1600x1600.png',  // 20th
  '/assets/generated/IMG_6933_softwhite.dim_1600x1600.png',  // 21st
  '/assets/generated/IMG_6930_softwhite.dim_1600x1600.png',  // 22nd
];

// Helper function to get bouquet image by type
export function getBouquetImage(type: 'ribbon' | 'artificial' | 'natural' | 'pipeCleaner' | 'polaroid' | 'customized'): string {
  return bouquetImages[type];
}

// Helper function to get polaroid bouquet image by type
export function getPolaroidBouquetImage(type: 'standard' | 'customized'): string {
  return polaroidBouquetImages[type];
}

// Helper function to get frames & memory image by type
export function getFramesMemoryImage(type: 'polaroidPrints' | 'polaroidBook' | 'magazineAlbum'): string {
  return framesMemoryImages[type];
}
