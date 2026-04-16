# MBS CLI — AI Agent 开发指南

> 本文件面向参与本项目开发的 AI Agent（Claude Code、Codex 等）。
> 使用 CLI 查询业务数据的 Agent 请看 [skills/SKILL.md](skills/SKILL.md)。

---

## 项目架构

```
packages/cli          oclif 根包，入口命令（login/logout/whoami/raw/config/skills）
packages/shared       共享层：认证、BaseCommand、HTTP 客户端（无业务逻辑）
packages/org          业务模块：组织架构
packages/shops        业务模块：店铺健康
packages/_template    新模块脚手架，只复制，不直接修改
```

**包名映射：**

| 包名 | 目录 |
|------|------|
| `@mb-it-org/cli` | `packages/cli` |
| `@mb-it-org/shared` | `packages/shared` |
| `@mb-it-org/org` | `packages/org` |
| `@mb-it-org/shops` | `packages/shops` |

**依赖方向（强制，不得违反）：**

```
<domain> → shared ← cli
```

- `<domain>` 包不得 import `@mb-it-org/cli`
- `cli` 可以 import `shared`

---

## 构建与测试

```bash
pnpm build      # tsc + 复制 skills/ 文档到 dist
pnpm test       # vitest
```

---

## 新增业务模块（完整流程）

### 1. 脚手架

```bash
cp -r packages/_template packages/<domain>
```

修改复制后的文件：

| 文件 | 改动 |
|------|------|
| `package.json` | `"name"` 改为 `"@mb-it-org/<domain>"` |
| `src/index.ts` | `static topic = '<domain>'`，填写 `description` |
| `src/commands/domain/action.ts` | 重命名文件和类，实现业务逻辑 |

### 2. 注册到 CLI

在 `packages/cli/package.json` 追加两处：

```jsonc
"dependencies": {
  "@mb-it-org/<domain>": "workspace:*"
},
"oclif": {
  "plugins": [
    "@mb-it-org/<domain>"
  ]
}
```

### 3. 实现命令

- 文件路径：`packages/<domain>/src/commands/<domain>/<action>.ts`
- 类继承 `MBSCommand`（来自 `@mb-it-org/shared`）
- 查询用 `this.client.get(...)` / `this.client.post(...)`
- 输出用 `this.output(data, meta?)`——**禁止** `console.log`
- 在 `packages/<domain>/src/index.ts` 中 export 每个命令类

### 4. 写 SKILL 文档（必须）

```bash
cp skills/references/_template/SKILL.md skills/references/<domain>/SKILL.md
```

填写意图匹配表、命令列表、参数说明、典型场景。

在 `skills/SKILL.md` 路由表追加一行：

```markdown
| <中英文关键词> | `<domain>` | [references/<domain>/SKILL.md](references/<domain>/SKILL.md) |
```

在 `skills/manifest.json` 的 `modules` 数组追加：

```json
{
  "name": "<domain>",
  "description": "<一行中文描述>",
  "keywords": ["关键词1", "关键词2", "en-keyword"],
  "skill": "references/<domain>/SKILL.md",
  "commands": ["mbs <domain> <action>"]
}
```

### 5. 验证

```bash
pnpm build
node packages/cli/bin/run.js <domain> <action>
node packages/cli/bin/run.js <domain> <action> --help
node packages/cli/bin/run.js skills show --file references/<domain>/SKILL.md
```

---

## 命令实现规范

**最简示例：**

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

**输出格式（不得修改此约定）：**

```json
// 成功
{ "ok": true, "data": <any>, "meta": { "total": <number> } }

// 失败（由 MBSCommand.catch 自动格式化）
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

**退出码：** `0` 成功 / `1` 参数或 API 错误 / `2` 认证失败

---

## 只读约束（强制）

本 CLI 只查询数据，禁止任何写操作：

- 允许：`GET`，`POST`（仅查询类接口）
- 禁止：`PUT`、`PATCH`、`DELETE`（auth 流程除外）

---

## 禁止模式

| 禁止写法 | 原因 |
|----------|------|
| `import ... from '@mb-it-org/cli'` in 业务包 | 反向依赖 |
| `import keytar` 在 `shared/src/auth/key-store.ts` 以外 | 认证必须集中 |
| `import { chromium }` 在 `login.ts` 以外 | 重依赖，限登录专用 |
| `readFileSync` 读 `credentials.json` 在 `shared/src/auth/` 以外 | 同上 |
| `console.log(...)` | 用 `this.log()` 或 `this.output()` |
| `process.exit(...)` | 用 `this.exit(code)` |

---

## 常用验证命令

```bash
node packages/cli/bin/run.js config get     # 确认 apiUrl
node packages/cli/bin/run.js whoami         # 认证状态
node packages/cli/bin/run.js skills show    # 主路由表是否正确
```

---

## L2 直通命令（快速探索 API）

封装前用 `raw` 探索原始接口：

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
mbs raw GET /v1/products --params '{"status":"active"}'
```

对应实现参考：`packages/cli/src/commands/api/_template.ts`
