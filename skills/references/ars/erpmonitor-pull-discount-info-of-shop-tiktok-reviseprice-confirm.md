<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm

同步/拉取店铺最新折扣活动信息：TikTok 商品提价页面触发：按传入的店铺名称（可多个，逗号拼接）从平台拉取/同步该店铺的最新折扣活动信息，返回操作结果提示。用于「同步最新折扣活动」按钮、「拉取折扣信息」按钮及多店铺活动刷新（refershActivities）。

## 用法

```bash
mbs ars erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm --shopName <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/pullDiscountInfoOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称（Query 查询参数）。可为单个店铺名，或多个店铺名以英文逗号拼接。来源控件：#selectShop / #checkShop / Vue selectShopName（多店铺 join 逗号拼接）。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `success` | boolean | 操作是否成功 | - |
| `desc` | string | 结果提示信息（前端通过 alert 或 #tishi 弹窗展示） | - |
| `obj` | object | 业务数据对象（前端解构但未使用，内部结构待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
