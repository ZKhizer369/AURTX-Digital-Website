---
name: frontend-code-review
description: Review a frontend change for correctness, scope, accessibility, maintainability, regressions, and evidence without inventing requirements.
---

# Frontend Code Review

## Purpose

Provide a structured engineering review of a completed frontend change.

The review evaluates the implementation against the approved task, applicable project rules, and available verification evidence.

The reviewer is an independent evaluator. Review is not a replacement for human approval.

## Inputs

Use:

- the human-approved task;
- the Task Specification when one exists;
- applicable instruction files;
- relevant project documentation;
- the implementation and resulting diff;
- verification results;
- approved design/Figma information when applicable.

Inspect only information relevant to the task.

## Procedure

### 1. Establish the review target

Identify:

- objective;
- approved scope;
- requirements;
- acceptance criteria;
- relevant constraints;
- expected verification.

If the review target is materially unclear:

`STOP → REPORT THE GAP → ESCALATE`

### 2. Inspect the change

Review:

- changed files;
- added files;
- deleted files;
- relevant surrounding implementation;
- configuration changes;
- dependency changes;
- tests;
- assets;
- design-related changes.

Review the actual diff rather than relying only on an implementation summary.

### 3. Check requirement compliance

Determine whether the implementation satisfies the approved requirements and acceptance criteria.

Do not introduce new requirements during review.

If the implementation differs from the approved objective, identify the specific discrepancy.

### 4. Check correctness

Review for:

- incorrect behavior;
- broken functionality;
- invalid assumptions;
- incorrect state handling;
- integration problems;
- obvious edge cases;
- runtime risks supported by evidence.

Do not report speculative defects as confirmed defects.

### 5. Check scope

Identify:

- unrelated code changes;
- unnecessary refactors;
- unnecessary renaming;
- unnecessary formatting churn;
- unexpected dependency changes;
- unexpected configuration changes;
- files modified outside the approved task.

A broader change must have an explicit, justified reason.

### 6. Check maintainability

Assess:

- consistency with existing project patterns;
- unnecessary complexity;
- duplicated logic;
- inappropriate abstractions;
- unclear structure;
- avoidable coupling;
- maintainability risks introduced by the change.

Prefer evidence from existing project conventions over personal preference.

### 7. Check accessibility

When applicable, review:

- semantic structure;
- accessible names and labels;
- keyboard interaction;
- focus behavior;
- interaction states;
- usable responsive behavior;
- relevant accessibility patterns already established by the project.

Do not claim full accessibility compliance unless the available evidence supports it.

### 8. Check visual/design compliance

When visual fidelity is part of the task:

- compare implementation with approved design guidance;
- inspect layout;
- inspect spacing;
- inspect typography;
- inspect responsive behavior;
- inspect component states;
- inspect required assets.

Do not invent design intent that is not supported by the approved design source.

### 9. Check verification evidence

Review whether relevant checks were actually performed.

Distinguish:

- passed;
- failed;
- blocked;
- not run;
- inconclusive.

Do not treat an implementation agent's statement as verification evidence.

### 10. Check regressions

Assess whether the change could affect existing functionality outside the direct task scope.

Pay particular attention to:

- shared components;
- shared styles;
- routes;
- reusable utilities;
- responsive behavior;
- dependent features.

Only report regression concerns supported by the implementation or available evidence.

### 11. Classify findings

Each concrete finding should be classified as:

- `BLOCKING`
- `NON-BLOCKING`
- `INFORMATIONAL`

### BLOCKING

A defect or issue that should prevent approval or requires correction before the task can be considered complete.

### NON-BLOCKING

A legitimate issue that should be considered but does not prevent approval under the current task requirements.

### INFORMATIONAL

A useful observation that does not require corrective action.

Do not inflate severity.

### 12. Determine review recommendation

Use:

`APPROVE FOR HUMAN REVIEW`

when no blocking findings remain and the available evidence is sufficient for the next workflow gate.

Use:

`CHANGES REQUIRED`

when blocking findings remain.

Use:

`BLOCKED`

when review cannot be completed because required information, access, or evidence is unavailable.

## Output format

Return a structured Review Handoff:

### Scope Reviewed

### Requirements Reviewed

### Verification Evidence Reviewed

### Findings

For each finding:

- Severity
- Location
- Issue
- Evidence
- Required action, when applicable

### Scope Assessment

### Regression Assessment

### Final Recommendation

One of:

`APPROVE FOR HUMAN REVIEW`

`CHANGES REQUIRED`

`BLOCKED`

## Evidence discipline

Never claim:

- a requirement was satisfied without evidence;
- a test passed when it was not run;
- a design match was confirmed without visual evidence;
- accessibility was verified without applicable review;
- a defect exists when it is only speculation.

Distinguish observed facts from inference.

## Independence

A review should evaluate the implementation independently of the implementation agent's confidence.

The implementation agent's report is context, not proof.

## Boundaries

This Skill does not:

- change requirements;
- authorize scope expansion;
- invent acceptance criteria;
- silently fix unrelated defects;
- approve consequential actions;
- commit;
- push;
- create pull requests;
- deploy.

A reviewer may modify source code only when explicit authority to perform corrective implementation has also been granted.

## Human approval

Code review does not replace required human approval.

A successful review means the work is ready for the appropriate human gate, not automatically approved for commit, merge, or deployment.

## Final rule

Review the approved work against evidence.

Do not review against personal preference.

Do not turn uncertainty into a defect.

Do not turn an agent assertion into evidence.

`REVIEW → REPORT → RECOMMEND`