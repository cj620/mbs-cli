# org shops

**命令：** `mbs org shops [flags]`  
**说明：** 获取店铺列表。只需 `--company` 即可查询，其余参数均为可选过滤条件

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID，逗号分隔 |
| `--leaders` | string | 否 | 总监 ID，逗号分隔 |
| `--managers` | string | 否 | 经理 ID，逗号分隔 |
| `--littleLeaders` | string | 否 | 主管 ID，逗号分隔 |
| `--shopManagers` | string | 否 | 店长 ID，逗号分隔 |
| `--keyword` | string | 否 | 店铺名称关键词 |
| `--status` | string | 否 | 运营状态：`1`=运营中 |
| `--rank` | string | 否 | 店铺等级 |
| `--page` | integer | 否 | 页码，默认 `1` |

## 用法

```bash
mbs org shops --company 1
mbs org shops --company 1 --platform 101 --status 1
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "SH001", "name": "旗舰店A", "status": 1 },
    { "id": "SH002", "name": "旗舰店B", "status": 1 }
  ]
}
```

## 典型用法

```bash
# 查询公司所有店铺
mbs org shops --company 1

# 查询运营中的店铺
mbs org shops --company 1 --status 1

# 查询指定平台的运营店铺
mbs org shops --company 1 --platform 101 --status 1

# 提取店铺 ID 列表
mbs org shops --company 1 --status 1 | jq '[.data[].id]'

# 按名称搜索
mbs org shops --company 1 --keyword 旗舰
```

## 注意

`org shops` 不强制要求完整层级链路，与其他命令不同，只需 `--company` 即可使用。

## 上下文传递

`data[].id` → `shopId`，供其他 skill（orders、finance 等）按店铺过滤使用
