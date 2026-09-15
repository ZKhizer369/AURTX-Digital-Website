---
name: figma-asset-export
description: Export a specifically identified frontend asset from Figma using bounded Figma operations. Use only when an approved task requires an asset that is not already available in the project.
---

# Figma Asset Export

## Purpose

Provide a bounded procedure for exporting a known, required asset from Figma.

This Skill is for **asset retrieval**, not general Figma research.

Use it only when:

- the asset is required by the approved task;
- the asset has been identified;
- the authoritative Figma source is known or can be resolved from the task/research handoff;
- the asset is not already available as a verified project asset.

---

# Core Rules

1. Export only assets required by the current task.
2. Prefer an existing verified project asset over Figma export.
3. Use the narrowest known Figma source.
4. Do not explore unrelated Figma pages, frames, or assets.
5. Do not browse an entire Figma file to discover assets unless the Task Specification explicitly requires bounded discovery.
6. Do not modify the Figma design.
7. Do not substitute missing assets.
8. Do not repeatedly retry failed exports.
9. Verify the exported file before reporting success.
10. Stop immediately when the asset is successfully obtained or becomes blocked.

---

# Relationship to `figma-use`

`figma-use` defines the low-level rules for operating Figma MCP.

Before using Figma MCP:

- follow `figma-use`;
- use the exact file/page/node references available;
- follow the tool's required operation sequence.

This Skill defines only:

- whether export is needed;
- which asset should be exported;
- the bounded export procedure;
- where the result belongs;
- what constitutes success or blockage.

Do not duplicate `figma-use` instructions here.

---

# Preconditions

Before starting an export, establish:

### Required Asset

The exact asset required by the current task.

### Figma Source

The narrowest known:

- file;
- page;
- frame;
- node;
- component;
- image node.

### Project Destination

The existing project asset directory.

### Filename

The intended project filename.

### Format

The required or project-supported export format.

If any of these cannot be established and the missing information materially affects the export:

`STOP → REPORT GAP → ESCALATE`

Do not begin broad Figma exploration to compensate for missing task information.

---

# Step 1 — Check the Project First

Before using Figma:

1. inspect the relevant project asset location;
2. determine whether the required asset already exists;
3. verify whether the existing asset corresponds to the required design asset.

If a verified asset already exists:

`AVAILABLE — NO FIGMA EXPORT REQUIRED`

Stop.

Do not create a duplicate.

---

# Step 2 — Open the Exact Figma Source

Use the exact Figma reference supplied by:

1. Task Specification;
2. Research Handoff;
3. approved task-specific instruction.

Inspect only the required node and the minimum surrounding context necessary to confirm its identity.

Do not:

- browse unrelated pages;
- inspect the complete design system;
- enumerate all assets;
- search the entire file;
- inspect unrelated components.

---

# Step 3 — Handle Off-Canvas or Misplaced Assets

An asset being outside a frame does not automatically mean it is irrelevant.

If the approved task or authoritative Figma context identifies an off-canvas/misplaced asset as required:

- inspect the specific object;
- confirm its identity;
- export that object directly.

Do not move, crop, redesign, or reposition it in Figma.

If the object is not clearly connected to the approved task:

`STOP → REPORT AMBIGUITY`

Do not explore the surrounding file indefinitely to determine its purpose.

---

# Step 4 — Select the Export Node

Export the smallest Figma node that represents the required asset.

Prefer:

- original image node for a direct image;
- vector node for a vector asset;
- complete grouped/composed node when multiple layers form one required visual.

Do not export an entire page or section when a smaller source represents the required asset.

Do not export additional assets “while you are there.”

---

# Step 5 — Select the Format

Use the format required by:

1. Task Specification;
2. project convention;
3. asset characteristics.

Typical choices:

- SVG → appropriate vectors/icons/illustrations;
- PNG → raster assets requiring transparency/lossless output;
- WebP/JPEG → appropriate raster assets when supported by the project.

Do not perform unnecessary format conversions.

If the correct format remains materially ambiguous:

`STOP → REPORT FORMAT AMBIGUITY`

---

# Step 6 — Export

Perform the smallest supported Figma export operation.

After export, verify the result.

Do not perform exploratory export operations.

Do not export multiple formats unless the task explicitly requires multiple formats.

---

# Export Retry Limit

If export fails:

1. identify the concrete failure;
2. determine whether one meaningful change can resolve it;
3. make **one** meaningful retry.

If the retry fails:

`STOP → BLOCKED`

Do not:

- repeatedly retry;
- try arbitrary export formats;
- repeatedly reopen the same node;
- explore unrelated Figma objects;
- attempt multiple speculative workarounds.

Use:

`ATTEMPT → MEANINGFUL RETRY → STOP`

---

# Step 7 — Verify the Result

Verify only the exported asset.

Check:

- file exists;
- file is readable;
- format is correct;
- expected visual is present;
- transparency/cropping is appropriate where relevant;
- quality is usable;
- destination is correct.

Do not perform broad visual QA here.

Do not inspect unrelated assets.

If visual fidelity of the complete page is required, that belongs to `frontend-visual-qa`.

---

# Step 8 — Record Provenance

Record a compact asset record:

```text
Asset: [asset name]
Figma source: [file/page/node]
Format: [format]
Project path: [path]
Status: VERIFIED