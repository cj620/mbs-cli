# mbs pim instudio-pms-type-get-sale-export-list

查询销售导出列表：查询销售导出列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-type-get-sale-export-list
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/saleExportTemp/getSaleExportList/{type}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | path | integer | 是 | - | 类型（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj[].id` | string | ID（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].templateName` | string | 模板名称。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].content` | string | 导出的字段列。前端使用：否 | - |
| `obj.obj[].status` | integer | 状态（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].creator` | string | 创建人。前端使用：否 | - |
| `obj.obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].type` | integer | 类型（字段名推断,语义待核实）。前端使用：是（取值，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.params` | string | 参数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.flat` | string | FLAT（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
