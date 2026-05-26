# Page Topology — Artemis Portfolio (weekly-unicorn-134812.framer.app)

Source: `https://weekly-unicorn-134812.framer.app/`
Page height: **8446px** at 1440 viewport. Background: `rgb(248, 246, 243)` (warm off-white).

## Top-Level Layout

- Single column, full-bleed sections stacked vertically inside `<div id="main">`.
- Sticky/floating nav at top.
- Lenis smooth scroll is active (`lenisDetected: true`). Implement via the `lenis` npm package.
- No scroll-snap, no scroll-snap container. Page scroll is normal flow with smooth-scroll easing.
- Framer also injects an `__framer-badge-container` and an editor bar `<iframe>` — these are editor artifacts and must NOT be cloned.

## Section Order (top → bottom)

| #   | Section                           | Type                 | Notes                                                                                                                                                                                                    |
| --- | --------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Nav**                           | Fixed/sticky overlay | `Works` · `Katherine Wong` (centered logo) · `About me`                                                                                                                                                  |
| 2   | **Hero**                          | Flow                 | "Product & Visual Designer" h1, animated tagline "startups can count on!" (letter-by-letter), `Get Started` CTA, 4 floating photo cards + an **Arc text** SVG ("This is Artemis" curved around a circle) |
| 3   | **Sneak peak — image marquee**    | Flow, time-driven    | Horizontal infinite-scroll marquee of portfolio photos + 4 short looping `<video>`s. Duplicated track for seamless loop. Title "Sneak peak of my works" with a telescope icon.                           |
| 4   | **Design in action — Works grid** | Flow                 | h2 + tagline. 2×2 grid of 4 case-study cards (FinFlow, LaunchPad, HealthSync, TalentBridge). Each card = image + title h5 + paragraph + tag pill. "Load More" CTA below.                                 |
| 5   | **Skills marquee**                | Flow, time-driven    | Horizontal infinite-scroll pill row of disciplines: Framer Development, Branding, Visual Design, UI Design, Product Design, UX, User Research, Pitch Deck Design, Design Systems.                        |
| 6   | **What I bring to the table**     | Flow                 | h2 + tagline + a full-width decorative SVG illustration (`5bSgVOjwR5iEdfk692ONl843us.svg`, 2046×729).                                                                                                    |
| 7   | **Behind the canvas — About**     | Flow                 | "Behind the canvas" h2 + intro p. Body copy block + `Remix for Free!` CTA. 3 polaroid-style photos labeled "A cat person", "Enjoy hiking", "Hi, it's me :)".                                             |
| 8   | **Kind words — Testimonials**     | Flow                 | h2 + 3 quote cards (Sarah Chen/Finflow, Marcus Rivera/Talent Bridge, Jessica Park/Launchpad). Inline highlighted spans inside each quote (lighter background pill).                                      |
| 9   | **Brands I've worked with**       | Flow, time-driven    | h3 eyebrow + horizontal brand-logo marquee.                                                                                                                                                              |
| 10  | **FAQs**                          | Flow, click-driven   | h2 + subtitle. 5 accordion items (collapsed by default).                                                                                                                                                 |
| 11  | **CTA — Contact form**            | Flow                 | "Ready to build something amazing?" h2 + intro. Name + Email + textarea + Send button. Direct email fallback.                                                                                            |
| 12  | **Footer**                        | Flow                 | "Create a free website with Framer …" attribution line. (The `Edit Framer Content` button is Framer editor chrome — ignore.)                                                                             |

## Interaction Models

- **Static:** What I bring to the table, footer.
- **Click-driven:** FAQs accordion (open/close), Nav links, all CTAs, Contact form.
- **Scroll-driven:** Possibly fade-up reveals on section entrance (verify in BEHAVIORS sweep). Lenis smooth-scroll governs the feel.
- **Time-driven:** Hero tagline letter-by-letter typing (or staged appear), Sneak-peak marquee, Skills marquee, Brands marquee. All 4 hero photo cards may have a subtle float/rotate animation.
- **Hover-driven:** Work cards (image zoom/border), nav links (color), pill chips.

## Dependencies / z-index Layers

- Nav: `position: fixed/sticky` at top, z above content.
- All other sections share a single z-stack in normal flow.
- The Hero "Arc text" SVG is absolutely positioned within the Hero section, behind the photo cards.

## Cross-section Tokens (extracted in Phase 1)

- Heading font: **Libre Baskerville** (serif). h1 = 80/96, -2px letter-spacing. h2 = 28/39.2, -1.12px.
- Body font: **DM Sans** (sans-serif). p = 16/20.8, -0.1px.
- Decorative mono: **Fragment Mono** (used in eyebrow/tag pills, suspected).
- Heading color: `rgb(0, 22, 102)` deep navy.
- Body text: `rgb(95, 101, 102)` warm gray.
- Accent: `rgb(255, 72, 0)` orange (primary CTA bg, accent fills).
- Surfaces: `rgb(248, 246, 243)` page bg, `rgb(235, 234, 230)` / `rgb(235, 233, 228)` card surfaces, `rgb(42, 49, 50)` dark slate, `rgb(202, 220, 252)` highlight blue.
