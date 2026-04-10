import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const workflow = readFileSync(new URL('../.github/workflows/release.yml', import.meta.url), 'utf8')

assert.match(
  workflow,
  /pnpm deploy --filter @mbs\/cli --legacy \${{\s*runner\.temp\s*}}\/mbs-deploy/,
  'release workflow must create a pnpm deploy bundle for @mbs/cli before oclif pack tarballs'
)

assert.match(
  workflow,
  /fs\.cpSync\(src,\s*dest,\s*\{\s*recursive:\s*true,\s*dereference:\s*true\s*\}\)/,
  'release workflow must dereference workspace symlinks when copying packages into .ws'
)

assert.match(
  workflow,
  /rewriteWorkspaceRefs\(wsPkg,\s*workspaceFileRefs\)/,
  'release workflow must rewrite workspace:* references inside copied .ws package manifests'
)

console.log('release workflow preserves deploy bundle and dereferences workspace symlinks')
