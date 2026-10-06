import { describe, expect, it } from 'vitest'
import { buttonClass, formatRs } from './ui'

describe('formatRs', () => {
  it('prefixes Rs and groups thousands', () => {
    expect(formatRs(1500)).toBe('Rs 1,500')
  })

  it('formats zero', () => {
    expect(formatRs(0)).toBe('Rs 0')
  })
})

describe('buttonClass', () => {
  it('keeps a 44px minimum touch target on every variant', () => {
    for (const variant of ['primary', 'secondary', 'ghost'] as const) {
      expect(buttonClass(variant)).toContain('min-h-11')
    }
  })
})
