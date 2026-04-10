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

assert.match(
  workflow,
  /registry-url:\s*'https:\/\/registry\.npmjs\.org'/,
  'release workflow must configure the npm registry before publishing'
)

assert.match(
  workflow,
  /NODE_AUTH_TOKEN:\s*\${{\s*secrets\.NPM_TOKEN\s*}}/,
  'release workflow must publish with the repository NPM_TOKEN secret'
)

assert.match(
  workflow,
  /npm publish(?:\s+--access public)?/,
  'release workflow must publish @mbs/cli to npm'
)

const cliPackage = readFileSync(new URL('../packages/cli/package.json', import.meta.url), 'utf8')

assert.match(
  cliPackage,
  /"publishConfig":\s*\{[\s\S]*"access":\s*"public"/,
  'packages/cli/package.json must declare public npm publish access'
)

console.log('release workflow preserves deploy bundle and publishes @mbs/cli to npm')
