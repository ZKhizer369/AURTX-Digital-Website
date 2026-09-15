---
name: frontend-asset-handling
description: Locate, validate, and integrate only the frontend assets required by the current task using authoritative sources, existing project assets, and bounded retrieval operations.
---

# Frontend Asset Handling

## Purpose

Provide a controlled procedure for identifying, validating, retrieving, and integrating visual assets required by the current frontend task.

Use this Skill when the task requires:

- images;
- icons;
- illustrations;
- logos;
- videos;
- downloadable design assets;
- other visual resources.

The objective is to preserve asset identity and design fidelity while minimizing unnecessary asset discovery, retrieval, conversion, and validation work.

This Skill does not authorize broad asset exploration.

---

## Core Principles

1. Work only on assets required by the current Task Specification or acceptance criteria.
2. Prefer existing verified project assets before retrieving new assets.
3. Use authoritative sources when exact asset identity matters.
4. Provide the minimum effective context required to identify an asset.
5. Do not broadly inspect Figma or project assets.
6. Do not repeatedly retry failed retrieval or export operations.
7. Never silently substitute an incorrect asset.
8. Stop when the required asset state is resolved.
9. Record only information needed by the next workflow stage.

---

## Inputs

Use, in priority order:

1. approved Task Specification;
2. task-specific instruction files;
3. existing verified project assets;
4. exact Figma/design references supplied by the task or research;
5. explicitly authorized external asset sources.

Do not independently redefine design intent.

Do not rediscover information already established by Research.

---

# Procedure

## 1. Identify the Required Asset

Determine only the assets required for the current task.

For each required asset, establish where possible:

- asset identity;
- usage location;
- mandatory or optional status;
- functional or decorative role;
- required format;
- relevant dimensions/aspect ratio;
- accessibility requirements.

Do not create a complete project-wide asset inventory unless explicitly required.

---

## 2. Check Existing Project Assets First

Before retrieving or exporting an asset:

1. inspect the relevant existing asset directory or referenced asset path;
2. check for an existing verified match;
3. reuse it when it satisfies the task requirements.

Do not retrieve a new copy of an asset that already exists and is suitable.

Do not inspect unrelated asset directories.

---

## 3. Use the Narrowest Authoritative Source

When the required asset does not already exist:

- use the exact Figma frame/node/component/asset reference supplied by the Task Specification or Research Handoff;
- otherwise use the narrowest approved design source necessary to identify it.

Do not browse an entire Figma file searching for an unspecified asset when the task does not establish that such exploration is necessary.

If the asset reference is insufficient:

`STOP → REPORT THE MISSING REFERENCE → ESCALATE`

Do not compensate for an incomplete reference with broad exploration.

---

## 4. Verify Asset Identity

Confirm that the selected asset corresponds to the required asset.

Check only attributes relevant to the task, such as:

- visual identity;
- source identity;
- format;
- dimensions;
- aspect ratio;
- transparency;
- intended placement;
- resolution;
- variant/state.

Possible states:

`VERIFIED`

`PROBABLE`

`AMBIGUOUS`

`MISSING`

`BLOCKED`

When exact identity cannot be established and exact identity matters:

`STOP → REPORT → ESCALATE`

---

## 5. Prefer Existing Production Formats

Use a format already supported by the project when appropriate.

Consider:

- vector versus raster;
- transparency;
- resolution;
- browser compatibility;
- rendering quality;
- performance;
- project conventions.

Do not convert an asset unless conversion solves a demonstrated implementation requirement.

Do not convert merely because another format is available.

Do not perform multiple equivalent conversions.

---

## 6. Retrieve or Export

When retrieval/export is required:

1. attempt the simplest supported authoritative method;
2. verify the result;
3. place it in the appropriate project location.

If the operation fails:

1. diagnose the failure briefly;
2. make one meaningful retry using a changed method or condition;
3. if it fails again, stop.

Use:

`FIRST ATTEMPT → MEANINGFUL RETRY → STOP`

Do not repeatedly attempt different export methods without new evidence that they can succeed.

Do not spend execution time experimenting with equivalent asset retrieval methods.

---

## 7. Asset Retrieval Stop Conditions

Stop asset retrieval immediately when:

- the correct asset has been obtained and verified;
- the asset already exists locally and is suitable;
- the required source cannot be accessed;
- exact identity cannot be established;
- repeated retrieval/export attempts fail;
- the required asset reference is missing;
- further exploration would exceed the approved task scope.

Do not continue searching for a theoretically better version once the approved requirement is satisfied.

---

## 8. Preserve Asset Semantics

Do not alter an asset in a way that changes its intended meaning or identity without authorization.

Do not:

- replace a required logo with text;
- replace an exact icon with an unrelated icon;
- replace required artwork with a visually similar asset;
- remove important visual content;
- apply arbitrary filters;
- alter approved artwork without authorization.

When transformation is explicitly required, follow the Task Specification and approved design.

---

## 9. Integrate the Asset

When implementing:

- use the verified asset;
- use the correct project path/reference;
- preserve expected dimensions and aspect ratio;
- preserve responsive behavior;
- follow project conventions;
- apply appropriate accessibility treatment.

For meaningful content, use appropriate alternative text or accessible semantics.

For purely decorative assets, avoid unnecessarily exposing them as meaningful content.

---

## 10. Targeted Render Validation

When visual correctness matters, validate only the affected usage.

Check:

- asset loads;
- asset renders;
- expected location;
- expected proportions;
- sufficient quality;
- responsive behavior where relevant.

Do not perform broad visual inspection solely because an asset was added.

Use Visual QA when the asset materially affects design fidelity.

---

## 11. Handle Missing Assets

When a required asset cannot be located, retrieved, or confidently identified:

Record:

- exact asset required;
- expected source;
- exact source/reference inspected;
- what was attempted;
- failure reason;
- implementation impact.

Then:

`STOP → REPORT → ESCALATE`

Do not silently use:

- stock imagery;
- generated imagery;
- arbitrary icons;
- visually similar assets;
- temporary placeholders as final assets.

A placeholder may be used only when the Task Specification explicitly permits it.

---

## 12. Handle Ambiguous Assets

When multiple plausible assets exist:

1. compare only the relevant authoritative context;
2. use the Task Specification or Research Handoff to resolve the choice;
3. select the asset when evidence establishes the intended one.

If evidence cannot establish the intended asset:

`STOP → SURFACE THE OPTIONS → ASK FOR CLARIFICATION`

Do not arbitrarily choose one.

---

# Asset Output Record

Create an asset record only when useful to the next workflow stage.

### Asset
Name or identifier.

### Type
Vector, raster, icon, logo, illustration, background, etc.

### Source
Authoritative source.

### Location
Project destination or usage location.

### Verification
How identity/suitability was confirmed.

### Status
One of:

`VERIFIED`

`PROBABLE`

`MISSING`

`AMBIGUOUS`

`BLOCKED`

Keep the record concise.

Do not generate a verbose asset report unless explicitly requested.

---

# Evidence Discipline

Never claim:

- an asset is correct without evidence;
- an asset was retrieved when it was not;
- an asset matches the approved design without inspecting the relevant result;
- an asset is production-ready without sufficient validation.

Clearly distinguish:

- verified;
- probable;
- unresolved;
- unavailable.

---

# Interaction With Other Skills

### `frontend-task-research`

Use when asset requirements have not yet been established.

Research should identify the required asset and authoritative reference.

Once the required asset is established, this Skill should not repeat the research.

### `task-specification`

Use when asset requirements need to become part of the approved task contract.

### `frontend-implementation`

Use when verified assets are being integrated into source code.

Implementation should not independently restart asset discovery.

### `frontend-visual-qa`

Use when the asset materially affects rendered fidelity.

Visual QA should validate the affected result rather than repeat asset retrieval.

---

# Boundaries

This Skill does not:

- define design intent;
- change requirements;
- authorize substitutions;
- invent missing assets;
- perform broad design exploration;
- expand task scope;
- install unrelated dependencies;
- commit;
- push;
- create pull requests;
- merge;
- deploy.

---

# Failure Control

Asset operations are bounded.

Use:

`INSPECT → ATTEMPT → VERIFY`

If retrieval/export fails:

`DIAGNOSE → ONE MEANINGFUL RETRY → STOP`

If identity is unresolved:

`STOP → REPORT → ESCALATE`

Never:

`SEARCH → SEARCH → SEARCH → EXPORT → EXPORT → CONVERT → CONVERT → RETRY → RETRY`

---

# Final Rule

Use the correct asset with the minimum necessary discovery and retrieval work.

Prefer:

`TASK REQUIREMENT → EXISTING ASSET CHECK → EXACT AUTHORITATIVE REFERENCE → BOUNDED RETRIEVAL → VERIFY → INTEGRATE → TARGETED VALIDATION → STOP`

Never:

`TASK → BROAD FIGMA EXPLORATION → REPEATED EXPORT ATTEMPTS → UNNECESSARY CONVERSION → BROAD VALIDATION → TOKEN WASTE`