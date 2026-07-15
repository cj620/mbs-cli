# mbs pim instudio-pms-get-pricing-channel-walmart

获取算价可用渠道：获取算价可用渠道

## 用法

```bash
mbs pim instudio-pms-get-pricing-channel-walmart
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/walmart/getPricingChannel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profit` | string | 利润（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.price` | string | 价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fieldName` | string | 字段名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sonProperties` | string | SON属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.prop` | string | PROP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj._key` | string | 键（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nowValues` | string | NOW值列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productName` | string | 商品名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.validate` | string | 校验（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.forbidWord` | string | Forbid词（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.msgData` | string | 消息数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.field` | string | 字段（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
