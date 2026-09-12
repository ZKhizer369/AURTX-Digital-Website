# Universal Frontend Workflow

## Purpose

This workflow is a reusable control loop for frontend software-engineering tasks performed with Codex and its available tools, Skills, and agent collaboration mechanisms.

It defines the workflow contract, not a requirement that every task use every stage.

## Core lifecycle

`TASK → RESEARCH → TASK SPECIFICATION → IMPLEMENTATION → VERIFICATION → VISUAL QA → CODE REVIEW → HUMAN REVIEW → APPROVED → COMMIT/PR → CI → MERGED → DEPLOYED`

Stages may be skipped when genuinely unnecessary. Safety, authorization, and meaningful verification requirements must still be preserved.

## 1. TASK

Define the requested outcome before implementation.

The parent/root agent:

- understands the requested result;
- determines scope and known constraints;
- identifies whether research is warranted;
- determines which workflow stages are necessary;
- stops when the request is materially ambiguous.

Output: a clear objective or a Task Specification to be produced through research.

## 2. RESEARCH

Use research when the task depends on understanding existing implementation, design, architecture, assets, requirements, or other project context.

Research inspects only relevant:

- instructions
- documentation
- implementation
- architecture
- components
- styles
- assets
- Figma/design information
- integration points
- tests
- constraints
- dependencies
- risks

Research separates verified facts from assumptions and open questions.

Research does not modify source code, install dependencies, commit, or push.

Output: structured findings suitable for the Task Specification.

## 3. TASK SPECIFICATION

Convert verified findings into an implementation-ready contract.

When applicable, record:

- objective
- scope
- verified context
- requirements
- design/Figma references
- existing implementation
- assets
- responsive/accessibility requirements
- implementation approach
- acceptance criteria
- verification plan
- constraints
- risks
- assumptions
- open questions

Implementation must not begin when a material requirement is unresolved.

A Task Specification cannot override project rules or human decisions. A requirement change requires authorization.

## 4. IMPLEMENTATION

Make the smallest appropriate change that satisfies the Task Specification and project rules.

The implementation agent:

- reads applicable instructions and relevant project knowledge;
- uses designated Skills;
- inspects existing code before creating new abstractions;
- reuses established patterns where appropriate;
- preserves accessibility and maintainability;
- avoids unrelated refactors;
- produces a reviewable diff.

A parent/root agent may delegate bounded implementation work when supported and useful.

## 5. VERIFICATION

Produce evidence that the implementation works.

Use checks appropriate to the task, such as:

- type checking
- linting
- tests
- build
- deterministic scripts
- browser/runtime checks
- accessibility checks
- changed-file inspection
- regression checks
- architecture checks

Do not claim a check passed unless it actually ran and supports that claim.

When verification fails, return to the responsible stage, correct the issue, and re-run the relevant checks.

## 6. VISUAL QA

Use when appearance, layout, interaction, animation, responsiveness, or design fidelity matters.

Process:

`Approved design → implementation → rendered result → comparison → deviations → correction → re-check`

When Figma is the source of truth, compare against the approved design rather than inventing visual intent.

If required visual information or an important asset is unavailable and materially affects correctness, stop and escalate rather than silently substituting.

## 7. CODE REVIEW

Review the proposed result for:

- correctness
- requirement compliance
- scope
- accessibility
- maintainability
- architecture
- regressions
- unnecessary complexity
- verification evidence

Review is an engineering gate, not permission to bypass human approval.

## 8. HUMAN REVIEW

Obtain decisions or acceptance that require human judgment.

Confirm, as applicable:

- requested outcome is satisfied;
- scope is acceptable;
- evidence is sufficient;
- unresolved risks/questions are understood;
- required approvals are present.

## 9. APPROVED

The task enters Approved only when applicable verification and human gates are complete.

"Done" in an agent response is not the same as workflow approval.

## 10. COMMIT / PR

Create a commit or pull request only when the project's authorization policy allows it.

A human may explicitly authorize a defined sequence of delivery actions in one approval. Authorization must clearly identify the permitted actions and conditions.

For example:

`commit → push → create PR → merge after required CI and review conditions pass`

Authorization for one action does not automatically authorize additional unmentioned consequential actions.

The Git record should represent the reviewed work and exclude unrelated modifications.

## 11. CI

Run or await configured CI checks.

CI is delivery evidence. A passing CI run does not replace human approval where human approval is required.

## 12. MERGED

Merge only when:

- the required human authorization covers the merge action;
- required reviews are satisfied;
- required CI/checks are satisfied according to project policy;
- no blocking findings remain;
- the target branch is confirmed.

Use the project's authorized GitHub/GitHub CLI process.

## 13. DEPLOYED

Deploy only through the project's approved deployment process and with required authorization.

## Failure and re-entry

The workflow is cyclic.

- Missing requirements → TASK / human clarification.
- Research uncertainty → RESEARCH / human clarification.
- Implementation uncertainty → STOP / ESCALATE.
- Verification failure → IMPLEMENTATION or RESEARCH, as appropriate.
- Visual mismatch → IMPLEMENTATION.
- Review defect → IMPLEMENTATION or VERIFICATION.
- Human rejection → return to the stage that must change.

Re-entry should preserve the reason for the transition and the new evidence.

## Task sizing

Do not force a heavyweight workflow onto trivial changes.

Examples:

- Copy-only change: TASK → IMPLEMENTATION → targeted VERIFICATION.
- Isolated bug fix: TASK → IMPLEMENTATION → VERIFICATION → applicable REVIEW.
- New Figma page: TASK → RESEARCH → TASK SPECIFICATION → IMPLEMENTATION → VERIFICATION → VISUAL QA → CODE REVIEW → HUMAN REVIEW.
- Major architectural work: fuller workflow with explicit human decisions.

## Completion rule

A task is complete only when its applicable stages are complete, evidence supports the result, required human decisions are resolved, and no required work depends on unsupported assumptions.