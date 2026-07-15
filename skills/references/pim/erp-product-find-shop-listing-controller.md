# mbs pim erp-product-find-shop-listing-controller

按平台查询店铺(findShop)：爆款listing页面('店铺'下拉联动)：根据所选平台(reserve11)查询该平台下的店铺列表，渲染到店铺下拉框(#shopId)。当未选择平台时传空 reserve11，查询全部店铺。

## 用法

```bash
mbs pim erp-product-find-shop-listing-controller [--reserve11 <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/listingController/findShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `reserve11` | reserve11 | body | string | 否 | - | 平台(平台ID)，取自下拉控件 $("#plaformId").val()。为空时查询全部平台下店铺。来源控件：平台选择框 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(系统统一返回结构) | - |
| `desc` | string | 响应提示信息(系统统一返回结构) | - |
| `obj[]` | array | 店铺列表(用于渲染店铺下拉) | - |
| `obj[][0]` | string | 店铺ID(作为 option value)。(待人工确认：contentTemplate2 模板未在本页内联定义) | - |
| `obj[][1]` | string | 店铺名称(作为 option 显示文本)。(待人工确认：contentTemplate2 模板未在本页内联定义) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
