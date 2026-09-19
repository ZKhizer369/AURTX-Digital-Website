# Implementation Handoff

Task: How It Works page, Figma `OReDRj53qNvXRNRzcV7Up3 / 866:3310`.

Task Specification Used: `instructions/figma-866-3310/task-specification.md` (parent approved current preparation).

Instruction Files Read: root `AGENTS.md`, task specification, `figma-reference.md`, README Technology Contract. No nested source AGENTS files were found. No separate Research Handoff was present at implementation start; verified findings were consumed from the specification/reference.

Skills Used: `frontend-implementation`, `frontend-asset-handling`, `figma-asset-export`, project `figma-use`.

## Implementation summary

- Added `/how-it-works` with composed hero, branching workflow, AI/team, work-anywhere, connected workspace, reused CTA, Header and Footer.
- Tailwind implementation reflows hero and cards and retains parallel Team/AI steps. Hub uses local exported connector paths on desktop and a connected module list on smaller screens.
- Shared navigation points to the new route, indicates the active page, and retains current mobile drawer behavior. Explore Aurtx links to `/features`; new CTA links to `#workflow`.
- Added scoped transparent CTA buttons and CTA title/destination props while preserving Features defaults. Undefined signup actions retain `aria-disabled` behavior.
- No dependency, global styling, workflow infrastructure, Git delivery or deployment changes.

## Files changed

- `src/App.tsx`
- `src/pages/HowItWorksPage.tsx`
- `src/components/how-it-works/{HowItWorksHero,WorkflowSection,TeamAiSection,WorkAnywhereSection,ConnectedWorkspaceSection}.tsx`
- `src/components/layout/{Header,Footer}.tsx`
- `src/components/features/FeaturesCta.tsx`
- `src/components/ui/PresentationButton.tsx`
- 33 local assets in `src/assets/how-it-works/`.

## Assets used / added

All new assets use exact bytes from the supplied Figma reference URLs, with no redrawn glyphs. Reference constants map to local filenames:

| Reference constant | Local filename |
| --- | --- |
| imgRectangle140133 | hero-workspace.png |
| imgMessageCircle / imgCpu / imgSparkles / imgCheckCircle / imgUsers | message-circle.svg / cpu.svg / sparkles.svg / check-circle.svg / users.svg |
| imgArrow1 / imgGroup1686562660 / imgGroup1686562661 | workflow-arrow.svg / workflow-split.svg / workflow-merge.svg |
| imgSparkles1 / imgArrowRight / imgEye / imgHeart | step-sparkles.svg / arrow-right.svg / eye.svg / heart.svg |
| imgZapOff / imgBriefcase / imgUser / imgShield | zap-off.svg / briefcase.svg / user.svg / shield.svg |
| imgArrowRight1 | arrow-right-white.svg |
| imgSparkles2 / imgMessageSquare / imgCheckSquare / imgUsers1 / imgUserCheck | hub-sparkles.svg / message-square.svg / check-square.svg / hub-users.svg / user-check.svg |
| imgConnectorAi / Conversations / Tasks / Team / Clients | connector-ai.png / connector-conversations.png / connector-tasks.png / connector-team.png / connector-clients.png |
| Corresponding Connector Glow constants | connector-ai-glow.svg / connector-conversations-glow.svg / connector-tasks-glow.svg / connector-team-glow.svg / connector-clients-glow.svg |

Hero SHA256 `2EE9EA8239DB249341DC2DECF6952498D8FA8459E3BC4BE89ABD7D23845859C1` differs from Features hero `090AC8707308A124CAF1748F9DE1A86D83F4794167A43A73EAFDBCB1119E80C3`; authoritative new image retained and visually inspected. All 33 SVG/PNG formats checked using XML parsing or PNG magic bytes. Shared logos/social assets and fonts reused through existing components.

## Implementation checks

- `pnpm lint`: passed after removing the pre-existing unused Footer `inset` destructured binding (prop API retained).
- `pnpm build`: passed including typecheck and production bundle (160 modules; Vite build 3.39s). Initial production bundling hit sandbox `spawn EPERM` / native Tailwind dependency loading error; one retry outside sandbox resolved it.
- `git diff --check`: passed; only Git LF-to-CRLF informational warnings.
- Own source diff inspected for intended changes only; newly created section source inspected during implementation.
- All 33 local SVG/PNG files exist and pass format checks.
- No independent runtime, visual QA, or review performed by Implementer.

## Known limitations / open issues

**Blocked decoration:** group `866:3339` (children `866:3340/3341`) could not be exported with its ribbed shader baked. `figma_download_assets` returned a 237×237 PNG (2420 bytes), visibly a pale rounded square without the effect. One bounded alternative `figma_get_screenshot` of the exact group produced the same absent-effect visual. Both were downloaded and inspected. Incorrect source asset removed; no substitute is rendered. Required resolution: obtain a faithful static PNG of the complete decoration at `src/assets/how-it-works/hero-ribbed-decoration.png`, then position at hero artwork bottom-right. Parent explicitly authorized continuing unaffected implementation with this scoped blocker.

Automatic approval review rejected saving screenshot evidence in the protected instructions folder; the safer temporary destination succeeded. No blocked folder write was bypassed. Network downloads otherwise succeeded with escalation after sandbox connection refusal.

Readiness for Independent Verification: page implementation and deterministic checks ready. Full visual acceptance remains blocked by missing ribbed decoration. Verify desktop/mobile diagrams, geometry, all three routes and keyboard drawer behavior against the specification. No preview server started by Implementer.
