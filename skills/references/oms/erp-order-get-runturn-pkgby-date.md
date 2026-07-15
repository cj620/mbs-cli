<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-runturn-pkgby-date

退包(退货报表)按日期查询：退货报表页(马帮ERP)按日期统计退包数据：接收上级页面通过 URL params 透传的筛选条件 JSON，叠加单日标记、分页参数后分页查询，返回订单退包列表(订单编号/店铺/店长/退包收入/订单金额)及分页汇总。

## 用法

```bash
mbs oms erp-order-get-runturn-pkgby-date [--oneDay <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getRunturnPKGByDate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oneDay` | oneDay | body | string | 否 | - | 单日标记，取自 URL oneDay 查询串(GetQueryString('oneDay'))，写入 params.oneDay 一并提交 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定写死为 100 |
| `page` | page | body | number | 是 | - | 当前页码，search(index) 传入则取 index，否则默认 1(分页回调传入当前页) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(非200时前端 alert(desc) 并中断) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.result[]` | array | 订单退包列表 | - |
| `obj.result[][0]` | string | 订单编号(渲染为可点击链接 /eshop/order.do?method=edit&orderid=...) | - |
| `obj.result[][1]` | string | 店铺(店铺类型/名称) | - |
| `obj.result[][2]` | string | 店长 | - |
| `obj.result[][3]` | number | 退包收入(成本价) | - |
| `obj.result[][4]` | number | 订单金额(订单总额) | - |
| `obj.countPage` | number | 总页数(分页组件 pageCount) | - |
| `obj.page` | number | 当前页码(分页组件 current) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
