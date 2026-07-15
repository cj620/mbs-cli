<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-list-certification

查询商品资质列表：查询商品资质列表

## 用法

```bash
mbs pim instudio-pms-list-certification [--idList <array<integer>>] [--page <integer>] [--pageSize <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/certification/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `idList` | idList | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].name` | string | 名称（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].content` | string | 内容（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createdBy` | string | 创建人（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopname` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
