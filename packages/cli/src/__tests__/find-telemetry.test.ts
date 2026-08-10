import { describe, expect, it, vi } from 'vitest'

import { recordFindEvent, type FindTelemetryDependencies } from '../find/telemetry.js'

function dependencies(append: FindTelemetryDependencies['append'] = vi.fn()): FindTelemetryDependencies {
  return {
    configDir: () => 'C:\\mbs-test',
    ensureDirectory: vi.fn(),
    append,
    now: () => new Date('2026-07-22T09:00:00.000Z'),
  }
}

describe('find telemetry', () => {
  /**
   * Verifies local telemetry omits natural-language queries and retains only operational fields.
   */
  it('writes only the minimal JSONL fields and an optional selected item', () => {
    const append = vi.fn()
    const deps = dependencies(append)

    recordFindEvent({ mode: 'remote', total: 2 }, 2, 'inventory-list', deps)

    expect(deps.ensureDirectory).toHaveBeenCalledWith('C:\\mbs-test')
    const [path, line] = append.mock.calls[0] as [string, string]
    expect(path).toContain('find-events.jsonl')
    expect(JSON.parse(line)).toEqual({
      timestamp: '2026-07-22T09:00:00.000Z',
      mode: 'remote',
      candidateCount: 2,
      selected: 'inventory-list',
    })
    expect(line).not.toContain('cookie')
    expect(line).not.toContain('token')
  })

  /**
   * Verifies telemetry persistence failures cannot change a successful remote find result.
   */
  it('does not affect find when telemetry persistence fails', () => {
    const deps = dependencies(() => { throw new Error('disk unavailable') })

    expect(() => recordFindEvent({ mode: 'remote', total: 1 }, 1, undefined, deps)).not.toThrow()
  })
})
