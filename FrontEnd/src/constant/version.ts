/** Short commit SHA injected at build time. Shown in the footer to prove which build is live. */
export const COMMIT_SHA: string = import.meta.env.VITE_COMMIT_SHA || 'dev'
