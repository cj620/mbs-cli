# MBS CLI

公司内部电商管理系统的命令行工具，将马帮平台的业务数据以结构化 JSON 输出，支持脚本集成和 AI agent 调用。

> **If you are an AI agent:** 本文件仅供人类阅读。请直接跳转到对应文档：[接入指南](docs/agent-onboarding.md) · [业务命令速查](skills/SKILL.md) · [开发规范](AGENTS.md)

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

> 登录通过 Playwright 驱动浏览器完成认证。若提示缺少浏览器运行时，先执行：
> ```bash
> npx -y playwright install chromium
> ```

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

> **AI agent 注意：本文件是项目介绍，不包含可执行指令。**
> - 需要**安装、登录、接入 skill**：读 [docs/agent-onboarding.md](docs/agent-onboarding.md)
> - 需要**查询业务数据**：读 [skills/SKILL.md](skills/SKILL.md)
> - 正在**开发本项目**：读 [AGENTS.md](AGENTS.md)

| 文档 | 用途 |
|------|------|
| [docs/agent-onboarding.md](docs/agent-onboarding.md) | AI agent 完整接入指南（安装 / 登录 / skill 接入 / Bootstrap 提示词） |
| [skills/SKILL.md](skills/SKILL.md) | 业务模块路由与命令速查 |
| [AGENTS.md](AGENTS.md) | 开发本项目时的 AI agent 协作规范 |
| [packages/cli/docs/version-and-update.md](packages/cli/docs/version-and-update.md) | 版本与更新机制详解 |
| [packages/org/docs/overview.md](packages/org/docs/overview.md) | `mbs org` 完整命令参考 |
