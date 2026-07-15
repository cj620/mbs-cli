# mbs pms center-message-service-read

公告通知-标记已读：用户在首页公告弹窗中点击「确认已读」按钮时调用，按公告ID将当前公告标记为已读；以 GET 方式携带 noticeId 查询参数请求，前端调用后仅关闭弹窗、不消费返回体。

## 用法

```bash
mbs pms center-message-service-read --noticeId <string>
```

## API

- Service: `center-message-service`
- Method: `GET`
- Path: `/gateway/center-message-service/message/notice/read`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `noticeId` | noticeId | query | string | 是 | - | 公告(通知)ID，标识需标记为已读的公告；点击「确认已读」时程序传入当前弹窗公告ID(noticeData.id)，该值来源于 getById 接口返回的 result.data.id；拼接于 URL 查询串 ?noticeId= 之后 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(依同服务 queryNoticePage/getById 惯例推断)(待人工确认) | - |
| `data` | object | 业务数据对象/操作结果(read 接口是否返回数据体未知,前端未使用)(待人工确认) | - |
| `msg` | string | 提示信息(字段名及是否存在未知)(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
