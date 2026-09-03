import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import * as keyStore from '../../auth/key-store.js'
import { KEYTAR_ACCOUNT, KEYTAR_SERVICE } from '../../auth/constants.js'

vi.mock('@keytar/node-keytar', () => ({
  default: {
    deletePassword: vi.fn(),
  },
}))

import keytar from '@keytar/node-keytar'
const mockKeytar = vi.mocked(keytar)
let tmpDir: string

beforeEach(() => {
  vi.clearAllMocks()
  tmpDir = mkdtempSync(join(tmpdir(), 'mbs-key-cleanup-test-'))
  process.env.MBS_CONFIG_DIR = tmpDir
  mockKeytar.deletePassword.mockResolvedValue(true)
})

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true })
  delete process.env.MBS_CONFIG_DIR
})

describe('legacy key cleanup', () => {
  /** Verifies the module exposes deletion only and cannot read or persist reusable keys. */
  it('does not export key read or write operations', () => {
    expect(keyStore).not.toHaveProperty('getKey')
    expect(keyStore).not.toHaveProperty('setKey')
  })

  /** Verifies cleanup deletes both operating-system and fallback-file legacy storage. */
  it('deletes known legacy storage without reading it', async () => {
    const legacyPath = join(tmpDir, 'credentials')
    writeFileSync(legacyPath, 'opaque-legacy-data')

    await keyStore.deleteKey()

    expect(mockKeytar.deletePassword).toHaveBeenCalledWith(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
    expect(existsSync(legacyPath)).toBe(false)
  })
})
