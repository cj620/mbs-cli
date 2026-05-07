# MBS CLI

公司内部电商管理系统的命令行工具，将马帮平台的业务数据以结构化 JSON 输出，支持脚本集成和 AI agent 调用。

> **If you are an AI agent:** 展开下方「AI Agent 接入指南」，按步骤执行完成接入，不要跳过。

<details>
<summary><strong>AI Agent 接入指南（点击展开）</strong></summary>

## 适用对象

- 新电脑或未配置过 `mbs` 的环境
- 具备 shell 执行能力的终端型 AI agent
- 需要查询 MBS 业务数据，并使用本仓库 `skills/` 文档作为工作上下文的人或 agent

## Agent 执行原则

- 先检查现状，再安装缺失项，不要重复安装
- 业务查询统一通过 `mbs`，不要用 `curl` 或手写 HTTP
- 不猜 API 路径、ID、参数值；必须先查命令和返回结果
- `mbs` 命令失败时先看结构化 JSON 的 `error.hint`
- 退出码 `2` 表示认证失效，应提示或执行 `mbs login`
- CLI 安装和 skill 接入是两件事：前者解决命令可用，后者解决 agent 如何正确使用命令

## 主流程

### Step 1: 判断是否优先接入 Agent Skill

先区分清楚三件事：

- `CLI 已安装`：`mbs` 命令是否可执行
- `认证已完成`：`mbs whoami` 是否正常返回
- `agent skill 已接入`：agent 是否已挂载或读取 `skills/` 文档作为任务规约

如果当前平台支持本地 skill / prompts / tool docs 注册机制，优先把仓库 `skills/` 目录接入平台配置，再继续后续步骤。

### Step 2: 检查基础环境

```bash
node -v    # 需要 >= 18
npm -v
```

`node` 或 `npm` 不存在时先安装 Node.js 18 LTS，再继续。

### Step 3: 安装 CLI

```bash
npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/
```

> 已知 `https://registry.npmmirror.com` 可能缓存旧版 `0.1.25`（含 `workspace:*` 依赖，安装报 `EUNSUPPORTEDPROTOCOL`），请使用 npm 官方源。

如果 `mbs` 已安装，跳过此步，执行 `mbs update` 即可。

### Step 4: 确认登录浏览器可用

`mbs login` 会优先使用系统已有的 Chrome，其次 Edge。一般办公环境已有浏览器，不需要额外准备浏览器运行时。

只有在系统 Chrome / Edge 都不可用，且 `mbs login` 明确提示缺少浏览器运行时时，才按错误提示补齐运行时。不要在阅读文档或环境检查阶段主动安装。

### Step 5: 登录并验证认证

```bash
mbs login    # 拉起受控浏览器，完成登录后 CLI 提取认证 key
mbs whoami   # 确认认证状态
```

预期：`mbs whoami` 返回 `ok: true`，含用户信息。若返回 `ok: false` 或退出码 `2`，重新执行 `mbs login`。

### Step 6: 接入 Skill 文档

Skill 文档随 CLI 打包发布，更新 CLI 即同步更新文档文件；但 **agent 会话内的旧缓存需主动刷新**。

**方式 1（推荐）：安装到 agent 平台**

```bash
mbs skills install                  # 自动安装到已检测到的 Claude/Codex
mbs skills install --target claude  # 安装到 ~/.claude/skills/mbs/
mbs skills install --target codex   # 安装到 ~/.codex/skills/mbs/
```

命令会把 npm 包内置的 `skills/` 完整复制为平台 skill 目录，例如 `~/.claude/skills/mbs/SKILL.md`，并保留 `references/` 等详细文档结构。安装后重启或刷新 agent 会话，让平台重新加载 skill。

更新 CLI 后，重新运行安装命令即可覆盖本地 agent skill：

```bash
npm update -g @mb-it-org/cli
mbs skills install
```

如只更新指定平台：

```bash
mbs skills install --target claude
mbs skills install --target codex
```

**方式 2（备选）：读取到当前会话上下文**

```bash
mbs skills show                                    # 读取主入口 SKILL.md（必读）
mbs skills show --file references/global.md        # 读取全局参考（必读）
mbs skills show --file references/org/SKILL.md    # 按需，涉及组织架构时读取
mbs skills show --file references/shops/SKILL.md  # 按需，涉及店铺运营时读取
```

**方式 3（仓库在本机时）：**

- [`skills/SKILL.md`](skills/SKILL.md)
- [`skills/references/global.md`](skills/references/global.md)
- 按需：`skills/references/org/*`、`skills/references/shops/*`

### Step 7: 验收

逐条执行，全部通过才算完成：

```bash
node -v           # v18.x 及以上
npm -v            # 有版本号输出
mbs version       # 返回 JSON，含版本号
mbs whoami        # ok: true，含用户信息
mbs skills show   # ok: true，含 SKILL.md 内容
mbs org platforms # ok: true，含平台数据
```

**agent skill 接入状态**（根据平台确认）：
- 平台已挂载 `skills/`，或
- agent 会话中已读取 `skills/SKILL.md` 与 `skills/references/global.md`

## Bootstrap 提示词

可直接复制给 AI agent：

```text
你现在负责把这台电脑准备成可用的 MBS CLI 工作环境，并接入当前仓库里的 skill 文档。

请按下面规则执行：
1. 先判断当前 agent 平台是否支持本地 skill / prompt / tool docs 注册；如果支持，优先把当前仓库的 skills/ 接入到 agent 自己的 skill 机制中。
2. 明确区分并分别汇报三件事：CLI 已安装、认证已完成、agent skill 已接入。
3. 检查是否已安装 Node.js 和 npm；如果缺失，安装 Node.js 18+，优先当前 LTS。
4. 检查是否已安装 mbs；如果没有，执行 npm install -g @mb-it-org/cli --registry=https://registry.npmjs.org/。
5. 如果平台不支持 skill 挂载，至少读取当前仓库中的 skills/SKILL.md 与 skills/references/global.md；如果任务涉及组织架构，再读取 skills/references/org/*。
6. 不要主动安装浏览器运行时；默认使用系统已有 Chrome/Edge，只有 mbs login 明确报缺少浏览器运行时时才说明阻塞点。
7. 执行 mbs login，然后运行 mbs version 和 mbs whoami，并解释返回结果。
8. 如果 mbs whoami 显示未登录或退出码为 2，重新执行 mbs login，再次验证。
9. 运行最终验收命令：node -v、npm -v、mbs version、mbs whoami、mbs skills show；如果认证可用，再补充 mbs org platforms。
10. 如果遇到权限问题、网络问题、PATH 未生效、缺少浏览器运行时或认证失败，明确说明阻塞点和建议处理方式，不要跳过。

业务查询时只允许使用 mbs，不要改用 curl，也不要猜 API 路径、参数或 ID。
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

处理：先确认系统 Chrome 或 Edge 是否可用；如果仍不可用，再按 `mbs login` 的错误提示补齐浏览器运行时。

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

| 模块 | 命令前缀 | 用途 |
|------|---------|------|
| org | `mbs org` | 组织架构：平台、站点、总监、经理、主管、店长、店铺、员工 |
| shops | `mbs shops` | 店铺运营：Amazon 账号健康、违规统计、合规评分 |
| update | `mbs version` / `mbs update` | CLI 版本检查与更新 |

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

---

## 输出格式

所有命令统一输出结构化 JSON：

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

退出码：`0` 成功 / `1` 参数或 API 错误 / `2` 认证失效（需重新 `mbs login`）

---

## 文档索引

| 文档 | 用途 |
|------|------|
| [skills/SKILL.md](skills/SKILL.md) | 业务模块路由与命令速查 |
| [AGENTS.md](AGENTS.md) | 开发本项目时的 AI agent 协作规范 |
| [packages/cli/docs/version-and-update.md](packages/cli/docs/version-and-update.md) | 版本与更新机制详解 |
| [packages/org/docs/overview.md](packages/org/docs/overview.md) | `mbs org` 完整命令参考 |
