# CLI Version and Update

## Commands

```bash
# Show current CLI version and check the latest GitHub release
mbs version

# Auto-select update source
mbs update

# Force npm global update
mbs update --source npm

# Force GitHub release bundle update
mbs update --source release
```

## Maintainer Release Flow

The npm package `@mbs/cli` is published by GitHub Actions, not by a local `npm publish`.

1. Create a repository secret named `NPM_TOKEN` with publish access to `@mbs/cli`.
2. Run one of the release scripts from a clean `master` branch:

```bash
pnpm release:patch
pnpm release:minor
pnpm release:major
```

3. The script bumps `packages/cli/package.json`, creates a `vX.Y.Z` tag, and pushes it to `origin/master`.
4. `.github/workflows/release.yml` publishes the tagged version to npm and then creates the GitHub Release with installer bundles.

If the workflow reports that the version already exists on npm, bump the version again and re-run the release script.

## Source Selection

- `--source auto` is the default.
- When the current CLI is installed under `node_modules/@mbs/cli`, `auto` uses npm.
- Other installation layouts use the GitHub release bundle path.

## npm Update

`mbs update --source npm` uses:

```bash
npm install -g @mbs/cli@latest
```

Use this when the CLI was installed with `npm install -g @mbs/cli`.

Typical failure cases:

- npm registry is unreachable
- the current user cannot modify the global npm installation directory

## GitHub Release Update

`mbs update --source release` will:

1. Read the latest GitHub release metadata
2. Pick the current platform asset
3. Download the `.tar.gz` bundle
4. Extract and validate the bundle
5. Replace the local CLI directory with rollback protection

Supported release targets:

- `win32-x64`
- `darwin-x64`
- `darwin-arm64`

## GitHub API Authentication

`mbs version` and `mbs update --source release` both call the GitHub Releases API.

If anonymous requests are rate-limited, set `GITHUB_TOKEN`:

```bash
GITHUB_TOKEN=xxx mbs version
GITHUB_TOKEN=xxx mbs update --source release
```

Typical GitHub API failures:

- `403`: anonymous API rate limit exceeded
- `401`: `GITHUB_TOKEN` is invalid or expired

## Output Shape

No update:

```json
{
  "ok": true,
  "data": {
    "previousVersion": "0.1.23",
    "currentVersion": "0.1.23",
    "updated": false,
    "source": "npm"
  }
}
```

Update applied:

```json
{
  "ok": true,
  "data": {
    "previousVersion": "0.1.22",
    "currentVersion": "0.1.23",
    "updated": true,
    "source": "release"
  }
}
```

Failure:

```json
{
  "ok": false,
  "error": {
    "type": "api",
    "message": "...",
    "hint": "..."
  }
}
```
