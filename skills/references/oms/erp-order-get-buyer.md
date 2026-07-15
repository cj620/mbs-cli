# mbs oms erp-order-get-buyer

高级搜索-采购员下拉列表查询：订单列表页打开时调用，加载「高级搜索」中「采购员」筛选下拉框(#buyer)的全部可选项；返回当前用户可见的采购员名称列表，前端用 buyerTemplate 渲染为 option。所选采购员名称随订单列表查询(orderList)以 buyer 参数回传后端。

## 用法

```bash
mbs oms erp-order-get-buyer
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getBuyer`
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
| `desc` | string | 响应提示信息(非200时alert弹出) | - |
| `obj[]` | array | 采购员名称列表(下拉框数据源,模板each obj遍历) | - |
| `obj[]` | string | 采购员名称(数组元素,字符串;同时用作option的value与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
