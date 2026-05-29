# account - Account page query

通过 `mbs account` 命令查询Account page query数据。

## 数据来源

- Service: `account-center-service`

## 适用场景

Query account list by page and optional filters.

## 意图匹配

关键词：account / account page / account list

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| Page account list | `mbs account page` | - |

## 命令详情

- [page.md](page.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
