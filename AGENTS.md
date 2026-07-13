# MBS CLI — AI Agent 开发指南

> 本文件面向参与本项目开发的 AI Agent（Claude Code、Codex 等）。
> 使用 CLI 查询业务数据的 Agent 请看 [skills/SKILL.md](skills/SKILL.md)。

---

## 项目架构

```
packages/cli          oclif 根包，入口命令（login/logout/whoami/raw/config/skills/serve）
packages/shared       共享层：认证、BaseCommand、HTTP 客户端（无业务逻辑）
packages/org          业务模块：组织架构
packages/_template    新模块脚手架，只复制，不直接修改
```

**包名映射：**

| 包名 | 目录 |
|------|------|
| `@mb-it-org/cli` | `packages/cli` |
| `@mb-it-org/shared` | `packages/shared` |
| `@mb-it-org/org` | `packages/org` |

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

## 新增业务模块（生成流程）

新增稳定业务接口应先进入 audit manifest，再用生成器生成业务包、CLI 注册和根目录 `skills/` 文档。

```bash
node scripts/gen-from-manifest.mjs --file fixtures/sample-audit-manifest.json --dry-run
node scripts/gen-from-manifest.mjs --file fixtures/sample-audit-manifest.json
pnpm install
pnpm build
pnpm test
node packages/cli/bin/run.js <domain> <action> --help
node packages/cli/bin/run.js skills show --file references/<domain>/SKILL.md
```

生成文件顶部包含 `AUTO-GENERATED FROM audit manifest`，禁止手工修改；需要变更时修改 manifest 后重新生成。

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
node packages/cli/bin/run.js serve --manifest fixtures/sample-audit-manifest.json --help
```

---

## raw 直通命令（开发/探索专用）

仅在开发者明确探索未封装接口时使用只读 `raw`；普通业务查询必须使用正式业务命令：

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
mbs raw GET /v1/products --params '{"status":"active"}'
```

禁止新增 `mbs api:*` / L2 命令；正式接入统一走 audit manifest 生成器。

---

## serve 本地 HTTP 网关

`mbs serve` 仅用于本地浏览器页面调试：读取 audit manifest，生成 `/api/<domain>/<action>` 路由，并复用当前 CLI 认证请求 MBS API。

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json
mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

约束：

- 默认绑定 `127.0.0.1`，不要暴露到公网或局域网
- 无额外鉴权，任何本机进程都可请求
- 只允许 manifest 中的 `GET` 与查询类 `POST`
- 路由发现接口为 `GET /__routes`
