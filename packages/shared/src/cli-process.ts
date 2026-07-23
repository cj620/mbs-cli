import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { getConfigDir } from './config.js'

export interface ActiveCliProcess {
  pid: number
  command: string
}

interface ProcessMarker extends ActiveCliProcess {
  startedAt: string
}

function getProcessDirectory(): string {
  return join(getConfigDir(), 'active-processes')
}

function defaultIsProcessRunning(pid: number): boolean {
  try {
    process.kill(pid, 0)
    return true
  } catch (error) {
    return (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      String(error.code) === 'EPERM'
    )
  }
}

export function registerCliProcess(
  command: string,
  {
    directory = getProcessDirectory(),
    pid = process.pid,
  }: {
    directory?: string
    pid?: number
  } = {},
): () => void {
  const markerPath = join(directory, `${pid}.json`)
  try {
    mkdirSync(directory, { recursive: true })
    writeFileSync(
      markerPath,
      JSON.stringify({ pid, command, startedAt: new Date().toISOString() } satisfies ProcessMarker),
      'utf8',
    )
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
  return unregister
}

export function findOtherActiveCliProcesses({
  directory = getProcessDirectory(),
  excludePid = process.pid,
  isProcessRunning = defaultIsProcessRunning,
}: {
  directory?: string
  excludePid?: number
  isProcessRunning?: (pid: number) => boolean
} = {}): ActiveCliProcess[] {
  let entries: string[]
  try {
    entries = readdirSync(directory).filter((entry) => entry.endsWith('.json'))
  } catch {
    return []
  }

  const active: ActiveCliProcess[] = []
  for (const entry of entries) {
    const markerPath = join(directory, entry)
    try {
      const marker = JSON.parse(readFileSync(markerPath, 'utf8')) as Partial<ProcessMarker>
      if (
        typeof marker.pid !== 'number' ||
        !Number.isInteger(marker.pid) ||
        typeof marker.command !== 'string'
      ) {
        rmSync(markerPath, { force: true })
        continue
      }
      if (marker.pid === excludePid) continue
      if (!isProcessRunning(marker.pid)) {
        rmSync(markerPath, { force: true })
        continue
      }
      active.push({ pid: marker.pid, command: marker.command })
    } catch {
      rmSync(markerPath, { force: true })
    }
  }

  return active.sort((left, right) => left.pid - right.pid)
}
