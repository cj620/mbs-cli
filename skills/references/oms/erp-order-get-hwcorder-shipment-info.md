<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-hwcorder-shipment-info

订单货件(海外仓发货)信息查询：订单详情页加载时按订单号查询该订单的海外仓货件/发货信息(货件店铺、货件编号、发货实重、真实运费、仓库类型)，渲染到货件信息区并回填仓库类型，随后联动加载SKU标签/装箱单标签。

## 用法

```bash
mbs oms erp-order-get-hwcorder-shipment-info --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getHwcorderShipmentInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单号(订单唯一标识)，来源于页面URL查询参数，经GetQueryString('orderid')取得后拼接到接口URL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 货件(海外仓发货)信息对象 | - |
| `obj.shopname` | string | 货件店铺 | - |
| `obj.weight` | number | 发货实重，单位KG | - |
| `obj.shipmentnum` | string | 货件编号 | - |
| `obj.freight` | number | 真实运费 | - |
| `obj.hwcwarehousename` | string | 仓库类型(海外仓名称)。枚举：万邑通海外仓/八方邮海外仓-李亮亮/八方邮海外仓-金蓉蓉/FBA海外仓/谷仓海外仓/虾皮海外仓 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
