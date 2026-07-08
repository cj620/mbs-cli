import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getConfigDir, readUserInfo } from '@mb-it-org/shared'

export const DORIS_METADATA_CACHE_TTL_MS = 24 * 60 * 60 * 1000

type DorisMetadataCacheKind = 'my-tables' | 'schemas' | 'show-create-table' | 'data-dictionary-query'

interface DorisMetadataCacheEntry<T> {
  savedAt: string
  value: T
}

function getCacheDir(): string {
  const dir = join(getConfigDir(), 'doris-cache')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  return dir
}

function userNamespace(): string {
  const user = readUserInfo()
  if (!user) return 'anonymous'
  return [user.id, user.loginName, user.groupCompanyId].join(':')
}

function cachePath(kind: DorisMetadataCacheKind, key: string): string {
  const hash = createHash('sha256').update(`${userNamespace()}\n${kind}\n${key}`).digest('hex')
  return join(getCacheDir(), `${kind}-${hash}.json`)
}

export function readDorisMetadataCache<T>(
  kind: DorisMetadataCacheKind,
  key: string,
  ttlMs = DORIS_METADATA_CACHE_TTL_MS,
): T | null {
  const file = cachePath(kind, key)
  if (!existsSync(file)) return null

  try {
    const entry = JSON.parse(readFileSync(file, 'utf8')) as DorisMetadataCacheEntry<T>
    const savedAt = Date.parse(entry.savedAt)
    if (!Number.isFinite(savedAt)) return null
    if (Date.now() - savedAt > ttlMs) return null
    return entry.value
  } catch {
    return null
  }
}

export function writeDorisMetadataCache<T>(kind: DorisMetadataCacheKind, key: string, value: T): void {
  const entry: DorisMetadataCacheEntry<T> = {
    savedAt: new Date().toISOString(),
    value,
  }
  writeFileSync(cachePath(kind, key), JSON.stringify(entry, null, 2), 'utf8')
}
