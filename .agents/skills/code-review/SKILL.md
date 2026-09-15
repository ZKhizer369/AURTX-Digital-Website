---
name: frontend-code-review
description: Independently review a completed frontend change against its approved task, actual diff, applicable project rules, and existing verification evidence without duplicating verification or expanding scope.
---

# Frontend Code Review

## Purpose

Provide a bounded independent engineering review of a completed frontend change.

The review determines whether the implementation is ready for the human approval gate.

This Skill is a review procedure.

It does not replace:

- the Task Specification;
- Implementation;
- Verification;
- Visual QA;
- human approval.

---

# Core Principles

1. Review the approved task, not the entire project.
2. Start from the actual diff.
3. Use the minimum effective context.
4. Reuse existing verification and QA evidence.
5. Do not automatically repeat checks already completed by Verification or QA.
6. Expand inspection only when the diff or evidence indicates a material risk.
7. Do not invent requirements.
8. Do not turn preferences into defects.
9. Do not report speculation as fact.
10. Do not fix issues during review unless explicit corrective authority exists.
11. Stop when the review objective is satisfied.

---

# Inputs

Use:

1. approved Task Specification;
2. applicable instruction files;
3. actual implementation diff;
4. Implementation Handoff;
5. Verification Handoff/results;
6. Visual QA evidence when applicable;
7. relevant project conventions;
8. approved Figma/design information only when required.

Do not automatically load every project document, Skill, configuration file, test suite, or design page.

Read additional information only when the current evidence demonstrates that it is relevant.

---

# 1. Establish the Review Contract

Identify:

- objective;
- approved scope;
- acceptance criteria;
- relevant constraints;
- expected verification;
- known risks.

If the review target is materially unclear:

`STOP → REPORT THE GAP → ESCALATE`

Do not reconstruct an unclear task from the implementation.

---

# 2. Start With the Diff

Inspect the actual change first.

Review:

- changed files;
- added files;
- deleted files;
- dependency changes;
- configuration changes;
- tests;
- assets;
- design-related changes.

The diff is the primary review surface.

Do not inspect unrelated repository areas before establishing that the diff requires it.

---

# 3. Determine Applicable Review Dimensions

Review only dimensions relevant to the task.

Possible dimensions:

- requirement compliance;
- correctness;
- scope;
- maintainability;
- accessibility;
- visual/design compliance;
- verification evidence;
- regression risk;
- dependency/configuration impact;
- asset correctness.

Do not perform every dimension automatically.

### Applicability rule

A review dimension is applicable when:

- the Task Specification requires it;
- the changed code directly affects it;
- existing evidence identifies a relevant risk;
- project rules explicitly require it.

Otherwise:

`N/A`

Do not spend execution time proving irrelevant dimensions.

---

# 4. Requirement Compliance

Determine whether the implementation satisfies the approved requirements and acceptance criteria.

Use existing:

- Task Specification;
- implementation evidence;
- verification results;
- visual QA results.

Do not create new requirements during review.

If a requirement is not satisfied:

record the exact requirement and evidence.

---

# 5. Correctness Review

Inspect for concrete implementation problems such as:

- incorrect behavior;
- broken functionality;
- invalid assumptions;
- incorrect state handling;
- integration problems;
- obvious edge cases;
- runtime risks supported by evidence.

Expand into surrounding code only when the diff indicates that the surrounding implementation is material to the finding.

Do not perform speculative repository-wide analysis.

---

# 6. Scope Review

Check whether the change remains within the approved task.

Look for:

- unrelated file changes;
- unnecessary refactors;
- unnecessary renaming;
- formatting churn;
- unexpected dependencies;
- unexpected configuration changes;
- unrelated behavior changes.

If a broader change has a documented and justified reason, do not classify it as a scope violation merely because it is larger.

---

# 7. Maintainability Review

Assess only maintainability risks introduced by the current change.

Check:

- consistency with established project patterns;
- unnecessary complexity;
- duplicated logic;
- inappropriate abstractions;
- avoidable coupling;
- unclear structure.

Prefer existing project conventions over personal preference.

Do not request refactoring solely to make code conform to a reviewer's preferred style.

---

# 8. Accessibility Review

Perform only when accessibility is relevant to the task or changed interface.

Check applicable concerns such as:

- semantic structure;
- accessible names and labels;
- keyboard interaction;
- focus behavior;
- interaction states;
- responsive usability;
- established project accessibility patterns.

Use existing QA evidence where available.

Do not claim complete accessibility compliance unless the evidence supports that conclusion.

---

# 9. Visual/Design Review

Perform only when visual fidelity is part of the approved task.

Prefer existing Visual QA evidence.

Inspect Figma/design sources directly only when:

- Visual QA evidence is missing;
- a material visual discrepancy needs confirmation;
- the review identifies a design-related issue that cannot be resolved from existing evidence.

Use the narrowest relevant frame/node/reference.

Do not reopen an entire Figma file for general exploration.

Do not repeat asset retrieval or export work.

Do not redo Visual QA merely because visual design is part of the task.

---

# 10. Verification Evidence Review

Inspect the existing Verification results.

Determine whether required checks were:

- passed;
- failed;
- blocked;
- not run;
- inconclusive.

Verification results are evidence.

Do not automatically rerun the same checks.

Rerun a check only when:

- the evidence is contradictory;
- the implementation changed after verification;
- the recorded result is materially insufficient;
- the review identifies a specific risk requiring confirmation.

If reproduction is required, perform only the targeted check.

Do not run the complete test/build/lint suite by default.

---

# 11. Regression Review

Assess regression risk based on the actual change.

Pay particular attention to:

- shared components;
- shared styles;
- routes;
- reusable utilities;
- changed dependencies;
- affected responsive behavior.

Expand inspection only when the diff demonstrates a realistic dependency or regression path.

Do not perform a repository-wide regression investigation without evidence that it is necessary.

---

# 12. Classify Findings

Every concrete finding must be classified as:

`BLOCKING`

`NON-BLOCKING`

`INFORMATIONAL`

### BLOCKING

A concrete issue that:

- violates an approved requirement;
- breaks required behavior;
- creates a material defect;
- introduces an unacceptable regression;
- or prevents required verification.

A blocking finding should prevent approval.

### NON-BLOCKING

A legitimate issue that should be considered but does not prevent approval under the current task.

### INFORMATIONAL

An observation that does not require corrective action.

Do not inflate severity.

---

# 13. Evidence Standard

Every substantive finding should identify:

- what was observed;
- where it occurs;
- why it matters;
- the evidence supporting it.

Separate:

`OBSERVED FACT`

from:

`INFERENCE`

Do not convert uncertainty into a defect.

---

# 14. Handling Missing Evidence

If required evidence is missing:

Determine whether it can be obtained through one targeted action.

If yes:

`TARGETED CHECK → RECORD RESULT`

If no:

`BLOCKED → REPORT EXACT MISSING EVIDENCE → ESCALATE`

Do not repeatedly attempt to obtain unavailable evidence.

Use:

`ONE TARGETED ATTEMPT → STOP`

---

# 15. Review Independence

The Implementation Handoff is context, not proof.

The Verification Handoff is evidence, but the reviewer remains independent.

Do not:

- blindly trust implementation claims;
- blindly repeat implementation work;
- blindly repeat verification work.

Validate material claims against the smallest authoritative evidence necessary.

---

# 16. Review Boundaries

This Skill does not:

- change requirements;
- authorize scope expansion;
- invent acceptance criteria;
- silently fix unrelated defects;
- perform broad refactoring;
- perform broad repository research;
- repeatedly rerun tests;
- repeatedly inspect Figma;
- repeatedly retrieve assets;
- commit;
- push;
- create pull requests;
- merge;
- deploy.

A reviewer may modify source code only when explicit corrective implementation authority has been granted.

---

# 17. Review Completion

The review is complete when:

- all applicable review dimensions have been evaluated;
- blocking findings are identified;
- relevant evidence has been assessed;
- the implementation can be classified for the next workflow gate.

Then:

`STOP`

Do not continue searching for additional issues after the review objective is satisfied unless a new material finding appears.

---

# Output Format

Return a compact Review Handoff.

## Scope Reviewed

State the task/change reviewed.

## Requirements Reviewed

List the applicable requirements or acceptance criteria.

## Verification Evidence Reviewed

List the relevant existing evidence.

## Findings

For each finding:

- Severity
- Location
- Issue
- Evidence
- Required action, when applicable

If there are no findings:

`No findings.`

## Scope Assessment

`WITHIN SCOPE`

or

`SCOPE CONCERN`

## Regression Assessment

`NO MATERIAL REGRESSION FOUND`

or

`REGRESSION CONCERN`

or

`NOT SUFFICIENTLY VERIFIED`

## Final Recommendation

One of:

`APPROVE FOR HUMAN REVIEW`

`CHANGES REQUIRED`

`BLOCKED`

---

# Recommendation Rules

### APPROVE FOR HUMAN REVIEW

Use when:

- no blocking findings remain;
- applicable evidence is sufficient;
- the implementation satisfies the approved task.

### CHANGES REQUIRED

Use when:

- one or more blocking findings remain.

### BLOCKED

Use when:

- required information or evidence cannot be obtained;
- the review cannot be completed reliably.

Do not use `BLOCKED` merely because an optional check was not performed.

---

# Review Efficiency Rules

Prefer:

`TASK → DIFF → APPLICABLE DIMENSIONS → EXISTING EVIDENCE → TARGETED INSPECTION → FINDINGS → RECOMMENDATION → STOP`

Avoid:

`TASK → READ EVERYTHING → RUN EVERYTHING → OPEN ALL FIGMA → RECHECK ALL ASSETS → REPEAT QA → REVIEW → REVIEW AGAIN`

The reviewer should add independent judgment, not duplicate previous workflow stages.

---

# Final Rule

Review the approved change against evidence.

Use the smallest amount of investigation necessary to establish whether the change is acceptable.

Do not review against personal preference.

Do not invent requirements.

Do not duplicate completed verification without a material reason.

Do not turn uncertainty into a defect.

Do not continue after the review objective is satisfied.

`DIFF → EVIDENCE → TARGETED REVIEW → FINDINGS → RECOMMENDATION → STOP`