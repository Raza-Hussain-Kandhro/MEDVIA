# MEDVIA: Week 4 CI/CD Readiness Audit and Action Plan

**Project audited:** `biovasurgicals-site-main` (React 19 + Vite 6 + Tailwind 4 frontend, Node/Express 4 + Mongoose backend)
**Target task:** Week 4, CI/CD pipeline with GitHub Actions, strict TypeScript constraint
**Renaming to:** MEDVIA

## 1. Verdict

**The project is a good base but is not ready for Week 4. It meets 0 of the 5 required features today.**

It is a real, working application (products, cart, checkout, contact form, blog, four Mongoose models), so it is a credible "established medical equipment supplier" site. But it has no CI, no tests, no TypeScript, no deploy configuration, and it cannot even install cleanly in a fresh environment. Everything the task grades is still to be built, and several things must be fixed before a pipeline can run at all.

### What I measured (run on the uploaded code)

| Check | Result |
|---|---|
| `npm ci` on a clean checkout | **Fails** (peer dependency conflict: `@react-spring/web@9.7.5` supports React up to 18, project uses React 19) |
| `npm ci --legacy-peer-deps` | Installs |
| `npm run lint` | **2 errors**: unused `animated` in `SplitText.jsx`, unused `relatedPosts` in `SingleBlog.jsx` |
| `vite build` | Passes in 6.9 s: JS 458 KB (143 KB gzip), CSS 47 KB |
| TypeScript files / `tsconfig` | **0** |
| Test files / test framework | **0** (backend `test` script is the npm placeholder that exits 1) |
| `.github/` workflows | **None** |
| Prettier | Not installed |
| Size | about 3,400 lines of frontend source |

## 2. Requirement-by-requirement scorecard

| # | Week 4 requirement | Status | What is missing |
|---|---|---|---|
| 1 | Workflow running lint, tests, production build on every PR | Missing | No workflow, no tests, `npm ci` broken |
| 2 | Preview deploys per PR and protected `main` | Missing | No deploy config, API URL hardcoded to localhost, no SPA rewrite rule |
| 3 | Rollback procedure tested at least once | Missing | No deploy target, no way to prove which version is live |
| 4 | Scope statement written before you start | Missing | Must be committed first (git history is your proof) |
| 5 | Testing evidence with problems found and fixed | Missing | No tests. But the audit below already gives you real problems to fix and document |
| C | Strict TypeScript, count type errors caught | Missing | Whole project is JavaScript (frontend and backend) |
| S3 | ESLint + Prettier, at least 8 unit tests | Partial | ESLint exists (2 errors), no Prettier, 0 tests |
| S4 | Workflow with caching, matrix of 2 Node versions | Missing | |
| S5 | Branch protection: passing pipeline + 1 review | Missing | See the note on private repos and self-approval in section 5 |

## 3. Problems found in the existing code

These are useful: the task rewards "problems found and fixed", so log each one in your report with the before and after.

**Blocks the pipeline outright**
1. `npm ci` fails on a clean install (peer conflict above). Fix: remove `@react-spring/web` (it is only used by `SplitText.jsx`, which the design refine removes anyway), or as a stopgap add `.npmrc` with `legacy-peer-deps=true`.
2. Two lockfiles in each package (`package-lock.json` and `pnpm-lock.yaml`). Pick npm, delete the pnpm files, otherwise CI caching and installs are ambiguous.
3. `FrontEnd/dist.zip` (3.2 MB build artifact) is committed. Remove it and keep `dist` ignored.
4. The backend cannot be tested as written: `index.js` only creates routes and calls `listen(8000)` inside `connectDB().then(...)`. Split into `app.ts` (exports the Express app) and `server.ts` (connects DB and listens). That makes supertest tests possible.
5. `BackEnd` `start` script runs `nodemon`, a dev tool, as a production dependency. Use `node dist/server.js` for start and `tsx watch` for dev.

**Blocks preview deployments**
6. `API_NAME = "http://localhost:8000"` is hardcoded in `src/constant/index.js`. Replace with `import.meta.env.VITE_API_URL` (typed in `vite-env.d.ts`).
7. CORS is hardcoded to `http://localhost:5173`. Preview URLs change per PR, so make it an env-driven allowlist (or allow a `*.vercel.app` / `*.netlify.app` pattern for previews only).
8. The app uses `BrowserRouter`, so deep links such as `/product-detail/123` return 404 on a static host without a rewrite rule. Add `vercel.json` rewrites or Netlify `_redirects`.
9. No seed data. Products and blogs live only in your MongoDB. A preview or test environment would show an empty shop. Add a typed `seed.ts` with about 12 products and 3 blogs.
10. Port, DB name (`BIOVA_SURGICALS`) and Mongo URI handling are hardcoded or undocumented. Add `.env.example` for both packages and make DB name an env var.

**Quality and security issues (good "found and fixed" evidence)**
11. `/create-blog` is a public frontend route and `POST /api/add_blog` and `POST /api/add_product_details` have no authentication. Anyone can write to your database. Minimum fix: a shared admin API key header checked by middleware, with tests.
12. `Order` totals are trusted from the client (`totalPrice` and per-item `price` come from the request body). Fix: recompute from the database and the delivery fee table server-side, and test it.
13. `GET /api/product_details` passes `req.body` into `Product.find()` (unvalidated query object). Remove it.
14. Errors are returned as `res.json(err)` with HTTP 200 in the products and blogs routes. Return proper status codes.
15. Contact route has no validation (email format, lengths). Add schema validation (zod) and tests.
16. Leftover `console.log("I ran")`, commented-out code in `orderRoutes.js`.
17. `react-quill@^0.0.2` and `react-helmet@6` are very old for a React 19 app. Confirm usage, then remove or replace (`react-helmet-async`, or React 19's native `<title>`/`<meta>` support).
18. `npm audit` reported vulnerabilities on install. Record the count before and after as evidence.
19. Real phone numbers, social links and `wa.me` links are copied into about 8 files. Move to one typed `siteConfig.ts`.
20. `About.jsx` loads an image from a personal GitHub raw URL. Move it into `public/` or an asset import.
21. `index.html` loads seven Google font families, but the code only uses two (`.lato`, `.playfair`). Cut to what the redesign needs.

## 4. Rename to MEDVIA

There are **88 matching lines in 19 files** (components, pages, `index.html`, backend `package.json`, `db/index.js`). Do it in one dedicated PR so the diff is easy to review.

Checklist:
- Frontend `package.json` name is `vite-project`: rename to `medvia-web`. Backend: `medvia-api`.
- Page titles, meta tags, canonical and `og:` URLs (they point at `biovasurgicals.com`), JSON-LD, footer, Privacy Policy and Terms text.
- `public/Navbar Images/BIOVA SURGICAL LOGO.png` and the favicon: needs a new MEDVIA mark. Make it an SVG wordmark during the design refine.
- DB name `BIOVA_SURGICALS`: if you have existing data in Atlas, keep the old name through an env var (`MONGO_DB_NAME`) rather than losing it, or migrate deliberately.
- Root README, repo name and `package.json` descriptions.
- Social links (Instagram handle `biovasurgicals`) and contact numbers: confirm with whoever owns them before shipping MEDVIA copy that points to them.

## 5. Things to settle before you start

- **Ownership.** The root README and backend `package.json` credit "Mustafa Mubashir", and the README clone URL is `github.com/mustafamubashir03/biovasurgicals-site`. The task says to use "a small existing project of yours". If this repo belongs to someone else or to a team, get their agreement and create the Week 4 repo under your own account with attribution in the README.
- **Difference from Week 2.** Week 2 was a "Premium 3D Healthcare Products Business Website". If you built that on this same codebase, reviewers could see overlap. The Week 4 deliverable is the pipeline, not the site, so say that explicitly in the README: the app is the test subject, the work shown is CI/CD, TypeScript migration, tests and release engineering.
- **Branch protection needs a public repo** on GitHub Free (private repos need a paid plan for it). Make the repo public, and make sure no secrets or real customer data are in it.
- **"Require one review"** means a second GitHub account must approve, since authors cannot approve their own PR. As Group Lead you can ask a teammate to be a collaborator. A second account of your own also works, as long as you say so in the README.
- **Backend hosting.** Static frontend previews per PR are easy on Vercel or Netlify. A per-PR backend preview is harder and may need a paid plan on some hosts, so check current limits. A pragmatic design: one shared staging API (Render free tier plus MongoDB Atlas free cluster) used by all frontend previews, production API separate. Document this as a stated limitation.

## 6. Target architecture

```
MEDVIA/
  .github/
    workflows/ci.yml          lint + format + typecheck + test + build, matrix Node 20 and 22
    workflows/deploy.yml      preview on PR, production on merge to main
    pull_request_template.md
    CODEOWNERS
  apps/
    web/                      React + Vite, strict TS, Vitest + Testing Library
    api/                      Express + Mongoose, strict TS, Vitest + supertest
  docs/
    SCOPE.md                  written and committed FIRST
    PLAN.md                   5-line plan + success target
    RUNBOOK-ROLLBACK.md
    TYPE-ERRORS.md            running log
    TEST-REPORT.md
    screenshots/
  CHANGELOG.md
  README.md
  package.json                npm workspaces
```

Using npm workspaces gives one lockfile and one `npm ci` for CI. Keep the current `FrontEnd` and `BackEnd` folders if you prefer less churn, just keep the layout consistent and documented.

### CI workflow skeleton

```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
jobs:
  quality:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node: [20, 22]
        package: [web, api]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: npm
      - run: npm ci
      - run: npm run lint --workspace ${{ matrix.package }}
      - run: npm run format:check --workspace ${{ matrix.package }}
      - run: npm run typecheck --workspace ${{ matrix.package }}
      - run: npm test --workspace ${{ matrix.package }}
      - run: npm run build --workspace ${{ matrix.package }}
```

Pin action versions to current majors when you write the real file, and have the required status checks in branch protection match the job names exactly.

Deploy design choice to explain in your README: if you rely only on the Vercel or Netlify Git integration, deploys happen even when CI fails. Triggering the deploy from Actions with `needs: quality` (using the host CLI and repo secrets) means a broken PR never gets a preview. State which you chose and why.

## 7. Work plan (in this order)

**Phase 0: paperwork first (commit before any code changes)**
1. `docs/SCOPE.md` for MEDVIA: who the supplier is, what is in scope (pipeline, TS migration, tests, previews, rollback), what is out of scope (new features, payments, admin panel), assumptions, success criteria.
2. `docs/PLAN.md`: 5-line plan with one measurable target, e.g. "PR pipeline under 4 minutes with cache, at least 20 tests, 0 `any`, failing PR cannot merge".
3. Week 3 reflection: 3 things done well, 2 gaps, and the new skill practised (release engineering with GitHub Actions).

**Phase 1: repo hygiene and rename.** Fix items 1 to 3 and 5 in section 3, delete `dist.zip` and the pnpm lockfiles, add root `.gitignore`, rename to MEDVIA, rewrite the README skeleton.

**Phase 2: strict TypeScript.** `"strict": true`, `noUncheckedIndexedAccess`, no `any`. Convert file by file and run `tsc --noEmit` after each batch. Append the error count to `docs/TYPE-ERRORS.md` every time (date, file group, errors found, how fixed, plus a few of the most instructive ones). That log is how you report "how many type errors it caught". Do not convert `SplitText.jsx`: it goes away in the redesign.
Frontend: add a `Product`, `Blog`, `CartItem`, `Order` type shared with the API; type the Redux store (`RootState`, typed hooks). Backend: infer types from Mongoose schemas, type the request bodies with zod.

**Phase 3: tooling and tests.** ESLint with `typescript-eslint` (strict type-checked config), Prettier with `format` and `format:check` scripts. Aim for **20+ tests** (the task minimum is 8). Suggested set:
- `cartSlice`: add item, increment existing item, remove, clear, totals (5)
- Delivery fee and price formatting helpers (2)
- Checkout form validation (2)
- `Product_card` renders and dispatches add-to-cart (2)
- Contact form validation (2)
- API: `GET /api/health`, `GET /api/delivery/provinces` (2)
- API: contact route valid and invalid payloads (2)
- API: order creation recomputes total server-side and rejects tampered prices (2)
- API: protected endpoints reject requests without the admin key (2)
Use `mongodb-memory-server` or mocked models for the API tests so CI needs no external database. Also make sure you add a coverage report and keep the number in `TEST-REPORT.md`.

**Phase 4: CI workflow, then branch protection.** Add `ci.yml` (section 6). Open a first PR to make sure it runs. Then in repo Settings, add a branch rule on `main`: require PR, require 1 approval, require the status checks, block force pushes, require branches to be up to date.

**Phase 5: deploys.** Frontend: Vercel or Netlify (preview per PR, production on `main`). Backend: Render plus MongoDB Atlas. Add `VITE_API_URL`, env-driven CORS, SPA rewrites, `GET /api/health` returning the commit SHA, and show the short SHA in the site footer (`VITE_COMMIT_SHA`) so every deploy and rollback is visibly provable on screen. Post the preview URL as a PR comment.

**Phase 6: break it on purpose.** Three deliberate failures, each as its own PR with a screenshot of the red check and the blocked merge button: (a) a type error, (b) a failing unit test, (c) a lint violation. Keep at least one failed and one passing run visible in the Actions tab (do not delete them).

**Phase 7: rollback, tested.** Ship a visibly different change to production (for example a footer text or SHA change), then roll back using the host's instant rollback to the previous deployment, confirm the SHA in the footer went back, and time it. Also document the second method: `git revert` of the merge commit through a PR. Write `docs/RUNBOOK-ROLLBACK.md` with: when to roll back, exact steps, how to verify (health endpoint plus footer SHA), who to tell, how to roll forward. Include the real time it took and screenshots.

**Phase 8: documentation and delivery.** README (what and why, tools, results with numbers, one table or chart, at least one limitation and one improvement), `CHANGELOG.md`, half-page summary of decisions, screenshots at every stage, then the video.

## 8. Evidence checklist

- [ ] Scope statement committed before the first code change
- [ ] 5-line plan with measurable target
- [ ] One failed and one passing Actions run (links and screenshots)
- [ ] Matrix visible for both Node versions, cache hit shown in a log
- [ ] Branch protection settings screenshot, and a PR blocked by a failing check
- [ ] Preview deployment URL on a PR, and the production deployment
- [ ] Rollback performed, timed, with before and after screenshots
- [ ] `TYPE-ERRORS.md` with a total count
- [ ] `TEST-REPORT.md`: tests count, coverage %, bugs found and fixed
- [ ] Before/after table: install success, lint errors (2 to 0), `npm audit` count, tests (0 to 20+), build size and time, pipeline duration
- [ ] README with limitations, `CHANGELOG.md`, half-page summary
- [ ] 5 to 10 minute screen-recording video in your own voice
- [ ] 5-line Group Lead check-in posted to your group (each member knows their task and the video requirement)

## 9. Video outline (5 to 10 minutes)

1. 30 s: what MEDVIA is and what you were asked to build.
2. 1 min: scope statement and plan.
3. 2 min: workflow file, caching, matrix, then the Actions tab.
4. 1.5 min: break a build, show it blocked, show branch protection.
5. 1.5 min: preview deploy on a PR, production deploy.
6. 1.5 min: rollback demo with the footer SHA.
7. 1 min: TypeScript error count, test results, what you would improve.

Speak in your own words and be candid about what did not work. The brief says this builds more trust than a flawless story.

## 10. Honest limitations to state in your README

- Backend previews are not per PR (shared staging API), so API changes in a PR are only tested by CI, not visible in its preview.
- Tests use an in-memory or mocked database, not production Atlas.
- No end-to-end browser tests (a Playwright smoke test is the first thing to add with more time).
- Admin protection is a shared key, not full authentication.
