import { describe, expect, it } from 'vitest'
import { isAllowedOrigin } from './cors'

const allowed = ['http://localhost:5173', '*.vercel.app']

describe('isAllowedOrigin', () => {
  it('allows an origin that is listed exactly', () => {
    expect(isAllowedOrigin('http://localhost:5173', allowed)).toBe(true)
  })

  it('allows a subdomain that matches a wildcard rule', () => {
    expect(isAllowedOrigin('https://medvia-git-feat-x.vercel.app', allowed)).toBe(true)
  })

  it('rejects unlisted origins and lookalike domains', () => {
    expect(isAllowedOrigin('https://evil.com', allowed)).toBe(false)
    expect(isAllowedOrigin('https://vercel.app.evil.com', allowed)).toBe(false)
    expect(isAllowedOrigin('https://notvercel.app', allowed)).toBe(false)
  })

  it('rejects malformed origins', () => {
    expect(isAllowedOrigin('not a url', allowed)).toBe(false)
  })
})
