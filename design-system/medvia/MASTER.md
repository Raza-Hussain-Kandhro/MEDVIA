# MEDVIA Design System (MASTER)

Generated with ui-ux-pro-max, then revised. The script's first palette (teal, mint, green on white) was
rejected: it repeats the old look and the generic medical cliche. Kept from it: Figtree, 4.5:1 text,
visible 3px focus, 44px targets, reduced motion.

## Direction
Sterile-pack clarity: cold white and steel-ink neutrals, one cobalt accent, precise geometry, no clip art.

## Tokens (src/index.css @theme)
| Token | Value | Contrast |
|---|---|---|
| surface | #FFFFFF | base |
| surface-sunken | #F3F6F8 | panels |
| ink | #0F1B26 | about 17:1 on surface |
| muted | #4A5866 | about 7:1 on surface |
| line | #D5DDE3 | borders |
| brand / accent / focus | #1650A8 | about 7.7:1 on white, white text on it passes |
| brand-strong | #0F3C80 | hover |
| success / warning / danger | #17663F / #8A5300 / #B3261E | all above 4.5:1 on white; always paired with text |

Ratios are hand-calculated; verify with a contrast checker before release.

## Type
Figtree 400/500/600/700, one request. Scale: h1 clamp(28px to 44px), h2 22 to 32, h3 18, body 16 / 1.6,
measure 70ch. Tabular numerals for prices.

## Components
Button (primary, secondary, ghost, 44px min), Input (visible label, hint, error beside field), Badge (text
always present), Container, Section, Wordmark (SVG). Product card: image, name, price, one action.

## Motion (animate skill)
Tokens: ease-out cubic-bezier(0.23,1,0.32,1), press 120ms, menu 180ms. Transform and opacity only.
Reduced motion removes press scale and menu offset. No loops, no text animation, no scroll reveals.

## Page overrides
Product detail and Checkout: see design-system/medvia/pages/ (generated defaults, not yet applied).

## Step 3 direction: "Sterile pack"
Blue is the colour of CSR sterilisation wrap and surgical drapes, so cobalt is subject-grounded, not a default.
Signature shape: the clipped corner of a peel-pouch (.chamfer), on product image tiles only. Everything else
uses one 6px radius. The hero opens with a real product, then a plain category row. No eyebrows, no
all-caps labels, no arrows on links or buttons, no numbered markers (nothing here is a sequence).

## Step 5 motion decisions (animate skill, CSS only)
| Element | Animates | Purpose | Property | Duration and curve |
|---|---|---|---|---|
| Product card hover and focus | Yes, subtle | Feedback | border-color | 150ms ease-out, hover-gated by Tailwind v4 hover variant |
| Product image swap on hover | No | Removed (no touch equivalent) | none | none |
| Add to cart press | Yes | Feedback | transform, background-color | 120ms ease-out, scale 0.97 |
| Add to cart confirmation | Label and icon swap, no motion | State indication | none | instant, reverts after 1.6s |
| Mobile menu open | Yes | Spatial consistency | transform, opacity | 180ms cubic-bezier(0.23,1,0.32,1) |
| Mobile menu close | Yes, faster | Snappy exit | transform, opacity, visibility | 120ms, same curve |
| Checkout dialog open | Yes, enter only | Preventing a jarring change | opacity, transform | 200ms, scale 0.96 to 1 |
| Nav links, page load, section reveals, cart list changes, form validation, skeletons, toasts | No | Fails the frequency gate or has no purpose | none | none |
Reduced motion: menu and dialog keep the fade and lose the offset and scale; button press scale is removed.
motion-framer is not used: no layout or exit animation is needed that CSS cannot do.
