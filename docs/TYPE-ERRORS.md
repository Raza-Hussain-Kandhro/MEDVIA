# TypeScript error log

Every count below comes from a real `tsc --noEmit` run. Nothing is estimated.
Config: `strict: true`, `noUncheckedIndexedAccess: true`, no `any`, no `@ts-ignore`.

| Date | Package | Files converted | Errors found | Examples | How fixed |
|---|---|---|---|---|---|
| 2026-10-05 | FrontEnd | `constant/index`, `features/cartSlice`, `redux/store`, `ScrollToTop`, `Product_reviews_description`, `PrivacyPolicy`, `TermsAndConditions` (7 JS/JSX to TS/TSX; 24 files were already TS) | PENDING: run `npm run typecheck` | | |
| 2026-10-05 | BackEnd | all 8 JS files to 11 TS files in `src/` | PENDING: run `npm run typecheck` | | |

## Notes on the first conversion pass
- The conversion was written in an environment where the npm registry was blocked, so `tsc` could not resolve
  `react`, `express`, `mongoose` or their types. A probe run without libraries reported no unused imports and no
  undefined names. Its other errors (JSX, `key`, `id` props) all come from the missing type packages and are not
  counted here.
- Real counts must come from `npm install` followed by `npm run typecheck` in each package, pasted into the table above.
- Known untyped boundary: Express `req.body` is typed by `@types/express` as an untyped value. Routes cast it to a
  named interface or pass it to Mongoose, which validates on save. Request validation (zod) is a listed improvement.

## Total
| Package | Errors caught | Remaining |
|---|---|---|
| FrontEnd | | |
| BackEnd | | |
| **All** | | |

## Most instructive errors
Add three to five, each with the error code, the file, the cause and the fix.
