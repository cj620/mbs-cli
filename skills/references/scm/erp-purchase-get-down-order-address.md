<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-get-down-order-address

采购下单-获取下单收货地址列表：采购下单/自动下单弹窗中，依据当前勾选的子SKU列表与所属仓库(storageId)，向后端查询可下单的收货地址集合，返回地址字符串数组，前端渲染为地址下拉框(#address2/#genaddress)的option选项，默认选中第一项。

## 用法

```bash
mbs scm erp-purchase-get-down-order-address --storageId <string> --skuList <array<string>>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDownOrder/getDownOrderAddress`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `storageId` | storageId | body | string | 是 | - | 仓库(库存)ID，URL查询参数，来源行数据 obj.storageId；用于限定该仓库下可选下单收货地址 |
| `skuList` | skuList | body | array<string> | 是 | - | 请求体根：勾选的子SKU编号数组(JSON.stringify(params)，params=_getCheckedSkus(i)，取勾选复选框value) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时前端 alert(desc) 并返回 null | - |
| `desc` | string | 响应提示信息(失败时弹窗提示) | - |
| `obj[]` | array | 业务数据：可选下单收货地址列表(字符串数组)，前端作为地址下拉框数据源 | - |
| `obj[]` | string | 数组元素：单个收货(下单)地址文本，渲染为 option 的 value 与显示文本，首项默认 selected | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
