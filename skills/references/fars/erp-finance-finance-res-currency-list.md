# mbs fars erp-finance-finance-res-currency-list

币种(资源币种)列表查询：日记账凭证页面初始化时获取全部资源币种列表，用于渲染「币种」筛选下拉、创建凭证弹窗(addCurrency)与编辑凭证弹窗(editCurrency)的币种选择框。接口无请求参数，直接返回币种数组。

## 用法

```bash
mbs fars erp-finance-finance-res-currency-list
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financeResCurrency/financeResCurrencyList`
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
| `code` | number | 响应状态码,200=成功(系统统一包裹,本页模板未引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(系统统一包裹,本页模板未引用)(待人工确认) | - |
| `obj[]` | array | 币种列表(模板遍历的数据源) | - |
| `obj[][0]` | string | 资源币种ID(作为下拉 option 的 value,选中后用于提交) | - |
| `obj[][1]` | string | 币种名称(作为下拉 option 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
