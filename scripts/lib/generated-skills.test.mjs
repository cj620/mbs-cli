import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const repoRoot = join(import.meta.dirname, '..', '..')

test('generated domain skill stays thin and routes through find', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'references', 'pim', 'SKILL.md'), 'utf8')
  const lines = skill.split(/\r?\n/)

  assert.match(skill, /mbs find "<用户原始需求>" --domain pim/)
  assert.match(skill, /detailPath/)
  assert.doesNotMatch(skill, /\| 意图 \| 命令 \| 必填参数 \|/)
  assert.ok(lines.length < 40, `expected a thin domain skill, received ${lines.length} lines`)
})

test('main skill enforces find-first without scanning references', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'SKILL.md'), 'utf8')

  assert.match(skill, /mbs find "<query>"/)
  assert.match(skill, /workflow/)
  assert.match(skill, /禁止通过 Glob、目录遍历或逐个读取来扫描/)
  assert.match(skill, /mbs skills show --file <detailPath>/)
})

test('local manifest contains lightweight generated API cards', () => {
  const manifest = JSON.parse(readFileSync(join(repoRoot, 'skills', 'manifest.json'), 'utf8'))
  const pimCard = manifest.apiCards.find((card) => card.domain === 'pim')

  assert.ok(pimCard)
  assert.equal(pimCard.type, 'api')
  assert.match(pimCard.command, /^mbs pim /)
  assert.match(pimCard.detailPath, /^references\/pim\/.+\.md$/)
  assert.ok(!('request' in pimCard) && !('response' in pimCard))
})
