# mbs pim erp-product-get-site-by-platform

按平台查询刊登站点(getSiteByPlatform)：根据所选主销平台查询该平台下已刊登过的站点列表。前端在平台下拉框 #kingPlatform 的 onchange 事件中调用，返回的站点字符串数组用于渲染‘刊登过的站点’下拉框 #siteslesct2（art-template 模板 sitemTempalte），供 SKU 列表查询按 site 参数过滤。

## 用法

```bash
mbs pim erp-product-get-site-by-platform [--platform <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSiteByPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | query | string | 否 | - | 主销平台名称，来源控件 #kingPlatform(select)，以 URL Query 传递；未选择时为空字符串。枚举为平台名称字符串(动态字典) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时错误描述) | - |
| `obj[]` | array | 该平台已刊登过的站点列表，元素为站点名称字符串，前端遍历渲染为 #siteslesct2 的 option(value 与文本同为站点名) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
