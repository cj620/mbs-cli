<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm

根据折扣活动ID查询ItemId：TikTok提价：在“生成提价商品信息”弹窗中选中单个店铺后，选择该店铺的折扣活动(select2)，根据折扣活动ID查询该活动下的商品 Item ID 列表，前端将结果回填到 itemId 文本域，供后续批量提价使用。

## 用法

```bash
mbs ars erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm --discountIds <string> [--shopName <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getItemIdsByDiscountId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `discountIds` | discountIds | body | string | 是 | - | 折扣活动ID。取值 $('.activities-select').select2('val')，下拉数据来源于 getDiscountInfoByShop 返回的 discountId(text=discountName)；字段名复数但实际为选中的单个折扣活动ID。 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，多个以英文逗号拼接。取值 selectShopName.value.join()；活动区仅在选中单个店铺时显示，通常为单个店铺名。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时前端 alert(desc) 并 reject。 | - |
| `obj` | string | 折扣活动下商品的 Item ID 列表(多个以英文逗号分隔的字符串)，前端 resolve(obj) 后 $('#itemID').val(result) 回填到 itemId 文本域。 | - |
| `desc` | string | 响应提示信息，失败时通过 alert(desc) 展示。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
