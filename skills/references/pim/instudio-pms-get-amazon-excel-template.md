<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-amazon-excel-template

查询已经上传的刊登模板信息：查询已经上传的刊登模板信息

## 用法

```bash
mbs pim instudio-pms-get-amazon-excel-template
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/getAmazonExcelTemplate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.excelUrl` | string | ExcelURL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.mainCategory` | string | 主类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createOper` | string | 创建操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createTime` | string | 创建时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（列表行字段，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
