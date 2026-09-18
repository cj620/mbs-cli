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
  assert.match(skill, /未包装的后端 response body/)
  assert.doesNotMatch(skill, /detailCommand/)
  assert.match(skill, /operationType=QUERY.*mbs request/)
  assert.match(skill, /接口无需预生成业务命令/)
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
  assert.match(skill, /operationType=QUERY.*mbs request/)
  assert.match(skill, /不要求预生成业务命令|不是动态接口执行前提/)
  assert.match(skill, /直接输出后端 response body/)
  assert.doesNotMatch(skill, /执行其 `detailCommand`/)
  assert.match(skill, /远程发现不可用/)
})

/**
 * Verifies explicit database execution targets bypass semantic discovery while retaining the
 * authoritative table-permission lookup, ambiguity stop, and fuzzy-intent discovery path.
 */
test('main skill routes explicit SQL and physical tables directly to database commands', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'SKILL.md'), 'utf8')
  const databaseSkill = readFileSync(
    join(repoRoot, 'skills', 'references', 'database', 'SKILL.md'),
    'utf8',
  )

  assert.match(skill, /完整[^\n]*只读 SQL[^\n]*跳过 .*mbs find/)
  assert.match(skill, /明确[^\n]*物理表[^\n]*跳过 .*mbs find/)
  assert.match(skill, /业务别名[^\n]*继续[^\n]*mbs find/)
  assert.match(skill, /直达[^\n]*mbs database my-tables/)
  assert.doesNotMatch(skill, /只要用户表达了 MBS 业务查询意图，就先将原话直接交给/)

  assert.match(databaseSkill, /## 明确数据库目标直达流程/)
  assert.match(databaseSkill, /完整只读 SQL[\s\S]*mbs database my-tables[\s\S]*mbs database query/)
  assert.match(databaseSkill, /明确物理表[\s\S]*show-create-table[\s\S]*query/)
  assert.match(databaseSkill, /零匹配[^\n]*多匹配[^\n]*不得[^\n]*mbs find/)
})

/**
 * Verifies the installed Agent contract resolves query-parameter dependencies recursively while
 * bounding every actual semantic-recall attempt and pausing before an ambiguous or over-budget step.
 */
test('main skill bounds automatic parameter dependency resolution and pauses for decisions', () => {
  const skill = readFileSync(join(repoRoot, 'skills', 'SKILL.md'), 'utf8')

  assert.match(skill, /参数依赖解析[\s\S]*references\/parameter-resolution\.md/)
  assert.match(skill, /首次召回[\s\S]*最多 10 次/)
  assert.match(skill, /第 11 次[\s\S]*暂停/)
  assert.match(skill, /find[^\n]*歧义[^\n]*暂停/)
  assert.match(skill, /参数值[^\n]*歧义[^\n]*暂停/)

  const protocolPath = join(repoRoot, 'skills', 'references', 'parameter-resolution.md')
  assert.equal(existsSync(protocolPath), true)
  const protocol = readFileSync(protocolPath, 'utf8')

  assert.match(protocol, /MAX_FIND_CALLS\s*=\s*10/)
  assert.match(protocol, /findCallCount\s*>=\s*MAX_FIND_CALLS/)
  assert.match(protocol, /首次[^\n]*计数/)
  assert.match(protocol, /失败[^\n]*计数/)
  assert.match(protocol, /唯一匹配[^\n]*自动回填/)
  assert.match(protocol, /不得[^\n]*第一项/)
  assert.match(protocol, /循环依赖[^\n]*暂停/)
  assert.match(protocol, /用户决策[^\n]*不重置/)
})

/**
 * Verifies all data-heavy modules share one bounded, recoverable task protocol instead of maintaining
 * divergent retry, logging, checkpoint, and Excel rules.
 */
test('database, export, and dashboard skills share the bounded bulk-task protocol', () => {
  const rootSkill = readFileSync(join(repoRoot, 'skills', 'SKILL.md'), 'utf8')
  const databaseSkill = readFileSync(join(repoRoot, 'skills', 'references', 'database', 'SKILL.md'), 'utf8')
  const exportSkill = readFileSync(join(repoRoot, 'skills', 'references', 'export', 'SKILL.md'), 'utf8')
  const dashboardSkill = readFileSync(join(repoRoot, 'skills', 'references', 'dashboard', 'SKILL.md'), 'utf8')
  const protocol = readFileSync(join(repoRoot, 'skills', 'references', 'bulk-task.md'), 'utf8')

  assert.match(rootSkill, /references\/bulk-task\.md/)
  assert.match(databaseSkill, /中文[\s\S]*Doris \/ MySQL[\s\S]*反引号/)
  assert.match(databaseSkill, /PostgreSQL[\s\S]*双引号/)
  assert.match(databaseSkill, /键集游标[\s\S]*OFFSET/)
  assert.match(exportSkill, /--resume[\s\S]*--restart/)
  assert.match(exportSkill, /--cursor-columns[\s\S]*--cursor-dialect[\s\S]*--batch-size/)
  assert.match(dashboardSkill, /长时间批量任务执行协议/)
  assert.match(protocol, /第一次远端请求前[\s\S]*日志文件[\s\S]*断点文件/)
  assert.match(protocol, /最多重试 3 次/)
  assert.match(protocol, /禁止无限重试/)
  assert.match(protocol, /流式生成临时 XLSX/)
})

test('generated skill bundle contains domains but no local API cards or endpoint documents', () => {
  const pimDirectory = join(repoRoot, 'skills', 'references', 'pim')
  const markdownFiles = readdirSync(pimDirectory).filter((name) => name.endsWith('.md'))

  assert.deepEqual(markdownFiles, ['SKILL.md'])
  assert.equal(existsSync(join(repoRoot, 'skills', 'manifest.json')), false)
})
