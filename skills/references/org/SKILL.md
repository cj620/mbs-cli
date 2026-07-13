# org — 组织架构

通过 `mbs org` 命令查询组织架构数据。

## 意图匹配

| 用户说 | 应调用 |
|--------|--------|
| "有哪些平台" | `org platforms` |
| "平台下有哪些站点" | `org sites`（需 platformId） |
| "有哪些总监/找总监" | `org leaders`（需 company + platform） |
| "有哪些经理" | `org managers`（可按 leaders 过滤） |
| "有哪些主管" | `org little-leaders`（可按 leaders / managers 过滤） |
| "有哪些店长" | `org shop-managers`（可按 leaders / managers / littleLeaders 过滤） |
| "有哪些店铺/所有店" | `org shops`（company 即可） |
| "有哪些员工/团队编号" | `org employees`（可按已知组织层级过滤） |

## 命令一览

| 命令 | 说明 | 详细文档 |
|------|------|---------|
| `mbs org platforms` | 获取所有平台列表 | [platforms.md](./platforms.md) |
| `mbs org sites` | 获取平台下的站点列表 | [sites.md](./sites.md) |
| `mbs org leaders` | 获取总监列表 | [leaders.md](./leaders.md) |
| `mbs org managers` | 获取经理列表 | [managers.md](./managers.md) |
| `mbs org little-leaders` | 获取主管列表 | [little-leaders.md](./little-leaders.md) |
| `mbs org shop-managers` | 获取店长列表 | [shop-managers.md](./shop-managers.md) |
| `mbs org shops` | 获取店铺列表 | [shops.md](./shops.md) |
| `mbs org employees` | 获取员工/团队编号列表 | [employees.md](./employees.md) |

## 层级结构

```
platforms
  └─ leaders（按 company / platform 过滤）
       └─ managers（可按 leaders 过滤）
            └─ little-leaders（可按 leaders / managers 过滤）
                 └─ shop-managers（可按 leaders / managers / littleLeaders 过滤）
                      └─ employees（可按已知组织层级过滤）

sites（独立，仅依赖 platform ID）
shops（独立，仅需 company；其余字段为可选过滤）
```

这张图描述的是组织关系，不代表每次查询都必须按顺序执行。实际命令支持哪些筛选字段，以对应命令文档为准；已经有目标层级 ID 时，不要为了业务查询自动补齐下级 ID。`shops` 只需 `--company`，其余均为可选过滤条件。

## 组织参数使用规则（重要）

要区分两类需求：

1. **查询业务数据**：组织字段是独立筛选条件。比如用户要查询某个总监负责的商品、店铺或订单，已知总监 ID 时，直接传业务命令的 `--director`、`--leaders` 等对应参数即可，不需要先查询经理、主管、店长和员工 ID。
2. **获取下级名单**：只有用户明确要知道某个总监下面有哪些经理、主管、店长或员工时，才调用对应的 `org` 命令继续下钻。

`company`、`platform` 等业务命令明确要求的参数仍需提供；“不必下钻”不等于可以猜测或省略必填参数。

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

**需要获取下级 ID 时，按组织层级逐层下钻：**
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
- 退出码说明：见 [global.md](../global.md#退出码)
