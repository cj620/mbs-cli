# orders - 订单查询

通过 `mbs orders` 命令查询订单查询数据。

## 适用场景

运营查询订单状态、订单列表和订单明细。

## 意图匹配

关键词：订单 / orders / order status

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 查询订单列表 | `mbs orders list` | - |

## 命令详情

- [list.md](list.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
