# MEDVIA: Scope Statement (Week 4)

Written and committed before any code change in this task.

## Client
An established medical equipment supplier in Pakistan. It sells surgical instruments, medical devices and
disposables to hospital and clinic procurement staff, doctors and individual buyers. Prices are in Rs, delivery is
by province, and buyers often contact the seller on WhatsApp. The site is branded MEDVIA (formerly Biova Surgicals).

## What this task delivers
The web app is the test subject. The work being graded is release engineering: how a change travels safely from a
pull request to production, and how it is undone.

## In scope
1. CI pipeline on GitHub Actions: lint, format check, typecheck, tests and production build on every pull request
   and on pushes to `main`, with dependency caching and a Node 20 and 22 matrix.
2. Strict TypeScript migration of FrontEnd and BackEnd (strict, noUncheckedIndexedAccess, no `any`), with a log of
   every type error found.
3. Automated tests (at least 10 meaningful ones) with the real passing count recorded.
4. Preview deployment of the frontend for every pull request and a production deployment on merge, both gated on CI.
5. Protected `main`: pull request required, one approval, required status checks.
6. Rollback: a written runbook and one rehearsed, timed rollback, proven by a commit SHA shown in the site footer.
7. Deploy readiness: environment-driven API URL, CORS and port, `.env.example` files, SPA rewrite for the host.
8. Documentation: README, changelog, decisions summary, video outline.

## Out of scope
- New product features.
- Visual redesign. The UI redesign was finished before this task and is frozen. No visual changes are made here.
- Payments.
- An admin panel or full user authentication.
- Deploying the backend. Frontend previews will use one shared API; this is stated as a limitation.
- End-to-end browser tests.

## Assumptions
- The repository is made public so branch protection is available on GitHub Free.
- A second GitHub account approves pull requests, because authors cannot approve their own.
- Vercel is the frontend host; deploys are triggered from GitHub Actions with the Vercel CLI and repository secrets.
- Tests need no live database. Backend tests are added only if they can run without one.
- Original code was written by Mustafa Mubashir (Biova Surgicals, ISC). Attribution stays in LICENSE and README.
  Raza Hussain maintains this repository.
- The npm registry is reachable from the build environment.

## Success criteria
- `npm ci` succeeds in both packages from a clean checkout.
- Lint, format check, typecheck, tests and build pass in CI on Node 20 and Node 22.
- Pipeline finishes in under 5 minutes with a warm cache (measured from a real run).
- At least 10 tests pass; zero `any` and zero `@ts-ignore` in the source.
- A failing pull request cannot be merged (shown with a screenshot).
- A preview URL appears on a pull request; production deploys only after CI passes.
- A rollback is performed, verified by the footer SHA, and timed.
- Every number in the README comes from a command that was actually run.
