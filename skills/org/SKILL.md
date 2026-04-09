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
| `mbs org platforms` | 获取所有平台列表 | [platforms.md](../references/org/platforms.md) |
| `mbs org sites` | 获取平台下的站点列表 | [sites.md](../references/org/sites.md) |
| `mbs org leaders` | 获取总监列表 | [leaders.md](../references/org/leaders.md) |
| `mbs org managers` | 获取经理列表 | [managers.md](../references/org/managers.md) |
| `mbs org little-leaders` | 获取主管列表 | [little-leaders.md](../references/org/little-leaders.md) |
| `mbs org shop-managers` | 获取店长列表 | [shop-managers.md](../references/org/shop-managers.md) |
| `mbs org shops` | 获取店铺列表 | [shops.md](../references/org/shops.md) |
| `mbs org employees` | 获取员工/团队编号列表 | [employees.md](../references/org/employees.md) |

## 层级结构

```
platforms
  └─ leaders（需 company + platform）
       └─ managers（需 + leaders）
            └─ little-leaders（需 + managers）
                 └─ shop-managers（需 + littleLeaders）
                      └─ employees（需完整链路）

sites（独立，仅依赖 platform ID）
shops（独立，仅需 company；其余字段为可选过滤）
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
- 退出码说明：见 [global.md](../references/global.md#退出码)
