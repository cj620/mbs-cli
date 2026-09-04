// packages/skill-shared/src/config.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { MBSConfig } from './types.js'

/** Returns the directory containing the non-secret MBS CLI configuration. */
export function getConfigDir(): string {
  return process.env.MBS_CONFIG_DIR ?? join(homedir(), '.config', 'mbs')
}

const getConfigPath = () => join(getConfigDir(), 'config.json')

const DEFAULT_CONFIG: MBSConfig = {
  apiUrl: 'http://www.instudio.me:6206',
}

const HISTORICAL_GATEWAY_SUFFIX = '/gateway'

/** Returns true when an unknown configuration value is a plain record. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Converts configured API URLs to the canonical server root expected by route builders.
 *
 * <p>Early 1.0.x documentation stored the production URL with a trailing
 * `/gateway`. Current route builders own their complete service prefixes, so
 * retaining that historical suffix would duplicate or misplace gateway segments.
 * Other configured path prefixes remain unchanged.</p>
 *
 * @param apiUrl API URL loaded from defaults, disk, or a config command.
 * @returns URL without trailing slashes or the known historical `/gateway` suffix.
 */
function normalizeApiUrl(apiUrl: string): string {
  const withoutTrailingSlashes = apiUrl.trim().replace(/\/+$/, '')
  return withoutTrailingSlashes.endsWith(HISTORICAL_GATEWAY_SUFFIX)
    ? withoutTrailingSlashes.slice(0, -HISTORICAL_GATEWAY_SUFFIX.length)
    : withoutTrailingSlashes
}

/**
 * Validates persisted configuration and canonicalizes its API URL.
 *
 * @param value Untrusted JSON value or an in-process configuration candidate.
 * @returns Canonical configuration safe for route and authentication callers.
 * @throws TypeError when the outer object or required API URL is invalid.
 */
function normalizeConfig(value: unknown): MBSConfig {
  if (!isRecord(value) || typeof value.apiUrl !== 'string') {
    throw new TypeError('Invalid MBS configuration: apiUrl must be a string')
  }
  return { apiUrl: normalizeApiUrl(value.apiUrl) }
}

/**
 * Loads the active MBS configuration using a canonical API root in memory.
 *
 * <p>Reading a historical config is side-effect free: compatibility
 * normalization does not rewrite the user's config file.</p>
 *
 * @returns Configuration whose API URL is canonical.
 * @throws SyntaxError when an existing config file is not valid JSON.
 * @throws TypeError when the parsed configuration lacks a string API URL.
 */
export function getConfig(): MBSConfig {
  const path = getConfigPath()
  const config = existsSync(path)
    ? JSON.parse(readFileSync(path, 'utf8')) as unknown
    : DEFAULT_CONFIG
  return normalizeConfig(config)
}

/**
 * Persists MBS configuration with a canonical API root.
 *
 * <p>The operation creates the configuration directory and replaces the config file.
 * Only the API URL is persisted; authentication credentials are never part of this
 * configuration.</p>
 *
 * @param config Complete non-secret configuration supplied by the config command or caller.
 * @throws TypeError when the required API URL is not a string.
 * @throws Error when the configuration directory or file cannot be written.
 */
export function setConfig(config: MBSConfig): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  const normalizedConfig = normalizeConfig(config)
  writeFileSync(getConfigPath(), JSON.stringify(normalizedConfig, null, 2), 'utf8')
}
