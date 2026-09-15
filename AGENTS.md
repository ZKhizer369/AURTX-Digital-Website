# Universal Codex System

## 1. Purpose

This repository uses a controlled AI-assisted software engineering workflow.

This file defines the universal rules that apply to all Codex agents and tasks.

Detailed procedures belong in:

* `docs/universal-system/` — durable system knowledge
* `.agents/skills/` — specialized procedures
* `.codex/agents/` — agent-specific operating definitions
* `instructions/` — task-specific instructions and contracts

Do not duplicate detailed procedures here unless they are necessary as universal rules.

---

## 2. Authority Hierarchy

Follow instructions in this order:

1. Platform and system requirements.
2. Explicit human direction and authorization.
3. This `AGENTS.md`.
4. The approved Task Specification and task-specific instructions.
5. Applicable project documentation and established conventions.
6. Required Skills.
7. Agent-specific instructions.

Lower-level instructions may clarify higher-level instructions but must not contradict them.

If a material conflict cannot be resolved from this hierarchy:

**STOP and escalate.**

Never resolve a material conflict by guessing.

---

## 3. Core Concepts

### Agent

Defines **who** performs a bounded responsibility.

Every agent must have defined:

* purpose;
* authority;
* inputs;
* required Skills;
* boundaries;
* outputs;
* STOP conditions.

### Skill

Defines **how** a specialized procedure is performed.

Skills:

* do not define requirements;
* do not redefine task scope;
* do not grant additional authority;
* do not override the Task Specification.

Use only the minimum effective Skills required for the task.

### Task Specification

Defines **what** the current task requires.

It should contain the information necessary for execution, including applicable:

* objective;
* scope;
* requirements;
* design references;
* existing implementation;
* assets;
* acceptance criteria;
* verification requirements;
* risks;
* blockers;
* readiness.

### Handoff

Records what a workflow stage actually produced for the next stage.

A handoff must distinguish completed work, verified evidence, remaining work, assumptions, and blockers.

---

## 4. Universal Workflow

The default lifecycle is:

`TASK → RESEARCH → TASK SPECIFICATION → IMPLEMENTATION → VERIFICATION → VISUAL QA → CODE REVIEW → HUMAN REVIEW → APPROVAL → DELIVERY → CI → MERGE → DEPLOY`

The workflow is adaptive.

A stage may be skipped only when:

* it is genuinely unnecessary; and
* applicable workflow rules permit the omission.

The existence of an agent or Skill does not require its use for every task.

Never skip a required approval, verification, or safety gate for convenience.

---

## 5. Scope Discipline

Every task has an approved scope.

Agents must:

* work only within that scope;
* make the smallest appropriate change;
* preserve existing project conventions;
* avoid unrelated refactoring;
* avoid unnecessary dependencies;
* avoid architecture changes unless authorized.

Do not expand scope because another improvement appears useful or convenient.

Do not invent:

* requirements;
* design decisions;
* architecture;
* asset identity;
* technical behavior;
* acceptance criteria;
* approvals;
* permissions.

If a material assumption is required, surface it.

---

## 6. Context and Execution Efficiency

Agents must use the **minimum effective context** required to complete their assigned responsibility.

### Information scope

Begin with the narrowest reasonable information scope.

Read or inspect additional material only when:

* the task requires it;
* the current evidence demonstrates that it is necessary; or
* an applicable instruction explicitly requires it.

Do not broadly inspect unrelated:

* files;
* directories;
* Figma pages;
* frames;
* components;
* assets;
* documentation;
* historical work.

### Context reuse

Use upstream handoffs and Task Specifications as the primary source of already-established task context.

Do not repeat research already completed by an upstream stage unless:

* verification requires independent confirmation; or
* the information is missing, contradictory, or no longer trustworthy.

### Tool discipline

Prefer deterministic tools for deterministic operations.

Examples:

* file existence → filesystem/tool;
* tests → test runner;
* type checking → compiler;
* linting → linter;
* formatting → formatter;
* build verification → build tool;
* Git state → Git.

Do not spend LLM reasoning on work that a deterministic tool can establish directly.

### Failed operations

A failed operation must not become an uncontrolled investigation loop.

When an operation fails:

1. determine whether the failure is actionable;
2. perform only the minimum necessary diagnosis;
3. retry only when a meaningful change to the conditions or method exists;
4. stop when the applicable retry/escalation boundary is reached.

Never repeatedly perform the same failed operation without new evidence or a changed method.

### Work already completed

Do not redo completed work merely because another agent is now responsible for the task.

Use the upstream evidence and continue from the established state.

---

## 7. Research Boundary

Research exists to prepare execution, not to explore indefinitely.

Research must:

* answer the questions necessary for the task;
* inspect only relevant sources;
* distinguish facts from interpretation and assumptions;
* identify required files, assets, dependencies, and constraints;
* identify blockers;
* produce the required Task Specification and handoff.

Research must stop when sufficient information exists to prepare an implementation-ready task.

Do not continue exploring simply because additional information is available.

If the task is not ready, report the exact missing information or dependency.

---

## 8. Implementation Boundary

The Implementer executes the approved Task Specification.

The Implementer must:

* consume the prepared task package;
* load only required Skills;
* inspect relevant existing implementation;
* follow approved requirements and design;
* make the smallest coherent change;
* perform appropriate implementation checks;
* produce an implementation handoff.

If a material requirement, design decision, dependency, asset, or authorization is missing:

**STOP.**

Do not silently invent a solution.

---

## 9. Verification and Evidence

Implementation, verification, visual QA, code review, and human approval are separate states.

Never claim one occurred when only another occurred.

Evidence takes precedence over assertion.

Never claim that:

* a test passed unless it ran successfully;
* a build passed unless it ran successfully;
* a file exists unless verified;
* an asset was exported unless verified;
* visual matching was confirmed without appropriate visual evidence;
* independent verification occurred unless the independent stage actually occurred;
* review occurred unless the review actually occurred;
* Git or deployment actions occurred unless they actually occurred.

When runtime evidence is unavailable, distinguish source inspection from observed runtime behavior.

---

## 10. Figma and Design Authority

When Figma is an authoritative design source:

* inspect the relevant design before implementation;
* use the applicable Figma Skill;
* preserve established design intent;
* inspect only the relevant design scope;
* do not treat Figma as automatic code generation;
* do not invent material design decisions.

Required design assets must not be silently replaced with unrelated assets, placeholders, generated approximations, or unauthorized substitutes.

If a required asset cannot be obtained through the available workflow:

**STOP and report the blocker.**

The report should identify:

* asset;
* known source;
* required format;
* recommended filename;
* required repository destination;
* required human action.

Do not repeatedly attempt an unavailable operation without new evidence.

---

## 11. Asset Handling

Prefer verified existing project assets.

When an asset must be obtained:

1. identify the authoritative source;
2. determine whether the asset already exists;
3. obtain only what is required;
4. verify the resulting asset;
5. place it in the approved project location;
6. record relevant source/destination information in the handoff.

Asset acquisition must remain bounded.

An asset-export failure must not cause the Implementer to enter an uncontrolled Figma/MCP investigation.

---

## 12. Delegation

Delegation is optional.

Delegate only when work is:

* clearly bounded;
* independently understandable;
* materially useful to separate;
* compatible with the workflow.

A delegated agent receives only the context necessary for its assigned responsibility, including the relevant task package and required reads.

Delegation does not transfer authority over the overall workflow.

Do not use delegation to bypass:

* scope;
* approval;
* verification;
* review;
* safety requirements.

---

## 13. Handoffs

A completed stage that produces downstream work must provide an appropriate handoff.

A handoff should contain, as applicable:

* task;
* work performed;
* relevant inputs;
* Skills used;
* files/artifacts produced or changed;
* verified evidence;
* assumptions;
* limitations;
* unresolved issues;
* readiness for the next stage.

The next stage should consume the handoff rather than reconstructing the previous stage's work.

A handoff does not prove that the next agent consumed it. Actual consumption must be evidenced by that agent's work.

---

## 14. STOP / BLOCKED / ESCALATE

### STOP

Stop the affected work when:

* instructions materially conflict;
* required information is missing;
* a material design decision is unknown;
* a required asset cannot be obtained;
* necessary access is unavailable;
* the task exceeds authority;
* scope expansion would be required;
* a material technical assumption cannot be established safely;
* a required operation has reached its retry boundary.

### BLOCKED

A blocked task cannot safely proceed because a material dependency or decision is unavailable.

A blocked report must identify:

* blocker;
* evidence;
* impact;
* required resolution.

### ESCALATE

Escalate when resolution requires authority outside the current agent.

Examples:

* requirement changes;
* scope changes;
* major architecture decisions;
* security-sensitive decisions;
* destructive actions;
* consequential external actions;
* unresolved material contradictions.

Never continue by guessing.

---

## 15. Change Boundaries

The universal workflow infrastructure is protected from ordinary application work.

Do not modify as a side effect of an application task:

* `AGENTS.md`
* `docs/universal-system/`
* `.agents/skills/`
* `.codex/agents/`
* unrelated task instruction packages

A task specifically authorized to modify workflow infrastructure may modify it.

Never weaken workflow controls merely to bypass a blocker.

---

## 16. Human Authority

Human authority remains the final decision point for consequential changes.

Required approval applies where applicable to:

* material requirement changes;
* material scope changes;
* major architecture changes;
* security-sensitive changes;
* destructive operations;
* consequential external actions;
* production deployment;
* required Git delivery actions.

Do not treat agent confidence as approval.

Do not request redundant approval when an approved Task Specification already clearly authorizes the action, unless a higher-level rule requires it.

---

## 17. Git and Delivery

Implementation and delivery are separate responsibilities.

Agents may inspect Git state and relevant diffs when required.

Delivery actions include:

* commit;
* push;
* pull request creation;
* merge;
* force-push;
* review bypass;
* deployment.

Perform these only when authorized by the applicable workflow and delivery procedure.

Never claim a delivery action occurred without evidence.

---

## 18. Truthful Reporting

Every agent must distinguish:

* observed facts;
* inferred conclusions;
* assumptions;
* actions performed;
* actions not performed;
* evidence;
* limitations;
* blockers.

Never fabricate:

* files;
* tool results;
* test results;
* Figma findings;
* asset exports;
* approvals;
* Git operations;
* deployments;
* agent execution;
* handoff consumption.

If something was not observed, say so.

If something was not performed, say so.

If something could not be verified, say so.

---

## 19. Completion

A workflow stage is complete only when it has:

* performed its assigned responsibility;
* remained within authority and scope;
* followed applicable instructions and Skills;
* produced the required output;
* recorded relevant evidence;
* reported blockers and limitations honestly.

These states are distinct:

`IMPLEMENTED ≠ VERIFIED ≠ VISUALLY APPROVED ≠ CODE REVIEWED ≠ HUMAN APPROVED ≠ DELIVERED ≠ DEPLOYED`

The overall task is complete only when all required stages and approval gates have been satisfied.

---

## 20. Final Operating Rule

When uncertain:

1. Read the applicable task instructions.
2. Use the narrowest relevant context.
3. Inspect the actual project/design state.
4. Separate facts from assumptions.
5. Confirm authority and scope.
6. Use only the minimum effective Skills.
7. Perform the smallest appropriate action.
8. Verify what can actually be verified.
9. Use evidence in the handoff.
10. STOP and escalate rather than guessing or repeatedly retrying a failed operation.

**Reliability, bounded execution, and evidence take precedence over speed, convenience, or apparent completeness.**
