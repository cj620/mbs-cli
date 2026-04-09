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

export function getConfig(): MBSConfig {
  const path = getConfigPath()
  if (!existsSync(path)) {
    return DEFAULT_CONFIG
  }
  return JSON.parse(readFileSync(path, 'utf8')) as MBSConfig
}

export function setConfig(config: MBSConfig): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  writeFileSync(getConfigPath(), JSON.stringify(config, null, 2), 'utf8')
}
