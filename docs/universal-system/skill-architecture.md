# Universal Codex System — Skill Architecture

## Purpose

Skills provide reusable procedures for bounded kinds of work.

A Skill defines how an agent should perform a procedure. It does not define who owns the task, does not replace project instructions, and does not grant authority beyond the agent's existing permissions and workflow boundaries.

## Core distinction

`Agent = who performs the work`

`Skill = how the work is performed`

An agent may use multiple Skills during a task.

A Skill may be used by multiple roles.

A Skill must not be coupled unnecessarily to one specific agent.

## Skill layers

### Universal Skills

Universal Skills provide reusable frontend engineering procedures that should work across projects and frameworks where practical.

They must not contain:

- project branding;
- project-specific architecture;
- project-specific routes;
- project-specific requirements;
- project-specific credentials;
- assumptions about a particular framework unless the Skill is explicitly framework-specific.

### Project Skills

Project Skills contain procedures specific to one project.

Examples include:

- project-specific component conventions;
- project-specific deployment procedures;
- project-specific design-system rules;
- project-specific testing commands;
- project-specific domain workflows.

Project Skills belong in the Project Layer.

### Existing Codex and plugin Skills

The active Codex environment may already provide Skills for particular capabilities.

Do not duplicate an existing capability merely to create a Universal Skill.

Use the smallest available Skill set that fully covers the task.

## Universal Skill catalog

### 1. frontend-task-research

Purpose:

Research a frontend task and produce verified implementation-ready findings.

Primary role:

Research Agent.

May also be used by the parent/root agent when it is performing research directly.

Core responsibilities:

- inspect relevant task context;
- inspect applicable instructions and documentation;
- inspect relevant implementation;
- inspect architecture;
- inspect components and styles;
- inspect assets;
- inspect Figma/design information when applicable;
- inspect tests and verification mechanisms;
- identify constraints, risks, dependencies, and open questions;
- distinguish verified facts from assumptions;
- provide material for the Task Specification.

Must not implement source changes.

## 2. task-specification

Purpose:

Create or refine the structured Task Specification from the human request and verified findings.

Primary role:

Parent/root Agent.

May be used by a Research Agent when explicitly assigned to produce the specification artifact.

Core responsibilities:

- define objective;
- bound scope;
- consolidate verified context;
- record requirements;
- record design/Figma references;
- record existing implementation context;
- define acceptance criteria;
- define verification expectations;
- record risks;
- record assumptions;
- record open questions.

The Skill must never invent requirements to complete missing sections.

## 3. implementation

Purpose:

Provide the reusable procedure for implementing an approved frontend task.

Primary role:

Implementation Agent.

Core responsibilities:

- read applicable instructions;
- read the Task Specification when one exists;
- inspect existing implementation;
- identify reusable patterns;
- use applicable project and technical Skills;
- implement the smallest appropriate change;
- preserve accessibility and maintainability;
- avoid unrelated refactors;
- perform appropriate checks;
- return a structured implementation handoff.

The Skill must not authorize requirement changes or scope expansion.

## 4. verification

Purpose:

Provide the reusable procedure for determining whether an implementation is supported by evidence.

Primary role:

Verification Agent.

May also be used by the parent/root agent.

Core responsibilities:

- identify checks appropriate to the task;
- run deterministic checks where available;
- inspect relevant runtime behavior;
- inspect acceptance criteria;
- assess accessibility and regressions where applicable;
- distinguish PASS, FAIL, BLOCKED, NOT RUN, and INCONCLUSIVE;
- report evidence.

The Skill must never convert an agent assertion into verification evidence.

## 5. code-review

Purpose:

Provide a structured engineering review of proposed frontend changes.

Primary role:

Review Agent.

May also be used by the parent/root agent for smaller tasks.

Core responsibilities:

- review correctness;
- verify requirement compliance;
- inspect scope;
- assess accessibility;
- assess maintainability;
- inspect architecture where relevant;
- identify regressions;
- identify unnecessary complexity;
- assess verification evidence.

The Skill must report concrete findings and must not invent requirements.

## 6. visual-qa

Purpose:

Provide a repeatable procedure for validating visual and interaction fidelity when design correctness matters.

Primary role:

Visual QA responsibility.

This responsibility may be performed by the parent/root agent or a specialized agent.

Core responsibilities:

- compare rendered implementation with approved design guidance;
- inspect layout;
- inspect responsive behavior;
- inspect typography;
- inspect spacing;
- inspect components and states;
- inspect interactions and animation when applicable;
- identify visual deviations;
- verify corrections.

When an approved Figma design exists, it is the visual reference.

The Skill must not invent missing design intent.

## 7. asset-handling

Purpose:

Provide a safe procedure for finding, validating, and integrating visual assets.

Primary role:

Implementation or Visual QA responsibility.

Core responsibilities:

- identify required asset type;
- determine whether the asset is vector, raster, component, instance, background, decorative element, masked content, or effect;
- locate the authoritative source;
- verify asset identity and intended use;
- preserve appropriate format and quality;
- place production assets in the project according to project conventions;
- report unavailable or ambiguous assets.

When a required asset cannot be retrieved or identified confidently and the missing information materially affects correctness:

`STOP → REPORT THE EXACT GAP → ESCALATE`

Do not silently substitute an unrelated asset.

## 8. debugging

Purpose:

Provide a repeatable procedure for diagnosing and resolving frontend defects.

Primary role:

Implementation Agent.

May be used by the parent/root agent or Verification Agent when appropriate.

Core responsibilities:

- reproduce the problem;
- define expected versus actual behavior;
- gather evidence;
- isolate the failure;
- identify the smallest likely cause;
- test the hypothesis;
- implement the narrowest appropriate fix;
- run regression checks;
- report the evidence.

The Skill must not guess at root causes without evidence.

## Skill selection principles

### Use the minimum effective set

Do not invoke every Universal Skill for every task.

Select only Skills materially relevant to the task.

### Combine Skills when necessary

A single task may require multiple Skills.

Example:

`Implementation + Asset Handling + Verification`

A design-heavy task may require:

`Research + Task Specification + Implementation + Asset Handling + Visual QA + Verification`

### Do not duplicate Skills

Before creating a new Universal Skill, determine whether the required capability already exists in the active Codex or plugin environment.

If an existing capability already satisfies the need, use it rather than creating a duplicate Universal Skill.

### Keep Skills bounded

A Skill should describe one coherent reusable procedure.

Avoid Skills that attempt to control the entire engineering lifecycle.

The workflow belongs in `workflow.md`.

Role ownership belongs in `agent-roles.md`.

Safety boundaries belong in `safety.md`.

Task structure belongs in `task-specification.md`.

Handoff structure belongs in `handoff-protocol.md`.

## Skill invocation

A Skill may be used when:

- the task clearly matches its declared purpose;
- the user explicitly requests it;
- the parent/root agent determines it is materially useful;
- another applicable workflow requires it.

A Skill should not be invoked merely because it exists.

## Skill structure

Universal Skills should use the standard Codex Skill structure:

```text
.agents/
└── skills/
    └── <skill-name>/
        └── SKILL.md