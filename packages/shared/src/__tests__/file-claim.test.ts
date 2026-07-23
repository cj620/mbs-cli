import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { acquireFileClaim } from '../file-claim.js'

describe('file claim', () => {
  it('allows a safe takeover after the previous unique claim expires', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-file-claim-'))
    const startedAt = new Date('2026-07-23T08:00:00.000Z')
    const releaseFirst = acquireFileClaim({
      directory,
      prefix: 'check',
      ttlMs: 1_000,
      now: startedAt,
    })
    expect(releaseFirst).not.toBeNull()

    try {
      const releaseSecond = acquireFileClaim({
        directory,
        prefix: 'check',
        ttlMs: 1_000,
        now: new Date(startedAt.getTime() + 1_001),
      })
      expect(releaseSecond).not.toBeNull()
      releaseSecond?.()
    } finally {
      releaseFirst?.()
      rmSync(directory, { recursive: true, force: true })
    }
  })
})
