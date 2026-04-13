# MBS CLI + Agent Skill Docs

MBS CLI 是公司内部电商管理系统的命令行工具，面向 AI agent 和终端工作流设计。这个仓库同时提供两类内容：

- `@mb-it-org/cli` 的安装与使用入口
- 供 agent 读取和遵守的 skill 文档与参考资料

## 快速开始

> 目标：**CLI 可用 + 认证完成 + Skill 文档已接入**，三件事都做完才算就绪。

### 第一步：检测环境

先跑，再决定装什么，不要盲目安装：

```bash
node -v          # 需要 >= 18
npm -v
mbs version 2>/dev/null && echo "mbs 已安装" || echo "mbs 未安装"
```

### 第二步：按需安装

| 检测结果 | 操作 |
|----------|------|
| Node.js < 18 或不存在 | 先安装/升级 Node.js 18 LTS |
| mbs 未安装 | `npm install -g @mb-it-org/cli --registry=https://registry.npmmirror.com` |
| mbs 已安装 | `mbs update`（勿重复 global install） |

### 第三步：登录

```bash
mbs login
```

> `mbs login` 通过 `playwright-core` 启动 Chromium 登录页来提取认证 key，**不是**使用系统默认浏览器。  
> 若提示缺少浏览器运行时，先执行：
> ```bash
> npx -y playwright install chromium
> ```
> 然后再重新执行 `mbs login`。

### 第四步：接入 Skill 文档

Skill 文档随 CLI 一起打包，更新 CLI 即同步更新文档。通过以下命令读取：

```bash
mbs skills show                                   # 读取主入口 SKILL.md（必读）
mbs skills show --file references/global.md       # 读取全局参考（必读）
mbs skills show --file references/org/SKILL.md   # 按需，涉及组织架构时读取
```

### 第五步：验收

逐条执行，全部通过才算完成：

```bash
# 环境
node -v                  # 输出 v18.x 或更高
npm -v                   # 有输出即可

# CLI
mbs version              # 返回 JSON，含版本号
mbs whoami               # 返回 ok:true，含用户信息

# Skill 可用性（业务数据可达）
mbs org platforms        # 返回 ok:true，含平台列表
```

**验收通过标准：**

| 项目 | 验收命令 | 预期结果 |
|------|----------|----------|
| Node.js >= 18 | `node -v` | `v18.x` 及以上 |
| npm 可用 | `npm -v` | 有版本号输出 |
| CLI 已安装 | `mbs version` | JSON，含 `version` 字段 |
| 认证完成 | `mbs whoami` | `ok: true`，含用户信息 |
| Chromium 就绪 | （`mbs login` 无报错） | 无 browser executable 错误 |
| Skill 文档同步 | `mbs skills show` | `ok: true`，含 SKILL.md 内容 |
| Skill 可用 | `mbs org platforms` | `ok: true`，含平台数据 |

任何一条失败，参考 [docs/agent-onboarding.md](docs/agent-onboarding.md) 故障处理章节。

---

## 标准入口

- CLI 安装：`npm install -g @mb-it-org/cli --registry=https://registry.npmmirror.com`
- 登录：`mbs login`
- Chromium 运行时补装：`npx -y playwright install chromium`
- 验证：`mbs version`、`mbs whoami`
- Skill 入口：[skills/SKILL.md](skills/SKILL.md)
- 全局参考：[skills/references/global.md](skills/references/global.md)

## 统一约定

所有 `mbs` 命令都输出结构化 JSON：

```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```

```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

退出码语义：

- `0`：成功
- `1`：参数或 API 错误
- `2`：认证失效，需要执行 `mbs login`

`mbs login` 的实现不是单纯打开默认浏览器做网页登录，而是使用 `playwright-core` 启动 Chromium 打开登录页，监听登录链路中的请求并提取认证 `key`，再由 CLI 用这个 `key` 换取后续 API cookie 和用户信息。CLI 本身不会在安装阶段自动准备 Chromium；只有执行 `mbs login` 时才需要该运行时。

## 仓库内容

- [docs/agent-onboarding.md](docs/agent-onboarding.md)：空白电脑与 agent 的完整接入说明（含 Bootstrap 提示词和故障处理）
- [packages/cli/docs/version-and-update.md](packages/cli/docs/version-and-update.md)：版本与更新说明
- [skills/SKILL.md](skills/SKILL.md)：MBS skill 主入口
- [packages/org/docs/overview.md](packages/org/docs/overview.md)：`mbs org` 命令概览

## 对 Agent 的最低要求

至少具备以下能力：

- 能读取本地 Markdown 文件
- 能执行 shell 命令
- 能在失败时汇报阻塞点，而不是跳过错误

业务查询时，agent 应优先使用 `mbs`，不要手写 `curl`、不要猜 API 路径、不要编造 ID 或参数。
