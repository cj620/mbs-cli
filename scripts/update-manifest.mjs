#!/usr/bin/env node
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, isAbsolute, join, relative } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { parseAuditManifest } from './lib/manifest-schema.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const defaultManifestPath = 'manifests/mbs-api-manifest.json'
const defaultSnapshotDir = 'fixtures'

const args = parseArgs(process.argv.slice(2))

if (args.help) {
  printUsage()
  process.exit(0)
}

try {
  const source = await loadDelta(args)
  const basePath = repoPath(args.manifest || defaultManifestPath)
  const base = parseAuditManifest(readJson(basePath))
  const delta = parseDelta(source.value)
  const { manifest, stats } = mergeManifest(base, delta)
  parseAuditManifest(manifest)

  const manifestText = `${JSON.stringify(manifest, null, 2)}\n`
  const dryRun = Boolean(args['dry-run'])
  const snapshotPath = args['no-snapshot'] ? undefined : repoPath(args.snapshot || defaultSnapshotPath(delta.manifestVersion))

  if (dryRun) {
    if (!args['no-generate']) {
      runGenerator(manifestText, true)
    }
  } else {
    if (snapshotPath) {
      writeJson(snapshotPath, delta)
    }

    writeFileSync(basePath, manifestText)

    if (!args['no-generate']) {
      runGenerator(manifestText, false)
    }
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        dryRun,
        source: source.label,
        manifest: relative(repoRoot, basePath),
        snapshot: dryRun || !snapshotPath ? undefined : relative(repoRoot, snapshotPath),
        generated: !args['no-generate'],
        schemaVersion: manifest.schemaVersion,
        manifestVersion: manifest.manifestVersion,
        stats,
      },
      null,
      2,
    ),
  )
} catch (err) {
  console.error(
    JSON.stringify(
      {
        ok: false,
        error: {
          message: err instanceof Error ? err.message : String(err),
        },
      },
      null,
      2,
    ),
  )
  process.exit(1)
}

function parseArgs(argv) {
  const parsed = {}
  const valueFlags = new Set(['--file', '--url', '--manifest', '--snapshot'])
  const boolFlags = new Set(['--dry-run', '--no-snapshot', '--no-generate', '--help'])

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (valueFlags.has(arg)) {
      const value = argv[index + 1]
      if (!value || value.startsWith('--')) throw new Error(`${arg} requires a value`)
      parsed[arg.slice(2)] = value
      index += 1
    } else if (boolFlags.has(arg)) {
      parsed[arg.slice(2)] = true
    } else {
      throw new Error(`Unknown argument: ${arg}`)
    }
  }

  return parsed
}

async function loadDelta(options) {
  if (options.file && options.url) {
    throw new Error('Use only one of --file or --url')
  }

  if (options.file) {
    const path = repoPath(options.file)
    return { label: options.file, value: readJson(path) }
  }

  const url = options.url || process.env.MBS_AUDIT_MANIFEST_DELTA_URL
  if (url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }

    return { label: url, value: await response.json() }
  }

  throw new Error('Provide --file <path>, --url <url>, or MBS_AUDIT_MANIFEST_DELTA_URL')
}

function parseDelta(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('Delta manifest must be a JSON object')
  }
  if (value.schemaVersion !== undefined && value.schemaVersion !== '1') {
    throw new Error('Delta schemaVersion must be "1"')
  }
  if (!Array.isArray(value.modules)) {
    throw new Error('Delta manifest must contain a modules array')
  }

  for (const mod of value.modules) {
    if (!mod || typeof mod !== 'object' || Array.isArray(mod)) {
      throw new Error('Delta modules must be JSON objects')
    }
    if (typeof mod.domain !== 'string' || !mod.domain) {
      throw new Error('Delta module requires domain')
    }
    if (mod.actions !== undefined && !Array.isArray(mod.actions)) {
      throw new Error(`Delta module ${mod.domain} actions must be an array`)
    }
    for (const action of mod.actions ?? []) {
      if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error(`Delta module ${mod.domain} actions must be JSON objects`)
      }
      if (typeof action.name !== 'string' || !action.name) {
        throw new Error(`Delta module ${mod.domain} action requires name`)
      }
    }
  }

  return value
}

function mergeManifest(base, delta) {
  const manifest = clone(base)
  const stats = {
    modulesAdded: 0,
    modulesUpdated: 0,
    actionsAdded: 0,
    actionsUpdated: 0,
    actionsDeprecated: 0,
  }

  if (delta.manifestVersion) {
    manifest.manifestVersion = delta.manifestVersion
  }

  for (const deltaMod of delta.modules) {
    const moduleIndex = manifest.modules.findIndex((mod) => mod.domain === deltaMod.domain)
    if (moduleIndex === -1) {
      manifest.modules.push(clone(deltaMod))
      stats.modulesAdded += 1
      stats.actionsAdded += deltaMod.actions?.length ?? 0
      stats.actionsDeprecated += (deltaMod.actions ?? []).filter((action) => action.deprecated).length
      continue
    }

    const existing = manifest.modules[moduleIndex]
    const { actions, ...modulePatch } = deltaMod
    manifest.modules[moduleIndex] = { ...existing, ...modulePatch }
    stats.modulesUpdated += 1

    if (actions) {
      manifest.modules[moduleIndex].actions = mergeActions(existing.actions, actions, stats)
    }
  }

  return { manifest, stats }
}

function mergeActions(baseActions, deltaActions, stats) {
  const actions = clone(baseActions)
  for (const deltaAction of deltaActions) {
    const actionIndex = actions.findIndex((action) => action.name === deltaAction.name)
    if (actionIndex === -1) {
      actions.push(clone(deltaAction))
      stats.actionsAdded += 1
    } else {
      actions[actionIndex] = { ...actions[actionIndex], ...clone(deltaAction) }
      stats.actionsUpdated += 1
    }

    if (deltaAction.deprecated) {
      stats.actionsDeprecated += 1
    }
  }
  return actions
}

function runGenerator(manifestText, dryRun) {
  if (!dryRun) {
    run(process.execPath, ['scripts/gen-from-manifest.mjs'])
    return
  }

  const tempDir = mkdtempSync(join(tmpdir(), 'mbs-manifest-'))
  const tempFile = join(tempDir, 'merged-manifest.json')
  try {
    writeFileSync(tempFile, manifestText)
    run(process.execPath, ['scripts/gen-from-manifest.mjs', '--file', tempFile, '--dry-run'])
  } finally {
    rmSync(tempDir, { recursive: true, force: true })
  }
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: repoRoot,
    stdio: 'inherit',
  })

  if (result.error) {
    throw result.error
  }
  if (result.status !== 0) {
    throw new Error(`${command} ${commandArgs.join(' ')} failed with exit code ${result.status}`)
  }
}

function defaultSnapshotPath(manifestVersion) {
  const stamp = String(manifestVersion || new Date().toISOString())
    .replace(/[:.]/g, '-')
    .replace(/[^\w+-]/g, '_')
  return join(defaultSnapshotDir, `manifest-delta-${stamp}.json`)
}

function repoPath(path) {
  return isAbsolute(path) ? path : join(repoRoot, path)
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8').replace(/^\uFEFF/, ''))
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`)
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function printUsage() {
  console.log(`Usage:
  pnpm update:manifest -- --file fixtures/manifest-delta.json
  pnpm update:manifest -- --url https://example.test/manifest-delta.json
  MBS_AUDIT_MANIFEST_DELTA_URL=https://example.test/manifest-delta.json pnpm update:manifest

Options:
  --file <path>       Read delta manifest from a local JSON file
  --url <url>         Fetch delta manifest JSON from a URL
  --manifest <path>   Target project manifest (default: ${defaultManifestPath})
  --snapshot <path>   Save fetched/read delta JSON to this path
  --no-snapshot       Do not save a delta snapshot under fixtures/
  --no-generate       Merge only; do not run gen-from-manifest
  --dry-run           Validate and preview generated changes without writing project files
`)
}
