# Homepage polish

Readiness: READY for implementation. Actual MP4 playback verification remains pending user-supplied media; missing files do not block the authorized controls implementation.

## Objective and scope

Apply the user's drawer, video, footer social-link, and growth-arrow polish to the current working tree. Preserve existing user edits, content, section layouts, and responsive behavior outside these changes. This task supersedes the old rightward drawer-closing requirement. No Figma research, new dependencies, unrelated refactor, workflow edits, or Git delivery.

Read `AGENTS.md`, README Technology Contract, this specification, and `.agents/skills/implementation/SKILL.md` (frontend-implementation). React/TypeScript section components and Tailwind remain the implementation pattern. `src/index.css` remains the only global stylesheet; express scoped styling with Tailwind. No additional Implementer skill is needed: existing assets and local Remix glyphs suffice.

## Relevant implementation

- `src/components/homepage/Header.tsx`: drawer/hash state, scroll lock, initial focus, focus trap, Escape/backdrop/link close; mobile/tablet breakpoint is below 1100px, drawer width 75vw, transition 400ms. Current closing transform is incorrectly `translateX(100vw)` for the new request.
- `src/components/homepage/VideoSection.tsx`: three native-control videos, posters, 3/2/1-column responsive grid (1100px/640px boundaries), 387:340 card aspect.
- `src/components/homepage/Footer.tsx`: four social images currently generated as spans with a map. Preserve surrounding working-tree footer styling.
- `src/components/homepage/GrowthSection.tsx`: first growth card contains `More Efficiency ↑`; preserve chart and surrounding working-tree styling.
- `src/components/homepage/RemixIcon.tsx`: typed local glyph helper; extend its map from verified installed Remix font mappings. `assets.ts` already resolves pictures/icons and optional MP4 URLs.

## Requirements and acceptance

### Drawer

- Open from the left and close smoothly back off the left edge. Keep the panel visible for the closing animation, then make it noninteractive/hidden; no rightward jump or flash when reopening rapidly.
- Every close path (button, Escape, backdrop, selected link) follows the same closing behavior. Preserve focus return, initial focus, keyboard trap, scroll restoration and desktop navigation.
- Active drawer link has existing design green (`#0b6b53`, already used by the header) background and white text, with existing underline behavior retained. Scope the filled treatment to drawer widths; desktop navigation remains unchanged.
- Use the available Remix `close-large-line` for a cleaner close icon within the existing accessible close button. Provide coherent hover/focus treatment without changing drawer placement or width.

### Custom video controls

Reference image 1: `C:/Users/ZKAURT~1/AppData/Local/Temp/codex-clipboard-209d7417-3917-40a2-92e9-2f5039d7e489.png`.

- Replace native controls with functional custom overlays: translucent dark/glass circular center play/pause control, smaller backward/forward circles beside it, fullscreen and vertical-overflow controls at top right, a slim seek/progress control across the bottom, and elapsed/total time above its right end. Use the existing posters and rounded dark card treatment from the reference.
- Controls operate each video's actual media element independently. Use `autoPlay`, `muted`, and `playsInline`; rejected autoplay must leave a usable play button and accurate state. Derive play/pause, progress, duration, mute and fullscreen state from actual media events/API results, not optimistic fake values.
- Practical interpretation of the screenshot, not a claim about its original interaction: backward/forward seek by minus/plus 10 seconds, clamped to known valid duration; expose explicit accessible labels. Overflow opens a compact settings popover containing mute/unmute and playback speed options (0.5x, 1x, 1.5x, 2x). It must be operable, dismiss on Escape/outside click, and reflect real state. Do not create playlist/next-video semantics or nonfunctional menu items.
- Seek control is keyboard accessible and bound to actual current time; media buttons have accessible names, focus treatment, and usable touch targets. Fullscreen targets the card so its overlay remains available; handle unsupported/rejected requests without uncaught errors.
- Preserve responsive card layout and contain the video within its box without distortion (`object-contain` for video content; letterboxing is acceptable). Controls remain legible and within bounds at 320px phone width. Respect existing reduced-motion rules.
- Until an MP4 is present/loadable, retain its poster, show an honest unavailable status, disable media-dependent controls, and show unknown total duration (such as `--:--`). Do not copy the reference's `1:48 / 4:32`, invent playback, source content, or download replacement footage.

### Footer and growth

- Write four separate explicit `<a href="#">` elements for Facebook, Twitter, LinkedIn and Instagram, each wrapping its existing image. No social map. Preserve visual spacing/hover treatment by adapting span selectors to anchors; provide accessible names. The user will supply final URLs later.
- Reference image 2: `C:/Users/ZKAURT~1/AppData/Local/Temp/codex-clipboard-a7065881-2b4a-4cc8-8af1-4f4eee4e72fe.png`. Replace only the textual up arrow after More Efficiency with Remix `arrow-up-line`; smoothly lift the arrow a small distance on hover of the whole first growth card, then return it. Keep its baseline/size visually aligned to the label and respect reduced motion.

## Assets and verified glyphs

Existing verified posters: `src/assets/homepage/images/video-placeholder1.png`, `video-placeholder2.png`, `video-placeholder3.png`. Existing social SVGs: `src/assets/homepage/icons/{facebook,twitter,linkedin,instagram}.svg`.

User's MP4 destination, left to right:

- `C:/Users/ZK AURTX/Projects/AURTX-Digital-Website/src/assets/homepage/videos/preview-1.mp4`
- `C:/Users/ZK AURTX/Projects/AURTX-Digital-Website/src/assets/homepage/videos/preview-2.mp4`
- `C:/Users/ZK AURTX/Projects/AURTX-Digital-Website/src/assets/homepage/videos/preview-3.mp4`

Directory currently contains only README.md. The `video(index)` helper automatically imports these exact filenames when present. Report these filenames/directory to the user in the completion handoff.

Verified in installed `node_modules/remixicon/fonts/remixicon.css`: arrow-up-line EA76; close-large-line F4C7; play-fill F00A; pause-fill EFD7; skip-back-fill F13F; skip-forward-fill F143; fullscreen-line ED9C; fullscreen-exit-line ED9A; more-2-fill EF76; volume-mute-line F29E; volume-up-line F2A2. Reuse the existing font face; do not import another stylesheet.

## Verification and handoff

- Run appropriate typecheck/lint/build checks under available authorization, plus source diff whitespace check. Prior refactor handoff records an environment/approval build failure; Parent owns current permission status. Do not treat historical failure as permission to retry rejected execution.
- Independently inspect desktop, tablet, phone (including 320px) rendering and drawer close/reopen animation; verify all close paths, active fill/underline, keyboard focus, and no horizontal overflow.
- Verify four explicit footer anchors and growth-arrow hover/reduced-motion behavior. Compare only the requested reference features, preserving current surrounding layout.
- With missing MP4s, verify poster/unavailable state, disabled controls, and lack of fake durations; distinguish this from playback evidence. If real supplied media becomes available, verify muted autoplay, play/pause, time updates, bounded seeking, speed, mute and fullscreen independently for each card. Report any unavailable runtime evidence explicitly.
- Implementation handoff must enumerate actual changes/checks, preserved user edits, missing-media limitation, and exact MP4 paths. No test/build/visual/human-approval claims without evidence.

## Material notes

No implementation blocker. Seek interval, settings contents, close glyph and small hover lift are explicit practical interpretations of the requested working controls/polish, not additional design-source findings. Missing media blocks full playback verification only, as authorized by Parent. No source changes or verification runs were performed during research.
