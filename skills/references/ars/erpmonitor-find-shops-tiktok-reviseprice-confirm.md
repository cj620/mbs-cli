# mbs ars erpmonitor-find-shops-tiktok-reviseprice-confirm

TikTok提价-店铺列表查询（findShops）：TikTok改价（提价确认）页面查询店铺列表：按关键词(店铺名)与站点过滤，返回店铺名称/店铺ID列表；供搜索店铺名下拉(select2)、Element Plus 店铺多选框及选择店铺弹层复选列表使用；无参调用则返回全部店铺。

## 用法

```bash
mbs ars erpmonitor-find-shops-tiktok-reviseprice-confirm [--keyword <string>] [--site <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/findShops`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `keyword` | keyword | body | string | 否 | - | 店铺名搜索关键词。来源：Vue getShopNameList(query) 的入参 / select2 输入框 params.term；getAllShopList() 不传此参数(查全部) |
| `site` | site | body | string | 否 | - | 站点(多选逗号拼接)。来源：站点选择器 .site-select 的选中值 join(',')；getAllShopList() 不传此参数 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(searchShopList/getShopNameList 分支使用；getAllShopList 改用 success) | - |
| `success` | boolean | 请求是否成功(getAllShopList 成功回调 if (r.success) 判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 店铺列表 | - |
| `obj[][0]` | string | 店铺名称(下拉 label/value、复选框 value、select2 text/id 均取此字段) | - |
| `obj[][1]` | string | 店铺ID(checkShopTemplate 中作为复选框 id；仅 getAllShopList 用到) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
