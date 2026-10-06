# Video outline (about 8 minutes, narrate in your own words)

1. **Problem and goal (0:00 to 0:45).** The client, the app, why releases were risky. Show the target from `docs/PLAN.md`.
2. **Before state (0:45 to 1:45).** What the audit found: lockfile conflict, no tests, no CI, hardcoded URLs. Show `docs/gap-analysis.md`.
3. **Making it installable and typed (1:45 to 3:00).** `.gitignore`, env config, strict TypeScript, and `docs/TYPE-ERRORS.md` with the real numbers.
4. **Tests (3:00 to 4:00).** Run `npm test` live. Explain one test you are proud of (checkout form or cart reducer).
5. **The pipeline (4:00 to 5:30).** Walk through `ci.yml`: triggers, matrix, cache, steps, the `CI success` job. Show a green run and its duration.
6. **Deploy and protection (5:30 to 6:30).** `deploy.yml`, the preview comment on a PR, branch protection settings.
7. **Break it on purpose (6:30 to 7:15).** The red check and the blocked merge button.
8. **Rollback drill (7:15 to 8:15).** Footer SHA, Instant Rollback, time it, mention `git revert`.
9. **Limits and next step (8:15 to 8:45).** Frontend-only previews, no backend tests against a database, no e2e; improvement you would do next.
