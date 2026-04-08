// packages/skill-shared/src/auth/key-store.ts
import { readFileSync, writeFileSync, unlinkSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { createCipheriv, createDecipheriv, scryptSync, randomBytes } from 'node:crypto'
import { userInfo, hostname } from 'node:os'
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

function getMachinePassword(): string {
  return `${userInfo().username}:${hostname()}`
}

function deriveKey(salt: Buffer): Buffer {
  return scryptSync(getMachinePassword(), salt, 32, { N: 16384, r: 8, p: 1 }) as Buffer
}

interface EncryptedStore { v: 1; salt: string; iv: string; tag: string; data: string }

function encrypt(plaintext: string): string {
  const salt = randomBytes(32)
  const iv = randomBytes(12)
  const key = deriveKey(salt)
  const cipher = createCipheriv('aes-256-gcm', key, iv)
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()
  const store: EncryptedStore = {
    v: 1,
    salt: salt.toString('hex'),
    iv: iv.toString('hex'),
    tag: tag.toString('hex'),
    data: encrypted.toString('hex'),
  }
  return JSON.stringify(store)
}

function decrypt(stored: string): string {
  const store = JSON.parse(stored) as EncryptedStore
  const salt = Buffer.from(store.salt, 'hex')
  const iv = Buffer.from(store.iv, 'hex')
  const tag = Buffer.from(store.tag, 'hex')
  const data = Buffer.from(store.data, 'hex')
  const key = deriveKey(salt)
  const decipher = createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(tag)
  return decipher.update(data) + decipher.final('utf8')
}

function fileGetKey(): string | null {
  const path = getCredentialsPath()
  if (!existsSync(path)) return null
  const content = readFileSync(path, 'utf8').trim()
  if (!content) return null
  try {
    return decrypt(content)
  } catch {
    // Legacy plaintext — re-encrypt and save
    fileSetKey(content)
    return content
  }
}

function fileSetKey(key: string): void {
  const dir = getConfigDir()
  mkdirSync(dir, { recursive: true })
  writeFileSync(getCredentialsPath(), encrypt(key), { encoding: 'utf8', mode: 0o600 })
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
