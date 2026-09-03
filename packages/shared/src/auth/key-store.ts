import { existsSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import { getConfigDir } from '../config.js'
import { KEYTAR_ACCOUNT, KEYTAR_SERVICE } from './constants.js'

/**
 * Loads the optional operating-system credential adapter for deletion only.
 *
 * @returns The adapter when native bindings are available, otherwise null.
 */
async function loadKeytar(): Promise<typeof import('@keytar/node-keytar').default | null> {
  try {
    const module = await import('@keytar/node-keytar')
    return module.default
  } catch {
    return null
  }
}

/** Returns the historical fallback file path without opening or reading the file. */
function getLegacyCredentialsPath(): string {
  return join(getConfigDir(), 'credentials')
}

/** Deletes the historical fallback file without inspecting its contents. */
function deleteLegacyCredentialsFile(): void {
  const path = getLegacyCredentialsPath()
  if (existsSync(path)) unlinkSync(path)
}

/**
 * Deletes every known legacy MBS key location without reading any stored value.
 *
 * <p>This deletion-only compatibility function intentionally provides no read
 * or write operation. The fallback file is removed even if native credential
 * deletion fails; native deletion errors are then propagated to avoid claiming
 * complete cleanup.</p>
 */
export async function deleteKey(): Promise<void> {
  const keytar = await loadKeytar()
  let deletionError: unknown

  try {
    if (keytar) await keytar.deletePassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
  } catch (error) {
    deletionError = error
  } finally {
    deleteLegacyCredentialsFile()
  }

  if (deletionError) throw deletionError
}
