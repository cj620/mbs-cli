#!/usr/bin/env node
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractPathParams, parseAuditManifest } from './lib/manifest-schema.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const generatedBlockStart = '<!-- AUTO-GENERATED API MODULES START -->'
const generatedBlockEnd = '<!-- AUTO-GENERATED API MODULES END -->'
const generatedOwner = 'mbs-audit-manifest'

const args = parseArgs(process.argv.slice(2))
const dryRun = Boolean(args['dry-run'])
const manifestInput = await loadManifest(args.file, process.env.MBS_AUDIT_MANIFEST_URL)
const manifest = parseAuditManifest(JSON.parse(manifestInput.content))
const sourceHash = createHash('sha256').update(manifestInput.content).digest('hex')
const activeModules = manifest.modules
  .map((mod) => ({
    ...mod,
    actions: mod.actions.filter((action) => !action.deprecated),
  }))
  .filter((mod) => mod.actions.length > 0)

const changes = []

for (const mod of activeModules) {
  syncDomainPackage(mod, manifestInput.source, sourceHash)
  syncDomainSkills(mod, sourceHash)
}

syncCliPackageJson(activeModules.map((mod) => mod.domain))
syncSkillIndex(activeModules)
syncSkillManifest(activeModules)

for (const mod of manifest.modules) {
  if (mod.actions.every((action) => action.deprecated)) {
    removeGeneratedDomain(mod.domain)
  }
}

printSummary()

function parseArgs(argv) {
  const parsed = {}
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--dry-run') {
      parsed['dry-run'] = true
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
    const path = join(repoRoot, file)
    return { source: file, content: readFileSync(path, 'utf8') }
  }
  if (url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }
    return { source: url, content: await response.text() }
  }
  throw new Error('Provide --file <path> or MBS_AUDIT_MANIFEST_URL')
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

function syncDomainSkills(mod, hash) {
  const skillDir = join(repoRoot, 'skills', 'references', mod.domain)
  const activeSkillFiles = new Set(['SKILL.md', ...mod.actions.map((action) => `${action.name}.md`)])
  removeStaleFiles(skillDir, activeSkillFiles, '.md')
  writeFile(join(skillDir, 'SKILL.md'), renderModuleSkill(mod))
  for (const action of mod.actions) {
    writeFile(join(skillDir, `${action.name}.md`), renderActionSkill(mod, action, hash))
  }
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
    .replace(new RegExp(`\\n?${escapeRegExp(generatedBlockStart)}[\\s\\S]*?${escapeRegExp(generatedBlockEnd)}\\n?`), '\n')
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
  writeFile(skillPath, next)
}

function syncSkillManifest(modules) {
  const manifestPath = join(repoRoot, 'skills', 'manifest.json')
  const current = readJson(manifestPath)
  const generatedNames = new Set(modules.map((mod) => mod.domain))
  const staticModules = (current.modules ?? []).filter((mod) => !mod.generated && !generatedNames.has(mod.name))
  const generatedModules = modules.map((mod) => ({
    name: mod.domain,
    description: mod.description_cn,
    keywords: mod.keywords,
    skill: `references/${mod.domain}/SKILL.md`,
    commands: mod.actions.map((action) => `mbs ${mod.domain} ${action.name}`),
    generated: true,
  }))
  current.modules = [...staticModules, ...generatedModules]
  writeFile(manifestPath, `${JSON.stringify(current, null, 2)}\n`)
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
  return `import { Plugin } from '@oclif/core'\n\n${imports}\n\nexport default class ${toClassName(mod.domain)}Plugin extends Plugin {\n  static readonly topic = '${mod.domain}'\n  static readonly description = '${escapeTs(mod.description_cn)}'\n\n  async loadCommands(): Promise<void> {\n    // Commands are auto-loaded via the glob pattern in package.json\n  }\n}\n`
}

function renderCommand(mod, action, source, hash) {
  const pathParamNames = new Set(extractPathParams(action.path))
  const argParams = action.params.filter((param) => pathParamNames.has(param.name))
  const flagParams = action.params.filter((param) => !pathParamNames.has(param.name))
  const imports = [`import { ${argParams.length > 0 ? 'Args, ' : ''}Flags } from '@oclif/core'`, "import { MBSCommand } from '@mb-it-org/shared'"]
  const className = `${toClassName(mod.domain)}${toClassName(action.name)}`
  const flags = renderFlags(flagParams)
  const args = renderArgs(argParams)
  const pathExpr = renderPathExpression(action.path)
  const request =
    action.method === 'GET'
      ? `const data = await this.client.get(${pathExpr}, { params: flags })`
      : `const data = await this.client.post(${pathExpr}, { ...flags })`

  return `// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.\n// Source: ${source}\n// Manifest: ${manifest.manifestVersion} @ ${hash}\n${imports.join('\n')}\n\nexport default class ${className} extends MBSCommand {\n  static description = '${escapeTs(action.description_cn)}'\n${flags}${args}\n  async run(): Promise<void> {\n    const { ${argParams.length > 0 ? 'args, ' : ''}flags } = await this.parse(${className})\n\n    ${request}\n    this.output(data)\n  }\n}\n`
}

function renderFlags(params) {
  if (params.length === 0) return '\n  static flags = {}\n'
  const lines = params.map((param) => `    ${param.name}: ${flagFactory(param)},`)
  return `\n  static flags = {\n${lines.join('\n')}\n  }\n`
}

function renderArgs(params) {
  if (params.length === 0) return ''
  const lines = params.map(
    (param) => `    ${param.name}: Args.string({ required: true, description: '${escapeTs(param.desc || param.name)}' }),`,
  )
  return `\n  static args = {\n${lines.join('\n')}\n  }\n`
}

function flagFactory(param) {
  const factory = param.type === 'integer' ? 'integer' : param.type === 'boolean' ? 'boolean' : 'string'
  const entries = [`description: '${escapeTs(param.desc || param.name)}'`]
  if (param.required) entries.push('required: true')
  if (param.default !== undefined) entries.push(`default: ${JSON.stringify(param.default)}`)
  return `Flags.${factory}({ ${entries.join(', ')} })`
}

function renderPathExpression(path) {
  if (!extractPathParams(path).length) return `'${escapeTs(path)}'`
  const expression = path
    .replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, '${args.$1}')
    .replace(/:([A-Za-z][A-Za-z0-9_]*)/g, '${args.$1}')
  return `\`${expression}\``
}

function renderModuleSkill(mod) {
  const commandRows = mod.actions
    .map((action) => `| ${action.description_cn} | \`mbs ${mod.domain} ${action.name}\` | ${requiredParams(action).join(', ') || '-'} |`)
    .join('\n')
  const detailLinks = mod.actions.map((action) => `- [${action.name}.md](${action.name}.md)`).join('\n')
  return `# ${mod.domain} - ${mod.description_cn}\n\n通过 \`mbs ${mod.domain}\` 命令查询${mod.description_cn}数据。\n\n## 适用场景\n\n${mod.scenarios_cn}\n\n## 意图匹配\n\n关键词：${mod.keywords.join(' / ')}\n\n## 命令一览\n\n| 意图 | 命令 | 必填参数 |\n|---|---|---|\n${commandRows}\n\n## 命令详情\n\n${detailLinks}\n\n## 参数规则\n\n- 执行前必须确认必填参数。\n- 不要猜测 ID、状态、日期范围或其他筛选条件。\n- 未覆盖的临时接口探索使用 \`mbs raw GET/POST <endpoint>\`。\n`
}

function renderActionSkill(mod, action, hash) {
  const usageFlags = action.params
    .filter((param) => !extractPathParams(action.path).includes(param.name))
    .map((param) => ` ${param.required ? '' : '['}--${param.name} <${param.type}>${param.required ? '' : ']'}`)
    .join('')
  const paramRows = action.params
    .map((param) => `| \`${param.name}\` | ${param.type} | ${param.required ? '是' : '否'} | ${param.default ?? '-'} | ${param.desc || '-'} |`)
    .join('\n')
  return `# mbs ${mod.domain} ${action.name}\n\n${action.description_cn}\n\n## 用法\n\n\`\`\`bash\nmbs ${mod.domain} ${action.name}${usageFlags}\n\`\`\`\n\n## API\n\n- Method: \`${action.method}\`\n- Path: \`${action.path}\`\n- Schema version: \`${manifest.schemaVersion}\`\n- Manifest version: \`${manifest.manifestVersion}\`\n- Manifest hash: \`${hash}\`\n\n## 参数\n\n| 参数 | 类型 | 必填 | 默认值 | 说明 |\n|---|---|---|---|---|\n${paramRows || '| - | - | - | - | - |'}\n${renderResponseSkill(action.response)}\n## 调用规则\n\n- 缺少必填参数时先询问用户。\n- 不要自行编造参数值。\n`
}

function renderResponseSkill(response) {
  if (!response) return '\n'
  const fieldRows = response.fields
    .map((field) => `| \`${field.name}\` | ${field.type} | ${field.desc || '-'} | ${field.usage || '-'} |`)
    .join('\n')
  return `\n## 响应字段\n\n- 响应类型：\`${response.type}\`\n- 说明：${response.desc || '-'}\n\n| 字段 | 类型 | 说明 | 用途 |\n|---|---|---|---|\n${fieldRows || '| - | - | - | - |'}\n\n`
}

function requiredParams(action) {
  return action.params.filter((param) => param.required).map((param) => `\`${param.name}\``)
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
