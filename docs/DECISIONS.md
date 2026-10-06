# Key decisions

- **CI shape.** One workflow, three kinds of job: FrontEnd and BackEnd each run lint, format check, typecheck, tests
  and build on Node 20 and 22. A final `CI success` job gives branch protection one stable name, so the matrix can
  change later without editing the rule. Concurrency cancels older runs on a pull request but never on `main`.
- **Cache.** `setup-node` npm cache keyed on each package's `package-lock.json`, because there are two lockfiles
  in one repository.
- **Deploy gating.** `deploy.yml` listens for the CI workflow finishing (`workflow_run`) and only continues on
  success. Jobs cannot use `needs` across workflow files, so this is the equivalent. Trade-off: the deploy file runs
  from `main`, so previews start working once it has been merged. Previews run for same-repository pull requests
  only, so forks never see the Vercel secrets.
- **Vercel with the CLI.** Kept Vercel as planned. Netlify would not be simpler here. Vercel's own Git deploys are
  turned off in `vercel.json`, otherwise they would deploy without waiting for CI.
- **Rollback proof.** The build injects the short commit SHA into the footer, so the live version can be read off
  the page and compared with Git.
- **Strict TypeScript.** `strict` plus `noUncheckedIndexedAccess`, no `any`, no `@ts-ignore`, in both packages.
  The backend was converted without redesign (an app/server split so the app can be tested without a database).
- **Tests.** Vitest, because the frontend already uses Vite. Tests cover the cart reducer, price formatting, a
  component, and the checkout form (validation and delivery fee). Backend tests avoid the database: CORS logic and
  the health and province routes.
- **Environment-driven config.** API URL, CORS origins, port and database name come from environment variables with
  `.env.example` files. No secrets are committed.
- **Not done on purpose.** Backend deployment, end-to-end tests, request validation, and authentication for the
  add-product and add-blog endpoints.
