import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'

import { replaceSkillDirectory } from '../commands/skills/install.js'

const temporaryRoots: string[] = []

/**
 * Creates and tracks a temporary test root that is safe to remove after each test.
 *
 * @returns Absolute temporary directory path.
 */
function temporaryRoot(): string {
  const root = mkdtempSync(join(tmpdir(), 'mbs-skill-install-test-'))
  temporaryRoots.push(root)
  return root
}

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true })
  }
})

describe('skill directory replacement', () => {
  /**
   * Verifies a new domain-only bundle removes stale endpoint files from an older installation.
   */
  it('replaces the destination instead of merging files', () => {
    const root = temporaryRoot()
    const source = join(root, 'source')
    const destination = join(root, 'agent-skills', 'mbs')
    mkdirSync(join(source, 'references', 'pim'), { recursive: true })
    mkdirSync(join(destination, 'references', 'pim'), { recursive: true })
    writeFileSync(join(source, 'SKILL.md'), '# MBS')
    writeFileSync(join(source, 'references', 'pim', 'SKILL.md'), '# pim')
    writeFileSync(join(destination, 'SKILL.md'), '# old')
    writeFileSync(join(destination, 'references', 'pim', 'stale-endpoint.md'), '# stale')

    replaceSkillDirectory(source, destination)

    expect(existsSync(join(destination, 'SKILL.md'))).toBe(true)
    expect(existsSync(join(destination, 'references', 'pim', 'SKILL.md'))).toBe(true)
    expect(existsSync(join(destination, 'references', 'pim', 'stale-endpoint.md'))).toBe(false)
  })

  /**
   * Verifies the recursive replacement helper cannot target an arbitrary directory name.
   */
  it('rejects destinations outside the fixed mbs directory name', () => {
    const root = temporaryRoot()
    const source = join(root, 'source')
    mkdirSync(source, { recursive: true })
    writeFileSync(join(source, 'SKILL.md'), '# MBS')

    expect(() => replaceSkillDirectory(source, join(root, 'other'))).toThrow('Invalid')
  })
})
