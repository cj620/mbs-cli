<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms crm-web-service-get-ebay-mail-notice

获取eBay未回复邮件提醒：拉取当前登录客服/员工需要处理的 eBay 未回复邮件汇总，按邮件主题聚合返回每个主题下的未回复邮件数量，前端在仪表盘右侧以 ElNotification 弹窗提醒；data 为空对象时不弹窗。配套确认已读按钮调用 removeEbayMailNotice。

## 用法

```bash
mbs pms crm-web-service-get-ebay-mail-notice
```

## API

- Service: `crm-web-service`
- Method: `POST`
- Path: `/gateway/crm-web-service/notice/getEbayMailNotice`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `data` | object | 业务数据对象：eBay 未回复邮件按主题聚合的键值映射；为空对象时前端不弹窗并返回 null | - |
| `data.{邮件主题}` | number | 动态字段：键为 eBay 邮件主题文本(如 'Your listing has been removed'/'我們已向你發放款項')，值为该主题下需处理的未回复邮件数量(个)；主题运行期动态生成，字段名不固定 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
