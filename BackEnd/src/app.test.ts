import { describe, expect, it, vi } from 'vitest'
import request from 'supertest'
import { createApp } from './app'

// Keep the test independent of any local .env file. None of these routes touch the database.
vi.mock('./config', () => ({
  config: {
    port: 0,
    mongoUri: '',
    dbName: 'test',
    corsOrigins: ['http://localhost:5173', '*.vercel.app'],
    commitSha: 'abc1234',
  },
}))

const app = createApp()

describe('API (no database needed)', () => {
  it('GET /api/health reports ok and the commit SHA', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ status: 'ok', commit: 'abc1234' })
  })

  it('GET /api/delivery/provinces lists four provinces with their fees', async () => {
    const res = await request(app).get('/api/delivery/provinces')
    const body = res.body as { provinces: { name: string; deliveryFee: number }[] }
    expect(res.status).toBe(200)
    expect(body.provinces).toHaveLength(4)
    expect(body.provinces.find((p) => p.name === 'Sindh')?.deliveryFee).toBe(220)
  })

  it('sends CORS headers for an allowed preview origin', async () => {
    const origin = 'https://medvia-git-feat-x.vercel.app'
    const res = await request(app).get('/api/health').set('Origin', origin)
    expect(res.headers['access-control-allow-origin']).toBe(origin)
  })

  it('does not send CORS headers for an unknown origin', async () => {
    const res = await request(app).get('/api/health').set('Origin', 'https://evil.com')
    expect(res.headers['access-control-allow-origin']).toBeUndefined()
  })
})
