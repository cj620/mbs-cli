<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-list

Payoneer账号列表查询：查询 Payoneer 合作伙伴账号列表：支持按邮箱、账号状态筛选并分页，返回账号基础信息(ID/合作伙伴ID/邮箱/姓名/电话/地址/状态/授权状态)及总数。

## 用法

```bash
mbs fars erp-finance-list [--email <string>] [--status <string>] [--currentPage <number>] [--pageSize <number>]
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/payoneer/account/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `email` | email | body | string | 否 | - | 邮箱(模糊查询关键词)；来源「邮箱」输入框，默认空 |
| `status` | status | body | string | 否 | - | 账号状态；枚举 Active/Pending/Inactive；默认 Active；来源「状态」下拉 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码；来源分页组件，默认 1 |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数；固定 100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的账号总数(前端赋值给分页 total) | - |
| `obj.result[]` | array | Payoneer 账号列表 | - |
| `obj.result[][0]` | string | 账号ID | - |
| `obj.result[][1]` | string | 合作伙伴ID | - |
| `obj.result[][2]` | string | 邮箱 | - |
| `obj.result[][3]` | string | 名字 | - |
| `obj.result[][4]` | string | 手机号 | - |
| `obj.result[][5]` | string | 邮编 | - |
| `obj.result[][6]` | string | 地址 | - |
| `obj.result[][7]` | string | 账号状态(取值 Active/Pending/Inactive) | - |
| `obj.result[][8]` | string | 授权状态 | - |
| `obj.result[][9]` | string | 授权时间 | - |
| `obj.result[][10]` | string | 备注 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
