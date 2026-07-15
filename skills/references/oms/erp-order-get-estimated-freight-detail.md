<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-estimated-freight-detail

预估运费明细查询：销售报表-预估运费明细分页查询：根据父页面透传的查询条件(params)、统计日期(currentdate)与页码(page)，分页返回订单的预估运费明细列表(订单号/店铺号/预估运费/店长/时间)及总条数、总页数。

## 用法

```bash
mbs oms erp-order-get-estimated-freight-detail --currentdate <string> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getEstimatedFreightDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentdate` | currentdate | body | string | 是 | - | 统计日期。来源：URL 查询参数 oneDay，补写为 params.currentdate |
| `page` | page | body | number | 是 | - | 当前页码。初次查询固定为 1；翻页时取分页控件 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时前端 alert(desc) 并中断 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的明细总条数(渲染到“共 N 条”) | - |
| `obj.countPage` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.resultOrder[]` | array | 预估运费明细列表 | - |
| `obj.resultOrder[][0]` | string | 订单编号(同时作为编辑链接 /eshop/order.do?method=edit&orderid= 参数) | - |
| `obj.resultOrder[][1]` | string | 店铺号 | - |
| `obj.resultOrder[][2]` | number | 预估运费 | - |
| `obj.resultOrder[][3]` | string | 店长 | - |
| `obj.resultOrder[][4]` | string | 时间(展示列“时间”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
