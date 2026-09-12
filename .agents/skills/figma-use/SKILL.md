---
name: figma-use
description: Safely inspect and interact with Figma through the Figma MCP, preserving design intent, structure, assets, and visual fidelity. Use before any Figma MCP operation.
---

# Figma Use

## Purpose

Use this Skill whenever the task requires interacting with Figma through the Figma MCP.

This Skill is the foundational Figma-MCP operating procedure for the AURTX software-engineering workflow. It defines how an agent inspects Figma, extracts reliable design information, performs authorized Figma operations, and validates the result.

This Skill does not decide product requirements or design intent. The task, approved design, Task Specification, and applicable instructions remain authoritative.

## Core rule

**Inspect before acting. Act only within authorized scope. Validate after acting.**

Never infer an important design decision when the Figma file contains evidence that can be inspected. When the design is genuinely ambiguous, record the ambiguity and escalate instead of inventing a decision.

## Required use

Before making a Figma MCP operation:

1. Load this Skill.
2. Identify the relevant Figma file, page, and node/frame.
3. Determine whether the operation is read-only or write-capable.
4. Confirm that the current agent and task are authorized for the operation.
5. Inspect the minimum relevant context before acting.
6. Perform the smallest operation required.
7. Validate the result when the operation changes anything or when visual/design evidence is required.
8. Report relevant Figma evidence in the handoff.

If the required Figma MCP capability is unavailable, do not simulate access or claim that the design was inspected.

## Authority and safety

### Default: read-only

Figma inspection is read-only by default.

Do not modify a Figma file merely because a modification appears useful.

Write operations require explicit task authorization. Examples include:

- creating, deleting, or restructuring nodes
- changing component or variant definitions
- changing variables, styles, or bindings
- changing Auto Layout structure
- changing shared design-system assets
- changing names or hierarchy for cleanup
- modifying the source design to make implementation easier

### Never assume authorization

Do not infer permission to edit Figma from:

- having Figma MCP access
- having this Skill
- having write access to the code repository
- being the Implementer
- being asked to implement a design
- discovering an apparent design-system problem

If authorization is absent or ambiguous, stop and escalate.

### Preserve existing intent

Do not redesign, "improve", normalize, simplify, or clean up Figma unless that is explicitly within the approved task.

Do not impose an external design-system philosophy over the existing design.

## Figma inspection procedure

When investigating a design:

### 1. Establish the target

Identify:

- file
- page
- target frame/node
- relevant parent and child hierarchy
- whether the target is canonical, repeated, exploratory, or ambiguous

Do not assume a similarly named frame is the correct source.

### 2. Inspect structure

Determine, where relevant:

- node types
- meaningful layer names
- hierarchy
- components and component sets
- variants
- component properties
- nested instances
- variables and modes
- styles
- Auto Layout
- sizing behavior
- constraints
- positioning
- visibility/state structure

Use the smallest useful inspection scope first and expand only when necessary.

### 3. Inspect visual properties

When relevant, inspect:

- dimensions
- spacing
- padding
- gaps
- alignment
- fills
- strokes
- corner radius
- shadows/effects
- opacity
- typography
- image/media treatment
- clipping
- responsive behavior

Do not replace exact inspected values with guesses.

### 4. Inspect assets

Identify:

- images
- icons
- logos
- illustrations
- fonts or typography requirements
- existing reusable assets
- asset variants

Prefer authoritative existing assets over approximations.

### 5. Inspect conventions

Before changing or implementing against a repeated pattern, inspect nearby or equivalent examples.

Determine the conventions already present in the design rather than inventing new ones.

## Figma-to-implementation interpretation

When Figma is being used to prepare or implement frontend work, extract implementation-relevant facts without turning design interpretation into product decisions.

Record, when relevant:

- intended hierarchy
- component boundaries suggested by repeated behavior
- states and variants
- responsive behavior
- spacing and sizing rules
- typography hierarchy
- token/variable relationships
- asset identity
- interaction/state information represented by the design
- important visual relationships

### React-specific guidance

Figma layers are not automatically React components.

A React component boundary should be determined from:

1. approved Task Specification
2. existing project architecture
3. existing reusable components
4. repeated behavior/state
5. design structure
6. project conventions

Do not create one React component per Figma layer merely because the layer exists.

Likewise, do not duplicate a component that already exists in the project simply because Figma represents another instance of it.

## Design truth and ambiguity

Classify findings as:

### Verified

Directly supported by inspected Figma data.

Examples:

- exact frame dimensions
- observed spacing
- component property values
- existing asset/node identity
- observed Auto Layout configuration

### Interpretation

A reasonable implementation interpretation derived from verified design evidence.

Label it as interpretation when it is not directly represented by Figma.

### Unknown / ambiguous

The available Figma evidence does not establish the decision.

Do not convert ambiguity into a requirement.

Examples:

- unclear breakpoint behavior
- multiple apparently canonical screens
- unclear interaction behavior
- missing mobile design
- conflicting component variants
- ambiguous asset choice

Escalate when the ambiguity materially affects implementation.

## Read/write operation discipline

For read operations:

- inspect only what is needed
- return useful identifiers and relevant evidence
- do not mutate the document

For write operations:

1. confirm authorization
2. inspect the current state
3. capture the properties that must be preserved
4. make the smallest scoped change
5. return affected node identifiers
6. inspect the resulting structure
7. use visual comparison when appearance could have changed
8. report what changed and what was validated

Never perform a large sequence of speculative writes.

For potentially destructive structural changes, prefer incremental operations with validation between meaningful steps.

## Visual validation

When a Figma change or implementation decision depends on appearance:

- obtain an appropriate screenshot or equivalent visual evidence when available
- compare against the approved reference
- inspect alignment, spacing, sizing, typography, hierarchy, imagery, states, and responsive behavior as applicable
- investigate unexpected differences before continuing

A structurally valid result is not automatically visually correct.

## Auto Layout

When working with Auto Layout:

- inspect the existing layout model first
- distinguish fixed, hug, and fill behavior
- inspect padding, gaps, alignment, wrapping, sizing, and positioning
- preserve overlays and intentionally positioned elements
- do not enable Auto Layout and then repair visual damage by guesswork

If converting an existing layout, capture the relevant original geometry and verify the resulting appearance.

## Components, variants, and properties

Before selecting or changing a component:

- inspect the component set and variants
- inspect available properties
- confirm the selected variant matches the intended state
- inspect nested instances when their exposed properties affect the result

Do not create a new component when an authoritative reusable component already exists unless the task explicitly requires it.

## Variables, styles, and tokens

When variables, styles, or tokens exist:

- identify the relevant collection/mode/style
- prefer existing project/design-system values
- preserve existing bindings
- do not invent replacement tokens because an existing value is inconvenient
- do not globally normalize values unless explicitly authorized

A local implementation need is not permission to alter the design system.

## Errors and unavailable capabilities

If a Figma operation fails:

1. capture the actual error
2. determine whether the failure is transient, permission-related, target-related, or capability-related
3. retry only when a retry is justified
4. do not fabricate a result
5. escalate when the failure blocks reliable completion

If a required Figma capability is unavailable, state the limitation explicitly.

## Evidence requirements

A Figma-related handoff should include, where applicable:

- Figma file/reference used
- page
- relevant node/frame identifiers
- design facts verified
- assets inspected
- components/variants/variables inspected
- interpretation made
- unresolved ambiguities
- operations performed
- validation performed
- limitations

Never report "Figma verified" without actual inspection evidence.

## Agent-role boundaries

### Researcher

The Researcher may use this Skill to:

- inspect Figma
- understand design structure
- extract implementation-relevant requirements
- identify assets and design conventions
- identify ambiguities
- prepare implementation instructions and Task Specifications

The Researcher must not modify Figma during ordinary research/task preparation unless a separate task explicitly authorizes such modification.

### Implementer

The Implementer may use this Skill to:

- inspect the approved design
- resolve implementation details against Figma
- inspect components, variants, variables, assets, and responsive behavior
- perform explicitly authorized Figma operations when the task requires them
- validate implementation-related design fidelity

Figma access does not give the Implementer authority to redesign the product.

### Verification / Visual QA

These roles may use this Skill if their approved role configuration grants it. Their purpose is verification, not unapproved design modification.

### Review / Delivery

Do not grant Figma access merely for code review or Git delivery. Grant it only when the role's defined responsibility requires direct Figma evidence.

## Relationship to other Skills

This Skill is the foundational Figma MCP operating layer.

Other Skills may build on it, for example:

- Figma research/analysis
- Figma-to-React implementation
- Figma visual verification
- Figma design-system auditing

Those Skills must not duplicate low-level Figma MCP operating rules unnecessarily.

When another Figma Skill requires Figma MCP operations, this Skill remains the foundational prerequisite.

## Stop conditions

Stop and report BLOCKED when:

- the target Figma file/page/node cannot be reliably identified
- required Figma access is unavailable
- authorization to modify Figma is unclear
- design evidence materially conflicts
- an important requirement is absent from the design and cannot be resolved from approved instructions
- a destructive operation would be required without explicit authorization
- validation cannot establish whether a consequential change preserved the intended result

Do not proceed by guessing.

## Completion standard

A Figma operation is complete only when:

- the correct design target was identified
- the operation stayed within authorized scope
- existing design intent was preserved unless change was explicitly required
- relevant Figma facts were verified
- changes, if any, were validated
- ambiguities and limitations were reported
- no unsupported design decision was presented as fact
