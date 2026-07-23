# CLI Version and Update

## Agent-safe update check

Before the first `mbs` command for each user request, an agent should run:

```bash
mbs version --if-due
```

This command uses a cross-process lock to check npm at most once every two
hours and otherwise reads the cached result. A newly discovered version sets
`data.notificationDue` to `true`. The agent must ask the user for confirmation
before running `mbs update`. The update command refuses to install while
another `mbs` command or `mbs serve` process is active.

Existing installations need a one-time bootstrap when this behavior is first
released: update the CLI manually, run `mbs skills install`, and restart the
agent session so the new preflight rule is loaded.

## Commands

```bash
# Show current CLI version and check the latest npm release
mbs version

# Check only when the two-hour interval has elapsed
mbs version --if-due

# Upgrade CLI via npm (npm install -g @mb-it-org/cli@latest)
mbs update
```

The npm package name is `@mb-it-org/cli`, but the installed command remains `mbs`.

Both `mbs version` and `mbs update` resolve the latest version from the npm registry
(`https://registry.npmjs.org/@mb-it-org/cli/latest`). The legacy GitHub release bundle
flow is deprecated — release artifacts are no longer maintained.

## Maintainer Release Flow

The npm package `@mb-it-org/cli` is published by GitHub Actions, not by a local `npm publish`.

1. Create a repository secret named `NPM_TOKEN` with publish access to `@mb-it-org/cli`.
2. Run one of the release scripts from a clean `master` branch:

```bash
pnpm release:patch
pnpm release:minor
pnpm release:major
```

3. The script bumps `packages/cli/package.json`, creates a `vX.Y.Z` tag, and pushes it to `origin/master`.
4. `.github/workflows/release.yml` publishes a processed deploy bundle to npm.
5. The npm publish step runs `npm pack` and a temporary global install check before publishing, so the registry package stays directly installable.

If the workflow reports that the version already exists on npm, bump the version again and re-run the release script.

## npm Update

`mbs update` runs:

```bash
npm install -g @mb-it-org/cli@latest
```

Use this whenever the CLI was installed with `npm install -g @mb-it-org/cli`.

Typical failure cases:

- npm registry is unreachable
- the current user cannot modify the global npm installation directory (use sudo / admin shell)

## Custom npm Registry

`mbs version` reads `https://registry.npmjs.org/@mb-it-org/cli/latest` directly.
If the public registry is blocked, configure your shell to use a mirror before running `mbs update`:

```bash
npm install -g @mb-it-org/cli@latest --registry=https://registry.npmmirror.com
```

## Output Shape

No update:

```json
{
  "ok": true,
  "data": {
    "previousVersion": "0.1.47",
    "currentVersion": "0.1.47",
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
    "previousVersion": "0.1.46",
    "currentVersion": "0.1.47",
    "updated": true,
    "source": "npm"
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
