# SKILL.md 模块化架构设计

**日期：** 2026-04-09  
**状态：** 已批准

---

## 背景

当前 `skills/SKILL.md` 将所有模块细节（org 层级、意图匹配、典型场景、认证配置等）全部写在入口文件中，共 160 行。随着后续模块（orders、finance、customers 等）陆续增加，入口将线性膨胀，难以维护。

---

## 目标

- 入口 SKILL.md 行数固定（~25 行），无论模块数量增加多少
- 模块复杂度内聚在各自的 SKILL.md，完全自治
- 全局公共信息（认证/输出/退出码）统一在一处，不重复

---

## 架构方案：严格三层分离

### 文件结构

```
skills/
├── SKILL.md                    ← 入口（~25 行，永远不变）
├── org/
│   └── SKILL.md                ← org 模块路由（~70 行）
├── orders/                     ← 未来模块（同结构）
│   └── SKILL.md
└── references/
    ├── global.md               ← 新增：认证/输出格式/退出码/直通命令
    └── org/
        ├── platforms.md        ← 原样保留
        ├── sites.md
        ├── leaders.md
        ├── managers.md
        ├── little-leaders.md
        ├── shop-managers.md
        ├── shops.md
        └── employees.md
```

### 层级职责

| 层级 | 文件 | 职责 |
|------|------|------|
| 入口 | `skills/SKILL.md` | NEVER DO + 模块总览表 + 模块级意图路由 + 全局参考链接 |
| 模块 | `skills/<module>/SKILL.md` | 模块内意图决策树 + 命令一览 + 层级关系 + 上下文传递 + 典型场景 |
| 参考 | `references/<module>/*.md` | 各命令 API 详情（flags、响应结构、示例） |
| 全局 | `references/global.md` | 认证配置、输出格式、退出码、直通命令 |

---

## 各文件内容设计

### `skills/SKILL.md`（入口）

```markdown
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
| `org` | 组织架构：平台/站点/总监/经理/主管/店长/店铺/员工 | [org/SKILL.md](org/SKILL.md) |

## 意图路由

用户提到**马帮 / MBS** 相关业务 → 查上方模块总览，路由到对应模块 SKILL.md。

## 全局参考

- [references/global.md](references/global.md) — 认证配置、输出格式、退出码、直通命令
```

### `skills/org/SKILL.md`（模块）

内容来源：从现有入口迁移，不删减。包含：
- 意图决策树（用户说什么 → 调用哪个命令）
- 命令一览表（链接到 references/org/*.md）
- 层级结构图
- 上下文传递表
- 典型场景（逐层下钻、获取运营中店铺等）
- 注意事项（公司 ID、多值逗号分隔等）

### `references/global.md`（全局参考）

内容来源：从现有入口迁移。包含：
- 首次配置流程（`mbs config init` / `mbs login` / `mbs whoami`）
- CI / 无交互环境用法（环境变量）
- 直通命令（`mbs raw GET/POST`）
- 输出格式（成功/失败 JSON 结构）
- 退出码表（0/1/2）

---

## 扩展规则（新增模块时）

1. 在 `skills/<module>/` 下新建 `SKILL.md`
2. 在 `references/<module>/` 下放各命令参考文件
3. 在入口 `skills/SKILL.md` 的模块总览表追加一行
4. 在入口意图路由补充触发关键词（如需要）
5. 入口不添加任何模块细节

---

## 迁移动作清单

- [ ] 重写 `skills/SKILL.md`（精简为入口路由）
- [ ] 新建 `skills/org/SKILL.md`（迁移现有 org 细节）
- [ ] 新建 `references/global.md`（迁移认证/输出/退出码）
- [ ] 验证所有相对路径链接正确
