---
name: frontend-asset-handling
description: Locate, validate, and integrate frontend assets using authoritative sources without silently substituting or misrepresenting required assets.
---

# Frontend Asset Handling

## Purpose

Provide a controlled procedure for identifying, validating, and integrating visual assets required by a frontend task.

Use this Skill when a task requires images, icons, illustrations, logos, videos, downloadable design assets, or other visual resources.

The purpose is to preserve asset identity, quality, intended usage, and traceability.

## Inputs

Use:

- the approved task;
- the Task Specification when one exists;
- applicable instruction files;
- relevant project documentation;
- approved Figma/design sources;
- existing project assets;
- authoritative external asset sources when explicitly provided or permitted.

Do not invent asset identity or intended usage.

## Procedure

### 1. Identify required assets

Determine:

- which visual assets are required;
- where each asset is used;
- whether the asset is mandatory or optional;
- whether the asset is decorative or functional;
- whether an exact asset identity matters.

Classify the asset where relevant as:

- vector;
- raster;
- icon;
- logo;
- illustration;
- component;
- instance;
- background;
- decorative element;
- masked content;
- effect;
- animation/video.

## 2. Locate the authoritative source

Prefer, in order:

1. approved project assets;
2. approved Figma/design source;
3. explicitly authorized project resources;
4. another verified source appropriate to the task.

Do not use an arbitrary replacement merely because it is visually similar.

## 3. Verify identity

Confirm that the located asset corresponds to the required asset.

Verify relevant attributes such as:

- visual identity;
- filename or source identity;
- format;
- dimensions;
- aspect ratio;
- transparency;
- intended placement;
- available resolution;
- variants or states.

When identity cannot be established confidently:

`STOP → REPORT THE EXACT ASSET GAP → ESCALATE`

## 4. Determine appropriate format

Use a production format appropriate to the asset and project conventions.

Consider:

- vector versus raster;
- transparency;
- resolution;
- browser compatibility;
- expected rendering quality;
- performance;
- existing project conventions.

Do not convert formats unnecessarily.

Do not reduce asset quality merely for convenience.

## 5. Retrieve or export the asset

When the active tooling supports asset retrieval or export:

- obtain the authoritative asset;
- preserve its identity;
- place it in the appropriate project location;
- follow project asset naming and organization conventions.

Do not rely on temporary or expiring source URLs when a permanent project asset is required.

## 6. Preserve asset semantics

Do not alter an asset in a way that changes its intended meaning or identity without authorization.

Do not:

- replace logos with text equivalents;
- replace exact icons with unrelated icons;
- change required artwork;
- remove important visual content;
- introduce arbitrary filters or transformations.

When transformation is explicitly required, follow the approved design and task requirements.

## 7. Integrate the asset

When implementing:

- use the verified asset;
- use the appropriate path/reference;
- preserve expected dimensions and aspect ratio;
- preserve responsive behavior;
- preserve accessibility requirements for meaningful content;
- use appropriate alternative text or accessible treatment when required.

Decorative assets should not be exposed as meaningful content unnecessarily.

## 8. Validate the rendered result

When visual correctness matters, verify that the asset:

- loads correctly;
- renders with sufficient quality;
- appears in the intended location;
- maintains the expected proportions;
- behaves correctly responsively;
- matches the approved design.

Use Visual QA when the asset contributes materially to visual fidelity.

## 9. Handle unavailable assets

When a required asset cannot be located, retrieved, or identified confidently:

- identify the exact asset;
- identify the expected source;
- identify what was inspected;
- explain what is missing;
- identify the impact on implementation.

Then:

`STOP → REPORT → ESCALATE`

Do not silently substitute a visually similar asset when exact identity matters.

## 10. Handle ambiguous assets

When multiple plausible assets exist:

- compare their authoritative context;
- determine whether the Task Specification identifies the intended one;
- use evidence to resolve the choice when possible.

When evidence cannot determine the intended asset:

`STOP → SURFACE THE OPTIONS → ASK FOR CLARIFICATION`

Do not choose arbitrarily.

## Asset output record

When useful, record:

### Asset

Asset name or identifier.

### Type

Vector, raster, icon, logo, illustration, background, etc.

### Source

Authoritative source inspected.

### Location

Project destination or usage location.

### Verification

How identity and suitability were confirmed.

### Status

One of:

`VERIFIED`

`MISSING`

`AMBIGUOUS`

`BLOCKED`

## Evidence discipline

Never claim:

- an asset is the correct asset without evidence;
- an asset was retrieved when it was not;
- an asset matches the approved design without inspecting the relevant result;
- an asset is production-ready without sufficient validation.

Distinguish:

- verified asset;
- probable match;
- unresolved asset;
- unavailable asset.

## Boundaries

This Skill does not:

- define design intent;
- change requirements;
- authorize asset substitutions;
- invent missing assets;
- expand task scope;
- install unrelated dependencies;
- commit;
- push;
- create pull requests;
- merge;
- deploy.

## Interaction with other Skills

Use this Skill together with:

- `frontend-task-research` when asset requirements must first be investigated;
- `task-specification` when asset requirements must be formalized;
- `frontend-implementation` when assets are being integrated;
- `frontend-visual-qa` when rendered fidelity must be checked.

Do not duplicate the responsibilities of those Skills.

## Final rule

Use the correct asset, not merely a similar asset.

When the correct asset cannot be established:

`STOP → REPORT THE EXACT GAP → ESCALATE`