# Features sizing, reuse, and hover correction

Readiness: READY. Authority: latest human request to fix the existing Features page; this specification supersedes literal sizing and permanent sixth-card styling in the original task. No redesign or delivery authorized.

## Objective and scope

Normalize `/features` to the existing site's usable browser scale, organize genuinely shared components under `src/components/layout/` and `src/components/ui/`, and replace the demonstrated cursor/hover artwork with actual hover behavior. Preserve every section, all copy, meaningful assets, ordering, routes, and existing functionality. Homepage changes are limited to shared-component import/API integration and preserving existing appearance/behavior. Preserve unrelated uncommitted edits, including `index.html`, Skills, and prior work. No dependencies, global architecture rewrite, or workflow edits.

## Verified implementation context

- README Technology Contract: React 19.3, TypeScript 6, Vite 8, React Router 7, Tailwind 4, pnpm 10.15; cohesive section components, Tailwind-first, no unnecessary micro-components. README status prose is stale; actual source is already sectional Tailwind React.
- `src/pages/FeaturesPage.tsx` composes five section components from `src/components/features/`; `FeatureDetails` renders both alternating detail sections. Both pages already reuse `src/components/homepage/Header.tsx` and `Footer.tsx`; do not create replacements from scratch.
- Features currently uses 1572px containers, hero 712px minimum, problems 950px minimum, detail 943px minimum with 817px inner minimum, tasks 1016px minimum and 129px artwork gap, CTA 786px minimum/508px panel. These are the literal-frame proportions being corrected.
- Homepage references: `HeroSection` max-width1300 and h1 clamp30–48; `FeaturesSection` max-width1220, 24px grid gap, card titles21/body15; `SectionHeading` h2 clamp26–36/body17; `GrowthSection` max-width1300. Normal section spacing is roughly48–64px desktop and32–48px narrow. Shared Header is80px (72px narrow), nav18px, CTA buttons43px tall with inherited16px text. Footer content max-width1252.
- Features currently overrides Header to100px and larger actions, Footer inner widths to1340/min-height393, h2 to52px, hero paragraph26px, buttons26px. Remove this systematic inflation.
- `src/index.css` supplies local fonts, gradient tokens, focus outline and reduced-motion handling. Reuse them. `src/components/HashNavigation.tsx` handles cross-route fragment scrolling; preserve it.

## Browser sizing interpretation

These are implementation guidance grounded in the existing site, not new Figma measurements. Use responsive content-driven layout; do not scale the entire page with transforms/zoom.

- Use one coherent content width around the existing1252–1300px range, with20–24px narrow gutters. Header/footer may retain wider inset framing as the homepage does, but use shared shell dimensions instead of Features descendant overrides. Preserve Features pale inset header/shadow and rounded inset dark footer through small explicit component variants/props when necessary.
- Use roughly48–64px vertical section padding on desktop,32–48px narrow. Remove the listed fixed section/inner minimum heights; spacing should follow content. Maintain clear separation and the alternating detail rhythm.
- Hero h1 remains prominent around36–48px desktop/30–36px mobile. Other headings should follow site's26–36px scale; keep hierarchy and font families. Paragraphs generally16–18px, supportive text15–16px. Use comfortable1.4–1.6 body leading rather than squeezing copy to preserve old heights.
- Buttons use shared43–48px height,16–18px text and content-driven width. Preserve gradients, outline variants and visible focus. Avoid forced192px width/26px type for every action.
- Problems retain3/2/1 columns, approximately24px gaps and24–28px padding, content-driven equal rows (no clipping long third description). Match card title/body scale to homepage cards. Badge can reduce from56px to44–48px.
- Details retain imagery, alternating desktop placement, green benefit headings and check glyphs; use balanced columns and32–48px gaps. Scale benefit glyphs roughly40–48px, with natural row height. Stack narrow layouts; avoid a tablet image dominating an entire viewport unnecessarily by using a sensible maximum width around480–560px.
- Tasks retains its existing dashboard crop/aspect ratio but scales within content width; replace129px artwork margin with ordinary40–64px separation. CTA retains diagonal roundings/circles/dark panel; adapt radii and padding to content and viewport without the oversized forced section height.
- Existing1100px shell drawer breakpoint and640px cards breakpoint are useful established conventions. Ensure tablet and1100px transition do not create squeezed columns or navigation overlap. Breakpoints are responsive interpretation; no separate mobile Figma evidence exists.

## Shared component structure

- Move existing Header/Footer to `src/components/layout/Header.tsx` and `Footer.tsx`; update both pages and homepage Hero imports. Preserve `page` navigation semantics, active link, mobile drawer state/focus/scroll locking, Escape, close transition and reduced motion. Replace Features page descendant styling with explicit minimal shell variant API where needed.
- Move existing `PresentationButton`, `SectionHeading`, and `RemixIcon` from homepage to `src/components/ui/`, updating actual consumers. They already serve repeated responsibility and do not belong to one page. Moving RemixIcon preserves its existing glyph implementation; do not redraw assets.
- Consolidate `src/components/features/FeatureButton.tsx` into the shared button implementation/API, including real anchors for supplied hrefs and presentation-only buttons for missing destinations. Preserve homepage defaults; add only needed green/outline appearance and sizing variants. Remove redundant feature-only wrapper once consumers use shared UI. Do not invent auth/product destinations or click handlers.
- Features centered headings should reuse the shared SectionHeading with minimal optional styling API if needed. Preserve differing eyebrow shape/font intent rather than forcing identical copy structure. Page-specific sections and data remain in `components/features/`. Do not introduce a component for every badge, paragraph or card fragment. A separate Container component is optional only if it improves repeated use; consistent utilities suffice.
- Existing asset helpers may stay in `components/homepage/assets.ts`; direct local imports for shared logos are also acceptable. Do not relocate unrelated image/video assets merely to rename folders.

## Figma evidence and hover interpretation

Authoritative existing reference: `instructions/figma-866-3066/figma-reference.md`, file `OReDRj53qNvXRNRzcV7Up3`, page866:3066. Reuse its complete content/assets/layout evidence; do not rediscover the page. Original task specification is background only where consistent with this correction.

Verified from stored exact design context: sixth problem card866:3109 is shown dark with ribbed artwork866:3112, white badge866:3118 and white text866:3121/3122. Sibling card866:3123 is pale with dark green badge. Separate pointer866:3157 overlays the grid. Current code permanently darkens index5 and renders `problem-vector.svg`.

User explicitly establishes that pointer as a hover demonstration. Interpretation accepted by parent: normal cards use the pale sibling treatment; on hover reveal the existing dark ribbed asset, turn text white and invert badge to white/black. Apply the coherent state treatment to the repeated six-card family, with the sixth demonstrating the specified reference. Remove pointer import/rendering; unused pointer asset need not be deleted. Keep the exact background PNG and all real content. No new shader, animation runtime or asset download.

Use CSS/Tailwind hover styling with brief color/opacity transitions; pointer leave restores normal state. Hover must not change layout. Do not invent a click destination, button role, pointer cursor or keyboard tab stop for informational cards. If an actual focusable descendant exists, mirror state with focus-within; none currently exists. Touch users must retain readable complete content without hover. Honor reduced motion; reveal is decorative, never required to access text.

Current live inspection limitation: one bounded `get_design_context` request for866:3111 returned editor-access failure. No retry or alternate access attempted. Parent explicitly accepted valid stored exact evidence plus human clarification as sufficient; no new live Figma finding is claimed. Unknown prototype transition timing is not a product dependency for this CSS state correction.

## Assets and constraints

All needed assets already exist under `src/assets/features/`: `hero-workspace.png`, `client-conversations.png`, `team-management.png`, `tasks-follow-ups.png`, `disconnected-background.png`, `benefit-check.svg`. Prior `instructions/figma-866-3066/implementation-handoff.md` records verified provenance/dimensions. Preserve exact bytes, crop and meaningful alt text. Reuse local logos/social icons/fonts. No export/acquisition Skills needed unless a newly evidenced asset issue arises.

## Acceptance and verification

1. `/features` has unchanged copy, section order, real assets/crops and routes, in a visibly normalized content-driven scale; no fixed desktop canvas reproduction. Compare with `/` at the same viewport for typography, buttons and content width.
2. Both pages consume the single Header/Footer under layout; repeated shared UI lives under ui. No duplicate page-local shell, Features button wrapper or broad descendant overrides recreating inflated sizing. Imports resolve; homepage styling and drawer behavior regressions absent.
3. All six cards have readable normal states and the demonstrated dark hover styling. No decorative pointer in rendered UI. Check hover enter/leave visually; no layout shift, trapped text or invented click semantics. Check touch/no-hover and reduced motion.
4. Runtime visual checks at1440 desktop,768 tablet,390 mobile (360 for long card/CTA wrap), plus1100px shell transition where needed: no horizontal overflow, clipping or unusable controls. Inspect all sections; typography/card balance, image sizing, spacing and CTA shape remain coherent.
5. Check desktop and mobile navigation, active Features link, keyboard drawer open/close/Escape/focus return, skip link, actual action links (`#problems`, `/#how-it-works`, `/#why-aurtx`, `#contact`) and homepage regression. Preserve presentation-only CTAs.
6. Run `pnpm typecheck`, `pnpm lint`, `pnpm build`, `git diff --check`; record real results. Build already includes typecheck, so redundant reruns after unchanged success are unnecessary. Check loaded assets/runtime errors. Independent verifier uses current frontend-verification, frontend-visual-qa and frontend-code-review Skills; existing past verification does not cover this correction.

## Implementer execution pointer

Load current `frontend-implementation` Skill and applicable instructions, then execute this specification at `instructions/features-sizing-reuse-fix/task-specification.md`. Use the saved exact Figma reference only for copy, asset identity and hierarchy. Follow the shared-component moves, normalize scale from existing homepage conventions and implement the interpreted hover state. Required Skill: frontend-implementation; project figma-use and plugin prerequisite only if an additional justified Figma call is needed (current access is unavailable). Preserve other agents' and user's edits. Record exact files/checks/limitations in `instructions/features-sizing-reuse-fix/implementation-handoff.md`. No dependency installation or Git delivery. Independent verification follows implementation.
