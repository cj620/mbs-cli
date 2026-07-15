<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-spu-country-sales-info

SPU国家销量信息查询（国家15天销量）：按 SPU 查询该商品近15天分国家的销量数据，前端用 ECharts 横向柱状图渲染「国家15天销量(单)」。返回为国家销量数组(country/countrySale)，按销量倒序展示；返回 obj 为 null 时隐藏图表容器 #contury12，并把 res.obj 写入 sessionStorage.resObjOne。

## 用法

```bash
mbs pim erp-product-get-spu-country-sales-info --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号。取自页面 URL 的 SPU 参数(GetQueryString('SPU'))，以 ?spu= 拼接到接口 URL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(本回调未判 code，与同文件其余 productDetails 接口同构)（待人工确认） | - |
| `desc` | string | 响应提示信息(本接口回调未使用)（待人工确认） | - |
| `obj[]` | array | 国家销量列表。为 null 时隐藏图表容器 #contury12；非 null 时遍历渲染。整体值另写入 sessionStorage.resObjOne | - |
| `obj[][0]` | string | 国家名称(柱状图 yAxis 类目，前端 reverse 后倒序展示) | - |
| `obj[][1]` | number | 该国家近15天销量(单)(柱状图 series 数值，前端 reverse 后倒序展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
