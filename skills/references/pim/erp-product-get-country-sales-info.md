<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-country-sales-info

SKU国家销量统计查询：查询指定SKU近15天按国家维度的销量统计，用于SKU详情页 ECharts 横向柱状图「国家15天销量(单)」渲染。仅当商品 salesLevel 为超级爆款/爆A/爆B/旺A/旺B 时由 getProductInfoSku 成功回调触发调用。

## 用法

```bash
mbs pim erp-product-get-country-sales-info --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getCountrySalesInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号。来源：当前页面 URL 查询参数 SKU（GetQueryString('SKU')），拼接到接口 query string。无对应输入控件，由页面地址带入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口 success 回调未显式判断 code,为服务统一包装字段) | - |
| `desc` | string | 响应提示信息(服务统一包装字段,本接口未使用) | - |
| `obj[]` | array | 国家销量统计列表,前端遍历组装柱状图 y 轴(国家)与数据(销量) | - |
| `obj[][0]` | string | 国家名称(作为柱状图 y 轴类目,前端 product.push 后 reverse 倒序展示) | - |
| `obj[][1]` | number | 该国家近15天销量(单)(作为柱状图数据值,前端 numbers.push 后 reverse 倒序展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
