<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-list-publish-shop-product-publish

未刊登店铺列表查询：获取当前用户尚未刊登过的 eBay 店铺列表，用于 eBay 批量刊登页的目标店铺下拉框(#pubshop)与未刊登店铺筛选下拉框(#shopName)渲染。前端不传任何业务参数，直接 POST 调用。

## 用法

```bash
mbs prm erp-publish-list-publish-shop-product-publish
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/productPublish/listPublishShop`
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
| `obj[]` | array | 未刊登店铺列表 | - |
| `obj[][0]` | string | eBay店铺名称(下拉option的value与显示文本) | - |
| `obj[][1]` | string | 大额Paypal账号(shopTemplate展示Paypal账号) | - |
| `obj[][2]` | string | 小额Paypal账号(shopTemplate展示,紧随大额账号) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
