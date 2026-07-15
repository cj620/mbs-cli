<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-sku-suffix

按发货仓库后缀查询收货仓库：创建海外仓SKU弹窗中，根据选中的发货仓库后缀 skuSuffix 查询对应的收货仓库列表，用于填充收货仓库多选下拉，前端默认全选所有 receivingWarehouseId。

## 用法

```bash
mbs pim erp-product-sku-suffix
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getReceivingWarehouseId/{skuSuffix}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuSuffix` | skuSuffix | path | string | 是 | - | 发货仓库后缀（路径参数）。取自 overseaForm.skuSuffix，由所选发货仓库 warehouseCN 经 setSkuSuffix 赋值，用于定位对应收货仓库集合。来源控件：创建海外仓SKU弹窗发货仓库下拉。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功。true 时取 obj，false 时弹出 desc 错误提示。 | - |
| `desc` | string | 响应提示信息（失败原因，前端 ElMessage 展示）。 | - |
| `obj[]` | array | 收货仓库列表（成功时赋给 receivingWarehouseOptions）。 | - |
| `obj[][0]` | string | 收货仓库ID（下拉 value/key，前端默认全选并用于后续 storageIdF 等提交）。 | - |
| `obj[][1]` | string | 收货仓库名称（下拉 label 显示文案）。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
