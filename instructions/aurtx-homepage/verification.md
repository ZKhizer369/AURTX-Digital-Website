# Verification expectations

Implementer self-checks: pnpm typecheck; pnpm lint; pnpm build. Browser smoke test / at1572px desktop and narrower widths; verify images/fonts load, no console errors, correct section sequence, products count/Swiper and menu/hover behavior.

Independent Verification must separately run meaningful checks and record PASS/FAIL/BLOCKED/NOT RUN with evidence. Test:
- viewport1572×1000 desktop,768×1024 tablet,390×844 phone; additionally320px width overflow/legibility;
- desktop three complete distinct products; narrow Swiper drag/swipe and keyboard navigation changes active visible item; desktop locking valid when all three items fit;
- no actual video playback/network media; static previews;
- keyboard menu open/close, aria-expanded, Escape, focus return and link activation where real local anchors exist;
- sixth-card rest→hover→rest and keyboard equivalent; right-moving CTA gradients; reduced-motion state;
- no broken image URLs, remote expiring Figma URLs in production usage, unexpected console/runtime errors, document horizontal overflow or clipped meaningful text;
- presentation-only unspecified CTAs do not launch invented routes or flows.

Visual QA is distinct: compare same-width browser screenshots to evidence/figma-desktop-reference.png and targeted Figma sections. Check typography/weights, section bounds, hero person crop and side text, header, statistic overlap, all player imagery, products/labels, six-card spacing, dark hover state, growth graphics, five team-role cards and footer. Explicit allowed deviations: three full desktop products instead of source partial third; sixth dark appearance during hover/focus not idle; responsive reflow because mobile mockup not supplied; no decorative demonstration cursor. Report evidence-based discrepancies, fix and recheck.

Independent Code Review checks task coverage/scope, maintainability, semantics, accessible interactions and changes against requirements. Human review/approval follows successful checks. None of these stages is established by Research. Git delivery prohibited.


## Current authorized stopping point
Run independent Verification only: prescribed typecheck/lint/build, homepage content/assets, functional hover/focus/menu/Swiper and responsive usability checks. Formal Figma visual fidelity comparison and Code Review are deferred by explicit user direction; do not perform those stages or claim their approval. Use manual-assets.md and current Task Specification. Stop with an evidence-backed Verification Handoff, including any failures or limitations. No Git delivery.

