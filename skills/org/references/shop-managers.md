# org shop-managers

**命令：** `mbs org shop-managers [flags]`  
**说明：** 获取店长列表，通常在主管下查询

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID |
| `--leaders` | string | 否 | 总监 ID，逗号分隔 |
| `--managers` | string | 否 | 经理 ID，逗号分隔 |
| `--littleLeaders` | string | 否 | 主管 ID，逗号分隔 |
| `--type` | string | 否 | 员工类型：`1`=运营，`2`=开发 |
| `--keyword` | string | 否 | 搜索关键词 |

## 用法

```bash
mbs org shop-managers --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "SM001", "name": "吴店长" },
    { "id": "SM002", "name": "郑店长" }
  ]
}
```

## 典型用法

```bash
# 获取指定主管下的店长
mbs org shop-managers --company 1 --littleLeaders LL001

# 提取店长 ID 列表
mbs org shop-managers --company 1 --littleLeaders LL001 | jq '[.data[].id]'
```

## 前置步骤

`littleLeaderId` 来自 `mbs org little-leaders`

## 上下文传递

`data[].id` → `shopManagerId`，用于：
- `mbs org shops --shopManagers <shopManagerId>`
- `mbs org employees --shopManagers <shopManagerId>`
