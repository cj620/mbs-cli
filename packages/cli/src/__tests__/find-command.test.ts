import { describe, expect, it, vi } from 'vitest'

import Find from '../commands/find.js'

describe('find command contract', () => {
  it('requires a query and constrains target type and top-k flags', () => {
    const topK = Find.flags['top-k'] as unknown as { min: number; max: number }
    expect(Find.args.query.required).toBe(true)
    expect(Find.flags['target-type'].options).toEqual(['api', 'workflow', 'all'])
    expect(topK.min).toBe(1)
    expect(topK.max).toBe(50)
  })

  it('formats validation failures as the shared structured error contract', async () => {
    const log = vi.fn()
    const exit = vi.fn()

    await Find.prototype.catch.call({ log, exit } as never, new Error('query must not be empty'))

    expect(JSON.parse(log.mock.calls[0][0] as string)).toEqual({
      ok: false,
      error: {
        type: 'validation',
        message: 'query must not be empty',
        hint: 'Run `mbs find --help` to check supported arguments',
      },
    })
    expect(exit).toHaveBeenCalledWith(1)
  })
})
