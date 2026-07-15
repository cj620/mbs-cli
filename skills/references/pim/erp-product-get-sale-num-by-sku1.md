<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sale-num-by-sku1

按SKU查询备货额度统计(getSaleNumBySku1)：批量备货页中，按 SKU 与所选备货规则(stockUpID)查询该 SKU 当日全员已提交数量、平台申请备货最大值、平台申请备货额度，用于行内提示展示。

## 用法

```bash
mbs pim erp-product-get-sale-num-by-sku1 --sku <string> --stockUpID <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getSaleNumBySku1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | 商品SKU编码(来源导入明细行 item.sku / 表格行 row.sku) |
| `stockUpID` | stockUpID | body | string | 是 | - | 备货规则ID(applyForStockUpRule 规则记录ID，来源 entryObject.id / 命中规则 obj.id) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `today` | number | 当日全员提交数(该SKU当日累计已提交备货数量) | - |
| `max` | number | 平台申请备货最大值 | - |
| `platform` | number | 平台申请备货额度 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
