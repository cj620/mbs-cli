# mbs oms erp-order-get-add-shippingfee-by-one-day

某日补差运费(getAddShippingfeeByOneDay)明细查询：查询某一天(oneDay)的订单补差运费明细：以上一页传入的报表筛选条件(URL params)为基础，叠加统计日 oneDay、分页参数，分页返回订单编号、店铺号、补差运费、店长等明细行，并返回总页数用于分页。

## 用法

```bash
mbs oms erp-order-get-add-shippingfee-by-one-day [--oneDay <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getAddShippingfeeByOneDay`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oneDay` | oneDay | body | string | 否 | - | 统计日(某一天)。来源：URL query oneDay，由 GetQueryString('oneDay') 取得后写入 params.oneDay |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。来源：前端固定写死 100 |
| `page` | page | body | number | 是 | - | 当前页码。来源：search(index) 入参，默认 1，分页回调传入当前页 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非 200 时 alert(desc) 并中止 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.result[]` | array | 补差运费明细行列表(模板 {{each obj.result}} 遍历) | - |
| `obj.result[][0]` | string | 订单编号(渲染为编辑订单链接 /eshop/order.do?method=edit&orderid=...) | - |
| `obj.result[][1]` | string | 店铺号 | - |
| `obj.result[][2]` | number | 补差运费 | - |
| `obj.result[][3]` | string | 店长 | - |
| `obj.countPage` | number | 总页数(分页组件 pageCount) | - |
| `obj.page` | number | 当前页码(分页组件 current) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
