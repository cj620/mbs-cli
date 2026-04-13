# Agent Onboarding

这份文档用于把一台空白电脑快速准备成“AI agent 可以直接使用 MBS CLI 和本仓库 skill 文档”的状态。

说明：npm 包名使用 `@mb-it-org/cli`，但安装完成后执行的命令仍然是 `mbs`。

目标不是教人手动点来点去，而是让你把这份文档交给终端型 AI agent 后，它能尽量自动完成安装、验证和接入，并在遇到阻塞时给出清晰反馈。

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
- `mbs login` 依赖 `playwright-core` 驱动 Chromium，不要把它理解成“系统里随便有个浏览器就够了”
- CLI 安装和 skill 接入是两件事：前者解决命令可用，后者解决 agent 如何正确使用这个命令

## 最快可用主流程

默认最佳路径：仓库已经在本机，agent 通过 npm 安装 `@mb-it-org/cli`，然后读取本仓库里的 `skills/` 文档。

### Step 1: 检查基础环境

运行：

```bash
node -v
npm -v
```

要求：

- Node.js 版本 `>=18`
- 推荐使用当前 LTS

如果 `node` 或 `npm` 不存在，先安装 Node.js，再继续后续步骤。

### Step 2: 安装 CLI

运行：

```bash
npm install -g @mb-it-org/cli
```

这是主流程，不要求从源码构建。

### Step 3: 准备登录所需浏览器运行时

`mbs login` 当前是通过 `playwright-core` 启动 Chromium，打开登录页并监听登录请求来提取认证 `key`。空白电脑上即使已经装好了 `mbs`，也不代表登录所需的 Chromium 运行时一定已经就绪。

如果后续执行 `mbs login` 时提示缺少 browser executable、Chromium 或 Playwright browser，请先执行：

```bash
npx -y playwright install chromium
```

然后再继续登录。

### Step 4: 验证安装

运行：

```bash
mbs version
mbs whoami
```

预期：

- `mbs version` 能返回 JSON，并显示当前版本
- `mbs whoami` 在已登录时返回 `ok: true`

如果 `mbs whoami` 返回认证失败或退出码为 `2`，执行：

```bash
mbs login
```

这里的登录过程会由 Playwright 拉起 Chromium 登录页，而不是单纯复用本机默认浏览器会话。登录页内完成认证后，CLI 会从登录请求中提取 `key`，再换取 API cookie 和用户信息。

如果 `mbs login` 报缺少浏览器运行时，先执行：

```bash
npx -y playwright install chromium
mbs login
```

然后再重新执行 `mbs whoami`。

### Step 5: 可选业务验证

如果认证已经成功，可以再跑一个轻量查询验证：

```bash
mbs org platforms
```

这一步用于确认 agent 已经不仅能调用 CLI，还能拿到业务数据。

## Skill 接入流程

### 通用接入方式

Skill 文档随 CLI 打包发布，**更新 CLI 即同步更新 skill 文档**，无需单独维护。

通过 CLI 命令读取 skill 文档（推荐）：

```bash
mbs skills path                                   # 获取 skill 文档目录路径
mbs skills show                                   # 读取主入口 SKILL.md
mbs skills show --file references/global.md       # 读取全局参考
mbs skills show --file references/org/SKILL.md   # 读取 org 模块文档
```

或直接读取本仓库文件（仓库在本机时）：

- [`skills/SKILL.md`](../skills/SKILL.md)
- [`skills/references/global.md`](../skills/references/global.md)
- 需要组织架构查询时，再读取 `skills/references/org/*`

建议 agent 将这些文件视为自己的任务规约：

- 哪些场景必须走 `mbs`
- 命令输出与退出码怎么解释
- 组织架构查询的链路和参数如何传递

### 平台增强接入方式

如果 agent 平台本身支持“本地 skills / prompts / tool docs”注册机制，可以把本仓库 `skills/` 目录接入到它自己的技能目录或工作区配置中。

这里不要假设所有平台都支持同一种安装方式。正确做法是：

1. 先让 agent 判断当前平台是否支持本地 skill 注册
2. 如果支持，再按该平台机制把本仓库 `skills/` 纳入可读范围
3. 如果不支持，退回到“执行前读取本地 Markdown 文档”的通用方案

不要把“成功注册到平台的全局 skill 目录”当作必需条件。只要 agent 能稳定读取这些文档并按文档执行，就已经可用。

## 多平台指引

### Codex

适合当前仓库这类终端型工作流。

建议做法：

1. 在仓库根目录打开会话
2. 让 agent 先读取 [`skills/SKILL.md`](../skills/SKILL.md)
3. 再根据任务读取 `skills/references/global.md` 或 `skills/references/org/*`
4. 在当前工作区直接执行 `mbs` 命令做验证和查询

如果平台支持本地 skill 安装，再把 `skills/` 配进平台的技能搜索路径；如果不支持，保持“按需读 Markdown”即可。

### Claude Code

建议做法：

1. 让 agent 在会话开始时读取本仓库 `skills/` 文档
2. 把这些文档作为当前任务的本地规则，而不是普通说明文本
3. 在执行业务查询时始终优先调用 `mbs`

如果 Claude Code 环境支持把本地 skill 挂到固定目录，可额外接入；否则仍然用工作区内文档即可。

### 其他终端型 AI agent

最低要求：

- 能读本地文件
- 能执行 shell
- 能按返回结果决定是否继续

对这类 agent，不要求有原生 skill 机制。只要它能读取 `skills/SKILL.md` 和参考文档，并在执行时遵守其中约束，就足够完成 onboarding。

## 仓库来源分支

### 场景 A：仓库已经在本机

这是默认主流程。

直接使用本地：

- `README.md`
- `docs/agent-onboarding.md`
- `skills/SKILL.md`
- `skills/references/*`

### 场景 B：只有这篇 README 文本

此时 agent 还缺少实际 skill 文档和参考资料，不能直接假装自己已经完成接入。

正确做法是先获取仓库本体或至少获取以下文档包：

- `skills/SKILL.md`
- `skills/references/global.md`
- `skills/references/org/*`

仓库来源不要写死为某个公开 clone URL。统一表述为：

从公司内部源码地址、代码托管平台或文件分发渠道获取本仓库，然后再继续执行本文档中的主流程。

## 可直接交给 Agent 的 Bootstrap 提示词

下面这段提示词可以直接复制给 AI agent：

```text
你现在负责把这台电脑准备成可用的 MBS CLI 工作环境，并接入当前仓库里的 skill 文档。

请按下面规则执行：
1. 先检查是否已安装 Node.js 和 npm；如果缺失，安装 Node.js 18+，优先当前 LTS。
2. 检查是否已安装 mbs；如果没有，执行 npm install -g @mb-it-org/cli。
3. 明确检查 mbs login 是否依赖 Playwright 浏览器运行时；如果缺少 Chromium/browser executable，先执行 npx -y playwright install chromium。
4. 运行 mbs version 和 mbs whoami，并解释返回结果。
5. 如果 mbs whoami 显示未登录、认证失效或退出码为 2，执行或提示执行 mbs login，然后再次验证。
6. 读取当前仓库中的 skills/SKILL.md 与 skills/references/global.md；如果任务涉及组织架构，再读取 skills/references/org/*。
7. 明确区分 CLI 已安装 和 skill 文档已接入 这两件事，并分别汇报状态。
8. 运行最终验收命令：node -v、npm -v、mbs version、mbs whoami；如果认证可用，再补充 mbs org platforms。
9. 如果遇到权限问题、网络问题、缺少仓库文档、PATH 未生效、缺少 Playwright 浏览器运行时或认证失败，不要跳过，请明确说明阻塞点和建议处理方式。

业务查询时只允许优先使用 mbs，不要改用 curl，也不要猜 API 路径、参数或 ID。
```

## 人工检查清单

如果你要快速确认 agent 真的装好了，至少检查这些命令：

```bash
node -v
npm -v
mbs version
mbs whoami
```

如果已经完成登录，再补一条：

```bash
mbs org platforms
```

## 输出格式与退出码

所有 `mbs` 命令统一使用结构化 JSON：

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```

```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

退出码：

- `0`：成功
- `1`：参数错误或 API 错误
- `2`：认证失效，需要 `mbs login`

## 故障处理

### `mbs` 不存在

现象：

- `mbs version` 报“命令不存在”

处理：

1. 确认是否执行过 `npm install -g @mb-it-org/cli`
2. 如果执行过，检查 npm 全局安装目录是否已加入 PATH
3. 重新打开 shell 后再次执行 `mbs version`

### PATH 未生效

现象：

- npm 全局安装完成，但当前 shell 仍找不到 `mbs`

处理：

1. 重新打开终端
2. 检查 npm global bin 目录是否在 PATH 中
3. 必要时由 agent 明确报告“已安装但当前 shell 不可见”

### Playwright 浏览器运行时缺失

现象：

- `mbs login` 报 browser executable 不存在
- 报找不到 Chromium
- 报需要先安装 Playwright browsers

处理：

```bash
npx -y playwright install chromium
mbs login
```

说明：

- `mbs login` 当前依赖 `playwright-core` 拉起 Chromium 登录页
- 空白电脑上即使 `@mb-it-org/cli` 已安装，也可能仍缺少浏览器运行时

### npm 全局安装无权限

现象：

- `npm install -g @mb-it-org/cli` 因权限失败

处理：

1. 使用具备权限的终端重新执行
2. 或按当前机器的 npm 配置规则调整全局安装目录
3. agent 需要明确说明是“权限阻塞”，不要误报成安装成功

### `mbs whoami` 认证失效

现象：

- 返回 `ok: false`
- 退出码 `2`

处理：

```bash
mbs login
mbs whoami
```

### npm 更新或 GitHub Release 更新失败

先查看：

- [`packages/cli/docs/version-and-update.md`](../packages/cli/docs/version-and-update.md)

常见原因：

- npm registry 不可达
- GitHub API 限流
- `GITHUB_TOKEN` 无效
- 当前用户无权修改全局安装目录

## 参考链接

- [`README.md`](../README.md)
- [`packages/cli/docs/version-and-update.md`](../packages/cli/docs/version-and-update.md)
- [`skills/SKILL.md`](../skills/SKILL.md)
- [`skills/references/global.md`](../skills/references/global.md)
- [`packages/org/docs/overview.md`](../packages/org/docs/overview.md)
