# Runbook: roll back the MEDVIA frontend

Scope: the frontend on Vercel. The backend is not deployed by this pipeline.

## When to roll back
Roll back first and investigate afterwards when a production deploy:
- shows a blank page, a crash, or a broken checkout or cart;
- cannot reach the API because of a bad `VITE_API_URL`;
- shows wrong prices or wrong content to customers.

Do not roll back for a cosmetic issue that a quick fix PR can solve within the hour.

## How to tell which version is live
The site footer shows `Version <short SHA>`. Compare it with the commit you expect on `main`.

## Method A: Vercel Instant Rollback (fast, about a minute)
1. Open the Vercel dashboard, then the MEDVIA project, then **Deployments**.
2. Find the last good **Production** deployment (check its commit message and SHA).
3. Open its menu (three dots) and choose **Instant Rollback**, then confirm.
4. Start the stopwatch when you click confirm; stop it when the new footer SHA appears.

## Method B: `git revert` (slower, leaves a clean history)
```bash
git switch main && git pull
git revert <bad-commit-sha>          # use -m 1 for a merge commit
git push origin HEAD:refs/heads/revert/<short-name>
```
Open a pull request from that branch, let CI pass, merge. The pipeline deploys a new commit, so the footer
shows a **new** SHA, not the old one.

## Verify
1. Hard refresh the production URL (Ctrl+F5).
2. Footer SHA equals the SHA of the deployment you rolled back to (Method A) or the revert commit (Method B).
3. Open the home page, one product page, and the cart. Add an item and confirm the cart count changes.
4. If the issue was the API, open `/products` and confirm products load.

## Roll forward
An instant rollback pins production to the old deployment. Do not leave it there:
1. Fix the problem on a branch and open a pull request.
2. After CI passes and the PR is merged, the production deploy job publishes the fix.
3. Confirm the footer SHA matches the merged commit.

## Drill record (fill in after the rehearsal)
| Field | Value |
|---|---|
| Date of drill | |
| Bad version footer SHA | |
| Good version footer SHA | |
| Method A: time from click to old SHA visible | |
| Method B: time from `git revert` to new SHA visible | |
| Who performed it | |
| Notes | |
