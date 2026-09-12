# About Section on Homepage — Blocked Implementation Package

## Status

**BLOCKED. Do not implement yet.**

## Approved objective

The human request is to add a simple "About" section to the AURTX Digital Website homepage.

## Verified repository context

- The repository currently contains `AGENTS.md`, Universal documentation under `docs/universal-system/`, the project Skills under `.agents/skills/`, and custom agent configuration under `.codex/`.
- No homepage/application source files, component files, stylesheets, assets, package manifest, test configuration, design/Figma reference, or project-specific product documentation were available to inspect.
- No existing project-level `instructions/` directory existed before this task package was created.

## Implementation constraints

- Do not create, modify, or choose a homepage integration point until the homepage implementation is supplied or exists in the repository.
- Do not invent About-section copy, heading, calls to action, assets, typography, layout, placement, responsive behavior, interactions, accessibility details beyond applicable baseline semantics, or technical architecture.
- Do not add dependencies or modify unrelated files.
- Follow `AGENTS.md` and the approved Task Specification once the missing inputs below are provided.

## Required human/project inputs before implementation

1. The actual homepage implementation location and its applicable project conventions.
2. Approved About-section content, including exact copy and any links or calls to action.
3. Approved visual/design guidance: placement on the homepage, layout, typography, spacing, colors, responsive behavior, and interaction behavior; an approved Figma reference is sufficient where applicable.
4. Any required images, logos, icons, or other assets, including their authoritative repository location or source.
5. Project build/test/verification commands or configuration, if source is provided separately.

## Acceptance criteria

No implementation acceptance criteria can be established reliably until the required inputs are available. After clarification, acceptance criteria must be derived from the approved content, design, homepage integration point, and available verification tooling.

## Required Implementer Skill

- `frontend-implementation` — available at `.agents/skills/implementation/SKILL.md`.

No asset-handling, visual-QA, or verification Skill is designated now because no asset requirements, approved visual reference, or project verification tooling has been provided. Add those Skills only when the missing inputs make them applicable.

## Required instruction files

- `instructions/about-section-homepage/implementation.md`

## Implementer Prompt

Read `instructions/about-section-homepage/implementation.md` and use the `frontend-implementation` Skill. The approved objective is to add a simple About section to the AURTX Digital Website homepage, but this task is **BLOCKED**. Do not modify application code. First obtain the homepage source/integration point, approved copy, design and responsive requirements, authoritative assets, and available verification commands. Once those inputs are provided, use only their verified requirements to prepare or execute the smallest scoped implementation; do not invent missing details or add dependencies. If the new information remains incomplete or contradictory, stop and report the exact gap.

## Research Handoff

### Task

Prepare implementation-facing instructions for adding a simple About section to the AURTX Digital Website homepage without modifying application code.

### Sources inspected

- `AGENTS.md`
- `docs/universal-system/agent-roles.md`
- `docs/universal-system/architecture.md`
- `docs/universal-system/handoff-protocol.md`
- `docs/universal-system/task-specification.md`
- `docs/universal-system/workflow.md`
- `.agents/skills/research/SKILL.md`
- `.agents/skills/implementation/SKILL.md`
- Repository file inventory, excluding only Git internals from relevance assessment.

### Verified findings

- The task asks for a simple About section on the homepage.
- The governing instructions require evidence-based requirements and escalation for incomplete requirements.
- There is no application/homepage source, project-specific design guidance, asset inventory, package manifest, test configuration, or existing project-level implementation documentation in the inspected repository.

### Relevant existing implementation

None was available to inspect. No integration point, component convention, style system, route, or responsive pattern can be verified.

### Requirements identified

Verified: add a simple About section to the homepage.

Blocked: all implementation-defining requirements, including copy, placement, layout, visual styling, responsive behavior, interactions, assets, accessibility expectations specific to the design, and technical integration point.

### Design / Figma findings

No design or Figma reference was available.

### Assets

No assets were available or specified.

### Constraints

- Do not invent missing product or design requirements.
- Do not modify source code, dependencies, Universal documentation, Skills, agent configuration, or Git state.
- This package is the only allowed task-specific repository change.

### Verification requirements

No project verification tooling or configuration was available. Once implementation inputs exist, identify and run only the applicable configured checks; do not claim results without execution evidence.

### Risks

- Inventing copy/design or choosing a non-existent integration point would exceed the approved task.
- Any future implementation made without source and design inputs risks incompatibility with the intended homepage.

### Assumptions

None used for implementation planning.

### Open questions

The five required inputs listed above remain open and are material.

### Readiness assessment

**BLOCKED.** Reliable implementation instructions cannot be prepared beyond the stop/escalation guidance until the listed material inputs are supplied.
