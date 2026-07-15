# mbs ars erpmonitor-income-and-expend-details

账户收支明细汇总查询：账户对账监控：按交易时间区间与账号(邮箱)查询各账号的收入/支出/余额汇总，返回账号、开户平台、币种、收入金额、支出金额、当前余额列表，供页面表格展示并提供「查看明细」跳转。

## 用法

```bash
mbs ars erpmonitor-income-and-expend-details --startTime <string> --endTime <string> [--email <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/incomeAndExpendDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | query | string | 是 | - | 交易时间-起始(统计起始日期，格式 yyyy-MM-dd)。来源控件 #startTime(type=date)，默认值为当前日期的前一天 |
| `endTime` | endTime | query | string | 是 | - | 交易时间-结束(统计结束日期，格式 yyyy-MM-dd)。来源控件 #endTime(type=date)，默认值为当前日期的前一天 |
| `email` | email | query | string | 否 | - | 账号(账户邮箱)。来源控件 #findAccount(账号下拉 select)；未选择时传空串，表示查询全部账号 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准 envelope，前端本调用未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准 envelope，前端本调用未直接读取)(待人工确认) | - |
| `obj[]` | array | 业务数据对象-账户收支汇总列表(前端遍历 data.obj 渲染表格) | - |
| `obj[][0]` | string | 账号(账户邮箱)。表格「账号」列，并用于明细链接 query | - |
| `obj[][1]` | string | 开户平台(账户类型)。表格「开户平台」列 | - |
| `obj[][2]` | string | 币种。表格「币种」列，并用于明细链接 query | - |
| `obj[][3]` | number | 收入金额。表格「收入金额」列 | - |
| `obj[][4]` | number | 支出金额。表格「支出金额」列；前端 Math.abs(expend) 取绝对值后展示 | - |
| `obj[][5]` | number | 当前余额。表格「当前余额」列 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
