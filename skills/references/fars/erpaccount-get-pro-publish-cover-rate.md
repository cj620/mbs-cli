<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-pro-publish-cover-rate

正常在售产品刊登覆盖率查询：商品刊登覆盖率看板查询：按商品类目维度统计马帮老品/新品 SKU 数量，以及老品、新品在 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的铺货覆盖率（新品=30天内创建的 sku）。页面加载即自动调用，无请求参数。

## 用法

```bash
mbs fars erpaccount-get-pro-publish-cover-rate
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getProPublishCoverRate`
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
| `code` | number | 响应状态码,200=成功(框架统一包裹字段，本页未显式读取，待人工确认) | - |
| `desc` | string | 响应提示信息(框架统一包裹字段，本页未显式读取，待人工确认) | - |
| `obj[]` | array | 业务数据数组：各商品类目刊登覆盖率统计行(前端 var list = data.obj 后遍历) | - |
| `obj[][0]` | string | 商品类目名称 | - |
| `obj[][1]` | string | 大酋长(类目负责人) | - |
| `obj[][2]` | number | 马帮老品sku数 | - |
| `obj[][3]` | number | 马帮新品sku数(新品=30天内创建的sku) | - |
| `obj[][4]` | number | 老品sku铺货占比-EBAY(百分比数值,前端拼接%) | - |
| `obj[][5]` | number | 老品sku铺货占比-ALIEXPRESS(百分比数值,前端拼接%) | - |
| `obj[][6]` | number | 老品sku铺货占比-WISH(百分比数值,前端拼接%) | - |
| `obj[][7]` | number | 老品sku铺货占比-AMAZON(百分比数值,前端拼接%) | - |
| `obj[][8]` | number | 老品sku铺货占比-LAZADA(百分比数值,前端拼接%) | - |
| `obj[][9]` | number | 老品sku铺货占比-SHOPEE(百分比数值,前端拼接%) | - |
| `obj[][10]` | number | 新品sku铺货占比-EBAY(百分比数值,前端拼接%) | - |
| `obj[][11]` | number | 新品sku铺货占比-ALIEXPRESS(百分比数值,前端拼接%) | - |
| `obj[][12]` | number | 新品sku铺货占比-WISH(百分比数值,前端拼接%) | - |
| `obj[][13]` | number | 新品sku铺货占比-AMAZON(百分比数值,前端拼接%) | - |
| `obj[][14]` | number | 新品sku铺货占比-LAZADA(百分比数值,前端拼接%) | - |
| `obj[][15]` | number | 新品sku铺货占比-SHOPEE(百分比数值,前端拼接%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
