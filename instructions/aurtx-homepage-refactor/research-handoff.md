# Research handoff

Task: current homepage section-component/Tailwind refactor. Readiness: READY. Parent captured pre-edit metrics in `instructions/aurtx-homepage-refactor/baseline.md` at 1366/768/390/320px widths and 844px height; consume that evidence without repeating research.

Verified sources: repository AGENTS.md; README Technology Contract; research and task-specification Skills; HomePage.tsx, complete homepage.css, index.css, main.tsx, package.json; prior homepage revision-handoff.md; installed Swiper core CSS and Remix font CSS; directly relevant asset/font/video existence. No nested AGENTS.md found under src or instructions.

Findings: meaningful section boundaries and existing shared CTA are clear. Header owns drawer/hash effects; Products owns Swiper/reduced-motion. CSS contains original rules, a revision block and late patches, all contributing to effective styles. Tailwind is already configured. Strict single-stylesheet compliance requires removal of both vendor imports; current horizontal Swiper layout is expressible through scoped utilities, and Remix's four verified font glyphs preserve icon identity without its stylesheet. Existing images/icons/fonts are reusable; MP4 files remain absent as documented upstream.

Design authority: current rendered page and source cascade; no Figma research performed or needed. No assets acquired or modified.

Instruction package: `instructions/aurtx-homepage-refactor/task-specification.md` is the canonical execution contract; this handoff records only preparation evidence. Parent's baseline artifact will supplement verification evidence.

Constraints/acceptance/verification: exact scope, responsibilities, CSS migration hazards, vendor handling and parity checks are in the contract. Required Implementer Skill verified available: `frontend-implementation`, `.agents/skills/implementation/SKILL.md`.

Risks: effective cascade/specificity, utility ordering, exact media cutoffs, relative asset helper paths and Swiper runtime sizing. Open product questions/blockers: none. Baseline/runtime verification was not performed by Researcher; Parent owns capture. Missing media remains a pre-existing limitation.

Implementer Prompt:

Implement the user-authorized homepage refactor using `instructions/aurtx-homepage-refactor/task-specification.md` and Parent's baseline evidence. Load `.agents/skills/implementation/SKILL.md`. Extract meaningful section components and keep HomePage composition-focused; migrate all section styling to Tailwind, retain only index.css with Tailwind/global rules, remove homepage.css and both vendor stylesheet imports using the contract's Swiper/Remix approach. Preserve current design/content/assets/responsiveness/interactions exactly, including known missing video sources. Own only homepage source/components/index.css and deletion of homepage.css; preserve other agents' README/protected edits and all dependencies/assets. Run appropriate existing checks, report changed files and actual evidence, and hand off to independent verification. Do not redesign, retrieve Figma assets or perform Git delivery.

Integrity: Researcher created only this task's specification and handoff. No application source, dependency, asset, workflow or Git state changes; no dependencies installed; no implementation/test/approval claim.
