# skill-org — 组织架构查询

## 用途

查询公司内部电商管理系统的组织架构数据，包括平台、站点、总监、经理、主管、店长、店铺、员工。

所有命令输出 JSON，适合 AI Agent 直接解析。

---

## 前置条件

- 已运行 `mbs login` 完成认证
- 已运行 `mbs config init` 配置 API 地址

---

## 公司 ID 对照表

| company | 公司名称 |
|---------|---------|
| `1`     | 胤元    |
| `33`    | 启元    |

---

## 组织层级与调用顺序

组织架构为级联结构，**下级接口依赖上级接口的返回 ID**。

```
platforms（平台）
  └── sites（站点）          ← 需要 platform ID
  └── leaders（总监）        ← 需要 company + platform
        └── managers（经理） ← 需要 + leaders
              └── little-leaders（主管） ← 需要 + managers
                    └── shop-managers（店长） ← 需要 + littleLeaders
                          └── shops（店铺）   ← 需要 company（其余可选）
                          └── employees（员工）← 需要全链路
```

**Agent 典型工作流：**
1. 先调 `org platforms` 获取平台 ID
2. 用平台 ID 调 `org leaders`
3. 逐层向下，直到获取所需层级的 ID

---

## 命令列表

### `mbs org platforms`

获取所有平台列表。**无需任何参数，通常作为查询入口。**

```bash
mbs org platforms
```

返回示例：
```json
{
  "ok": true,
  "data": [
    { "id": "101", "name": "速卖通" },
    { "id": "102", "name": "亚马逊" }
  ]
}
```

---

### `mbs org sites`

获取指定平台下的站点列表。

```bash
mbs org sites --platform <platformId[,platformId]>
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--platform` | ❌ | 平台 ID，多个用逗号分隔 |

```bash
# 示例
mbs org sites --platform 101
mbs org sites --platform 101,102
```

---

### `mbs org leaders`

获取总监列表（总监下拉）。

```bash
mbs org leaders --company <id> --platform <id> [--type <1|2>] [--keyword <str>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID（1=胤元, 33=启元）|
| `--platform` | ❌ | 平台 ID |
| `--type` | ❌ | 员工类型：1=运营，2=开发 |
| `--keyword` | ❌ | 搜索关键词 |

```bash
mbs org leaders --company 1 --platform 101
mbs org leaders --company 1 --platform 101 --type 1
```

---

### `mbs org managers`

获取经理列表（经理下拉）。**需要先通过 `leaders` 获取总监 ID。**

```bash
mbs org managers --company <id> --platform <id> --leaders <id[,id]> [--type <1|2>] [--keyword <str>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID |
| `--platform` | ❌ | 平台 ID |
| `--leaders` | ❌ | 总监 ID，多个用逗号分隔 |
| `--type` | ❌ | 员工类型 |
| `--keyword` | ❌ | 搜索关键词 |

```bash
mbs org managers --company 1 --platform 101 --leaders L001,L002
```

---

### `mbs org little-leaders`

获取主管列表（主管下拉）。**需要总监 ID + 经理 ID。**

```bash
mbs org little-leaders --company <id> --platform <id> --leaders <id[,id]> --managers <id[,id]> [--type <1|2>] [--keyword <str>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID |
| `--platform` | ❌ | 平台 ID |
| `--leaders` | ❌ | 总监 ID，逗号分隔 |
| `--managers` | ❌ | 经理 ID，逗号分隔 |
| `--type` | ❌ | 员工类型 |
| `--keyword` | ❌ | 搜索关键词 |

```bash
mbs org little-leaders --company 1 --platform 101 --leaders L001 --managers M001
```

---

### `mbs org shop-managers`

获取店长列表（店长下拉）。**需要总监 + 经理 + 主管 ID。**

```bash
mbs org shop-managers --company <id> --platform <id> --leaders <id[,id]> --managers <id[,id]> --littleLeaders <id[,id]> [--type <1|2>] [--keyword <str>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID |
| `--platform` | ❌ | 平台 ID |
| `--leaders` | ❌ | 总监 ID，逗号分隔 |
| `--managers` | ❌ | 经理 ID，逗号分隔 |
| `--littleLeaders` | ❌ | 主管 ID，逗号分隔 |
| `--type` | ❌ | 员工类型 |
| `--keyword` | ❌ | 搜索关键词 |

```bash
mbs org shop-managers --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001
```

---

### `mbs org shops`

获取店铺列表（店铺下拉）。**company 必填，其余参数可选用于过滤。**

```bash
mbs org shops --company <id> [--platform <id[,id]>] [--leaders <id[,id]>] [--managers <id[,id]>] [--littleLeaders <id[,id]>] [--shopManagers <id[,id]>] [--keyword <str>] [--status <1>] [--rank <str>] [--page <n>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID |
| `--platform` | ❌ | 平台 ID，逗号分隔 |
| `--leaders` | ❌ | 总监 ID，逗号分隔 |
| `--managers` | ❌ | 经理 ID，逗号分隔 |
| `--littleLeaders` | ❌ | 主管 ID，逗号分隔 |
| `--shopManagers` | ❌ | 店长 ID，逗号分隔 |
| `--keyword` | ❌ | 店铺名称关键词 |
| `--status` | ❌ | 运营状态：`1`=运营中 |
| `--rank` | ❌ | 店铺等级 |
| `--page` | ❌ | 页码，默认 1 |

```bash
# 获取胤元公司所有店铺
mbs org shops --company 1

# 获取运营中的店铺，按平台过滤
mbs org shops --company 1 --platform 101 --status 1

# 配合 jq 提取店铺 ID 列表
mbs org shops --company 1 | jq '[.data[].id]'
```

---

### `mbs org employees`

获取员工/团队编号列表（员工下拉）。**需要完整的组织链路 ID。**

```bash
mbs org employees --company <id> --platform <id> --leaders <id[,id]> --managers <id[,id]> --littleLeaders <id[,id]> --shopManagers <id[,id]> [--type <1|2>] [--keyword <str>]
```

| 参数 | 必填 | 说明 |
|------|------|------|
| `--company` | ❌ | 公司 ID |
| `--platform` | ❌ | 平台 ID |
| `--leaders` | ❌ | 总监 ID，逗号分隔 |
| `--managers` | ❌ | 经理 ID，逗号分隔 |
| `--littleLeaders` | ❌ | 主管 ID，逗号分隔 |
| `--shopManagers` | ❌ | 店长 ID，逗号分隔 |
| `--type` | ❌ | 员工类型：1=运营，2=开发 |
| `--keyword` | ❌ | 搜索关键词 |

```bash
mbs org employees --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001 --shopManagers SM001
```

---

## Agent 使用示例

### 场景：查询胤元公司速卖通平台的所有店铺

```bash
# Step 1: 获取平台列表，找到速卖通的 ID
PLATFORMS=$(mbs org platforms)
PLATFORM_ID=$(echo $PLATFORMS | jq -r '.data[] | select(.name=="速卖通") | .id')

# Step 2: 获取该平台下的总监
LEADERS=$(mbs org leaders --company 1 --platform $PLATFORM_ID)
LEADER_IDS=$(echo $LEADERS | jq -r '[.data[].id] | join(",")')

# Step 3: 获取店铺
mbs org shops --company 1 --platform $PLATFORM_ID --leaders $LEADER_IDS
```

### 场景：获取所有运营中的店铺 ID

```bash
mbs org shops --company 1 --status 1 | jq '[.data[].id]'
```

---

## 输出格式

所有命令统一输出：

```json
{ "ok": true, "data": [...] }
```

错误时：

```json
{
  "ok": false,
  "error": {
    "type": "auth|validation|api",
    "message": "错误描述",
    "hint": "恢复建议，如：运行 mbs login 重新认证"
  }
}
```

**退出码：**
- `0` — 成功
- `1` — API / 参数错误
- `2` — 认证失败（需重新运行 `mbs login`）
