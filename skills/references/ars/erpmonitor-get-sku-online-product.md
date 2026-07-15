# mbs ars erpmonitor-get-sku-online-product

SPU在线商品SKU明细查询：在“已上架商品数量统计”页面点击某平台SPU行的展开箭头时触发，按平台SPU ID + 平台 + 统计日期查询该SPU下的在线子SKU明细（平台子SKU、胤元SKU、售价、库存、尺寸/颜色），渲染为SPU下的子表格。

## 用法

```bash
mbs ars erpmonitor-get-sku-online-product --spuId <string> [--platformId <string>] [--analysisCreatedOn <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getSkuOnlineProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spuId` | spuId | query | string | 是 | - | 平台SPU ID。来源=表格行展开箭头控件 onclick="getSkuOnlineProduct({{value.spuId}})"（列表接口返回行的 spuId），用于查询该SPU下的子SKU明细 |
| `platformId` | platformId | query | string | 否 | - | 平台ID。来源=页面URL query 参数 platformId（GetQueryString("platformId")) |
| `analysisCreatedOn` | analysisCreatedOn | query | string | 否 | - | 统计/分析生成日期。来源=页面URL query 参数 analysisCreatedOn，经 decodeURI 解码后提交 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 业务数据：该SPU下的在线子SKU明细列表（前端 eval(data.obj) 解析为数组后遍历渲染） | - |
| `obj[][0]` | string | 平台子SKU编号（渲染于“平台子SKU”列） | - |
| `obj[][1]` | string | 胤元SKU编号（渲染于“胤元SKU”列） | - |
| `obj[][2]` | string | 商品售价（渲染于“商品售价”列） | - |
| `obj[][3]` | string | 库存数量（渲染于“库存”列） | - |
| `obj[][4]` | string | SKU尺寸；与 skuColor 逗号拼接后展示于“SKU属性”列 | - |
| `obj[][5]` | string | SKU颜色；与 skuSize 逗号拼接后展示于“SKU属性”列 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
