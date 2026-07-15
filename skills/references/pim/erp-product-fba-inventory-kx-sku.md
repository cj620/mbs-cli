# mbs pim erp-product-fba-inventory-kx-sku

FBA库存可销SKU明细查询：FBA库存可销(KX)报表的行下钻接口：点击「店铺负责人」行展开时，按该负责人(shopManager)查询其名下各SKU在各月份/周期的可销(kx)数据，返回 SKU + 周期可销数组，渲染到该行的子表格。

## 用法

```bash
mbs pim erp-product-fba-inventory-kx-sku --sale <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/fbaProduct/fbaInventoryKxSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sale` | sale | body | string | 是 | - | 店铺负责人(店铺管理者)，来源 FBA库存可销报表行 data-shopmanger(=item.shopManager)，以 query 形式传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.result[]` | array | SKU 可销明细列表 | - |
| `obj.result[][0]` | string | SKU 编号(渲染为链接跳转 /product/SKUdetails.html?SKU={sku}) | - |
| `obj.result[][1][]` | array | 各月份/周期可销数据数组(列与报表表头 monthArr 对应) | - |
| `obj.result[][1][]` | string | 可销数据值(库存可销量/可销天数，逐周期展示;具体计量口径待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
