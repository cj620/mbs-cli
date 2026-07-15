# mbs oms erp-order-find-refund-order

退包(退款)订单列表查询：仪表盘「退包订单」页签的列表查询：按店铺(shopid)、店长(shopManager)、页码(currPage)过滤，返回退款/退包订单分页列表，并返回 total/pages 供分页。参数以 URL Query 传递，无请求体。

## 用法

```bash
mbs oms erp-order-find-refund-order [--shopid <string>] [--shopManager <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findRefundOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopid` | shopid | query | string | 否 | - | 店铺ID。来源店铺下拉#shopName5；URL固定带?shopid=,未选为空串 |
| `shopManager` | shopManager | query | string | 否 | - | 店长。来源店长下拉#saleLeader5 |
| `currPage` | currPage | query | number | 否 | - | 当前页码。来源分页控件.returnM-box;首次查询不传,翻页时传,每页10条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `obj` | object | 业务数据对象(无数据时可能为null) | - |
| `obj.total` | number | 退包订单总条数 | - |
| `obj.pages` | number | 总页数(前端分页用) | - |
| `obj.list[]` | array | 退包订单列表 | - |
| `obj.list[][0]` | string | 订单编号(主键,跳转订单详情,行checkbox value) | - |
| `obj.list[][1]` | string | 物流单号(运单号;值为'null'时不展示) | - |
| `obj.list[][2]` | string | 回复状态 | - |
| `obj.list[][3]` | string | 平台交易单号 | - |
| `obj.list[][4]` | string | 重发状态(值为已重发时标红) | - |
| `obj.list[][5]` | string | 退款状态 | - |
| `obj.list[][6]` | string | SKU处理结果 | - |
| `obj.list[][7]` | string | 退款来源 | - |
| `obj.list[][8]` | string | 订单状态 | - |
| `obj.list[][9]` | string | 订单属性 | - |
| `obj.list[][10]` | string | 店铺名称 | - |
| `obj.list[][11]` | string | 责任人(重发时作oper判断,为空占位) | - |
| `obj.list[][12]` | string | 店长 | - |
| `obj.list[][13]` | number | 订单金额 | - |
| `obj.list[][14]` | number | 运费(快递费) | - |
| `obj.list[][15]` | number | 总成本价 | - |
| `obj.list[][16]` | number | 总运费 | - |
| `obj.list[][17]` | string | 下单时间 | - |
| `obj.list[][18]` | string | 拉单(创建)时间 | - |
| `obj.list[][19]` | string | 创建人 | - |
| `obj.list[][20]` | number | 延迟天数 | - |
| `obj.list[][21]` | string | 订单备注(存在时单独展示一行) | - |
| `obj.list[][22]` | number | 订单序号ID(replayOrder使用) | - |
| `obj.list[][23]` | string | 退回标记(replayOrder重发参数returnflag) | - |
| `obj.list[][24]` | string | 重发标识(replayOrder判断:'1'=已重发过,禁止再次重发) | - |
| `obj.list[][25]` | string | 原始下单时间(replayOrder重发参数ortime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
