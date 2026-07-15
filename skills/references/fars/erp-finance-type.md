# mbs fars erp-finance-type

PayPal纠纷案件处理意见列表查询：在 PayPal 纠纷案件详情页加载处理意见(建议)列表：以路径方式传入案件编号 caseId 与查询类型 2，返回该案件下全部处理意见记录(含处理意见内容、提交人/时间、状态、完成人、驳回原因等)，前端用 suggestTemplate 渲染到 #suggestContent 表格。

## 用法

```bash
mbs fars erp-finance-type
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getpaypalCaseSuggest/{caseId}/{type}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `caseId` | caseId | path | string | 是 | - | PayPal纠纷事件编号(案件ID)，来源浏览器地址栏 query caseId，拼接为第一个路径段 |
| `type` | type | path | string | 是 | - | 查询类型/视角标识，前端固定传 2(硬编码)；其余取值含义待人工确认 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该案件下的处理意见(建议)记录列表 | - |
| `obj[][0]` | string | 纠纷ID号(案件编号) | - |
| `obj[][1]` | string | 处理意见内容(客服/财务填写的建议正文) | - |
| `obj[][2]` | string | 提交时间 | - |
| `obj[][3]` | string | 提交人 | - |
| `obj[][4]` | number | 处理状态枚举。0=未完成;1=标完成;2=驳回;3=等待执行;4=执行中;5=执行失败;6=执行成功(前端转中文展示) | - |
| `obj[][5]` | string | 完成人 | - |
| `obj[][6]` | string | 驳回/失败原因 | - |
| `obj[][7]` | string | 意见记录主键ID,用于标完成/驳回操作(取自 finishPaypal/rejectionPaypal 的 obj.sid) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
