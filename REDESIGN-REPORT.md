# MEDVIA redesign report

## Audit (before)
243 raw hex usages (15 distinct, 7 near-identical teals), no tokens; 7 font families requested, 1 used per class;
primary CTA white on #02BBB6 at 2.4:1; letter-by-letter hero heading (react-spring); infinite brand marquee of
2 placeholder images; same fake star PNG on every product; invented stats ("3940+ Landingfolio Users", "up to 35% OFF");
"Free shipping worldwide" on a Pakistan seller; three-equal-cards sections twice; div hamburger with no keyboard access;
no labels on search; no image dimensions; `alert()` for checkout errors; 85 lines of "Biova" in 17 files.

## Design Read and dials
Reading this as: trust-first e-commerce redesign (overhaul) for hospital and clinic procurement staff, doctors and
individual buyers in Pakistan, with a clinical, precise, calm language, leaning toward Tailwind v4 with own tokens.
DESIGN_VARIANCE 5 (hero and content only, effectively 3 on catalog and checkout), MOTION_INTENSITY 3, VISUAL_DENSITY 5.

## Before / after (measured offline)
| | Before | After |
|---|---|---|
| Raw hex outside @theme | 243 | 0 |
| Font families loaded | 7 | 1 |
| Primary CTA contrast | 2.4:1 | 7.6:1 |
| public/ assets | 3.1 MB | 28 KB |
| TypeScript files | 0 | 15 (15 .jsx remain) |
| Letter animation / infinite loops / react-spring | yes | none |
| JS and CSS size, Lighthouse, CLS | not measured | run scripts/preflight.sh |

## Not changed, and why
Routes, Redux cart behaviour, API calls, form field names, payloads: constraints. `/create-blog` stays public (route kept).
`API_NAME` stays localhost (should become VITE_API_URL). Legal copy stays verbatim (46 dashes). Domain, email and
Instagram still say biova until the real ones are supplied.

## Restyled in the second pass (written without a build, unverified)
Blog, Article, Contact, About, Features, Thank you and Create blog are rewritten in strict TypeScript on the same tokens
and primitives. Privacy and Terms keep their wording verbatim and only take the new tokens, sizes and landmarks.
Contact, Create blog and checkout now report status inline instead of alert().

## Content decisions to confirm
- Removed: Blog newsletter box (its Subscribe button did nothing), "5 min read" on every article, "Founders Image/Illustration"
  placeholder on About, "Join hundreds of healthcare providers" (invented stat).
- Kept as written by the owner but unverified: "ISO, CE, FDA-compliant", "real-time inventory", "24/7 customer support",
  "Eco-friendly packaging". Regulated or checkable claims: confirm or remove.
- Privacy page prints today's date as "Last Updated" on every visit. That is misleading for a legal page; set a real date.
- Article body is injected as raw HTML (dangerouslySetInnerHTML) from the API. Sanitize server-side or add DOMPurify.
- Repaired: my earlier dash-cleanup corrupted curly quotes and similar characters in five pages; they were rewritten from the original text.

## Still open
Run scripts/preflight.sh (typecheck, lint, build, sizes, Lighthouse); none of this code has been compiled. Two .jsx helpers
remain (ScrollToTop, Product_reviews_description) plus the two legal pages. No tests or TypeScript lint config. Verify the
control border token (#6b7885). Domain, email and Instagram still say biova until real ones are supplied (SITE_URL in
src/constant/site.ts). API_NAME is still localhost. /create-blog is still a public route.
