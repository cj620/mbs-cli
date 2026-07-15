# mbs pim instudio-pms-get1688-product-attr

通过SPU找：通过SPU找

## 用法

```bash
mbs pim instudio-pms-get1688-product-attr --productId <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productApi/get1688ProductAttr`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | query | string | 是 | - | 商品ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj.productInfo` | object | 商品信息（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
