import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { acquireFileClaim } from '../file-claim.js'

describe('file claim', () => {
  it('allows a safe takeover after the previous owner exits', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-file-claim-'))
    const releaseFirst = acquireFileClaim({
      directory,
      prefix: 'check',
      pid: 101,
      ownerIsRunning: (pid) => pid === 101,
    })
    expect(releaseFirst).not.toBeNull()

    try {
      const releaseSecond = acquireFileClaim({
        directory,
        prefix: 'check',
        pid: 202,
        ownerIsRunning: (pid) => pid === 202,
      })
      expect(releaseSecond).not.toBeNull()
      releaseSecond?.()
    } finally {
      releaseFirst?.()
      rmSync(directory, { recursive: true, force: true })
    }
  })
})
