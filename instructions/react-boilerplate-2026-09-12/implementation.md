# Task Specification

## Objective

Create a production-ready React boilerplate in this repository with Tailwind CSS, react-router-dom, and Zustand installed and configured. The main homepage at `/` must display `Hello World!`.

## Scope

### Included

A minimal client-side application, dependency manifest and lockfile, build/development tooling, strict TypeScript and lint configuration, entry HTML, route, homepage, small connected Zustand store, Tailwind styling, generated-file ignore rules, and concise project setup README. These are routine implementation choices supporting the requested boilerplate, not additional product requirements.

### Excluded

Figma and all Figma MCP tools; additional product pages/features; backend, APIs, database, SSR, authentication, persistence, analytics, assets or branding work; modifications to AGENTS.md, `.agents/`, `.codex/`, `docs/universal-system/`, other instruction packages, or existing unrelated changes; Git delivery, CI setup, hosting, and deployment. No independent Verification, Visual QA, Code Review, or Delivery stages or agents. Stop after the Implementer's handoff.

## Verified Context

Research on 2026-09-12 used `rg --files --hidden -g '!node_modules/**' -g '!.git/**'`, `git status --short`, and direct instruction reads. The repository contains Universal documentation, Skills, and custom agent definitions; no application source, package manifest, lockfile, assets, build or test configuration was found in the current working tree. There is no established frontend framework/language/package-manager convention to preserve.

Runtime versions observed: Node v25.3.0, npm 11.6.2, pnpm 10.15.0. These are observations, not a production Node recommendation. Select package versions with compatible engines/peers and document their supported Node range; do not upgrade the host runtime.

Existing unrelated working-tree state at research start:

- Deleted: `instructions/about-section-homepage/implementation.md`.
- Untracked: `.agents/skills/figma-asset-export/`, `.agents/skills/figma-use/`, `.codex/agents/implementer.toml`.

Preserve that state. In particular, do not restore the deleted earlier task package.

Authoritative technical sources inspected:

- [React: Build an app from scratch](https://react.dev/learn/build-a-react-app-from-scratch): a build tool is a supported starting point for a client application; this task does not need a full application framework.
- [Vite guide](https://vite.dev/guide/): React/TypeScript templates and dev/build/preview commands are supported; check the selected release's Node engines before installation.
- [Tailwind Vite installation](https://tailwindcss.com/docs/installation/using-vite): use `tailwindcss` plus `@tailwindcss/vite`, configure its Vite plugin, and import Tailwind in CSS.
- [React Router declarative installation](https://reactrouter.com/start/declarative/installation): wrap the client application in BrowserRouter. Current examples use `react-router`, but the human explicitly requires `react-router-dom`; retain that dependency and confirm its selected version exports the routing APIs used.
- [Zustand official README](https://github.com/pmndrs/zustand): create a typed hook store and consume selected state directly from a component; no provider is needed. The hosted getting-started page was unavailable, so the official repository README was used.

No package install or application checks occurred during research.

## Requirements

1. Install compatible stable releases of `react`, `react-dom`, `react-router-dom`, and `zustand` as direct application dependencies.
2. Configure a Vite React/TypeScript application at the repository root. Install only the necessary Vite React plugin, TypeScript/type packages, Tailwind Vite integration, and conventional ESLint tooling as development dependencies. Use pnpm consistently and generate `pnpm-lock.yaml`; record the package manager version.
3. Configure Tailwind using its current Vite integration and `@import "tailwindcss"` in an imported stylesheet. Use actual utility classes on the homepage. Do not add legacy Tailwind configuration or PostCSS/autoprefixer solely from outdated recipes.
4. Configure BrowserRouter and a declarative route with path `/` that renders the homepage. Import the routing APIs from the explicitly requested `react-router-dom` package, confirming selected release compatibility during implementation.
5. Create a minimal typed Zustand store holding the greeting `Hello World!`, and have the homepage select and render that value. A small typed setter may be provided as the store's mutation example; do not add controls, demo counters, persistence, or other UI to demonstrate it.
6. Provide dev, build, preview, typecheck, and lint scripts. The production build must type-check and emit static distributable assets. Keep configuration small and conventional.
7. Add concise setup documentation covering installation, local use, available scripts, output directory, selected runtime requirements, and the fact that static hosting needs an SPA fallback for future client routes. Do not add hosting configuration or deploy.

## Design / Figma References

None. The human expressly prohibits Figma access. The only prescribed visible content is `Hello World!`; no approved brand/design specification exists. Use plain readable text, neutral defaults and minimal spacing, without inventing a landing-page design.

## Existing Implementation

None to reuse. Preserve all existing workflow files and unrelated edits. Do not run a scaffolder in a mode that empties this nonempty repository. Prefer explicit file creation using apply_patch, then package-manager installation for the lockfile and dependencies.

## Assets

None required. No images, icons, logos, external fonts or generated assets. No asset Skill is needed.

## Responsive / Accessibility Requirements

Use `lang="en"`, UTF-8, a viewport meta tag, a meaningful document title, a main landmark and heading. Keep text readable with neutral high contrast and normal flow that fits small viewports. No custom breakpoint system, animation, or interactive design is required.

## Implementation Approach

Suggested compact file boundaries (small equivalent arrangements are allowed):

- Root: `package.json`, `pnpm-lock.yaml`, `index.html`, `vite.config.ts`, TypeScript configuration file(s), `eslint.config.js`, `.gitignore`, `README.md`.
- `src/main.tsx`: React createRoot, StrictMode, imported stylesheet, BrowserRouter and App.
- `src/App.tsx`: Routes with the `/` route.
- `src/pages/HomePage.tsx`: semantic homepage reading its greeting through a store selector.
- `src/stores/useAppStore.ts`: minimal typed Zustand greeting state.
- `src/index.css`: Tailwind import and only necessary global defaults.
- A Vite client type declaration only if required by the chosen configuration.

Ignore node_modules, dist, build caches and local-only environment files without hiding project instructions. Avoid placeholder directories, barrel files, design systems, dependency wrappers, custom test infrastructure, or speculative modules.

Resolve exact stable versions through package metadata and compatibility evidence at installation; do not use unbounded `*` dependency declarations or claim versions were established by this research. The user has authorized the dependencies necessary for this boilerplate. If network/sandbox restrictions block installation, use the prescribed permission mechanism instead of silently changing scope.

## Acceptance Criteria

1. A fresh pnpm install from the manifest and lockfile can reproduce dependencies.
2. The application uses React; direct dependencies include react-router-dom and Zustand; Tailwind's Vite plugin and CSS import are wired into the build.
3. `/` resolves through the client router to a homepage displaying `Hello World!` as a heading obtained from the Zustand store.
4. At least one homepage Tailwind utility is compiled into production CSS.
5. Typecheck, lint and production build commands are provided and pass implementation self-checks, or a specific failure/blocker is reported without claiming completion.
6. No unrelated files or workflow infrastructure are changed; setup instructions are usable and the implementation handoff accurately lists work and evidence.

## Verification Plan

Only Implementer self-checks, as required by the implementation Skill and custom role:

- Run the configured typecheck, lint and build commands; report actual results.
- Check direct dependency resolution and the generated Tailwind CSS for a used utility.
- Perform a lightweight local runtime/route smoke check if an available browser/runtime mechanism permits it. Distinguish an HTTP 200/shell response from evidence of client-rendered text; never claim the latter from source inspection alone. Do not introduce browser/test dependencies solely for this task; report any unobserved browser behavior honestly.
- Inspect the changed files and diff for accidental scope changes. This is implementation self-inspection, not an independent Code Review.

Do not load or execute the independent Verification, Visual QA, Code Review or Delivery Skills, dispatch other agents, or continue the workflow after the Implementation Handoff. No test suite or separate verification instruction file is needed for this minimal task.

## Risks

Dependency/engine compatibility must be confirmed at installation; network access may require platform approval. No existing application can be overwritten, but existing workflow content and the deleted prior instruction file must be preserved. No deployment environment is specified or validated.

## Assumptions

No unresolved material assumptions. Vite, TypeScript, pnpm, and the greeting store are explicitly recorded routine choices for this greenfield boilerplate, not claims of existing project conventions. Production-ready here means a maintainable, reproducible, buildable frontend starter within the stated scope, not deployment approval or an audit of every production concern.

## Open Questions

None blocking implementation. Exact compatible package versions are to be resolved during installation. Browser execution availability affects evidence reporting, not the ability to create the specified boilerplate.

## Readiness

READY

## Required Implementer Skills

Only `frontend-implementation`, at `.agents/skills/implementation/SKILL.md`. Its implementation checks are sufficient for this controlled workflow. Do not assign design, assets, independent verification, review or delivery Skills.

## Exact Required Reads

Task-specific instruction file and canonical Task Specification: `instructions/react-boilerplate-2026-09-12/implementation.md` (this entire file, including the Research Handoff below).

Governing context: `AGENTS.md`, `docs/universal-system/workflow.md`, `docs/universal-system/safety.md`, `docs/universal-system/handoff-protocol.md`, and `.agents/skills/implementation/SKILL.md`. Honor the custom Implementer role loaded by the runtime. Inspect any new scoped AGENTS.md or implementation files if repository state changes before implementation.

## Implementer Prompt

Implement the READY Task Specification in `instructions/react-boilerplate-2026-09-12/implementation.md` in the current repository. Read that exact entire file (including its Research Handoff), `AGENTS.md`, `docs/universal-system/workflow.md`, `docs/universal-system/safety.md`, `docs/universal-system/handoff-protocol.md`, and `.agents/skills/implementation/SKILL.md`. Use only the required frontend-implementation Skill. Build the specified minimal Vite/TypeScript React application with pnpm, Tailwind Vite integration, react-router-dom routing at `/`, and a typed Zustand greeting store consumed by the homepage displaying `Hello World!`. Include only necessary frontend tooling/configuration and setup documentation. Resolve compatible stable dependency versions and install them; this dependency setup is authorized by the user. No design/Figma reference or assets apply; do not use Figma or Figma MCP tools. Preserve all existing unrelated edits and instruction packages, particularly the already-deleted About instruction file. You are not alone in the repository; do not revert others' changes. Follow the file boundaries, constraints and acceptance criteria in the specification. Run only proportionate Implementer self-checks and report results or limitations honestly. No additional agents, independent Verification, Visual QA, Code Review or Delivery. Return your complete custom-role Implementation Handoff and stop; no later workflow stages. No unresolved blocking questions exist in the prepared contract.

## Research Handoff

- **Task:** Prepare the controlled React boilerplate task for the custom Implementer.
- **Sources Inspected:** Human request; AGENTS.md; Universal workflow, handoff-protocol, agent-roles, architecture, safety and task-specification documents; Research, Task Specification and Implementation Skills; `.codex/agents/implementer.toml`; repository inventory and Git status; installed runtime versions; official technical sources linked above.
- **Verified Findings:** No existing application/manifests/assets/checks; runtime tools are available; baseline unrelated changes are listed above. Universal workflow supports bounded task preparation and implementation handoffs. The custom Implementer role distinguishes self-checks from independent stages.
- **Relevant Existing Implementation:** None. Existing operating infrastructure must remain intact.
- **Requirements Identified:** React, installed/configured Tailwind, react-router-dom and Zustand, `/` homepage with exact greeting, production build tooling. The specification records necessary minimal setup choices.
- **Design / Figma Findings:** Figma explicitly excluded; no design dependency.
- **Assets:** None.
- **Constraints:** Research writes only this new task package. Implementer owns application/bootstrap files, preserving baseline state. No later workflow stages or delivery.
- **Acceptance Criteria / Verification Requirements:** See the corresponding sections above; self-checks only, with truthful browser-evidence limitations.
- **Risks:** Package compatibility and installation access; preserve unrelated files.
- **Assumptions:** No material unresolved assumptions; routine choices distinguished from verified conventions.
- **Open Questions:** None blocking.
- **Readiness Assessment:** READY for Implementation, not an assertion that the application has been implemented or verified.
- **Instruction Package:** `instructions/react-boilerplate-2026-09-12/`; only `implementation.md`, containing canonical Task Specification, execution instructions, exact reads, prompt and this handoff. No empty design/assets/verification files.
- **Required Implementer Skills:** `frontend-implementation` only.
- **Required Instruction Files:** `instructions/react-boilerplate-2026-09-12/implementation.md`; governing reads listed in Exact Required Reads.
- **Implementer Prompt:** Use the complete preceding Implementer Prompt section verbatim.
