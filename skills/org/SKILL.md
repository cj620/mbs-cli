---
name: org
description: "组织架构：平台、站点、总监、经理、主管、店长、店铺、员工的层级查询"
metadata:
  requires:
    bins: ["mbs"]
---

# 组织架构（org）

**CRITICAL — 先读 `../shared/SKILL.md` 了解认证与输出格式**

---

## 命令一览

| 命令 | 说明 | 详细文档 |
|------|------|---------|
| `mbs org platforms` | 获取所有平台列表 | [references/platforms.md](references/platforms.md) |
| `mbs org sites` | 获取平台下的站点列表 | [references/sites.md](references/sites.md) |
| `mbs org leaders` | 获取总监列表 | [references/leaders.md](references/leaders.md) |
| `mbs org managers` | 获取经理列表 | [references/managers.md](references/managers.md) |
| `mbs org little-leaders` | 获取主管列表 | [references/little-leaders.md](references/little-leaders.md) |
| `mbs org shop-managers` | 获取店长列表 | [references/shop-managers.md](references/shop-managers.md) |
| `mbs org shops` | 获取店铺列表 | [references/shops.md](references/shops.md) |
| `mbs org employees` | 获取员工/团队编号列表 | [references/employees.md](references/employees.md) |

---

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

---

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

---

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

---

## 典型场景

### 场景一：获取某平台下的运营中店铺

```bash
# 1. 找平台 ID
mbs org platforms

# 2. 查运营中店铺
mbs org shops --company 1 --platform <platformId> --status 1

# 3. 提取 ID 列表
mbs org shops --company 1 --platform <platformId> --status 1 | jq '[.data[].id]'
```

### 场景二：按组织层级逐层下钻

```bash
mbs org platforms
mbs org leaders --company 1 --platform <platformId>
mbs org managers --company 1 --platform <platformId> --leaders <leaderId>
mbs org little-leaders --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId>
mbs org shop-managers --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId>
mbs org employees --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId> --shopManagers <shopManagerId>
```

---

## 注意事项

- 公司 ID：`1`=胤元，`33`=启元，多数查询需先确认公司
- 多个 ID 统一用逗号分隔，例如 `--leaders L001,L002`
- 退出码 `2` = 认证失败，执行 `mbs login`
