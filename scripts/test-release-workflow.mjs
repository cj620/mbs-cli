import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const workflow = readFileSync(new URL('../.github/workflows/release.yml', import.meta.url), 'utf8')

assert.match(
  workflow,
  /pnpm deploy --filter @mb-it-org\/cli --legacy \${{\s*runner\.temp\s*}}\/mbs-deploy/,
  'release workflow must create a pnpm deploy bundle for @mb-it-org/cli before oclif pack tarballs'
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
  'release workflow must publish @mb-it-org/cli to npm'
)

assert.match(
  workflow,
  /- name: Validate npm bundle installability/,
  'release workflow must validate the npm bundle before publishing'
)

assert.match(
  workflow,
  /working-directory:\s*\${{\s*runner\.temp\s*}}\/mbs-deploy/,
  'release workflow must publish from the processed deploy bundle rather than packages/cli'
)

assert.doesNotMatch(
  workflow,
  /- name: Publish @mb-it-org\/cli to npm[\s\S]*working-directory:\s*packages\/cli/,
  'release workflow must not publish directly from packages/cli'
)

assert.match(
  workflow,
  /npm pack/,
  'release workflow must create an npm tarball from the processed bundle before publishing'
)

assert.match(
  workflow,
  /npm install --global .*PACK_FILE/,
  'release workflow must simulate installing the packed tarball before publishing'
)

assert.match(
  workflow,
  /bundledDependencies/,
  'release workflow must convert internal workspace packages into bundled dependencies for npm publish'
)

assert.match(
  workflow,
  /node .*scripts\/prune-optional-platform-deps\.cjs \./,
  'release workflow must prune unsupported optional dependencies before generating npm shrinkwrap'
)

assert.match(
  workflow,
  /npm view @mb-it-org\/cli version --json/,
  'release workflow must check the published version for @mb-it-org/cli before publishing'
)

assert.doesNotMatch(
  workflow,
  /@mbs\/cli/,
  'release workflow should not keep publishing or checking the deprecated @mbs/cli package name'
)

const cliPackage = readFileSync(new URL('../packages/cli/package.json', import.meta.url), 'utf8')

assert.match(
  cliPackage,
  /"publishConfig":\s*\{[\s\S]*"access":\s*"public"/,
  'packages/cli/package.json must declare public npm publish access'
)

assert.match(
  cliPackage,
  /"name":\s*"@mb-it-org\/cli"/,
  'packages/cli/package.json must publish the @mb-it-org/cli package name'
)

console.log('release workflow preserves deploy bundle and publishes @mb-it-org/cli to npm')
