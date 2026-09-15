---
name: frontend-visual-qa
description: Independently validate the rendered frontend against approved visual requirements using the minimum sufficient visual and interaction evidence.
---

# Frontend Visual QA

## Purpose

Determine whether the rendered frontend satisfies the approved visual and interaction requirements of the current task.

Visual QA is a specialized verification procedure.

It does not:

- define design;
- redesign the product;
- perform general frontend QA;
- repeat asset research;
- repeat implementation research;
- replace engineering verification;
- replace Code Review.

The objective is:

`APPROVED VISUAL REQUIREMENTS → EXACT TARGET → RENDER → TARGETED COMPARISON → RESULT → HANDOFF → STOP`

---

# Core Principles

1. Verify approved visual intent, not personal preference.
2. Start from explicit visual acceptance criteria.
3. Inspect the rendered result when visual behavior must be verified.
4. Use the minimum sufficient visual evidence.
5. Compare only the affected target.
6. Reuse verified evidence from upstream work.
7. Do not reopen Figma without a concrete unresolved question.
8. Do not repeat asset research already completed by asset Skills.
9. Do not inspect unrelated pages or components.
10. Do not test every viewport or state by default.
11. Do not invent responsive or interaction behavior.
12. Record only material deviations.
13. Bound visual investigation and retries.
14. Stop when the visual verification target is sufficiently established.

---

# When to Use

Use this Skill when visual output materially affects the approved task, including:

- Figma-driven implementation;
- new or modified pages;
- visual component changes;
- responsive layout changes;
- interaction-state changes;
- animation or transition changes;
- visual regression investigation.

Do not invoke this Skill when the task has no meaningful visual output.

---

# Inputs

Use:

1. approved Task Specification;
2. visual acceptance criteria;
3. applicable project instructions;
4. implemented result;
5. relevant rendered output;
6. approved design reference when required;
7. existing asset evidence when relevant;
8. existing verification evidence when sufficient.

The Task Specification is the primary contract.

Do not automatically load:

- the complete Figma file;
- every page;
- every design frame;
- every component;
- every asset;
- every project document;
- every viewport;
- every interaction state.

---

# 1. Establish the Visual Target

Identify only what is required for the current task:

- page or component;
- exact design frame/reference;
- required viewport(s);
- required state(s);
- visual acceptance criteria;
- required assets;
- responsive requirements;
- interaction requirements.

The visual target should be concrete.

Example:

```text
Target:
Landing page hero

Reference:
Approved Figma hero frame

Viewport:
1440px desktop

Required states:
Default

Criteria:
- hero composition matches approved design
- CTA placement matches
- typography uses approved tokens
- required hero asset is present