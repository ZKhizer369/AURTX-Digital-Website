# Asset requirements and export evidence

## Current user-supplied assets
The user supplied manual exports in src/assets/homepage/images/ and src/assets/homepage/icons/ and explicitly authorized the existing evidence/figma-hero-background.png as the shared source for banner, growth and sixth-card hover backgrounds. Use the current manual-assets.md mapping after validation. Preserve supplied names and files. The source maps and unavailable download URLs below are historical provenance, not a demand to redownload or recreate separate backgrounds. Match background placement/cropping separately for each section.

Use exact Figma file OReDRj53qNvXRNRzcV7Up3, page Project Web apps (573:4), target 866:2599. Parent established src/assets/homepage/; no previous project asset convention existed. Implementation owns permanent asset download and verification. Research inspected successful asset exports but did not write source assets.

figma-reference.md contains every generated img constant and exact temporary asset URL with usage and node IDs. Download needed bytes promptly; URLs expire (~7 days). Use descriptive local filenames and record source→destination in Implementation Handoff. Reuse repeated URLs as one file. Do not recreate SVG icons/paths or logos.

## Key sources
| Role | Source | Suggested destination |
| --- | --- | --- |
| Hero man and dashboard composed crop | 866:2609 / imgImage | src/assets/homepage/hero-person-dashboard.png |
| Header logo | 866:2640 / imgLogoColored1 | src/assets/homepage/logo-colored.png |
| Hero avatars | 866:2623–2626 | src/assets/homepage/hero-avatar-[1-4].png |
| Static player compositions left/middle/right | 866:2690 / 866:2680 / 866:2700 | src/assets/homepage/video-preview-[1-3].png |
| Product imagery | 866:2779,866:2781,866:2784 | src/assets/homepage/product-digital.png, product-ai.png, product-mobile.png |
| Feature icons/pattern | 866:2728,866:2745,866:2764,866:2719 | descriptive SVG files |
| Team role icons | reference nodes within866:2916 | descriptive SVG files |
| Footer logo/socials | 866:3018 and866:3023 onward | descriptive PNG/SVG files |

For player compositions use download_assets on the parent Mobile node, preserving exact static controller artwork without rendering fake interactive controls. For hero image raw PNG use inspected cropping (frame751×858, image approximately204.69% width left-96.91%) or exact node export. Avoid exporting text-bearing entire sections as one image.

## Verified real decorative PNG export URLs
These exports are exact source node renders, not screenshot substitutes or approximations. Parent approved their use in place of experimental shader-runtime dependencies for static decorative artwork.
- Hero background 866:2603, 382493 bytes: https://www.figma.com/api/mcp/asset/5d1478e5-204c-46c6-86ba-4f216badd4d8.png → src/assets/homepage/hero-ribbed-background.png
- Sixth hover background 866:2872, 82982 bytes: https://www.figma.com/api/mcp/asset/b1f84fd4-b818-4fa5-9c4e-105703de7c65.png → src/assets/homepage/why-hover-background.png
- Growth background866:2968, 76464 bytes: https://www.figma.com/api/mcp/asset/267d93ad-ce81-4310-be26-e59f4e0ece64.png → src/assets/homepage/growth-background.png

Match exported node bounds/position and clipping to reference. Hero background source1543×1321; sixth background387×277 with effect overflow. Growth background extends beyond450×516 crop; preserve its offset from reference.

Read-only export tool works; shell download requires network escalation in this session. Full reference screenshot downloaded successfully into evidence/figma-desktop-reference.png. This screenshot is QA evidence only, never the homepage implementation.

Verify each asset exists, format/dimensions, crop/transparency, load and visual identity. Retrieve current URL again from the exact source node if expiry occurs. Do not silently substitute. Fonts Inter/Lato/Sora need actual available web font files or an authoritative font distribution; Helvetica artwork may remain flattened in exact static player export. No arbitrary font replacements.
