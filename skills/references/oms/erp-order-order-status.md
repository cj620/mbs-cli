# mbs oms erp-order-order-status

订单状态下拉项查询：查询订单状态枚举列表，用于订单列表页左上“订单状态”筛选下拉框（#orderStatus）的初始化渲染。无请求参数，返回订单状态字符串数组，前端逐项渲染为 <option>，选中值作为 search() 提交的 status 字段。

## 用法

```bash
mbs oms erp-order-order-status
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/orderStatus`
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
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj[]` | array | 订单状态项列表(模板each遍历) | - |
| `obj[]` | string | 订单状态名称,作为option的value与显示文本(待发货/新订单/配货中/作废/海外仓已支付/海外仓配货中等),选中后作为search()的status提交 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
