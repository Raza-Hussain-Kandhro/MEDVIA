/** API base URL from the environment. Falls back to the local backend for development. */
export const API_NAME: string = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '')
