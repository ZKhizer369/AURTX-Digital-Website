# AURTX Digital

Minimal React and TypeScript starter using Vite, Tailwind CSS, React Router and Zustand. The `/` route displays `Hello World!` from a typed Zustand store.

## Technology Contract

### Core Stack

- Framework: React 19.3.0
- Language: TypeScript 6.0.3
- Build tool: Vite 8.3.0
- Routing: react-router-dom 7.18.3
- Package manager: pnpm 10.15.0
- Styling: Tailwind CSS 4.3.3

### Frontend Architecture

- Substantial pages must be composed from meaningful section-level React components.
- Page components should primarily compose their sections rather than contain the full implementation of every section.
- Reusable UI components should be extracted when reuse, responsibility, or interaction justifies the boundary.
- Do not create unnecessary micro-components for trivial markup.
- Keep component responsibilities cohesive and understandable.
- Organize components and folders around meaningful responsibility, feature, or page-section ownership.
- Preserve sound existing project conventions unless an explicit task requires otherwise.

### Styling Standard

- Tailwind CSS is the primary styling system for frontend implementation.
- Prefer Tailwind utilities and the project's existing design tokens/configuration.
- Do not create large custom CSS files for styling that Tailwind can reasonably express.
- Avoid introducing a second styling system unnecessarily.
- Custom CSS is permitted only where Tailwind does not reasonably provide the required capability or where a project-level abstraction genuinely justifies it.

### Project Status

The standards above are required conventions, not a statement that the current implementation already complies. The repository uses the Core Stack listed above. Tailwind CSS is configured through `@tailwindcss/vite` in `vite.config.ts` and imported in `src/index.css`.

The current homepage keeps most section implementations in `src/pages/HomePage.tsx` and relies primarily on the large custom stylesheet `src/pages/homepage.css`. It does not yet comply with the section-level component architecture or Tailwind-first styling requirements. Earlier starter descriptions in this README do not describe the current homepage implementation. Bringing the homepage into compliance requires a separately scoped implementation task; this documentation change does not perform that work.

## Requirements

Use pnpm **10.15.0** and Node.js **24.x**. The selected tooling supports Node `^20.19.0 || ^22.13.0 || >=24`; the host runtime does not need to be changed to use this project if it satisfies that range.

Dependencies are pinned in `package.json` and `pnpm-lock.yaml`. TypeScript 6.0.3 is selected to stay within typescript-eslint's supported TypeScript range.

## Local setup

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server with hot updates. |
| `pnpm typecheck` | Check application and Vite configuration types. |
| `pnpm lint` | Run ESLint with no warnings allowed. |
| `pnpm build` | Type-check and produce static assets in `dist/`. |
| `pnpm preview` | Preview an existing production build locally. |

## Structure

- `src/main.tsx`: application entry and BrowserRouter.
- `src/App.tsx`: route declarations.
- `src/pages/HomePage.tsx`: homepage with Tailwind utilities.
- `src/stores/useAppStore.ts`: typed greeting state.
- `src/index.css`: Tailwind CSS import.

Static hosting will need an SPA fallback to `index.html` for direct navigation to future client routes. `pnpm preview` is a local preview server; no hosting or deployment configuration is included.
