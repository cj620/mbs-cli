// packages/skill-shared/src/__tests__/config.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { getConfig, setConfig } from '../config.js'

let tmpDir: string

beforeEach(() => {
  tmpDir = mkdtempSync(join(tmpdir(), 'mbs-test-'))
  process.env.MBS_CONFIG_DIR = tmpDir
})

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true })
  delete process.env.MBS_CONFIG_DIR
})

describe('setConfig / getConfig', () => {
  it('writes and reads config', () => {
    setConfig({ apiUrl: 'http://api.example.com' })
    const config = getConfig()
    expect(config.apiUrl).toBe('http://api.example.com')
  })

  it('returns the default config when config does not exist', () => {
    expect(getConfig()).toEqual({ apiUrl: 'http://www.instudio.me:6206' })
  })

  it('overwrites existing config', () => {
    setConfig({ apiUrl: 'http://first.com' })
    setConfig({ apiUrl: 'http://second.com' })
    expect(getConfig().apiUrl).toBe('http://second.com')
  })
})
