# account - 账号分页查询

通过 `mbs account` 命令查询账号分页查询数据。

## 数据来源

- Service: `account-center-service`
- Path prefix: `/gateway/account-center-service/account`

## 适用场景

按账号编码、业务编码、状态、邮箱、手机号等条件分页查询账号列表。

## 意图匹配

关键词：账号 / account / 分页 / 列表

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 分页获取账号列表 | `mbs account page` | - |

## 命令详情

- [page.md](page.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
