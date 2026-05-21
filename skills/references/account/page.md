# mbs account page

分页获取账号列表

## 用法

```bash
mbs account page [--currentPage <integer>] [--pageSize <integer>] [--id <integer>] [--code <string>] [--busCode <string>] [--status <integer>] [--account <string>] [--platform <string>] [--hostType <integer>] [--email <string>] [--phone <string>] [--accountType <string>] [--passwordUpdateTime <array>] [--hasExpired <boolean>] [--incorrect <integer>] [--enabled <boolean>] [--groupCompanyId <integer>]
```

## API

- Service: `account-center-service`
- Method: `POST`
- Path: `/gateway/account-center-service/account/page/noauth`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `b3d662d3fbc018cb27f3c1ade691de44162de8bba57d768fa96e99c18bf97bd4`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | integer | 否 | - | 当前页 |
| `pageSize` | pageSize | body | integer | 否 | - | 每页大小 |
| `id` | id | body | integer | 否 | - | 账号ID |
| `code` | code | body | string | 否 | - | 账号编码 |
| `busCode` | busCode | body | string | 否 | - | 业务编码 |
| `status` | status | body | integer | 否 | - | 账号状态 |
| `account` | account | body | string | 否 | - | 账号 |
| `platform` | platform | body | string | 否 | - | 平台 |
| `hostType` | hostType | body | integer | 否 | - | 托管方式 |
| `email` | email | body | string | 否 | - | 邮箱 |
| `phone` | phone | body | string | 否 | - | 手机号 |
| `accountType` | accountType | body | string | 否 | - | 账号类型 |
| `passwordUpdateTime` | passwordUpdateTime | body | array | 否 | - | 密码修改时间区间 |
| `hasExpired` | hasExpired | body | boolean | 否 | - | 密码是否过期 |
| `incorrect` | incorrect | body | integer | 否 | - | 是否错误 |
| `enabled` | enabled | body | boolean | 否 | - | 是否启用 |
| `groupCompanyId` | groupCompanyId | body | integer | 否 | - | 公司ID |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 响应状态码 | - |
| `message` | string | 响应消息 | - |
| `data` | object | 分页结果 | - |
| `data.total` | integer | 总条数 | - |
| `data.totalPage` | integer | 总页数 | - |
| `data.currentPage` | integer | 当前页 | - |
| `data.pageSize` | integer | 每页大小 | - |
| `data.items[]` | array | 账号列表 | - |
| `data.items[].id` | integer | 账号ID | - |
| `data.items[].code` | string | 账号编码 | - |
| `data.items[].busCode` | string | 业务编码 | - |
| `data.items[].status` | integer | 账号状态 | - |
| `data.items[].statusStr` | string | 账号状态文案 | - |
| `data.items[].account` | string | 账号 | - |
| `data.items[].platform` | string | 平台 | - |
| `data.items[].hostType` | integer | 托管方式 | - |
| `data.items[].hostTypeStr` | string | 托管方式文案 | - |
| `data.items[].email` | string | 邮箱 | - |
| `data.items[].phone` | string | 手机号 | - |
| `data.items[].accountType` | string | 账号类型 | - |
| `data.items[].accountTypeStr` | string | 账号类型文案 | - |
| `data.items[].platformLoginUrl` | string | 平台登录地址 | - |
| `data.items[].passwordChangeUrl` | string | 修改密码地址 | - |
| `data.items[].customField` | string | 自定义字段 | - |
| `data.items[].passwordUpdateTime` | string | 密码修改时间 | - |
| `data.items[].hasExpired` | boolean | 密码是否过期 | - |
| `data.items[].incorrect` | integer | 是否错误 | - |
| `data.items[].createBy` | string | 创建人 | - |
| `data.items[].createTime` | string | 创建时间 | - |
| `data.items[].updateBy` | string | 修改人 | - |
| `data.items[].updateTime` | string | 修改时间 | - |
| `data.items[].enabled` | boolean | 是否启用 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
