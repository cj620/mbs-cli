# mbs ars erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm

按店铺获取折扣活动信息：Shopee 提价（改价）确认页“生成提价商品信息”弹窗中，选定单个店铺后，根据店铺名查询该店铺已同步的折扣活动列表，用于填充“店铺活动”下拉框（select2），下拉项 value=discountId、显示文本=discountName。

## 用法

```bash
mbs ars erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm --shopName <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getDiscountInfoByShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名（URL Query 参数）。取自 .shop-select 店铺下拉选中值 select2('val') 数组 join() 逗号拼接；本接口触发时仅选中单个店铺，故实为单个店铺名。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（code == 200 才 resolve） | - |
| `obj[]` | array | 店铺折扣活动列表 | - |
| `obj[][0]` | string | 折扣活动ID（作为下拉项 value：item.discountId） | - |
| `obj[][1]` | string | 折扣活动名称（作为下拉项显示文本：item.discountName） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
