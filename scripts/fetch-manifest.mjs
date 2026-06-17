#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseAuditManifest } from './lib/manifest-schema.mjs'
import { normalizeServerManifest } from './lib/normalize-manifest.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const defaultOut = 'manifests/mbs-api-manifest.json'
const defaultPath = '/gateway/cli-service/cli/api/manifest'
const defaultManifestVersion = '2026-05-20T00:00:00+08:00'

const args = parseArgs(process.argv.slice(2))
const out = args.out ?? defaultOut
const outPath = isAbsolute(out) ? out : join(repoRoot, out)
const manifestVersion = args['manifest-version'] ?? defaultManifestVersion

let raw
if (args.file) {
  // Offline mode: read a saved raw server response, or '-' for stdin.
  const text =
    args.file === '-'
      ? readFileSync(0, 'utf8')
      : readFileSync(isAbsolute(args.file) ? args.file : join(repoRoot, args.file), 'utf8')
  raw = parseJson(text)
} else if (args.url) {
  // Direct fetch — only for auth-free endpoints.
  const response = await fetch(args.url, {
    method: (args.method ?? 'POST').toUpperCase(),
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ manifestVersion }),
  })
  if (!response.ok) {
    console.error(`Failed to fetch ${args.url}: ${response.status} ${response.statusText}`)
    process.exit(1)
  }
  raw = parseJson(await response.text())
} else {
  // Authenticated fetch via the CLI's own `mbs raw` (reuses login/refresh).
  // execFileSync captures stdout as UTF-8 directly — no shell, no PowerShell
  // re-encoding (which corrupts non-ASCII).
  const apiPath = args.path ?? defaultPath
  const cliBin = join(repoRoot, 'packages', 'cli', 'bin', 'run.js')
  const body = JSON.stringify({ manifestVersion })
  let stdout
  try {
    stdout = execFileSync(process.execPath, [cliBin, 'raw', 'POST', apiPath, '--body', body], {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
  } catch (err) {
    const out = (err.stdout ?? '').toString().trim()
    console.error(`mbs raw failed: ${out || err.message}`)
    console.error('If this is an auth error (401/未登陆), run `mbs login` first.')
    process.exit(1)
  }
  raw = parseJson(stdout)
}

// Server ManifestVo -> canonical audit manifest (inject schemaVersion, drop
// module.code, serviceName -> service, derive kebab command ids, normalize types).
const manifest = normalizeServerManifest(unwrap(raw))

// Validate before writing: a malformed/unknown-version manifest must not land on disk.
parseAuditManifest(manifest)

// Guard against an empty payload wiping generated domains on the next gen run.
if (!Array.isArray(manifest.modules) || manifest.modules.length === 0) {
  console.error('Manifest has no modules — refusing to write. Aborting.')
  process.exit(1)
}

writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.error(`Wrote ${manifest.modules.length} module(s) to ${out} (schemaVersion ${manifest.schemaVersion}, ${manifest.manifestVersion})`)
console.error('Review the diff, then run: pnpm gen:manifest:dry  (then  pnpm gen:manifest)')

function parseJson(text) {
  // Strip a leading BOM (Windows pipes/editors often add one) before parsing.
  return JSON.parse(String(text).replace(/^﻿/, ''))
}

// Peel response envelopes until the bare manifest remains. Handles nesting such
// as `mbs raw` output: { ok, data: { code, message, data: <manifest> } }.
function unwrap(value) {
  let current = value
  for (let depth = 0; depth < 5 && current && typeof current === 'object'; depth += 1) {
    if ('ok' in current) {
      if (current.ok === false) {
        const message = current.error?.message ?? JSON.stringify(current.error ?? current)
        throw new Error(`API returned ok:false — ${message}`)
      }
      if (current.data === undefined) break
      current = current.data
      continue
    }
    if ('code' in current && ('data' in current || 'message' in current)) {
      if (current.code !== 0 && current.code !== 200) {
        throw new Error(`API code ${current.code}: ${current.message ?? '(no message)'}`)
      }
      if (current.data === undefined) break
      current = current.data
      continue
    }
    break
  }
  return current
}

function parseArgs(argv) {
  const parsed = {}
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--url') {
      parsed.url = argv[index + 1]
      index += 1
    } else if (arg === '--out') {
      parsed.out = argv[index + 1]
      index += 1
    } else if (arg === '--method') {
      parsed.method = argv[index + 1]
      index += 1
    } else if (arg === '--file') {
      parsed.file = argv[index + 1]
      index += 1
    } else if (arg === '--path') {
      parsed.path = argv[index + 1]
      index += 1
    } else if (arg === '--manifest-version') {
      parsed['manifest-version'] = argv[index + 1]
      index += 1
    }
  }
  return parsed
}
