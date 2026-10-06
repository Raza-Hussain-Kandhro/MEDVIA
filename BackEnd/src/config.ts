import 'dotenv/config'

const csv = (value: string | undefined, fallback: string[]): string[] =>
  value
    ? value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : fallback

export const config = {
  port: Number(process.env.PORT ?? 8000),
  mongoUri: process.env.MONGO_URI ?? '',
  dbName: process.env.MONGO_DB_NAME ?? 'MEDVIA',
  corsOrigins: csv(process.env.CORS_ORIGINS, ['http://localhost:5173']),
  commitSha: process.env.COMMIT_SHA || 'dev',
}
