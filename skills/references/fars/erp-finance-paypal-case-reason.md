<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-paypal-case-reason

PayPal Case 原因列表查询：查询 PayPal 纠纷案件（Case）的全部「原因」枚举项，用于 PayPal Case 列表页顶部「请选择原因」多选下拉框的渲染。无请求参数，页面加载时调用一次，返回原因值/名称数组供用户多选筛选。

## 用法

```bash
mbs fars erp-finance-paypal-case-reason
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/paypalCaseReason`
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
| `code` | number | 响应状态码,200=成功(系统统一外层包装字段) | - |
| `desc` | string | 响应提示信息(系统统一外层包装字段) | - |
| `obj[]` | array | PayPal Case 原因枚举列表(模板 each obj 遍历渲染下拉项) | - |
| `obj[][0]` | string | 原因取值/编码,作为 option value,被选中后作为列表查询接口 reasonList 参数提交 | - |
| `obj[][1]` | string | 原因名称(显示文本,作为下拉项可见文字) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
