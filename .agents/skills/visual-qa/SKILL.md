---
name: frontend-visual-qa
description: Validate frontend visual and interaction fidelity against approved design guidance and verified requirements without inventing visual intent.
---

# Frontend Visual QA

## Purpose

Validate the visual and interaction quality of a frontend implementation when appearance, layout, responsiveness, animation, or design fidelity is part of the approved task.

This Skill is a verification procedure.

It does not define the design and does not replace approved design sources.

## When to use

Use this Skill when visual correctness materially affects the task, including:

- Figma-driven implementation;
- new or modified pages;
- responsive layout changes;
- component visual changes;
- interaction-state changes;
- animation or transition changes;
- visual regression investigation.

Do not use it for changes where visual output is irrelevant.

## Inputs

Use:

- the approved task;
- the Task Specification when one exists;
- applicable instruction files;
- relevant project documentation;
- the implemented result;
- approved Figma/design references when applicable;
- relevant assets;
- available browser/runtime evidence.

Use authoritative design sources rather than personal preference.

## Procedure

### 1. Establish the visual target

Identify:

- approved design source;
- relevant page, frame, component, or state;
- viewport expectations;
- responsive behavior;
- interaction states;
- typography;
- spacing;
- assets;
- visual constraints.

If the approved visual target is materially unclear:

`STOP → REPORT THE GAP → ESCALATE`

Do not invent missing design intent.

### 2. Inspect the implementation

Inspect only the implementation relevant to the visual target.

Review:

- page structure;
- components;
- styles;
- responsive rules;
- assets;
- interaction states;
- animation;
- typography;
- layout behavior.

Determine what is actually implemented before judging fidelity.

### 3. Render the result

Use the appropriate available browser, preview, or runtime mechanism to inspect the actual rendered result.

When practical, evaluate the relevant target viewports.

Do not rely solely on source-code inspection for visual claims.

### 4. Compare against the approved design

Compare relevant visual characteristics, including:

- overall composition;
- layout;
- spacing;
- alignment;
- sizing;
- typography;
- colors and visual tokens;
- borders and radii;
- shadows and effects;
- imagery;
- icons;
- component states;
- responsive behavior;
- interaction behavior;
- animation or transitions when applicable.

Compare against verified requirements rather than personal preference.

### 5. Check responsive behavior

When responsive behavior is part of the task, inspect the relevant supported viewport sizes or layout conditions.

Verify:

- content remains usable;
- layout follows the approved responsive intent;
- components do not overflow unexpectedly;
- typography remains appropriate;
- spacing remains intentional;
- important interactions remain accessible.

Do not invent unsupported breakpoints or behavior.

### 6. Check interaction states

When applicable, inspect:

- hover;
- focus;
- active;
- disabled;
- expanded/collapsed;
- selected;
- loading;
- error;
- other states specified by the task or approved design.

Only verify states that are relevant to the implementation.

### 7. Check assets

Verify that required visual assets:

- are the correct assets;
- are used in the correct locations;
- retain appropriate quality;
- use the intended format where relevant;
- preserve the approved visual result.

If a required asset is unavailable, incorrectly identified, or materially ambiguous:

`STOP → REPORT THE EXACT GAP → ESCALATE`

Do not silently substitute a different asset when identity matters.

### 8. Record deviations

For every material deviation, record:

- location;
- expected result;
- actual result;
- evidence;
- severity;
- required correction, when applicable.

Distinguish:

- confirmed mismatch;
- acceptable implementation difference;
- unresolved visual question.

Do not report personal stylistic preference as a defect.

### 9. Determine visual status

Use one of:

`PASS`

`FAIL`

`BLOCKED`

`INCONCLUSIVE`

### PASS

Use when the applicable visual and interaction requirements are supported by sufficient evidence and no blocking deviation remains.

### FAIL

Use when a confirmed material visual or interaction requirement is not satisfied.

### BLOCKED

Use when necessary design information, asset access, runtime access, or another required input is unavailable.

### INCONCLUSIVE

Use when available evidence is insufficient to determine visual correctness confidently.

## Evidence discipline

Never claim visual fidelity was confirmed without inspecting the relevant rendered result when rendered inspection is required.

Never claim responsive behavior was confirmed without checking the relevant behavior.

Never claim an asset is correct without sufficient evidence of its identity and intended use.

Never treat personal preference as design evidence.

## Failure handling

When a material deviation is found:

1. identify the specific requirement or design reference;
2. document the observed mismatch;
3. provide evidence;
4. identify the affected area;
5. return the task to implementation when correction is required.

Do not silently change the approved design.

## Independence

Visual QA should evaluate the rendered implementation rather than relying on the implementation agent's statement that the result matches the design.

The implementation report is context, not proof.

## Output format

Return a Visual QA Handoff:

### Visual Target

### Viewports / States Checked

### Areas Checked

### Findings

For each finding:

- Severity
- Location
- Expected
- Actual
- Evidence
- Required action, when applicable

### Asset Assessment

### Responsive Assessment

### Interaction Assessment

### Final Assessment

One of:

`PASS`

`FAIL`

`BLOCKED`

`INCONCLUSIVE`

## Boundaries

This Skill does not:

- define product requirements;
- invent design intent;
- change approved requirements;
- silently substitute important assets;
- redesign the interface based on personal preference;
- authorize scope expansion;
- commit;
- push;
- create pull requests;
- merge;
- deploy.

## Final rule

Visual QA answers:

> "Does the rendered implementation satisfy the approved visual and interaction requirements?"

It does not answer:

> "Would I personally design it differently?"

Use evidence, not preference.