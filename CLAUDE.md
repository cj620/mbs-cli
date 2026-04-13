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

## Adding a New Skill Module (e.g. mbs orders list)

Follow every step in order. Do not skip documentation steps — this CLI is used by AI agents
that rely on SKILL.md files for routing.

### Step 1 — Scaffold the package

```bash
cp -r packages/_template packages/<domain>
```

Edit the copied files:

| File | Change |
|------|--------|
| `package.json` | Replace `<domain>` in `"name"` field |
| `src/index.ts` | Set `static topic = '<domain>'` and `static description` |
| `src/commands/domain/action.ts` | Rename file, rename class, implement logic |

### Step 2 — Register in CLI

In `packages/cli/package.json`, add **two** entries:

```jsonc
// under "dependencies":
"@mb-it-org/<domain>": "workspace:*"

// under "oclif.plugins":
"@mb-it-org/<domain>"
```

### Step 3 — Write commands

- Files go in `packages/<domain>/src/commands/<domain>/<action>.ts`
- Class extends `MBSCommand` from `@mb-it-org/shared`
- Use `this.client.get(...)` / `this.client.post(...)` — already authenticated
- Use `this.output(data, meta?)` for all data output — never `console.log` or `this.log`
- Throw errors — `MBSCommand.catch()` formats them automatically
- Add each command import to `packages/<domain>/src/index.ts`

### Step 4 — Write SKILL documentation (required)

Agents use SKILL.md files to route user intents to the correct command.

**4a.** Copy the template:
```bash
cp skills/references/_template/SKILL.md \
   skills/references/<domain>/SKILL.md
```

**4b.** Fill in the template: intent matching table, command list, context passing, typical scenarios.

**4c.** Append a row to the routing table in `skills/SKILL.md`:
```markdown
| <keywords in Chinese and English> | `<domain>` | [references/<domain>/SKILL.md](references/<domain>/SKILL.md) |
```

**4d.** Append an entry to `skills/manifest.json`:
```json
{
  "name": "<domain>",
  "description": "<one-line Chinese description>",
  "keywords": ["keyword1", "keyword2", "en-keyword"],
  "skill": "references/<domain>/SKILL.md",
  "commands": ["mbs <domain> <action>"]
}
```

### Step 5 — Build and verify

```bash
pnpm build
node packages/cli/bin/run.js <domain> <action>
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

`packages/cli/scripts/copy-skills.cjs` copies `packages/cli/skills/` into the built dist so
`mbs skills show` can serve them at runtime. If you add new files under `skills/`, they are
picked up automatically on next build.

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
