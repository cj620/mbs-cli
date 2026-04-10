const { cpSync, existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } = require('fs')
const path = require('path')

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, data) {
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
}

function getPackageDir(rootDir, packageName) {
  return path.join(rootDir, 'node_modules', ...packageName.split('/'))
}

function getWorkspaceMirrorDir(rootDir, packageName) {
  const safeName = packageName.replace(/^@/, '').replace('/', '__')
  return path.join(rootDir, '.ws', safeName)
}

function getPackageJsonPaths(rootDir) {
  const results = []
  const seen = new Set()

  function visitPackageDir(packageDir) {
    const pkgPath = path.join(packageDir, 'package.json')
    if (!existsSync(pkgPath) || seen.has(pkgPath)) return
    seen.add(pkgPath)
    results.push(pkgPath)

    const nestedNodeModules = path.join(packageDir, 'node_modules')
    if (!existsSync(nestedNodeModules)) return

    for (const entry of readdirSync(nestedNodeModules, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      if (entry.name === '.bin') continue

      if (entry.name.startsWith('@')) {
        const scopeDir = path.join(nestedNodeModules, entry.name)
        for (const scopedEntry of readdirSync(scopeDir, { withFileTypes: true })) {
          if (!scopedEntry.isDirectory()) continue
          visitPackageDir(path.join(scopeDir, scopedEntry.name))
        }
        continue
      }

      visitPackageDir(path.join(nestedNodeModules, entry.name))
    }
  }

  const rootPkgPath = path.join(rootDir, 'package.json')
  if (existsSync(rootPkgPath)) {
    results.push(rootPkgPath)
    seen.add(rootPkgPath)
  }

  const nodeModulesDir = path.join(rootDir, 'node_modules')
  if (!existsSync(nodeModulesDir)) return results

  for (const entry of readdirSync(nodeModulesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    if (entry.name === '.bin' || entry.name === '.pnpm') continue

    if (entry.name.startsWith('@')) {
      const scopeDir = path.join(nodeModulesDir, entry.name)
      for (const scopedEntry of readdirSync(scopeDir, { withFileTypes: true })) {
        if (!scopedEntry.isDirectory()) continue
        visitPackageDir(path.join(scopeDir, scopedEntry.name))
      }
      continue
    }

    visitPackageDir(path.join(nodeModulesDir, entry.name))
  }

  return results
}

function matchesConstraint(value, current) {
  if (!Array.isArray(value) || value.length === 0) return true

  const positives = value.filter(entry => !entry.startsWith('!'))
  const negatives = new Set(value.filter(entry => entry.startsWith('!')).map(entry => entry.slice(1)))

  if (negatives.has(current)) return false
  if (positives.length === 0) return true
  return positives.includes(current)
}

function supportsPlatform(pkgJson, target) {
  return matchesConstraint(pkgJson.os, target.platform) && matchesConstraint(pkgJson.cpu, target.arch)
}

function pruneDependencyReferences(node, removedSet) {
  if (!node || typeof node !== 'object') return

  for (const field of ['dependencies', 'optionalDependencies', 'peerDependencies', 'requires']) {
    const deps = node[field]
    if (!deps || typeof deps !== 'object') continue

    for (const packageName of removedSet) {
      if (packageName in deps) {
        delete deps[packageName]
      }
    }

    if (Object.keys(deps).length === 0) {
      delete node[field]
    }
  }
}

function lockfileEntryMatchesPackage(entryPath, packageName) {
  const normalizedEntryPath = String(entryPath).replace(/\\/g, '/')
  const normalizedPackagePath = `node_modules/${packageName}`
  return (
    normalizedEntryPath === normalizedPackagePath ||
    normalizedEntryPath.endsWith(`/${normalizedPackagePath}`)
  )
}

function pruneUnsupportedOptionalDependenciesFromLockfile(lockfilePath, removedNames) {
  if (!existsSync(lockfilePath) || removedNames.length === 0) {
    return false
  }

  const lockfile = readJson(lockfilePath)
  const removedSet = new Set(removedNames)
  let changed = false

  if (lockfile.packages && typeof lockfile.packages === 'object') {
    for (const entryPath of Object.keys(lockfile.packages)) {
      if (Array.from(removedSet).some(packageName => lockfileEntryMatchesPackage(entryPath, packageName))) {
        delete lockfile.packages[entryPath]
        changed = true
        continue
      }

      const entry = lockfile.packages[entryPath]
      const before = JSON.stringify(entry)
      pruneDependencyReferences(entry, removedSet)
      if (JSON.stringify(entry) !== before) {
        changed = true
      }
    }
  }

  function pruneDependencyTree(dependencies) {
    if (!dependencies || typeof dependencies !== 'object') return false

    let treeChanged = false
    for (const packageName of Object.keys(dependencies)) {
      if (removedSet.has(packageName)) {
        delete dependencies[packageName]
        treeChanged = true
        continue
      }

      const dependency = dependencies[packageName]
      const before = JSON.stringify(dependency)
      pruneDependencyReferences(dependency, removedSet)
      if (pruneDependencyTree(dependency.dependencies)) {
        treeChanged = true
      }
      if (JSON.stringify(dependency) !== before) {
        treeChanged = true
      }
    }

    return treeChanged
  }

  if (pruneDependencyTree(lockfile.dependencies)) {
    changed = true
  }

  if (changed) {
    writeJson(lockfilePath, lockfile)
  }

  return changed
}

function pruneUnsupportedOptionalDependencies(rootDir, target = { platform: process.platform, arch: process.arch }) {
  const packageJsonPaths = getPackageJsonPaths(rootDir)
  const optionalDependencyNames = new Set()

  for (const pkgPath of packageJsonPaths) {
    const pkgJson = readJson(pkgPath)
    for (const name of Object.keys(pkgJson.optionalDependencies || {})) {
      optionalDependencyNames.add(name)
    }
  }

  const removed = []

  for (const packageName of optionalDependencyNames) {
    const packageDir = getPackageDir(rootDir, packageName)
    const pkgPath = path.join(packageDir, 'package.json')
    if (!existsSync(pkgPath)) continue

    const pkgJson = readJson(pkgPath)
    if (supportsPlatform(pkgJson, target)) continue

    rmSync(packageDir, { recursive: true, force: true })
    removed.push(packageName)
  }

  if (removed.length === 0) {
    return removed
  }

  for (const pkgPath of packageJsonPaths) {
    if (!existsSync(pkgPath)) continue
    const pkgJson = readJson(pkgPath)
    if (!pkgJson.optionalDependencies) continue

    let changed = false
    for (const packageName of removed) {
      if (!(packageName in pkgJson.optionalDependencies)) continue
      delete pkgJson.optionalDependencies[packageName]
      changed = true
    }

    if (changed) {
      if (Object.keys(pkgJson.optionalDependencies).length === 0) {
        delete pkgJson.optionalDependencies
      }
      writeJson(pkgPath, pkgJson)
    }
  }

  pruneUnsupportedOptionalDependenciesFromLockfile(path.join(rootDir, 'npm-shrinkwrap.json'), removed)
  pruneUnsupportedOptionalDependenciesFromLockfile(path.join(rootDir, 'package-lock.json'), removed)

  return removed
}

function materializeBundledWorkspaceDependencies(rootDir) {
  const rootPkgPath = path.join(rootDir, 'package.json')
  if (!existsSync(rootPkgPath)) {
    return []
  }

  const rootPkg = readJson(rootPkgPath)
  const bundledDependencies = Array.isArray(rootPkg.bundledDependencies) ? rootPkg.bundledDependencies : []
  const materialized = []

  for (const packageName of bundledDependencies) {
    const installDir = getPackageDir(rootDir, packageName)
    if (!existsSync(installDir)) continue

    const installDirStats = lstatSync(installDir)
    if (!installDirStats.isSymbolicLink()) continue

    const workspaceMirrorDir = getWorkspaceMirrorDir(rootDir, packageName)
    if (!existsSync(workspaceMirrorDir)) {
      throw new Error(`Missing workspace mirror for bundled dependency ${packageName}`)
    }

    rmSync(installDir, { recursive: true, force: true })
    mkdirSync(path.dirname(installDir), { recursive: true })
    cpSync(workspaceMirrorDir, installDir, { recursive: true, dereference: true })
    materialized.push(packageName)
  }

  return materialized
}

module.exports = {
  getPackageJsonPaths,
  materializeBundledWorkspaceDependencies,
  pruneUnsupportedOptionalDependencies,
  pruneUnsupportedOptionalDependenciesFromLockfile,
  supportsPlatform,
}
