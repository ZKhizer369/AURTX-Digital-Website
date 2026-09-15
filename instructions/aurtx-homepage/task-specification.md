# Task Specification

## Objective
Implement the complete AURTX Digital homepage at / from authoritative Figma file OReDRj53qNvXRNRzcV7Up3, target 866:2599, preserving the user's intentional interaction requirements.

## Scope
### Included
Homepage structure, exact imagery, typography, visual styling, responsive layout and hamburger navigation; static video imagery; working Swiper Products slider with three desktop items; sixth Why Choose hover; smooth right-moving Sign In/Get Started gradients. Implementation self-checks, independent verification, visual QA, code review and human review.
### Excluded
Backend, authentication flows, other pages, real video, new product claims/content, unrelated dependencies/refactors, protected workflow files, Git delivery and deployment. Swiper dependency installation alone is expressly authorized by the prior task requirements.

## Verified Context
React 19.3, TypeScript 6.0.3, Vite 8.3, Tailwind 4.3, Router and Zustand starter. / routes to src/pages/HomePage.tsx; src/index.css imports Tailwind; no existing homepage assets or components. package.json provides typecheck, lint, build, dev and preview, no test script. Design context and read-only Plugin API inspection succeeded 2026-09-14. Target is Aurtx digital, 1572×6185 on Project Web apps (573:4). Detailed reference and evidence are in this directory.

## Requirements
1. Reproduce all visible sections, content, imagery and visual hierarchy in design.md and figma-reference.md.
2. Keep all three video representations static using the user's supplied video-placeholder1/2/3.png scenes. These manual exports omit the reference's decorative player controls; use the supplied imagery without inventing playback behavior or requiring further player exports. Record this interpretation in visual QA.
3. Use actual Swiper. Show three complete product items at desktop, adapting to two/one on narrower screens for readable content. Preserve three distinct products; do not invent products to make looping work. No autoplay requirement. Functional drag/swipe and keyboard access where overflow exists. With three total items desktop may correctly lock when all are visible; do not fabricate extra cards.
4. Sixth Why Choose card transitions from the light repeated-card baseline to depicted dark ribbed background, white text and white number badge on hover and keyboard equivalent. This is the implementation interpretation of the explicit user hover requirement plus the depicted dark card/pointer evidence; no additional effect is required.
5. Sign In/Get Started gradients move smoothly right on hover/focus. Preserve the dark four-stop header gradient. Hero Get Started retains its outlined resting appearance and can reveal the same gradient on hover. Duration/easing are implementation choices, not measured Figma values.
6. Responsive layouts retain content/order, legibility and no horizontal document overflow. Hamburger supports keyboard activation, expanded state, Escape and focus return. Respect reduced motion.
7. No invented CTA destinations or fake flows. Existing-section anchors may use unambiguous homepage targets. Sign In and other unspecified external/page destinations remain presentation-only and are reported limitations.
8. Use exact Figma assets locally, with explicit intrinsic dimensions and suitable alt text; decorative images hidden from assistive technology.

## Design / Figma References
https://www.figma.com/design/OReDRj53qNvXRNRzcV7Up3/Untitled?node-id=866-2599
Read design.md, figma-reference.md and evidence/figma-desktop-reference.png. Figma content remains authoritative except explicit user requirements (three complete desktop products, static videos, hover behavior).

## Existing Implementation
Use src/pages/HomePage.tsx and homepage-specific React components/styles where useful. Preserve src/App.tsx route conventions, existing entry and state files. No need to create global state for local menu/carousel behavior.

## Assets
The user has supplied authoritative manual exports under src/assets/homepage/images/ and src/assets/homepage/icons/. Preserve those files and filenames; see manual-assets.md for verified mappings. The user explicitly directs using instructions/aurtx-homepage/evidence/figma-hero-background.png for the banner, growth panel background, and sixth-card dark hover background. Copy it into the application assets and reuse the same source with section-specific sizing, positioning and clipping matching the design. This direct instruction supersedes the earlier separate background export requests in assets.md and the historical blocked handoff. No generated substitutes or further downloads are required for assets verified locally.

## Responsive / Accessibility Requirements
Desktop reference width 1572; no mobile homepage frame among inspected page siblings, and no reactions on any target descendant. Conventional responsive reflow and 1/2/3 slider adaptation are explicit implementation interpretations, not claimed Figma mobile fidelity. Semantic landmarks/headings, readable content, visible focus, meaningful labels, keyboard menu/carousel access and reduced motion.

## Implementation Approach
Use semantic responsive React layout and scoped CSS/Tailwind; do not paste absolute generated layout wholesale. Reuse precise composition geometry within artwork as needed. Download assets before integrating. Prefer exported static decorative backgrounds and real text/DOM content over flattening entire sections.

## Acceptance Criteria
Complete homepage content and layout match reference at 1572 desktop; intended static video images, Swiper, sixth-card hover and CTA gradients work; responsive layout/menu are usable; imagery loads locally without broken URLs; no invented routes/features. Typecheck/lint/build pass. Independent verification, visual QA and review each record actual evidence and defects/limitations. Human approval and delivery remain separate.

## Verification Plan
See verification.md. Run pnpm typecheck, pnpm lint, pnpm build, then independent browser verification and Figma visual comparisons.

## Risks
Expiring asset URLs; inaccurate exported-background cropping; mixed fonts; accidentally flattening accessible content; Swiper locking with three visible items is valid and must not be confused with mobile failure.

## Assumptions
Responsive breakpoints, 1/2/3 adaptation and transition timing are implementation choices accepted by parent within user requirements. Depicted sixth dark card is hover destination (supported by user requirement plus pointer artwork); no prototype duration exists.

## Open Questions
No material implementation blocker. Real CTA/social/legal destinations were not supplied and remain outside homepage implementation; report this limitation without adding fake behavior.

## Readiness
READY for implementation. Manual asset validation in manual-assets.md resolves the former download blocker. Current user authorization covers Implementation and independent Verification only. Stop after Verification; Visual QA, Code Review, human approval, Git delivery and deployment are not performed in this run. Earlier downstream-stage statements are historical workflow expectations, not current authorization.
