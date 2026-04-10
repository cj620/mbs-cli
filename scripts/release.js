#!/usr/bin/env node
// scripts/release.js — bump packages/cli version, create git tag, push
const { readFileSync, writeFileSync } = require('fs')
const { execSync } = require('child_process')
const path = require('path')

const type = process.argv[2] || 'patch'
if (!['patch', 'minor', 'major'].includes(type)) {
  console.error(`Usage: node scripts/release.js [patch|minor|major]`)
  process.exit(1)
}

const pkgPath = path.join(__dirname, '../packages/cli/package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
const [major, minor, patch] = pkg.version.split('.').map(Number)

const newVersion =
  type === 'major' ? `${major + 1}.0.0` :
  type === 'minor' ? `${major}.${minor + 1}.0` :
  `${major}.${minor}.${patch + 1}`

pkg.version = newVersion
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

const tag = `v${newVersion}`
execSync(`git add packages/cli/package.json`, { stdio: 'inherit' })
execSync(`git commit -m "chore(release): ${tag}"`, { stdio: 'inherit' })
execSync(`git tag ${tag}`, { stdio: 'inherit' })
execSync(`git push origin master --tags`, { stdio: 'inherit' })
console.log(`\n✓ Released ${tag}`)
