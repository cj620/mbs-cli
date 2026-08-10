import { appendFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

import { getConfigDir } from '@mb-it-org/shared'

import type { FindMeta } from './types.js'

export interface FindTelemetryDependencies {
  configDir: () => string
  ensureDirectory: (path: string) => void
  append: (path: string, content: string) => void
  now: () => Date
}

const defaultDependencies: FindTelemetryDependencies = {
  configDir: getConfigDir,
  ensureDirectory: (path) => mkdirSync(path, { recursive: true }),
  append: (path, content) => appendFileSync(path, content, 'utf8'),
  now: () => new Date(),
}

/**
 * Records a minimal local discovery event without persisting the user's natural-language query.
 *
 * <p>Only the execution mode, candidate count, timestamp, and an optional stable selected action
 * are stored. Persistence failures are deliberately isolated from the successful find result.</p>
 *
 * @param meta Backend origin metadata for the successful request.
 * @param candidateCount Number of candidates returned to the caller.
 * @param selected Optional stable CLI action selected by a later workflow.
 * @param dependencies File and clock dependencies, replaceable by tests.
 */
export function recordFindEvent(
  meta: FindMeta,
  candidateCount: number,
  selected?: string,
  dependencies: FindTelemetryDependencies = defaultDependencies,
): void {
  try {
    const directory = dependencies.configDir()
    dependencies.ensureDirectory(directory)
    const event = {
      timestamp: dependencies.now().toISOString(),
      mode: meta.mode,
      candidateCount,
      ...(selected ? { selected } : {}),
    }
    dependencies.append(join(directory, 'find-events.jsonl'), `${JSON.stringify(event)}\n`)
  } catch {
    // 埋点故障不能影响接口发现。
  }
}
