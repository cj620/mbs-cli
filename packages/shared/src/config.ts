// packages/skill-shared/src/config.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { MBSConfig } from './types.js'

export function getConfigDir(): string {
  return process.env.MBS_CONFIG_DIR ?? join(homedir(), '.config', 'mbs')
}

const getConfigPath = () => join(getConfigDir(), 'config.json')

const DEFAULT_CONFIG: MBSConfig = {
  apiUrl: 'http://www.instudio.me:6206',
}

const HISTORICAL_GATEWAY_SUFFIX = '/gateway'

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
  const withoutTrailingSlashes = apiUrl.replace(/\/+$/, '')
  return withoutTrailingSlashes.endsWith(HISTORICAL_GATEWAY_SUFFIX)
    ? withoutTrailingSlashes.slice(0, -HISTORICAL_GATEWAY_SUFFIX.length)
    : withoutTrailingSlashes
}

/**
 * Loads the active MBS configuration using a canonical API root in memory.
 *
 * <p>Reading a historical config is side-effect free: compatibility
 * normalization does not rewrite the user's config file.</p>
 *
 * @returns Configuration whose API URL is safe for route-specific prefix builders.
 * @throws SyntaxError when an existing config file is not valid JSON.
 */
export function getConfig(): MBSConfig {
  const path = getConfigPath()
  const config = existsSync(path)
    ? JSON.parse(readFileSync(path, 'utf8')) as MBSConfig
    : DEFAULT_CONFIG
  return { ...config, apiUrl: normalizeApiUrl(config.apiUrl) }
}

/**
 * Persists MBS configuration with the canonical API root representation.
 *
 * @param config Complete configuration supplied by the config command or caller.
 */
export function setConfig(config: MBSConfig): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  const normalizedConfig = { ...config, apiUrl: normalizeApiUrl(config.apiUrl) }
  writeFileSync(getConfigPath(), JSON.stringify(normalizedConfig, null, 2), 'utf8')
}
