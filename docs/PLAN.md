# MEDVIA: Plan (Week 4)

**Target: PR pipeline finishes in under 5 minutes with cache, at least 10 tests, zero `any`, a failing PR cannot merge.**

## Plan in five lines
1. Unblock installs: sync lockfiles, delete pnpm files and `dist.zip`, add a root `.gitignore`, fix lint errors.
2. Make it deploy-ready: `VITE_API_URL`, env-driven CORS and port, `.env.example`, `vercel.json`, footer commit SHA.
3. Strict TypeScript in both packages, with Prettier and ESLint, logging every error count in `docs/TYPE-ERRORS.md`.
4. Vitest tests, then `ci.yml` (cache, Node 20 and 22 matrix) and `deploy.yml` (Vercel preview and production, gated on CI).
5. Protect `main`, break a PR on purpose, rehearse and time a rollback, then write the README.

## Baseline (measured before any code change)
Measured on the project zip, using static checks on the files. Install, lint and build numbers are recorded in the
README table after they are run in Step 2.

| Item | Baseline |
|---|---|
| FrontEnd source | 24 TypeScript files, 7 JavaScript files, 1,719 lines |
| BackEnd source | 8 JavaScript files, 282 lines, no TypeScript, no `tsconfig` |
| Lockfiles | `package-lock.json` and `pnpm-lock.yaml` in both packages |
| FrontEnd `package-lock.json` vs `package.json` | out of sync: still lists `@react-spring/web`, lacks `typescript` and `@types/react-helmet` |
| Tests | none; backend `test` script is the npm placeholder |
| `.github/` | none |
| API URL, CORS origin, port | hardcoded (`localhost:8000`, `localhost:5173`, `8000`) |
| Backend `start` | runs `nodemon` |

## Week 3 reflection (fill in yourself)
**Three things I did well**
1. FILL IN
2. FILL IN
3. FILL IN

**Two gaps**
1. FILL IN
2. FILL IN

**New skill practised:** release engineering with GitHub Actions (CI, deploy gating, protected branches, rollback).
