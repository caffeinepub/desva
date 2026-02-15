/**
 * Catalog Image Mapping
 * Maps uploaded images to product catalog items and Cute Essentials
 */

// Bouquet Collection Images (1-4)
export const bouquetImages = {
  ribbon: '/assets/IMG_6960.jpeg',           // 1st upload
  artificial: '/assets/IMG_6952.jpeg',       // 2nd upload
  natural: '/assets/IMG_6934.jpeg',          // 3rd upload
  pipeCleaner: '/assets/IMG_6967.jpeg',      // 4th upload
};

// Polaroid Bouquet Images (5-6)
export const polaroidBouquetImages = {
  standard: '/assets/IMG_6931.jpeg',         // 5th upload
  customized: '/assets/IMG_6965.jpeg',       // 6th upload
};

// Frames & Memory Keepsakes Images (7-9)
export const framesMemoryImages = {
  polaroidPrints: '/assets/IMG_6958.jpeg',   // 7th upload
  polaroidBook: '/assets/IMG_6932.jpeg',     // 8th upload
  magazineAlbum: '/assets/IMG_6962.jpeg',    // 9th upload
};

// Bookmarks Image (10)
export const bookmarksImage = '/assets/IMG_6964.jpeg';  // 10th upload

// Customized Cards Image (11)
export const customizedCardsImage = '/assets/IMG_6965.jpeg';  // 11th upload (reused from polaroid)

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
export function getBouquetImage(type: 'ribbon' | 'artificial' | 'natural' | 'pipeCleaner'): string {
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
