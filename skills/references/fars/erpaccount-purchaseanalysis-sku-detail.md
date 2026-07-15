<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-purchaseanalysis-sku-detail

未采购SKU明细查询：财务域 Dashboard「未采购的SKU」明细查询：按销量级别(typename)、状态(status)、开发员(oper3)三项条件查询未采购SKU列表，返回SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。

## 用法

```bash
mbs fars erpaccount-purchaseanalysis-sku-detail [--typename <string>] [--status <string>] [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/purchaseanalysisSkuDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 否 | - | 销量级别（由页面URL query typename 透传） |
| `status` | status | query | string | 否 | - | 状态（由页面URL query status 透传） |
| `oper3` | oper3 | query | string | 否 | - | 开发员（由页面URL query oper3 透传；取值为空或 'undefined' 时置为空串） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 未采购SKU明细列表（模板遍历渲染） | - |
| `obj[][0]` | string | SKU编号（渲染为SKU详情链接） | - |
| `obj[][1]` | string | 销量级别 | - |
| `obj[][2]` | string | 状态 | - |
| `obj[][3]` | number | 缺货量 | - |
| `obj[][4]` | number | 在途量 | - |
| `obj[][5]` | string | 开发员 | - |
| `obj[][6]` | string | 采购员 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
