<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-un-publish-shop

未刊登过店铺列表查询：查询当前用户在 Lazada 刊登场景下尚未刊登过的店铺列表，用于「等待刊登」筛选区「选择未刊登过店铺」下拉框(#shopName)的选项渲染。页面加载时自动调用，无请求参数；返回店铺ID与店铺名称列表。

## 用法

```bash
mbs pim erp-product-list-un-publish-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listUnPublishShop`
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
| `code` | number | 响应状态码,200=成功(统一响应外层) | - |
| `desc` | string | 响应提示信息(统一响应外层) | - |
| `obj[]` | array | 未刊登过的店铺列表(前端赋给 list 渲染下拉) | - |
| `obj[][0]` | string | 店铺ID(作为 option value 前半段，逗号拼接 ebayShopName) | - |
| `obj[][1]` | string | 店铺名称(option 显示文本及 value 后半段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
