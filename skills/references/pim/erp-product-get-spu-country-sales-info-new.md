<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-spu-country-sales-info-new

SPU国家30天销量查询(New)：按SPU与月份偏移量查询该SPU近30天分国家的销量，返回各国家及其销量列表，前端用于"国家30天销量(单)"横向条形图(echarts)展示。

## 用法

```bash
mbs pim erp-product-get-spu-country-sales-info-new --spu <string> --month <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfoNew`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号。来源：页面URL查询参数，经 GetQueryString('spu') 读取。 |
| `month` | month | body | number | 是 | - | 月份偏移量。0=当前月；点击上一月自增、下一月自减。来源：页面全局变量 month(初始0)。单位：月。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(框架统一返回字段，本页未直接读取，200=成功) | - |
| `desc` | string | 响应提示信息(框架统一返回字段，本页未直接读取) | - |
| `obj[]` | array | 国家销量列表；为 null 时前端隐藏国家销量图表容器(#contury12) | - |
| `obj[][0]` | string | 国家(名称/代码)，作为条形图Y轴类目 | - |
| `obj[][1]` | number | 该国家近30天销量(单)，作为条形图柱值。单位：单(笔) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
