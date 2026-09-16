# Homepage component and Tailwind refactor

Readiness: READY. Reuse Parent's pre-edit `instructions/aurtx-homepage-refactor/baseline.md` evidence (1366/768/390/320px widths at 844px height). Existing server: http://localhost:5173/. This contract implements the current user request; current rendered implementation is the visual/behavioral authority.

## Objective and boundaries

Refactor the existing homepage into meaningful section-level React components with `HomePage` primarily composing sections. Migrate homepage styling to Tailwind. `src/index.css` must be the only stylesheet used, containing the Tailwind import and genuinely global CSS only. Delete `src/pages/homepage.css` and remove all other CSS imports, including vendor CSS imports. Preserve current design, content, asset identities, responsive behavior, accessibility and functionality.

Allowed implementation areas: `src/pages/HomePage.tsx`, meaningful homepage components/helpers under `src/components/homepage/`, and `src/index.css`; remove `src/pages/homepage.css`. Preserve existing README, protected workflow/Skill edits, dependencies, locks, routes and assets. No redesign, new features, Figma retrieval, asset replacement, installation or delivery actions.

## Existing implementation and component responsibilities

The source baseline is `src/pages/HomePage.tsx` plus the complete cascading `src/pages/homepage.css`; `src/main.tsx` imports `src/index.css`, currently only `@import "tailwindcss";`. Prior context: `instructions/aurtx-homepage/revision-handoff.md` (earlier self-checks and known media limitation, not independent approval).

Use cohesive section boundaries, with names adaptable to repository convention:

- Hero section includes the current hero wrapper/statistics composition; a Header component owns navigation, menu state, active hash, focus refs, listeners, scroll lock and cleanup.
- Video, Features, Products, Why Aurtx, Growth/Connection, and Team Roles each own their section markup and section-local data. Footer owns footer markup.
- Products owns Swiper ref, reduced-motion state/listener and carousel behavior.
- Reuse a PresentationButton component for repeated CTAs; shared SectionHeading and asset URL helpers are justified by existing repetition. Do not split trivial labels/cards into unnecessary micro-components.
- HomePage composes the hero, main sections and footer, retaining wrapper ID, skip link, main ID and section order. Preserve semantic markup/IDs/ARIA and DOM relationships affecting layout.
- Existing `import.meta.glob` paths are relative to the module. Moving asset helpers requires updating both glob expressions and lookup keys together; preserve eager URL imports and optional video behavior.

## Styling migration constraints

- Derive effective styles from the entire existing cascade, including specificity and earlier media rules that still apply. Do not translate only the final revision block or resurrect superseded large-layout values.
- Preserve exact breakpoints: 1400, 1099, 767, 639 and 540px maximum-width rules, plus Swiper 640/1100px minimum breakpoints. Use precise arbitrary media variants where ordinary Tailwind breakpoints differ.
- Higher-specificity rules can beat later generic rules: heading weights/letter spacing, outline buttons, product heading paragraph spacing and mobile overrides require particular care. Earlier mobile hero bottom padding, footer brand spanning, connection offsets/star gaps, statistics padding and growth bar gaps remain relevant until actually overridden.
- Express section styles, pseudo-elements, interaction states, responsive rules, gradients and background imagery through Tailwind utilities/arbitrary variants. Avoid recreating the stylesheet in `index.css`, `@apply`, injected style tags, CSS modules or inline style objects. Truly data-driven bar heights and imported image URL/custom-property values may remain inline where appropriate.
- Preserve backgrounds, overlays, font weights/line heights, intrinsic image sizing, full-width header background pseudo-element, stacking contexts, outlines, button pseudo-gradient animation, hover/focus effects and reduced-motion behavior (including pseudo-elements).
- Global CSS may contain required font faces, global font/theme tokens, genuinely universal reset/focus/reduced-motion rules. Font paths move from `../assets/...` to `./assets/...` in `src/index.css`. Do not broaden section-specific styling under the label of global CSS.
- Utility ordering does not reproduce arbitrary CSS source order. Resolve conflicting values rather than accumulating opposing classes; preserve deliberate `!important` effects when needed.

## Swiper and Remix without extra stylesheets

Retain installed Swiper 14.2.0 and Remix Icon assets; no package change is needed. Do not import `swiper/css` or `remixicon/fonts/remixicon.css`, even indirectly through index.css.

For the current horizontal Swiper, express necessary container/wrapper/slide behavior through Tailwind on Swiper, SwiperSlide and scoped child variants: relative container with overflow hidden, horizontal touch action, flex wrapper with full dimensions and transform transition, non-shrinking slides with full dimensions/relative positioning, and applicable backface/blank-slide behavior. Source reference is installed `node_modules/swiper/swiper.css`. Preserve actual effective box sizing (the old `.homepage *` reset overrides the vendor wrapper's content-box). Do not override Swiper's runtime inline widths, transforms or transition duration; retain module hooks and navigation selector classes. Retain locked/disabled-control behavior with utility state selectors. Do not port unused Swiper modes or create a custom carousel.

Define a global Remix `@font-face` using installed `remixicon/fonts/remixicon.woff2` (verified present; Vite-resolvable package URL), then render the existing four exact glyphs with Tailwind font/pseudo-content utilities or literal Unicode text. Preserve normal font style, antialiasing, inherited size and `aria-hidden`. Verified mappings from installed CSS: menu-3-line U+EF34, close-line U+EB99, arrow-left-line U+EA60, arrow-right-line U+EA6C. A small reusable icon helper is justified. Do not replace icon appearance or copy the entire vendor icon stylesheet.

## Assets and preserved behavior

Reuse current `src/assets/homepage/images/*`, `icons/*` and font files. Required faces already present: Inter 400/500/600/700/800/900, Lato 400/700, Sora 600. No asset acquisition is required.

Preserve the 75vw drawer, backdrop blur, rightward closing transition, 400ms closing state, initial close-button focus, Escape/outside/link dismissal, Tab trap, focus restoration, resize dismissal at 1100px and body overflow cleanup. Header CTAs move into drawer below 640px. Keep active hash underline and navigation anchors.

Preserve Swiper's six slides repeating three identities, 1/2/3 visible slides at existing breakpoints, 24/48px spacing, loop, 3500ms autoplay, hover pause, arrow-button and keyboard controls, label lift, 350ms speed and reduced-motion autoplay-off/speed-zero behavior.

Preserve all three native video elements, posters, controls, playsInline and preload-none. `src/assets/homepage/videos/` currently contains only README.md; absent MP4s are a known baseline limitation, not a new refactor blocker. Preserve optional preview-1/2/3.mp4 lookup. Do not claim playback verified without supplied media. Presentation CTAs remain aria-disabled; footer placeholders remain unchanged.

## Acceptance and task-specific verification

1. HomePage is primarily composition and meaningful section files own their responsibilities. No source monolith merely moved wholesale to another file.
2. Only `src/index.css` remains/participates as a stylesheet; only Tailwind import plus genuinely global rules remain there. No vendor CSS imports, homepage.css references, section CSS selectors or alternative stylesheet mechanism.
3. All text, assets, section order, IDs, responsive layout, visual states and existing interactions remain equivalent to baseline.
4. `pnpm typecheck`, `pnpm lint`, `pnpm build` succeed. Build already runs typecheck; avoid redundant identical runs. Review source/diff and CSS imports deterministically.
5. Parent captures baseline before edits. Compare same-browser screenshots and computed geometry/styles at representative desktop/tablet/mobile widths (1366, 768, 390 and 320px); inspect sections across the full page. Check no horizontal overflow and verify layout transitions around 1100, 768, 640 and 540px when specific migration uncertainty warrants boundary checks.
6. Compare drawer open/close/focus/scroll-lock, hash link activation, carousel arrow and keyboard movement, autoplay/hover pause and reduced-motion, hover/focus styling, font rendering, images/posters and console errors. Use stable carousel position or reduced-motion when comparing screenshots. Native player UI may vary by browser; compare in the same browser.
7. Independent verifier reviews visual parity and actual diff after implementation; retain missing-media limitation explicitly. No assertion of human approval or delivery.

Required Implementer Skill: `.agents/skills/implementation/SKILL.md` (`frontend-implementation`). No Figma or asset-export Skill is needed because assets and current implementation are reused. Use the applicable browser/verification Skills only for the stage performing those operations.
