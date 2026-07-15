# mbs oms erp-order-find-logistics-by-order-id

订单物流轨迹查询(按订单ID)：在"投递失败订单"列表行操作菜单点击"查看轨迹"时调用，按订单编号 orderId 查询该订单的物流轨迹明细，返回一组(时间+状态描述)记录，前端拼接为多行文本后 alert 展示，无数据时提示"无"。

## 用法

```bash
mbs oms erp-order-find-logistics-by-order-id --orderId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findLogisticsByOrderId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 订单编号(订单ID)，来源为投递失败订单列表行数据 v.orderId |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(失败时 alert 展示) | - |
| `obj[]` | array | 物流轨迹列表 | - |
| `obj[][0]` | string | 物流轨迹时间(日期/时间，前端拼接展示) | - |
| `obj[][1]` | string | 物流状态描述(前端拼接展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
