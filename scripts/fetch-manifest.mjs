#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseAuditManifest } from './lib/manifest-schema.mjs'
import { normalizeServerManifest } from './lib/normalize-manifest.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const defaultOut = 'manifests/mbs-api-manifest.json'
const defaultManifestVersion = '2026-05-20T00:00:00+08:00'

const args = parseArgs(process.argv.slice(2))
const out = args.out ?? defaultOut
const outPath = isAbsolute(out) ? out : join(repoRoot, out)

let raw
if (args.file) {
  // Offline mode: read a previously saved raw server response (envelope or data).
  const path = isAbsolute(args.file) ? args.file : join(repoRoot, args.file)
  raw = JSON.parse(readFileSync(path, 'utf8'))
} else {
  const url = args.url ?? process.env.MBS_AUDIT_MANIFEST_URL
  if (!url) {
    console.error('No manifest source. Pass --url <url>, set MBS_AUDIT_MANIFEST_URL, or use --file <raw.json>.')
    process.exit(1)
  }
  // NOTE: the live endpoint requires auth (login cookie + client-type header).
  // That wiring is still pending; offline --file mode works without it.
  const method = (args.method ?? 'POST').toUpperCase()
  const manifestVersion = args['manifest-version'] ?? defaultManifestVersion
  const response = await fetch(url, {
    method,
    headers: { 'content-type': 'application/json' },
    body: method === 'GET' ? undefined : JSON.stringify({ manifestVersion }),
  })
  if (!response.ok) {
    console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    process.exit(1)
  }
  raw = JSON.parse(await response.text())
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

function unwrap(value) {
  if (value && typeof value === 'object') {
    // Java-style { code, message, data } envelope (code 0 or 200 = success)
    if ('code' in value) {
      if (value.code !== 0 && value.code !== 200) {
        throw new Error(`API code ${value.code}: ${value.message ?? '(no message)'}`)
      }
      return value.data ?? value
    }
    // { ok, data } envelope
    if ('ok' in value) {
      if (value.ok === false) {
        const message = value.error?.message ?? JSON.stringify(value.error ?? value)
        throw new Error(`API returned ok:false — ${message}`)
      }
      return value.data ?? value
    }
  }
  return value
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
    } else if (arg === '--manifest-version') {
      parsed['manifest-version'] = argv[index + 1]
      index += 1
    }
  }
  return parsed
}
