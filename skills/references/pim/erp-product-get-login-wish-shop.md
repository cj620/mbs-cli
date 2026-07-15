# mbs pim erp-product-get-login-wish-shop

获取当前登录用户Wish店铺列表：wish低分评价页面初始化时调用，根据当前登录用户身份返回其可见/管理的Wish店铺列表，用于填充页面顶部「店铺」筛选下拉框(#commodity)。请求不携带任何业务参数，店铺范围由后端依据登录态自动判定。

## 用法

```bash
mbs pim erp-product-get-login-wish-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/wishRating/getLoginWishShop`
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
| `obj[]` | array | 当前登录用户可见的Wish店铺列表(模板 {{each obj}} 遍历渲染下拉项) | - |
| `obj[][0]` | string | 店铺ID(渲染为 <option value>,作为后续 getWishRatingInfo 的 shopIdList 取值) | - |
| `obj[][1]` | string | 店铺名称(渲染为 <option> 显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
