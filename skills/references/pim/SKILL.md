# pim - 商品管理

通过 `mbs pim` 命令查询商品管理数据。

## 数据来源

- Service: `-`

## 适用场景

商品

## 意图匹配

关键词：商品

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 获取销售的中台排行数据：获取销售的中台排行数据 | `mbs pim instudio-pms-get-shop-manager-ranking-list` | - |
| 开发中台的列表数据：开发中台的列表数据 | `mbs pim instudio-pms-list` | - |

## 命令详情

- [instudio-pms-get-shop-manager-ranking-list.md](instudio-pms-get-shop-manager-ranking-list.md)
- [instudio-pms-list.md](instudio-pms-list.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
