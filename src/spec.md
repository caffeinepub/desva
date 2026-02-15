# Specification

## Summary
**Goal:** Add a DESVA product catalog experience using the uploaded images, introduce new product pages/sections (Cute Essentials and Frames & Memory Keepsakes), and upgrade the Shop Now order form to capture full order details without sending email.

**Planned changes:**
- Add all 22 uploaded images as frontend static assets and map them in the requested order: first 11 images to the first 11 catalog items; all remaining images to the Cute Accessories/Cute Essentials grid.
- Update the Bouquet Collection page with the requested tier labels/prices and add the note “Final pricing depends on customization.”
- Add/extend the Polaroids area with two bouquet products: “Polaroid Bouquet” and “Customized Polaroid Bouquet” (with specified pricing text, descriptions, and mapped images).
- Create a new page/section: “Frames & Memory Keepsakes” with three listed items, exact pricing, requested descriptions, and an Instagram-style grid layout; ensure it’s reachable from site navigation.
- Update the Bookmarks page to use the 10th uploaded image and show “Starting from ₹49” plus the provided English description.
- Update the Customized Cards page to use the 11th uploaded image and show “Starting from ₹249” plus the provided English description.
- Create a “Handcrafted Cute Essentials” page/section that shows all images after the 11th upload in a clean Instagram-style grid, using processed versions of those images (soft white background, subtle shadow, centered, high-res).
- Enhance “Shop Now” (Custom Orders) with fields for product, category, quantity, customization details, image upload(s), name, phone number, email, and delivery date, plus a “Submit Order” button; keep all UI text in English and do not send email.
- Update the backend CustomOrder model and submission API to persist the new order fields (including uploaded image data/references), while keeping existing order retrieval sorted by timestamp (newest first).
- Add a visible Contact section showing Instagram “@_the.desva_” and email “thedesvaofficial@gmail.com”, with a “DM Us on Instagram” button opening https://instagram.com/_the.desva_ in a new tab.

**User-visible outcome:** Visitors can browse DESVA’s catalog with the correct uploaded images (including Cute Essentials and Frames & Memory Keepsakes), view updated bouquet pricing, place richer Shop Now orders (saved in the backend, no email sent), and contact DESVA via Instagram or email from a dedicated Contact section.
