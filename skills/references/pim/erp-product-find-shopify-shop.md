# mbs pim erp-product-find-shopify-shop

查询Shopify店铺列表：查询当前用户可见的全部 Shopify 店铺名称列表，用于「shopify批量下架」页面顶部店铺多选下拉框(#shopName)的数据填充。页面加载时自动调用，无任何入参；返回店铺名称字符串数组，前端用 art-template 渲染成 <option>。

## 用法

```bash
mbs pim erp-product-find-shopify-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopifyProductController/findShopifyShop`
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
| `code` | number | 响应状态码,200=成功(平台统一响应字段,本接口回调未显式判断) | - |
| `desc` | string | 响应提示信息(平台统一响应字段) | - |
| `obj[]` | array | 业务数据：Shopify 店铺名称列表(字符串数组) | - |
| `obj[]` | string | 店铺名称,前端作为下拉框 <option> 的 value 与显示文本({{each obj v i}} 中的 v) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
