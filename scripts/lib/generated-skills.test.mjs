import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const repoRoot = join(import.meta.dirname, '..', '..')

test('generated domain skill stays thin and routes through backend find and describe', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'references', 'pim', 'SKILL.md'), 'utf8')
  const lines = skill.split(/\r?\n/)

  assert.match(skill, /## 首次统一召回[\s\S]*mbs find "<用户原始需求>"\r?\n/)
  assert.match(skill, /首次召回不得根据模块关键词预判或添加 `--domain`/)
  assert.match(skill, /用户明确限定 pim[\s\S]*hint[\s\S]*mbs find "<用户原始需求>" --domain pim/)
  assert.match(skill, /mbs describe <apiId>/)
  assert.match(skill, /缺少 `command`.*禁止按展示名称猜测命令/)
  assert.match(skill, /后端不可用时明确报告失败/)
  assert.doesNotMatch(skill, /\| 意图 \| 命令 \| 必填参数 \|/)
  assert.ok(lines.length < 40, `expected a thin domain skill, received ${lines.length} lines`)
})

test('main skill enforces unified backend discovery without local interface or table indexes', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'SKILL.md'), 'utf8')

  assert.match(skill, /mbs find "<query>"/)
  assert.match(skill, /首次召回不得根据模块路由表或关键词预判并添加 `--domain`/)
  assert.match(skill, /用户明确限定[\s\S]*hint\.suggestedDomains[\s\S]*后续召回[\s\S]*--domain/)
  assert.match(skill, /workflow/)
  assert.match(skill, /table/)
  assert.match(skill, /database show-create-table/)
  assert.match(skill, /本地表索引/)
  assert.match(skill, /mbs describe <apiId>/)
  assert.match(skill, /缺少 `command`.*禁止按展示名称猜测命令/)
  assert.match(skill, /远程发现不可用/)
})

test('generated skill bundle contains domains but no local API cards or endpoint documents', () => {
  const pimDirectory = join(repoRoot, 'skills', 'references', 'pim')
  const markdownFiles = readdirSync(pimDirectory).filter((name) => name.endsWith('.md'))

  assert.deepEqual(markdownFiles, ['SKILL.md'])
  assert.equal(existsSync(join(repoRoot, 'skills', 'manifest.json')), false)
})
