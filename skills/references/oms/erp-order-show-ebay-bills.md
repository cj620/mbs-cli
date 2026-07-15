# mbs oms erp-order-show-ebay-bills

eBay账期(账单周期)列表查询：eBay账户费用对账页面初始化时调用，查询当前可选的eBay账单账期(账单周期)列表。返回值为账期字符串数组，前端用于渲染“选择账期”下拉框选项，并默认选中第一个账期后触发账单明细查询(search())。

## 用法

```bash
mbs oms erp-order-show-ebay-bills
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayAccountFee/showEbayBills`
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
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 账期(账单周期)列表，字符串数组；前端遍历渲染“选择账期”下拉框，list[0]作为默认选中账期 | - |
| `obj[]` | string | 单个账期(账单周期)字符串，作为下拉选项的value与显示文本(如账单期间标识，具体格式待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
