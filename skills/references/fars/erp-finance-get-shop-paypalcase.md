<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-get-shop-paypalcase

获取店铺信息(按店长/客服筛选)：PayPal纠纷案件列表页(paypalcaseList)的店铺下拉框联动数据源。根据已选择的店长(shopManager)与客服(shopCustomer)多选条件，查询对应店铺名称列表，用于渲染店铺多选下拉(#shopName)。页面加载时、以及店长/客服选择变化(onchange=getShop())时触发。

## 用法

```bash
mbs fars erp-finance-get-shop-paypalcase [--shopManagerList <array>] [--shopCustomerServiceerList <array>]
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManagerList` | shopManagerList | body | array | 否 | - | 店长列表。取自店长多选下拉 #shopManager 的 .val()，为已选店长名称字符串数组 |
| `shopCustomerServiceerList` | shopCustomerServiceerList | body | array | 否 | - | 客服列表。取自客服多选下拉 #shopCustomer 的 .val()，为已选客服名称字符串数组(字段名以源码拼写 shopCustomerServiceerList 为准) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 店铺名称列表(模板遍历对象)，元素为店铺名称字符串 | - |
| `obj[]` | string | 单个店铺名称(直接作为下拉 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
