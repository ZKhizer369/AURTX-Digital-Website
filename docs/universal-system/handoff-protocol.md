# Universal Agent Handoff Protocol

## Purpose

The Handoff Protocol defines how the parent agent and specialized agents exchange work products.

Its purpose is to prevent information loss, unsupported assumptions, duplicated work, and unclear ownership.

## Core rule

A handoff must communicate:

- what was asked;
- what was discovered or changed;
- what is verified;
- what remains uncertain;
- what the receiving agent must do next.

A handoff is not merely a progress message.

## Ownership

The parent/root agent owns the overall task.

A specialized agent owns only the bounded work explicitly delegated to it.

A specialized agent must not redefine the overall objective.

## Research handoff

A Research Agent should return:

### Task

The exact research question or bounded objective.

### Sources inspected

Relevant instructions, documentation, implementation, design sources, assets, tests, or other evidence actually inspected.

### Verified findings

Facts supported by the inspected evidence.

### Relevant existing implementation

Components, patterns, architecture, utilities, assets, and integration points relevant to implementation.

### Requirements identified

Requirements supported by the task and authoritative sources.

### Acceptance criteria

Observable conditions that the implementation should satisfy.

### Verification recommendations

Checks that should provide evidence of correctness.

### Risks

Known risks or likely failure points.

### Assumptions

Items that remain assumptions rather than verified facts.

### Open questions

Items requiring clarification or further investigation.

### Task Specification

When the workflow requires one, produce or provide the information needed to create the Task Specification.

## Implementation handoff

An Implementation Agent should return:

### Objective

The task implemented.

### Files changed

Every modified, created, or deleted file relevant to the task.

### Summary of changes

What was changed and why.

### Requirements addressed

How the implementation maps to the Task Specification.

### Verification performed

Checks actually run and their results.

### Remaining issues

Known failures, limitations, blocked checks, or unresolved concerns.

### Scope confirmation

State whether changes remained within the approved task.

## Verification handoff

A Verification Agent should return:

### Scope checked

What was verified.

### Checks executed

The exact meaningful checks performed.

### Results

Clearly distinguish:

- PASS
- FAIL
- BLOCKED
- NOT RUN
- INCONCLUSIVE

### Evidence

Provide the relevant command results, test output, observed behavior, or other evidence available to support the conclusion.

### Defects

List concrete defects found, with enough information for the responsible agent to address them.

### Regression risks

Identify likely regressions or areas that could not be fully verified.

### Final assessment

State whether the available evidence supports the requested acceptance criteria.

## Review handoff

A Review Agent should return:

### Scope reviewed

The files, changes, and requirements examined.

### Findings

List concrete correctness, architecture, accessibility, maintainability, scope, or regression concerns.

### Severity

Identify which findings block approval and which are non-blocking.

### Verification evidence

Reference available checks relevant to the findings.

### Recommendation

State whether the work is ready for human review or requires further changes.

## Handoff integrity

Agents must not claim:

- work they did not perform;
- files they did not inspect;
- tests they did not run;
- evidence they did not observe;
- approvals they did not receive.

## Uncertainty rule

When a handoff contains uncertainty, label it explicitly.

Use:

- Verified
- Assumption
- Open Question
- Blocked
- Inconclusive

Do not hide uncertainty inside confident language.

## Receiving-agent rule

The receiving agent should first use the handoff and authoritative project sources before repeating work.

Do not redo delegated research or implementation merely because the previous agent completed it.

Repeat work only when:

- the result is incomplete;
- evidence is insufficient;
- the receiving task requires independent verification;
- a conflict or inconsistency must be resolved.

## Parent integration rule

The parent agent remains responsible for:

- checking handoff relevance;
- resolving conflicts;
- integrating the work;
- ensuring requirements remain aligned;
- performing or coordinating final verification;
- reporting the combined result accurately.

A handoff does not automatically make the contents true.