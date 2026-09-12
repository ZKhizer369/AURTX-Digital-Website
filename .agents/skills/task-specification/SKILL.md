---
name: task-specification
description: Convert a frontend task and verified findings into a bounded, implementation-ready Task Specification without inventing requirements.
---

# Task Specification

## Purpose

Create or refine the Task Specification for a frontend task that requires a clear implementation contract.

Use this Skill when the task depends on meaningful research, multiple constraints, design analysis, architectural context, or coordination between workflow stages.

Do not require a formal Task Specification for trivial work that can be implemented safely and unambiguously without one.

## Inputs

Use information from:

- the human task;
- applicable instruction files;
- authoritative project documentation;
- verified Research Handoff findings;
- approved design/Figma sources;
- existing implementation;
- deterministic evidence where relevant.

Do not treat unsupported inference as verified information.

## Procedure

### 1. Define the objective

State exactly what the task must accomplish.

Keep the objective aligned with the authorized request.

Do not silently improve, reinterpret, or expand the requested outcome.

### 2. Define scope

Record:

- included work;
- excluded work;
- affected areas;
- relevant boundaries.

Keep the scope narrow enough to prevent unrelated work.

### 3. Consolidate verified context

Record only information supported by authoritative sources or verified research.

Relevant context may include:

- architecture;
- components;
- styles;
- assets;
- design/Figma information;
- integration points;
- testing mechanisms;
- project conventions.

Keep assumptions and open questions explicitly separate.

### 4. Record requirements

Translate the authorized task and verified findings into explicit implementation requirements.

Separate:

- confirmed requirements;
- assumptions;
- open questions.

Never create requirements simply to make the specification appear complete.

### 5. Record design and Figma information

When applicable, record:

- approved design source;
- relevant frames;
- relevant components;
- layout behavior;
- responsive behavior;
- interaction states;
- typography;
- spacing;
- asset requirements;
- other verified visual constraints.

Do not invent missing visual intent.

### 6. Record existing implementation

Identify relevant existing:

- components;
- patterns;
- utilities;
- styles;
- architecture;
- assets;
- integrations.

Prefer reuse of established implementation where appropriate.

### 7. Define the implementation approach

Describe the approved high-level implementation approach based on verified project context.

The approach should explain:

- where the change belongs;
- what existing patterns/components should be reused;
- what new implementation is required;
- relevant integration points;
- important implementation constraints.

Do not prescribe speculative architecture.

### 8. Define acceptance criteria

Write observable conditions that determine whether the task is successful.

Acceptance criteria should be:

- specific;
- testable;
- directly connected to the objective.

Avoid vague criteria without observable meaning.

### 9. Define verification

Specify the checks that should provide evidence of completion.

Use applicable checks such as:

- type checking;
- linting;
- tests;
- build;
- runtime checks;
- accessibility checks;
- visual QA;
- regression checks.

Only specify checks that are meaningful for the task.

### 10. Record risks

Identify known risks that could affect:

- correctness;
- accessibility;
- performance;
- security;
- maintainability;
- visual fidelity;
- scope.

Do not manufacture risks merely to populate the section.

### 11. Record assumptions

Record information that is necessary but not fully verified.

A material assumption must be resolved before implementation.

Do not silently promote an assumption into a requirement.

### 12. Record open questions

List unresolved questions requiring:

- human clarification;
- additional research;
- missing design information;
- missing project information;
- unavailable access or tooling.

Any unresolved question that materially affects correctness blocks implementation.

### 13. Determine readiness

Mark the specification:

- `READY` when implementation can proceed reliably;
- `BLOCKED` when a material issue prevents reliable implementation.

A specification must not be marked READY when a material requirement, acceptance criterion, design dependency, or authorization remains unresolved.

## Output format

Use this structure:

# Task Specification

## Objective

## Scope

### Included

### Excluded

## Verified Context

## Requirements

## Design / Figma References

## Existing Implementation

## Assets

## Responsive / Accessibility Requirements

## Implementation Approach

## Acceptance Criteria

## Verification Plan

## Risks

## Assumptions

## Open Questions

## Readiness

State:

`READY`

or:

`BLOCKED`

When BLOCKED, state exactly what prevents implementation.

## Evidence discipline

Material statements must be traceable to:

- the human task;
- applicable instructions;
- project documentation;
- verified research;
- existing implementation;
- approved design sources;
- deterministic evidence;
- another explicitly identified authoritative source.

Do not claim something was inspected, tested, approved, or verified unless evidence supports it.

## Boundaries

This Skill does not:

- implement source code;
- change requirements;
- authorize scope expansion;
- invent design intent;
- install dependencies;
- commit;
- push;
- create pull requests;
- override governing instructions.

If creating the specification requires a consequential requirement decision, stop and escalate.

## Final rule

The Task Specification converts verified information into an implementation contract.

When information is missing:

`IDENTIFY THE GAP → DO NOT INVENT THE ANSWER → BLOCK OR ESCALATE`