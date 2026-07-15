# mbs fars erp-finance-get-paypal-case-constant

获取PayPal纠纷承运商常量(TRACK_NAME)：PayPal纠纷详情页加载时调用，获取"提供跟踪信息"时可选择的承运商(物流商)常量列表。URL中 TRACK_NAME 为固定常量类型标识。返回承运商列表渲染为 #paypalConstant 下拉框选项，供提交跟踪信息时填入 carrierName。无请求体参数。

## 用法

```bash
mbs fars erp-finance-get-paypal-case-constant
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/TRACK_NAME/getPaypalCaseConstant`
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
| `desc` | string | 响应提示信息(失败时 alert 展示) | - |
| `obj[]` | array | 承运商(物流)常量列表，渲染为下拉框选项 | - |
| `obj[][0]` | string | 承运商常量值/代码，作为 option value，提交时填入 carrierName；取值 OTHER 时触发添加其他承包商弹窗 | - |
| `obj[][1]` | string | 承运商名称(下拉选项显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
