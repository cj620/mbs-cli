<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-today-push-shuo-ming-shu

平台推送说明书(推送逻辑)查询：「平台刊登推送表」页面初始化时拉取各平台的推送逻辑/说明书内容列表；用于查看气泡展示与编辑弹窗回显。POST 无请求体。

## 用法

```bash
mbs ars erp-report-get-today-push-shuo-ming-shu
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/todayPushTeam/getTodayPushShuoMingShu`
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
| `code` | number | 响应状态码,200=成功（标准响应包裹字段，本调用未显式校验）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准响应包裹字段）(待人工确认) | - |
| `obj[]` | array | 业务数据：各平台推送逻辑/说明书列表（前端赋值给 RulesList） | - |
| `obj[][0]` | string | 平台名称（主键标识；前端以 item.id == platformName 匹配定位说明书） | - |
| `obj[][1]` | string | 推送逻辑/说明书正文内容（查看气泡 pre-wrap 展示；编辑弹窗 textarea 回显） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
