# Manual asset validation — 2026-09-14 resumption

## Authority and result
User supplied src/assets/homepage/images and src/assets/homepage/icons and authorized reuse of instructions/aurtx-homepage/evidence/figma-hero-background.png for hero, growth and sixth-card backgrounds, cropped to design. These supplied equivalent exports supersede prior suggested filenames and remote downloads. Parent accepted supplied static video scenes without Figma's decorative player overlays. No asset blocker remains for this authorized scope.

Research read all PNG headers, opened every supplied PNG through view_image, inspected SVG dimensions/content and matched meaningful roles to prior Figma reference. SVG markup was inspected; SVG files were not rendered in-browser in this research pass. Browser asset rendering and final crop fidelity remain implementation/visual QA checks.

## Images mapping
All paths below start src/assets/homepage/images/.
| Filename | Pixel dimensions | Role / use |
| --- | --- | --- |
| banner-hero.png |751×858|Hero man holding laptop/dashboard; already cropped to exact source frame866:2609. Use directly at frame ratio; do NOT reapply earlier raw-image left-96.91% crop.|
| banner-avatar1.png |70×70|Hero first/left avatar, standing man in dark suit.|
| banner-avatar2.png |70×70|Hero second avatar, woman with dark hair.|
| banner-avatar3.png |70×70|Hero third avatar, man in gray jacket.|
| banner-avatars4.png |70×70|Hero fourth/right avatar, blond woman. Preserve actual plural filename.|
| video-placeholder1.png |386×340|Left static preview: tilted WhatsApp phone on pedestal.|
| video-placeholder2.png |387×340|Middle static preview: office worker at dashboard monitor.|
| video-placeholder3.png |387×340|Right static preview: dashboard monitor on desk.|
| products-img1.png |417×556|Aurtx Digital: hand holding Overview phone. Transparent cutout; label built in DOM.|
| products-img2.png |501×485|Aurtx AI: laptop showing conversation screen. Transparent surrounding margins are part of supplied composition.|
| products-img3.png |348×460|Aurtx Mobile: hand holding tilted Overview phone. Transparent cutout; preserve ratio.|
| connect-avatar1.png |44×44|Growth connection panel lower-left first portrait.|
| connect-avatar2.png |44×44|Growth connection panel lower-left second portrait.|
| connect-avatar3.png |63×63|Pakistan-flag circular avatar; reuse twice in overlapping lower-right avatar pair. This is NOT WhatsApp iconography.|
| connect-avatar4.png |59×59|Single male review portrait beneath Thanks bubble.|
| connect-bg.svg |718×492 viewBox|Composed globe/orbits for growth connection panel. Contains one215.44-square embedded raster positioned251/245 at opacity0.3 with inner-shadow filter, one ellipse path and two circle outlines (#A8B8B6). Already contains all three orbits plus globe; do NOT redraw/double them. Contains no avatar, review star, bubble or heading text.|

PNG visuals match the corresponding source imagery in retained Figma reference. Products are image-only, without cards/labels; render white rounded cards and textual brand overlays separately. Video PNGs contain NO play/skip/progress/time controls. Per parent interpretation of user's supplied static images, use these approved scenes directly; do not fabricate controls. This is an explicit visual deviation from decorative player controls in Figma and no longer a missing asset.

## Icons mapping
All paths below start src/assets/homepage/icons/.
| Filename | SVG viewBox size | Role |
| --- | --- | --- |
| logo.svg |86×64|Header colored logo; embedded PNG within SVG.|
| logo-white.svg |93×64|White footer logo; embedded PNG within SVG. Can reuse the actual white logo for product black badge if needed, preserving visible aspect rather than drawing a new mark.|
| team-icon1.svg |54×53|Never Miss a Message, dark teal communication/WhatsApp-style mark; SVG clip ID includes866_2728.|
| team-icon2.svg |56×46|Work Better Together, people mark; clip ID includes866_2745.|
| team-icon3.svg |55×54|Let AI Help You Reply, communication mark; clip ID includes866_2764.|
| team-card-bg.svg |81×102|One pale outlined cube (#EAF4F1). Tile/repeat this exact supplied primitive to form the feature-card pattern, matching source geometry; do not stretch one cube into the entire pattern.|
| built-icon1.svg |27×27|Business Owners, white briefcase.|
| built-icon2.svg |37×26|Team Leads, white group.|
| built-icon3.svg |28×28|Agents, white person.|
| built-icon4.svg |31×31|Customer Support, white headset.|
| built-icon5.svg |33×33|Business Managers, white chart.|
| facebook.svg |10×16|Footer Facebook.|
| twitter.svg |16×14|Footer Twitter bird.|
| linkedin.svg |17×17|Footer LinkedIn.|
| instagram.svg |17×17|Footer Instagram.|
| review-star.svg |20×19|Full star in growth review bubble.|
| review-half-start.svg |20×20|Half-star in growth review bubble; preserve supplied filename typo.|

The smaller icon dimensions represent tight glyph bounds. Place glyphs within their intended design-sized icon container without distorting aspect ratio or forcing every tight glyph to a square. White built icons require the dark teal badge backgrounds from design. Logos' embedded image hrefs are data URLs, so they have no external image dependency.

## Background authorization and cropping
Source evidence PNG1543×1321 was already visually verified as exact dark vertical ribbed artwork. User expressly authorizes this same file for all three locations. Implementation may copy exact bytes into its permanent asset directory (Research does not modify source assets).
- Hero: match full1543×1321 composition.
- Sixth card: clip to387×277 reference shape and compare visible rib spacing/highlight to design; hover keeps text/number as real DOM.
- Growth chart: clip to450×516 rounded area and match rib/background balance behind real text/bars.
Do not replace the supplied artwork with CSS gradient approximations. Since reuse is authorized, separate hover/growth PNG exports and shader runtime are unnecessary.

## Boundaries and pending validation
No supplied asset changed; no network used; no dependencies/source/Git changes by Research. Only this mapping and resumption handoff were written. Required browser loading, transparency, cropping, responsive scaling and section visual comparison remain downstream evidence; Research asset identification does not claim those checks passed.

