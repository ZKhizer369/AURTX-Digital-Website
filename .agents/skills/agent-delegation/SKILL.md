---
name: agent-delegation
description: Decide when and how to delegate bounded frontend work to Codex subagents while preserving scope, role boundaries, and parent accountability.
---

# Agent Delegation

## Purpose

Provide a controlled procedure for the parent/root agent to decide whether a task should be delegated to a Codex subagent and, when appropriate, define the delegated work precisely.

This Skill governs delegation.

It does not replace the responsibilities of the delegated role or the Skills used by that role.

## Core principle

Use delegation to create useful separation of responsibility.

Do not create agents merely because a role exists.

Prefer direct work by the parent for simple, clear, low-risk tasks.

## When to delegate

Delegate when the subtask is:

- clearly bounded;
- independently useful;
- sufficiently specified;
- materially improved by specialization or parallel work.

Typical delegation cases include:

- repository/design research;
- independent verification;
- focused implementation;
- focused review;
- other bounded work where separation materially improves quality or speed.

## When not to delegate

Do not delegate when:

- the task is trivial;
- the work cannot be bounded clearly;
- delegation would require repeated back-and-forth for basic context;
- the parent must make the same decision before the subagent can proceed;
- delegation adds more complexity than value;
- the task contains a consequential decision that requires human judgment.

## Delegation procedure

### 1. Define the subtask

State:

- exact objective;
- boundaries;
- relevant files or areas;
- required inputs;
- expected output;
- allowed modifications, if any.

The delegated task must be narrower than or equal to the approved parent task.

### 2. Select the role

Choose the smallest appropriate role from `docs/universal-system/agent-roles.md`.

Possible roles include:

- Research
- Implementation
- Verification
- Review
- Visual QA
- Delivery

The role determines responsibility.

The Skill determines procedure.

### 3. Select applicable Skills

Explicitly identify which Skill or Skills the delegated agent should use.

Examples:

- Research → `frontend-task-research`
- Implementation → `frontend-implementation`
- Verification → `frontend-verification`
- Review → `frontend-code-review`
- Visual QA → `frontend-visual-qa`
- Delivery → `git-delivery`

Do not assign unrelated Skills.

### 4. Provide authoritative context

Give the delegated agent only the context required to complete the subtask reliably.

Include relevant:

- Task Specification;
- file paths;
- requirements;
- design references;
- constraints;
- prior handoff;
- verification expectations.

Do not replace authoritative project documents with an informal summary when the agent should inspect the source directly.

### 5. Define authority boundaries

State explicitly:

- whether the agent may modify files;
- which areas it may modify;
- whether it may install dependencies;
- whether it may perform Git/GitHub actions;
- whether human approval is required before any consequential action.

Do not grant broader authority than the task requires.

### 6. Define the handoff

Tell the delegated agent exactly what to return.

Use the Universal Handoff Protocol appropriate to the role.

The output must communicate:

- completed work;
- verified findings;
- evidence;
- assumptions;
- open questions;
- failures;
- blockers;
- next action.

### 7. Spawn the subagent

Use the active Codex delegation mechanism when available.

Do not assume custom agent selection is available.

When a custom role selector is unavailable, identify the intended role and required Skill explicitly in the delegated message.

### 8. Monitor and integrate

The parent remains accountable.

After the delegated work returns:

- inspect its relevance;
- verify important claims;
- compare against authoritative project sources;
- integrate the result;
- resolve conflicts;
- perform required final verification.

A delegated result is not automatically trusted.

## Parallel delegation

Parallelize only when subtasks can proceed independently.

Good example:

```text
Parent
├── Research design requirements
├── Inspect existing implementation
└── Independent test analysis