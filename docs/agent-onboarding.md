# Agent Onboarding

把一台空白电脑或新 AI agent 环境准备成"可直接使用 MBS CLI 和 skill 文档"的状态。

说明：npm 包名为 `@mb-it-org/cli`，安装后的可执行命令是 `mbs`。

目标：让你把这份文档交给终端型 AI agent 后，它能自动完成安装、验证和 skill 接入，并在阻塞时给出清晰反馈。

---

## 适用对象

- 新电脑或未配置过 `mbs` 的环境
- 具备 shell 执行能力的终端型 AI agent
- 需要查询 MBS 业务数据，并使用本仓库 `skills/` 文档作为工作上下文的人或 agent

---

## Agent 执行原则

- 先检查现状，再安装缺失项，不要重复安装
- 业务查询统一通过 `mbs`，不要用 `curl` 或手写 HTTP
- 不猜 API 路径、ID、参数值；必须先查命令和返回结果
- `mbs` 命令失败时先看结构化 JSON 的 `error.hint`
- 退出码 `2` 表示认证失效，应提示或执行 `mbs login`
- CLI 安装和 skill 接入是两件事：前者解决命令可用，后者解决 agent 如何正确使用命令

---

## 主流程

### Step 1: 判断是否优先接入 Agent Skill

先区分清楚三件事：

- `CLI 已安装`：`mbs` 命令是否可执行
- `认证已完成`：`mbs whoami` 是否正常返回
- `agent skill 已接入`：agent 是否已挂载或读取 `skills/` 文档作为任务规约

如果当前平台支持本地 skill / prompts / tool docs 注册机制，优先把仓库 `skills/` 目录接入平台配置，再继续后续步骤。如果平台不支持，不要阻塞，直接进入 Step 2。

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

### Step 4: 准备登录所需浏览器运行时

`mbs login` 由 `playwright-core` 驱动浏览器完成认证，优先尝试系统 Chrome，其次 Edge，最后回退到 Playwright Chromium。空白电脑上即使 `mbs` 已安装，也不代表 Playwright Chromium 已就绪。

如果后续执行 `mbs login` 时提示缺少 browser executable、Chromium 或 Playwright browsers，先执行：

```bash
npx -y playwright install chromium
```

然后再执行 `mbs login`。系统有 Chrome 或 Edge 时不需要预装 Chromium。

### Step 5: 登录并验证认证

```bash
mbs login    # 拉起受控浏览器，完成登录后 CLI 提取认证 key
mbs whoami   # 确认认证状态
```

预期：`mbs whoami` 返回 `ok: true`，含用户信息。

若返回 `ok: false` 或退出码 `2`，重新执行 `mbs login`（缺少浏览器运行时见 Step 4）。

### Step 6: 接入 Skill 文档

Skill 文档随 CLI 打包发布，更新 CLI 即同步更新文档文件；但 **agent 会话内的旧缓存需主动刷新**。

**优先级规则（按顺序执行第一个可用的方式）：**

1. 平台支持本地 skill 注册/挂载 → 优先把仓库 `skills/` 接入平台配置
2. CLI 已安装 → 通过 `mbs skills show` 读取
3. 以上均不适用 → 直接读取仓库 Markdown 文件

**通过 CLI 读取（推荐）：**

```bash
mbs skills show                                    # 读取主入口 SKILL.md（必读）
mbs skills show --file references/global.md        # 读取全局参考（必读）
mbs skills show --file references/org/SKILL.md    # 按需，涉及组织架构时读取
mbs skills show --file references/shops/SKILL.md  # 按需，涉及店铺运营时读取
```

**直接读取仓库文件（仓库在本机时）：**

- [`skills/SKILL.md`](../skills/SKILL.md)
- [`skills/references/global.md`](../skills/references/global.md)
- 按需：`skills/references/org/*`、`skills/references/shops/*`

### Step 7: 可选业务验证

```bash
mbs org platforms
```

返回 `ok: true` 且含平台列表，说明 CLI、认证、业务数据均就绪。

---

## 验收清单

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

任何一条失败，参考下方故障处理章节。

---

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
6. 明确检查 mbs login 是否依赖 Playwright 浏览器运行时；如果缺少，先执行 npx -y playwright install chromium。
7. 执行 mbs login，然后运行 mbs version 和 mbs whoami，并解释返回结果。
8. 如果 mbs whoami 显示未登录或退出码为 2，重新执行 mbs login，再次验证。
9. 运行最终验收命令：node -v、npm -v、mbs version、mbs whoami、mbs skills show；如果认证可用，再补充 mbs org platforms。
10. 如果遇到权限问题、网络问题、PATH 未生效、缺少浏览器运行时或认证失败，明确说明阻塞点和建议处理方式，不要跳过。

业务查询时只允许使用 mbs，不要改用 curl，也不要猜 API 路径、参数或 ID。
```

---

## 输出格式与退出码

所有 `mbs` 命令统一输出结构化 JSON：

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```

```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

退出码：`0` 成功 / `1` 参数或 API 错误 / `2` 认证失效（需 `mbs login`）

---

## 故障处理

### `mbs` 命令不存在

1. 确认是否执行过 `npm install -g @mb-it-org/cli`
2. 检查 npm 全局安装目录是否已加入 PATH
3. 重新打开 shell 后再次执行 `mbs version`

### PATH 未生效

npm 全局安装完成但当前 shell 找不到 `mbs`：重新打开终端，或检查 npm global bin 目录是否在 PATH 中。

### Playwright 浏览器运行时缺失

现象：`mbs login` 报 browser executable 不存在 / 找不到 Chromium / 需要先安装 Playwright browsers

```bash
npx -y playwright install chromium
mbs login
```

### npm 全局安装无权限

使用具备权限的终端重新执行，或按当前机器的 npm 配置调整全局安装目录。agent 需明确说明是"权限阻塞"，不要误报成安装成功。

### 认证失效（退出码 2）

```bash
mbs login
mbs whoami
```

### 版本更新失败

参考 [`packages/cli/docs/version-and-update.md`](../packages/cli/docs/version-and-update.md)。

常见原因：npm registry 不可达 / GitHub API 限流 / `GITHUB_TOKEN` 无效 / 无权修改全局安装目录。

---

## 参考链接

- [`README.md`](../README.md)
- [`skills/SKILL.md`](../skills/SKILL.md)
- [`skills/references/global.md`](../skills/references/global.md)
- [`packages/org/docs/overview.md`](../packages/org/docs/overview.md)
- [`packages/cli/docs/version-and-update.md`](../packages/cli/docs/version-and-update.md)
