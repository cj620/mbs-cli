# mbs oms erp-order-show-ebay-shops

eBay店铺账期-查询店铺下拉列表：eBay 账期费用报表页(ebayRecking)进入时调用，查询当前登录用户可见的 eBay 店铺列表，用于渲染「店铺名」下拉框。POST 无请求体；返回 obj 为店铺数组，每项含 shopId 与 shopName。

## 用法

```bash
mbs oms erp-order-show-ebay-shops
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayAccountFee/showEbayShops`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(统一返回包字段,本页未使用,字段名待人工确认) | - |
| `obj[]` | array | eBay 店铺列表(前端赋值给 list 渲染店铺下拉框) | - |
| `obj[][0]` | string | 店铺ID(渲染为 option 的 value) | - |
| `obj[][1]` | string | 店铺名称(渲染为 option 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
