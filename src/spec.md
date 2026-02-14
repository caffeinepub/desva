# Specification

## Summary
**Goal:** Update the Bouquet Collection page to display exactly 6 bouquet products in a premium, responsive grid with the specified copy, pricing, and soft-white edited images.

**Planned changes:**
- Update `/bouquets` to render one main section titled “Bouquet Collection” containing exactly 6 product cards.
- Implement a clean, luxury boutique grid layout with equal spacing, elegant typography, and a soft white/beige aesthetic background; ensure responsive behavior across breakpoints.
- Set each bouquet card’s content (name, short description, and pricing) to match the provided text exactly, including the Pipe Cleaner note: “Final price depends on customization.”
- Add the 6 uploaded bouquet images as static frontend assets and map them to products in the specified order: (1) Ribbon (IMG_6954.jpeg), (2) Artificial (IMG_6959.jpeg), (3) Natural (IMG_6960-5.jpeg), (4) Pipe Cleaner (IMG_6958-5.jpeg), (5) Polaroid (IMG_6967-5.jpeg), (6) Customized (IMG_6966-5.jpeg).
- Generate premium-edited versions of all 6 images (soft white/beige background, subtle shadow, centered product, preserve original colors/design) and use these generated images in the Bouquet Collection cards; store them under `frontend/public/assets/generated`.

**User-visible outcome:** Visiting `/bouquets` shows a single “Bouquet Collection” section with 6 premium-looking bouquet cards, each with the correct image, description, and pricing, displayed in a responsive luxury grid.
