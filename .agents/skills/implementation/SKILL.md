---
name: frontend-implementation
description: Implement the approved frontend task using the minimum effective context, existing project patterns, verified requirements, and bounded deterministic checks.
---

# Frontend Implementation

## Purpose

Implement an approved frontend task within its defined scope.

The objective is:

`APPROVED TASK → MINIMUM RELEVANT CONTEXT → SMALLEST COHERENT CHANGE → TARGETED CHECKS → HANDOFF → STOP`

This Skill governs implementation.

It does not redefine requirements, perform broad research, or deliver through Git.

---

# Core Principles

1. Implement only the approved task.
2. Use the minimum effective context.
3. Inspect the smallest relevant repository area.
4. Reuse existing project patterns.
5. Consume upstream research instead of rediscovering it.
6. Use Figma only for unresolved implementation-specific design evidence.
7. Use only the Skills required by the task.
8. Avoid unrelated refactoring.
9. Use targeted deterministic checks.
10. Bound failed operations and retries.
11. Do not continue improving after the task is complete.
12. Report evidence truthfully.

---

# Inputs

Use, in priority order:

1. approved Task Specification;
2. applicable instruction files;
3. relevant Research Handoff;
4. required Skills;
5. relevant existing implementation;
6. approved design evidence;
7. deterministic verification tools.

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
- expected checks.

Use the Task Specification as the implementation contract.

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
- relevant patterns;
- affected styles;
- relevant utilities;
- required route/entry point;
- relevant assets;
- integration boundaries.

Expand inspection only when a specific implementation question cannot be answered from the initial context.

Do not perform repository-wide exploration.

---

# 4. Determine Reuse Before Creating

Before creating new code, check whether an existing project implementation can satisfy the requirement.

Prefer:

- existing components;
- existing utilities;
- existing styles/tokens;
- existing patterns;
- existing assets.

Do not create a duplicate abstraction when an appropriate implementation already exists.

Do not refactor existing architecture merely because another structure appears cleaner.

---

# 5. Plan the Smallest Coherent Change

Before modifying source, determine:

### Affected Files

Only files necessary for the task.

### Reusable Code

Existing implementation that should be reused.

### New Code

Only what is required.

### Design Inputs

Only verified design information required for implementation.

### Checks

Only the deterministic checks needed to establish task correctness.

Keep the plan proportional to task complexity.

Do not create speculative architecture.

---

# 6. Implement

Make the smallest coherent change that satisfies:

- approved requirements;
- project rules;
- existing architecture;
- verified design requirements;
- relevant accessibility requirements.

Preserve unrelated behavior.

Avoid:

- unrelated refactors;
- unnecessary renaming;
- unnecessary formatting;
- speculative abstractions;
- dependency changes without justification;
- scope expansion.

---

# 7. Design and Figma

Use approved design evidence when visual implementation is required.

Prefer:

1. Research Handoff;
2. Task Specification;
3. exact Figma reference;
4. existing project design conventions.

If the required implementation detail is already established upstream:

`USE IT`

Do not reopen Figma unnecessarily.

If a specific unresolved design question materially affects implementation:

`OPEN EXACT TARGET → INSPECT MINIMUM REQUIRED CONTEXT → RESOLVE → CONTINUE`

Do not perform broad Figma exploration.

Follow `figma-use` before any Figma MCP operation.

---

# 8. Assets

Prefer verified project assets.

If an approved asset already exists:

`REUSE`

If an asset must be obtained from Figma:

- use `frontend-asset-handling`;
- use `figma-asset-export` only for a specifically identified Figma asset;
- follow bounded export rules.

Do not independently search the entire Figma asset library.

Do not silently substitute missing assets.

If a mandatory asset cannot be obtained:

`STOP → REPORT EXACT ASSET GAP → ESCALATE`

---

# 9. Handle Uncertainty

Stop and escalate when implementation reveals a material issue such as:

- contradictory requirements;
- missing required information;
- substantially incompatible architecture;
- significant dependency requirement;
- security-sensitive behavior;
- task scope expansion;
- unresolved design ambiguity;
- unavailable required asset.

Do not solve consequential ambiguity through personal preference.

---

# 10. Dependency Changes

Do not add, remove, upgrade, downgrade, or replace dependencies merely for convenience.

A dependency change is justified only when:

- the approved task requires it;
- the existing project cannot reasonably satisfy the requirement;
- the change is within the applicable authorization policy.

If a significant dependency change becomes necessary but is outside the approved scope:

`STOP → REPORT → ESCALATE`

---

# 11. Run Targeted Checks

After implementation, run the smallest deterministic checks that establish the relevant acceptance criteria.

Possible checks include:

- type checking;
- linting;
- targeted tests;
- targeted build;
- targeted runtime check;
- accessibility check.

Do not automatically run every available check.

Prefer:

`TARGETED CHECK → EVIDENCE`

over:

`RUN EVERYTHING`

A broader check is justified when:

- project policy requires it;
- the change affects shared infrastructure;
- the targeted check cannot establish correctness;
- a specific regression risk requires it.

---

# 12. Failure and Retry Control

If a command or implementation operation fails:

1. capture the actual failure;
2. determine whether the failure is actionable;
3. make one meaningful corrective attempt when justified;
4. verify the result.

If it fails again:

`STOP → REPORT → BLOCKED`

Do not repeatedly:

- rerun the same command;
- rebuild without changing conditions;
- reinstall dependencies;
- inspect unrelated code;
- reopen Figma;
- retry asset export.

Use:

`ATTEMPT → MEANINGFUL RETRY → STOP`

---

# 13. Inspect the Resulting Change

Before handoff:

- inspect the modified files;
- inspect the actual diff;
- confirm scope;
- confirm the intended requirements are addressed;
- identify accidental changes;
- identify unresolved issues.

Do not perform a broad repository audit.

The diff is the primary final implementation inspection.

---

# 14. Completion Test

Implementation is ready for handoff when:

- approved objective is implemented;
- applicable requirements are addressed;
- changes remain within scope;
- required checks have been run;
- diff has been inspected;
- unresolved issues are reported.

If these conditions are satisfied:

`STOP`

Do not continue with optional improvements.

---

# Implementation Handoff

Return a compact handoff:

```text
Objective:
[what was implemented]

Files Changed:
[list]

Requirements Addressed:
[relevant criteria]

Verification:
[checks actually performed + results]

Unverified:
[if applicable]

Remaining Issues:
[if applicable]

Scope:
[WITHIN SCOPE / SCOPE CONCERN]