# Behavior Bible — Artemis Portfolio

Captured via Chrome DevTools MCP on `https://weekly-unicorn-134812.framer.app/` at 1440×900 desktop and 390×844 mobile.

## Global

- **Smooth scroll library:** **Lenis is active.** `lenisDetected: true`. The clone must wrap the document with `lenis` (npm `lenis`) using default options. Without it the page feels visibly different.
- **Native scroll behavior:** `html { scroll-behavior: auto }` — Lenis handles smoothing.
- **No scroll-snap.** No native CSS snap on body/html.
- **Body background:** `rgb(248, 246, 243)`.
- **Font loading:** Self-hosted via Google Fonts (`fonts.gstatic.com`). Required families:
  - **Libre Baskerville** — 400, 400 italic, 700.
  - **DM Sans** — 400, 500, 700, 900 (+ italics).
  - **Fragment Mono** — 400.
  - **Switzer** — 500 (Fontshare CDN).
  - Inter is loaded but appears to be Framer chrome only — safe to ignore in the clone.

## Section-by-section behaviors

### Nav

- Fixed/sticky at top. Centered "Katherine Wong" wordmark/logo with `Works` link on left, `About me` on right.
- Hover: link text color shifts. No visible scrolled-state change (confirm in extraction).
- Z-index above all content.

### Hero

- h1 "Product & Visual Designer" is **static** at load (Libre Baskerville 80/96, navy `rgb(0, 22, 102)`).
- The line below ("startups can count on!") is split character-by-character — each letter is its own `<span>` inside the tagline container. This indicates a **per-character entrance animation** (likely staggered fade-up on mount). Framer does this with its `motion` appearance system. Reproduce with framer-motion staggered children, each letter as a `motion.span`.
- `Get Started` CTA: orange `rgb(255, 72, 0)` background, dark text, with an arrow/send icon. Likely a subtle hover (lift / icon translate).
- Four floating photo cards (`Variant 1` blocks with image), absolutely positioned around the hero text. Each rotated slightly. Likely a soft float/idle animation; verify per-card transform values during extraction.
- "Arc text" — a circular SVG with text "This is Artemis" curved around a path. The SVG has class `transform-origin-center-center` and rotates: time-driven slow infinite rotation. Standard implementation: `@keyframes spin` on the wrapping div.

### Sneak peek — image marquee

- Heading "Sneak peak of my works" + telescope SVG icon.
- Below: horizontal marquee track. The DOM shows duplicated track (Variant 1 repeated twice with identical 14 children each). Infinite loop via CSS keyframe translating `-50%` over N seconds, then reset. Includes mixed `<img>` photos and inline `<video>` elements (autoplay/loop/muted) of work case studies.
- Behavior: continuous left-scrolling, possibly pauses on hover.

### Design in action — Works grid

- h2 "Design in action" with subtitle.
- 2-column grid (1-column on mobile) of 4 case-study cards. Each card has rounded image + h5 title + paragraph + small "category" pill.
- Hover: likely image scale, possibly translate-y on card.
- "Load More" button below (orange or outline; verify).

### Skills marquee

- Single-line horizontal scroll of discipline pills/text (Framer Development · Branding · Visual Design · …). Time-driven infinite loop, separated with bullet/diamond glyphs.

### What I bring to the table

- h2 + descriptive paragraph centered.
- Below: large `<img>` of decorative SVG (`5bSgVOjwR5iEdfk692ONl843us.svg`, 2046×729) spanning near full width.
- Static section. Possibly a subtle on-enter fade-in.

### Behind the canvas — About

- h2 + intro paragraph centered.
- Body copy block (multi-paragraph) + `Remix for Free!` orange CTA.
- 3 polaroid-style photos at angles, each with a caption label below ("A cat person", "Enjoy hiking", "Hi, it's me :)"). Photos rotated and offset.
- Hover on polaroid likely scales/straightens.

### Kind words — Testimonials

- h2 + 3 quote cards in a row (stack on mobile).
- Inside each quote, the highlighted phrase is wrapped in a `<span>` with a subtle pill background (warm cream).
- Author name + role/company beneath.

### Brands I've worked with

- Small uppercase eyebrow heading. Below: marquee of small brand logos (64×64).

### FAQs

- h2 + 5 collapsible accordion items.
- All collapsed on load.
- Click to toggle. Height animation (`height: auto` via grid or `max-height` transition). Chevron rotates.
- One open at a time? Verify by clicking each. Default Framer accordion is multi-open.

### Contact form CTA

- h2 + intro.
- Form with text input (Name), email input, textarea (What are you dreaming up?), Send message button.
- Below: "Prefer email? Reach me directly at hello@artemis.com" with mailto link.

### Footer

- Single line: "Create a free website with Framer …" with mock-link styling.
- Ignore the `Edit Content` / `Edit Framer Content` button — that's Framer editor chrome.

## Responsive (to confirm at 768px and 390px)

- At 768px: hero photos likely reposition/scale down; grid stays 2-col or compresses.
- At 390px: marquees, work grid become 1-column; nav likely collapses to a centered logo only or a hamburger. Confirm during per-component extraction.
