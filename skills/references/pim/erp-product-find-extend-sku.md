<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-extend-sku

查询SKU扩展记录(数量)：订单详情页加载销售产品列表后，对每个产品SKU调用本接口，查询该SKU是否已存在扩展SKU记录并返回其数量。前端据返回值是否为0，结合产品热度类型(旺A/爆A/爆B/超级爆款)与毛利(maoli<0)，决定是否显示扩展任务按钮。

## 用法

```bash
mbs pim erp-product-find-extend-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/findExtendSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU(产品编号)，来源 data.obj.list[i].productid，以 query string ?sku= 拼接在URL上 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `data` | number | 该SKU的扩展SKU记录数量/标识。0=无扩展记录(满足热度与毛利条件时显示扩展任务按钮)，非0=已存在扩展记录。响应体为单一标量值，无对象键名 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
