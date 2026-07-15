# mbs pim erp-product-list-publish-shop-product-publish

查询未刊登过的eBay店铺列表：eBay批量刊登页面初始化时调用，获取当前用户可用于刊登的eBay店铺列表，返回店铺ID、店铺名称及大额/小额Paypal账号，用于渲染选择未刊登过店铺下拉框与请选择您要刊登店铺下拉框。

## 用法

```bash
mbs pim erp-product-list-publish-shop-product-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productPublish/listPublishShop`
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
| `obj[]` | array | 可刊登eBay店铺列表 | - |
| `obj[][0]` | string | eBay店铺ID(下拉option值前半段,与店铺名以逗号拼接 ebayShopId,ebayShopName) | - |
| `obj[][1]` | string | eBay店铺名称(下拉展示文本及value) | - |
| `obj[][2]` | string | 大额Paypal收款账号(邮箱) | - |
| `obj[][3]` | string | 小额Paypal收款账号(邮箱) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
