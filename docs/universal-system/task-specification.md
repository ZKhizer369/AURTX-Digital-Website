# Universal Task Specification

## Purpose

The Task Specification is the implementation-ready contract for one specific task.

It translates the requested outcome and verified project information into a clear, bounded objective for implementation and verification.

A Task Specification is a workflow artifact created through research or other verified analysis when the task requires it.

It is not a replacement for project instructions, documentation, or human authority.

## Authority

The Task Specification defines the current task.

It must follow:

1. Higher-priority platform and safety requirements.
2. Explicit human decisions.
3. Applicable instruction files.
4. Applicable project rules and documentation.
5. The verified findings available for the task.

A Task Specification cannot authorize actions that higher-level rules prohibit.

A Task Specification cannot silently change requirements or project rules.

## When to create one

Create a Task Specification when implementation depends on meaningful research, multiple constraints, design analysis, architectural context, or coordination between agents.

Do not require a formal Task Specification for trivial work when the task can be executed safely and unambiguously without one.

## Required structure

### Objective

State exactly what the task must accomplish.

### Scope

Define what is included and what is explicitly outside the task.

### Verified Context

Record relevant facts confirmed from authoritative project sources, existing implementation, design sources, tests, or other evidence.

Do not include unsupported assumptions as facts.

### Requirements

Record the requirements that implementation must satisfy.

Distinguish confirmed requirements from unresolved questions.

### Design and Figma References

When applicable, record the approved design source, relevant pages/frames/components, responsive behavior, visual constraints, and design decisions supported by the source.

### Existing Implementation

Record relevant existing components, patterns, architecture, styles, utilities, assets, and integration points that implementation should preserve or reuse.

### Assets

Record required assets and their verified sources or locations.

Do not invent or silently substitute important assets.

### Responsive and Accessibility Requirements

Record applicable viewport behavior, interaction requirements, semantic requirements, keyboard behavior, focus behavior, and other accessibility constraints.

### Acceptance Criteria

Define observable conditions that determine whether the task is complete.

Acceptance criteria must be specific enough to verify.

### Verification Plan

Define the checks expected to provide evidence of correctness.

Use deterministic checks whenever practical.

### Risks

Record known technical, visual, accessibility, performance, security, or maintenance risks.

### Assumptions

Record assumptions that are necessary but not yet fully verified.

An assumption that materially affects correctness must be resolved before implementation.

### Open Questions

Record unresolved decisions or missing information.

Material open questions block implementation until resolved.

## Evidence discipline

Every important claim in the Task Specification should be traceable to one of:

- the human task;
- applicable instructions;
- project documentation;
- existing implementation;
- approved design sources;
- deterministic verification;
- another explicitly identified authoritative source.

Do not present inference as verified fact.

## Handoff rule

The implementation agent consumes the Task Specification as the task contract.

The implementation agent should not reconstruct requirements from scattered research when the Task Specification already contains the required verified context.

If implementation discovers that the Task Specification is materially incomplete, contradictory, or incorrect:

1. stop the affected work;
2. report the specific issue;
3. return for clarification or updated verified findings;
4. do not silently redefine the task.

## Change control

Changes that materially alter the objective, scope, requirements, acceptance criteria, or other consequential constraints require authorization.

Minor clarifications supported by authoritative evidence may be incorporated without changing the intended objective.

The final Task Specification should reflect the state actually approved for implementation.

## Completion

A Task Specification is ready for implementation when:

- the objective is clear;
- scope is bounded;
- material requirements are known;
- acceptance criteria are testable;
- required design information is available;
- material open questions are resolved;
- verification expectations are defined;
- no critical assumption remains unsupported.