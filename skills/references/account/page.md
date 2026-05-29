# mbs account page

Page account list

## 用法

```bash
mbs account page [--currentPage <integer>] [--pageSize <integer>] [--id <integer>] [--code <string>] [--busCode <string>] [--status <integer>] [--account <string>] [--platform <string>] [--hostType <integer>] [--email <string>] [--phone <string>] [--accountType <string>] [--passwordUpdateTime <array>] [--hasExpired <boolean>] [--incorrect <integer>] [--enabled <boolean>] [--groupCompanyId <integer>]
```

## API

- Service: `account-center-service`
- Method: `POST`
- Path: `/gateway/account-center-service/account/page/noauth`
- Schema version: `1`
- Manifest version: `2026-05-28T00:00:00+08:00`
- Manifest hash: `0288660e19ac6780f7e17ea7cf6dbba582d931f13fc7926fe3ff6f26ae1e4148`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | integer | 否 | - | Current page |
| `pageSize` | pageSize | body | integer | 否 | - | Page size |
| `id` | id | body | integer | 否 | - | Account ID |
| `code` | code | body | string | 否 | - | Account code |
| `busCode` | busCode | body | string | 否 | - | Business code |
| `status` | status | body | integer | 否 | - | Account status |
| `account` | account | body | string | 否 | - | Account name |
| `platform` | platform | body | string | 否 | - | Platform |
| `hostType` | hostType | body | integer | 否 | - | Host type |
| `email` | email | body | string | 否 | - | Email |
| `phone` | phone | body | string | 否 | - | Phone |
| `accountType` | accountType | body | string | 否 | - | Account type |
| `passwordUpdateTime` | passwordUpdateTime | body | array | 否 | - | Password update time range |
| `hasExpired` | hasExpired | body | boolean | 否 | - | Password expired |
| `incorrect` | incorrect | body | integer | 否 | - | Incorrect flag |
| `enabled` | enabled | body | boolean | 否 | - | Enabled |
| `groupCompanyId` | groupCompanyId | body | integer | 否 | - | Company ID |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
