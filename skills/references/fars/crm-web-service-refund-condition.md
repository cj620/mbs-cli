# mbs fars crm-web-service-refund-condition

订单退款条件查询（发起退款明细）：订单详情页点击“发起退款(send refund)”时调用，按订单ID查询该订单的可退款条件：退款币种、退款总额、可退款SKU明细及原始金额、可选退款理由列表，以及ERP/平台两侧的历史退款记录，用于回填发起退款弹窗。

## 用法

```bash
mbs fars crm-web-service-refund-condition --orderId <string>
```

## API

- Service: `crm-web-service`
- Method: `POST`
- Path: `/gateway/crm-web-service/cancelOrder/1/refundCondition`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | body | string | 是 | - | 订单ID（订单号）。来源 basedata.orderid，即页面URL参数 GetQueryString("orderid")，无对应输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `message` | string | 响应提示信息（失败时 ElMessage.error(data.message)） | - |
| `data` | object | 业务数据对象（退款条件） | - |
| `data.moneyType` | string | 退款币种类型，回填 sendRefundForm.moneyType，作为金额列币种展示 | - |
| `data.totalAmount` | number | 退款总金额（成功回调中解构，前端暂未直接渲染，保留字段） | - |
| `data.orderSkuList[]` | array | 可退款SKU明细列表，映射为 sendRefundForm.orderSkuList | - |
| `data.orderSkuList[][0]` | string | SKU编号 | - |
| `data.orderSkuList[][1]` | number | SKU原始金额，前端同时存为 _amount（原始金额列）并作为退款金额初值 | - |
| `data.refundReasonList[]` | array | 退款理由下拉选项列表，回填 refundReasonList | - |
| `data.refundReasonList[][0]` | string | 退款理由编码（下拉 value，即提交值 refundReason） | - |
| `data.refundReasonList[][1]` | string | 退款理由描述（下拉 label 显示为 description（reason）） | - |
| `data.erpRefundLogList[]` | array | ERP侧历史退款记录列表（为空时展示“无退款记录”） | - |
| `data.erpRefundLogList[][0]` | string | SKU编号 | - |
| `data.erpRefundLogList[][1]` | number | 退款金额 | - |
| `data.erpRefundLogList[][2]` | string | 退款币种 | - |
| `data.erpRefundLogList[][3]` | string | 退款日期 | - |
| `data.platformRefundLogList[]` | array | 平台侧历史退款记录列表（为空时展示“无退款记录”） | - |
| `data.platformRefundLogList[][0]` | string | SKU编号 | - |
| `data.platformRefundLogList[][1]` | number | 退款金额 | - |
| `data.platformRefundLogList[][2]` | string | 退款币种 | - |
| `data.platformRefundLogList[][3]` | string | 退款日期 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
