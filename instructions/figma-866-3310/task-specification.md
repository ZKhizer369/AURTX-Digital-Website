# How It Works page

Readiness: READY for implementation and bounded asset acquisition. Research inspected target Figma context and screenshot successfully; assets are identified but downloads/export are implementation work.

## Objective and scope

Create the responsive How It Works page from https://www.figma.com/design/OReDRj53qNvXRNRzcV7Up3/Untitled?node-id=866-3310. Add `/how-it-works` to the existing application; preserve `/` and `/features`. This route is an integration interpretation based on the verified frame name and existing routing, not a Figma-specified URL. Include all target sections and minimal shared-navigation integration. No new backend, authentication, dependency installation, delivery, or Figma modification.

## Technology and implementation targets

- README Technology Contract and package.json establish React 19.3, TypeScript 6, Vite 8, React Router 7, Tailwind 4, pnpm 10.15. Follow actual current source where README historical status is stale.
- `src/App.tsx`: add route. New `src/pages/HowItWorksPage.tsx` primarily composes meaningful section components under `src/components/how-it-works/`.
- Reuse `src/components/layout/Header.tsx` and `Footer.tsx`; extend page prop with `how-it-works`. Preserve existing sizing, shared shell behavior, accessible mobile drawer, focus return, reduced motion and existing routes. Shared How It Works navigation should expose new route; Home `/`, Feature `/features`, About Us `/#why-aurtx`, Contact `#contact`. New route has current-page navigation state and home logo target `/`.
- Reuse `src/components/ui/SectionHeading.tsx`, `PresentationButton.tsx`, local fonts and gradient tokens in `src/index.css`. Use Tailwind, normal flow/grid/flex, and scoped diagram positioning rather than whole-page absolute positioning. Match practical existing page/container scale rather than copying a 1572px fixed canvas into narrow browsers.
- `src/components/features/FeaturesCta.tsx` has the same CTA copy and layout. Generalize/move it to a meaningful shared component or extend it with destination/title-id props, keeping existing Features presentation. New page See How It Works can target its workflow section; Explore Aurtx can target `/features`. Unspecified Get Started/Sign In destinations retain established PresentationButton presentation-only behavior (`aria-disabled`). No invented signup endpoint.
- `src/components/HashNavigation.tsx` already resolves cross-route hash scrolling after fonts load; retain it. Avoid changing unrelated homepage links/sections or shared styling.

## Verified design

Full exact copy, exported URLs, values and node IDs are in `instructions/figma-866-3310/figma-reference.md`. This is reference code, not application source. Figma screenshot observed pale #f5f8f7 background, dark headings, teal details, inset rounded header/footer and generous whitespace. Desktop reference width 1572px.

1. Header 866:3311: existing site shell with logo, menu, Sign In/Get Started dark pills.
2. Hero 866:3325: two columns, left HOW IT WORKS badge, h1 “From Client Message to Completed Work”, exact explanatory paragraph, green Get Started / Explore Aurtx pills, and “Client → Aurtx → Team + AI → Completed Work.” Right workspace image 866:3326 (794×551 rendered, radius18), with translucent ribbed decoration overlapping its bottom-right. Original hero section height820, copy width578, h1 Inter40/800, body26 regular/teal; adapt proportionally to existing practical scale.
3. Workflow 866:3343: AURTX WORKFLOW badge; repeated section title and description; branching diagram: Client Request → Conversation Organized → parallel Team Assigned and AI Assists → Task Completed. Five light gray cards, teal border, radius16, dark teal icon squares; reference card264×178. Preserve branching meaning rather than falsely making all five sequential. Exact descriptions in reference.
4. AI + Your Team 866:3410: centered “AI Assists. Your Team Stays in Control.” and paragraph. Static explanatory strip: “1. AI Suggests Reply” → “2. Team Reviews & Approves” → “3. Client Gets Help” (last pill dark teal). Four cards: AI-Powered Assistance, Business-Aware Responses, Human Handoff, Team Always in Control. Desktop row1200px, gaps24, cards about190px high, radius16, fill#f2f2f2; body13/1.5 #4b615d, titles18 bold. These are informational steps, not evidenced clickable controls.
5. Work From Anywhere 866:3472: centered badge; two-line title “Your Business Doesn't Stop / When You Leave the Office.”; paragraph; three columns separated by thin vertical dividers: 01 Conversations, 02 Tasks & Progress, 03 Team Alignment; compact dark Get Started with arrow. Reference heading40, body20, numbered labels36, column titles20, copy14/1.5.
6. Connected workspace 866:3501: badge ONE CONNECTED WORKSPACE; “Everything Your Business Needs, Working Together”; paragraph. Hub canvas866:3507: central pale AURTX / Core Hub circle with subtle inset shadow; five connected cards: Aurtx AI above, Clients left, Conversations right, Team lower-left, Tasks lower-right. Teal fine connector paths, pale cards with shadow, icon badges. Reference canvas1200×600, core150, cards260px wide. This is informational artwork built from semantic content and decorative connectors; no animation or node interaction specified.
7. CTA 866:3556: reuse/generalize existing CTA: mint decorative circles behind dark gradient panel, alternating large/small corner radii; READY TO WORK SMARTER?; Bring Your Business Together With Aurtx.; description, two buttons, tagline. Target buttons are outlined white on dark panel; if current shared variant differs, add a scoped optional variant without globally restyling existing buttons.
8. Footer 866:3572: reuse existing dark four-column footer with brand/social icons, Quick Links, Company, Resources and legal bottom row.

## Assets and fonts

- Exact source is Figma file OReDRj53qNvXRNRzcV7Up3. Download only needed exported assets from reference into `src/assets/how-it-works/`, local imports, explicit dimensions. Preserve exact bytes; verify readable format, load and visible crop. URLs expire in approximately7 days. Record source/path mapping in implementation handoff.
- Hero: imgRectangle140133, node866:3326. Candidate existing `src/assets/features/hero-workspace.png` visually resembles it; verify downloaded bytes or image identity before reusing, otherwise save `hero-workspace.png` in new task asset folder. Research has not confirmed equality.
- Decoration: complete group866:3339, children866:3340/3341, static ribbed effect. Exact PNG export with effect baked to `src/assets/how-it-works/hero-ribbed-decoration.png` is preferred, following existing static decorative export convention. Do not add experimental WebGPU/HTML-in-Canvas infrastructure for a static marketing decoration. Existing homepage ribbed-background.png and features disconnected-background.png are darker/different context and are not verified equivalents. Export smallest complete group without modifying Figma; verify against target screenshot. If unsupported, stop affected work and report exact node/path rather than substituting CSS artwork.
- Workflow icons: imgMessageCircle, imgCpu, imgSparkles, imgCheckCircle, imgUsers. Arrows/connectors: imgArrow1, imgGroup1686562660, imgGroup1686562661. Keep correct glyphs; no hand-authored SVG/icon substitutions.
- AI strip/support icons: imgSparkles1, imgArrowRight, imgEye, imgHeart, imgZapOff, imgBriefcase, imgUser, imgShield. Work CTA arrow: imgArrowRight1. Only acquire constants actually used in rendered design; duplicate identical glyphs may share one verified asset.
- Hub icons: imgSparkles2, imgMessageSquare, imgCheckSquare, imgUsers1, imgUserCheck. Hub paths: imgConnectorAi/Conversations/Tasks/Team/Clients and corresponding Glow variants in reference; download exact needed paths. Thin straight geometric separators may be CSS borders; do not redraw complex glyphs.
- Reuse existing header/footer logo and social SVGs via `src/components/homepage/assets.ts`. Simple CTA circles may use CSS, matching existing component.
- Inter400–900 and Lato400/700 already local and declared. Target mixes occasional Outfit/Geist with predominantly Inter/Lato; using established Inter for those few labels/body passages is a project-consistency interpretation, avoiding unrelated font/dependency work. Verify visual weight/metrics.

## Responsive and accessibility interpretation

Only supplied desktop frame inspected; no mobile design is asserted. Adapt while retaining every section and diagram relationship: stack hero, wrap buttons, collapse supporting cards4→2→1, stack three numbered columns with appropriate divider changes. Reflow workflow while retaining parallel Team/AI branch; hub cards may become a readable responsive arrangement with meaningful visible relationship to core. Do not shrink text to fit fixed desktop diagrams or introduce horizontal page overflow. Reuse existing Header breakpoint1099 and mobile drawer. One h1, coherent h2/h3, main/skip link, meaningful artwork alt text; decorative connectors/icons empty alt and hidden from assistive technology where redundant.

## Acceptance and verification

- Direct `/how-it-works` loads all eight sections and exact content with all local assets; existing Home and Features remain intact.
- Desktop visual comparison to target: hierarchy, hero artwork/crop/decorative overlay, workflow branch geometry, AI step strip/card row, numbered columns, five-module hub, CTA and shared shell.
- Check at1572 or1440,768,390 and360px: readable copy, content retained, no overflow/clipping, correct diagram relationships, controls usable.
- Validate shared links on all three routes, active navigation state, mobile drawer keyboard opening/closing/Escape/focus return and hidden-state behavior. Verify Explore Aurtx and CTA workflow anchor.
- Run pnpm lint, pnpm build (includes typecheck), git diff --check; explicitly report actual results. Independent verifier checks runtime errors, missing assets, desktop/mobile visuals, and shared-shell regressions. No new unit-test suite is needed for static content.

## Implementer Prompt

Implement `/how-it-works` using `instructions/figma-866-3310/task-specification.md` and `instructions/figma-866-3310/figma-reference.md`. Required Skills: frontend-implementation, frontend-asset-handling, figma-asset-export for identified decoration; project figma-use before Figma calls and any tool-mandated plugin prerequisite. Reuse verified research rather than repeating frame inspection. Own page/sections/assets and minimal shared route/CTA/navigation changes. Acquire only specified necessary assets, reuse verified project copies, preserve other work, perform acceptance checks and write implementation handoff. No dependencies, Git delivery or design writes. Surface material retrieval failures; bounded acquisition is not yet complete.
