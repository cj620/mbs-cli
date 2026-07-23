import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { getConfigDir } from './config.js'
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
    return null
  }

  const markerPath = join(directory, `process-${pid}.json`)
  try {
    writeFileSync(markerPath, JSON.stringify({ pid }), 'utf8')
  } catch {
    return null
  }

  let active = true
  const unregister = (): void => {
    if (!active) return
    active = false
    process.off('exit', unregister)
    rmSync(markerPath, { force: true })
  }
  process.once('exit', unregister)

  if (hasActiveFileClaim({
    directory,
    prefix: 'update',
    ownerIsRunning,
  })) {
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
  } catch {
    return []
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
