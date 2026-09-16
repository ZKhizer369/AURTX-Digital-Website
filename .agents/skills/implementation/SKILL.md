---
name: frontend-implementation
description: Implement the approved frontend task using the minimum effective context, established project architecture, verified requirements, declared technology contract, and bounded deterministic checks.
---

# Frontend Implementation

## Purpose

Implement an approved frontend task within its defined scope.

The objective is:

`APPROVED TASK → MINIMUM RELEVANT CONTEXT → ARCHITECTURE PLAN → SMALLEST COHERENT CHANGE → TARGETED CHECKS → ARCHITECTURE SELF-CHECK → HANDOFF → STOP`

This Skill governs implementation.

It does not redefine requirements, perform broad research, or deliver through Git.

---

# Core Principles

1. Implement only the approved task.
2. Use the minimum effective context.
3. Inspect the smallest relevant repository area.
4. Follow the project's declared Technology Contract.
5. Preserve sound existing project patterns.
6. Consume upstream research instead of rediscovering it.
7. For substantial React work, establish meaningful component boundaries before or during implementation.
8. Use the project's declared styling system rather than introducing an unnecessary alternative.
9. Use Figma only for unresolved implementation-specific design evidence.
10. Use only the Skills required by the task.
11. Avoid unrelated refactoring.
12. Prefer maintainable architecture over compressed or monolithic implementation.
13. Use targeted deterministic checks.
14. Bound failed operations and retries.
15. Do not continue improving after the task is complete.
16. Report evidence truthfully.

---

# Inputs

Use, in priority order:

1. approved Task Specification;
2. applicable instruction files;
3. relevant Research Handoff;
4. project Technology Contract;
5. required Skills;
6. relevant existing implementation;
7. approved design evidence;
8. deterministic verification tools.

Do not automatically read:

- every project document;
- every configuration file;
- the entire repository;
- all available Skills;
- the entire Figma file.

Expand context only when the current task demonstrates that it is necessary.

---

# 1. Establish the Implementation Contract

Confirm:

- objective;
- scope;
- requirements;
- acceptance criteria;
- relevant constraints;
- project Technology Contract;
- expected checks.

Use the Task Specification as the implementation contract.

If the project Technology Contract exists, follow it.

If the Technology Contract conflicts with the approved task, explicit user requirement, or actual repository state:

`STOP → REPORT CONFLICT → ESCALATE`

If the task is materially unclear or contradictory:

`STOP → REPORT GAP → ESCALATE`

Do not reconstruct requirements through guesswork.

---

# 2. Read Only Applicable Instructions

Load:

- applicable Universal/project instructions;
- exact task-specific instructions;
- Skills explicitly required by the task.

Do not load unrelated instruction files or Skills merely because they exist.

When upstream Research has already established a requirement, use that result.

Do not repeat the same research without a material reason.

---

# 3. Inspect Existing Implementation

Start from the files identified by the Task Specification or Research Handoff.

Inspect only enough surrounding implementation to understand:

- existing components;
- relevant component patterns;
- page structure;
- relevant styles;
- declared styling system;
- relevant utilities;
- required route/entry point;
- relevant assets;
- integration boundaries;
- existing folder conventions.

Expand inspection only when a specific implementation question cannot be answered from the initial context.

Do not perform repository-wide exploration.

---

# 4. Determine Reuse Before Creating

Before creating new code, check whether an existing project implementation can satisfy the requirement.

Prefer:

- existing components;
- existing utilities;
- existing styles/tokens;
- existing design patterns;
- existing assets;
- existing interaction patterns.

Do not create a duplicate abstraction when an appropriate implementation already exists.

Do not refactor existing architecture merely because another structure appears cleaner.

When existing architecture is clearly unsound and the approved task explicitly requires architectural improvement, apply the component architecture rules below.

---

# 5. Determine Component Architecture

For substantial React frontend work, determine the minimum coherent component structure before implementation.

Identify:

### Page

The page or route being implemented or modified.

### Meaningful Sections

Identify independently understandable sections such as:

- header/navigation;
- hero/banner;
- feature section;
- product section;
- testimonial section;
- growth/content section;
- footer.

The exact sections depend on the page.

### Existing Components

Identify reusable components that already satisfy part of the requirement.

### New Components

Identify only the components genuinely required by the task.

### Component Ownership

Determine which page, feature, or section owns:

- markup;
- interaction;
- local state;
- data/configuration;
- styling;
- supporting assets.

### Folder Structure

Use the existing project convention when it is sound.

Otherwise, organize new components around meaningful:

- page ownership;
- feature ownership;
- section ownership;
- reusable UI responsibility.

Do not create a folder hierarchy merely for visual neatness.

---

# 6. React Component Architecture Rules

For substantial React pages:

- Decompose the page into meaningful section-level React components.
- Keep the page component primarily responsible for composition and page-level orchestration.
- Give each substantial section a clear responsibility.
- Extract independently interactive or behaviorally complex UI into appropriate components.
- Extract repeated UI patterns when reuse or responsibility justifies the boundary.
- Keep components cohesive and understandable.
- Reuse existing sound components instead of recreating equivalent components.
- Keep related supporting files organized according to project conventions.
- Keep state and interaction logic close to the component that owns it unless shared state genuinely requires another boundary.

A healthy structure generally resembles:

```text
Page
├── Section
├── Section
├── Section
├── Interactive Feature
└── Section