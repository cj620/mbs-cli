<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-finance-paypal-balance-list

PayPal账户(账户)列表查询：查询当前用户可用的 PayPal/收款账户列表，用于「日记账凭证」页面顶部账户筛选下拉框(#BalanceList)、创建凭证弹窗账户下拉(#addBalance)、编辑凭证弹窗账户下拉(#editBalance)的数据渲染。前端 financePaypalBalanceList() 在页面加载时调用，不传任何请求参数，返回账户数组(每项含账户ID与账户邮箱)。

## 用法

```bash
mbs fars erp-finance-finance-paypal-balance-list
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financePaypalBalance/financePaypalBalanceList`
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
| `code` | number | 响应状态码,200=成功(统一包装字段；本接口 success 回调未校验,参照同页其它接口) | - |
| `desc` | string | 响应提示信息(统一包装字段；本接口 success 回调未使用) | - |
| `obj[]` | array | 账户列表(模板 {{each obj value i}} 遍历的数据源) | - |
| `obj[][0]` | string | 账户ID(作为 <option value>，提交时即 accountJournalId/账户标识) | - |
| `obj[][1]` | string | 账户邮箱(作为 <option> 显示文本，即 PayPal/收款账户邮箱名) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
