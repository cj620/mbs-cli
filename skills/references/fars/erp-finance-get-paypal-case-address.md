# mbs fars erp-finance-get-paypal-case-address

获取PayPal纠纷退货地址列表：PayPal纠纷(Case)处理详情页加载时调用，拉取当前账号可用的退货地址列表，用于退货并部分退款(PART_REFUND_RETURN)、退货并全额退款(FULL_REFUND_RETURN)的退货地址下拉选择(.refundAddress)。无请求参数，返回地址列表(每项含地址主键 sid 与地址展示内容 content)。

## 用法

```bash
mbs fars erp-finance-get-paypal-case-address
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getPaypalCaseAddress`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（失败时弹窗展示） | - |
| `obj[]` | array | 退货地址列表（用于渲染退货地址下拉选项） | - |
| `obj[][0]` | string | 地址主键/ID（作为 option value，被选中后作为退货地址值 refundAddress 提交给 createPaypalCaseTask） | - |
| `obj[][1]` | string | 地址展示内容（下拉选项显示文本，即拼接后的完整退货地址描述） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
