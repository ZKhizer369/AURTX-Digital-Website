---
name: frontend-implementation
description: Implement an approved frontend task within its defined scope, using project conventions and verified requirements without inventing or expanding the task.
---

# Frontend Implementation

## Purpose

Implement an approved frontend task using the applicable project instructions, Task Specification, project knowledge, and relevant Skills.

The goal is to make the smallest appropriate change that satisfies the approved objective.

## Inputs

Use:

- the human-approved task;
- applicable instruction files;
- the Task Specification when one exists;
- authoritative project documentation;
- relevant existing implementation;
- approved design/Figma information when applicable;
- applicable Skills;
- available deterministic verification tools.

Do not reconstruct requirements from speculation when authoritative information is available.

## Procedure

### 1. Establish the implementation contract

Read:

- applicable instructions;
- the Task Specification when provided;
- relevant project documentation;
- relevant design information.

Confirm:

- objective;
- scope;
- requirements;
- acceptance criteria;
- implementation constraints;
- verification expectations.

If a material requirement is missing, contradictory, or unclear:

`STOP → REPORT THE DISCREPANCY → REQUEST CLARIFICATION`

Do not silently reinterpret the task.

### 2. Inspect existing implementation

Inspect only the code and project areas relevant to the task.

Identify:

- existing components;
- reusable patterns;
- utilities;
- styles;
- architecture;
- routes or entry points when relevant;
- assets;
- integrations;
- testing patterns.

Prefer established project patterns over unnecessary invention.

### 3. Select applicable Skills

Use Skills that materially help the implementation.

Examples may include:

- design/Figma procedures;
- asset handling;
- accessibility;
- debugging;
- testing.

Do not invoke Skills merely because they exist.

Do not duplicate work already completed by a preceding workflow stage unless verification requires it.

### 4. Plan the change

Before modifying source:

- identify the affected files;
- identify reusable implementation;
- identify required new code;
- identify relevant constraints;
- identify verification steps.

Keep the plan proportional to task complexity.

Do not introduce speculative architecture.

### 5. Implement

Make the smallest appropriate change that satisfies:

- the Task Specification;
- applicable project rules;
- established implementation patterns;
- accessibility requirements;
- relevant design requirements.

Preserve unrelated functionality.

Avoid:

- unrelated refactors;
- unnecessary renaming;
- unnecessary dependency changes;
- formatting churn;
- speculative abstractions;
- scope expansion.

### 6. Handle design and assets

When visual implementation is part of the task:

- use the approved design source;
- follow verified design behavior;
- use the correct assets;
- preserve responsive intent;
- preserve interaction states.

Use the Asset Handling or relevant design Skill when required.

If a required design detail or important asset is unavailable and materially affects correctness:

`STOP → REPORT THE GAP → ESCALATE`

Do not silently substitute or invent.

### 7. Handle uncertainty

If implementation reveals that:

- the Task Specification is materially incorrect;
- requirements conflict;
- architecture must change substantially;
- a dependency change is significant;
- security-sensitive behavior is involved;
- the task exceeds approved scope;

stop the affected work and escalate according to the Universal safety rules.

Do not resolve consequential uncertainty through personal preference.

### 8. Run applicable checks

After implementation, run meaningful verification available for the project.

Examples:

- type checking;
- linting;
- tests;
- build;
- runtime checks;
- accessibility checks.

Use deterministic tools wherever practical.

Do not claim a check passed unless it actually ran and supports that claim.

### 9. Inspect the resulting change

Before handoff:

- inspect modified files;
- review the diff;
- check for accidental changes;
- confirm scope;
- confirm acceptance criteria are addressed;
- identify any unresolved issue.

### 10. Produce the Implementation Handoff

Return:

- Objective
- Files Changed
- Summary of Changes
- Requirements Addressed
- Verification Performed
- Remaining Issues
- Scope Confirmation

Distinguish clearly between:

- completed;
- verified;
- not verified;
- blocked;
- unresolved.

## Boundaries

This Skill does not:

- change requirements;
- authorize scope expansion;
- override project instructions;
- invent design intent;
- silently substitute required assets;
- perform unrelated refactoring;
- install dependencies unless explicitly authorized and appropriate to the task;
- commit;
- push;
- create pull requests;
- perform other consequential external actions without authorization.

## Dependency changes

Do not add, remove, upgrade, downgrade, or replace dependencies merely because doing so appears convenient.

A significant dependency change requires explicit justification and the approval required by project policy.

## Completion rule

Implementation is complete for handoff when:

- the approved objective has been implemented;
- applicable requirements are addressed;
- changes remain within scope;
- relevant checks have been run;
- the diff has been inspected;
- remaining issues are explicitly reported.

Implementation completion does not equal final workflow approval.

## Final rule

Implement what was approved.

Do not implement what was merely assumed.

When the approved task cannot be implemented reliably from the available information:

`STOP → IDENTIFY THE GAP → ESCALATE`