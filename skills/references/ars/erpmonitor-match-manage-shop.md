# mbs ars erpmonitor-match-manage-shop

匹配可管理店铺列表查询：进入批量下架/添加货架页面(addShelf.html)时自动调用，查询当前用户可管理的店铺列表，用于渲染顶部店铺下拉选择框(#ShopName)。无任何请求入参，返回店铺数组，前端模板仅使用店铺名称 shopName 作为下拉项的 value 与显示文本。

## 用法

```bash
mbs ars erpmonitor-match-manage-shop
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ReviseListingMonitor/matchManageShop`
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
| `obj[]` | array | 可管理店铺列表(模板 {{each obj}} 遍历的数据源) | - |
| `obj[]` | string | 店铺名称(同时作为下拉项 <option> 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
