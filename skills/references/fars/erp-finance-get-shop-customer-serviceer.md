<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-shop-customer-serviceer

获取客服信息（店铺客服列表）：进入 PayPal 纠纷(Case)列表页时调用，拉取全部「店铺客服(客服服务员)」名称列表，用于渲染页面顶部「客服」多选下拉框(#shopCustomer)的可选项；用户选中的客服作为 shopCustomerServiceerList 参与 Case 列表查询及店铺联动查询。

## 用法

```bash
mbs fars erp-finance-get-shop-customer-serviceer
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getShopCustomerServiceer`
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
| `code` | number | 响应状态码，200=成功（同页统一约定，待人工确认是否本接口亦回传） | - |
| `desc` | string | 响应提示信息（同页统一约定，待人工确认是否本接口亦回传） | - |
| `obj[]` | array | 客服(客服服务员)名称列表，数组元素为字符串 | - |
| `obj[]` | string | 单个客服(客服服务员)名称；模板中作为 #shopCustomer 下拉项的 value 与展示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
