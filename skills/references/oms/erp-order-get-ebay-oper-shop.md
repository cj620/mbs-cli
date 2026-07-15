# mbs oms erp-order-get-ebay-oper-shop

获取eBay店铺/店长/国家下拉数据：eBay店铺SPK发货比例报表页初始化时调用，一次性返回当前用户可见的店铺列表、店铺负责人(店长)列表、国家列表，用于填充页面顶部「--店铺--」「--店铺负责人--」「--国家--」三个多选下拉框。

## 用法

```bash
mbs oms erp-order-get-ebay-oper-shop
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayShopSpkRate/getEbayOperShop`
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
| `code` | number | 响应状态码（标准响应包装；本回调未直接引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准响应包装；本回调未直接引用）(待人工确认) | - |
| `obj` | object | 业务数据对象（success 回调直接取 data.obj） | - |
| `obj.shopList[]` | array | 店铺列表（填充「--店铺--」下拉框） | - |
| `obj.shopList[][0]` | string | 店铺ID（作为 option 的 value） | - |
| `obj.shopList[][1]` | string | 店铺名称（作为 option 显示文本） | - |
| `obj.operList[]` | array | 店铺负责人(店长)列表（填充「--店铺负责人--」下拉框） | - |
| `obj.operList[]` | string | 店铺负责人姓名（作为 option 的 value 与显示文本） | - |
| `obj.countryList[]` | array | 国家列表（填充「--国家--」下拉框；元素为国家字符串） | - |
| `obj.countryList[]` | string | 国家名称（数组元素本身即字符串，作为 option 的 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
