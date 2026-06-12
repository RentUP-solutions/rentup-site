---
name: Rent UP
description: Rental optimization for Bucharest apartment owners — interior design plus a complete tenant-management system.
colors:
  roasted-clay: "#C77936"
  roasted-clay-hover: "#A8622A"
  clay-light: "#FAF4EB"
  clay-border: "#E8D5BC"
  warm-linen: "#FDFAF6"
  stone: "#F5EFE6"
  warm-sand: "#F0E8DA"
  hairline: "#EDE5D8"
  espresso: "#2D2820"
  espresso-deep: "#3D3228"
  mid-brown: "#7A6E62"
  muted-brown: "#9A8E82"
  light-brown: "#B8AFA4"
  deep-forest: "#0F6E56"
  forest-bg: "#E1F5EE"
  forest-border: "#1D9E75"
  amber-premium: "#C8894E"
  caution-bg: "#FDF0D8"
  caution-text: "#854F0B"
  caution-border: "#E8C49A"
  alert: "#A32D2D"
  alert-bg: "#FCEBEB"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.375rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  pill: "100px"
  lg: "16px"
  md: "14px"
  sm: "10px"
  xs: "8px"
  signature: "2px 2px 80px 2px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "28px"
  2xl: "56px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.roasted-clay}"
    textColor: "{colors.warm-linen}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.roasted-clay-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted-brown}"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.roasted-clay}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  card:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.md}"
    padding: "28px"
  pill-tag:
    backgroundColor: "{colors.clay-light}"
    textColor: "{colors.roasted-clay}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Rent UP

## 1. Overview

**Creative North Star: "The Warm Protocol"**

Rent UP reads like a calm operating manual wrapped in domestic warmth. Every page leads with a system — selection criteria, contract clauses, photo protocols, ROI numbers — but presents that system through a cream-and-terracotta editorial palette, light type weights, and generous breathing room. The confidence is procedural, not decorative: trust is built by showing the steps and the numbers, not by adjectives or polish for its own sake.

The palette stays restrained almost everywhere — warm neutrals (linen, stone, sand) carry the vast majority of every surface, with Roasted Clay reserved for the handful of elements that matter: prices, CTAs, stat highlights, the brand mark. Typography leans deliberately light (weight 300) at display sizes with tight negative tracking, which reads as precise and considered rather than soft. The one geometric flourish — an asymmetric "signature corner" on hero visuals and package cards — is the system's single permitted moment of personality, used sparingly enough to stay a signature rather than a habit.

This system explicitly rejects two things: cold corporate/SaaS dashboard aesthetics (enterprise blue, gradient hero panels, dense data-table chrome, generic tech-startup visual language), and generic real-estate-agency tropes (stock photography, listing-grid layouts, salesy banners). Rent UP is neither a piece of software nor a listings site — it's a service run with procedural rigor, presented warmly.

**Key Characteristics:**
- Warm cream/stone neutrals carry ~90% of every surface; Roasted Clay is the single accent
- Light-weight (300) display and headline type with tight negative letter-spacing (-0.028em to -0.035em)
- Hairline (.5px) borders throughout; flat-by-default surfaces
- Shadows and lift appear only on hover/interaction, never at rest
- Pill shapes (100px radius) for every button, tag, and badge
- One signature asymmetric corner, used only on hero/feature visuals and package cards
- Green (Deep Forest) marks financial upside; amber/red mark loss and risk — both used sparingly and only in calculators/case studies/blog warnings

## 2. Colors

The palette is a warm, low-saturation neutral field with a single confident accent and two narrow semantic bands for financial framing.

### Primary
- **Roasted Clay** (#C77936): The one accent. CTAs, prices, stat values, eyebrow dots, active states, brand wordmark. Used on roughly 5–10% of any given surface — its rarity is what makes it read as a signal.
- **Roasted Clay Hover** (#A8622A): Darkened state for primary buttons and CTA links on hover/active.

### Secondary
- **Deep Forest** (#0F6E56), with **Forest BG** (#E1F5EE) and **Forest Border** (#1D9E75): The "good news" color. Used for positive financial outcomes — rent uplift, ROI, "you gain" blocks in the calculator and case studies. Never used decoratively; it appears only attached to a number that represents money gained.

### Tertiary
- **Caution Amber** (#854F0B text / #FDF0D8 bg / #E8C49A border): "What inaction costs you" framing — loss blocks in the calculator, opportunity-cost callouts.
- **Alert Red** (#A32D2D text / #FCEBEB bg): Risk and warning content in blog articles (red-flag lists, non-payment scenarios). Reserved for genuinely cautionary content, never for UI chrome.
- **Amber Premium** (#C8894E): Fill color for the Premium package card only — the single place a saturated color covers a large surface, deliberately marking it as the "upgrade" choice.

### Neutral
- **Warm Linen** (#FDFAF6): Primary background and body color.
- **Stone** (#F5EFE6): Alternating section background — sections alternate Linen/Stone for rhythm without borders.
- **Warm Sand** (#F0E8DA): Used in soft gradients (hero visual, signature blocks) alongside Stone.
- **Hairline** (#EDE5D8): The universal border color — always .5px, never thicker except where a component is deliberately "boxed" (cards at 1px).
- **Espresso** (#2D2820): Primary text color and the background of the dark contact/footer section.
- **Espresso Deep** (#3D3228): Card fills on dark sections (contact cards).
- **Mid Brown** (#7A6E62): Secondary body text — article paragraphs, list items.
- **Muted Brown** (#9A8E82): Tertiary text — subtitles, descriptions, nav links at rest.
- **Light Brown** (#B8AFA4): Quaternary text — micro-labels, placeholder-weight content, table headers.

### Named Rules
**The One Accent Rule.** Roasted Clay is the only saturated color permitted outside the semantic green/amber/red bands and the Premium package. If a new element needs emphasis, reach for weight, scale, or whitespace before reaching for a new color.

**The Ledger Color Rule.** Deep Forest and Caution Amber only ever attach to a number that represents money gained or lost. They are financial annotations, not theme colors — never used for navigation, buttons, or section backgrounds.

## 3. Typography

**Display Font:** Inter (weights 300/400/500/600, self-hosted woff2, latin + latin-ext subsets)
**Body Font:** Inter (same family, weight 400)
**Label/Mono Font:** Inter, weight 600, uppercase with wide tracking — no separate mono face

**Character:** A single geometric sans carries the entire system, but reads as two different voices depending on weight: at 300 with negative tracking it feels precise and editorial (almost serif-adjacent in its restraint); at 500–600 with positive tracking and uppercase it feels procedural and label-like. The contrast between these two registers — light/loose display vs. heavy/tight labels — is the system's entire typographic hierarchy.

### Hierarchy
- **Display** (weight 300, `clamp(1.875rem, 6vw, 3.5rem)` / ~30–56px, line-height 1.02, letter-spacing -0.035em): Hero headline only. Uses an inline `<em>` (not italic — weight 500, Roasted Clay) for the one emphasized phrase.
- **Headline** (weight 300, `clamp(1.5rem, 4vw, 2.375rem)` / ~24–38px, line-height 1.08, letter-spacing -0.028em): Section headings (`h2.sh`) and article H1s (article H1 runs slightly heavier at weight 400).
- **Title** (weight 500, ~15–22px, line-height 1.2): Card titles, package names, audit block title, team member names.
- **Body** (weight 400, ~13–17px, line-height 1.55–1.82, color Mid Brown or Muted Brown): Paragraphs and list items. Article body copy caps around 720px container width (~70ch).
- **Label** (weight 600, ~10–13px, uppercase, letter-spacing 0.08–0.14em, color Roasted Clay or Light Brown): Eyebrows, section tags, table headers, pill badges.

### Named Rules
**The Light-Weight Authority Rule.** Headlines and display numbers never exceed weight 400. Confidence comes from negative letter-spacing and scale, not boldness — even prices and stat values (32–44px) are weight 300.

**The Two-Register Rule.** Every block of text is either "display register" (light, loose, large, sentence case) or "label register" (heavy, tight... no — wide-tracked, small, uppercase). Mixing the two within a single text run only happens via the `<em>` emphasis pattern in headlines.

## 4. Elevation

Flat by default. Surfaces sit directly on the page with hairline borders and no resting shadow; depth exists only as a response to hover or interaction, and it's soft and warm-toned (shadows are tinted toward Espresso or the relevant accent, never pure black).

### Shadow Vocabulary
- **ambient-badge** (`box-shadow: 0 4px 16px rgba(45,40,32,.06)`): Resting shadow for the hero badge and similarly "floating" small elements — the only shadow allowed at rest, and only for elements meant to feel physically placed on top of the page.
- **ambient-card** (`box-shadow: 0 8px 32px rgba(45,40,32,.08)`): Default hover lift for cards, team photos, audit block.
- **deep-card** (`box-shadow: 0 18px 52px rgba(45,40,32,.1)` to `0 22px 60px rgba(45,40,32,.13)`): Hover lift for the highest-emphasis cards (packages, portfolio before/afters) — paired with a 2–6px translateY.
- **premium-glow** (`box-shadow: 0 8px 40px rgba(200,137,78,.25)`): Hover shadow for the Premium package only, tinted to its amber fill rather than Espresso.
- **forest-pulse** (`box-shadow: 0 0 0 7px rgba(15,110,86,.11), 0 4px 20px rgba(15,110,86,.09)`): Momentary pulse on the calculator's "gain" block when its value updates — the only animated shadow, signaling "this number just changed in your favor."

### Named Rules
**The Lift Reflex Rule.** Interactive cards and buttons lift on hover (translateY between -1px and -6px, shadow appears or deepens) and settle back slower than they rise — entrance transitions run 150–220ms, exit transitions run 380–420ms. The asymmetry makes interaction feel responsive but unhurried.

## 5. Components

### Buttons
- **Shape:** Pill (border-radius 100px) — every button and button-like link in the system, no exceptions.
- **Primary:** Roasted Clay background, Warm Linen text, 14px/500, padding `14px 28px`. Hover darkens to Roasted Clay Hover and lifts `translateY(-1px)`; active scales to 0.97 over 80ms.
- **Ghost:** Transparent background, Muted Brown text, no border. Hover shifts text to Espresso. Used for secondary actions next to a Primary button.
- **Outlined/Nav CTA:** Transparent fill, .5px Roasted Clay border and text, padding `8px 18px`. Hover fills with Clay Light. Used in the nav bar and as a secondary CTA in the dark contact section (with adjusted neutral border/text for the dark background).

### Pill Tags / Badges
- **Style:** Clay Light background, Roasted Clay text, .5px Clay Border, padding `4px 12px`, label typography (11px/500 or 10px/600 uppercase depending on context).
- **Variant:** Eyebrow tags (no background, just a small pulsing dot + uppercase label) precede section headings; filled pill tags mark testimonial categories and result highlights.

### Cards / Containers
- **Corner Style:** 14px standard (`md`); 16px for higher-emphasis cards (packages, contact cards, testimonial quote box).
- **Background:** Warm Linen on Stone sections, Stone-tinted gradients (Warm Sand → Stone) for "placeholder visual" blocks.
- **Shadow Strategy:** Flat at rest; `ambient-card` or `deep-card` on hover (see Elevation).
- **Border:** .5px Hairline on all standard cards; 1px on the "reasons" list container.
- **Internal Padding:** 22–32px depending on density; compact list-style cards (`.reason`, `.fc`) use 22–28px, dense stat cards use 16px.

### Inputs / Fields
- **Range sliders:** 1.5–3px Hairline track, 17–20px circular Roasted Clay thumb. Hover adds a soft glow ring (`rgba(199,121,54,.18–.38)`); while dragging, the thumb scales to 1.32x.
- **Text inputs:** .5px Hairline border, small radius (`sm`), Warm Linen background, Espresso text, Inter 14px. No heavy focus glow — focus uses the same outline treatment as interactive links.

### Navigation
- **Style:** Sticky, 64px height (56px tablet, 52px mobile), translucent Warm Linen background (`rgba(253,250,246,.96)`) with backdrop blur, .5px Hairline bottom border.
- **Logo:** Two-tone wordmark — "Rent" in Roasted Clay (weight 600), "UP" in Espresso (weight 300).
- **Links:** Muted Brown at rest, Espresso on hover/active, with an animated underline that slides in from the right on hover.
- **CTA:** Outlined pill (see Buttons), hidden below 768px in favor of a hamburger that opens a full-width mobile menu.

### Signature Component: The Signature Corner
A deliberately asymmetric `border-radius` — three sharp corners and one dramatically rounded corner (`2px 2px 80px 2px`) — applied to the hero visual block and package cards. On hover, package cards "morph" toward a slightly less extreme version (`16px 16px 46px 16px`) over 360ms, an effect nicknamed the "squircle morph." This is the system's one permitted geometric flourish: reuse it for new hero/feature visuals that need to feel like a deliberate showcase, but don't apply it to more than one or two elements per screen — its impact depends on scarcity.

## 6. Do's and Don'ts

### Do:
- **Do** use weight 300 for all display and headline type, with letter-spacing between -0.028em and -0.035em.
- **Do** reserve Roasted Clay (#C77936) for CTAs, prices, stat values, and brand marks — the One Accent Rule.
- **Do** keep surfaces flat with .5px Hairline (#EDE5D8) borders; introduce shadows only on hover (`ambient-card` / `deep-card`).
- **Do** use 100px pill radius for every button, tag, and badge without exception.
- **Do** attach Deep Forest (#0F6E56) only to numbers representing money gained, and Caution Amber only to numbers representing money lost (the Ledger Color Rule).
- **Do** apply the Signature Corner (`2px 2px 80px 2px`) only to hero/feature visuals or package-style cards, and no more than 1–2 per screen.
- **Do** alternate Warm Linen / Stone backgrounds between sections for rhythm instead of adding borders or dividers.

### Don't:
- **Don't** introduce cold corporate/SaaS dashboard aesthetics — no enterprise blue, gradient hero panels, or dense data-table chrome.
- **Don't** use generic real-estate-agency tropes — stock photography, listing-grid layouts, or salesy banners.
- **Don't** push headline or number weight above 400; authority comes from scale and tracking, not boldness.
- **Don't** use shadows at rest except for the hero badge's `ambient-badge` — depth is earned through interaction, not applied by default.
- **Don't** introduce new saturated colors outside Roasted Clay, Deep Forest, Caution Amber, Alert Red, and Amber Premium — five accents total, each with a fixed job.
- **Don't** repeat the Signature Corner across many elements on one screen; it stops being a signature the moment it's a pattern.
