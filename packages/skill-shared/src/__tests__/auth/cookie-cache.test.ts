// packages/skill-shared/src/__tests__/auth/cookie-cache.test.ts
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { readCookie, writeCookie, clearCookie } from '../../auth/cookie-cache.js'
import { COOKIE_TTL_MS } from '../../auth/constants.js'

let tmpDir: string

beforeEach(() => {
  tmpDir = mkdtempSync(join(tmpdir(), 'mbs-cookie-test-'))
  process.env.MBS_CONFIG_DIR = tmpDir
})

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true })
  delete process.env.MBS_CONFIG_DIR
  vi.useRealTimers()
})

describe('cookie-cache', () => {
  it('returns null when no cache file exists', async () => {
    expect(readCookie()).toBeNull()
  })

  it('stores and retrieves a cookie', () => {
    writeCookie('SESSION=abc123; Path=/')
    expect(readCookie()).toBe('SESSION=abc123; Path=/')
  })

  it('returns null when cookie is expired', () => {
    vi.useFakeTimers()
    writeCookie('SESSION=abc123; Path=/')

    // advance time past TTL
    vi.advanceTimersByTime(COOKIE_TTL_MS + 1000)
    expect(readCookie()).toBeNull()
  })

  it('clearCookie removes the cache file', () => {
    writeCookie('SESSION=abc123; Path=/')
    clearCookie()
    expect(readCookie()).toBeNull()
  })
})
