---
name: mbs
description: "Use when working with MBS / 马帮 CLI for authentication, CLI version checks, CLI updates, raw API access, or org hierarchy queries such as 平台/站点/总监/经理/主管/店长/店铺/员工."
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI

通过 `mbs` 命令查询马帮平台数据，或处理 CLI 自身的版本与更新。

## 严格禁止 (NEVER DO)

- 不使用 `mbs` 以外的方式请求 MBS 数据，例如 `curl` 或手写 HTTP
- 不编造 ID，必须从命令返回结果中提取
- 不猜测参数值，执行前先查询确认

## 模块总览

| 模块 | 用途 | 参考 |
|------|------|------|
| `org` | 组织架构：平台 / 站点 / 总监 / 经理 / 主管 / 店长 / 店铺 / 员工 | [references/org/SKILL.md](references/org/SKILL.md) |

## 意图路由

- 用户提到 MBS / 马帮 业务数据：先看模块总览，再路由到对应模块 SKILL
- 用户需要认证、输出格式、退出码、`raw` 调用：看 [references/global.md](references/global.md)
- 用户需要查看版本、升级 CLI、切换更新来源、排查 GitHub 或 npm 更新失败：优先看 [references/global.md](references/global.md) 里的“版本与更新”

## 全局参考

- [references/global.md](references/global.md) — 认证配置、版本与更新、输出格式、退出码、直通命令
