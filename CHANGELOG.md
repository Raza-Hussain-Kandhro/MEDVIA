# Changelog

All notable changes to MEDVIA. Format follows Keep a Changelog.

## [Unreleased]

### Added

- GitHub Actions: `ci.yml` (lint, format check, typecheck, tests, build on Node 20 and 22) and `deploy.yml` (Vercel preview and production, only after CI succeeds).
- Tests: Vitest and Testing Library in FrontEnd (cart, helpers, product card, checkout form), Vitest and supertest in BackEnd (CORS, health, provinces).
- docs: rollback runbook, manual checklist, key decisions, video outline.
- docs: scope statement, plan, gap analysis, type-error log and changelog skeletons.
- Root `.gitignore`; `.env.example` for FrontEnd and BackEnd; `vercel.json` SPA rewrite.
- Footer shows the build's short commit SHA (`VITE_COMMIT_SHA`) so a deploy or rollback is visible.
- `GET /api/health` returning status and commit SHA.
- Strict TypeScript (`strict`, `noUncheckedIndexedAccess`) for FrontEnd and BackEnd; typed Redux store and hooks.
- ESLint (typescript-eslint) and Prettier with `lint`, `typecheck`, `format`, `format:check` scripts in both packages.

### Changed

- README rewritten with a before and after table, limitations and an original-versus-mine section.
- `vercel.json` disables Vercel's own Git deployments so releases only go through the pipeline.
- API base URL comes from `VITE_API_URL`; backend port, CORS origins (supports `*.vercel.app` style patterns) and
  database name (`MONGO_DB_NAME`) come from environment variables.
- Backend split into `app.ts` (Express app) and `server.ts` (database connection and listen).
- Backend `start` runs `node dist/server.js`; `dev` uses `tsx watch`.
- Database name now defaults to `MEDVIA`. Set `MONGO_DB_NAME=BIOVA_SURGICALS` to keep existing data.

### Fixed

- BackEnd lint could not start: the ESLint config is now `eslint.config.mjs` because the package is CommonJS.
- FrontEnd lint warnings: documented override for the two files that export shared helpers beside components.
- Contact form: phone and company are optional in the form but were required by the database model, so blank
  values caused a server error. They are now optional in the model.
- Products and blogs routes returned errors with HTTP 200; they now return HTTP 500 with a message.
- Removed leftover debug output and commented-out code.

### Removed

- `nodemon` (dev tool in production dependencies), unused `react-quill` and `react-icons`.
- `pnpm-lock.yaml` files, and the stale `package-lock.json` files (regenerate with `npm install`).
- `FrontEnd/VERSION.txt`.

### Security

- `GET /api/product_details` and `GET /api/all_blogs` no longer pass the request body into the database query.
