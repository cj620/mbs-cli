# mbs oms erp-order-get-last-order-log

获取订单最新操作日志：进入订单详情页时调用，根据订单ID查询并返回该订单的最近一条操作日志（已是后端拼接好的文本/HTML片段），前端直接渲染到详情页头部 #lastOrderLog 区域展示。

## 用法

```bash
mbs oms erp-order-get-last-order-log --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getLastOrderLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID/订单编号，来源页面URL查询参数(GetQueryString('orderid'))，拼接到接口URL查询串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时alert展示) | - |
| `obj` | string | 订单最新操作日志内容(后端拼接好的文本/HTML片段),前端直接.html()渲染到#lastOrderLog | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
