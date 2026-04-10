# MBS CLI — AI Development Rules

This document governs how AI tools (Claude Code, Codex, etc.) contribute to this project.
Read it before writing any code.

---

## Architecture Overview

```
packages/cli          → oclif root. Contains login/logout/whoami/raw/config commands.
packages/skill-shared → Shared auth, base command, config, HTTP client. NO business logic.
packages/skill-*      → Business skill commands (orders, products, finance, customers).
```

**Dependency rule (enforced, no exceptions):**
```
skill-* → skill-shared ← cli
skill-* MUST NOT import from cli
cli     MAY import from skill-shared
```

---

## Adding an L1 Skill Command (e.g. mbs orders list)

1. File goes in `packages/skill-<name>/src/commands/<name>/<action>.ts`
2. Class extends `MBSCommand` from `@mb-it-org/shared`
3. Use `this.client.get(...)` / `this.client.post(...)` — already authenticated
4. Use `this.output(data, meta)` for success output — DO NOT use `console.log` or `this.log` directly for data
5. Throw errors — `MBSCommand.catch()` formats them automatically
6. Register the skill package in `packages/cli/package.json` under `oclif.plugins`

Minimal example:
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

## Adding an L2 API Command (e.g. mbs api:orders:list)

1. Reference: `packages/cli/src/commands/api/_template.ts`
2. File goes in `packages/cli/src/commands/api/<namespace>/<action>.ts`
3. Class name: `Api` + PascalCase(namespace) + PascalCase(action) → `ApiOrdersList`
4. Command ID auto-derived from path: `api:orders:list`
5. Run `pnpm build` after creating the file

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

**This CLI is read-only.** It may only query and display data. Do NOT implement any command that creates, updates, or deletes resources.

- Allowed HTTP methods: `GET`, `POST`（POST 仅用于查询类接口，不得用于创建资源）
- Forbidden HTTP methods: `PUT`, `PATCH`, `DELETE` (except for `login` / `logout` auth flows)
- If a feature requires writing data, reject it and document why.

---

## Forbidden Patterns

| Pattern | Why forbidden |
|---------|--------------|
| `import ... from '@mb-it-org/cli'` in skill packages | Reverse dependency — breaks isolation |
| `import keytar from ...` outside `skill-shared/src/auth/key-store.ts` | Auth must be centralized |
| `import { chromium } from 'playwright'` outside `cli/src/commands/login.ts` | Heavy dep, login-only |
| `readFileSync` on `credentials.json` outside `skill-shared/src/auth/` | Same reason |
| `console.log(...)` anywhere | Use `this.log()` or `this.output()` |
| `process.exit(...)` anywhere | Use `this.exit(code)` |

---

## Phase Verification Commands

After completing each phase, run these to confirm everything works:

### Phase 1 (Core)
```bash
node packages/cli/bin/run.js config get          # shows apiUrl (default)
node packages/cli/bin/run.js whoami              # not logged in message
node packages/cli/bin/run.js login               # browser opens
node packages/cli/bin/run.js whoami              # shows keyPreview + sessionActive
node packages/cli/bin/run.js raw GET /v1/orders  # returns JSON
node packages/cli/bin/run.js logout              # clears session
```

### Phase 2 (skill-orders)
```bash
node packages/cli/bin/run.js orders list
node packages/cli/bin/run.js orders list --status pending
node packages/cli/bin/run.js orders list | jq '.data[0].id'
node packages/cli/bin/run.js orders get 12345
node packages/cli/bin/run.js orders export --from 2026-01-01 --to 2026-04-07 --output ./orders.json
```

---

## 响应风格

- 简洁为先：不需要解释的步骤直接执行
- 报告结果时只说"做了什么"，不说"为什么这样做"（除非被问）
- 发现问题直接列出，不用前言铺垫
- 代码变更只显示改动的行，不重复整个文件
