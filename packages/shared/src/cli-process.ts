import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { getConfigDir } from './config.js'
import { MBSError } from './errors.js'
import {
  acquireFileClaim,
  hasActiveFileClaim,
  isProcessRunning,
} from './file-claim.js'

export interface ActiveCliProcess {
  pid: number
}

function getProcessDirectory(): string {
  return join(getConfigDir(), 'active-processes')
}

export function registerCliProcess({
  directory = getProcessDirectory(),
  pid = process.pid,
  isProcessRunning: ownerIsRunning = isProcessRunning,
}: {
  directory?: string
  pid?: number
  isProcessRunning?: (pid: number) => boolean
} = {}): (() => void) | null {
  try {
    mkdirSync(directory, { recursive: true })
  } catch {
    return () => undefined
  }

  const markerPath = join(directory, `process-${pid}.json`)
  try {
    writeFileSync(markerPath, JSON.stringify({ pid }), 'utf8')
  } catch {
    return () => undefined
  }

  let active = true
  const unregister = (): void => {
    if (!active) return
    active = false
    process.off('exit', unregister)
    rmSync(markerPath, { force: true })
  }
  process.once('exit', unregister)

  let updateActive: boolean
  try {
    updateActive = hasActiveFileClaim({
      directory,
      prefix: 'update',
      ownerIsRunning,
    })
  } catch {
    unregister()
    return null
  }
  if (updateActive) {
    unregister()
    return null
  }

  return unregister
}

export function findOtherActiveCliProcesses({
  directory = getProcessDirectory(),
  excludePid = process.pid,
  isProcessRunning: processIsRunning = isProcessRunning,
}: {
  directory?: string
  excludePid?: number
  isProcessRunning?: (pid: number) => boolean
} = {}): ActiveCliProcess[] {
  let entries: string[]
  try {
    entries = readdirSync(directory).filter((entry) => entry.startsWith('process-'))
  } catch (error) {
    const code =
      typeof error === 'object' && error !== null && 'code' in error
        ? String(error.code)
        : ''
    if (code === 'ENOENT') return []
    throw new MBSError(
      'Cannot verify whether another mbs process is running',
      'validation',
      'Check the MBS config directory permissions, then retry the update',
    )
  }

  const active: ActiveCliProcess[] = []
  for (const entry of entries) {
    const markerPath = join(directory, entry)
    try {
      const marker = JSON.parse(readFileSync(markerPath, 'utf8')) as { pid?: number }
      if (typeof marker.pid !== 'number' || !Number.isInteger(marker.pid)) {
        rmSync(markerPath, { force: true })
        continue
      }
      if (marker.pid === excludePid) continue
      if (!processIsRunning(marker.pid)) {
        rmSync(markerPath, { force: true })
        continue
      }
      active.push({ pid: marker.pid })
    } catch {
      rmSync(markerPath, { force: true })
    }
  }

  return active.sort((left, right) => left.pid - right.pid)
}

export function beginCliUpdate({
  directory = getProcessDirectory(),
  pid = process.pid,
  isProcessRunning: ownerIsRunning = isProcessRunning,
}: {
  directory?: string
  pid?: number
  isProcessRunning?: (pid: number) => boolean
} = {}): (() => void) | null {
  return acquireFileClaim({
    directory,
    prefix: 'update',
    pid,
    ownerIsRunning,
  })
}
