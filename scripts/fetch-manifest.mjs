#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseAuditManifest } from './lib/manifest-schema.mjs'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const defaultOut = 'manifests/mbs-api-manifest.json'

const args = parseArgs(process.argv.slice(2))
const url = args.url ?? process.env.MBS_AUDIT_MANIFEST_URL
if (!url) {
  console.error('No manifest URL. Pass --url <url> or set MBS_AUDIT_MANIFEST_URL.')
  process.exit(1)
}

const out = args.out ?? defaultOut
const outPath = isAbsolute(out) ? out : join(repoRoot, out)

const response = await fetch(url)
if (!response.ok) {
  console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
  process.exit(1)
}

const raw = JSON.parse(await response.text())
const manifest = unwrap(raw)

// Validate before writing: a malformed/unknown-version manifest must not land on disk.
parseAuditManifest(manifest)

// Guard against an empty payload wiping generated domains on the next gen run.
if (!Array.isArray(manifest.modules) || manifest.modules.length === 0) {
  console.error('Fetched manifest has no modules — refusing to write. Aborting.')
  process.exit(1)
}

writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.error(`Wrote ${manifest.modules.length} module(s) to ${out} (schemaVersion ${manifest.schemaVersion}, ${manifest.manifestVersion})`)
console.error('Review the diff, then run: pnpm gen:manifest:dry  (then  pnpm gen:manifest)')

function unwrap(value) {
  if (value && typeof value === 'object' && 'ok' in value) {
    if (value.ok === false) {
      const message = value.error?.message ?? JSON.stringify(value.error ?? value)
      throw new Error(`API returned ok:false — ${message}`)
    }
    return value.data ?? value
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
    }
  }
  return parsed
}
