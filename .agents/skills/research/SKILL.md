---
name: frontend-task-research
description: Research only the information necessary to make the approved frontend task implementation-ready, using bounded inspection and producing concise evidence for downstream planning.
---

# Frontend Task Research

## Purpose

Research an approved frontend task only to the extent necessary to establish reliable implementation requirements and context.

The objective is:

`TASK → MINIMUM RELEVANT RESEARCH → VERIFIED FACTS → IMPLEMENTATION-READY HANDOFF → STOP`

This Skill is for **evidence gathering**, not implementation.

---

# Core Principles

1. Start narrow.
2. Research only the current task.
3. Use the minimum effective context.
4. Prefer authoritative sources over inference.
5. Reuse existing project knowledge instead of rediscovering it.
6. Inspect only files and design areas relevant to the task.
7. Treat Figma as targeted evidence, not an exploration environment.
8. Do not investigate information that cannot affect implementation.
9. Stop as soon as enough verified information exists for downstream planning.
10. Never invent missing requirements.
11. Bound failed operations and retries.
12. Produce a compact handoff.

---

# Inputs

Use:

1. approved task/request;
2. applicable instruction files;
3. existing task-specific information;
4. relevant project files;
5. approved Figma/design references;
6. existing project assets;
7. relevant verification information.

Do not automatically inspect:

- the entire repository;
- every documentation file;
- every Skill;
- every component;
- every asset;
- the entire Figma file;
- the complete test suite;
- unrelated configuration.

---

# 1. Read the Task

Identify only:

- requested outcome;
- explicit requirements;
- explicit constraints;
- stated scope;
- known authority boundaries.

Do not expand the task.

Do not fill missing requirements with assumptions.

If the task itself is materially unclear:

`STOP → REPORT GAP → ESCALATE`

Do not begin broad research to compensate for an unclear product requirement.

---

# 2. Establish the Research Questions

Before inspecting the project, determine the specific questions that must be answered.

Typical questions:

- Where is the affected feature implemented?
- Does an existing component already support it?
- What project pattern should be reused?
- What exact Figma design is authoritative?
- Which asset is required?
- What integration point is affected?
- What verification is necessary?
- Is there a constraint that changes implementation?

Research only these questions.

Do not create a general project audit.

---

# 3. Read the Minimum Applicable Instructions

Read:

- the universal/project rules applicable to the task;
- the task-specific instructions;
- only Skills required to answer the current research questions.

Do not load every available Skill.

Do not recursively inspect unrelated Skills unless a required Skill explicitly establishes a necessary dependency.

---

# 4. Inspect Existing Implementation

Start from the most likely relevant source identified by:

- the task;
- task-specific instructions;
- repository structure;
- existing documentation;
- upstream Research Handoff when continuing prior work.

Inspect the smallest relevant area.

Determine only what is necessary to answer the research questions, such as:

- affected component;
- route/entry point;
- relevant styles;
- reusable implementation;
- relevant integration;
- existing asset;
- established pattern.

---

# 5. Context Expansion Rule

Expand inspection only when the current evidence creates a specific unanswered question.

Use:

`INITIAL TARGET → EVIDENCE → SPECIFIC GAP → NARROW EXPANSION`

Every expansion must have a reason.

Examples:

### Initial component depends on a shared utility

Inspect that utility.

### Initial component uses a shared design token

Inspect the relevant token.

### Initial route uses a layout component

Inspect that layout.

Do not expand simply because more repository information is available.

---

# 6. Figma Research

Use Figma only when the task depends on design evidence.

Before Figma MCP operations:

`LOAD figma-use`

Then:

1. identify the exact Figma file;
2. identify the exact page/frame/node when available;
3. inspect the minimum required context;
4. extract only implementation-relevant facts;
5. stop.

Do not:

- browse the entire Figma file;
- inspect unrelated pages;
- enumerate all components;
- enumerate all assets;
- inspect every layer;
- export assets merely for research;
- repeatedly search for an unspecified design element.

If an exact Figma target is unavailable:

`STOP → REPORT MISSING FIGMA REFERENCE`

Do not compensate with broad exploration unless the approved task explicitly requires bounded discovery.

---

# 7. Asset Research

Determine only assets required by the current task.

First check whether the correct asset already exists in the project.

If it does:

`AVAILABLE → RECORD PATH → STOP`

If the asset must be identified in Figma:

- use the exact relevant design reference;
- identify the authoritative asset;
- record its source;
- do not automatically export it.

Asset export belongs to `figma-asset-export`.

Do not turn research into an asset-export operation.

---

# 8. Architecture and Reuse

Inspect architecture only to the extent necessary to determine how the task fits the existing project.

Establish, when relevant:

- existing component to extend;
- existing utility to reuse;
- existing route;
- existing state/data pattern;
- existing styling/token pattern;
- existing integration boundary.

Do not redesign architecture during research.

Do not propose a new architecture when an existing pattern already satisfies the task.

---

# 9. Dependencies and Configuration

Inspect dependency/configuration information only when the task indicates it may affect implementation.

Examples:

- a required package is already installed;
- an existing package provides required functionality;
- build configuration affects the target feature;
- a framework constraint affects implementation.

Do not audit all dependencies.

Do not install packages.

Do not modify configuration.

---

# 10. Verification Research

Determine only which verification evidence will be necessary to establish the task's acceptance criteria.

Prefer existing project verification patterns.

Identify:

- relevant test;
- relevant command;
- relevant runtime check;
- relevant visual check;
- relevant accessibility check.

Do not run the complete verification suite during Research unless explicitly required.

Research determines what should later be verified.

Verification performs the independent verification.

---

# 11. Separate Evidence From Uncertainty

Classify material findings as:

### VERIFIED

Directly supported by inspected evidence.

### INFERENCE

A reasonable conclusion derived from verified evidence.

Use sparingly and label clearly.

### OPEN QUESTION

The available evidence does not establish the answer.

### BLOCKED

Required information or access is unavailable.

Never present:

- inference as fact;
- design interpretation as a requirement;
- implementation preference as an approved decision.

---

# 12. Research Readiness Test

Research is sufficient when the downstream planner/implementer can reliably determine:

- what must be changed;
- where it must be changed;
- which existing implementation should be reused;
- what approved design evidence applies;
- which assets are required;
- what constraints matter;
- what must be verified;
- what unresolved questions remain.

If these are sufficiently established:

`STOP RESEARCH`

Do not continue looking for additional information merely to increase confidence.

---

# 13. Research Failure and Retry Control

If a research operation fails:

1. capture the actual failure;
2. determine whether the failure is actionable;
3. make one meaningful retry when justified;
4. if it fails again, stop.

Use:

`ATTEMPT → MEANINGFUL RETRY → STOP`

Do not repeatedly:

- reopen the same Figma target;
- search the same repository area;
- retry the same tool call;
- attempt alternate asset exports;
- inspect unrelated files.

If the failure blocks implementation readiness:

`BLOCKED → REPORT EXACT GAP → ESCALATE`

---

# 14. No Duplicate Research

When a Research Handoff already contains verified information:

- consume it;
- do not rediscover the same facts;
- expand only for a specific missing or contradictory fact.

If new evidence conflicts with the previous handoff:

`STOP → IDENTIFY CONFLICT → RESOLVE USING AUTHORITY HIERARCHY`

Do not restart the entire research process.

---

# Research Handoff

Return a compact evidence package.

```text
Task:
[approved task]

Sources Inspected:
[only relevant sources]

Verified Findings:
[implementation-relevant facts]

Existing Implementation:
[relevant files/components/patterns]

Design / Figma:
[only relevant verified design facts]

Assets:
[required assets + existing paths/source]

Constraints:
[relevant constraints]

Verification:
[checks that should later establish acceptance]

Risks:
[material risks only]

Assumptions:
[explicitly labeled]

Open Questions:
[unresolved items]

Readiness:
[READY / NOT READY / BLOCKED]