<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms center-message-service-query-notice-page

通知公告分页查询：站内通知公告分页查询。页面加载后调用，拉取当前用户的通知列表（默认只查未读），前端取列表第一条 records[0].id，再调用 getById 拉取详情并弹窗提醒。

## 用法

```bash
mbs pms center-message-service-query-notice-page --currentPage <number> --pageSize <number> --readStatus <boolean>
```

## API

- Service: `center-message-service`
- Method: `POST`
- Path: `/gateway/center-message-service/message/notice/queryNoticePage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（前端固定传 1） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定传 10） |
| `readStatus` | readStatus | body | boolean | 是 | - | 已读状态过滤。false=只查未读通知（前端固定传 false） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端据此判断成功） | - |
| `data` | object | 业务数据对象（分页结果） | - |
| `data.records[]` | array | 通知列表；前端读取 records.length 并取 records[0] | - |
| `data.records[]` | string | 通知ID；前端取 records[0].id 用于调用 notice/getById 拉取通知详情 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
