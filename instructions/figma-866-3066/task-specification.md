# Features page Task Specification

Readiness: READY for implementation and bounded asset acquisition. Figma access restored. Downloads/export remain implementation work; a failed material asset must be reported.

## Objective
Implement the NEW responsive /features page matching https://www.figma.com/design/OReDRj53qNvXRNRzcV7Up3/Untitled?node-id=866-3066. Preserve the existing homepage at /. Parent accepted /features and optional route-aware shared links as routine integration choices.

## Technology and structure
- README Technology Contract: React19.3, TypeScript6, Vite8, React Router7, Tailwind4, pnpm10.15. No new dependencies.
- Add FeaturesPage route in src/App.tsx. src/main.tsx already supplies BrowserRouter. Create src/pages/FeaturesPage.tsx as composition and cohesive components under src/components/features/: hero, problems, feature details, tasks, CTA. Shared benefit rows/detail component justified by repetition.
- Reuse src/components/homepage/Header.tsx and Footer.tsx with optional navigation/page props or minimal shared extraction. Preserve homepage defaults, visuals, mobile drawer, focus handling, reduced motion. Features links: Home /, Feature /features, How It Works /#how-it-works, About Us /#why-aurtx, Contact #contact. Logo links home, Feature is current page. Homepage may expose new /features link without changing its sections.
- Existing PresentationButton.tsx intentionally uses aria-disabled for CTAs without destinations. Preserve this convention for signup/sign-in and other unprovided destinations; invent no backend/auth behavior. Hero Learn More may link to problems/details; See How It Works to /#how-it-works.
- src/index.css supplies Inter400–900, Lato400/700, focus/reduced motion, dark/green button gradients. Reuse fonts/tokens; existing bold Lato is practical match for Figma ExtraBold. Tailwind utilities, no new page stylesheet. Normal flow/grid/flex, not generated whole-page absolute coordinates.

## Design evidence and sections
figma-reference.md contains complete generated reference with exact copy, values, node IDs and asset URLs. Adapt it; do not paste generated code. Target is named features page, desktop canvas approximately1572px wide, surface #fafbfb.
1. Header866:3084: pale inset rounded panel, site logo/menu and dark gradient Sign In/Get Started pills.
2. Hero866:3067: two columns, left copy about573px, right composition794x551 radius18; eyebrow POWERFUL FEATURES; Everything Your Team Needs to Work Smarter; paragraph; two CTAs; Built for modern teams with supporting line. Desktop hero712px tall near y129, heading Lato40 bold, body Lato26/1.2.
3. Problems866:3098: centered eyebrow BUILT AROUND YOUR WORK; Less Managing. More Getting Things Done. (Inter52 bold); paragraph; six numbered cards3x2,387x277, gap50, radius20, #f2f2f2/#dde9e5. Order: Missed Client Messages; Scattered Team Work; Forgotten Follow-Ups; Repetitive Questions; Unclear Responsibilities; Disconnected Tools. Sixth uses dark ribbed background, white badge/text.
4. Conversation866:3158: image left664x832; title Every Client Conversation, Organized.; description; Benefits; Organized Conversations, Team Visibility, Client Context, Better Follow-Ups; Learn More.
5. Team866:3192: reversed columns; Keep Your Team Organized and Moving Together; description; Manage Your Team, Assign the Right People, Team Lead Control, Clear Responsibilities; Explore More. Image right664x832.
6. Tasks866:3227: centered pill TASKS & FOLLOW-UPS; Turn Client Requests Into Action; description; Assign Work / Track Progress / Follow Up / Stay Organized; large dashboard1237x503 crop (raw image height138.41%, top-34.41%).
7. CTA866:3242: pale teal decorative circles behind dark gradient panel1145x508; diagonal corner radii225/49. READY TO WORK SMARTER?; Bring Your Business Together With Aurtx.; paragraph; outlined Get Started and See How It Works; supporting line.
8. Footer866:3258: familiar four-column footer, #161b1a inset rounded panel. Reuse content/assets, page wrapper/variant may adapt framing.
Feature titles Inter52 extra-bold; description20; benefit titles20 green#0b6b53, description16 gray, icons60. Exact copy in reference. One h1, logical h2/h3, main landmark and skip link, meaningful image alt text and empty decorative alt.

## Responsive interpretation
No separate mobile frame was inspected. Retain all content: collapse hero/detail columns; cards2 then1 column; stack/wrap CTA and supporting lists; scale type/padding; proportional imagery. Reuse Header1099px mobile breakpoint and current drawer. Existing767/639/540px conventions may guide other breakpoints. No overflow or clipped copy at360/390,768,1572px. These are implementation interpretations, not Figma mobile specifications.

## Assets
File key OReDRj53qNvXRNRzcV7Up3 throughout. Download exact bytes from reference constants into src/assets/features/; import locally, verify dimensions/load/crop, record source mapping. URLs expire after about7 days. Research did not download assets.
- hero-workspace.png:866:3083, imgRectangle140131.
- client-conversations.png:866:3159, imgImage.
- team-management.png:866:3225, imgImage1.
- tasks-follow-ups.png:866:3241, imgRectangle140132; preserve crop.
- benefit-check.svg:866:3167 imgMaterialIconThemeTodo; alternate866:3173 imgMaterialIconThemeTodo1, keep both if glyph differs.
- disconnected-background.png: exact static decorative node866:3112 within866:3111, export PNG with effect baked, excluding card text. Existing src/assets/homepage/images/ribbed-background.png is reusable ONLY after verifying this design match. Prior homepage approval alone does not prove identity. Use static exported artwork instead of adding experimental HTML-in-Canvas/WebGPU runtime; shader metadata isAnimated:false, usesMouse:false. No animation required. Parent informed of static-export direction.
- Decorative vector866:3157 imgVector, circles866:3243/3244 imgEllipse12/13 available in reference. Use exact SVG where appropriate; simple geometric circles/dots may use CSS, no hand-drawn complex glyphs.
- Reuse existing Header/Footer branding and social SVGs via src/components/homepage/assets.ts: logo, logo-white, facebook, twitter, linkedin, instagram. Local Inter/Lato fonts already declared. Do not substitute homepage dashboard imagery for new page images.

## Acceptance and verification
- Direct /features loads all sections in order with accurate local imagery; / remains existing homepage.
- Meaningful component structure and Tailwind styling; no unnecessary dependency or page CSS.
- Desktop comparison to exact frame: hierarchy, imagery/crops, spacing, grid, alternating rows, CTA and shell. Responsive checks360/390,768,1572px: all content, no horizontal overflow, readable copy, usable controls.
- Navigation/footer resolve correctly on Features; keyboard drawer opening/closing, Escape/focus return and hidden-state accessibility; homepage shared-shell regression check.
- Run pnpm typecheck, pnpm lint, pnpm build, git diff --check. Report actual failures; do not claim unavailable checks passed. Check missing assets and runtime errors. No speculative unit tests needed for static markup. Independent verifier performs final runtime/visual review.

## Implementer Prompt
Implement /features using instructions/figma-866-3066/task-specification.md and instructions/figma-866-3066/figma-reference.md. Load frontend-implementation, frontend-asset-handling, figma-asset-export for the identified decorative export, project figma-use before Figma calls, and only tool-required plugin prerequisites. Reuse this evidence instead of repeating frame research. Create clean sections and route-aware shared shell, acquire only listed assets, preserve homepage, perform specified checks and return an implementation handoff with files/assets/checks/limitations. You are not alone; preserve others' edits. No Git delivery or dependency installation.

Material notes: external CTA destinations unspecified; retain established presentation-only behavior. Asset acquisition pending, not claimed complete. If exact asset retrieval fails, stop affected work and report precise source/destination/resolution.
