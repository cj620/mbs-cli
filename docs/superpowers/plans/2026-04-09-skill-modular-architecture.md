# SKILL.md 模块化架构重构 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有单文件 `skills/SKILL.md` 重构为三层模块化架构，使入口保持 ~25 行，各模块细节内聚在自己的 SKILL.md 中。

**Architecture:** 入口 SKILL.md 只做 NEVER DO + 模块路由表 + 全局参考链接；每个模块有独立的 `skills/<module>/SKILL.md` 承载意图决策树、命令一览、层级图、典型场景；全局公共信息（认证/输出/退出码）下沉到 `references/global.md`。

**Tech Stack:** Markdown 文件重构，无代码变更。

**Spec:** `docs/superpowers/specs/2026-04-09-skill-modular-architecture-design.md`

---

## 文件变更清单

| 操作 | 文件 | 说明 |
|------|------|------|
| 新建 | `skills/references/global.md` | 迁移认证/输出格式/退出码/直通命令 |
| 新建 | `skills/org/SKILL.md` | 迁移 org 模块所有细节 |
| 重写 | `skills/SKILL.md` | 精简为 ~25 行入口路由 |

---

### Task 1: 新建 `skills/references/global.md`

**Files:**
- Create: `skills/references/global.md`

- [ ] **Step 1: 创建文件**

内容完全来自现有 `skills/SKILL.md` 第 20-65 行：

```markdown
# 全局参考

## 认证与配置

### 首次配置

```bash
mbs config init   # 配置 API 地址（仅需一次）
mbs login         # 浏览器完成 SSO，token 存入系统钥匙串
mbs whoami        # 验证认证状态
```

### CI / 无交互环境

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```

### 直通命令（探索未封装接口）

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
```

---

## 输出格式（所有命令统一）

**成功：**
```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```

**失败：**
```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

---

## 退出码

| 退出码 | 含义 | 处理方式 |
|--------|------|---------|
| `0` | 成功 | — |
| `1` | API / 参数错误 | 检查 `error.hint` 字段 |
| `2` | 认证失败 | 运行 `mbs login` 重新登录 |
```

- [ ] **Step 2: 验证文件存在**

```bash
cat skills/references/global.md
```

预期：输出完整文件内容，包含认证/输出/退出码三个章节。

- [ ] **Step 3: Commit**

```bash
git add skills/references/global.md
git commit -m "feat(skill): add references/global.md with auth, output format and exit codes"
```

---

### Task 2: 新建 `skills/org/SKILL.md`

**Files:**
- Create: `skills/org/SKILL.md`

- [ ] **Step 1: 创建目录**

```bash
mkdir -p skills/org
```

预期：`skills/org/` 目录存在，无报错。

- [ ] **Step 2: 创建文件**

内容完全来自现有 `skills/SKILL.md` 第 67-160 行，调整标题层级和参考链接路径：

```markdown
# org — 组织架构

通过 `mbs org` 命令查询组织架构数据。

## 意图匹配

| 用户说 | 应调用 |
|--------|--------|
| "有哪些平台" | `org platforms` |
| "平台下有哪些站点" | `org sites`（需 platformId） |
| "有哪些总监/找总监" | `org leaders`（需 company + platform） |
| "有哪些经理" | `org managers`（需 + leaders） |
| "有哪些主管" | `org little-leaders`（需 + managers） |
| "有哪些店长" | `org shop-managers`（需 + littleLeaders） |
| "有哪些店铺/所有店" | `org shops`（company 即可） |
| "有哪些员工/团队编号" | `org employees`（需完整链路） |

## 命令一览

| 命令 | 说明 | 详细文档 |
|------|------|---------|
| `mbs org platforms` | 获取所有平台列表 | [references/org/platforms.md](../references/org/platforms.md) |
| `mbs org sites` | 获取平台下的站点列表 | [references/org/sites.md](../references/org/sites.md) |
| `mbs org leaders` | 获取总监列表 | [references/org/leaders.md](../references/org/leaders.md) |
| `mbs org managers` | 获取经理列表 | [references/org/managers.md](../references/org/managers.md) |
| `mbs org little-leaders` | 获取主管列表 | [references/org/little-leaders.md](../references/org/little-leaders.md) |
| `mbs org shop-managers` | 获取店长列表 | [references/org/shop-managers.md](../references/org/shop-managers.md) |
| `mbs org shops` | 获取店铺列表 | [references/org/shops.md](../references/org/shops.md) |
| `mbs org employees` | 获取员工/团队编号列表 | [references/org/employees.md](../references/org/employees.md) |

## 层级结构

```
platforms
  └─ leaders（需 company + platform）
       └─ managers（需 + leaders）
            └─ little-leaders（需 + managers）
                 └─ shop-managers（需 + littleLeaders）
                      ├─ shops（只需 company，其余可选）
                      └─ employees（需完整链路）

sites（独立，仅依赖 platform ID）
```

组织层级**从上到下单向依赖**，不可跳层。`shops` 是例外：只需 `--company`，其余均为可选过滤条件。

## 上下文传递

| 命令 | 提取字段 | 传入下一步 |
|------|---------|-----------|
| `org platforms` | `data[].id` → platformId | `--platform` |
| `org leaders` | `data[].id` → leaderId | `--leaders` |
| `org managers` | `data[].id` → managerId | `--managers` |
| `org little-leaders` | `data[].id` → littleLeaderId | `--littleLeaders` |
| `org shop-managers` | `data[].id` → shopManagerId | `--shopManagers` |
| `org shops` | `data[].id` → shopId | 其他 skill 按店铺过滤 |
| `org employees` | `data[].id` → employeeId | 其他 skill 按员工过滤 |

## 典型场景

**获取某平台下的运营中店铺：**
```bash
mbs org platforms
mbs org shops --company 1 --platform <platformId> --status 1
mbs org shops --company 1 --platform <platformId> --status 1 | jq '[.data[].id]'
```

**按组织层级逐层下钻：**
```bash
mbs org platforms
mbs org leaders --company 1 --platform <platformId>
mbs org managers --company 1 --platform <platformId> --leaders <leaderId>
mbs org little-leaders --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId>
mbs org shop-managers --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId>
mbs org employees --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId> --shopManagers <shopManagerId>
```

## 注意事项

- 公司 ID：`1`=胤元，`33`=启元，多数查询需先确认公司
- 多个 ID 统一用逗号分隔，例如 `--leaders L001,L002`
- 退出码 `2` = 认证失败，执行 `mbs login`
```

- [ ] **Step 2: 验证文件存在**

```bash
cat skills/org/SKILL.md
```

预期：输出完整文件内容，包含意图匹配、命令一览、层级结构、上下文传递、典型场景、注意事项六个章节。

- [ ] **Step 3: Commit**

```bash
git add skills/org/SKILL.md
git commit -m "feat(skill): add org/SKILL.md with module-level intent routing and details"
```

---

### Task 3: 重写 `skills/SKILL.md`（精简入口）

**Files:**
- Modify: `skills/SKILL.md`

- [ ] **Step 1: 重写文件为精简入口**

完整替换为以下内容：

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

- [ ] **Step 2: 验证行数符合预期**

```bash
wc -l skills/SKILL.md
```

预期：约 25-30 行。

- [ ] **Step 3: 验证旧内容已移除**

```bash
grep -n "org platforms" skills/SKILL.md
```

预期：无输出（org 命令细节已迁移到 `skills/org/SKILL.md`）。

- [ ] **Step 4: Commit**

```bash
git add skills/SKILL.md
git commit -m "refactor(skill): slim entry SKILL.md to pure routing layer"
```

---

### Task 4: 验证所有相对路径链接

**Files:**
- Read: `skills/SKILL.md`
- Read: `skills/org/SKILL.md`

- [ ] **Step 1: 验证入口链接目标存在**

```bash
ls skills/org/SKILL.md skills/references/global.md
```

预期：两个文件都存在，无报错。

- [ ] **Step 2: 验证 org 模块内链接目标存在**

```bash
ls skills/references/org/platforms.md \
   skills/references/org/sites.md \
   skills/references/org/leaders.md \
   skills/references/org/managers.md \
   skills/references/org/little-leaders.md \
   skills/references/org/shop-managers.md \
   skills/references/org/shops.md \
   skills/references/org/employees.md
```

预期：所有文件存在，无报错。

- [ ] **Step 3: Commit（如有遗漏修复）**

若 Step 1-2 均通过，无需额外提交。若发现路径错误，修复后执行：

```bash
git add skills/
git commit -m "fix(skill): correct relative paths in SKILL.md files"
```

---

## 完成标志

- `skills/SKILL.md` 行数 ≤ 30 行
- `skills/org/SKILL.md` 存在，包含原入口中所有 org 细节
- `skills/references/global.md` 存在，包含认证/输出/退出码
- 所有相对路径链接目标文件均存在
