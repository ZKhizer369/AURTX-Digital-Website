# AURTX Digital

Minimal React and TypeScript starter using Vite, Tailwind CSS, React Router and Zustand. The `/` route displays `Hello World!` from a typed Zustand store.

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
