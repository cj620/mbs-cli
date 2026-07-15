<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-find-shops-ebay-reviseprice-confirm

eBay提价确认-店铺下拉列表查询：eBay提价确认页面初始化时加载当前用户可见的店铺列表，用于店铺单选下拉框(#selectShop)与多选店铺勾选框(#ulallchk)的数据源。请求体为空JSON对象，无入参；返回店铺集合，逐项含店铺ID与店铺名称。

## 用法

```bash
mbs ars erpmonitor-find-shops-ebay-reviseprice-confirm
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ebayRevisepriceConfirm/findShops`
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
| `success` | boolean | 请求是否成功,true 时前端才渲染店铺下拉/多选 | - |
| `obj[]` | array | 店铺列表(赋值给 pData.shopList) | - |
| `obj[][0]` | string | 店铺ID(单选下拉 #selectShop 的 option value) | - |
| `obj[][1]` | string | 店铺名称(下拉显示文本;多选勾选框 checkbox value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
