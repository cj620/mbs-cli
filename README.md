# MBS CLI + Agent Skill Docs

MBS CLI 是公司内部电商管理系统的命令行工具，面向 AI agent 和终端工作流设计。这个仓库同时提供两类内容：

- `@mb-it-org/cli` 的安装与使用入口
- 供 agent 读取和遵守的 skill 文档与参考资料

如果你的目标是“在一台空白电脑上，把这份仓库交给 AI agent，让它自己把环境装到可用状态”，请从这里开始：

1. 安装 Node.js 18+（推荐当前 LTS）
2. 执行 `npm install -g @mb-it-org/cli`
3. 执行 `mbs version`
4. 执行 `mbs whoami`
5. 如未登录，执行 `mbs login`
6. 如果 `mbs login` 提示缺少 Chromium 浏览器运行时，先执行 `npx -y playwright install chromium`
7. 让 agent 读取 [`skills/SKILL.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/skills/SKILL.md) 和 `skills/references/*`

详细 onboarding 手册见 [`docs/agent-onboarding.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/docs/agent-onboarding.md)。

npm 包名现在是 `@mb-it-org/cli`，但安装后的命令仍然是 `mbs`。

## 标准入口

- CLI 安装：`npm install -g @mb-it-org/cli`
- 登录：`mbs login`
- Chromium 运行时补装：`npx -y playwright install chromium`
- 验证：`mbs version`、`mbs whoami`
- Skill 入口：[`skills/SKILL.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/skills/SKILL.md)
- 全局参考：[`skills/references/global.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/skills/references/global.md)

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

- [`docs/agent-onboarding.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/docs/agent-onboarding.md)：空白电脑与 agent 的完整接入说明
- [`packages/cli/docs/version-and-update.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/packages/cli/docs/version-and-update.md)：版本与更新说明
- [`skills/SKILL.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/skills/SKILL.md)：MBS skill 主入口
- [`packages/org/docs/overview.md`](/c:/Users/Administrator/Desktop/AI/mbs-cli/packages/org/docs/overview.md)：`mbs org` 命令概览

## 对 Agent 的最低要求

至少具备以下能力：

- 能读取本地 Markdown 文件
- 能执行 shell 命令
- 能在失败时汇报阻塞点，而不是跳过错误

业务查询时，agent 应优先使用 `mbs`，不要手写 `curl`、不要猜 API 路径、不要编造 ID 或参数。
