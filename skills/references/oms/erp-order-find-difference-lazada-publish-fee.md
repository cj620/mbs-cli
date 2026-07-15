<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-difference-lazada-publish-fee

Lazada刊登费差异(站内费用)列表查询：查询Lazada刊登费差异(站内RMB费用)对账列表：按费用时间区间分页查询，返回订单/交易编号、店铺、店长、站内RMB费用、费用时间等明细及总条数、总页数，用于差异费用核对展示。

## 用法

```bash
mbs oms erp-order-find-difference-lazada-publish-fee --pageSize <number> --page <number> [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifferenceLazadaPublishFee`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定=50) |
| `page` | page | body | number | 是 | - | 当前页码(首次查询=1，翻页取分页控件当前页) |
| `startTime` | startTime | body | string | 否 | - | 费用时间-起始(格式YYYY-MM-DD 00:00:00，来源URL参数oneDay或startTime，无则不传) |
| `endTime` | endTime | body | string | 否 | - | 费用时间-结束(格式YYYY-MM-DD 23:59:59，来源URL参数oneDay或endTime，无则不传) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200弹出desc) | - |
| `desc` | string | 响应提示信息(失败时提示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(前端渲染至#total) | - |
| `obj.countPage` | number | 总页数(前端传入分页控件pageCount) | - |
| `obj.billResult[]` | array | 费用明细列表 | - |
| `obj.billResult[][0]` | string | 订单编号/交易编号(渲染为订单编辑链接) | - |
| `obj.billResult[][1]` | string | 店铺名称 | - |
| `obj.billResult[][2]` | string | 店长 | - |
| `obj.billResult[][3]` | string | 站内RMB费用(人民币金额) | - |
| `obj.billResult[][4]` | string | 费用时间(支付时间) | - |
| `obj.billResult[][5]` | string | 原始费用(模板中注释，当前未展示) | - |
| `obj.billResult[][6]` | string | 费项说明(模板中注释，当前未展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
