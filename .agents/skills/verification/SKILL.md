---
name: frontend-verification
description: Verify an implemented frontend task using applicable acceptance criteria and deterministic evidence without inventing successful results.
---

# Frontend Verification

## Purpose

Verify whether an implemented frontend task satisfies its approved requirements and whether available evidence supports the result.

The purpose of this Skill is to produce an independent, evidence-based verification result.

Verification is not an assumption that implementation is correct because an agent reports success.

## Inputs

Use:

- the human-approved task;
- the Task Specification when one exists;
- applicable instruction files;
- relevant project documentation;
- the implementation and resulting changes;
- applicable tests, scripts, and tooling;
- approved design/Figma information when visual verification is relevant.

Inspect only information relevant to the task.

## Procedure

### 1. Establish the verification target

Identify:

- objective;
- scope;
- acceptance criteria;
- expected behavior;
- relevant constraints;
- expected verification checks.

If the verification target is materially unclear:

`STOP → REPORT THE GAP → ESCALATE`

### 2. Inspect the implementation

Review the relevant:

- changed files;
- surrounding implementation;
- components;
- styles;
- configuration;
- tests;
- supporting assets.

Determine what was actually changed.

Do not rely solely on an implementation agent's report.

### 3. Select applicable checks

Choose verification methods appropriate to the task.

Potential checks include:

- type checking;
- linting;
- tests;
- build;
- deterministic scripts;
- runtime/browser checks;
- accessibility checks;
- responsive checks;
- regression checks;
- architecture checks;
- visual comparison when applicable.

Do not run unnecessary checks solely because they exist.

### 4. Execute deterministic checks

Run the applicable checks available in the project environment.

Record:

- command or mechanism used;
- relevant result;
- important output;
- failures or limitations.

Never claim a check was run when it was not.

### 5. Verify acceptance criteria

Evaluate every applicable acceptance criterion.

For each criterion, determine whether it is:

- PASS
- FAIL
- BLOCKED
- INCONCLUSIVE
- NOT VERIFIED

Support the assessment with evidence.

### 6. Verify runtime behavior

When behavior is part of the task, inspect the running result using the appropriate available mechanism.

Verify only behavior relevant to the approved task.

Do not infer runtime correctness from source code alone when runtime verification is necessary.

### 7. Verify accessibility when applicable

Check relevant:

- semantic structure;
- keyboard behavior;
- focus behavior;
- labels and accessible names;
- contrast where verifiable;
- responsive usability;
- interaction states.

Use project-specific accessibility checks when available.

### 8. Verify visual fidelity when applicable

When visual correctness is part of the task:

- compare the rendered result with the approved design;
- verify layout;
- verify responsive behavior;
- verify typography;
- verify spacing;
- verify components and states;
- verify required assets.

Do not invent missing visual intent.

Material visual uncertainty is a verification limitation and may require escalation.

### 9. Check for regressions

Inspect whether the change appears to introduce problems outside the intended scope.

Pay particular attention to:

- shared components;
- responsive behavior;
- existing routes or pages;
- reused styles;
- dependent functionality.

Do not perform broad unrelated testing merely for completeness.

### 10. Inspect scope

Confirm that the resulting changes remain within the approved task.

Identify:

- unrelated modifications;
- unexpected files;
- unnecessary dependency changes;
- unexpected configuration changes.

Report scope violations.

### 11. Determine final verification status

Use one of:

`PASS`

`FAIL`

`BLOCKED`

`INCONCLUSIVE`

`NOT VERIFIED`

### PASS

Use only when the applicable acceptance criteria are supported by sufficient evidence and no blocking issue remains.

### FAIL

Use when one or more applicable acceptance criteria are demonstrably not satisfied.

### BLOCKED

Use when verification cannot be completed because a required dependency, access method, environment capability, asset, design reference, or other necessary input is unavailable.

### INCONCLUSIVE

Use when available evidence is insufficient to confidently determine correctness.

### NOT VERIFIED

Use when a relevant verification method was not performed and the available evidence is insufficient to claim completion.

## Evidence discipline

Never claim:

- a test passed if it was not run;
- a build succeeded if it was not run;
- CI passed if CI was not observed;
- visual fidelity was confirmed without visual evidence;
- accessibility was verified without performing applicable checks;
- runtime behavior was confirmed without observing it when runtime observation is required.

Distinguish clearly between:

- observed;
- measured;
- inferred;
- unverified.

## Failure handling

When verification finds a defect:

1. identify the failed criterion;
2. provide the evidence;
3. describe the defect precisely;
4. identify the likely affected area when supported by evidence;
5. return the task to implementation or research as appropriate.

Do not silently fix implementation defects unless explicit authority to modify the implementation has been provided.

## Independent verification

Verification should be independent of the implementation agent's assertion.

Use the implementation report as context, not proof.

When practical, reproduce the relevant behavior or run the relevant deterministic checks directly.

## Output format

Return a structured Verification Handoff:

### Scope Checked

### Acceptance Criteria

For each criterion:

`PASS / FAIL / BLOCKED / INCONCLUSIVE / NOT VERIFIED`

with supporting evidence.

### Checks Executed

List the actual checks performed.

### Results

Summarize the results accurately.

### Evidence

Provide the relevant observed outputs, test results, runtime observations, or other supporting evidence.

### Defects

List concrete defects found.

### Regression Risks

List known risks or areas that could not be fully verified.

### Final Assessment

State one:

`PASS / FAIL / BLOCKED / INCONCLUSIVE / NOT VERIFIED`

Explain why.

## Boundaries

This Skill does not:

- change requirements;
- expand scope;
- invent acceptance criteria;
- invent successful results;
- conceal failures;
- authorize consequential actions;
- commit;
- push;
- create pull requests;
- deploy.

If a defect is found, report it unless explicit implementation authority has also been assigned.

## Final rule

Verification answers:

> "What evidence do we have that the approved task is correct?"

It does not answer:

> "Does the implementation agent believe it is correct?"

Evidence must determine the result.