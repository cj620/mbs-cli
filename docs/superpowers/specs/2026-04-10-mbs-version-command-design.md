# Design: `mbs version` Command

**Date:** 2026-04-10  
**Status:** Approved  
**Scope:** packages/cli only

---

## Overview

Add a `mbs version` command that displays the current CLI version and checks GitHub Releases for available updates.

---

## Architecture

### New File

`packages/cli/src/commands/version.ts`

Overrides oclif's built-in version command with a custom implementation that:
1. Reads the current version from `packages/cli/package.json`
2. Fetches the latest release from the GitHub API
3. Compares versions and outputs structured JSON

### package.json Changes

In `packages/cli/package.json`, disable oclif's default version flags to prevent conflict:

```json
"oclif": {
  "additionalVersionFlags": []
}
```

---

## Data Flow

```
mbs version
  ↓
Read packages/cli/package.json → current version (e.g. "0.1.0")
  ↓
GET https://api.github.com/repos/cj620/mbs-cli/releases/latest
  ↓
Parse tag_name (e.g. "v0.2.0") → latest version
  ↓
Compare current vs latest
  ↓
Output JSON
```

**On network failure:** Output current version only, `updateAvailable: null`, exit code 0 (no error).

---

## Output Format

**Up to date:**
```json
{
  "ok": true,
  "data": {
    "current": "0.1.0",
    "latest": "0.1.0",
    "updateAvailable": false
  }
}
```

**Update available:**
```json
{
  "ok": true,
  "data": {
    "current": "0.1.0",
    "latest": "0.2.0",
    "updateAvailable": true,
    "releaseUrl": "https://github.com/cj620/mbs-cli/releases/tag/v0.2.0",
    "hint": "新版本可用: v0.2.0，访问 releaseUrl 下载更新"
  }
}
```

**Network failure (graceful degradation):**
```json
{
  "ok": true,
  "data": {
    "current": "0.1.0",
    "latest": null,
    "updateAvailable": null
  }
}
```

---

## Implementation Details

- **GitHub API endpoint:** `https://api.github.com/repos/cj620/mbs-cli/releases/latest`
- **Version comparison:** Strip leading `v` from `tag_name` before comparing (e.g. `v0.2.0` → `0.2.0`)
- **HTTP client:** Use native `fetch` (Node 18+, no extra dependency)
- **Timeout:** 3 seconds — if GitHub API does not respond, fall back to network-failure output
- **No local caching** (keeping it simple per scope decision)

---

## Error Handling

| Scenario | Behavior |
|----------|----------|
| GitHub API timeout (>3s) | Graceful degradation, `updateAvailable: null` |
| GitHub API non-200 response | Graceful degradation, `updateAvailable: null` |
| No releases published yet | Graceful degradation, `updateAvailable: null` |
| `package.json` missing version | Fallback to `"unknown"` |

---

## Out of Scope

- `mbs update` auto-update command (separate spec)
- GitHub Actions packaging workflow (separate spec)
- Local version check caching

---

## Files Changed

| File | Change |
|------|--------|
| `packages/cli/src/commands/version.ts` | New file |
| `packages/cli/package.json` | Add `additionalVersionFlags: []` to oclif config |
