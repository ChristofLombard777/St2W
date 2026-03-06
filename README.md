# Worldwide Wealth - Marketing Site

This is the official marketing and lead generation site for **Worldwide Wealth** and its **St2W (Short-term to Wealth)** program.

Built with Next.js App Router, TailwindCSS, and GSAP.

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management (Copy & Data)

All text, copy, pricing tables, and structural content is heavily centralized to make future edits easy. 
You do not need to hunt through components to change text.

- Navigate to `lib/content.ts`
- Edit the JSON structures inside `homeContent`, `servicesContent`, and `st2wContent`.
- Global variables (like the WhatsApp number, generic FSP compliance wording, or social links) are stored in `lib/constants.ts`.

## Image & Asset Swapping

To change the placeholder images:

1. **Logos:** Place your brand logo SVG/PNG into `public/brand/` and update `Header.tsx` and `Footer.tsx` where the placeholder "W" blocks currently exist.
2. **Hero Visuals:** Place full-res, dark-themed hero imagery into `public/hero/`. Update the `bg-[url('...')]` classes inside:
   - `components/sections/home/HeroCinematic.tsx`
   - `components/sections/st2w/St2WHero.tsx`
3. **Partners:** Drop partner logos into `public/partners/` and update `components/sections/home/PartnerStrip.tsx`.

## Animations & GSAP Settings

The site utilizes GSAP and its `ScrollTrigger` plugin for high-performance scroll animations.

### The Cinematic Hero Scroll (Pinning)
The Home page hero features a signature scroll where elements are subtly animated as you scroll down while the container remains pinned. 
- You can tweak this behavior (pin length, animation timings) in `hooks/useHeroScroll.ts`. 
- **To change the pin length**: adjust the `end: "+=120%"` property within the desktop GSAP timeline setup.

### Site-Wide Reveals
Most sections elegantly fade and slide up when scrolling into view. 
- This logic is controlled via `hooks/useRevealOnScroll.ts`.
- It dynamically grabs any internal element with a `data-reveal` attribute and batches them into a smooth stagger animation.

### Accessibility & Reduced Motion
The site automatically honors user OS preferences for reduced motion. The custom hook `usePrefersReducedMotion.ts` disables the heroic scrub/pinning and immediately bypasses complex timelines in favor of static, accessible layouts. Keyboard navigation is fully supported across all interactive links and buttons.
