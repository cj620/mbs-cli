# org little-leaders

**命令：** `mbs org little-leaders [flags]`  
**说明：** 获取主管（小组长）列表，通常在经理下查询

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID |
| `--leaders` | string | 否 | 总监 ID，逗号分隔 |
| `--managers` | string | 否 | 经理 ID，逗号分隔 |
| `--type` | string | 否 | 员工类型：`1`=运营，`2`=开发 |
| `--keyword` | string | 否 | 搜索关键词 |

## 用法

```bash
mbs org little-leaders --company 1 --platform 101 --leaders L001 --managers M001
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "LL001", "name": "陈主管" },
    { "id": "LL002", "name": "刘主管" }
  ]
}
```

## 典型用法

```bash
# 获取指定经理下的主管
mbs org little-leaders --company 1 --managers M001

# 提取主管 ID 列表
mbs org little-leaders --company 1 --managers M001 | jq '[.data[].id]'
```

## 前置步骤

已有 `leaderId` 或 `managerId` 时可直接传入；如果还不知道目标 ID，再分别通过 `mbs org leaders` 或 `mbs org managers` 查询。查询业务数据时不需要为了获取下级 ID 而继续下钻。

## 上下文传递

`data[].id` → `littleLeaderId`，用于：
- `mbs org shop-managers --littleLeaders <littleLeaderId>`
- `mbs org shops --littleLeaders <littleLeaderId>`
- `mbs org employees --littleLeaders <littleLeaderId>`
