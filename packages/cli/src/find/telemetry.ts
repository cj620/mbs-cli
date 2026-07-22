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

export function recordFindEvent(
  query: string,
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
      query,
      mode: meta.mode,
      candidateCount,
      ...(selected ? { selected } : {}),
    }
    dependencies.append(join(directory, 'find-events.jsonl'), `${JSON.stringify(event)}\n`)
  } catch {
    // 埋点故障不能影响接口发现。
  }
}
