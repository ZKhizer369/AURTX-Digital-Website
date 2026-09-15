---
name: frontend-verification
description: Independently verify the approved frontend task against its acceptance criteria using the minimum sufficient deterministic and visual evidence.
---

# Frontend Verification

## Purpose

Determine whether an implemented frontend task satisfies its approved acceptance criteria.

Verification is an independent evidence-gathering stage.

It does not:

- redesign the implementation;
- perform broad project QA;
- repeat Research;
- replace Code Review;
- replace human approval.

The objective is:

`TASK SPEC → ACCEPTANCE CRITERIA → TARGETED EVIDENCE → RESULT → HANDOFF → STOP`

---

# Core Principles

1. Verify the approved task, not the entire project.
2. Start from the acceptance criteria.
3. Use the minimum sufficient evidence.
4. Prefer deterministic checks.
5. Reuse existing evidence when it is trustworthy and applicable.
6. Reproduce material claims independently when necessary.
7. Do not run every available check.
8. Do not inspect unrelated project areas.
9. Do not invent requirements.
10. Do not report unsupported success.
11. Bound failed checks and retries.
12. Stop when every applicable acceptance criterion has sufficient evidence.

---

# Inputs

Use:

1. approved Task Specification;
2. applicable project instructions;
3. implementation result/diff;
4. Implementation Handoff;
5. relevant deterministic tools;
6. approved Figma/design references when visual verification is required;
7. existing Visual QA evidence when applicable.

Do not automatically load:

- every project document;
- the entire repository;
- every test;
- every configuration file;
- the entire Figma file;
- every asset.

---

# 1. Establish the Verification Contract

Identify:

- objective;
- approved scope;
- acceptance criteria;
- expected behavior;
- relevant constraints;
- required verification methods.

The acceptance criteria are the primary verification contract.

If the contract is materially unclear:

`STOP → REPORT GAP → ESCALATE`

Do not invent missing criteria.

---

# 2. Map Evidence to Acceptance Criteria

Before running checks, determine what evidence is necessary for each criterion.

Example:

```text
AC-01:
Hero content is present.
Evidence:
Runtime/rendered result.

AC-02:
CTA navigates to approved destination.
Evidence:
Targeted interaction check.

AC-03:
Hero matches approved responsive design.
Evidence:
Targeted visual comparison at required viewport(s).