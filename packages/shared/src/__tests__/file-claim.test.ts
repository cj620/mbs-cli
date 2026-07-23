import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { acquireFileClaim, hasActiveFileClaim } from '../file-claim.js'

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

  it('fails closed when the claims directory cannot be listed', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-file-claim-error-'))
    const notDirectory = join(tempDir, 'claims')
    writeFileSync(notDirectory, 'blocked', 'utf8')

    try {
      expect(() =>
        hasActiveFileClaim({
          directory: notDirectory,
          prefix: 'check',
        }),
      ).toThrow()
      expect(
        acquireFileClaim({
          directory: notDirectory,
          prefix: 'check',
        }),
      ).toBeNull()
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })
})
