<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-over-two-days-unshipped-delivery

超2天未发货采购单详情查询：仪表盘下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，查询超过2天仍未发货的采购单(采购批次)详情列表，返回采购批次、供应商、SKU、采购员、待发货/库存/在途量等字段。

## 用法

```bash
mbs fars erpaccount-get-over-two-days-unshipped-delivery [--typename <string>] [--status <string>] [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getOverTwoDaysUnshippedDelivery`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 否 | - | 销量级别/类型名(取自页面URL参数 typeName，用于按销量级别筛选) |
| `status` | status | query | string | 否 | - | 产品状态(取自页面URL参数 status，按产品状态筛选) |
| `oper3` | oper3 | query | string | 否 | - | 开发员(取自页面URL参数 oper3；为空或 'undefined' 时前端置空串) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 超2天未发货采购单详情列表 | - |
| `obj[][0]` | string | 采购批次/采购组ID(渲染为采购批次链接 groupid 参数与显示文本) | - |
| `obj[][1]` | string | SKU(商品编码，渲染为SKU详情链接及采购单过滤条件) | - |
| `obj[][2]` | string | 供应商(阿里旺旺 uid / 供应商名称显示) | - |
| `obj[][3]` | string | 供应商链接地址(渲染为供应商名称超链接 href) | - |
| `obj[][4]` | string | 采购员 | - |
| `obj[][5]` | string | 销量级别(模板列“销量级别”) | - |
| `obj[][6]` | string | 产品状态 | - |
| `obj[][7]` | string | 开发员 | - |
| `obj[][8]` | number | 待发货量 | - |
| `obj[][9]` | number | 库存量 | - |
| `obj[][10]` | number | 在途量 | - |
| `obj[][11]` | string | 开放标记(渲染至采购明细链接 openflag 参数) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
