# MBS CLI

面向 AI Agent 与内部研发的马帮（MBS）业务数据接入底座。把分散的内部业务能力沉淀为统一的结构化 JSON 命令与本地零认证 HTTP 网关 —— 一次登录、处处可用；Agent 与内部页面只关心"取什么数"，无需再处理登录态维持、Cookie 刷新、跨域代理与接口拼装。

**核心能力**

- **统一业务抽象**：业务模块按 `mbs <domain> <action>` 暴露，输入输出严格遵循 `{ ok, data }` / `{ ok:false, error }` 契约，退出码语义化（`2` 触发重新登录）。
- **审计驱动的代码生成**：业务模块从 `audit manifest` 自动生成 CLI 命令、HTTP 路由与 skill 文档三件套，新增能力只需更新 manifest，杜绝手写漂移。
- **Agent-Native Skill 体系**：随 CLI 打包发布 `skills/` 目录，一键 `mbs skills install` 注入 Claude / Codex 等平台；内置意图路由表、消歧协议、参数约束，Agent 即装即用。
- **本地 HTTP 网关 (`mbs serve`)**：在 `127.0.0.1` 起一层只读网关，复用 CLI 当前登录态，支持三种模式 —— 项目内置 API、外部 manifest 路由、`/proxy/*` 任意上游直通，配套 `/__routes` 自描述发现端点，内部看板与运营页可秒级接入。
- **流式数据通道**：Doris 查询透传 NDJSON，结构化 `header / data / end / error` 行，原生支持大结果集增量消费。
- **只读安全边界**：架构层强制 `GET` 与查询型 `POST`，禁止 `PUT/PATCH/DELETE`；包间依赖单向（`<domain> → shared ← cli`），认证与浏览器登录集中收敛在 `shared/auth`。
- **逃生通道**：未封装的接口可用 `mbs raw GET/POST` 直通探索，复用同一认证与错误契约，不必为一次性需求新建模块。

定位：**一个把"内部 API + 浏览器登录态 + Agent 工作流"打包为单一命令的能力底座**，让一行 `mbs <domain> <action>` 等价于一次合规、可追溯、可被 Agent 安全消费的业务调用。

> **If you are an AI agent:** 展开下方「AI Agent 接入指南」，按步骤执行完成接入，不要跳过。
>
> **强制刷新 CLI**：只要 agent 读到本 README，必须先跑 `mbs version` 看 `data.updateAvailable`；为 `true` 立刻执行 `mbs update`，再继续后续步骤。未安装 CLI 时按 Step 2 装最新版。**禁止用本机现有旧版直接干活**。

<details>
<summary><strong>AI Agent 接入指南（点击展开）</strong></summary>

## 适用对象

- 新电脑或未配置过 `mbs` 的环境
- 具备 shell 执行能力的终端型 AI agent
- 需要查询 MBS 业务数据，并使用本仓库 `skills/` 文档作为工作上下文的人或 agent

## Agent 执行原则

- **强制刷新 CLI**：读到本 README 必须立即 `mbs version`，`data.updateAvailable === true` 时立刻 `mbs update`；旧版 CLI 直接干活 = 失败
- **先检测后动作**：每步开头先跑探测命令（`node -v` / `mbs version` / `mbs whoami` / `mbs config get`），已满足直接跳过，不重复安装
- **以结构化 JSON 为准**：所有 `mbs` 命令输出 `{ ok, data | error }`；判断成功看 `ok` 字段 + 退出码，不解析人话
- 退出码：`0` 成功 / `1` API 或参数错 / `2` 认证失效（必须重新 `mbs login`）
- 失败时先读 `error.hint`，再决定下一步
- 业务查询只用 `mbs`，禁止 `curl` / 手拼 HTTP / 猜 API 路径或 ID
- CLI 安装、配置、认证、skill 接入是四件独立的事，必须分开汇报状态

## 主流程

### Step 1: 检测基础环境

```bash
node -v    # 需 >= 18
npm -v
```

缺失 → 安装 Node.js 18 LTS 再继续。已具备直接进 Step 2。

### Step 2: 安装或更新 CLI

**未安装** —— 显式锁官方源（避免本地 `npm config` 默认指向镜像拿到旧版）：

```bash
# 主路径：必须显式 --registry，否则本机 npm 默认源可能被改成 npmmirror 拿到缓存旧版
npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/

# 官方源网络不可达时的回落（需显式锁 @latest）
npm install -g @mb-it-org/cli@latest --registry=https://registry.npmmirror.com
```

> 已知 npmmirror 缓存的旧版 `0.1.25` 含 `workspace:*` 依赖，安装会报 `EUNSUPPORTEDPROTOCOL`。**不要省 `--registry`**；想确认当前默认源跑 `npm config get registry`。

**已安装** —— 先看版本，再决定是否更新：

```bash
mbs version    # data.updateAvailable === true 时再更新
mbs update     # 统一走 npm install -g @mb-it-org/cli@latest
```

`mbs update` 内部会判等：版本一致直接返回 `updated: false`，幂等安全。

### Step 3: 检测配置

```bash
mbs config get
```

返回 `ok:false` + `hint: "Run mbs config init to configure"` → 执行：

```bash
mbs config init
```

返回 `ok:true` 含 `data.apiUrl` → 跳过。

### Step 4: 登录并验证认证

**先看是否已登录**：

```bash
mbs whoami
```

- `ok:true` + 用户信息 → 跳过，进 Step 5
- `ok:false` 或退出码 `2` → 执行 `mbs login`

```bash
mbs login    # 仅调用系统已安装的 Chrome / Edge，按顺序探测
mbs whoami   # 复检
```

`mbs login` 失败时会输出结构化错误：
- `error.message: "No supported browser runtime is available"` → 按 `error.hint` 装系统 Chrome 或 Edge；**禁止安装 Playwright/Chromium 等额外浏览器运行时**
- 其他错误 → 按 `error.hint` 处理；**不要在 login 报错前主动装浏览器**

### Step 5: 接入 Skill 文档

Skill 随 npm 包打包发布，更新 CLI 后再跑安装即可同步覆盖。**agent 会话内已加载的旧 skill 需用户手动重启会话**，agent 自己无法触发。

**方式 A（推荐）：装到 agent 平台目录**

先 dry-run 看检测结果，再正式安装：

```bash
mbs skills install --dry-run    # 看 installs[] 检测到哪些平台
mbs skills install              # 自动安装到检测到的所有平台
mbs skills install --target claude   # 仅 ~/.claude/skills/mbs/
mbs skills install --target codex    # 仅 ~/.codex/skills/mbs/
```

安装行为：force 覆盖目标目录下 `mbs/`，保留 `references/` 子结构。安装完成后**告知用户重启 agent 会话**让平台重新加载。

更新流程：

```bash
mbs update
mbs skills install    # 重跑覆盖
```

**方式 B（平台不支持挂载时）：当前会话临时读入**

```bash
mbs skills show                                   # 主入口 SKILL.md（必读）
mbs skills show --file references/global.md       # 全局参考（必读）
mbs skills show --file references/org/SKILL.md    # 涉及组织架构
mbs skills show --file references/crm/SKILL.md    # 涉及店铺健康
mbs skills show --file references/doris/SKILL.md  # 涉及 Doris/SQL
```

**方式 C（仓库在本机）**：直接读源文件 [`skills/SKILL.md`](skills/SKILL.md) / [`skills/references/global.md`](skills/references/global.md)。

### Step 6: 验收（每条断言 ok 字段 + 退出码 0）

```bash
node -v             # v18+
npm -v              # 有输出
mbs version         # data.current 有版本号
mbs config get      # ok:true，data.apiUrl 有值
mbs whoami          # ok:true，含用户信息
mbs skills show     # ok:true，含 SKILL.md 内容
mbs org platforms   # ok:true，含平台数据（认证最终验证）
```

**Skill 接入状态需独立汇报**：
- 平台挂载：列出 `mbs skills install` 命中的目录路径
- 会话注入：列出已读取的 `skills/*.md` 文件清单

## Bootstrap 提示词

复制给 AI agent：

```text
你负责把本机准备成可用的 MBS CLI 工作环境，并完成 agent skill 接入。严格按下列规则：

执行约定：
- 每步先跑探测命令，已满足跳过；只在缺失时执行安装/初始化
- 判断成功以结构化 JSON 的 ok 字段 + 退出码为准；退出码 2 = 认证失效
- 命令失败先读 error.hint
- 分别独立汇报四件事的状态：CLI 已安装、配置已就绪、认证已完成、skill 已接入

步骤：
1. node -v / npm -v；缺失则装 Node.js 18 LTS
2. 检测 mbs：
   - 未安装：npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/（必须显式 --registry 锁官方源；官方源失败时回落 npm install -g @mb-it-org/cli@latest --registry=https://registry.npmmirror.com）
   - 已安装：mbs version 看 data.updateAvailable，true 时 mbs update
3. mbs config get；ok:false 则 mbs config init
4. mbs whoami；ok:false 或退出码 2 时 mbs login 后复检
5. 只调用系统已装 Chrome/Edge；**禁止安装 Playwright/Chromium 等浏览器运行时**。mbs login 报 "No supported browser runtime" 时按 hint 让用户装系统 Chrome/Edge，不要 agent 自行下载内核
6. 接入 skill：
   - 平台支持：mbs skills install --dry-run 看检测结果 → mbs skills install；完成后明确告知用户重启 agent 会话
   - 平台不支持：至少读 skills/SKILL.md 与 skills/references/global.md；按任务再读 references/org|crm|doris/SKILL.md
7. 验收：node -v / npm -v / mbs version / mbs config get / mbs whoami / mbs skills show / mbs org platforms 全部 ok:true 且退出码 0
8. 遇权限/网络/PATH/浏览器/认证阻塞，明确写出阻塞点 + error.hint 原文 + 建议处理；禁止跳过或谎报成功

业务查询只用 mbs；禁止 curl、禁止猜 API 路径/参数/ID。
```

## 故障处理

### `mbs` 命令不存在

1. 确认是否执行过 `npm install -g @mb-it-org/cli`
2. 检查 npm 全局安装目录是否已加入 PATH
3. 重新打开 shell 后再次执行 `mbs version`

### PATH 未生效

npm 全局安装完成但当前 shell 找不到 `mbs`：重新打开终端，或检查 npm global bin 目录是否在 PATH 中。

### 登录浏览器运行时缺失

现象：`mbs login` 报 browser executable 不存在 / 找不到可用浏览器。

处理：让用户安装系统 Chrome 或 Edge（官网下载安装包）。**禁止 agent 安装 Playwright、`npx playwright install`、Chromium 等额外浏览器内核** —— CLI 只支持系统已装的 Chrome/Edge。

### npm 全局安装无权限

使用具备权限的终端重新执行，或按当前机器的 npm 配置调整全局安装目录。agent 需明确说明是"权限阻塞"，不要误报成安装成功。

### 认证失效（退出码 2）

```bash
mbs login
mbs whoami
```

### 版本更新失败

常见原因：npm registry 不可达 / GitHub API 限流 / `GITHUB_TOKEN` 无效 / 无权修改全局安装目录。

参考 [`packages/cli/docs/version-and-update.md`](packages/cli/docs/version-and-update.md)。

</details>

---

## 功能概览

### CLI 基础功能

与具体业务无关的通用能力：认证、配置、版本、原始请求、本地网关、skill 文档。

| 模块 | 命令前缀 | 用途 |
|------|---------|------|
| config | `mbs config` | 查看或初始化 CLI API Base URL |
| update | `mbs version` / `mbs update` | CLI 版本检查与更新 |
| raw | `mbs raw` | 已认证直通请求：只允许 `GET` 和查询类 `POST`，用于封装前探索接口 |
| skills | `mbs skills` | 查看、定位、安装随 CLI 打包的 agent skill 文档 |
| serve | `mbs serve` | 本地 HTTP 网关，让业务页面二次开发时复用 CLI 认证查询 manifest 中的只读接口 |
| test | `mbs test` | 本地测试工具：复用 shared whoami 状态逻辑，便于验证 serve project API |

### 业务功能

封装马帮平台的具体业务领域。新增业务模块（如未来的 `orders`、`finance`）按此分类追加到下表。

| 模块 | 命令前缀 | 用途 |
|------|---------|------|
| org | `mbs org` | 组织架构：平台、站点、总监、经理、主管、店长、店铺、员工 |
| crm | `mbs crm` | 店铺运营监控：Amazon 账号健康、违规统计、合规评分 |
| doris | `mbs doris` | Doris 数据库：日销报表查询（按日 GMV / 订单 / 退款 / 利润等聚合）、库表与 DDL 探索、流式只读 SELECT |
| export | `mbs export` | 数据导出 xlsx：`plan` 预览 + `run` 执行两阶段流程，支持 doris SELECT 与 API 分页 |

---

## 快速开始

**安装**（需 Node.js 18+）：

```bash
npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/
```

**登录**：

```bash
mbs login
```

> 默认使用系统已有 Chrome/Edge 完成登录；通常不需要额外安装浏览器运行时。

**验证**：

```bash
mbs whoami        # 确认认证状态
mbs org platforms # 获取平台列表，验证业务数据可达
```

**业务页面二次开发（可选）**：

```bash
mbs serve --project-apis
```

启动后默认监听 `http://127.0.0.1:7878`，并把当前项目已实现的 API 暴露为 `/api/<domain>/<action>` 路由。前端页面可以直接请求这个本地网关，把已封装的业务接口组合成内部看板、辅助运营页面或临时分析页面，无需在页面里重新实现马帮登录、Cookie 刷新和 API 转发。

需要快速验证本地接口服务时，可以启动网关后打开 [examples/serve-dashboard/index.html](examples/serve-dashboard/index.html)。该测试页面会检查 `/__routes` 和 `/api/test/whoami`，用于确认认证状态和 project API 路由是否可用。

---

## 常用命令

| 任务 | 命令 |
|------|------|
| 查看配置 | `mbs config get` |
| 初始化配置 | `mbs config init` |
| 登录 / 登出 | `mbs login` / `mbs logout` |
| 刷新认证 Cookie | `mbs refresh` |
| 查看认证状态 | `mbs whoami` 或 `mbs test whoami` |
| 查看版本与更新 | `mbs version` / `mbs update` |
| 查看 skill 目录 | `mbs skills path` |
| 查看 skill 内容 | `mbs skills show --file references/doris/SKILL.md` |
| 直通只读 API | `mbs raw GET /path --params '{"key":"value"}'` |
| 本地 project API 网关 | `mbs serve --project-apis` |
| 任意只读上游代理 | `mbs serve --proxy-all` |
| 导出 xlsx（预览） | `mbs export plan --source doris\|api ...` |
| 导出 xlsx（执行） | `mbs export run --plan <id>` |

---

## Doris 数据探索与日销报表

`doris` 模块覆盖两类任务，服务端校验只读 SQL，CLI 侧不绕过限制。

**任务 A — 日销报表**：按日聚合销售额 / 订单量 / 退款 / 利润等指标。标准流程是先 `schemas` 找候选日销表（名称含 `sales` / `daily` / `dws` / `report` / `日销` 等），再 `show-create-table` 看日期列与分区键，最后写 `GROUP BY` 日期的 SELECT。完整范式见 [skills/references/doris/SKILL.md](skills/references/doris/SKILL.md)。

**任务 B — 数据探索**：自由 SELECT，先发现库表，再按需取数。

```bash
mbs doris schemas
mbs doris show-create-table --tableName database.table
mbs doris query --sql "select * from database.table limit 10"
echo "select * from database.table limit 10" | mbs doris query
```

`mbs doris query` 输出 NDJSON 流，适合大结果集增量消费；普通业务命令仍保持统一 JSON 包装。

---

## 本地 HTTP 网关

`mbs serve` 只绑定本机回环地址，默认 `127.0.0.1:7878`。它没有额外鉴权，本机进程都能访问，因此不要改成公网或局域网监听。

| 模式 | 命令 | 用途 |
|------|------|------|
| 项目 API | `mbs serve --project-apis` | 暴露 `manifests/mbs-api-manifest.json` 中当前项目已实现的接口 |
| 外部 manifest | `mbs serve --manifest <file>` | 根据指定 audit manifest 临时生成 `/api/<domain>/<action>` 路由 |
| 直通代理 | `mbs serve --proxy-all` | 暴露 `/proxy/*`，只转发 `GET` 和查询类 `POST`，便于快速探索 |

路由发现接口：

```text
GET http://127.0.0.1:7878/__routes
```

当前 project API 覆盖 `org`、`crm`、`doris`，并额外提供 `GET /api/test/whoami` 作为认证状态检查。`--proxy-all` 会同时启用 project API，适合 Doris 示例页面：

```bash
mbs serve --proxy-all
```

然后打开 [examples/doris-dashboard/index.html](examples/doris-dashboard/index.html)。

---

## 本地页面二创开发

把 `mbs serve` 当作"本地零认证 BFF"，前端开发者可以在自己机器上快速搭出内部看板、运营辅助页、临时分析页或 demo，不必申请后端代理、不必处理马帮登录态、不必关心 Cookie 刷新。

**适用场景**

- 内部看板 / 运营辅助页：组合 `org` / `crm` / `doris` 已封装接口，做团队内只读视图。
- 临时分析页：跑一次性的数据汇总、对账、对比，跑完就丢。
- Agent 工作页面：给 LLM Agent 提供"页面级"工具，由页面调用 `/api/*` 拿数，Agent 负责编排与呈现。
- 接口探活与 Demo：在封装前先用 `/proxy/*` 把上游接口接到页面验证可行性。

**开发者拿到的东西**

| 能力 | 说明 |
|------|------|
| 零认证调用 | 页面 `fetch('/api/<domain>/<action>')` 即得数据，认证全部由 CLI 本地登录态承担 |
| 路由自描述 | `GET /__routes` 返回当前进程暴露的所有接口（method/url/domain/action/description/responseMode），可直接驱动表单或下拉 |
| 三档接入粒度 | `--project-apis` 用稳定封装、`--manifest` 用临时 audit、`--proxy-all` 用任意上游路径 |
| 流式消费 | Doris 类 NDJSON 路由透传，前端按行解析，无需等大查询整段返回 |
| CORS 白名单 | 内置常见本地开发端口白名单（vite/CRA 等），异源页面也能直接调 |
| 起手模板 | `examples/` 下三个示例页面即可作为脚手架复制改造 |

**典型流程**

1. 起网关：`mbs serve --project-apis`（需要任意上游再加 `--proxy-all`）。
2. 拉路由表：页面初始化时 `fetch('http://127.0.0.1:7878/__routes')`，把 `data[]` 渲染成可选接口。
3. 选接口取数：按 `route.method` + `route.url` 直接发请求；路径参数走 `/:name` 占位，业务参数走 query 或 body。
4. 渲染：JSON 路由直接展开 `data`；NDJSON 路由按行流式追加。
5. 出问题看 `{ ok:false, error.hint }`；HTTP `401` 走 `mbs login` 重新登录后页面刷新即可。

**集成示例（任意框架通用）**

```js
const base = 'http://127.0.0.1:7878'
const routes = (await (await fetch(`${base}/__routes`)).json()).data
const platforms = await (await fetch(`${base}/api/org/platforms`)).json()
if (!platforms.ok) throw new Error(platforms.error.hint || platforms.error.message)
render(platforms.data)
```

**安全提醒** — `mbs serve` 默认绑 `127.0.0.1` 且**无鉴权**。仅用于开发者本机，不要改 `--host` 暴露到局域网/公网；不要把网关地址写入对外发布的页面。生产化部署需要另起带鉴权的后端代理。

---

## 示例页面

| 示例 | 用途 | 推荐启动方式 |
|------|------|--------------|
| [examples/serve-dashboard/index.html](examples/serve-dashboard/index.html) | 验证本地网关、`/__routes` 和 `/api/test/whoami` | `mbs serve --project-apis` |
| [examples/doris-dashboard/index.html](examples/doris-dashboard/index.html) | 浏览 Doris schema、查看 DDL、执行只读查询 | `mbs serve --proxy-all` |
| [examples/manifest-viewer/index.html](examples/manifest-viewer/index.html) | 查看 manifest 模块、接口、参数和服务关系；可加载本地 JSON | 直接用浏览器打开 |

---

## Manifest 驱动开发

稳定业务接口应先进入 audit manifest，再由生成器同步包、CLI 注册、skill 文档和 serve project manifest。默认输入是 [manifests/mbs-api-manifest.json](manifests/mbs-api-manifest.json)。

```bash
pnpm gen:manifest:dry
pnpm gen:manifest
pnpm build
pnpm test
```

`fixtures/sample-audit-manifest.json` 只用于样例或增量验证；当前 project API 以 `manifests/mbs-api-manifest.json` 为准。生成文件顶部会标记 `AUTO-GENERATED FROM audit manifest`，不要手工改生成产物。

---

## 输出格式

所有命令统一输出结构化 JSON：

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

例外：`mbs doris query` 会直接透传服务端 NDJSON 流，便于 agent 增量消费大结果集。

退出码：`0` 成功 / `1` 参数或 API 错误 / `2` 认证失效（需重新 `mbs login`）

---

## 文档索引

| 文档 | 用途 |
|------|------|
| [skills/SKILL.md](skills/SKILL.md) | 业务模块路由与命令速查 |
| [AGENTS.md](AGENTS.md) | 开发本项目时的 AI agent 协作规范 |
| [packages/cli/docs/serve.md](packages/cli/docs/serve.md) | `mbs serve` 本地 HTTP 网关说明 |
| [packages/cli/docs/version-and-update.md](packages/cli/docs/version-and-update.md) | 版本与更新机制详解 |
| [packages/org/docs/overview.md](packages/org/docs/overview.md) | `mbs org` 完整命令参考 |
