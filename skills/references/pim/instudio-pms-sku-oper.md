# mbs pim instudio-pms-sku-oper

开发中台的列表数据：开发中台的列表数据

## 用法

```bash
mbs pim instudio-pms-sku-oper
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/skuManager/get/{times}/{position}/{skuOper}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | path | string | 是 | - | 次数（字段名推断,语义待核实） |
| `position` | position | path | integer | 是 | - | 位置（字段名推断,语义待核实） |
| `skuOper` | skuOper | path | string | 是 | - | SKU操作（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.isDanger` | string | 是否Danger（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.show` | string | 展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
