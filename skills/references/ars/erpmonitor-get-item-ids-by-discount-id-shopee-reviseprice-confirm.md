# mbs ars erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm

根据折扣活动ID查询商品ItemID：Shopee提价确认弹窗中，选择店铺并选择该店铺的折扣活动后，根据折扣活动ID(discountId)与店铺名查询该活动下的商品ItemID集合，返回后直接回填到"Item ID"文本域(#itemID)供生成提价商品信息使用。

## 用法

```bash
mbs ars erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm --discountIds <string> --shopName <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getItemIdsByDiscountId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `discountIds` | discountIds | body | string | 是 | - | 折扣活动ID。取自店铺活动下拉 .activities-select 的选中值(select2 val)，其值为 getDiscountInfoByShop 返回的 discountId；单选控件故通常为单个 discountId(字段名为复数，如后端支持多个以逗号拼接则为多值，待人工确认) |
| `shopName` | shopName | body | string | 是 | - | 店铺名称。取自店铺搜索多选下拉 .shop-select 选中值 $('.shop-select').select2('val').join()，多个店铺名以英文逗号拼接 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功，其余为失败 | - |
| `obj` | string | 商品ItemID集合。成功时直接作为 #itemID 文本域的值回填展示，多个ItemID以字符串形式返回(通常英文逗号拼接，待人工确认是否为数组) | - |
| `desc` | string | 响应提示信息，code!=200 时通过 alert(desc) 展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
