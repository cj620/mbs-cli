#!/usr/bin/env node
const path = require('path')
const { pruneUnsupportedOptionalDependencies } = require('./release-bundle-lib.cjs')

const rootDir = path.resolve(process.argv[2] || '.')
const removed = pruneUnsupportedOptionalDependencies(rootDir)

if (removed.length > 0) {
  console.log(`Pruned unsupported optional dependencies: ${removed.join(', ')}`)
}
