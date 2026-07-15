# mbs scm erp-manufacture-batch-sku-list

客户订单-批量SKU明细列表查询：客户详情页订单列表点击行展开（第二层）时，按订单批量SKU(batchSku)查询其下属 SKU 明细列表，返回每个 SKU 的图片、编号、名称、商品属性、销量等级、近7/30/90天销量、库存、在途、开发员及开发时间，用于渲染子表 twoContentTemplate。

## 用法

```bash
mbs scm erp-manufacture-batch-sku-list --batchSku <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/batchSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `batchSku` | batchSku | body | string | 是 | - | 批量SKU编号（订单行的 batchSku）。来源：被点击行 data-id 属性，作为查询参数拼接到 URL；用于查询该批量SKU下的 SKU 明细列表。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | SKU 明细列表（data.obj 直接为数组，前端赋值 result = data.obj 渲染） | - |
| `obj[][0]` | string | 商品图片URL（img src，加载失败回退默认图） | - |
| `obj[][1]` | string | SKU 编号（用于链接 /product/SKUdetails.html?SKU={sid} 并展示） | - |
| `obj[][2]` | string | 商品名称 | - |
| `obj[][3]` | string | 商品属性 | - |
| `obj[][4]` | string | 销量等级（有值时以红色标签展示，无值不显示） | - |
| `obj[][5]` | number | 近7天销量 | - |
| `obj[][6]` | number | 近30天销量 | - |
| `obj[][7]` | number | 近90天销量 | - |
| `obj[][8]` | number | 库存数量 | - |
| `obj[][9]` | number | 在途数量（采购在途） | - |
| `obj[][10]` | string | 开发员 | - |
| `obj[][11]` | string | 开发(创建)时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
