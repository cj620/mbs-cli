# mbs version Command Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `mbs version` command that shows the current CLI version and checks GitHub Releases for available updates.

**Architecture:** A single new command file `packages/cli/src/commands/version.ts` extending oclif's `Command`. It reads the version from `package.json` via `createRequire`, fetches the GitHub Releases API with a 3-second timeout, and outputs structured JSON. The oclif config in `package.json` is updated to disable the default version flags to avoid conflict.

**Tech Stack:** TypeScript (Node16 ESM), oclif v4, Node 18 native `fetch`, `node:module` createRequire

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `packages/cli/src/commands/version.ts` | Create | The `mbs version` command — reads local version, fetches GitHub latest, outputs JSON |
| `packages/cli/package.json` | Modify | Add `additionalVersionFlags: []` to oclif config to disable default `-v`/`--version` |

---

### Task 1: Disable oclif's default version flags

**Files:**
- Modify: `packages/cli/package.json`

This prevents oclif's built-in version output from conflicting with our custom command.

- [ ] **Step 1: Edit `packages/cli/package.json`**

Add `"additionalVersionFlags": []` to the `oclif` config block:

```json
{
  "name": "@mbs/cli",
  "version": "0.1.0",
  "type": "module",
  "bin": {
    "mbs": "./bin/run.js"
  },
  "oclif": {
    "bin": "mbs",
    "dirname": "mbs",
    "commands": {
      "strategy": "pattern",
      "glob": "dist/commands/**/*.js",
      "target": "./dist/commands"
    },
    "topicSeparator": " ",
    "plugins": ["@mbs/org"],
    "additionalVersionFlags": []
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "@inquirer/prompts": "^8.4.1",
    "@mbs/org": "workspace:*",
    "@mbs/shared": "workspace:*",
    "@oclif/core": "^4",
    "playwright": "^1.44.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.4.0"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add packages/cli/package.json
git commit -m "chore(cli): disable oclif default version flags"
```

---

### Task 2: Implement the `version` command

**Files:**
- Create: `packages/cli/src/commands/version.ts`

- [ ] **Step 1: Create the file**

```typescript
import { Command } from '@oclif/core'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

interface GitHubRelease {
  tag_name: string
  html_url: string
}

interface VersionCheckResult {
  latest: string | null
  releaseUrl?: string
}

async function fetchLatestRelease(): Promise<VersionCheckResult> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)
  try {
    const res = await fetch('https://api.github.com/repos/cj620/mbs-cli/releases/latest', {
      signal: controller.signal,
      headers: { 'User-Agent': 'mbs-cli' },
    })
    clearTimeout(timeout)
    if (!res.ok) return { latest: null }
    const data = (await res.json()) as GitHubRelease
    if (!data.tag_name) return { latest: null }
    return {
      latest: data.tag_name.replace(/^v/, ''),
      releaseUrl: data.html_url,
    }
  } catch {
    clearTimeout(timeout)
    return { latest: null }
  }
}

export default class Version extends Command {
  static description = 'Show CLI version and check for updates'

  static examples = ['mbs version']

  async run(): Promise<void> {
    await this.parse(Version)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pkg = require('../../package.json') as { version?: string }
    const current = pkg.version ?? 'unknown'

    const { latest, releaseUrl } = await fetchLatestRelease()

    if (latest === null) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest: null,
            updateAvailable: null,
          },
        }),
      )
      return
    }

    const updateAvailable = latest !== current

    if (updateAvailable) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest,
            updateAvailable: true,
            releaseUrl,
            hint: `新版本可用: v${latest}，访问 releaseUrl 下载更新`,
          },
        }),
      )
    } else {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest,
            updateAvailable: false,
          },
        }),
      )
    }
  }
}
```

- [ ] **Step 2: Build and verify it compiles**

```bash
cd packages/cli && pnpm build
```

Expected: No TypeScript errors. `dist/commands/version.js` is generated.

- [ ] **Step 3: Verify the command runs (no network)**

```bash
node packages/cli/bin/run.js version
```

Expected output (when GitHub is reachable and no new release exists):
```json
{"ok":true,"data":{"current":"0.1.0","latest":"0.1.0","updateAvailable":false}}
```

Or if no releases published yet on GitHub:
```json
{"ok":true,"data":{"current":"0.1.0","latest":null,"updateAvailable":null}}
```

- [ ] **Step 4: Verify graceful degradation (simulate network failure)**

Temporarily change the GitHub API URL to an invalid host to test fallback:

In `version.ts`, temporarily change `cj620/mbs-cli` to `cj620/nonexistent-repo-xyz`, rebuild, run, then revert:

```bash
# After temp change + rebuild:
node packages/cli/bin/run.js version
```

Expected:
```json
{"ok":true,"data":{"current":"0.1.0","latest":null,"updateAvailable":null}}
```

Revert the change, rebuild.

- [ ] **Step 5: Commit**

```bash
git add packages/cli/src/commands/version.ts
git commit -m "feat(cli): add mbs version command with GitHub update check"
```

---

### Task 3: Final verification

- [ ] **Step 1: Full build from repo root**

```bash
pnpm build
```

Expected: All packages build without errors.

- [ ] **Step 2: Verify command appears in help**

```bash
node packages/cli/bin/run.js help
```

Expected: `version` appears in the command list with description "Show CLI version and check for updates".

- [ ] **Step 3: Verify `-v` / `--version` flags are disabled**

```bash
node packages/cli/bin/run.js -v 2>&1 || true
node packages/cli/bin/run.js --version 2>&1 || true
```

Expected: Both show an "Unexpected argument" error or no output — confirming oclif's default version flags are disabled (users must use `mbs version` explicitly).

- [ ] **Step 4: Final commit if any cleanup needed**

```bash
git add -A
git commit -m "chore(cli): verify mbs version command integration"
```
