# mbs prm erp-publish-list-have-published-shop-product-publish

查询已刊登过的店铺列表：加载当前用户已刊登过的 eBay 店铺列表，用于批量刊登页面顶部「选择新刊登店铺」下拉框（#PublishedShop）的渲染。页面加载时调用一次，无任何请求参数；返回店铺名称数组，前端用 art-template 模板 PublishedShopTemplate 渲染为 option。

## 用法

```bash
mbs prm erp-publish-list-have-published-shop-product-publish
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/productPublish/listHavePublishedShop`
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
| `code` | number | 响应状态码，200=成功（前端常规约定，本回调未显式判断 code，直接读取 obj） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 已刊登过的店铺列表（赋值给模板变量 list） | - |
| `obj[]` | string | eBay 店铺名称（同时作为下拉 option 的 value 与显示文本；后续作为 targetShops/新刊登店铺筛选值使用） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
