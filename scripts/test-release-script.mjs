import test from 'node:test'
import assert from 'node:assert/strict'

import releaseLib from './release-lib.cjs'

const {
  computeNextVersion,
  ensureReleasePreconditions,
  getReleasePushArgs,
} = releaseLib

test('computeNextVersion bumps patch/minor/major versions', () => {
  assert.equal(computeNextVersion('0.1.23', 'patch'), '0.1.24')
  assert.equal(computeNextVersion('0.1.23', 'minor'), '0.2.0')
  assert.equal(computeNextVersion('0.1.23', 'major'), '1.0.0')
})

test('computeNextVersion rejects unsupported release types', () => {
  assert.throws(() => computeNextVersion('0.1.23', 'beta'), /Usage: node scripts\/release\.js \[patch\|minor\|major\]/)
})

test('ensureReleasePreconditions accepts a clean master branch without duplicate tag', () => {
  assert.doesNotThrow(() =>
    ensureReleasePreconditions({
      branch: 'master',
      hasChanges: false,
      tagExists: false,
      tag: 'v0.1.24',
    }),
  )
})

test('ensureReleasePreconditions rejects a dirty working tree', () => {
  assert.throws(
    () =>
      ensureReleasePreconditions({
        branch: 'master',
        hasChanges: true,
        tagExists: false,
        tag: 'v0.1.24',
      }),
    /Working tree must be clean before creating a release tag/,
  )
})

test('ensureReleasePreconditions rejects non-master releases', () => {
  assert.throws(
    () =>
      ensureReleasePreconditions({
        branch: 'feature/npm-publish',
        hasChanges: false,
        tagExists: false,
        tag: 'v0.1.24',
      }),
    /Release tags must be created from master/,
  )
})

test('ensureReleasePreconditions rejects duplicate tags', () => {
  assert.throws(
    () =>
      ensureReleasePreconditions({
        branch: 'master',
        hasChanges: false,
        tagExists: true,
        tag: 'v0.1.24',
      }),
    /Git tag v0\.1\.24 already exists/,
  )
})

test('getReleasePushArgs targets the master branch on origin', () => {
  assert.deepEqual(getReleasePushArgs(), ['origin', 'HEAD:master', '--tags'])
})
