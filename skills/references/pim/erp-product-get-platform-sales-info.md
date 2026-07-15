<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-platform-sales-info

SKU平台销量查询(平台15天销量)：SKU详情页查询该SKU各销售平台近15天销量，返回 平台名称 + 平台销量 列表，前端用 ECharts 横向柱状图渲染「平台15天销量(单)」。

## 用法

```bash
mbs pim erp-product-get-platform-sales-info --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPlatformSalesInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编码（查询串拼接 ?sku=+SKU，取自当前页面 URL 的 SKU 参数；定位要查询平台销量的具体SKU） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一返回包装字段，本接口回调未显式校验） | - |
| `desc` | string | 响应提示信息（统一返回包装字段） | - |
| `obj[]` | array | 平台销量列表，前端遍历渲染柱状图 | - |
| `obj[][0]` | string | 销售平台名称（作为柱状图 y 轴类目，前端会反序展示） | - |
| `obj[][1]` | number | 该平台近15天销量(单)（作为柱状图数值，前端会反序展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
