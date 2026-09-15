---
name: task-specification
description: Convert an approved frontend task and verified findings into the smallest implementation-ready contract required for reliable downstream execution.
---

# Task Specification

## Purpose

Create a bounded implementation contract from:

- the approved human task;
- verified research;
- applicable project rules;
- approved design information.

The Task Specification tells downstream agents:

- what must be done;
- what is in scope;
- what evidence establishes the requirements;
- what must be verified;
- what unresolved issues block implementation.

It is **not** a project report.

It is **not** a duplicate Research Handoff.

It is **not** an implementation transcript.

---

# Core Principles

1. Preserve the approved objective.
2. Convert verified information into actionable requirements.
3. Include only information needed for downstream execution.
4. Reference authoritative sources instead of copying their contents.
5. Keep scope explicit.
6. Make acceptance criteria observable and testable.
7. Keep assumptions separate from requirements.
8. Material unresolved issues block readiness.
9. Do not invent missing requirements.
10. Do not prescribe speculative architecture.
11. Do not create unnecessary documentation.
12. Stop when the implementation contract is complete.

---

# When to Create a Task Specification

Create one when the task involves meaningful coordination, such as:

- multiple acceptance criteria;
- significant design/Figma requirements;
- architectural context;
- multiple affected areas;
- asset dependencies;
- verification requirements;
- delegation;
- multiple workflow stages.

A formal Task Specification is not required for trivial work that is already unambiguous and safely executable.

---

# Inputs

Use:

1. approved human task;
2. applicable instruction files;
3. verified Research Handoff;
4. authoritative project references;
5. approved design/Figma references;
6. existing implementation evidence;
7. relevant deterministic evidence.

Do not automatically copy or reread all source material.

If the Research Handoff already contains verified facts, select only those necessary for the implementation contract.

---

# 1. Define the Objective

State exactly what must be accomplished.

The objective must:

- match the approved request;
- describe the intended outcome;
- avoid unnecessary implementation detail.

Do not silently:

- improve the objective;
- broaden the outcome;
- reinterpret product requirements;
- add convenience features.

---

# 2. Define Scope

## Included

List the work required to satisfy the objective.

## Excluded

List boundaries that prevent common forms of scope expansion.

Include exclusions only when they materially reduce ambiguity.

Do not create artificial exclusions.

---

# 3. Select Required Context

Include only facts that downstream agents need to execute the task.

Possible categories:

- relevant existing implementation;
- relevant architecture;
- exact design/Figma reference;
- required assets;
- integration point;
- important technical constraint;
- project convention;
- verification dependency.

Prefer:

`SOURCE → RELEVANT FACT`

over copying large source sections.

Example:

```text
Figma:
Homepage → Hero frame → node 123:456

Existing implementation:
src/components/Hero.tsx

Relevant convention:
Reuse existing Button component.