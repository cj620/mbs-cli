# mbs orders list

查询订单列表

## 用法

```bash
mbs orders list [--status <string>] [--limit <integer>]
```

## API

- Method: `GET`
- Path: `/v1/orders`
- Schema version: `1`
- Manifest version: `2026-05-20T13:30:00+08:00`
- Manifest hash: `de473bfb3db122622d5a6c6445e5d2e6d505d0770c52c340821bcedfc8d00032`

## 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|
| `status` | string | 否 | - | 订单状态 |
| `limit` | integer | 否 | 20 | 返回数量 |

## 响应字段

- 响应类型：`array`
- 说明：订单列表

| 字段 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `orderId` | string | 订单 ID | 可用于后续查询订单详情 |
| `status` | string | 订单状态 | - |
| `createdAt` | string | 创建时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
