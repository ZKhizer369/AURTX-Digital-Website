# Features page research handoff

Readiness: READY for implementation and bounded asset acquisition. Earlier Figma permission blocker resolved on resumed design-context call.

Task: new responsive Features page at /features; preserve existing homepage. Parent accepted route and optional route-aware shell props.

Verified: exact node866:3066 in file OReDRj53qNvXRNRzcV7Up3 is features page, with hero, six problems, conversation/team details, tasks, CTA and footer. Complete copy, node IDs, styles and asset URLs saved in figma-reference.md. Existing React Router has only /; shared Header/Footer, local fonts, and Tailwind conventions are reusable. Header links currently target homepage hashes.

Sources inspected: AGENTS.md, researcher instructions, required research/task-specification/Figma skills, README Technology Contract, package.json, src/App.tsx, main.tsx, index.css, pages/HomePage.tsx; homepage Header, Footer, PresentationButton, assets, FeaturesSection; directly relevant asset provenance and handoff protocol.

Package:
- instructions/figma-866-3066/task-specification.md: canonical requirements, asset sources, verification and Implementer Prompt.
- instructions/figma-866-3066/figma-reference.md: complete generated design evidence, not production code.
- instructions/figma-866-3066/research-handoff.md: this handoff.

Assets: four new dashboard PNGs, benefit SVGs, exact static sixth-card decoration. Sources/destinations in specification. Reuse site logos/socials/fonts. Acquisition is pending implementation work; no asset exported or downloaded by research. Shader metadata indicates no animation; exact static decorative export avoids an experimental runtime dependency. Failed asset retrieval must be reported, never silently substituted.

Required Implementer skills: frontend-implementation, frontend-asset-handling, figma-asset-export, project figma-use; tool-specific plugin prerequisites only when invoked. Execute prompt in task-specification.md without repeating frame research.

Acceptance: complete separate /features, Figma desktop fidelity, responsive stacking, route-aware navigation, homepage preservation, local assets, clean React/Tailwind sections. Verification: typecheck/lint/build/diff check, desktop/mobile rendering, drawer keyboard behavior, homepage regression, no missing assets or runtime errors. Details in specification.

Assumptions: mobile behavior is responsive interpretation; no mobile frame supplied. Unspecified external CTA destinations retain existing presentation-only convention. No current research blocker.

Only three files in this task instruction package created/updated. No source code changed, dependencies installed, tests run or Git delivery performed. Implementation and independent verification remain pending.
