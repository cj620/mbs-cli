// packages/skill-shared/src/config.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { MBSConfig } from './types.js'

export function getConfigDir(): string {
  return process.env.MBS_CONFIG_DIR ?? join(homedir(), '.config', 'mbs')
}

const getConfigPath = () => join(getConfigDir(), 'config.json')

export function getConfig(): MBSConfig {
  const path = getConfigPath()
  if (!existsSync(path)) {
    throw new Error('MBS CLI not configured. Run: mbs config init')
  }
  return JSON.parse(readFileSync(path, 'utf8')) as MBSConfig
}

export function setConfig(config: MBSConfig): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  writeFileSync(getConfigPath(), JSON.stringify(config, null, 2), 'utf8')
}
