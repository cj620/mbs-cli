<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-sku-purchase-info

订单SKU采购信息查询：订单详情页订单状态条「采购中」图标鼠标移上(onmouseover)时触发，弹出「采购中」模态框，按订单ID查询该订单下各SKU的采购单信息(SKU、采购批次/组ID、备注、采购状态)，渲染到 skuInfosTemplate 列表。

## 用法

```bash
mbs oms erp-order-get-sku-purchase-info --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getSkuPurchaseInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | body | string | 是 | - | 订单ID，URL Query 参数，标识要查询采购信息的订单 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该订单下的SKU采购信息列表 | - |
| `obj[][0]` | string | SKU编号(渲染为指向 /product/SKUdetails.html?SKU= 的链接) | - |
| `obj[][1]` | string | 采购组/批次ID(渲染为指向 /eshop/purchase.do?method=findpurchaselists&groupid= 的采购单链接) | - |
| `obj[][2]` | string | 备注/预留字段1(采购备注信息) | - |
| `obj[][3]` | string | 采购状态(采购单当前状态文本,枚举取值待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
