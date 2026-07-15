<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-auto-create-order

自动创建(自建)订单列表查询：订单看板「自动创建/自建订单」Tab的分页列表查询：按店长、店铺过滤，分页返回自建订单列表（订单编号、状态、店铺/客户、原币与RMB金额、国家、下单与拉单时间、运费、交易单号、是否低利润、备注等）。参数以URL查询串传递，无请求体。

## 用法

```bash
mbs oms erp-order-find-auto-create-order [--currPage <number>] [--shopid <string>] [--shopManager <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码（来源：分页控件 .buildM-box 回调 api.getCurrent()；首屏不传，翻页携带） |
| `shopid` | shopid | query | string | 否 | - | 店铺ID（来源：店铺下拉框 #shopName4；空串=不限店铺） |
| `shopManager` | shopManager | query | string | 否 | - | 店长（来源：店长下拉框 #saleLeader4；空串=不限店长） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（无数据时为空，前端置 total=0） | - |
| `obj.total` | number | 满足条件的订单总数（写入 #buildtotal/#buildspan） | - |
| `obj.pages` | number | 总页数（传入 buildPaging() 初始化分页 pageCount） | - |
| `obj.list[]` | array | 自建订单列表 | - |
| `obj.list[][0]` | string | 订单编号（行主键；用于详情链接、复选框 value、展开明细 data-id） | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | string | 店铺名称（展示为 店铺名(店长)） | - |
| `obj.list[][3]` | string | 店长（与店铺名同格展示） | - |
| `obj.list[][4]` | string | 客户ID | - |
| `obj.list[][5]` | string | 原币种（与原币金额同行展示） | - |
| `obj.list[][6]` | number | 原币订单金额 | - |
| `obj.list[][7]` | number | 订单金额（RMB） | - |
| `obj.list[][8]` | string | 客户国家（中文） | - |
| `obj.list[][9]` | string | 客户国家（英文） | - |
| `obj.list[][10]` | string | 订单日期 | - |
| `obj.list[][11]` | string | 拉单(创建订单)时间 | - |
| `obj.list[][12]` | number | 运费 | - |
| `obj.list[][13]` | string | 交易单号 | - |
| `obj.list[][14]` | number | 是否低利润订单。1=是（订单号标红，并显示「标记完成」按钮 markFailedOrderCompleted）；其它=否 | - |
| `obj.list[][15]` | string | 订单备注（存在时单独成行展示 订单备注:xxx） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
