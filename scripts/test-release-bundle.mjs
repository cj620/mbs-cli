import test from 'node:test'
import assert from 'node:assert/strict'
import { lstatSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'

import bundleLib from './release-bundle-lib.cjs'

const { materializeBundledWorkspaceDependencies, pruneUnsupportedOptionalDependencies, supportsPlatform } = bundleLib
const { pruneUnsupportedOptionalDependenciesFromLockfile } = bundleLib

function writeJson(filePath, data) {
  mkdirSync(path.dirname(filePath), { recursive: true })
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
}

test('supportsPlatform respects os and cpu allow/deny lists', () => {
  assert.equal(supportsPlatform({ os: ['darwin'] }, { platform: 'linux', arch: 'x64' }), false)
  assert.equal(supportsPlatform({ os: ['!win32'] }, { platform: 'linux', arch: 'x64' }), true)
  assert.equal(supportsPlatform({ cpu: ['arm64'] }, { platform: 'linux', arch: 'x64' }), false)
  assert.equal(supportsPlatform({ os: ['linux'], cpu: ['x64'] }, { platform: 'linux', arch: 'x64' }), true)
})

test('pruneUnsupportedOptionalDependencies removes incompatible optional packages and manifest entries', () => {
  const rootDir = mkdtempSync(path.join(tmpdir(), 'mbs-release-bundle-'))

  try {
    writeJson(path.join(rootDir, 'package.json'), {
      name: '@mb-it-org/cli',
      version: '0.1.26',
      dependencies: {
        playwright: '1.59.1',
      },
    })

    writeJson(path.join(rootDir, 'node_modules', 'playwright', 'package.json'), {
      name: 'playwright',
      version: '1.59.1',
      optionalDependencies: {
        fsevents: '2.3.2',
      },
    })

    writeJson(path.join(rootDir, 'node_modules', 'fsevents', 'package.json'), {
      name: 'fsevents',
      version: '2.3.2',
      os: ['darwin'],
    })

    const removed = pruneUnsupportedOptionalDependencies(rootDir, {
      platform: 'linux',
      arch: 'x64',
    })

    assert.deepEqual(removed, ['fsevents'])
    assert.equal(existsSync(path.join(rootDir, 'node_modules', 'fsevents')), false)

    const playwrightPkg = JSON.parse(
      readFileSync(path.join(rootDir, 'node_modules', 'playwright', 'package.json'), 'utf8'),
    )

    assert.equal('optionalDependencies' in playwrightPkg, false)
  } finally {
    rmSync(rootDir, { recursive: true, force: true })
  }
})

test('pruneUnsupportedOptionalDependencies keeps supported optional packages intact', () => {
  const rootDir = mkdtempSync(path.join(tmpdir(), 'mbs-release-bundle-'))

  try {
    writeJson(path.join(rootDir, 'package.json'), {
      name: '@mb-it-org/cli',
      version: '0.1.26',
      dependencies: {
        watcher: '1.0.0',
      },
    })

    writeJson(path.join(rootDir, 'node_modules', 'watcher', 'package.json'), {
      name: 'watcher',
      version: '1.0.0',
      optionalDependencies: {
        'native-addon': '1.0.0',
      },
    })

    writeJson(path.join(rootDir, 'node_modules', 'native-addon', 'package.json'), {
      name: 'native-addon',
      version: '1.0.0',
      os: ['linux'],
      cpu: ['x64'],
    })

    const removed = pruneUnsupportedOptionalDependencies(rootDir, {
      platform: 'linux',
      arch: 'x64',
    })

    assert.deepEqual(removed, [])
    assert.equal(existsSync(path.join(rootDir, 'node_modules', 'native-addon')), true)

    const watcherPkg = JSON.parse(readFileSync(path.join(rootDir, 'node_modules', 'watcher', 'package.json'), 'utf8'))
    assert.deepEqual(watcherPkg.optionalDependencies, { 'native-addon': '1.0.0' })
  } finally {
    rmSync(rootDir, { recursive: true, force: true })
  }
})

test('pruneUnsupportedOptionalDependenciesFromLockfile removes stale optional dependency entries', () => {
  const rootDir = mkdtempSync(path.join(tmpdir(), 'mbs-release-bundle-'))

  try {
    const lockfilePath = path.join(rootDir, 'npm-shrinkwrap.json')
    writeJson(lockfilePath, {
      name: '@mb-it-org/cli',
      version: '0.1.27',
      lockfileVersion: 3,
      packages: {
        '': {
          name: '@mb-it-org/cli',
          version: '0.1.27',
          dependencies: {
            playwright: '1.59.1',
          },
        },
        'node_modules/playwright': {
          version: '1.59.1',
          optionalDependencies: {
            fsevents: '2.3.2',
          },
        },
        'node_modules/fsevents': {
          version: '2.3.2',
          optional: true,
        },
      },
      dependencies: {
        playwright: {
          version: '1.59.1',
          optionalDependencies: {
            fsevents: '2.3.2',
          },
        },
        fsevents: {
          version: '2.3.2',
          optional: true,
        },
      },
    })

    const changed = pruneUnsupportedOptionalDependenciesFromLockfile(lockfilePath, ['fsevents'])
    assert.equal(changed, true)

    const lockfile = JSON.parse(readFileSync(lockfilePath, 'utf8'))
    assert.equal(lockfile.packages['node_modules/fsevents'], undefined)
    assert.equal(lockfile.dependencies.fsevents, undefined)
    assert.equal('optionalDependencies' in lockfile.packages['node_modules/playwright'], false)
    assert.equal('optionalDependencies' in lockfile.dependencies.playwright, false)
  } finally {
    rmSync(rootDir, { recursive: true, force: true })
  }
})

test('materializeBundledWorkspaceDependencies replaces bundled workspace symlinks with real directories', () => {
  const rootDir = mkdtempSync(path.join(tmpdir(), 'mbs-release-bundle-'))

  try {
    writeJson(path.join(rootDir, 'package.json'), {
      name: '@mb-it-org/cli',
      version: '0.1.31',
      bundledDependencies: ['@mb-it-org/shared'],
    })

    writeJson(path.join(rootDir, '.ws', 'mb-it-org__shared', 'package.json'), {
      name: '@mb-it-org/shared',
      version: '0.1.0',
    })
    writeFileSync(path.join(rootDir, '.ws', 'mb-it-org__shared', 'index.js'), 'export {};\n', 'utf8')

    const installedParentDir = path.join(rootDir, 'node_modules', '@mb-it-org')
    mkdirSync(installedParentDir, { recursive: true })

    const symlinkTarget = path.join(rootDir, 'node_modules', '.pnpm', 'fake', 'node_modules', '@mb-it-org', 'shared')
    mkdirSync(path.dirname(symlinkTarget), { recursive: true })
    writeJson(path.join(symlinkTarget, 'package.json'), {
      name: '@mb-it-org/shared',
      version: '0.1.0',
    })

    const installedDir = path.join(installedParentDir, 'shared')
    symlinkSync(symlinkTarget, installedDir, 'junction')

    assert.equal(lstatSync(installedDir).isSymbolicLink(), true)

    const materialized = materializeBundledWorkspaceDependencies(rootDir)
    assert.deepEqual(materialized, ['@mb-it-org/shared'])
    assert.equal(lstatSync(installedDir).isSymbolicLink(), false)
    assert.equal(existsSync(path.join(installedDir, 'index.js')), true)

    const installedPkg = JSON.parse(readFileSync(path.join(installedDir, 'package.json'), 'utf8'))
    assert.equal(installedPkg.name, '@mb-it-org/shared')
  } finally {
    rmSync(rootDir, { recursive: true, force: true })
  }
})
