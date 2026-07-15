<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm

按店铺查询TikTok折扣活动信息：TikTok改价确认(提价)弹窗中，当仅选择1个店铺时，按店铺名查询该店铺下的TikTok折扣活动列表，用于渲染“店铺活动”下拉框：每项以 discountId 为值、discountName 为展示文本。

## 用法

```bash
mbs ars erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm --shopName <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getDiscountInfoByShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称(URL查询参数)，取自 selectShopName.value 单个店铺名(shops.join())，业务约束店铺数=1，来源控件为Vue店铺多选组件 #shopSelect |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端 code==200 判断，非200则reject) | - |
| `obj[]` | array | 折扣活动列表(该店铺下的TikTok折扣活动数组) | - |
| `obj[][0]` | string | 折扣活动ID(作为下拉项的值 id，选中后用于 getItemIdsByDiscountId 查询 Item ID) | - |
| `obj[][1]` | string | 折扣活动名称(作为下拉项的展示文本 text) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
