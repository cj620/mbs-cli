# mbs oms erp-order-ordersource

订单属性(订单来源)下拉数据查询：订单列表页初始化时调用，加载"订单属性/订单来源"下拉选择框的全部可选项。请求无入参，返回字符串数组 obj，前端通过 art-template ordersourceTemplate 渲染为 <select id="ordersource"> 的 <option>，所选值后续作为 ordersource 参数提交到订单列表查询接口 /erpOrder/erpOrder/orderNew/orderList。

## 用法

```bash
mbs oms erp-order-ordersource
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/ordersource`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时alert弹出) | - |
| `obj[]` | array | 订单属性/订单来源选项列表(字符串数组),渲染下拉框#ordersource | - |
| `obj[]` | string | 单个订单属性/订单来源名称,直接作为option的value与显示文本(具体枚举由后端返回,待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
