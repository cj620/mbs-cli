import { randomUUID } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

interface Claim {
  createdAt: string
  pid: number
}

export function isProcessRunning(pid: number): boolean {
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

function activeClaims({
  directory,
  prefix,
  ttlMs,
  now,
  ownerIsRunning,
}: {
  directory: string
  prefix: string
  ttlMs: number
  now: Date
  ownerIsRunning: (pid: number) => boolean
}): string[] {
  let entries: string[]
  try {
    entries = readdirSync(directory).filter((entry) => entry.startsWith(`${prefix}-`))
  } catch {
    return []
  }

  return entries.filter((entry) => {
    const claimPath = join(directory, entry)
    try {
      const claim = JSON.parse(readFileSync(claimPath, 'utf8')) as Partial<Claim>
      const age = now.getTime() - new Date(claim.createdAt ?? '').getTime()
      if (
        typeof claim.pid !== 'number' ||
        !Number.isFinite(age) ||
        age < 0 ||
        age >= ttlMs ||
        !ownerIsRunning(claim.pid)
      ) {
        rmSync(claimPath, { force: true })
        return false
      }
      return true
    } catch {
      rmSync(claimPath, { force: true })
      return false
    }
  })
}

export function hasActiveFileClaim({
  directory,
  prefix,
  ttlMs,
  now = new Date(),
  ownerIsRunning = isProcessRunning,
}: {
  directory: string
  prefix: string
  ttlMs: number
  now?: Date
  ownerIsRunning?: (pid: number) => boolean
}): boolean {
  return activeClaims({ directory, prefix, ttlMs, now, ownerIsRunning }).length > 0
}

export function acquireFileClaim({
  directory,
  prefix,
  ttlMs,
  pid = process.pid,
  now = new Date(),
  ownerIsRunning = isProcessRunning,
}: {
  directory: string
  prefix: string
  ttlMs: number
  pid?: number
  now?: Date
  ownerIsRunning?: (pid: number) => boolean
}): (() => void) | null {
  try {
    mkdirSync(directory, { recursive: true })
    activeClaims({ directory, prefix, ttlMs, now, ownerIsRunning })
  } catch {
    return null
  }

  const token = `${now.getTime()}-${pid}-${randomUUID()}`
  const candidateName = `${prefix}-${token}.candidate.json`
  const candidatePath = join(directory, candidateName)
  try {
    writeFileSync(
      candidatePath,
      JSON.stringify({ createdAt: now.toISOString(), pid } satisfies Claim),
      { encoding: 'utf8', flag: 'wx' },
    )
  } catch {
    return null
  }

  const claims = activeClaims({ directory, prefix, ttlMs, now, ownerIsRunning })
  if (claims.some((entry) => entry.endsWith('.leader.json'))) {
    rmSync(candidatePath, { force: true })
    return null
  }
  const leaderCandidate = claims
    .filter((entry) => entry.endsWith('.candidate.json'))
    .sort()[0]
  if (leaderCandidate !== candidateName) {
    rmSync(candidatePath, { force: true })
    return null
  }

  const leaderPath = join(directory, `${prefix}-${token}.leader.json`)
  try {
    renameSync(candidatePath, leaderPath)
  } catch {
    rmSync(candidatePath, { force: true })
    return null
  }
  return () => rmSync(leaderPath, { force: true })
}
