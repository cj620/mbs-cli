# org leaders

**命令：** `mbs org leaders [flags]`  
**说明：** 获取总监（大组长）列表，支持按公司、平台、类型过滤

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID |
| `--type` | string | 否 | 员工类型：`1`=运营，`2`=开发 |
| `--keyword` | string | 否 | 搜索关键词 |

## 用法

```bash
mbs org leaders --company 1 --platform 101
mbs org leaders --company 1 --type 1
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "L001", "name": "张总监" },
    { "id": "L002", "name": "李总监" }
  ]
}
```

## 典型用法

```bash
# 获取胤元公司某平台的总监
mbs org leaders --company 1 --platform 101

# 提取总监 ID 列表
mbs org leaders --company 1 --platform 101 | jq '[.data[].id]'

# 按关键词搜索总监
mbs org leaders --company 1 --keyword 张
```

## 上下文传递

`data[].id` → `leaderId`，用于：
- `mbs org managers --leaders <leaderId>`
- `mbs org little-leaders --leaders <leaderId>`
- `mbs org shop-managers --leaders <leaderId>`
- `mbs org employees --leaders <leaderId>`
