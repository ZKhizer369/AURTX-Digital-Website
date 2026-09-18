---
name: figma-use
description: Safely perform bounded Figma MCP operations using the minimum context required by the current task. Use before any Figma MCP operation.
---

# Figma Use

## Purpose

Provide the foundational operating rules for using Figma MCP safely and efficiently.

This Skill defines **how to operate Figma**.

It does not determine:

- product requirements;
- design intent;
- which assets are required;
- which implementation should be built;
- whether visual QA is required.

Those decisions come from the Task Specification, approved instructions, and specialized Skills.

---

# Core Rule

Use:

`TARGET → MINIMUM INSPECTION → REQUIRED OPERATION → VERIFY → STOP`

Never:

`OPEN BROADLY → EXPLORE → INSPECT EVERYTHING → EXPERIMENT → RETRY → REINSPECT`

Figma access must remain task-bounded.

---

# Required Before Any Figma Operation

Before using Figma MCP:

1. load this Skill;
2. identify the approved task;
3. identify the specific Figma file/page/node relevant to the task;
4. determine the purpose of the operation;
5. determine whether it is read-only or write-capable;
6. confirm authorization;
7. inspect only the minimum information required;
8. perform the smallest necessary operation;
9. verify the result when required;
10. stop.

If the target or authorization cannot be established:

`STOP → REPORT GAP → ESCALATE`

Do not begin broad Figma exploration to resolve an unclear task.

---

# Default: Read-Only

Figma operations are read-only by default.

Having Figma MCP access does not grant permission to modify the design.

Write operations require explicit authorization from the approved task.

Examples of write operations include:

- creating nodes;
- deleting nodes;
- moving nodes;
- changing hierarchy;
- changing components;
- changing variants;
- changing properties;
- changing variables;
- changing styles;
- changing Auto Layout;
- modifying shared design-system assets;
- renaming or restructuring design content.

If write authorization is absent or ambiguous:

`STOP`

---

# Target Identification

Before inspection, establish the narrowest available target:

- file;
- page;
- frame;
- node;
- component;
- instance;
- asset.

Prefer references supplied by:

1. Task Specification;
2. Research Handoff;
3. task-specific instruction;
4. approved design reference.

Do not assume a similarly named Figma object is the correct target.

If multiple candidates exist, use only the minimum additional inspection needed to resolve them.

If the correct target cannot be established:

`STOP → REPORT AMBIGUITY → ESCALATE`

---

# Minimum Inspection Principle

Inspect only what is necessary to answer the current task question.

Examples:

### Need dimensions

Inspect:

- target dimensions;
- relevant sizing properties.

Do not inspect the entire component hierarchy.

### Need a component variant

Inspect:

- component set;
- relevant variants;
- required properties.

Do not inspect unrelated components.

### Need an image

Inspect:

- target image node;
- enough surrounding context to establish identity.

Do not enumerate the entire asset library.

### Need responsive behavior

Inspect:

- target frame;
- relevant layout constraints;
- relevant Auto Layout/sizing behavior.

Do not inspect unrelated pages.

### Need typography

Inspect:

- relevant text;
- relevant style/token relationship.

Do not audit the complete design system.

---

# Context Expansion

Expand inspection only when a specific unresolved question requires it.

Use:

`TARGET → DIRECT EVIDENCE → IDENTIFY GAP → NARROW EXPANSION`

Every expansion should answer a concrete question.

Do not expand because:

- more information is available;
- the Figma file is large;
- nearby components look interesting;
- the agent wants additional confidence without a material reason.

Once sufficient evidence exists:

`STOP INSPECTING`

---

# Figma Structure

Inspect structural information only when relevant to the task.

Possible structural information includes:

- hierarchy;
- node type;
- component;
- instance;
- variant;
- component property;
- Auto Layout;
- sizing;
- constraints;
- visibility;
- positioning.

Do not inspect all categories automatically.

Use the smallest subset necessary.

---

# Visual Properties

Inspect visual properties only when relevant.

Possible properties include:

- dimensions;
- spacing;
- padding;
- gaps;
- alignment;
- fills;
- strokes;
- radius;
- effects;
- opacity;
- typography;
- imagery;
- clipping.

Do not collect complete style inventories unless explicitly required.

Use observed values rather than guessing when exact values matter.

---

# Assets

When the task requires an asset:

- identify the exact relevant asset;
- determine whether an existing project asset already satisfies the requirement;
- use the dedicated `frontend-asset-handling` or `figma-asset-export` Skill when applicable.

Do not turn `figma-use` into a general asset-discovery process.

Do not export assets merely because they are visible in the design.

Do not inspect unrelated assets.

---

# Components and Variants

When component information is required:

1. inspect the relevant component or component set;
2. identify the applicable variant/property;
3. inspect nested instances only when they affect the task.

Do not create or modify components unless explicitly authorized.

Do not audit unrelated component sets.

---

# Variables, Styles, and Tokens

Inspect variables, styles, or tokens only when the task depends on them.

When they exist:

- use the relevant existing value;
- preserve existing bindings;
- do not invent replacement tokens;
- do not globally normalize the design system.

A convenient implementation value is not permission to modify the design system.

---

# Auto Layout

Inspect Auto Layout only when relevant.

When needed, establish:

- layout direction;
- padding;
- gap;
- alignment;
- sizing behavior;
- wrapping;
- relevant positioning.

Do not change Auto Layout unless explicitly authorized.

Do not enable or restructure Auto Layout simply because it appears useful for implementation.

---

# Figma-to-Code Interpretation

Figma structure is evidence, not an automatic code architecture.

Do not map every Figma layer to a React component.

When implementation structure must be inferred, use:

1. approved Task Specification;
2. existing project architecture;
3. existing reusable components;
4. repeated behavior/state;
5. relevant design structure;
6. project conventions.

If the design does not establish an important implementation decision:

`UNKNOWN / AMBIGUOUS`

Do not invent a requirement.

---

## Figma Is a Visual/Product Specification

Treat Figma primarily as a specification of the intended visual result, layout, hierarchy, and interaction behavior—not as a literal DOM or React implementation.

Do not reproduce Figma artifacts literally when they are only demonstrating the design or interaction.

In particular:

- Do not implement cursor/pointer icons shown in a design as actual page UI unless the design clearly establishes that they are persistent content.
- Do not implement editor artifacts, measurement guides, annotations, selection indicators, or other design-tool artifacts as application UI.
- Do not treat a screenshot of a hover state as a separate visual element that must always be rendered.
- When a pointer or highlighted state is shown over an element, interpret it as evidence of the intended interaction unless the design clearly indicates otherwise.
- Implement the underlying interaction behavior using the appropriate web interaction pattern rather than reproducing the demonstration artifact.
- Do not map every Figma layer, frame, or group directly to a React component.
- Do not treat Figma dimensions as fixed browser dimensions when doing so would produce impractical sizing or break responsive behavior.
- Adapt dimensions, spacing, typography, and layout to the target viewport and responsive web context while preserving the intended visual hierarchy and design language.
- Preserve the design intent when translating from Figma to a functional web interface.

When Figma evidence is ambiguous, use the Task Specification, existing project architecture, established reusable components, and normal web implementation patterns to determine the implementation. Do not invent persistent UI from a visual demonstration alone.

---

# Design Evidence Classification

Classify Figma findings as:

### VERIFIED

Directly observed in Figma.

Examples:

- target dimensions;
- observed spacing;
- component variant;
- asset identity;
- existing property value.

### INTERPRETATION

A reasonable implementation conclusion derived from verified evidence.

Label it as interpretation.

### UNKNOWN

Figma does not establish the required decision.

Do not present an interpretation as a verified design requirement.

---

# Read Operations

For read-only operations:

1. identify target;
2. inspect minimum relevant context;
3. extract required evidence;
4. record the result;
5. stop.

Do not continue inspecting once the task question has been answered.

---

# Write Operations

Write operations require explicit authorization.

Before writing:

1. inspect current state;
2. identify exactly what must change;
3. preserve relevant existing properties;
4. define the smallest change;
5. perform the operation.

After writing:

1. inspect the affected result;
2. verify the intended change;
3. use visual validation when appearance could materially change;
4. report affected nodes and result.

Do not perform speculative or cleanup-oriented writes.

Do not batch unrelated modifications into one operation.

---

# Write Scope

A Figma write must have:

- explicit purpose;
- explicit authorization;
- defined target;
- defined expected result.

If any is missing:

`STOP`

Do not infer permission from the task merely saying “implement the design.”

---

# Operation Retry Control

When a Figma operation fails:

1. capture the actual failure;
2. determine whether it is actionable;
3. make one meaningful retry only if the method or relevant condition changes;
4. verify the result.

If the retry fails:

`STOP → BLOCKED → REPORT`

Do not repeatedly retry the same operation.

Do not experiment with unrelated operations to bypass a failure.

Use:

`ATTEMPT → MEANINGFUL RETRY → STOP`

---

# Capability Failures

If the required Figma MCP capability is unavailable:

- state the exact limitation;
- identify the blocked operation;
- identify its impact;
- report the required next action.

Do not:

- simulate Figma access;
- fabricate inspection results;
- claim successful export;
- claim visual verification;
- modify unrelated content as a workaround.

---

# Visual Validation Boundary

Visual validation in this Skill is limited to validating a **specific Figma operation or design fact** when necessary.

For example:

- confirming a Figma write produced the intended appearance;
- confirming a target node's visual state;
- confirming a specific property relationship.

Page-level or implementation-level visual QA belongs to `frontend-visual-qa`.

Do not duplicate full visual QA here.

---

# Evidence Requirements

A Figma handoff should contain only task-relevant evidence.

When applicable:

```text
Figma:
[file/page/node]

Verified:
[relevant design facts]

Interpretation:
[only if needed]

Operation:
[operation performed, if any]

Validation:
[result]

Unresolved:
[ambiguity/limitation, if any]