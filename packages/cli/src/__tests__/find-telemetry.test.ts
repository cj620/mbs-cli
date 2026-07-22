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
  it('writes only the minimal JSONL fields and an optional selected item', () => {
    const append = vi.fn()
    const deps = dependencies(append)

    recordFindEvent('库存风险', { mode: 'remote', total: 2 }, 2, 'inventory-list', deps)

    expect(deps.ensureDirectory).toHaveBeenCalledWith('C:\\mbs-test')
    const [path, line] = append.mock.calls[0] as [string, string]
    expect(path).toContain('find-events.jsonl')
    expect(JSON.parse(line)).toEqual({
      timestamp: '2026-07-22T09:00:00.000Z',
      query: '库存风险',
      mode: 'remote',
      candidateCount: 2,
      selected: 'inventory-list',
    })
    expect(line).not.toContain('cookie')
    expect(line).not.toContain('token')
  })

  it('does not affect find when telemetry persistence fails', () => {
    const deps = dependencies(() => { throw new Error('disk unavailable') })

    expect(() => recordFindEvent('订单', { mode: 'local', total: 1 }, 1, undefined, deps)).not.toThrow()
  })
})
