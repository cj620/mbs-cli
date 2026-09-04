// packages/skill-shared/src/__tests__/config.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
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
  /** Verifies ordinary API roots round-trip without changing their meaning. */
  it('writes and reads config', () => {
    setConfig({ apiUrl: 'http://api.example.com' })
    const config = getConfig()
    expect(config.apiUrl).toBe('http://api.example.com')
  })

  /** Verifies a fresh installation targets the production API root. */
  it('returns the default config when config does not exist', () => {
    expect(getConfig()).toEqual({ apiUrl: 'http://www.instudio.me:6206' })
  })

  /** Verifies a later config update replaces the earlier API root. */
  it('overwrites existing config', () => {
    setConfig({ apiUrl: 'http://first.com' })
    setConfig({ apiUrl: 'http://second.com' })
    expect(getConfig().apiUrl).toBe('http://second.com')
  })

  /** Verifies obsolete or unknown persisted fields are not exposed to authentication callers. */
  it('ignores unknown fields when reading config', () => {
    const configPath = join(tmpDir, 'config.json')
    const malformedConfig = '{"apiUrl":"http://api.example.com","legacyTransportOption":true}'
    writeFileSync(configPath, malformedConfig, 'utf8')

    expect(getConfig()).toEqual({ apiUrl: 'http://api.example.com' })
    expect(readFileSync(configPath, 'utf8')).toBe(malformedConfig)
  })

  /** Verifies an invalid required API URL fails rather than reaching route builders. */
  it('rejects config whose API URL is not a string', () => {
    writeFileSync(join(tmpDir, 'config.json'), '{"apiUrl":true}', 'utf8')

    expect(() => getConfig()).toThrow('apiUrl must be a string')
  })

  /**
   * Verifies historical production configs ending in `/gateway` are exposed as
   * the canonical API root without rewriting the user's config file during reads.
   */
  it('normalizes a historical gateway suffix when reading config', () => {
    const configPath = join(tmpDir, 'config.json')
    const historicalConfig = '{"apiUrl":"http://www.instudio.me:6206/gateway"}'
    writeFileSync(configPath, historicalConfig, 'utf8')

    expect(getConfig().apiUrl).toBe('http://www.instudio.me:6206')
    expect(readFileSync(configPath, 'utf8')).toBe(historicalConfig)
  })

  /** Verifies new config writes persist the canonical API root without `/gateway`. */
  it('normalizes a historical gateway suffix when writing config', () => {
    setConfig({ apiUrl: 'http://www.instudio.me:6206/gateway/' })

    expect(JSON.parse(readFileSync(join(tmpDir, 'config.json'), 'utf8'))).toEqual({
      apiUrl: 'http://www.instudio.me:6206',
    })
  })

})
