# mbs pim erp-product-get-spu-sales-status

SPU各平台销售状况查询：在SPU管理列表的“毛利率”单元格鼠标悬浮时触发，按SKU查询该商品在各销售平台的销售额、毛利、退款、广告费汇总，渲染为气泡内的平台明细表格。

## 用法

```bash
mbs pim erp-product-get-spu-sales-status --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getSpuSalesStatus`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号(取自毛利率单元格 data-sid,即列表当前行SKU),作为 query 参数随URL拼接传入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 各平台销售状况列表 | - |
| `obj[][0]` | string | 平台名称(表格“平台”列) | - |
| `obj[][1]` | number | 销售额(表格“销售额”列) | - |
| `obj[][2]` | number | 毛利(表格“毛利”列) | - |
| `obj[][3]` | number | 退款(表格“退款”列) | - |
| `obj[][4]` | number | 广告费(表格“广告费”列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
