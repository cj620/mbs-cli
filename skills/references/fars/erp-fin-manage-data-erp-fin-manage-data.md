<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-fin-manage-data-erp-fin-manage-data

财务数据批量更新/核销（通用 updateRows）：前端通用助手 updateRows(url, search?, index) 向 /erpFinManageData/erpFinManageData 拼接子路径后 POST，对勾选行执行批量更新/核销；无 JSON 请求体，参数经 URL 子路径+查询串传递；成功(code==200)弹提示并回调 search 重查。

## 用法

```bash
mbs fars erp-fin-manage-data-erp-fin-manage-data --url <string> --subPath <string> --type <string> [--paymentIds <string>] [--sequeneIds <string>]
```

## API

- Service: `erpFinManageData`
- Method: `POST`
- Path: `/erpFinManageData/erpFinManageData`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `url` | url | query | string | 是 | - | 助手包装参：拼接到基地址后的子路径+查询串，由调用方构造（如 /Others/updateBillInfosBySequeneIds?type=3&sequeneIds=...） |
| `subPath` | subPath | query | string | 是 | - | URL 路径段，决定更新操作：/Others/updatePayByPaymentIds、/Others/updateBillInfosBySequeneIds、/Others/updateHisBySequeneIds |
| `type` | type | query | string | 是 | - | 操作类型标识，更新/核销类调用点固定传 3 |
| `paymentIds` | paymentIds | query | string | 否 | - | 付款单ID列表，英文逗号拼接；仅 /Others/updatePayByPaymentIds 使用；来源勾选行 paymentId 去重；与 sequeneIds 互斥 |
| `sequeneIds` | sequeneIds | query | string | 否 | - | 账单序列ID列表(sequecneId)，英文逗号拼接；用于 updateBillInfosBySequeneIds/updateHisBySequeneIds；来源勾选行 CheckedRows；与 paymentIds 互斥 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=更新成功（弹更新成功并重查），非200=更新失败 | - |
| `desc` | string | 响应提示信息（标准包络，本调用链未消费）(待人工确认) | - |
| `obj` | object | 业务数据对象（标准包络，本调用链未消费）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
