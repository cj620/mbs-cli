import { existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { randomBytes } from 'node:crypto'
import { join } from 'node:path'
import { getConfigDir } from '@mb-it-org/shared'
import type { PlanRecord } from './types.js'

export interface LoadPlanOptions {
  allowExpired?: boolean
}

export function getPlanDir(): string {
  const dir = join(getConfigDir(), 'plans')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  return dir
}

export function newPlanId(): string {
  return `plan_${randomBytes(6).toString('hex')}`
}

export function savePlan(plan: PlanRecord): string {
  const file = join(getPlanDir(), `${plan.id}.json`)
  writeFileSync(file, JSON.stringify(plan, null, 2), 'utf8')
  return file
}

/**
 * Loads a saved export plan and enforces its confirmation TTL for new tasks.
 *
 * @param id Plan identifier returned by `mbs export plan`.
 * @param options `allowExpired` is reserved for resuming a task that started while its plan was valid.
 * @returns Parsed immutable plan.
 * @throws Error When the plan is missing, malformed, or expired for a new task.
 */
export function loadPlan(id: string, options: LoadPlanOptions = {}): PlanRecord {
  const file = join(getPlanDir(), `${id}.json`)
  if (!existsSync(file)) throw new Error(`Plan not found: ${id}`)
  const plan = JSON.parse(readFileSync(file, 'utf8')) as PlanRecord
  if (!options.allowExpired && Date.parse(plan.expiresAt) < Date.now()) {
    throw new Error(`Plan ${id} expired at ${plan.expiresAt}. Re-run \`mbs export plan\`.`)
  }
  return plan
}

export function listPlans(): PlanRecord[] {
  const dir = getPlanDir()
  const files = readdirSync(dir).filter((f) => f.endsWith('.json'))
  const now = Date.now()
  const plans: PlanRecord[] = []
  for (const f of files) {
    try {
      const plan = JSON.parse(readFileSync(join(dir, f), 'utf8')) as PlanRecord
      if (Date.parse(plan.expiresAt) >= now) plans.push(plan)
    } catch {
      // skip corrupt entries
    }
  }
  return plans.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
}

export function deletePlan(id: string): void {
  const file = join(getPlanDir(), `${id}.json`)
  if (existsSync(file)) unlinkSync(file)
}
