const VALID_RELEASE_TYPES = new Set(['patch', 'minor', 'major'])
const DEFAULT_RELEASE_BRANCH = 'master'

function getUsageMessage() {
  return 'Usage: node scripts/release.js [patch|minor|major]'
}

function computeNextVersion(version, type) {
  if (!VALID_RELEASE_TYPES.has(type)) {
    throw new Error(getUsageMessage())
  }

  const [major, minor, patch] = version.split('.').map(Number)

  return type === 'major'
    ? `${major + 1}.0.0`
    : type === 'minor'
      ? `${major}.${minor + 1}.0`
      : `${major}.${minor}.${patch + 1}`
}

function ensureReleasePreconditions({ branch, hasChanges, tagExists, tag }) {
  if (hasChanges) {
    throw new Error('Working tree must be clean before creating a release tag')
  }

  if (branch !== DEFAULT_RELEASE_BRANCH) {
    throw new Error(`Release tags must be created from ${DEFAULT_RELEASE_BRANCH}`)
  }

  if (tagExists) {
    throw new Error(`Git tag ${tag} already exists`)
  }
}

function getReleasePushArgs() {
  return ['origin', `HEAD:${DEFAULT_RELEASE_BRANCH}`, '--tags']
}

module.exports = {
  computeNextVersion,
  ensureReleasePreconditions,
  getReleasePushArgs,
  getUsageMessage,
}
