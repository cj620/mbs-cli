<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-have-published-shop-shopee-product-publish

查询已刊登店铺列表：切换到“刊登完毕”视图时调用，获取当前已经刊登过商品的 Shopee 店铺集合，用于渲染页面“选择新刊登店铺”下拉框(#PublishedShop)。请求不携带任何参数(空请求体)，仅返回店铺名称列表。

## 用法

```bash
mbs pim erp-product-list-have-published-shop-shopee-product-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/listHavePublishedShop`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 已刊登店铺列表 | - |
| `obj[]` | string | 店铺名称(Shopee已刊登店铺名)，同时作为下拉 option 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
