# mbs oms erp-order-get-order-log

订单操作日志分页查询：订单详情页右侧操作日志时间轴分页查询：按订单号查询该订单的操作日志，返回当前页码、总页数及日志列表(操作员、部门、日志描述、操作时间、星期)。前端按相邻同一操作员(oper)合并分组渲染。

## 用法

```bash
mbs oms erp-order-get-order-log --orderid <string> --page <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getOrderLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单号。来源 basedata.orderid = GetQueryString("orderid")，即页面 URL 上的 orderid |
| `page` | page | query | number | 是 | - | 当前页码。来源 getlog(index) 入参，首次加载取 URL 的 page(缺省为1)，翻页时取 pagenum |
| `pageSize` | pageSize | query | number | 是 | - | 每页条数。前端固定传 20 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准信封) | - |
| `desc` | string | 响应提示信息(标准信封) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.page` | number | 当前页码(前端赋值 basedata.pagenum = obj.page) | - |
| `obj.countPage` | number | 总页数(前端赋值 basedata.pages = obj.countPage，用于翻页边界判断) | - |
| `obj.result[]` | array | 操作日志列表 | - |
| `obj.result[][0]` | string | 操作员(值为'sys'时显示系统图标；前端按相邻同一 oper 合并分组) | - |
| `obj.result[][1]` | string | 操作员所属部门名称。枚举展示:'市场部'→购物袋图标,'物流部'→货车图标,其它→礼物图标(有值时在操作员后括号展示) | - |
| `obj.result[][2]` | string | 日志描述内容(该条操作的具体说明文本) | - |
| `obj.result[][3]` | string | 操作时间(时间轴展示,并作为 v-for 的 :key) | - |
| `obj.result[][4]` | string | 操作时间对应星期(如「星期一」,展示于操作时间右侧) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
