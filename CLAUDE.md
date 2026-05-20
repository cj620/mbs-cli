# MBS CLI — AI Development Rules

This document governs how AI tools (Claude Code, Codex, etc.) contribute to this project.
Read it before writing any code.

---

## Architecture Overview

```
packages/cli          → oclif root. Contains login/logout/whoami/raw/config/skills commands.
packages/shared       → Shared auth, base command, config, HTTP client. NO business logic.
packages/org          → Business skill: org hierarchy (platforms/sites/teams).
packages/<domain>     → Future business skills follow the same pattern as packages/org.
packages/_template    → Scaffold for new skill packages — copy this, never edit it directly.
```

**Real package names:**
- `@mb-it-org/cli` → `packages/cli`
- `@mb-it-org/shared` → `packages/shared`
- `@mb-it-org/org` → `packages/org`
- `@mb-it-org/<domain>` → `packages/<domain>` (future)

**Dependency rule (enforced, no exceptions):**
```
<domain> → shared ← cli
<domain> packages MUST NOT import from cli
cli      MAY import from shared
```

---

## Adding a New Skill Module (generated flow)

Business modules should be generated from an audit manifest instead of being hand-written.
The generator writes the package, CLI registration, and root `skills/` documentation together.

```bash
node scripts/gen-from-manifest.mjs --file fixtures/sample-audit-manifest.json --dry-run
node scripts/gen-from-manifest.mjs --file fixtures/sample-audit-manifest.json
pnpm install
pnpm build
pnpm test
```

Generated files include an `AUTO-GENERATED FROM audit manifest` header. Do not edit those files by hand; update the audit manifest and regenerate.

For temporary API exploration, use read-only raw commands:

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01"}'
```

---

## Minimal Command Example

```typescript
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OrdersList extends MBSCommand {
  static description = 'List orders'
  static flags = {
    status: Flags.string({ description: 'Filter by status' }),
  }
  async run(): Promise<void> {
    const { flags } = await this.parse(OrdersList)
    const data = await this.client.get('/v1/orders', { params: flags })
    this.output(data)
  }
}
```

---

## L2 API Commands

Do not add `mbs api:*` commands. Stable business APIs should enter the CLI through the audit manifest generator. Temporary exploration should use `mbs raw GET/POST`.

---

## Output Format (NEVER change this contract)

**Success:**
```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```
`meta` is optional. Omit when not applicable.

**Error (auto-formatted by MBSCommand.catch):**
```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

**Exit codes:**
- `0` — success
- `1` — API / validation error
- `2` — authentication error (triggers `mbs login` prompt in AI agents)

---

## Scope Constraint — Read-Only (enforced, no exceptions)

**This CLI is read-only.** It may only query and display data. Do NOT implement any command
that creates, updates, or deletes resources.

- Allowed HTTP methods: `GET`, `POST`（POST 仅用于查询类接口，不得用于创建资源）
- Forbidden HTTP methods: `PUT`, `PATCH`, `DELETE` (except for `login` / `logout` auth flows)
- If a feature requires writing data, reject it and document why.

---

## Forbidden Patterns

| Pattern | Why forbidden |
|---------|--------------|
| `import ... from '@mb-it-org/cli'` in skill packages | Reverse dependency — breaks isolation |
| `import keytar from ...` outside `shared/src/auth/key-store.ts` | Auth must be centralized |
| `import { chromium } from 'playwright'` outside `cli/src/commands/login.ts` | Heavy dep, login-only |
| `readFileSync` on `credentials.json` outside `shared/src/auth/` | Same reason |
| `console.log(...)` anywhere | Use `this.log()` or `this.output()` |
| `process.exit(...)` anywhere | Use `this.exit(code)` |

---

## Build System

```bash
pnpm build        # tsc + copies skills/ docs into cli dist
pnpm test         # vitest
```

`packages/cli/scripts/copy-skills.cjs` copies root `skills/` into `packages/cli/skills/` so
`mbs skills show` can serve them at runtime. If generated files change under root `skills/`,
they are picked up automatically on next build.

---

## Verification Commands

### Core (always verify after any change)
```bash
node packages/cli/bin/run.js config get    # shows apiUrl
node packages/cli/bin/run.js whoami        # auth status
node packages/cli/bin/run.js skills show   # prints main SKILL.md (check routing table)
```

### After adding a new skill module
```bash
pnpm build
node packages/cli/bin/run.js <domain> <action>              # happy path
node packages/cli/bin/run.js <domain> <action> --help       # flags documented
node packages/cli/bin/run.js skills show --file references/<domain>/SKILL.md  # docs served
```

---

## 响应风格

- 简洁为先：不需要解释的步骤直接执行
- 报告结果时只说"做了什么"，不说"为什么这样做"（除非被问）
- 发现问题直接列出，不用前言铺垫
- 代码变更只显示改动的行，不重复整个文件
