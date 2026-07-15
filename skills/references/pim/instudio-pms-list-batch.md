<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-list-batch

批次确认列表：批次确认列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-list-batch [--shopName <string>] [--spu <string>] [--status <integer>] [--site <string>] [--highRefund <integer>] [--bindProduct <integer>] [--pageNo <integer>] [--pageSize <integer>] [--startIndex <integer>] [--shopNames <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/batch/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `status` | status | body | integer | 否 | - | 状态（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `highRefund` | highRefund | body | integer | 否 | - | 1 需要查询退款率高的 |
| `bindProduct` | bindProduct | body | integer | 否 | - | 1 需要查询捆绑的 |
| `pageNo` | pageNo | body | integer | 否 | - | 页码编号（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `shopNames` | shopNames | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
