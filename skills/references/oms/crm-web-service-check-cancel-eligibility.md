# mbs oms crm-web-service-check-cancel-eligibility

校验订单取消资格(checkCancelEligibility)：订单详情页点击「取消订单」时调用：根据订单ID校验该订单是否满足取消条件，并返回可选的取消理由列表(cancelReasonList)，用于取消订单弹窗中的「取消理由」下拉。code!=200 时弹出 message 错误提示并中断。

## 用法

```bash
mbs oms crm-web-service-check-cancel-eligibility --orderId <string>
```

## API

- Service: `crm-web-service`
- Method: `POST`
- Path: `/gateway/crm-web-service/cancelOrder/1/checkCancelEligibility`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 订单ID。取自页面URL查询参数 orderid(GetQueryString("orderid") → basedata.orderid)，用于定位待取消订单 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=校验通过(可取消)；非200=不可取消，前端弹出 message | - |
| `message` | string | 提示信息，code!=200 时由前端 ElMessage.error 展示 | - |
| `data` | object | 业务数据对象(校验通过时返回) | - |
| `data.cancelReasonList[]` | array | 取消理由列表，用于取消订单弹窗「取消理由」下拉选项 | - |
| `data.cancelReasonList[][0]` | string | 取消理由编码/值，作为下拉 value 与 key，提交时写入 cancelOrderForm.cancelReason | - |
| `data.cancelReasonList[][1]` | string | 取消理由中文描述，下拉 label 显示为 description(reason) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
