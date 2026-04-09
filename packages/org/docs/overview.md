# skill-org — 组织架构命令参考

## 命令总览

### platforms（平台列表）

#### 获取所有平台
```
Usage:
  mbs org platforms
Example:
  mbs org platforms
```

### sites（站点列表）

#### 按平台获取站点
```
Usage:
  mbs org sites [flags]
Example:
  mbs org sites --platform 101
  mbs org sites --platform 101,102
Flags:
  --platform string   平台 ID，多个逗号分隔
```

### leaders（总监下拉）

#### 获取总监列表
```
Usage:
  mbs org leaders [flags]
Example:
  mbs org leaders --company 1 --platform 101
Flags:
  --company string    公司 ID（1=胤元, 33=启元）
  --platform string   平台 ID
  --type string       员工类型：1=运营，2=开发
  --keyword string    搜索关键词
```

### managers（经理下拉）

#### 获取经理列表
```
Usage:
  mbs org managers [flags]
Example:
  mbs org managers --company 1 --platform 101 --leaders L001,L002
Flags:
  --company string    公司 ID
  --platform string   平台 ID
  --leaders string    总监 ID，多个逗号分隔
  --type string       员工类型：1=运营，2=开发
  --keyword string    搜索关键词
```

### little-leaders（主管下拉）

#### 获取主管列表
```
Usage:
  mbs org little-leaders [flags]
Example:
  mbs org little-leaders --company 1 --platform 101 --leaders L001 --managers M001
Flags:
  --company string    公司 ID
  --platform string   平台 ID
  --leaders string    总监 ID，逗号分隔
  --managers string   经理 ID，逗号分隔
  --type string       员工类型：1=运营，2=开发
  --keyword string    搜索关键词
```

### shop-managers（店长下拉）

#### 获取店长列表
```
Usage:
  mbs org shop-managers [flags]
Example:
  mbs org shop-managers --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001
Flags:
  --company string        公司 ID
  --platform string       平台 ID
  --leaders string        总监 ID，逗号分隔
  --managers string       经理 ID，逗号分隔
  --littleLeaders string  主管 ID，逗号分隔
  --type string           员工类型：1=运营，2=开发
  --keyword string        搜索关键词
```

### shops（店铺下拉）

#### 获取店铺列表
```
Usage:
  mbs org shops [flags]
Example:
  mbs org shops --company 1
  mbs org shops --company 1 --platform 101 --status 1
Flags:
  --company string        公司 ID
  --platform string       平台 ID，逗号分隔
  --leaders string        总监 ID，逗号分隔
  --managers string       经理 ID，逗号分隔
  --littleLeaders string  主管 ID，逗号分隔
  --shopManagers string   店长 ID，逗号分隔
  --keyword string        店铺名称关键词
  --status string         运营状态：1=运营中
  --rank string           店铺等级
  --page integer          页码，默认 1
```

### employees（员工/团队编号下拉）

#### 获取员工列表
```
Usage:
  mbs org employees [flags]
Example:
  mbs org employees --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001 --shopManagers SM001
Flags:
  --company string        公司 ID
  --platform string       平台 ID
  --leaders string        总监 ID，逗号分隔
  --managers string       经理 ID，逗号分隔
  --littleLeaders string  主管 ID，逗号分隔
  --shopManagers string   店长 ID，逗号分隔
  --type string           员工类型：1=运营，2=开发
  --keyword string        搜索关键词
```

---

## 意图判断

用户说"有哪些平台" → `org platforms`
用户说"平台下有哪些站点" → `org sites`（需 platformId）
用户说"有哪些总监/找总监" → `org leaders`（需 company + platform）
用户说"有哪些经理" → `org managers`（需 + leaders）
用户说"有哪些主管" → `org little-leaders`（需 + managers）
用户说"有哪些店长" → `org shop-managers`（需 + littleLeaders）
用户说"有哪些店铺/所有店" → `org shops`（company 即可，其余可选过滤）
用户说"有哪些员工/团队编号" → `org employees`（需完整链路）

---

## 核心工作流

### 场景一：从零获取某平台下的所有运营中店铺

```bash
# 1. 获取平台列表，找到目标平台 ID
mbs org platforms

# 2. 获取该平台下运营中的店铺
mbs org shops --company 1 --platform <platformId> --status 1

# 3. 提取店铺 ID 列表
mbs org shops --company 1 --platform <platformId> --status 1 | jq '[.data[].id]'
```

### 场景二：按组织层级逐层下钻

```bash
# 1. 获取平台列表
mbs org platforms

# 2. 获取总监列表（提取 leaderId）
mbs org leaders --company 1 --platform <platformId>

# 3. 获取经理列表（提取 managerId）
mbs org managers --company 1 --platform <platformId> --leaders <leaderId>

# 4. 获取主管列表（提取 littleLeaderId）
mbs org little-leaders --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId>

# 5. 获取店长列表（提取 shopManagerId）
mbs org shop-managers --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId>

# 6. 获取员工列表
mbs org employees --company 1 --platform <platformId> --leaders <leaderId> --managers <managerId> --littleLeaders <littleLeaderId> --shopManagers <shopManagerId>
```

---

## 上下文传递表

| 命令 | 提取字段 | 用于下一步 |
|------|---------|-----------|
| `org platforms` | `data[].id` → platformId | `org sites`、`org leaders`、`org shops` 的 `--platform` |
| `org leaders` | `data[].id` → leaderId | `org managers`、`org little-leaders`、`org shop-managers`、`org employees` 的 `--leaders` |
| `org managers` | `data[].id` → managerId | `org little-leaders`、`org shop-managers`、`org employees` 的 `--managers` |
| `org little-leaders` | `data[].id` → littleLeaderId | `org shop-managers`、`org employees` 的 `--littleLeaders` |
| `org shop-managers` | `data[].id` → shopManagerId | `org shops`、`org employees` 的 `--shopManagers` |
| `org shops` | `data[].id` → shopId | 其他 skill（如 orders、finance）中按店铺过滤 |
| `org employees` | `data[].id` → employeeId | 其他 skill 中按员工/团队过滤 |

---

## 注意事项

- 公司 ID：`1`=胤元，`33`=启元，多数查询都需要先确认公司
- 组织层级**从上到下单向依赖**，不可跳层（例如不能跳过 leaders 直接查 managers）
- `org shops` 是例外：只需 `--company`，其他层级参数均为可选过滤条件
- 多个 ID 传参统一用逗号分隔，例如 `--leaders L001,L002`
- 所有命令均输出 `{ "ok": true, "data": [...] }`，失败时 `ok: false` 并附 `error.hint` 恢复提示
- 退出码 `2` = 认证失败，执行 `mbs login` 重新登录
