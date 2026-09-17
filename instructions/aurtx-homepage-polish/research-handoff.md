# Research handoff

Task: Homepage drawer, custom-video-controls, social-anchor and growth-arrow polish.
Readiness: READY for implementation; real playback verification pending user MP4s.

Verified: Header currently closes right; existing keyboard/hash/focus behavior is reusable. VideoSection uses native controls and the established optional video helper. Footer socials are mapped spans. Growth uses textual up arrow. Installed Remix font supplies all required glyphs. Existing posters/social assets exist; MP4 directory contains only README.md. Both supplied PNG references were visually inspected. Current source differs from the README's historical status paragraph; preserve current section components and user edits.

Relevant sources: AGENTS.md; README Technology Contract; `.agents/skills/research/SKILL.md`; `.agents/skills/task-specification/SKILL.md`; `src/components/homepage/{Header,VideoSection,Footer,GrowthSection,RemixIcon}.tsx`; `src/components/homepage/assets.ts`; `src/index.css`; videos README; installed Remix font CSS; prior refactor implementation handoff for existing behavior/verification limitations.

Instruction package: `instructions/aurtx-homepage-polish/task-specification.md` is the single execution contract; this handoff adds no requirements. Exact design references, assets, technology constraints, acceptance criteria, verification requirements and media paths are recorded there.

Required Implementer skill: frontend-implementation (`.agents/skills/implementation/SKILL.md`), verified available in the skill catalog. No Figma or asset acquisition required.

Interpretations surfaced: skip controls seek +/-10 seconds; overflow provides mute and playback speed; cleaner close uses close-large-line; active green reuses #0b6b53. Parent explicitly authorizes unavailable/disabled video behavior until media is supplied. No material open implementation question. Missing media is a playback-verification limitation, not fabricated evidence.

Implementer Prompt: Implement the authorized homepage polish using `instructions/aurtx-homepage-polish/task-specification.md` and frontend-implementation. Work from current source and preserve others' edits. Own only the directly affected homepage components and any cohesive local video-control component required; reuse assets/helper/font and Tailwind, with index.css only for global CSS. Follow the supplied PNG features, contract interactions, acceptance and verification checks. Return actual evidence and exact MP4 destinations; distinguish pending real playback verification. No dependencies, unrelated changes, workflow edits or delivery.

Integrity: Research created only this file and task-specification.md under the assigned task directory. No application source, assets, dependencies, Git state, or workflow files were modified. No implementation/verification/delivery claimed. Research stopped after the implementation-readiness threshold was established.
