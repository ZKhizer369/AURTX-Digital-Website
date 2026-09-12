# Universal Codex System — Architecture

## Purpose

The Universal Codex System is a reusable operating architecture for AI-assisted frontend software engineering. It defines how instructions, knowledge, procedures, agents, tasks, verification, and human decisions fit together.

The Universal Layer must remain project-agnostic. Project-specific product, brand, architecture, technology, and delivery rules belong in the Project Layer.

## System layers

### Human authority

The human project owner remains the final authority for requirements, scope, consequential decisions, approvals, and exceptions.

### Codex operating layer

Codex provides the execution environment: repository access, instruction discovery, Skills, available agent delegation, tools, sandboxing, approvals, and integrations. Exact capabilities depend on the active Codex surface and configuration; the workflow must not assume a capability that is not actually available.

### Universal instructions

`AGENTS.md` defines durable behavioral rules and boundaries. It should remain concise and high-signal.

### Project knowledge

`docs/` contains durable knowledge such as architecture, design-system decisions, conventions, and feature documentation. Documentation explains the project; it does not silently override governing instructions.

### Skills

Skills are reusable procedures for bounded kinds of work. A Skill defines how a task should be performed. A Skill is not an agent and does not own a workflow stage.

### Agents

Agents are workers with bounded responsibilities. The parent/root agent coordinates the task. Specialized agents may research, implement, verify, review, or perform other bounded work when that separation materially improves the result.

The system does not require one permanently active agent for every role. Agent selection is task-dependent.

### Task Specification

The Task Specification is the verified working contract for a particular task. It translates the requested goal and verified findings into an implementation-ready objective.

When applicable, it contains:

- Objective
- Scope
- Verified context
- Requirements
- Design/Figma references
- Existing components and assets
- Responsive behavior
- Acceptance criteria
- Verification plan
- Risks
- Assumptions
- Open questions

A Task Specification defines the current objective. It cannot override higher-priority instructions or human decisions.

### Repository and delivery systems

The repository is the implementation surface. Git/GitHub provide version history, collaboration, review, and delivery.

Tests, linters, type checks, builds, scripts, browser checks, CI, and other deterministic mechanisms provide evidence about the resulting system.

Figma is the visual source of truth when an approved Figma design is applicable.

## Knowledge model

| Source | Role |
| --- | --- |
| `AGENTS.md` | Rules, authority, scope, safety, and escalation boundaries |
| Scoped instruction files | More specific rules for a directory or subsystem |
| `docs/` | Durable project knowledge and decisions |
| Skills | Repeatable procedures for bounded work |
| Task Specification | Current verified objective, scope, acceptance criteria, and constraints |
| Tests/scripts/CI | Deterministic verification evidence |
| Figma | Visual source of truth when applicable |
| Git/GitHub | Version control, review, and delivery |
| Orchestrator | Coordinates work across tasks/runs when explicitly adopted |

## Agent collaboration model

The parent/root agent is accountable for the whole task. It:

1. interprets the request;
2. determines what work is actually required;
3. selects appropriate Skills;
4. decides whether delegation is useful;
5. delegates bounded work when supported;
6. integrates returned findings or changes;
7. verifies the result;
8. reports evidence, limitations, and unresolved questions.

Specialized agents do not become authorities. They operate within the same instruction hierarchy and return bounded results to the parent.

A typical pattern is:

`Task → Parent → Research (when needed) → Task Specification → Implementation → Verification → Review`

The actual set and order of delegated work may vary by task.

## Skill model

Skills are reusable procedures for bounded kinds of work.

The currently implemented Universal Skills are:

- frontend task research
- task specification
- frontend implementation
- frontend verification
- frontend code review
- frontend visual QA
- frontend asset handling
- Git delivery

These Skills are composable. An agent may use multiple Skills during one task.

Additional procedures such as debugging, accessibility review, security review, or framework-specific design-to-code work may be added later when there is a demonstrated reusable need and no suitable existing Codex capability already provides them.

Do not describe a planned or existing Codex/plugin capability as an installed Universal Skill.

Keep deterministic execution in scripts/tools where practical; keep reasoning and procedure selection in the agent/Skill layer.

## Delegation principles

Delegate when work is bounded, independently useful, or can materially improve quality or speed.

Do not delegate merely to create more agents.

Prefer one capable agent for a small task. Use multiple agents when the work is naturally separable or requires genuinely different perspectives.

When parallel work modifies the repository, use isolated workspaces/worktrees where supported and necessary to prevent conflicting changes.

## Orchestration boundary

An orchestrator is different from a worker agent.

- A worker agent performs bounded task work.
- A parent/root agent coordinates a task run.
- An external orchestration system can coordinate multiple task runs, workspaces, and lifecycle state.

Symphony belongs to the third category. It is optional and should not be required for the Universal System to function. It should not replace Skills, project instructions, or agent responsibilities.

## Verification model

Agent assertions are not verification evidence.

The system separates:

`reasoning → action → deterministic evidence → human judgment`

Use the smallest meaningful set of checks appropriate to the change. Broaden verification when failures, risk, new dependencies, architecture changes, or unresolved concerns justify it.

For frontend changes, visual QA is an additional evidence stream when design fidelity matters.

## Human gates

Human judgment remains required for consequential decisions that have not been explicitly delegated.

At minimum, preserve human approval for:

- requirement changes
- major architecture changes
- security-sensitive changes
- significant dependency changes
- destructive Git operations
- production deployment
- other consequential external actions

Projects may impose stricter gates.

## Universal vs Project Layer

The Universal Layer establishes how the engineering system operates.

The Project Layer establishes what the specific project is.

Project Layer examples include:

- framework and version choices
- project architecture
- design system
- branding
- routes
- feature specifications
- project-specific test commands
- deployment rules
- approved integrations

Project rules may specialize the Universal workflow but must not silently contradict higher-priority instructions.

## Native mechanisms vs engineering conventions

Do not describe an engineering convention as though it were a native Codex guarantee.

Codex-native mechanisms are those actually provided by the active Codex environment.

Our engineering conventions include:

- staged task lifecycle
- Task Specifications
- role boundaries
- handoff expectations
- evidence-based verification
- visual QA
- human approval gates
- STOP/ESCALATE behavior

The architecture must keep that distinction explicit.