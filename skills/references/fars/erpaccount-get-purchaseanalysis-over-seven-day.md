# mbs fars erpaccount-get-purchaseanalysis-over-seven-day

超7天采购单详情查询：看板「超7天采购单」明细下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，返回超7天未到货采购单明细列表(采购批次/供应商/SKU/采购员/销量级别/产品状态/开发员/待发货量/库存量/在途量)。

## 用法

```bash
mbs fars erpaccount-get-purchaseanalysis-over-seven-day [--typename <string>] [--status <string>] [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getPurchaseanalysisOverSevenDay`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 否 | - | 销量级别。值来自前端页面URL参数 typeName(拼接到后端键名为小写 typename)；可为空 |
| `status` | status | query | string | 否 | - | 产品状态。值来自前端页面URL参数 status；可为空 |
| `oper3` | oper3 | query | string | 否 | - | 开发员。值来自前端页面URL参数 oper3；为空或 undefined 时前端置为空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 超7天采购单明细列表(前端 data.obj 遍历渲染) | - |
| `obj[][0]` | string | 采购批次(采购组ID)；用于跳转采购单列表链接 groupid | - |
| `obj[][1]` | string | 供应商(供应商名称/旺旺UID，用于阿里旺旺洽谈链接) | - |
| `obj[][2]` | string | 供应商链接地址(预留字段1，作为供应商超链接 href) | - |
| `obj[][3]` | string | SKU 编号；用于采购单筛选与SKU详情跳转 | - |
| `obj[][4]` | string | 采购员 | - |
| `obj[][5]` | string | 销量级别 | - |
| `obj[][6]` | string | 产品状态 | - |
| `obj[][7]` | string | 开发员 | - |
| `obj[][8]` | number | 待发货量 | - |
| `obj[][9]` | number | 库存量 | - |
| `obj[][10]` | number | 在途量 | - |
| `obj[][11]` | string | 采购单打开标记(拼接到采购单列表链接 openflag) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
