import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

describe('CLI bootstrap', () => {
  it('does not force oclif development mode in the published bin entry', () => {
    const runScript = readFileSync(join(process.cwd(), 'bin', 'run.js'), 'utf8')

    expect(runScript).not.toContain('development: true')
  })
})
