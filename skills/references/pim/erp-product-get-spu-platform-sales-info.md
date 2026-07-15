# mbs pim erp-product-get-spu-platform-sales-info

SPU平台30天销量信息查询：商品详情「spu销售量趋势图」页面右侧「平台30天销量(单)」柱状图数据源：按 SPU 查询该商品近30天(可按 month 月份偏移)各平台/店铺的销量(订单数)，前端用 ECharts 横向柱状图渲染。

## 用法

```bash
mbs pim erp-product-get-spu-platform-sales-info --spu <string> [--month <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSpuPlatformSalesInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号。来源：页面 URL 查询串，GetQueryString('spu') |
| `month` | month | body | number | 否 | - | 月份偏移量(0=当前月，每点上一月+1)。来源：页面全局变量 month，控件为上一月/下一月翻页按钮。注：指定 URL ?spu= 的原始注释写法未拼接 month (待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一包裹,本函数未直接判断) | - |
| `desc` | string | 响应提示信息(平台统一包裹) | - |
| `obj[]` | array | 平台销量数据列表;为 null 时前端隐藏平台销量子图 | - |
| `obj[][0]` | string | 平台/店铺名称(渲染为柱状图 y 轴类目) | - |
| `obj[][1]` | number | 该平台近30天销量/订单数(渲染为柱状图数值,单位:单) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
