// packages/skill-shared/src/auth/key-store.ts
import { readFileSync, writeFileSync, unlinkSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { KEYTAR_SERVICE, KEYTAR_ACCOUNT } from './constants.js'
import { getConfigDir } from '../config.js'

// @keytar/node-keytar is optional — falls back to file storage if native bindings unavailable
async function loadKeytar() {
  try {
    const mod = await import('@keytar/node-keytar')
    return mod.default
  } catch {
    return null
  }
}

function getCredentialsPath(): string {
  return join(getConfigDir(), 'credentials')
}

function fileGetKey(): string | null {
  const path = getCredentialsPath()
  if (!existsSync(path)) return null
  return readFileSync(path, 'utf8').trim() || null
}

function fileSetKey(key: string): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  writeFileSync(getCredentialsPath(), key, { encoding: 'utf8', mode: 0o600 })
}

function fileDeleteKey(): void {
  const path = getCredentialsPath()
  if (existsSync(path)) unlinkSync(path)
}

export async function getKey(): Promise<string | null> {
  const keytar = await loadKeytar()
  if (keytar) return keytar.getPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
  return fileGetKey()
}

export async function setKey(key: string): Promise<void> {
  const keytar = await loadKeytar()
  if (keytar) {
    await keytar.setPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT, key)
  } else {
    fileSetKey(key)
  }
}

export async function deleteKey(): Promise<void> {
  const keytar = await loadKeytar()
  if (keytar) {
    await keytar.deletePassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
  } else {
    fileDeleteKey()
  }
}
