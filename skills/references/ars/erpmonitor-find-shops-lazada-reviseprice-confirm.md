# mbs ars erpmonitor-find-shops-lazada-reviseprice-confirm

Lazada提价确认-店铺列表查询(findShops)：页面加载(getShopLi)时无条件拉取当前用户可见的Lazada提价确认店铺列表，返回结果渲染到筛选区“店铺”多选下拉(#checkShops)，供 getList/getList2 按 shopids 过滤提价记录。请求体固定为空对象。

## 用法

```bash
mbs ars erpmonitor-find-shops-lazada-reviseprice-confirm
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShops`
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
| `success` | boolean | 请求是否成功(前端 if (r.success) 判断,true 时才渲染店铺列表) | - |
| `obj[]` | array | 店铺列表(赋值给 pData.shopList,渲染到 #checkShops) | - |
| `obj[][0]` | string | 店铺ID(作为复选框 id,即筛选时的 checkShopId/shopids 值) | - |
| `obj[][1]` | string | 店铺名称(作为复选框 value 及展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
