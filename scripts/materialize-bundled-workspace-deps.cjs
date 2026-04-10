#!/usr/bin/env node
const path = require('path')
const { materializeBundledWorkspaceDependencies } = require('./release-bundle-lib.cjs')

const rootDir = path.resolve(process.argv[2] || '.')
const materialized = materializeBundledWorkspaceDependencies(rootDir)

if (materialized.length > 0) {
  console.log(`Materialized bundled workspace dependencies: ${materialized.join(', ')}`)
}
