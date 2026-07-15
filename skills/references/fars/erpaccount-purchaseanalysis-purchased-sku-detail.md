# mbs fars erpaccount-purchaseanalysis-purchased-sku-detail

已采购的SKU明细查询：采购分析看板「已采购的SKU」下钻明细：根据销量级别(typename)、状态(status)、开发员(oper3)三个查询条件，查询对应分组下的已采购SKU列表，返回 SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。

## 用法

```bash
mbs fars erpaccount-purchaseanalysis-purchased-sku-detail --typename <string> [--status <string>] [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/purchaseanalysisPurchasedSkuDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 是 | - | 销量级别/类型名称。来源当前页面URL参数typename(GetQueryString('typename'))，为接口主查询条件。枚举随采购分析看板分组而定(待人工确认)。 |
| `status` | status | query | string | 否 | - | 状态(采购/库存状态)。来源当前页面URL参数status(GetQueryString('status'))。枚举待人工确认。 |
| `oper3` | oper3 | query | string | 否 | - | 开发员。来源当前页面URL参数oper3(GetQueryString('oper3'))；为空或'undefined'时前端置为空串''。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 已采购SKU明细列表(模板据其遍历渲染表格行；为空/不存在则不渲染数据行) | - |
| `obj[][0]` | string | SKU编号(表格列「sku」，并作为链接跳转/product/SKUdetails.html?SKU={sku}) | - |
| `obj[][1]` | string | 销量级别(表格列「销量级别」，与查询参数typename对应) | - |
| `obj[][2]` | string | 状态(表格列「状态」) | - |
| `obj[][3]` | number | 缺货量(表格列「缺货量」) | - |
| `obj[][4]` | number | 在途量(表格列「在途量」，已采购在途数量) | - |
| `obj[][5]` | string | 开发员(表格列「开发员」) | - |
| `obj[][6]` | string | 采购员(表格列「采购员」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
