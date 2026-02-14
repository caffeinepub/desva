# Specification

## Summary
**Goal:** Build a boutique-style DESVA website with consistent pastel luxury styling, collection pages, and a custom orders form that saves submissions.

**Planned changes:**
- Add a site-wide layout with top navigation + simple footer, and routes for: Home, Bouquet Collection, Polaroid Collection, Bookmark Collection, Customized Card Collection, Custom Orders.
- Implement Home page sections: hero (DESVA brand name, uploaded logo, tagline “personalized With Love”, pastel pink background, CTAs “Shop Now” + “Explore Collections”), intro text, featured category preview grid linking to collections, and “Why Choose DESVA” bullets; include smooth scrolling for relevant sections.
- Build collection pages with the exact provided pricing/labels and descriptions (Bouquets with tiers + custom pricing note; Polaroids sizes/prices + description; Bookmarks starting price + description; Customized Cards price + description).
- Create Custom Orders page with form fields: Name, Product Type, Event Type, Quantity, Custom Message, Date Required; show “DM us on Instagram for quick custom orders.” and provide a clear success state on submit.
- Add backend persistence for custom order submissions (store all fields + timestamp) with methods to create and fetch submissions for verification/testing; connect the frontend form to these methods with basic success/error handling.
- Apply a coherent, site-wide visual theme system (pastel palette, elegant typography, spacing/radii) with rounded buttons, minimal icons, Instagram-style grids, mobile-friendly layout, and subtle transitions.
- Integrate the uploaded logo image (IMG_5343.jpeg) as a static frontend asset for the Home hero (and optionally the nav brand area).
- Add generated favicon and app icons that match the uploaded logo style and serve them as static frontend assets.

**User-visible outcome:** Users can browse DESVA’s home and collection pages in a consistent boutique style, and submit a custom order request via a form that is saved and can be fetched for testing.
