# Manual checklist (needs your accounts)

Evidence to capture is in **bold**.

1. **Repository and Vercel setup**
   - Make the repo public (Settings, General, Danger Zone).
   - In Vercel: create a project from the repo, set **Root Directory** to `FrontEnd`, and add the environment
     variable `VITE_API_URL` for both Production and Preview.
   - From the repo root run `npx vercel link`, then read `.vercel/project.json` for `orgId` and `projectId`.
   - Create a token in Vercel (Account Settings, Tokens).
   - In GitHub (Settings, Secrets and variables, Actions) add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
   - Never commit `.vercel/` (it is in `.gitignore`).
   - Evidence: **screenshot of the three secret names (not values) and of the Vercel project settings.**

2. **Branch protection on `main`** (Settings, Branches or Rules, add rule for `main`)
   - Require a pull request before merging, with **1 approval**. Add your second GitHub account as a collaborator.
   - Require status checks to pass. Select the checks by their exact names after one CI run exists:
     `CI success` (recommended single gate), and optionally `FrontEnd (Node 20)`, `FrontEnd (Node 22)`,
     `BackEnd (Node 20)`, `BackEnd (Node 22)`.
   - Block force pushes.
   - Evidence: **screenshot of the rule showing all of the above.**

3. **First pull request**
   - Open the PR from `feat/ci-pipeline`, wait for the green checks, approve with the second account, merge.
   - Confirm the **Deploy** workflow runs after the merge and the production site shows the new footer SHA.
   - Evidence: **PR page with green checks, Actions run for CI and for Deploy, production URL with the footer SHA.**
   - Note: the preview comment only appears on pull requests opened after this merge, because `deploy.yml` must exist
     on `main` before it can run.

4. **Break it on purpose**
   - New branch `test/break-ci`. Add to `FrontEnd/src/types.ts`: `export const broken: number = 'oops'`.
   - Push, open a PR. Expect a red **Typecheck** step, no deploy, and a disabled merge button.
   - Evidence: **screenshot of the red check and the blocked merge button; keep the failed run in the Actions tab.**
   - Close the PR without merging. Do not delete the branch until you have the screenshots. Add the real compiler
     error to `docs/TYPE-ERRORS.md`.

5. **Rollback drill**
   - Ship a harmless visible change in a PR (for example footer text), merge, and note the new footer SHA.
   - In Vercel, Deployments: open the previous production deployment, choose **Instant Rollback**. Time it.
   - Hard refresh. The footer must show the old SHA again.
   - Second method: run `git revert` on the change, open a PR, merge, and note the new SHA.
   - Evidence: **both footer SHAs, the stopwatch time, and the Vercel rollback screen.** Enter the times in
     `docs/RUNBOOK-ROLLBACK.md`.

6. **Measure and fill in**
   - Pipeline duration: the run page shows total time. Record a cold run and a warm-cache run.
   - Fill in the README table cells marked FILL IN, and `docs/PLAN.md` Week 3 reflection.
