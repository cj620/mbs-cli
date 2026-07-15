# mbs ars erp-report-get-today-push-team

平台刊登推送表查询：按平台与时间区间分页查询各平台今日刊登推送汇总数据，返回平台人数、人均/总推送量、第一轮新品（昨日提交）、24/72小时出单、推送覆盖率、单SPU推送次数、放弃率/放弃次数、推送失败SPU等运营监控指标。

## 用法

```bash
mbs ars erp-report-get-today-push-team --page <number> [--beginDateTime <string>] [--endDateTime <string>] [--platformName <string>] --limit <number>
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/todayPushTeam/getTodayPushTeam`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码，来源分页组件及搜索按钮，默认从1开始 |
| `beginDateTime` | beginDateTime | body | string | 否 | - | 开始时间，来源日期区间选择器 time[0]，格式 YYYY-MM-DD |
| `endDateTime` | endDateTime | body | string | 否 | - | 结束时间，来源日期区间选择器 time[1]，格式 YYYY-MM-DD |
| `platformName` | platformName | body | string | 否 | - | 平台名称，来源平台下拉框选项 platformlist[].platformname |
| `limit` | limit | body | number | 是 | - | 每页条数，前端固定传100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总记录数(前端赋给分页total) | - |
| `obj.data[]` | array | 平台刊登推送汇总列表 | - |
| `obj.data[][0]` | string | 时间(统计日期) | - |
| `obj.data[][1]` | string | 平台名称(同时用作推送逻辑说明书/规则匹配主键) | - |
| `obj.data[][2]` | number | 平台人数 | - |
| `obj.data[][3]` | number | 人均推送量 | - |
| `obj.data[][4]` | number | 总推送量(点击查看total明细) | - |
| `obj.data[][5]` | number | 昨日提交售卖(适用平台) | - |
| `obj.data[][6]` | number | 推送SPU合计(红色展示) | - |
| `obj.data[][7]` | number | 适用平台spu数量/第一轮新品(昨日提交);为0禁用点击,点击查看明细status=1 | - |
| `obj.data[][8]` | number | 24小时出单;为0禁用点击,点击查看明细status=24 | - |
| `obj.data[][9]` | number | 72小时出单;为0禁用点击,点击查看明细status=72 | - |
| `obj.data[][10]` | string | 推送覆盖率 | - |
| `obj.data[][11]` | number | 单SPU推送次数 | - |
| `obj.data[][12]` | string | 放弃率 | - |
| `obj.data[][13]` | number | 放弃次数 | - |
| `obj.data[][14]` | number | 昨日售卖推送失败spu数量;为0禁用点击,点击查看失败明细status=error | - |
| `obj.data[][15]` | string | 异常(推送失败)SPU集合,逗号拼接字符串,前端split(',')拆分展示 | - |
| `obj.data[][16]` | string | 行记录ID(组件tabledata接口声明字段) | - |
| `obj.data[][17]` | string | 说明书(组件tabledata接口声明字段,(待人工确认)是否由本接口返回) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
