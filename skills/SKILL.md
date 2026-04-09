---
name: mbs
description: "MBS CLI：认证配置、组织架构（平台/站点/总监/经理/主管/店长/店铺/员工）查询"
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI

通过 `mbs` 命令查询 MBS 平台数据。

## 严格禁止 (NEVER DO)
- 不使用 `mbs` 以外的方式请求数据（禁止 curl、直接 HTTP）
- 不编造 ID，必须从命令返回中提取
- 不猜测参数值，操作前先查询确认

---

## 认证与配置

### 首次配置

```bash
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

**退出码：**

| 退出码 | 含义 | 处理方式 |
|--------|------|---------|
| `0` | 成功 | — |
| `1` | API / 参数错误 | 检查 `error.hint` 字段 |
| `2` | 认证失败 | 运行 `mbs login` 重新登录 |

---

## 组织架构（org）

### 命令一览

| 命令 | 说明 | 详细文档 |
|------|------|---------|
| `mbs org platforms` | 获取所有平台列表 | [references/org/platforms.md](references/org/platforms.md) |
| `mbs org sites` | 获取平台下的站点列表 | [references/org/sites.md](references/org/sites.md) |
| `mbs org leaders` | 获取总监列表 | [references/org/leaders.md](references/org/leaders.md) |
| `mbs org managers` | 获取经理列表 | [references/org/managers.md](references/org/managers.md) |
| `mbs org little-leaders` | 获取主管列表 | [references/org/little-leaders.md](references/org/little-leaders.md) |
| `mbs org shop-managers` | 获取店长列表 | [references/org/shop-managers.md](references/org/shop-managers.md) |
| `mbs org shops` | 获取店铺列表 | [references/org/shops.md](references/org/shops.md) |
| `mbs org employees` | 获取员工/团队编号列表 | [references/org/employees.md](references/org/employees.md) |

### 层级结构

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

### 上下文传递

| 命令 | 提取字段 | 传入下一步 |
|------|---------|-----------|
| `org platforms` | `data[].id` → platformId | `--platform` |
| `org leaders` | `data[].id` → leaderId | `--leaders` |
| `org managers` | `data[].id` → managerId | `--managers` |
| `org little-leaders` | `data[].id` → littleLeaderId | `--littleLeaders` |
| `org shop-managers` | `data[].id` → shopManagerId | `--shopManagers` |
| `org shops` | `data[].id` → shopId | 其他 skill 按店铺过滤 |
| `org employees` | `data[].id` → employeeId | 其他 skill 按员工过滤 |

### 意图匹配

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

### 典型场景

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

### 注意事项

- 公司 ID：`1`=胤元，`33`=启元，多数查询需先确认公司
- 多个 ID 统一用逗号分隔，例如 `--leaders L001,L002`
- 退出码 `2` = 认证失败，执行 `mbs login`

---

## 详细参考（按需读取）

- [references/org/platforms.md](references/org/platforms.md)
- [references/org/sites.md](references/org/sites.md)
- [references/org/leaders.md](references/org/leaders.md)
- [references/org/managers.md](references/org/managers.md)
- [references/org/little-leaders.md](references/org/little-leaders.md)
- [references/org/shop-managers.md](references/org/shop-managers.md)
- [references/org/shops.md](references/org/shops.md)
- [references/org/employees.md](references/org/employees.md)
