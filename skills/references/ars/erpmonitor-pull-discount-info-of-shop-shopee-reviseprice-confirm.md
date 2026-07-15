<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm

拉取（同步）店铺折扣信息：Shopee 提价确认页，按所选店铺名称从平台侧拉取/同步该店铺最新的折扣活动信息。仅以查询参数 shopName 传入店铺名（多个以逗号拼接），无请求体；返回操作结果状态与提示文案。

## 用法

```bash
mbs ars erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm --shopName <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/pullDiscountInfoOfShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称（Query 参数）。多个店铺以英文逗号拼接。来源控件：#checkShop / #selectShop / .shop-select 多选下拉。为空时前端拦截提示“请先选择店铺” |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `success` | boolean | 操作是否成功 | - |
| `desc` | string | 结果提示文案，前端弹窗展示 | - |
| `obj` | object | 业务数据对象，被解构但本接口调用未使用其内部字段（内部结构待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
