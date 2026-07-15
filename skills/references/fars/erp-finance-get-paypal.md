# mbs fars erp-finance-get-paypal

获取PayPal账号列表(下拉数据)：PayPal纠纷Case列表页初始化时调用，获取全部可筛选的PayPal账号及其对应Case数量，用于渲染页面顶部"请选择paypal账号"多选下拉框(#paypal)的选项。每个选项展示为 账号名称(数量)。该接口无请求参数。

## 用法

```bash
mbs fars erp-finance-get-paypal
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getPaypal`
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
| `code` | number | 响应状态码,200=成功（统一响应包装，本接口回调未校验）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应包装，本接口回调未校验）(待人工确认) | - |
| `obj[]` | array | PayPal账号列表（模板遍历的数据源） | - |
| `obj[][0]` | string | PayPal账号名称（作为下拉选项的 value 与显示文本） | - |
| `obj[][1]` | number | 该PayPal账号对应的Case数量（显示于账号名后括号内 name(num)） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
