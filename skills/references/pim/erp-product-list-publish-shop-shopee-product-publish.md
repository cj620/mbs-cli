# mbs pim erp-product-list-publish-shop-shopee-product-publish

未刊登店铺列表查询：查询当前用户可用于 Shopee 商品刊登的“未刊登店铺”列表，用于填充刊登页面 #shopName（未刊登店铺）下拉框及批量刊登店铺选择器。无请求参数，返回店铺名称集合。

## 用法

```bash
mbs pim erp-product-list-publish-shop-shopee-product-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/listPublishShop`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 未刊登店铺列表(data.obj,逐项渲染下拉选项) | - |
| `obj[]` | string | 店铺名称(Shopee店铺名;作为下拉option的value与label,#shopName/#selectShop选中值即此名称) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
