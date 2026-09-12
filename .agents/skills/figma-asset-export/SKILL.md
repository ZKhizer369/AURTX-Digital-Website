---
name: figma-asset-export
description: Safely identify and export images and visual assets from Figma when they are required for frontend implementation, including assets misplaced or positioned outside the intended design area. Use when a design asset must be obtained for the project.
---

# Figma Asset Export

## Purpose

Use this Skill when frontend implementation requires images, illustrations, icons, graphics, or other visual assets from an authoritative Figma design.

The goal is to make the required design assets available to the project without changing the design or inventing replacement assets.

This Skill works alongside `figma-use`.

## Core Rules

1. **Inspect before exporting.**
2. **Export the exact required asset whenever possible.**
3. **Do not assume that an asset is irrelevant because it is outside the visible frame, page area, or expected design boundary.**
4. **If a relevant image or visual is misplaced, partially outside the design, off-canvas, or otherwise positioned outside the intended composition, inspect it and export it if it is needed for the implementation.**
5. **Do not silently replace a required asset with a placeholder, stock image, generated image, screenshot, or visually similar asset.**
6. **Do not modify, move, crop, redesign, or delete the Figma asset merely to make export easier.**
7. **If the required asset cannot be exported through the available Figma capabilities, STOP. Do not guess or substitute. Report exactly what is needed so the human can export it.**
8. **Every exported asset must have a clear destination in the project.**
9. **Preserve the asset's intended visual fidelity and required format.**
10. **Do not export unrelated assets just because they are available.**

## Relationship to `figma-use`

`figma-use` is the foundational Figma MCP operating Skill.

Before performing any Figma MCP operation:

- Follow the `figma-use` Skill.
- Inspect the relevant file, page, and node.
- Determine whether the operation is read-only or an export/write operation.
- Follow the available Figma MCP/tool requirements exactly.

This Skill defines **which assets to export, how to reason about asset selection, where to place them, and what to do when export is unavailable**.

It does not replace the low-level Figma MCP operating rules in `figma-use`.

## When to Use This Skill

Use this Skill when:

- an implementation requires an image shown in Figma;
- a design contains an illustration or visual that must be used in the application;
- an image appears to be detached from its intended section;
- an image is positioned outside a frame or composition;
- an asset appears off-canvas but is referenced by the design;
- a design contains an asset whose original file is not already available in the project;
- an implementation instruction explicitly requires a Figma asset;
- visual QA identifies that the implementation is missing an asset that exists in the authoritative Figma design.

Do not use it merely to collect every image in a Figma file.

## Asset Identification Procedure

### 1. Identify the implementation need

Determine:

- which page or feature requires the asset;
- which section/component uses it;
- what visual role it serves;
- whether the Task Specification or design explicitly identifies it;
- whether the project already contains the same authoritative asset.

Do not export a duplicate if the project already contains the correct asset and its provenance is established.

### 2. Locate the asset in Figma

Inspect the relevant page and design hierarchy.

Check:

- frames;
- groups;
- components;
- instances;
- image fills;
- vector graphics;
- illustrations;
- detached layers;
- off-canvas objects;
- objects outside expected section boundaries.

Do not restrict the search to the visible area of the intended frame.

### 3. Check misplaced/off-canvas assets

An asset being outside the intended design boundary is **not sufficient evidence that it is unused**.

If an image or visual appears misplaced:

1. identify what it is;
2. determine whether it corresponds to the requested design or implementation;
3. inspect its relationship to nearby layers/components;
4. determine whether it is an intended asset, an accidental duplicate, or unrelated content;
5. if it is required, export it without moving or modifying the original Figma object.

If its purpose cannot be established, mark it as **Uncertain** rather than assuming.

## Export Selection

Export the smallest appropriate source node that preserves the intended visual.

Prefer:

- the original image node when the design uses an image directly;
- the appropriate vector/illustration node when the visual is vector-based;
- the complete composed visual when multiple layers together form the required asset.

Do not export an entire section/frame when only one image is required unless the task explicitly requires the complete composition.

## Export Format

Choose the format based on the asset's actual implementation need and project conventions.

Typical guidance:

- **SVG** for appropriate vector graphics, icons, and illustrations where SVG is supported and intended.
- **PNG** for raster images requiring transparency or lossless output.
- **WebP/JPEG** only when appropriate to the project's image pipeline and the asset does not require transparency.
- Preserve the project's established asset format conventions when they exist.

Do not convert an asset merely for convenience when doing so could change visual fidelity.

If the correct format cannot be established, inspect the project conventions and Task Specification. If still unresolved and the choice materially affects implementation, STOP and report the ambiguity.

## Destination Folder

Before exporting, determine the project's authoritative asset directory.

Use the existing project structure and conventions first.

Examples only:

- `src/assets/images/`
- `src/assets/illustrations/`
- `public/images/`
- `public/assets/`

These are examples, **not defaults**.

Never invent a project asset folder when the repository already establishes a convention.

If the correct destination cannot be determined, STOP and ask for the required project folder.

## File Naming

Use a stable, descriptive filename based on the asset's role.

Prefer names such as:

- `hero-background.webp`
- `about-team.png`
- `product-dashboard.svg`

Avoid:

- random generated names;
- Figma internal IDs as user-facing filenames;
- names such as `image1.png`;
- filenames that imply a meaning not supported by the design.

Preserve an existing project naming convention when one exists.

If the asset already has an authoritative project filename, do not rename it unnecessarily.

## Export Verification

After export:

1. Confirm that the file exists at the intended project path.
2. Confirm the exported file is readable.
3. Confirm the format is correct.
4. Confirm the exported visual corresponds to the Figma source.
5. Confirm transparency/cropping where relevant.
6. Confirm the asset was not accidentally exported at an unusable scale or quality.
7. Record the Figma source node/page and project destination.

If visual comparison is required, use appropriate Figma inspection/screenshot capabilities and the project's visual QA process.

## When Export Fails

If Figma MCP or the available export capability cannot export the required asset:

**STOP.**

Do not:

- retry blindly;
- fabricate a replacement;
- use a stock image;
- generate an approximate image;
- use a screenshot as a substitute unless the human explicitly authorizes it;
- modify the Figma design to work around the failure;
- continue implementation while pretending the asset is available.

Report:

1. **Asset required**
   - Clear description of the image/visual.

2. **Figma source**
   - File, page, frame/section, and node information when available.

3. **Why it is required**
   - The implementation location and visual role.

4. **Why automatic export failed**
   - Exact capability/tool limitation or error, if known.

5. **Project destination**
   - Exact folder where the human should place the exported file.

6. **Recommended filename**
   - The exact filename the implementation should use.

7. **Required format**
   - PNG/SVG/WebP/etc., when known.

8. **What to do next**
   - Export the asset manually and place it in the specified folder.
   - Do not continue past the blocked asset dependency until it is available if the asset is required for implementation.

Example:

```text
BLOCKED — MANUAL FIGMA ASSET EXPORT REQUIRED

Asset:
Hero background image showing the approved AURTX smart-home interior.

Figma source:
[File] → [Page] → [Homepage] → [Hero]
Node: [node ID/name if available]

Required by:
Homepage Hero implementation.

Export:
Recommended filename: hero-background.webp
Required format: WebP
Project destination: src/assets/images/

Reason:
The required Figma image cannot be exported with the available Figma MCP capability.

Action required:
Please export the image from Figma and place it at:
src/assets/images/hero-background.webp

Implementation must remain blocked until the asset is available.
```

## Do Not Confuse Export Failure With Missing Design Information

These are different states.

### Export failure

The correct asset has been identified, but it cannot be exported.

Status:
**BLOCKED — MANUAL EXPORT REQUIRED**

### Missing/ambiguous asset

The design does not provide enough evidence to determine which asset is authoritative.

Status:
**BLOCKED — ASSET IDENTIFICATION REQUIRED**

Report the competing candidates and why the correct one cannot be established.

### Asset already exists in project

The correct asset is already present and verified.

Status:
**AVAILABLE — NO EXPORT REQUIRED**

Record the existing project path and its verified relationship to the Figma design.

## Agent Responsibilities

### Researcher

The Researcher may:

- inspect Figma for required assets;
- identify authoritative assets;
- identify misplaced/off-canvas assets that are actually required;
- determine required export format where supported by evidence;
- determine the correct project destination from repository conventions;
- export assets when the workflow and tool permissions allow;
- include asset requirements in task-specific instructions;
- report blocked manual-export requirements.

The Researcher must not redesign the Figma asset to make it easier to export.

### Implementer

The Implementer may:

- use this Skill when an approved Task Specification requires a Figma asset;
- export required assets when authorized and technically possible;
- use already-exported project assets;
- verify that the asset used in implementation matches the authoritative design asset;
- STOP when a required asset cannot be obtained.

The Implementer must not silently substitute missing assets.

### Verification / Visual QA

Verification or Visual QA may use this Skill when their assigned workflow requires checking asset provenance or re-exporting a known required asset.

They must not change the approved asset selection merely to make a visual comparison pass.

## Evidence Requirements

For each exported asset, record:

- Figma file/page;
- source node or identifiable location;
- asset description;
- export format;
- project destination;
- filename;
- export result;
- any relevant scaling/transparency/cropping decision.

Do not claim an asset was exported unless the resulting project file has been verified.

## Completion Standard

The Skill is complete only when:

- every required asset has been identified;
- misplaced/off-canvas required assets have not been incorrectly ignored;
- authoritative existing assets have been reused where appropriate;
- required assets have been exported successfully or explicitly blocked;
- every exported asset has a verified project destination;
- no unsupported asset substitutions were made;
- any blocked manual export is reported with the exact asset, format, filename, and project folder;
- the asset evidence is included in the relevant handoff.

## STOP Conditions

STOP immediately when:

- the authoritative asset cannot be identified;
- the required asset cannot be exported and no authorized alternative exists;
- the correct project destination is unknown;
- the required export format is materially ambiguous;
- export would require modifying the Figma design without authorization;
- the asset appears unrelated and its use cannot be established;
- the asset is required for implementation but is unavailable;
- tool behavior contradicts the applicable Figma MCP operating instructions.

Never hide a blocked asset dependency.
