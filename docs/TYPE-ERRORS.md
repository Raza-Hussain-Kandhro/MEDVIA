# TypeScript error log

Every count below comes from a real `tsc --noEmit` run. Nothing is estimated.
Config: `strict: true`, `noUncheckedIndexedAccess: true`, no `any`, no `@ts-ignore`.

| Date       | Package  | Files converted                                                                                                                                                                           | Errors found | Examples | How fixed   |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | ----------- |
| 2026-10-05 | FrontEnd | `constant/index`, `features/cartSlice`, `redux/store`, `ScrollToTop`, `Product_reviews_description`, `PrivacyPolicy`, `TermsAndConditions` (7 JS/JSX to TS/TSX; 24 files were already TS) | 0            | none     | none needed |
| 2026-10-05 | BackEnd  | all 8 JS files to 11 TS files in `src/`                                                                                                                                                   | 0            | none     | none needed |

Source: `npm run typecheck` (`tsc --noEmit`) run by Raza on the converted code, first run in each package, with
`strict` and `noUncheckedIndexedAccess` on. Both exited cleanly.

## Total

| Package  | Errors caught | Remaining |
| -------- | ------------- | --------- |
| FrontEnd | 0             | 0         |
| BackEnd  | 0             | 0         |
| **All**  | **0**         | **0**     |

The first real run reported no errors, so this log does not claim any. The strict compiler settings are what
enforce the rule from now on; the throwaway failing PR in the pipeline task will show a real type error being blocked.

## Lint results (real)

- FrontEnd `npm run lint`: 0 errors, 3 warnings (`react-refresh/only-export-components` in `ui.tsx` and `BlogCard.tsx`).
  The warnings are removed by a documented override in `eslint.config.js`.
- BackEnd `npm run lint`: failed to start on the first run because `eslint.config.js` uses `import` syntax in a
  CommonJS package. Fixed by renaming it to `eslint.config.mjs`.

## Notes on the first conversion pass

- The conversion was written in an environment where the npm registry was blocked, so `tsc` could not resolve
  `react`, `express`, `mongoose` or their types. A probe run without libraries reported no unused imports and no
  undefined names. Its other errors (JSX, `key`, `id` props) all come from the missing type packages and are not
  counted here.
- Known untyped boundary: Express `req.body` is typed by `@types/express` as an untyped value. Routes cast it to a
  named interface or pass it to Mongoose, which validates on save. Request validation (zod) is a listed improvement.

## Most instructive errors

None from the compiler on the first real run. After the deliberate failing pull request in Step 3 of the
pipeline task, add that real error here with its code, file, cause and fix.
