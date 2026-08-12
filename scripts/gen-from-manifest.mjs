#!/usr/bin/env node
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractPathParams, parseAuditManifest } from './lib/manifest-schema.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const generatedBlockStart = '<!-- AUTO-GENERATED API MODULES START -->'
const generatedBlockEnd = '<!-- AUTO-GENERATED API MODULES END -->'
const findProtocolStart = '<!-- AUTO-GENERATED FIND-FIRST PROTOCOL START -->'
const findProtocolEnd = '<!-- AUTO-GENERATED FIND-FIRST PROTOCOL END -->'
const generatedOwner = 'mbs-audit-manifest'

const args = parseArgs(process.argv.slice(2))
const dryRun = Boolean(args['dry-run'])
const skillIndexOnly = Boolean(args['skill-index-only'])
const manifestInput = await loadManifest(args.file, process.env.MBS_AUDIT_MANIFEST_URL)
const manifest = parseAuditManifest(JSON.parse(manifestInput.content))
const sourceHash = createHash('sha256').update(manifestInput.content).digest('hex')
applyResponseFieldOverrides(manifest)
const activeDomains = new Set()
const activeModules = manifest.modules
  .map((mod) => ({
    ...mod,
    actions: mod.actions.filter((action) => !action.deprecated),
  }))
  .filter((mod) => mod.actions.length > 0)
const generatedModules = activeModules.filter((mod) => mod.generate)

const changes = []
const staleGeneratedDomains = findStaleGeneratedDomains(generatedModules.map((mod) => mod.domain))

for (const mod of generatedModules) {
  activeDomains.add(mod.domain)
  if (skillIndexOnly) {
    syncDomainIndexSkill(mod)
  } else {
    syncDomainPackage(mod, manifestInput.source, sourceHash)
    syncDomainSkills(mod)
  }
}

syncSkillIndex(generatedModules)
removeLegacyInterfaceCardManifest()
if (!skillIndexOnly) {
  syncCliPackageJson(generatedModules.map((mod) => mod.domain))
  syncServeManifest(activeModules, manifestInput.source, sourceHash)
}

if (!skillIndexOnly) {
  for (const mod of manifest.modules) {
    if (mod.actions.every((action) => action.deprecated)) {
      removeGeneratedDomain(mod.domain)
    }
  }
  for (const domain of staleGeneratedDomains) {
    removeGeneratedDomain(domain)
    removePath(join(repoRoot, 'skills', 'references', domain))
  }
}

printSummary()

function parseArgs(argv) {
  const parsed = {}
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--dry-run') {
      parsed['dry-run'] = true
    } else if (arg === '--skill-index-only') {
      parsed['skill-index-only'] = true
    } else if (arg === '--file') {
      parsed.file = argv[index + 1]
      index += 1
    } else {
      throw new Error(`Unknown argument: ${arg}`)
    }
  }
  return parsed
}

async function loadManifest(file, url) {
  if (file) {
    const path = isAbsolute(file) ? file : join(repoRoot, file)
    return { source: file, content: readFileSync(path, 'utf8') }
  }
  if (url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }
    return { source: url, content: await response.text() }
  }
  const defaultFile = 'manifests/mbs-api-manifest.json'
  const path = join(repoRoot, defaultFile)
  return { source: defaultFile, content: readFileSync(path, 'utf8') }
}

function syncDomainPackage(mod, source, hash) {
  const domainDir = join(repoRoot, 'packages', mod.domain)
  const markerPath = join(domainDir, '.mbs-generated.json')
  let exists = existsSync(domainDir)

  if (exists && !existsSync(markerPath)) {
    if (isDirectoryEmptyDeep(domainDir)) {
      removePath(domainDir)
      exists = false
    } else {
      throw new Error(`Refusing to overwrite non-generated package: packages/${mod.domain}`)
    }
  }

  if (!exists) {
    writeFile(join(domainDir, 'package.json'), renderPackageJson(mod.domain))
    writeFile(join(domainDir, 'tsconfig.json'), readFileSync(join(repoRoot, 'packages', '_template', 'tsconfig.json'), 'utf8'))
  }

  writeFile(join(domainDir, 'src', 'index.ts'), renderPluginIndex(mod))
  writeFile(
    markerPath,
    `${JSON.stringify(
      {
        owner: generatedOwner,
        domain: mod.domain,
        source,
        schemaVersion: manifest.schemaVersion,
        manifestVersion: manifest.manifestVersion,
        hash,
      },
      null,
      2,
    )}\n`,
  )

  const commandDir = join(domainDir, 'src', 'commands', mod.domain)
  const activeCommandFiles = new Set(mod.actions.map((action) => `${action.name}.ts`))
  removeStaleFiles(commandDir, activeCommandFiles, '.ts')

  for (const action of mod.actions) {
    const commandPath = join(domainDir, 'src', 'commands', mod.domain, `${action.name}.ts`)
    writeFile(commandPath, renderCommand(mod, action, source, hash))
  }
}

function removeGeneratedDomain(domain) {
  const domainDir = join(repoRoot, 'packages', domain)
  const markerPath = join(domainDir, '.mbs-generated.json')
  if (!existsSync(domainDir) || !existsSync(markerPath)) return
  removePath(domainDir)
}

function findStaleGeneratedDomains(activeDomainNames) {
  const active = new Set(activeDomainNames)
  const packagesDir = join(repoRoot, 'packages')
  if (!existsSync(packagesDir)) return []
  return readdirSync(packagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((domain) => !active.has(domain) && existsSync(join(packagesDir, domain, '.mbs-generated.json')))
}

/**
 * Writes one generated domain navigation card and removes legacy endpoint documents.
 *
 * @param {object} mod Parsed audit-manifest module.
 */
function syncDomainSkills(mod) {
  const skillDir = join(repoRoot, 'skills', 'references', mod.domain)
  const activeSkillFiles = new Set(['SKILL.md'])
  const generatedBanner = '<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->\n'
  removeStaleFiles(skillDir, activeSkillFiles, '.md')
  writeFile(join(skillDir, 'SKILL.md'), `${generatedBanner}${renderModuleSkill(mod)}`)
}

function syncCliPackageJson(domains) {
  const packagePath = join(repoRoot, 'packages', 'cli', 'package.json')
  const pkg = readJson(packagePath)
  const generatedDeps = new Set(domains.map((domain) => `@mb-it-org/${domain}`))

  for (const depName of Object.keys(pkg.dependencies ?? {})) {
    if (depName.startsWith('@mb-it-org/') && depName !== '@mb-it-org/shared') {
      const domain = depName.replace('@mb-it-org/', '')
      const markerPath = join(repoRoot, 'packages', domain, '.mbs-generated.json')
      if (existsSync(markerPath) && !generatedDeps.has(depName)) {
        delete pkg.dependencies[depName]
      }
    }
  }

  for (const depName of generatedDeps) {
    pkg.dependencies[depName] = 'workspace:*'
  }
  pkg.dependencies = sortObject(pkg.dependencies)

  const currentPlugins = new Set(pkg.oclif?.plugins ?? [])
  for (const plugin of [...currentPlugins]) {
    if (plugin.startsWith('@mb-it-org/')) {
      const domain = plugin.replace('@mb-it-org/', '')
      const markerPath = join(repoRoot, 'packages', domain, '.mbs-generated.json')
      if (existsSync(markerPath) && !generatedDeps.has(plugin)) {
        currentPlugins.delete(plugin)
      }
    }
  }
  for (const plugin of generatedDeps) {
    currentPlugins.add(plugin)
  }
  pkg.oclif.plugins = [...currentPlugins].sort()

  writeFile(packagePath, `${JSON.stringify(pkg, null, 2)}\n`)
}

function syncSkillIndex(modules) {
  const skillPath = join(repoRoot, 'skills', 'SKILL.md')
  const current = readFileSync(skillPath, 'utf8')
  const generatedRows = modules
    .map((mod) => `| ${mod.keywords.join(' / ')} | \`${mod.domain}\` | [references/${mod.domain}/SKILL.md](references/${mod.domain}/SKILL.md) |`)
    .join('\n')
  const block = `| ${generatedBlockStart} |  |  |\n${generatedRows}\n| ${generatedBlockEnd} |  |  |`

  const withoutBlock = current
    .replace(
      new RegExp(`\\n?\\|\\s*${escapeRegExp(generatedBlockStart)}\\s*\\|[\\s\\S]*?\\|\\s*${escapeRegExp(generatedBlockEnd)}\\s*\\|\\s*\\|\\s*\\|\\n?`),
      '\n',
    )
    .replace(/\r?\n\|\s*\r?\n\s*\|\s*\|\s*\|\s*/g, '\n')
    .replace(/\r?\n\|\s*(?=\r?\n> )/g, '\n')
    .replace(/\r?\n\s*\|\s*\|\s*\|\s*(?=\r?\n> )/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
  const lines = withoutBlock.split('\n')
  const routeRowIndex = lines.findLastIndex((line) => /^\| .+ \| `.+` \| \[references\/.+\/SKILL\.md\]/.test(line))
  let next
  if (routeRowIndex !== -1) {
    lines.splice(routeRowIndex + 1, 0, block)
    next = lines.join('\n')
  } else {
    const marker = '> '
    const markerIndex = withoutBlock.indexOf(marker)
    next =
      markerIndex === -1
        ? `${withoutBlock.trimEnd()}\n${block}\n`
        : `${withoutBlock.slice(0, markerIndex)}${block}\n\n${withoutBlock.slice(markerIndex)}`
  }
  writeFile(skillPath, syncFindFirstProtocol(next))
}

/**
 * Refreshes one domain navigation card during the skill-only generation path.
 *
 * @param {object} mod Parsed audit-manifest module.
 */
function syncDomainIndexSkill(mod) {
  const skillDir = join(repoRoot, 'skills', 'references', mod.domain)
  const generatedBanner = '<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->\n'
  removeStaleFiles(skillDir, new Set(['SKILL.md']), '.md')
  writeFile(join(skillDir, 'SKILL.md'), `${generatedBanner}${renderModuleSkill(mod)}`)
}

/**
 * Synchronizes the root Skill with unified backend discovery and type-specific safe follow-up actions.
 * The generated contract passes the original query without local domain inference and reserves
 * `--domain` for user-explicit or backend-hint-driven follow-up recall.
 *
 * @param {string} content Current root Skill content.
 * @returns {string} Root Skill content with the generated protocol and routing rules replaced.
 */
function syncFindFirstProtocol(content) {
  const protocol = `${findProtocolStart}
## 统一语义发现流程

1. 将用户原始需求原样交给后端，首次执行 \`mbs find "<query>"\`；不要求用户预先选择 domain、workflow、api 或 table。
2. 首次召回不得根据模块路由表或关键词预判并添加 \`--domain\`，domain、候选类型、排序和权限均由后端统一判断。
3. 只有用户明确限定业务域，或首次响应的 \`hint.suggestedDomains\` 建议收窄时，后续召回才允许使用 \`--domain\`。
4. 检查候选分数和 hint；低置信、无结果或歧义时先按后端提示补充业务域、对象或时间范围，不直接执行候选。
5. 命中 \`workflow\` 时读取其 \`steps\`，逐步用每个 \`intentQuery\` 再次执行 \`mbs find --target-type api\`。
6. 确认一个 \`api\` 候选后，执行其 \`detailCommand\`（\`mbs describe <apiId>\`）从后端读取完整接口定义。
7. 确认一个 \`table\` 候选后，只按结构化 \`nextAction\` 的字段调用 \`mbs database show-create-table --host <host> --database <database> [--schema <schema>] --tableName <tableName>\`；候选不是权限凭据，详情仍会二次鉴权。
8. API 详情确认 \`operationType=QUERY\` 且 method 为 GET/POST 后，将已确认字段按 path、query 和 body 作用域组装，使用 \`mbs request <method> <path> [--params <json>] [--body <json>]\` 执行；path 参数必须先替换。可选 \`command\` 只是已封装接口的便利入口，不是动态接口执行前提。table 仅在用户确认查询目标并检查表结构后，才构造 SELECT 并执行 \`mbs database query\`。

禁止执行后端命令字符串，也禁止通过 Glob、目录遍历、本地 manifest 或本地表索引发现目标；具体候选和权限过滤必须来自后端。
${findProtocolEnd}`
  let next = content
  const protocolPattern = new RegExp(`${escapeRegExp(findProtocolStart)}[\\s\\S]*?${escapeRegExp(findProtocolEnd)}`)
  if (protocolPattern.test(next)) {
    next = next.replace(protocolPattern, protocol)
  } else {
    next = next.replace('\n## 模块路由表', `\n${protocol}\n\n## 模块路由表`)
  }
  next = next.replace(
    /\*\*第一步\*\*：根据用户意图关键词定位模块。\*\*第二步\*\*：读对应 SKILL\.md 获取命令详情。/,
    '模块表仅用于召回后的业务域说明和管理类能力导航；业务查询首次必须直接执行 `mbs find`，不得据此预判 `--domain`。',
  )
  next = next.replace(
    /## 意图路由规则[\s\S]*?(?=\n## 组织架构参数规则)/,
    `## 意图路由规则\n\n1. **业务数据查询**：将用户原话直接交给 \`mbs find\`；首次召回不预判 domain、workflow、api 或 table。\n2. **domain 收窄**：仅在用户明确限定业务域，或首次响应的 \`hint.suggestedDomains\` 建议收窄后，经用户语义确认的后续调用中使用 \`--domain\`。\n3. **workflow 候选**：按 steps 的子意图继续 find API，由当前数据决定是否执行可选步骤。\n4. **api 候选**：确认后执行 \`mbs describe <apiId>\` 读取后端完整定义；确认 QUERY、GET/POST 和字段作用域后使用 \`mbs request\` 动态查询，不要求预生成业务命令。\n5. **table 候选**：确认后按结构化身份调用 \`database show-create-table\`；候选、DDL 和 SQL 每一步都沿用后端鉴权，不执行后端命令字符串。\n6. **认证 / serve / 版本更新**：使用模块路由表中的专用文档。\n7. **远程发现不可用**：明确报告依赖失败，不读取本地接口卡片、表索引或端点文档。\n\n`,
  )
  return next
}

/**
 * Removes the obsolete local interface-card manifest when it still exists.
 */
function removeLegacyInterfaceCardManifest() {
  const manifestPath = join(repoRoot, 'skills', 'manifest.json')
  if (existsSync(manifestPath)) removePath(manifestPath)
}

function syncServeManifest(modules, source, hash) {
  const manifestPath = join(repoRoot, 'packages', 'cli', 'src', 'serve', 'generated-manifest.ts')
  const serveManifest = {
    schemaVersion: manifest.schemaVersion,
    manifestVersion: manifest.manifestVersion,
    modules: modules.map((mod) => ({
      domain: mod.domain,
      pathPrefix: mod.pathPrefix,
      actions: mod.actions.map((action) => ({
        name: action.name,
        description: action.description,
        method: action.method,
        path: action.path,
        pathPrefix: action.pathPrefix,
        responseMode: action.responseMode,
      })),
    })),
  }

  writeFile(
    manifestPath,
    `// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.\n// Source: ${source}\n// Manifest: ${manifest.manifestVersion} @ ${hash}\nimport type { AuditManifest } from './router.js'\n\nexport const projectManifest = ${JSON.stringify(serveManifest, null, 2)} satisfies AuditManifest\n`,
  )
}

function renderPackageJson(domain) {
  return `${JSON.stringify(
    {
      name: `@mb-it-org/${domain}`,
      version: '0.1.0',
      type: 'module',
      exports: { '.': { import: './dist/index.js', types: './dist/index.d.ts' } },
      main: './dist/index.js',
      types: './dist/index.d.ts',
      oclif: {
        commands: {
          strategy: 'pattern',
          glob: 'dist/commands/**/*.js',
          target: './dist/commands',
        },
      },
      files: ['dist', 'oclif.manifest.json'],
      scripts: { build: 'tsc' },
      dependencies: {
        '@mb-it-org/shared': 'workspace:*',
        '@oclif/core': '^4.10.5',
      },
      devDependencies: {
        '@types/node': '^20.0.0',
        typescript: '^5.4.0',
      },
    },
    null,
    2,
  )}\n`
}

function renderPluginIndex(mod) {
  const imports = mod.actions
    .map((action) => `import './commands/${mod.domain}/${action.name}.js'`)
    .join('\n')
  return `// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.\nimport { Plugin } from '@oclif/core'\n\n${imports}\n\nexport default class ${toClassName(mod.domain)}Plugin extends Plugin {\n  static readonly topic = '${mod.domain}'\n  static readonly description = '${escapeTs(mod.description)}'\n\n  async loadCommands(): Promise<void> {\n    // Commands are auto-loaded via the glob pattern in package.json\n  }\n}\n`
}

function renderCommand(mod, action, source, hash) {
  const actionParams = flattenActionParams(action)
  const argParams = actionParams.filter((param) => param.in === 'path')
  const flagParams = actionParams.filter((param) => param.in !== 'path')
  const imports = [`import { ${argParams.length > 0 ? 'Args, ' : ''}Flags } from '@oclif/core'`, "import { MBSCommand } from '@mb-it-org/shared'"]
  const className = `${toClassName(mod.domain)}${toClassName(action.name)}`
  const flags = renderFlags(uniqueParamsByName(flagParams.filter((param) => param.constValue === undefined)))
  const args = renderArgs(argParams)
  const pathExpr = renderPathExpression(joinPaths(action.pathPrefix || mod.pathPrefix, action.path), argParams)
  const requestParams = renderParamObject(flagParams.filter((param) => param.in === 'query'))
  const requestBody = renderParamObject(flagParams.filter((param) => param.in !== 'query'))
  const requestOptions = flagParams.some((param) => param.in === 'query') ? `, { params: ${requestParams} }` : ''
  const arrayHelper = flagParams.some((param) => param.type === 'array' && param.constValue === undefined)
    ? "\n    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {\n      if (value === undefined) return undefined\n      const items = value.split(',').map((item) => item.trim()).filter(Boolean)\n      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))\n      return items\n    }\n"
    : ''
  const request =
    action.responseMode === 'ndjson'
      ? `const stream = await this.client.postStream(${pathExpr}, ${requestBody}${requestOptions})\n    for await (const chunk of stream) process.stdout.write(Buffer.isBuffer(chunk) ? chunk : String(chunk))`
      : action.method === 'GET'
        ? `const data = await this.client.get(${pathExpr}, { params: ${requestParams} })`
        : `const data = await this.client.post(${pathExpr}, ${requestBody}${requestOptions})`
  const output = action.responseMode === 'ndjson' ? '' : '\n    this.output(data)'

  return `// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.\n// Source: ${source}\n// Manifest: ${manifest.manifestVersion} @ ${hash}\n${imports.join('\n')}\n\nexport default class ${className} extends MBSCommand {\n  static description = '${escapeTs(action.description)}'\n${flags}${args}\n  async run(): Promise<void> {\n    const { ${argParams.length > 0 ? 'args, ' : ''}flags } = await this.parse(${className})\n${arrayHelper}\n    ${request}${output}\n  }\n}\n`
}

function uniqueParamsByName(params) {
  const unique = new Map()
  for (const param of params) {
    const current = unique.get(param.name)
    unique.set(param.name, current ? { ...current, required: current.required || param.required } : param)
  }
  return [...unique.values()]
}

function renderFlags(params) {
  if (params.length === 0) return '\n  static flags = {}\n'
  const lines = params.map((param) => `    ${param.name}: ${flagFactory(param)},`)
  return `\n  static flags = {\n${lines.join('\n')}\n  }\n`
}

function renderArgs(params) {
  if (params.length === 0) return ''
  const lines = params.map(
    (param) => `    ${param.name}: Args.string({ required: true, description: '${escapeTs(param.description || param.name)}' }),`,
  )
  return `\n  static args = {\n${lines.join('\n')}\n  }\n`
}

function flagFactory(param) {
  const factory = param.type === 'integer' ? 'integer' : param.type === 'boolean' ? 'boolean' : 'string'
  const description = param.type === 'array' ? `${param.description || param.name} (comma-separated)` : param.description || param.name
  const entries = [`description: '${escapeTs(description)}'`]
  if (param.type === 'boolean') entries.push('allowNo: true')
  if (param.required) entries.push('required: true')
  if (param.default !== undefined) entries.push(`default: ${JSON.stringify(param.default)}`)
  return `Flags.${factory}({ ${entries.join(', ')} })`
}

function renderPathExpression(path, argParams = []) {
  if (!extractPathParams(path).length) return `'${escapeTs(path)}'`
  const pathArgByName = new Map()
  for (const param of argParams) {
    pathArgByName.set(param.name, param.name)
    if (param.apiName) pathArgByName.set(param.apiName, param.name)
  }
  const expression = path
    .replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (_, name) => `\${args.${pathArgByName.get(name) ?? name}}`)
    .replace(/:([A-Za-z][A-Za-z0-9_]*)/g, (_, name) => `\${args.${pathArgByName.get(name) ?? name}}`)
  return `\`${expression}\``
}

/**
 * Renders a domain-only navigation card with no local endpoint catalogue.
 * The card keeps first recall domain-free and documents the domain-specific command only as a
 * conditional follow-up after explicit user scope or a backend narrowing hint.
 *
 * @param {object} mod Parsed audit-manifest module.
 * @returns {string} Generated domain Skill content.
 */
function renderModuleSkill(mod) {
  return `# ${mod.domain} - ${mod.description}\n\n## 业务域\n\n- 适用场景：${mod.scenarios || mod.description}\n- 关键词：${mod.keywords.join(' / ')}\n- Service：\`${mod.service || '-'}\`\n\n## 首次统一召回\n\n首次召回不得根据模块关键词预判或添加 \`--domain\`：\n\n\`\`\`bash\nmbs find "<用户原始需求>"\n\`\`\`\n\n只有用户明确限定 ${mod.domain}，或首次响应的 \`hint.suggestedDomains\` 建议按 ${mod.domain} 收窄时，才执行后续过滤：\n\n\`\`\`bash\nmbs find "<用户原始需求>" --domain ${mod.domain}\n\`\`\`\n\n确认 API 候选后执行返回的 \`detailCommand\`：\n\n\`\`\`bash\nmbs describe <apiId>\n\`\`\`\n\n- 本地不保存或扫描该业务域的接口卡片和单接口文档。\n- 命中 workflow 时按 steps 的 \`intentQuery\` 继续检索 API。\n- 低置信、无结果或歧义时按后端 hint 补充条件。\n- 后端详情确认 \`operationType=QUERY\`、GET/POST、具体 path 和字段作用域后，使用 \`mbs request\` 组装查询；接口无需预生成业务命令。\n- path 参数必须先替换，query 字段放入 \`--params\`，POST body 字段放入 \`--body\`；不得猜测缺失参数。\n- 后端不可用时明确报告失败，不使用本地词法结果降级。\n`
}

function renderActionSkill(mod, action, hash) {
  return renderActionSkillV2(mod, action, hash)

  const actionParams = flattenActionParams(action)
  const usageFlags = actionParams
    .filter((param) => param.in !== 'path')
    .map((param) => ` ${param.required ? '' : '['}--${param.name} <${param.type}>${param.required ? '' : ']'}`)
    .join('')
  const paramRows = actionParams
    .map((param) => `| \`${param.name}\` | ${param.apiName || param.name} | ${param.in} | ${param.type} | ${param.required ? '是' : '否'} | ${param.default ?? '-'} | ${param.description || '-'} |`)
    .join('\n')
  return `# mbs ${mod.domain} ${action.name}\n\n${action.description}\n\n## 用法\n\n\`\`\`bash\nmbs ${mod.domain} ${action.name}${usageFlags}\n\`\`\`\n\n## API\n\n- Service: \`${action.service || mod.service || '-'}\`\n- Method: \`${action.method}\`\n- Path prefix: \`${action.pathPrefix || mod.pathPrefix || '-'}\`\n- Path: \`${action.path}\`\n- Schema version: \`${manifest.schemaVersion}\`\n- Manifest version: \`${manifest.manifestVersion}\`\n- Manifest hash: \`${hash}\`\n\n## 参数\n\n| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |\n|---|---|---|---|---|---|---|\n${paramRows || '| - | - | - | - | - | - | - |'}\n${renderResponseSkill(action.response)}\n## 调用规则\n\n- 缺少必填参数时先询问用户。\n- 不要自行编造参数值。\n`
}

function renderActionSkillV2(mod, action, hash) {
  const actionParams = flattenActionParams(action)
  const usageFlags = actionParams
    .filter((param) => param.in !== 'path')
    .map((param) => ` ${param.required ? '' : '['}--${param.name} <${paramTypeLabel(param)}>${param.required ? '' : ']'}`)
    .join('')
  const paramRows = actionParams
    .map((param) => `| \`${param.name}\` | ${param.apiName || param.name} | ${param.in} | ${paramTypeLabel(param)} | ${param.required ? '是' : '否'} | ${param.default ?? '-'} | ${param.description || '-'} |`)
    .join('\n')

  return `# mbs ${mod.domain} ${action.name}\n\n${action.description}\n\n## 用法\n\n\`\`\`bash\nmbs ${mod.domain} ${action.name}${usageFlags}\n\`\`\`\n\n## API\n\n- Service: \`${action.service || mod.service || '-'}\`\n- Method: \`${action.method}\`\n- Path: \`${joinPaths(action.pathPrefix || mod.pathPrefix, action.path)}\`\n- Schema version: \`${manifest.schemaVersion}\`\n- Manifest version: \`${manifest.manifestVersion}\`\n- Manifest hash: \`${hash}\`\n\n## 参数\n\n| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |\n|---|---|---|---|---|---|---|\n${paramRows || '| - | - | - | - | - | - | - |'}\n${renderResponseSkill(action.response)}\n## 调用规则\n\n- 缺少必填参数时先询问用户。\n- 不要自行编造参数值。\n`
}

function renderResponseSkill(response) {
  if (!response) return '\n'
  const rows = flattenResponseFields(response)
  if (rows.length === 0) return '\n'

  const fieldRows = rows
    .map((field) => `| \`${field.path}\` | ${field.type} | ${field.description || '-'} | ${field.usage || '-'} |`)
    .join('\n')
  return `\n## 响应字段\n\n| 路径 | 类型 | 说明 | 用途 |\n|---|---|---|---|\n${fieldRows}\n\n`
}

// Arrays carry their element type in the schema (and the generated `toArray`
// codegen uses it); surface it in docs as `array<integer>` instead of bare `array`.
function paramTypeLabel(param) {
  return param.type === 'array' && param.itemsType ? `array<${param.itemsType}>` : param.type
}

function joinPaths(prefix, path) {
  if (!prefix) return path
  if (!path) return prefix
  return `${prefix.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

function flattenResponseFields(schema, basePath = '') {
  if (!schema) return []

  if (schema.type === 'object') {
    const rows = []
    if (basePath && !basePath.endsWith('[]')) rows.push(responseRow(basePath, schema))
    for (const [name, child] of Object.entries(schema.properties ?? {})) {
      rows.push(...flattenResponseFields(child, basePath ? `${basePath}.${name}` : name))
    }
    return rows
  }

  if (schema.type === 'array') {
    const arrayPath = basePath ? `${basePath}[]` : '$[]'
    const rows = [responseRow(arrayPath, schema)]
    const tuple = tupleItems(schema.items)
    if (tuple) {
      for (const [index, child] of tuple) {
        rows.push(...flattenResponseFields(child, `${arrayPath}[${index}]`))
      }
    } else if (schema.items) {
      rows.push(...flattenResponseFields(schema.items, arrayPath))
    }
    return rows
  }

  return basePath ? [responseRow(basePath, schema)] : [responseRow('$', schema)]
}

// The server encodes a heterogeneous array element as a positional tuple:
// `items: { "0": <schema>, "1": <schema>, ... }` (a numeric-keyed object, not a
// JSON-Schema node). The zod parse passes the numeric keys through while
// injecting schema defaults (type:'unknown', properties, ...) onto the same
// object, so detect by the presence of numeric keys, not by the absent type.
// Returns entries in index order; null for a normal single-schema `items`.
function tupleItems(items) {
  if (!items || typeof items !== 'object') return null
  const numericKeys = Object.keys(items).filter((key) => /^\d+$/.test(key))
  if (numericKeys.length === 0) return null
  return numericKeys.map((key) => [Number(key), items[key]]).sort((a, b) => a[0] - b[0])
}

// The server's audit tool encodes object-array elements by positional index
// (`items: {"0":..,"1":..}`) and drops the real field names — which aren't
// recoverable from the manifest alone. manifests/schema-overrides.json supplies
// them by hand; here we rebuild `items` into a proper named-`properties` object
// so the rest of the pipeline (docs/commands) sees the real shape. No-op once the
// server is fixed (a corrected schema has no numeric keys left to rename).
function applyResponseFieldOverrides(manifest) {
  const overrides = loadSchemaOverrides()
  for (const mod of manifest.modules) {
    for (const action of mod.actions) {
      const pathMap = overrides[action.name]
      if (pathMap && action.response) renameTupleItems(action.response, pathMap, '')
    }
  }
}

function loadSchemaOverrides() {
  const path = join(repoRoot, 'manifests', 'schema-overrides.json')
  if (!existsSync(path)) return {}
  const { _comment, ...rest } = JSON.parse(readFileSync(path, 'utf8'))
  return rest
}

function renameTupleItems(schema, pathMap, basePath) {
  if (!schema || typeof schema !== 'object') return
  if (schema.type === 'array' && schema.items && typeof schema.items === 'object') {
    const names = pathMap[basePath]
    const tuple = tupleItems(schema.items)
    if (names && tuple) {
      if (names.length === tuple.length) {
        const properties = {}
        tuple.forEach(([, child], index) => {
          properties[names[index]] = child
        })
        schema.items = { type: 'object', description: schema.items.description ?? '', properties }
      } else {
        console.error(`schema-override skipped at "${basePath}": ${tuple.length} fields but ${names.length} names`)
      }
    }
    renameTupleItems(schema.items, pathMap, `${basePath}[]`)
  }
  for (const [name, child] of Object.entries(schema.properties ?? {})) {
    renameTupleItems(child, pathMap, basePath ? `${basePath}.${name}` : name)
  }
}

function responseRow(path, schema) {
  return {
    path,
    type: schema.type,
    description: withEnumDescription(schema.description, schema.enum),
    usage: schema['x-usage'],
  }
}

function withEnumDescription(description, enumValues) {
  if (!enumValues?.length) return description
  const enumText = enumValues.map((value) => JSON.stringify(value)).join(', ')
  return description ? `${description}; enum: ${enumText}` : `enum: ${enumText}`
}

function requiredParams(action) {
  return flattenActionParams(action).filter((param) => param.required && param.constValue === undefined).map((param) => param.name)
}

function renderParamObject(params) {
  if (params.length === 0) return '{}'
  const tree = {}
  for (const param of params) {
    let cursor = tree
    const path = param.apiPath?.length ? param.apiPath : [param.apiName || param.name]
    for (const part of path.slice(0, -1)) {
      cursor[part] ??= {}
      cursor = cursor[part]
    }
    cursor[path.at(-1)] = renderFlagValue(param)
  }
  return renderObjectLiteral(tree)
}

function renderFlagValue(param) {
  if (param.constValue !== undefined) return JSON.stringify(param.constValue)
  if (param.type === 'array') return `toArray(flags.${param.name}, '${param.itemsType || 'string'}')`
  return `flags.${param.name}`
}

function renderObjectLiteral(value) {
  const entries = Object.entries(value).map(([key, child]) => {
    const rendered = typeof child === 'string' ? child : renderObjectLiteral(child)
    return `${JSON.stringify(key)}: ${rendered}`
  })
  return `{ ${entries.join(', ')} }`
}

function flattenActionParams(action) {
  if (action.request) {
    return [
      ...flattenRequestSchema(action.request.path, 'path'),
      ...flattenRequestSchema(action.request.query, 'query'),
      ...flattenRequestSchema(action.request.body, 'body'),
    ]
  }
  return action.params.map((param) => ({
    ...param,
    apiPath: [param.apiName || param.name],
  }))
}

function flattenRequestSchema(schema, location, path = [], inheritedRequired = false) {
  if (!schema) return []
  if (schema.const !== undefined) {
    const apiName = path.at(-1)
    if (!apiName) return []
    const cliName = schema['x-cli-name'] ?? toCamelCase(path)
    return [
      {
        name: cliName,
        apiName,
        apiPath: path,
        in: location,
        type: schema.type,
        itemsType: schema.items?.type,
        required: false,
        default: schema.default,
        constValue: schema.const,
        description: schema.description,
      },
    ]
  }
  if (schema.type === 'object') {
    const requiredNames = new Set(schema.required ?? [])
    return Object.entries(schema.properties ?? {}).flatMap(([name, child]) =>
      flattenRequestSchema(child, location, [...path, name], inheritedRequired || requiredNames.has(name)),
    )
  }
  const apiName = path.at(-1)
  if (!apiName) return []
  const cliName = schema['x-cli-name'] ?? toCamelCase(path)
  return [
    {
      name: cliName,
      apiName,
      apiPath: path,
      in: location,
      type: schema.type,
      itemsType: schema.items?.type,
      required: inheritedRequired,
      default: schema.default,
      description: schema.description,
    },
  ]
}

function toCamelCase(parts) {
  return parts
    .map((part, index) => normalizeIdentifierPart(part, index > 0))
    .join('')
}

function normalizeIdentifierPart(part, capitalize) {
  const tokens = part.split(/[^A-Za-z0-9]+/).filter(Boolean)
  const value =
    tokens.length <= 1
      ? lowerFirst(tokens[0] ?? '')
      : tokens
          .map((token, index) => {
            const lower = token.toLowerCase()
            return index === 0 ? lower : `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`
          })
          .join('')
  return capitalize ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : value
}

function lowerFirst(value) {
  return value ? `${value.charAt(0).toLowerCase()}${value.slice(1)}` : value
}

function toClassName(value) {
  return value
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function writeFile(path, content) {
  const label = relative(repoRoot, path)
  changes.push(label)
  if (dryRun) return
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content)
}

function removePath(path) {
  const label = relative(repoRoot, path)
  changes.push(`delete ${label}`)
  if (dryRun) return
  rmSync(path, { recursive: true, force: true })
}

function removeStaleFiles(dir, activeFiles, suffix) {
  if (!existsSync(dir)) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(suffix) && !activeFiles.has(entry.name)) {
      removePath(join(dir, entry.name))
    }
  }
}

function isDirectoryEmptyDeep(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!isDirectoryEmptyDeep(entryPath)) return false
    } else {
      return false
    }
  }
  return true
}

function sortObject(value) {
  return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)))
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeTs(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function printSummary() {
  const uniqueChanges = [...new Set(changes)]
  console.log(
    JSON.stringify(
      {
        ok: true,
        dryRun,
        source: manifestInput.source,
        schemaVersion: manifest.schemaVersion,
        manifestVersion: manifest.manifestVersion,
        hash: sourceHash,
        changes: uniqueChanges,
      },
      null,
      2,
    ),
  )
  console.log('Next: pnpm install && pnpm build && pnpm test')
}
