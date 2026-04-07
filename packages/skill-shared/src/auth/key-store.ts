// packages/skill-shared/src/auth/key-store.ts
import { KEYTAR_SERVICE, KEYTAR_ACCOUNT } from './constants.js'

// @keytar/node-keytar is optional — falls back with a warning if native bindings unavailable
async function loadKeytar() {
  try {
    const mod = await import('@keytar/node-keytar')
    return mod.default
  } catch {
    return null
  }
}

export async function getKey(): Promise<string | null> {
  const keytar = await loadKeytar()
  if (!keytar) {
    console.warn('[mbs] keytar unavailable — credential security degraded')
    return null
  }
  return keytar.getPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
}

export async function setKey(key: string): Promise<void> {
  const keytar = await loadKeytar()
  if (!keytar) {
    console.warn('[mbs] keytar unavailable — key not stored in OS keychain')
    return
  }
  await keytar.setPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT, key)
}

export async function deleteKey(): Promise<void> {
  const keytar = await loadKeytar()
  if (!keytar) return
  await keytar.deletePassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
}
