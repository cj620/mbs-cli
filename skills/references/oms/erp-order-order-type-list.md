# mbs oms erp-order-order-type-list

订单类型列表查询：获取全部订单类型名称列表，用于订单列表页顶部筛选区 #ordertype 下拉框选项渲染。前端页面加载时(IIFE)调用一次，返回的字符串数组逐项渲染为 <option>，选中值随订单列表查询(orderList)以 ordertype 参数提交。

## 用法

```bash
mbs oms erp-order-order-type-list
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/orderTypeList`
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
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 订单类型名称列表(字符串数组),前端用于渲染#ordertype下拉选项 | - |
| `obj[]` | string | 数组元素:单个订单类型名称,前端同时用作<option>的value与显示文本(具体可选值由后端数据决定,待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
