# mbs orders list

查询订单列表

## 用法

```bash
mbs orders list [--status <string>] [--limit <integer>]
```

## API

- Method: `GET`
- Path: `/v1/orders`
- Manifest hash: `86039d68d81f134f663cee899251e9b43d384ddcb190570a5c2f8e3b6f0fb3b2`

## 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|
| `status` | string | 否 | - | 订单状态 |
| `limit` | integer | 否 | 20 | 返回数量 |

## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
