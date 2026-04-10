#!/usr/bin/env node
// scripts/release.js - bump packages/cli version, create git tag, push
const { readFileSync, writeFileSync } = require('fs')
const { execSync } = require('child_process')
const path = require('path')
const {
  computeNextVersion,
  ensureReleasePreconditions,
  getReleasePushArgs,
  getUsageMessage,
} = require('./release-lib.cjs')

const type = process.argv[2] || 'patch'
if (!['patch', 'minor', 'major'].includes(type)) {
  console.error(getUsageMessage())
  process.exit(1)
}

const pkgPath = path.join(__dirname, '../packages/cli/package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
const newVersion = computeNextVersion(pkg.version, type)
const tag = `v${newVersion}`
const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim()
const hasChanges = execSync('git status --short', { encoding: 'utf8' }).trim().length > 0
const tagExists =
  execSync(`git tag --list ${tag}`, { encoding: 'utf8' })
    .trim()
    .split(/\r?\n/)
    .filter(Boolean).length > 0

try {
  ensureReleasePreconditions({ branch, hasChanges, tagExists, tag })
} catch (error) {
  console.error(error.message)
  process.exit(1)
}

pkg.version = newVersion
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

execSync('git add packages/cli/package.json', { stdio: 'inherit' })
execSync(`git commit -m "chore(release): ${tag}"`, { stdio: 'inherit' })
execSync(`git tag ${tag}`, { stdio: 'inherit' })
execSync(`git push ${getReleasePushArgs().join(' ')}`, { stdio: 'inherit' })

console.log(
  `\nRelease tag ${tag} created and pushed. CI will publish @mb-it-org/cli to npm and create the GitHub release.`,
)
