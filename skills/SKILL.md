---
name: mbs
description: "MBS / 马帮 CLI：认证配置、组织架构查询。当用户提到「马帮」「MBS」「平台/站点/总监/经理/主管/店长/店铺/员工」时使用。"
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI

通过 `mbs` 命令查询马帮平台数据。

## 严格禁止 (NEVER DO)
- 不使用 `mbs` 以外的方式请求数据（禁止 curl、直接 HTTP）
- 不编造 ID，必须从命令返回中提取
- 不猜测参数值，操作前先查询确认

## 模块总览

| 模块 | 用途 | 参考 |
|------|------|------|
| `org` | 组织架构：平台/站点/总监/经理/主管/店长/店铺/员工 | [references/org/SKILL.md](references/org/SKILL.md) |

## 意图路由

用户提到**马帮 / MBS** 相关业务 → 查上方模块总览，路由到对应模块 SKILL.md。

## 全局参考

- [references/global.md](references/global.md) — 认证配置、输出格式、退出码、直通命令
