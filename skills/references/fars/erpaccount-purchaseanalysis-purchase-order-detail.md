# mbs fars erpaccount-purchaseanalysis-purchase-order-detail

超4天采购单详情查询：Dashboard“超4天采购单详情”明细查询：按销量级别(类型名称)、产品状态、开发员三项过滤条件，返回符合条件的采购单明细行（采购批次、供应商、SKU、采购员、销量级别、产品状态、开发员、待发货量、库存量、在途量）。前端以 art-template 渲染为明细表。

## 用法

```bash
mbs fars erpaccount-purchaseanalysis-purchase-order-detail [--typename <string>] [--status <string>] [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/purchaseanalysisPurchaseOrderDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 否 | - | 销量级别/类型名称（按销量级别过滤）。来源：当前页面 URL 参数 typeName。query 键名为小写 typename。 |
| `status` | status | query | string | 否 | - | 产品状态（按产品状态过滤）。来源：当前页面 URL 参数 status。 |
| `oper3` | oper3 | query | string | 否 | - | 开发员（按开发员过滤）。来源：当前页面 URL 参数 oper3；为空或 'undefined' 时置为空串。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 采购单明细行数组（前端遍历 data.obj 渲染表格）。 | - |
| `obj[][0]` | string | 采购批次（采购分组ID），用于拼接采购单列表链接并展示。 | - |
| `obj[][1]` | string | 供应商（供应商名称/旺旺 uid）。 | - |
| `obj[][2]` | string | 供应商详情链接地址（供应商名称超链接 href）。 | - |
| `obj[][3]` | string | SKU 编号，渲染为 SKU 详情链接并作为采购单链接 filter 参数。 | - |
| `obj[][4]` | string | 采购员。 | - |
| `obj[][5]` | string | 销量级别（类型名称，对应入参 typename）。 | - |
| `obj[][6]` | string | 产品状态。 | - |
| `obj[][7]` | string | 开发员。 | - |
| `obj[][8]` | number | 待发货量。 | - |
| `obj[][9]` | number | 库存量。 | - |
| `obj[][10]` | number | 在途量。 | - |
| `obj[][11]` | string | 采购单打开标记，用于采购单列表链接的 openflag 参数。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
