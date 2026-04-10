import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const workflow = readFileSync(new URL('../.github/workflows/release.yml', import.meta.url), 'utf8')

assert.match(
  workflow,
  /cp\s+pnpm-lock\.yaml\s+\$\{\{\s*runner\.temp\s*\}\}\/mbs-deploy\/pnpm-lock\.yaml/,
  'release workflow must copy pnpm-lock.yaml into the deploy bundle before oclif pack tarballs'
)

console.log('release workflow keeps pnpm-lock.yaml in the deploy bundle')
