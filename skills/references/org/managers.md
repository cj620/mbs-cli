# org managers

**命令：** `mbs org managers [flags]`  
**说明：** 获取经理列表，通常在总监下查询

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID |
| `--leaders` | string | 否 | 总监 ID，多个逗号分隔 |
| `--type` | string | 否 | 员工类型：`1`=运营，`2`=开发 |
| `--keyword` | string | 否 | 搜索关键词 |

## 用法

```bash
mbs org managers --company 1 --platform 101 --leaders L001,L002
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "M001", "name": "王经理" },
    { "id": "M002", "name": "赵经理" }
  ]
}
```

## 典型用法

```bash
# 获取指定总监下的经理
mbs org managers --company 1 --platform 101 --leaders L001

# 多个总监
mbs org managers --company 1 --leaders L001,L002

# 提取经理 ID 列表
mbs org managers --company 1 --leaders L001 | jq '[.data[].id]'
```

## 前置步骤

`leaderId` 来自 `mbs org leaders`

## 上下文传递

`data[].id` → `managerId`，用于：
- `mbs org little-leaders --managers <managerId>`
- `mbs org shop-managers --managers <managerId>`
- `mbs org employees --managers <managerId>`
