---

name: agent-delegation
description: Decide when and how to delegate bounded frontend work to Codex subagents while minimizing duplicated context, preserving scope, and maintaining parent accountability.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Agent Delegation

## Purpose

Provide a controlled procedure for deciding whether work should be delegated to a Codex subagent and, when appropriate, defining a bounded delegation contract.

This Skill governs delegation only.

It does not replace:

* the delegated agent's role;
* the delegated agent's Skills;
* the Task Specification;
* the Universal System rules.

---

## Core Principles

1. Delegate only when separation provides meaningful value.
2. Delegated work must be bounded.
3. Provide the minimum effective context.
4. Prefer references to authoritative files over copying their contents.
5. Do not make the delegated agent rediscover information already established.
6. Do not make the parent repeat delegated work unnecessarily.
7. Delegation does not transfer overall accountability.
8. Every delegation must have a defined completion condition.
9. Failed delegation must stop rather than become an uncontrolled retry loop.

---

## When to Delegate

Delegate when the subtask is:

* clearly bounded;
* independently useful;
* sufficiently specified;
* materially improved by specialization;
* materially improved by genuine parallelism.

Typical cases:

* repository/design research;
* independent verification;
* focused implementation;
* focused review;
* another clearly bounded specialist task.

---

## When NOT to Delegate

Do not delegate when:

* the task is trivial;
* the work cannot be bounded;
* the subtask requires continuous parent interaction;
* the parent must make the same decision before the subagent can proceed;
* the delegated work would require substantial duplicated context;
* the parent would need to redo most of the delegated work;
* delegation adds more coordination cost than value;
* the task contains a consequential decision requiring human judgment.

Do not delegate simply because a specialized agent exists.

---

## Delegation Scope

Every delegation must define:

* one objective;
* explicit boundaries;
* relevant project/task references;
* expected output;
* allowed modifications;
* completion condition;
* STOP conditions.

The delegated task must be narrower than or equal to the approved parent task.

Do not delegate vague objectives such as:

* "analyze the project";
* "check everything";
* "improve the UI";
* "research whatever is necessary."

Use bounded objectives such as:

* "Inspect the homepage implementation and identify the existing components required by AC-01 through AC-03."
* "Verify AC-01 through AC-04 using the listed test commands."
* "Implement the hero section described in the Task Specification."

---

## Context Minimization

Provide only the minimum effective context.

Prefer:

* Task Specification path;
* exact instruction-file paths;
* exact Skill names;
* relevant source paths;
* exact Figma references;
* specific acceptance criteria.

Avoid copying:

* entire documents;
* unrelated project history;
* complete repository descriptions;
* unrelated Skills;
* unrelated design pages;
* previous research that is already recorded in authoritative files.

When authoritative information already exists in the repository, reference it rather than reproducing it in the delegation message.

The delegated agent should read the authoritative source directly when required.

---

## Delegation Context Contract

A delegation message should normally contain:

### Objective

Exactly what must be accomplished.

### Scope

What is included and excluded.

### Inputs

Exact task/document/file/design references.

### Required Skills

Only the Skills necessary for the delegated work.

### Authority

What the agent may and may not modify or execute.

### Output

Exactly what the agent must return.

### STOP Conditions

Conditions requiring the agent to stop and report.

Do not provide additional context unless it materially improves execution.

---

## Role Selection

Choose the smallest appropriate role from the available agent roles.

Possible roles include:

* Research
* Implementation
* Verification
* Review
* Visual QA
* Delivery

The role determines responsibility.

The Skill determines procedure.

Do not assign multiple roles to one delegated task unless explicitly required.

---

## Skill Selection

Explicitly identify only the Skills required by the delegated task.

Examples:

* Research → `frontend-task-research`
* Implementation → `frontend-implementation`
* Verification → `frontend-verification`
* Review → `frontend-code-review`
* Visual QA → `frontend-visual-qa`
* Delivery → `git-delivery`

Use only Skills actually available in the active environment.

Do not assign unrelated Skills.

Do not load all Skills merely because the agent has access to them.

---

## Authority Boundaries

Every delegated task must state, when relevant:

* whether files may be modified;
* exact writable areas;
* whether dependencies may be installed;
* whether external actions are allowed;
* whether Git actions are allowed;
* whether human approval is required.

Grant only the authority required by the subtask.

Delegation must never grant authority beyond the parent task.

---

## Handoff

Define the expected output before delegation.

Use the applicable Universal Handoff Protocol.

The result should communicate only information necessary for the next workflow stage:

* completed work;
* verified findings;
* evidence;
* assumptions;
* open questions;
* failures;
* blockers;
* next action.

Do not require verbose narrative when a concise structured result is sufficient.

---

## Completion Condition

Every delegated task must have a clear completion condition.

Examples:

* Task Specification created and verified.
* Required files implemented and targeted checks passed.
* Acceptance criteria independently evaluated.
* Code review findings returned.

Once the completion condition is satisfied:

**STOP.**

Do not continue exploring for additional improvements unless explicitly requested.

---

## Failure and Retry Control

Delegation failures must be bounded.

If a delegated operation fails:

1. Determine whether the failure is actionable.
2. Retry only when a meaningful change to the task conditions or method exists.
3. Do not repeatedly respawn the same task without new information.
4. Escalate when the same material failure persists.

Do not use repeated delegation as a substitute for solving a clear blocker.

Do not create multiple agents to perform the same work unless genuine independent verification is required.

---

## Parallel Delegation

Parallelize only when subtasks are genuinely independent.

Good:

```text
Parent
├── Inspect existing implementation
├── Research relevant design
└── Analyze existing tests
```

Bad:

```text
Parent
├── Research entire task
├── Research same task
└── Research same task again
```

Parallel work must not:

* modify the same working directory concurrently;
* duplicate the same reasoning;
* create conflicting changes;
* require unnecessary synchronization.

Each parallel implementation agent must use an isolated workspace/branch when required by repository workflow.

---

## Parent Accountability

The Parent/Root remains responsible for:

* task scope;
* integration;
* conflict resolution;
* required verification;
* approval gates;
* final workflow state.

A delegated result is not automatically authoritative.

However, the parent must **not automatically redo the delegated work**.

After delegation returns:

1. Inspect the handoff.
2. Validate material claims against authoritative evidence.
3. Recheck only claims where independent confirmation is necessary.
4. Integrate the result.
5. Continue to the next workflow stage.

Verification should be risk-based.

For example:

* Low-risk factual finding → verify the cited source.
* Material architecture finding → inspect the relevant implementation.
* Implementation result → inspect diff and required checks.
* Independent verification → reproduce the required evidence rather than repeating unrelated research.

---

## No Duplicate Work

A delegated agent's completed work should become part of the workflow state.

Do not discard its findings and restart from zero.

If the parent believes the delegated result is incomplete:

* identify the exact missing information;
* request only that bounded missing work;
* do not restart the entire delegation.

If the delegated result conflicts with authoritative information:

**STOP → IDENTIFY THE CONFLICT → RESOLVE THROUGH THE AUTHORITY HIERARCHY.**

---

## Subagent Count

Use the smallest number of agents necessary.

Do not spawn additional agents merely to:

* increase perceived sophistication;
* fill idle capacity;
* repeat a task;
* obtain redundant opinions;
* avoid making a straightforward parent decision.

More agents are not inherently better.

---

## Final Rule

Delegation exists to reduce complexity and improve separation of responsibility.

The desired pattern is:

TASK → BOUNDED DELEGATION → MINIMUM CONTEXT → SPECIALIZED WORK → EVIDENCE → HANDOFF → INTEGRATION

Never:

TASK → BROAD DELEGATION → DUPLICATED CONTEXT → REPEATED WORK → MULTIPLE RETRIES → TOKEN WASTE
